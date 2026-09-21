const { chromium } = require("C:/Users/DYH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core");

const BASE = "file:///C:/Users/DYH/Documents/ChatGPT/课本教程/freshman-hub/index.html";

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--allow-file-access-from-files"]
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto(BASE + "#/deep", { waitUntil: "load" });
  await page.waitForTimeout(400);
  const counts = {
    books: await page.$$eval(".deep-book", els => els.length),
    chapters: await page.$$eval(".chapter-card", els => els.length),
    syllabi: await page.$$eval(".syllabus-card", els => els.length),
    errors
  };
  console.log(JSON.stringify(counts));
  await page.click('a[href="#/deep/sjtu-calculus-1"]');
  await page.waitForTimeout(300);
  const opened = await page.$eval("#deep-sjtu-calculus-1", el => el.open);
  if (!opened) throw new Error("deep book route did not open book");
  await page.goto(BASE + "#/course/programming", { waitUntil: "load" });
  await page.waitForTimeout(250);
  if (!(await page.textContent("#app")).includes("本课国内教材精读")) throw new Error("programming course deep shelf missing");
  await page.goto(BASE + "#/plan", { waitUntil: "load" });
  await page.waitForTimeout(250);
  const planText = await page.textContent("#app");
  if (!planText.includes("我的官方学习大纲") || !planText.includes("Mathematical Modeling 1") || !planText.includes("MATH0280") || !planText.includes("CHEM0960") || !planText.includes("大学物理 2026 Fall")) {
    throw new Error("official schedules missing from plan page");
  }
  const currentWeeks = await page.$$eval(".syllabus-week.current", els => els.map(el => el.innerText.split("\n")[0]));
  if (currentWeeks.length < 1) throw new Error("current calendar week is not highlighted");

  const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mobile.goto(BASE + "#/deep", { waitUntil: "load" });
  await mobile.waitForTimeout(250);
  const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (overflow > 2) throw new Error("mobile overflow " + overflow);
  await browser.close();
  console.log("DEEP CHECKS PASSED");
})().catch(error => {
  console.error("DEEP CHECK FAILED", error);
  process.exit(1);
});
