const fs = require("fs");
const path = require("path");
const { chromium } = require("C:/Users/DYH/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright-core");
const PDF_CONTENT = require("./pdf-content.js");
const { mindmapHTML, mindmapCSS } = require("./mindmap-render.cjs");

const HERE = __dirname;
const BUILD = path.join(HERE, "build", "courses.json");
const OUT_ROOT = path.join(HERE, "pdfs");

function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function conceptHTML(lesson) {
  const firstVideo = (lesson.videos || [])[0];
  return `
  <div class="concept">
    <div class="concept-head">
      <span class="eyebrow">CONCEPT MAP · 概念拆解</span>
      <h2>本课在回答：${esc(lesson.focus)}</h2>
    </div>
    <div class="flow">
      <span>① 直觉视频</span><span>② 教材定义</span><span>③ 例题拆解</span><span>④ 独立做题</span><span>⑤ 错题复述</span>
    </div>
    ${firstVideo ? `<p class="watch">建议先看：<a href="${esc(firstVideo.url)}">${esc(firstVideo.title)}</a> · ${esc(firstVideo.source)}</p>` : ""}
  </div>`;
}

function goalsHTML(goals) {
  return `
  <section class="goals">
    <h2>本课学习目标</h2>
    <ul>
      ${goals.map(g => `<li><span class="check-square"></span><p>${esc(g)}</p></li>`).join("")}
    </ul>
  </section>`;
}

function conceptsHTML(concepts) {
  return `
  <section class="textbook">
    <h2>课本概念精要</h2>
    <div class="concept-grid">
      ${concepts.map(c => `
        <div class="concept-card">
          <div class="term">${esc(c.term)}</div>
          <p>${esc(c.def)}</p>
          ${c.formula ? `<div class="formula">${esc(c.formula)}</div>` : ""}
        </div>`).join("")}
    </div>
  </section>`;
}

function quoteHTML(quote) {
  return `
  <section class="quote-box">
    <h2>课本原文要点</h2>
    <blockquote>${esc(quote.text)}</blockquote>
    <div class="quote-src">${esc(quote.source || "")}</div>
  </section>`;
}

function exampleHTML(ex) {
  return `
  <section class="example-card">
    <h2>典型例题</h2>
    <div class="ex-q">${esc(ex.q)}</div>
    <ol class="step-list">
      ${ex.steps.map(s => `<li>${esc(s)}</li>`).join("")}
    </ol>
    <div class="answer-box"><b>解答</b><p>${esc(ex.answer)}</p></div>
  </section>`;
}

function checklistHTML(items) {
  return `
  <section class="checklist">
    <h2>学习自查清单</h2>
    <ul>
      ${items.map(i => `<li><span class="check-box"></span><p>${esc(i)}</p></li>`).join("")}
    </ul>
  </section>`;
}

function pointsHTML(title, items, cls, marker) {
  return `
  <section class="${cls}">
    <h2>${title}</h2>
    <div class="grid">
      ${items.map(item => `<div class="point"><span class="mark">${marker}</span><p>${esc(item)}</p></div>`).join("")}
    </div>
  </section>`;
}

function quizHTML(quiz) {
  return quiz.map((q, i) => `
    <div class="question">
      <div class="q-head">${i + 1}. ${esc(q.q)}</div>
      <div class="options">
        ${q.options.map((op, j) => `<div class="opt"><span>${String.fromCharCode(65 + j)}</span><p>${esc(op)}</p></div>`).join("")}
      </div>
    </div>`).join("");
}

function answersHTML(quiz) {
  return quiz.map((q, i) => `
    <div class="answer">
      <b>${i + 1}. 答案 ${String.fromCharCode(65 + q.answer)}</b>
      <p>${esc(q.explain)}</p>
    </div>`).join("");
}

function linksHTML(list) {
  return list.map(v => `
    <a class="link-row" href="${esc(v.url)}">
      <span><b>${esc(v.title)}</b><small>${esc(v.note || v.source || "")}</small></span>
      <span class="src">${esc(v.source || "链接")}</span>
    </a>`).join("");
}

