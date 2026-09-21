const fs = require("fs");
const path = require("path");
const { chromium } = require("C:/Users/DYH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core");
const { mindmapHTML, mindmapCSS } = require("./mindmap-render.cjs");

const HERE = __dirname;
const BUILD = path.join(HERE, "build", "courses.json");
const OUT_DIR = path.join(HERE, "mindmaps");

function pageHTML(courses) {
  const pages = [];
  for (const course of courses) {
    for (const lesson of course.lessons) {
      pages.push(`<main class="mm-page">${mindmapHTML(course, lesson)}</main>`);
    }
  }
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>SCAI ME1 全课思维导图</title>
<style>
  :root{--ink:#17211C;--muted:#5F6C66;--line:#D8DED8}
  *{box-sizing:border-box}
  body{margin:0;background:#F5F6F2;color:var(--ink);font-family:"Segoe UI","Microsoft YaHei",sans-serif}
  .cover{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:22mm;background:#1F2A26;color:#FBFBF7}
  .cover .kicker{font:700 9pt/1 Consolas,monospace;letter-spacing:.16em;color:#F0C987}
  .cover h1{font:700 30pt/1.2 Georgia,"Songti SC",serif;margin:10px 0}
  .cover p{font-size:11pt;color:#C9D6D0}
  .mm-page{width:297mm;min-height:210mm;padding:15mm;background:#F5F6F2;page-break-after:always;break-after:page}
  .mm-page .mindmap{min-height:175mm;align-items:center}
  ${mindmapCSS()}
  @page{size:A4 landscape;margin:0}
</style>
</head>
<body>
  <section class="cover">
    <div class="kicker">SCAI ME1 STUDY HUB · 2026</div>
    <h1>全课思维导图</h1>
    <p>${courses.length} 门课程 · ${courses.reduce((n, c) => n + c.lessons.length, 0)} 课 · 每课一页，可打印、批注与复习。</p>
  </section>
  ${pages.join("")}
</body>
</html>`;
}

async function main() {
  const courses = JSON.parse(fs.readFileSync(BUILD, "utf8"));
  const html = pageHTML(courses);
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, "思维导图预览.html"), html, "utf8");

  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
  });
  const page = await browser.newPage({ viewport: { width: 1123, height: 794 } });
  await page.emulateMedia({ media: "print" });
  await page.setContent(html, { waitUntil: "load" });
  await page.pdf({
    path: path.join(OUT_DIR, "思维导图预览.pdf"),
    format: "A4",
    landscape: true,
    printBackground: true,
    margin: { top: "0", bottom: "0", left: "0", right: "0" }
  });
  await browser.close();
  console.log("MINDMAPS DONE lessons=" + courses.reduce((n, c) => n + c.lessons.length, 0));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
