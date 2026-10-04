const path = require("path");
const assert = require("assert");
const { chromium } = require("C:/Users/DYH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core");

const BASE = process.env.LANDING_BASE || "file:///" + path.join(__dirname, "landing.html").replace(/\\/g, "/");

function pad(value) {
  return String(value).padStart(2, "0");
}

function dateKey(date) {
  const value = date || new Date();
  return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
}

async function centerDelta(page, selector) {
  return page.locator(selector).evaluate(node => {
    const box = node.getBoundingClientRect();
    return Math.abs(box.left - (window.innerWidth - box.right));
  });
}

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--allow-file-access-from-files"]
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(250);
  assert.strictEqual(await page.locator(".course-card").count(), 8, "expected eight core course cards");
  assert.strictEqual(await page.locator(".shortcut-card").count(), 4, "expected four shortcut cards");
  assert((await page.textContent("#courseGrid")).includes("Mathematical Modeling 1"), "calculus card missing");
  assert((await page.textContent("#courseGrid")).includes("Matrices and Linear Algebra"), "linear algebra card missing");
  assert.strictEqual(await page.locator(".landing-hero h1").evaluate(node => getComputedStyle(node).textAlign), "center", "hero title must be centered");
  assert.strictEqual(await page.locator("body").evaluate(node => /[\u3400-\u9fff]/.test(node.innerText)), false, "landing page should be English-only");

  const today = dateKey(new Date());
  const calculusLesson = await page.evaluate(() => {
    const course = (window.SCAI_COURSES || []).find(item => item.id === "calculus");
    return course && course.lessons && course.lessons[0] ? course.lessons[0].id : "";
  });
  assert(calculusLesson, "calculus lesson fixture missing");
  await page.evaluate(({ today, calculusLesson }) => {
    localStorage.clear();
    localStorage.setItem("scai_daily_profile", JSON.stringify({ startDate: today }));
    localStorage.setItem("scai_progress", JSON.stringify({
      [`calculus::${calculusLesson}`]: { status: "done", ts: Date.now() }
    }));
    localStorage.setItem("scai_daily_tasks", JSON.stringify({
      byDate: {
        [today]: {
          date: today,
          vocab: true,
          listeningDone: false,
          programmingDone: true
        }
      },
      listening: {}
    }));
    localStorage.setItem("scai_programming_records", JSON.stringify({
      1: { completedAt: new Date().toISOString() }
    }));
    localStorage.setItem("scai_competition_goals", JSON.stringify({
      "ccf-csp": { ts: Date.now() }
    }));
  }, { today, calculusLesson });
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(150);

  const hero = await page.textContent("#heroProduct");
  assert(hero.includes("2/3"), "daily task count should read from local progress");
  assert(hero.includes("CCF CSP"), "goal competition should appear in hero");
  assert((await page.textContent("#courseGrid")).includes("1/"), "course completion should sync from local progress");
  assert(!(await page.textContent("#courseGrid")).includes("0/0 课完成"), "course progress fallback is invalid");

  await page.click("#themeBtn");
  assert.strictEqual(await page.getAttribute("html", "data-theme"), "dark", "theme toggle failed");

  for (const viewport of [
    { width: 1366, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
    { width: 2560, height: 1440 }
  ]) {
    await page.setViewportSize(viewport);
    await page.waitForTimeout(60);
    const landingDelta = await centerDelta(page, ".landing-main");
    assert(landingDelta <= 1, `landing not centered at ${viewport.width}px: ${landingDelta}`);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    assert(overflow <= 2, `landing horizontal overflow at ${viewport.width}px: ${overflow}`);
  }

  for (const file of ["index.html", "daily.html", "growth.html"]) {
    await page.goto("file:///" + path.join(__dirname, file).replace(/\\/g, "/"), { waitUntil: "load" });
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.waitForTimeout(120);
    const selector = file === "index.html" ? ".shell" : ".shell";
    const delta = await centerDelta(page, selector);
    assert(delta <= 1, `${file} shell not centered at 2560px: ${delta}`);
  }

  const mobile = await context.newPage();
  await mobile.setViewportSize({ width: 375, height: 812 });
  await mobile.goto(BASE, { waitUntil: "load" });
  await mobile.waitForTimeout(120);
  const mobileOverflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  assert(mobileOverflow <= 2, `landing mobile overflow: ${mobileOverflow}`);
  assert.strictEqual(errors.length, 0, `console errors: ${errors.join(" | ")}`);

  await browser.close();
  console.log("LANDING CHECK PASSED");
})().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
