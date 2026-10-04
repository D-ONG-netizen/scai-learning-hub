const fs = require("fs");
const os = require("os");
const path = require("path");
const { chromium } = require("C:/Users/DYH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core");

const BASE = "file:///C:/Users/DYH/Documents/ChatGPT/课本教程/freshman-hub/index.html";
const OUT = os.tmpdir();
const errors = [];
const courseIds = ["calculus","linear-algebra","physics","chemistry","mechanics","general-ed","english","python-ai","programming","prep"];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--allow-file-access-from-files"]
  });

  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  page.on("console", m => { if (m.type() === "error") errors.push("console: " + m.text()); });
  page.on("pageerror", e => errors.push("pageerror: " + e.message));

  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(500);

  const title = await page.title();
  const homeText = await page.textContent("#app");
  if (!title.includes("SCAI")) throw new Error("title missing");
  if (!homeText.includes("Freshman") || !homeText.includes("Study Hub")) throw new Error("home content missing");
  await page.screenshot({ path: path.join(OUT, "scai-home.png") });

  await page.click("#searchBtn");
  await page.fill("#searchInput", "特征值");
  await page.waitForTimeout(150);
  const searchCount = await page.$$eval(".search-item", els => els.length);
  if (searchCount < 1) throw new Error("global search returned no results");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(250);
  if (!page.url().includes("#/course/")) throw new Error("search navigation failed: " + page.url());

  for (const id of courseIds) {
    await page.goto(BASE + "#/course/" + id, { waitUntil: "load" });
    await page.waitForTimeout(180);
    const txt = await page.textContent("#app");
    if (!txt.includes("Knowledge Map") || !txt.includes("Course Video Library") || !txt.includes("PDF Notes and Practice") || !txt.includes("Online Practice and University Problem Sets")) {
      throw new Error("course page incomplete: " + id);
    }
  }
  await page.goto(BASE + "#/course/chemistry", { waitUntil: "load" });
  await page.waitForTimeout(180);
  if (!(await page.$("#insight-chemistry"))) throw new Error("chemistry AI insight slot missing");
  if (!(await page.$("#chatAnalyze"))) throw new Error("AI courseware analyze button missing");

  await page.goto(BASE + "#/books", { waitUntil: "load" });
  await page.waitForTimeout(180);
  if (!(await page.textContent("#app")).includes("Textbook Map")) throw new Error("books page missing");
  await page.goto(BASE + "#/compare", { waitUntil: "load" });
  await page.waitForTimeout(180);
  if (!(await page.textContent("#app")).includes("Chinese vs English Textbooks")) throw new Error("compare page missing");
  await page.goto(BASE + "#/deep", { waitUntil: "load" });
  await page.waitForTimeout(250);
  const deepText = await page.textContent("#app");
  if (!deepText.includes("Chinese Textbook Deep Reading") || !deepText.includes("Official Syllabus and Weekly Progress") || !deepText.includes("SJTU Calculus, Volume 1") || !deepText.includes("The C++ Programming Language")) {
    throw new Error("deep textbook page incomplete");
  }
  await page.goto(BASE + "#/pdfs", { waitUntil: "load" });
  await page.waitForTimeout(200);
  const pdfCount = await page.$$eval(".pdf-link", els => els.length);
  if (pdfCount !== 70) throw new Error("pdf library count != 70: " + pdfCount);
  if (!(await page.textContent("#app")).includes("PDF Library")) throw new Error("pdf library page missing");

  await page.goto(BASE, { waitUntil: "load" });
  await page.waitForTimeout(300);
  const layout = await page.evaluate(() => {
    const doc = document.documentElement;
    const h1 = document.querySelector(".hero h1");
    const nav = document.querySelector(".nav");
    const rows = document.querySelectorAll(".course-row");
    return {
      overflow: doc.scrollWidth - window.innerWidth,
      h1Width: h1 ? Math.round(h1.getBoundingClientRect().width) : 0,
      navRight: nav ? Math.round(nav.getBoundingClientRect().right) : 0,
      rows: rows.length,
      rowWidths: Array.from(rows).map(r => Math.round(r.getBoundingClientRect().width))
    };
  });
  if (layout.overflow > 2) throw new Error("desktop horizontal overflow " + layout.overflow);
  if (layout.h1Width < 200 || layout.rows !== 10) throw new Error("home layout broken");
  if (layout.rowWidths.some(w => w <= 0)) throw new Error("course row zero width");
  console.log("Layout:", JSON.stringify(layout));

  await page.goto(BASE + "#/course/calculus", { waitUntil: "load" });
  await page.waitForTimeout(180);
  const pdfHref = await page.$eval(".lesson a.btn", a => a.getAttribute("href"));
  if (!pdfHref || !pdfHref.startsWith("pdfs/calculus/")) throw new Error("lesson pdf link missing");
  console.log("Lesson PDF:", pdfHref);
  await page.click("details.lesson summary");
  await page.click('[data-progress="done"]');
  await page.fill('textarea[data-note-key="calculus::cal-1"]', "测试笔记");
  await page.waitForTimeout(150);
  const progressStored = await page.evaluate(() => localStorage.getItem("scai_progress"));
  const notesStored = await page.evaluate(() => localStorage.getItem("scai_notes"));
  if (!progressStored || !JSON.parse(progressStored)["calculus::cal-1"]) throw new Error("progress save failed");
  if (!notesStored || !JSON.parse(notesStored)["calculus::cal-1"]) throw new Error("notes save failed");

  await page.goto(BASE + "#/plan", { waitUntil: "load" });
  await page.click('button[data-week="5"]');
  await page.waitForTimeout(200);
  const weekText = await page.textContent("#weekPanel");
  if (!weekText.includes("Week 5")) throw new Error("week switch failed");

  const csv = path.join(os.tmpdir(), "scai-tt.csv");
  fs.writeFileSync(csv, "星期,节次,开始时间,结束时间,课程,教室\n周一,1,08:30,10:05,高等数学,A101\n周三,3,14:00,15:35,线性代数,B202\n", "utf8");
  await page.setInputFiles("#ttFile", csv);
  await page.waitForTimeout(300);
  const ttText = await page.textContent("#ttArea");
  if (!ttText.includes("高等数学") || !ttText.includes("线性代数")) throw new Error("timetable import failed");

  await page.click("#themeBtn");
  const theme = await page.getAttribute("html", "data-theme");
  if (theme !== "dark") throw new Error("theme toggle failed");

  await page.evaluate(() => {
    localStorage.setItem("scai_llm_config", JSON.stringify({ baseURL: "https://api.deepseek.com/v1", model: "deepseek-chat", apiKey: "" }));
    if (window.LLM_CONFIG) window.LLM_CONFIG.apiKey = "";
  });
  await page.goto(BASE + "#/course/calculus", { waitUntil: "load" });
  await page.waitForTimeout(180);
  await page.click("#aiBtn");
  await page.click("#chatPlan");
  await page.waitForTimeout(400);
  const chatText = await page.textContent("#chatMessages");
  if (!chatText.includes("基于当前课件给出的计划调整")) throw new Error("offline AI plan missing");

  const mobile = await browser.newPage({ viewport: { width: 375, height: 812 } });
  mobile.on("pageerror", e => errors.push("mobile pageerror: " + e.message));
  await mobile.goto(BASE + "#/home", { waitUntil: "load" });
  await mobile.waitForTimeout(300);
  const overflow = await mobile.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (overflow > 2) throw new Error("mobile horizontal overflow " + overflow);
  await mobile.screenshot({ path: path.join(OUT, "scai-mobile.png") });
  await mobile.goto(BASE + "#/course/calculus", { waitUntil: "load" });
  await mobile.waitForTimeout(300);
  await mobile.screenshot({ path: path.join(OUT, "scai-mobile-course.png") });

  if (process.env.RUN_EXTERNAL === "1") {
    const externalChecks = [
      { url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/", label: "MIT 18.06 OCW" },
      { url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/pages/assignments/", label: "MIT 18.01 assignments" },
      { url: "https://www.bilibili.com/video/BV1d7wAzsE8V/", label: "Bilibili 线性代数 3.0" }
    ];
    for (const ext of externalChecks) {
      const resp = await page.goto(ext.url, { waitUntil: "domcontentloaded", timeout: 20000 }).catch(() => null);
      const status = resp ? resp.status() : "ERR";
      console.log("External:", status, ext.label);
      if (status >= 400 || status === "ERR") throw new Error("external link failed: " + ext.label + " " + status);
    }
  }

  await browser.close();

  if (errors.length) {
    console.log("Browser errors:");
    errors.forEach(e => console.log(e));
    process.exit(1);
  }
  console.log("ALL BROWSER CHECKS PASSED");
})().catch(e => {
  console.error("CHECK FAILED", e);
  process.exit(1);
});
