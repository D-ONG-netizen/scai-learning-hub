const { chromium } = require("C:/Users/DYH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core");

const BASE = "file:///C:/Users/DYH/Documents/ChatGPT/课本教程/freshman-hub/index.html";
const SAMPLE = "C:/Users/DYH/Desktop/课件/Syllabus-CHEM0960_Fall 2026_final.pdf";

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--allow-file-access-from-files"]
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => { if (message.type() === "error" || message.type() === "warning") errors.push(message.type() + ": " + message.text()); });
  await page.goto(BASE + "#/course/chemistry", { waitUntil: "load" });
  await page.waitForTimeout(300);
  await page.setInputFiles("#file-chemistry", SAMPLE);
  await page.waitForFunction(() => document.querySelectorAll("#cw-list-chemistry .fname").length > 0, { timeout: 60000 });
  await page.waitForFunction(() => document.querySelector("#insight-chemistry .insight-head"), { timeout: 120000 });
  const result = await page.evaluate(() => ({
    title: document.querySelector("#insight-chemistry .insight-head h3")?.textContent || "",
    lesson: document.querySelector("#insight-chemistry .insight-head p")?.textContent || "",
    keyPoints: document.querySelectorAll("#insight-chemistry .insight-col.key li").length,
    pitfalls: document.querySelectorAll("#insight-chemistry .insight-col.warn li").length,
    questions: document.querySelectorAll("#insight-chemistry .insight-col.exam li").length,
    branches: document.querySelectorAll("#insight-chemistry .insight-branch").length,
    source: document.querySelector("#insight-chemistry .insight-head p")?.textContent || ""
  }));
  console.log(JSON.stringify({ ...result, errors }));
  if (!result.title) console.log((await page.textContent("#insight-chemistry")).slice(0, 1200));
  if (!result.title || !result.lesson || result.keyPoints < 1 || result.pitfalls < 1 || result.branches < 1) {
    throw new Error("courseware insight generation incomplete");
  }
  await browser.close();
  console.log("AI COURSEWARE CHECK PASSED");
})().catch(error => {
  console.error("AI COURSEWARE CHECK FAILED", error);
  process.exit(1);
});