function pageHTML(course, lesson) {
  const extra = PDF_CONTENT[lesson.id] || {};
  const lessonVideos = lesson.videos || [];
  const extraVideos = course.extraVideos || [];
  const online = [...(course.online || []), ...(course.practice || [])];
  const courseware = extra.courseware ? [extra.courseware] : [];
  return `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<title>${esc(course.name)} · ${esc(lesson.title)}</title>
<style>
  :root{--ink:#17211C;--muted:#5F6C66;--line:#D8DED8;--teal:#2E6E5E;--teal-soft:#E1EEE9;--accent:#C4522E;--accent-soft:#F6E5DE;--gold:#A67C00;--gold-soft:#F4EBD4;--blue:#3B6F8F;--blue-soft:#E3EDF2;--danger:#B3402E;--danger-soft:#F7E2DD}
  *{box-sizing:border-box}
  body{font-family:"Segoe UI","Microsoft YaHei","PingFang SC",sans-serif;color:var(--ink);margin:0;line-height:1.6;font-size:10.5pt}
  a{color:var(--teal);text-decoration:none;word-break:break-all}
  h1,h2,h3{font-family:Georgia,"Songti SC","Noto Serif SC",serif;margin:0}
  .cover{border-bottom:3px solid var(--teal);padding-bottom:12px;margin-bottom:14px}
  .eyebrow{font:700 8pt/1 "Segoe UI","Microsoft YaHei",sans-serif;letter-spacing:.16em;color:var(--accent);text-transform:uppercase}
  .cover h1{font-size:21pt;line-height:1.25;margin:6px 0 4px}
  .cover .en{color:var(--muted);font-size:9.5pt}
  .cover .meta{color:var(--muted);font-size:8.5pt;margin-top:8px}
  .concept{background:linear-gradient(135deg,var(--teal-soft),#fff);border:1px solid var(--line);border-left:6px solid var(--teal);border-radius:10px;padding:14px 16px;margin:12px 0 16px}
  .concept h2{font-size:12pt;margin-top:4px}
  .flow{display:flex;flex-wrap:wrap;gap:5px;margin:10px 0 6px}
  .flow span{padding:4px 9px;border:1px solid var(--line);border-radius:999px;background:#fff;font-size:8pt;color:var(--muted)}
  .watch{font-size:9pt;color:var(--muted);margin:4px 0 0}
  section{margin:0 0 16px}
  section h2{font-size:12.5pt;color:var(--teal);border-left:5px solid var(--teal);padding-left:9px;margin:0 0 8px}
  section.warn h2{color:var(--danger);border-color:var(--danger)}
  section.exam h2{color:var(--gold);border-color:var(--gold)}
  section.video h2{color:var(--blue);border-color:var(--blue)}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
  .point{display:flex;gap:8px;align-items:flex-start;background:#fff;border:1px solid var(--line);border-radius:8px;padding:9px 11px;break-inside:avoid}
  .point p{margin:0;font-size:9pt}
  .mark{flex:0 0 auto;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10pt;font-weight:700;background:var(--teal-soft);color:var(--teal)}
  section.warn .mark{background:var(--danger-soft);color:var(--danger)}
  section.exam .mark{background:var(--gold-soft);color:var(--gold)}
  .exam-tags{display:flex;flex-wrap:wrap;gap:6px}
  .exam-tags span{background:var(--gold-soft);color:var(--gold);font-weight:700;padding:6px 10px;border-radius:999px;font-size:8.5pt}
  .link-row{display:flex;justify-content:space-between;gap:8px;align-items:center;border:1px solid var(--line);border-radius:8px;padding:8px 10px;margin-bottom:6px;background:#fff;break-inside:avoid}
  .link-row b{display:block;font-size:9pt}
  .link-row small{color:var(--muted);font-size:7.5pt}
  .link-row .src{flex:0 0 auto;font:700 7pt/1 "Consolas",monospace;color:var(--blue);background:var(--blue-soft);padding:4px 7px;border-radius:999px}
  .question{border:1px solid var(--line);border-radius:10px;background:#fff;padding:12px 14px;margin-bottom:10px;break-inside:avoid}
  .q-head{font-weight:700;font-size:10pt;margin-bottom:8px}
  .options{display:grid;gap:4px}
  .opt{display:flex;gap:8px;align-items:flex-start}
  .opt span{flex:0 0 auto;width:20px;height:20px;border:1px solid var(--line);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8pt;color:var(--muted);background:var(--teal-soft)}
  .opt p{margin:0;font-size:9pt}
  .answer{border-left:4px solid var(--accent);background:var(--accent-soft);border-radius:0 8px 8px 0;padding:8px 12px;margin-bottom:8px;break-inside:avoid}
  .answer b{color:var(--accent)}
  .answer p{margin:4px 0 0;font-size:9pt}
  .page-break{page-break-before:always;break-before:page}
  .practice-note{background:var(--blue-soft);border-radius:8px;padding:10px 12px;font-size:9pt;margin-bottom:10px}
  .goals ul{list-style:none;margin:0;padding:0}
  .goals li{display:flex;gap:9px;align-items:flex-start;padding:7px 10px;border:1px solid var(--line);border-radius:8px;margin-bottom:6px;background:#fff;break-inside:avoid}
  .goals li p{margin:0;font-size:9pt}
  .check-square{flex:0 0 auto;width:15px;height:15px;border:1.5px solid var(--teal);border-radius:4px;margin-top:2px}
  .concept-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .concept-card{border:1px solid var(--line);border-left:5px solid var(--blue);border-radius:9px;background:#fff;padding:10px 12px;break-inside:avoid}
  .concept-card .term{font:700 10pt/1.3 "Segoe UI","Microsoft YaHei",sans-serif;color:var(--blue);margin-bottom:5px}
  .concept-card p{margin:0;font-size:8.8pt}
  .formula{font-family:"Cambria Math","Segoe UI",serif;background:var(--blue-soft);border-radius:6px;padding:6px 8px;margin-top:7px;font-size:8.8pt;color:var(--ink)}
  .quote-box{border:1px solid var(--gold);background:var(--gold-soft);border-radius:10px;padding:12px 16px;break-inside:avoid}
  .quote-box blockquote{margin:6px 0;font-family:Georgia,"Songti SC",serif;font-size:10pt;color:var(--ink);line-height:1.7}
  .quote-src{font-size:7.8pt;color:var(--gold)}
  .example-card{border:1px solid var(--line);border-radius:10px;background:#fff;padding:14px 16px;break-inside:avoid}
  .ex-q{font-weight:700;font-size:10.5pt;margin-bottom:8px}
  .step-list{margin:0 0 10px;padding-left:20px}
  .step-list li{font-size:9.2pt;margin-bottom:4px}
  .answer-box{border-left:4px solid var(--accent);background:var(--accent-soft);border-radius:0 8px 8px 0;padding:8px 12px}
  .answer-box b{color:var(--accent);font-size:9pt}
  .answer-box p{margin:4px 0 0;font-size:9pt}
  .checklist ul{list-style:none;margin:0;padding:0}
  .checklist li{display:flex;gap:9px;align-items:flex-start;padding:7px 10px;border:1px dashed var(--line);border-radius:8px;margin-bottom:6px;background:#fff;break-inside:avoid}
  .checklist li p{margin:0;font-size:9pt}
  .check-box{flex:0 0 auto;width:14px;height:14px;border:1.5px solid var(--accent);border-radius:3px;margin-top:2px}
  ${mindmapCSS()}
</style>
</head>
<body>
  <div class="cover">
    <div class="eyebrow">${esc(course.code)} · ${esc(course.name)}</div>
    <h1>${esc(lesson.title)}</h1>
    <div class="en">${esc(lesson.en)}</div>
    <div class="meta">${esc(lesson.chapters)} · ${esc(lesson.week)} · ${esc(course.textbook)}</div>
  </div>
  ${conceptHTML(lesson)}
  ${extra.goals ? goalsHTML(extra.goals) : ""}
  <div class="page-break"></div>
  <section>
    <h2>本课思维导图</h2>
    ${mindmapHTML(course, lesson)}
  </section>
  <div class="page-break"></div>
  ${extra.concepts ? conceptsHTML(extra.concepts) : ""}
  ${extra.quote ? quoteHTML(extra.quote) : ""}
  ${pointsHTML("核心知识点", lesson.points, "", "•")}
  ${pointsHTML("易错点", lesson.pitfalls, "warn", "!")}
  <section class="exam">
    <h2>高频考点</h2>
    <div class="exam-tags">${lesson.exams.map(e => `<span>${esc(e)}</span>`).join("")}</div>
  </section>
  <div class="page-break"></div>
  ${extra.example ? exampleHTML(extra.example) : ""}
  ${extra.courseware ? `
  <section class="video">
    <h2>本课在线课件</h2>
    ${linksHTML(courseware)}
  </section>` : ""}
  <section class="video">
    <h2>本课视频</h2>
    ${lessonVideos.length ? linksHTML(lessonVideos) : '<p class="practice-note">暂无单独视频，请使用课程配套视频库。</p>'}
  </section>
  ${extra.checklist ? checklistHTML(extra.checklist) : ""}
  <div class="page-break"></div>
  <section>
    <h2>随堂练习</h2>
    <div class="practice-note">先独立完成，再翻到下一页核对答案。每道题都写下你的计算过程和选答理由。</div>
    ${quizHTML(course.quiz)}
  </section>
  <div class="page-break"></div>
  <section>
    <h2>参考答案与解析</h2>
    ${answersHTML(course.quiz)}
  </section>
  <section class="video">
    <h2>课程配套视频库</h2>
    ${extraVideos.length ? linksHTML(extraVideos) : ""}
  </section>
  <section>
    <h2>建议练习与在线题库</h2>
    <div class="practice-note">教材任务：完成 ${esc(lesson.chapters)} 对应章节的课后 Review Exercises 与奇数题；每周再选 1 个 Problem Set 限时完成。</div>
    ${linksHTML(online)}
  </section>
</body>
</html>`;
}

