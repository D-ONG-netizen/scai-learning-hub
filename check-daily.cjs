const fs = require("fs");
const path = require("path");
const vm = require("vm");
const assert = require("assert");
const { chromium } = require("C:/Users/DYH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core");

const ROOT = __dirname;
const BASE = process.env.DAILY_BASE || "file:///" + path.join(ROOT, "daily.html").replace(/\\/g, "/");

function loadWindow(file) {
  const context = { window: {} };
  vm.createContext(context);
  new vm.Script(fs.readFileSync(path.join(ROOT, file), "utf8"), { filename: file }).runInContext(context);
  return context.window;
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function dateKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function addDays(key, count) {
  const [year, month, day] = key.split("-").map(Number);
  const date = new Date(year, month - 1, day, 12, 0, 0, 0);
  date.setDate(date.getDate() + count);
  return dateKey(date);
}

function buildUnits(ielts, target, minWords, maxWords) {
  const units = [];
  for (const chapter of ielts.chapters.filter(item => Number(item.number) >= Number(ielts.startChapter || 6))) {
    const words = chapter.words || [];
    let parts = Math.max(1, Math.round(words.length / target));
    while (parts > 1 && words.length / parts < minWords) parts -= 1;
    while (words.length / parts > maxWords) parts += 1;
    let cursor = 0;
    for (let part = 1; part <= parts; part += 1) {
      const size = Math.ceil((words.length - cursor) / (parts - part + 1));
      units.push({
        chapter: chapter.number,
        words: words.slice(cursor, cursor + size)
      });
      cursor += size;
    }
  }
  return units;
}

const ielts = loadWindow("data-ielts.js").SCAI_IELTS_WORDS;
const daily = loadWindow("data-daily.js").SCAI_DAILY;
const pat = loadWindow("data-pat.js").SCAI_PAT;
const allWords = ielts.chapters
  .filter(chapter => Number(chapter.number) >= Number(ielts.startChapter || 6))
  .flatMap(chapter => chapter.words || []);
const wordIds = allWords.map(word => word.id);
assert.strictEqual(allWords.length, 2399, "expected Chapter 6-22 word count");
assert.strictEqual(new Set(wordIds).size, allWords.length, "word IDs must be unique");

const units = buildUnits(
  ielts,
  daily.meta.targetWordsPerDay || daily.meta.newWordsPerDay,
  daily.meta.minWordsPerDay,
  daily.meta.maxWordsPerDay
);
const chapter6Units = units.filter(unit => unit.chapter === 6);
assert.deepStrictEqual(chapter6Units.map(unit => unit.words.length), [49, 49], "Chapter 6 should become two 49-word units");
assert(units.every(unit => {
  const chapters = new Set(unit.words.map(word => word.chapter));
  return chapters.size === 1;
}), "a daily unit must not mix chapters");
assert(units.every(unit => unit.words.length >= daily.meta.minWordsPerDay && unit.words.length <= daily.meta.maxWordsPerDay), "unit size outside 30-60");

const listening = daily.listening.items;
assert.strictEqual(listening.length, 192, "listening sequence must contain 192 sections");
assert.strictEqual(listening[0].label, "剑桥雅思 10 · Test 1 · Section 1");
assert.strictEqual(listening[191].label, "剑桥雅思 21 · Test 4 · Section 4");
listening.forEach((item, index) => assert.strictEqual(item.order, index + 1, "listening order mismatch"));

const programmingTasks = daily.programming.phases.flatMap(phase => phase.tasks);
assert.strictEqual(programmingTasks.length, 56, "programming sequence must contain 56 tasks");
for (let day = 1; day <= 56; day += 1) {
  assert(daily.programming.phases.some(phase => day >= phase.days[0] && day <= phase.days[1]), `programming day ${day} is not covered`);
}
assert.strictEqual(pat.totalProblems, 223, "PAT plan must contain all 223 problems");
assert.strictEqual(pat.totalDays, 56, "PAT plan must contain 56 days");
assert.strictEqual(pat.days.length, 56, "PAT day groups mismatch");
assert.strictEqual(new Set(pat.problems.map(problem => problem.id)).size, 223, "PAT problem IDs must be unique");
assert.deepStrictEqual(
  [...pat.problems].map(problem => Number(problem.id.slice(2))),
  Array.from({ length: 223 }, (_, index) => index + 1),
  "PAT problem IDs must be sequential"
);

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--allow-file-access-from-files"]
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto(BASE, { waitUntil: "load" });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(250);

  assert((await page.textContent("body")).includes("Chapter Batches + Spaced Review"), "flexible batch heading missing");
  assert.strictEqual(await page.locator("body").evaluate(node => /[\u3400-\u9fff]/.test(node.innerText)), false, "daily page should be English-only");
  const initialStats = await page.textContent("#vocabStats");
  assert(initialStats.includes("49 words"), "Chapter 6 first unit should show 49 words");
  assert.strictEqual(await page.$$eval(".heat-cell", nodes => nodes.length), 56, "heatmap must show 56 days");
  assert.strictEqual(await page.$$eval(".pat-day", nodes => nodes.length), 56, "PAT roadmap must show 56 days");
  assert((await page.$$eval(".problem-row", nodes => nodes.length)) > 0, "current PAT problems must be visible");

  const today = dateKey(new Date());
  const tomorrow = addDays(today, 1);
  const firstWord = chapter6Units[0].words[0];

  for (const offset of daily.meta.reviewOffsets) {
    const completedReviews = {};
    for (const previous of daily.meta.reviewOffsets) {
      if (previous < offset) completedReviews[previous] = today;
    }
    await page.evaluate(({ today, tomorrow, wordId, offset, completedReviews }) => {
      localStorage.setItem("scai_daily_profile", JSON.stringify({
        startDate: today,
        newWordsPerDay: 50,
        timerRemaining: 1800,
        timerRunning: false
      }));
      localStorage.setItem("scai_word_records", JSON.stringify({
        [wordId]: {
          id: wordId,
          firstLearnedDate: today,
          lastRating: "known",
          lastReviewedDate: today,
          completedReviews,
          extraReviews: {},
          extraDue: null,
          simulatedOffset: offset
        }
      }));
      localStorage.setItem("scai_daily_tasks", JSON.stringify({ byDate: {}, listening: {} }));
      localStorage.setItem("scai_programming_records", "{}");
      localStorage.setItem("scai_daily_checkins", "{}");
    }, { today: addDays(today, -offset), tomorrow, wordId: firstWord.id, offset, completedReviews });
    await page.reload({ waitUntil: "load" });
    await page.waitForTimeout(80);
    const tabs = await page.textContent("#wordTabs");
    assert(tabs.includes("Review 1"), `review offset +${offset} should be due`);
    await page.click('[data-word-tab="review"]');
    assert((await page.textContent("#wordList")).includes(`Review +${offset}d`), `review offset label +${offset} missing`);
  }

  await page.evaluate(({ today, tomorrow, wordId }) => {
    localStorage.setItem("scai_daily_profile", JSON.stringify({
      startDate: tomorrow,
      newWordsPerDay: 50,
      timerRemaining: 1800,
      timerRunning: false,
      pauseNew: true
    }));
    localStorage.setItem("scai_word_records", JSON.stringify({
      [wordId]: {
        id: wordId,
        firstLearnedDate: today,
        lastRating: "forgot",
        lastReviewedDate: today,
        completedReviews: { 1: today },
        extraReviews: {},
        extraDue: tomorrow
      }
    }));
    localStorage.setItem("scai_daily_tasks", JSON.stringify({ byDate: {}, listening: {} }));
    localStorage.setItem("scai_programming_records", "{}");
    localStorage.setItem("scai_daily_checkins", "{}");
  }, { today, tomorrow, wordId: firstWord.id });
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(80);
  assert((await page.textContent("#wordTabs")).includes("Extra 1"), "forgot rating should create next-day extra review");

  const listeningSteps = await page.$$eval("[data-listening-step]", nodes => nodes.map(node => node.dataset.listeningStep));
  for (const step of listeningSteps) await page.check(`[data-listening-step="${step}"]`);
  const listeningRecorded = await page.evaluate(() => {
    const tasks = JSON.parse(localStorage.getItem("scai_daily_tasks") || "{}");
    return Object.values(tasks.listening || {}).some(record => record.completedAt);
  });
  assert(listeningRecorded, "completing all listening steps should record a completed section");
  await page.evaluate(({ tomorrow }) => {
    const tasks = JSON.parse(localStorage.getItem("scai_daily_tasks") || "{}");
    tasks.byDate = tasks.byDate || {};
    tasks.byDate[tomorrow] = Object.assign({}, tasks.byDate[tomorrow] || {}, {
      date: tomorrow,
      listeningDone: true,
      programmingDone: true
    });
    localStorage.setItem("scai_daily_tasks", JSON.stringify(tasks));
  }, { tomorrow });
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(80);
  await page.click("#vocabDoneBtn");
  const checkinState = await page.textContent("#checkinSteps");
  assert(!(await page.isDisabled("#checkinBtn")), `check-in should be enabled, got: ${checkinState}`);
  await page.click("#checkinBtn");
  const checkins = await page.evaluate(() => JSON.parse(localStorage.getItem("scai_daily_checkins") || "{}"));
  assert(checkins[tomorrow], "daily check-in was not stored");

  const timerBefore = await page.textContent("#timerDisplay");
  await page.click("#timerToggle");
  await page.waitForTimeout(2200);
  const timerAfter = await page.textContent("#timerDisplay");
  assert.notStrictEqual(timerAfter, timerBefore, "programming timer did not count down");
  await page.click("#timerToggle");

  const downloadPromise = page.waitForEvent("download");
  await page.click("#exportBtn");
  const download = await downloadPromise;
  assert(download.suggestedFilename().startsWith("scai-daily-backup-"), "daily export filename mismatch");

  const mobile = await context.newPage();
  await mobile.setViewportSize({ width: 375, height: 812 });
  await mobile.goto(BASE, { waitUntil: "load" });
  await mobile.waitForTimeout(150);
  const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  assert(overflow <= 2, `mobile horizontal overflow: ${overflow}px`);
  assert.strictEqual(errors.length, 0, `console errors: ${errors.join(" | ")}`);

  await browser.close();
  console.log("DAILY CHECK PASSED");
  console.log(`words=${allWords.length} units=${units.length} listening=${listening.length} programming=${programmingTasks.length}`);
})().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
