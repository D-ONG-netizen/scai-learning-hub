const fs = require("fs");
const path = require("path");
const { chromium } = require("C:/Users/DYH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core");

const BASE = process.env.GROWTH_BASE || "file:///C:/Users/DYH/Documents/ChatGPT/课本教程/freshman-hub/growth.html";

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--allow-file-access-from-files"]
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on("pageerror", error => errors.push(error.message));
  page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });

  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(400);
  if (!(await page.$(".metric"))) {
    console.log("BODY", (await page.textContent("body")).slice(0, 1200));
    console.log("ERRORS", errors);
  }
  if (!(await page.textContent("body")).includes("大一升学作战台")) throw new Error("growth hero missing");
  if (await page.$$eval(".metric", els => els.length) !== 4) throw new Error("dashboard metrics missing");
  if (await page.$$eval(".comp-card", els => els.length) < 20) throw new Error("competition cards missing");
  if (!(await page.textContent("#routeNotice")).includes("本部计算机学院")) throw new Error("transfer route notice missing");

  await page.click('[data-category="cs"]');
  const csCards = await page.$$eval(".comp-card", els => els.length);
  if (csCards < 5) throw new Error("CS filter failed");
  await page.click('[data-category="all"]');

  await page.click('[data-month="2026-10"]');
  const monthCards = await page.$$eval(".comp-card", els => els.length);
  if (monthCards < 1) throw new Error("month filter failed");
  await page.click("#monthClear");

  await page.fill("#competitionSearch", "CSP");
  await page.waitForTimeout(100);
  const searchCards = await page.$$eval(".comp-card h3", els => els.map(el => el.textContent).join(" "));
  if (!searchCards.includes("CCF CSP")) throw new Error("competition search failed");
  await page.fill("#competitionSearch", "");

  const goalButton = page.locator("[data-goal-id]").first();
  const goalId = await goalButton.getAttribute("data-goal-id");
  await goalButton.click();
  const storedGoals = await page.evaluate(() => JSON.parse(localStorage.getItem("scai_competition_goals") || "{}"));
  if (!storedGoals[goalId]) throw new Error("competition goal persistence failed");

  await page.click('[data-week="10"]');
  if (!(await page.textContent("#weekPlan")).includes("第 10 周")) throw new Error("week selector failed");
  const checkbox = page.locator('#weekPlan input[type="checkbox"]').first();
  await checkbox.check();
  const progress = await page.evaluate(() => JSON.parse(localStorage.getItem("scai_growth_progress") || "{}"));
  if (!Object.keys(progress).some(key => key.startsWith("10:"))) throw new Error("week progress persistence failed");

  await page.click("#themeBtn");
  if ((await page.getAttribute("html", "data-theme")) !== "dark") throw new Error("theme toggle failed");

  const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await mobile.goto(BASE, { waitUntil: "load" });
  await mobile.waitForTimeout(250);
  const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (overflow > 2) throw new Error("mobile overflow " + overflow);
  if (errors.length) throw new Error("console errors: " + errors.slice(0, 4).join(" | "));
  const preview = path.join(__dirname, "preview");
  fs.mkdirSync(preview, { recursive: true });
  await page.evaluate(() => localStorage.setItem("scai_theme", JSON.stringify("light")));
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(preview, "growth-desktop-top.png") });
  await page.screenshot({ path: path.join(preview, "growth-desktop.png"), fullPage: true });
  await mobile.evaluate(() => localStorage.setItem("scai_theme", JSON.stringify("light")));
  await mobile.reload({ waitUntil: "load" });
  await mobile.waitForTimeout(300);
  await mobile.screenshot({ path: path.join(preview, "growth-mobile-top.png") });
  await mobile.screenshot({ path: path.join(preview, "growth-mobile.png"), fullPage: true });
  await browser.close();
  console.log("GROWTH INTERACTION CHECKS PASSED");
})().catch(error => {
  console.error("GROWTH CHECK FAILED", error);
  process.exit(1);
});