async function main() {
  const courses = JSON.parse(fs.readFileSync(BUILD, "utf8"));
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
  });
  const page = await browser.newPage({ viewport: { width: 1240, height: 1754 } });
  await page.emulateMedia({ media: "print" });

  const files = [];
  for (const course of courses) {
    const outDir = path.join(OUT_ROOT, course.id);
    fs.mkdirSync(outDir, { recursive: true });
    for (const lesson of course.lessons) {
      const outPath = path.join(outDir, lesson.id + ".pdf");
      const html = pageHTML(course, lesson);
      await page.setContent(html, { waitUntil: "load" });
      await page.pdf({
        path: outPath,
        format: "A4",
        printBackground: true,
        margin: { top: "14mm", bottom: "16mm", left: "13mm", right: "13mm" },
        displayHeaderFooter: true,
        footerTemplate: `
          <div style="width:100%;font-size:8px;color:#5F6C66;text-align:center;padding:0 13mm;">
            SCAI ME · ${esc(course.name)} · ${esc(lesson.title)} — 第 <span class="pageNumber"></span> 页
          </div>`
      });
      files.push({
        course: course.id,
        courseName: course.name,
        lesson: lesson.id,
        title: lesson.title,
        file: "pdfs/" + course.id + "/" + lesson.id + ".pdf"
      });
      process.stdout.write(".");
    }
  }
  fs.writeFileSync(path.join(OUT_ROOT, "index.json"), JSON.stringify(files, null, 2), "utf8");
  await browser.close();
  console.log("\nPDF DONE lessons=" + files.length);
}

main().catch(err => { console.error(err); process.exit(1); });
