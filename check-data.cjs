const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = "C:/Users/DYH/Documents/ChatGPT/课本教程/freshman-hub";
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of ["data-courses.js", "data-meta.js", "data-china-textbooks.js", "data-competitions.js"]) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: f });
}

const courses = sandbox.window.SCAI_COURSES;
const books = sandbox.window.SCAI_BOOKS;
const plan = sandbox.window.SCAI_PLAN;
const compare = sandbox.window.SCAI_COMPARE;
const china = sandbox.window.SCAI_CHINA;
const competitions = sandbox.window.SCAI_COMPETITIONS;
const growth = sandbox.window.SCAI_GROWTH_PLAN;
const errors = [];

if (courses.length < 10) errors.push("course count < 10: " + courses.length);
const ids = new Set();
for (const c of courses) {
  if (ids.has(c.id)) errors.push("duplicate course id " + c.id);
  ids.add(c.id);
  if (!c.lessons || c.lessons.length < 5) errors.push(c.id + " lessons < 5: " + (c.lessons || []).length);
  if (!c.quiz || !c.quiz.length) errors.push(c.id + " no quiz");
  c.quiz.forEach((q, i) => {
    if (!q.q || !q.options || !q.options.length) errors.push(c.id + " quiz " + i + " missing question/options");
    if (typeof q.answer !== "number" || !q.options[q.answer]) errors.push(c.id + " quiz " + i + " bad answer");
    if (!q.explain) errors.push(c.id + " quiz " + i + " no explain");
  });
  c.lessons.forEach((l, i) => {
    for (const k of ["points", "pitfalls", "exams"]) {
      if (!l[k] || !l[k].length) errors.push(c.id + " lesson " + i + " missing " + k);
    }
    if (!l.videos || !l.videos.length) errors.push(c.id + " lesson " + i + " no videos");
    (l.videos || []).forEach((v, j) => {
      if (!/^https?:\/\//.test(v.url || "")) errors.push(c.id + " lesson " + i + " video " + j + " bad url");
      if (!v.title || !v.source) errors.push(c.id + " lesson " + i + " video " + j + " missing title/source");
    });
  });
  (c.practice || []).forEach((p, i) => {
    if (!/^https?:\/\//.test(p.url || "")) errors.push(c.id + " practice " + i + " bad url");
  });
}

if (books.length < 17) errors.push("book count < 17: " + books.length);
books.forEach(b => {
  if (!ids.has(b.course)) errors.push("book course missing: " + b.course);
});

if (plan.weeks.length !== 16) errors.push("weeks != 16: " + plan.weeks.length);
if (!plan.daily || !plan.daily.length) errors.push("daily template missing");
if (!compare.similarities.length || !compare.differences.length || !compare.terms.length) errors.push("compare data incomplete");
if (!china || !china.books || china.books.length < 9) errors.push("china textbook data incomplete");
for (const book of (china && china.books) || []) {
  if (!book.id || !book.title || !book.course || !book.summary || !book.strategy) errors.push("china book incomplete: " + (book.id || book.title));
  if (!book.chapters || !book.chapters.length) errors.push("china book has no chapters: " + book.id);
  for (const ch of book.chapters || []) {
    if (!ch.title || !ch.summary || !(ch.points || []).length || !(ch.pitfalls || []).length || !(ch.exam || []).length) {
      errors.push("china chapter incomplete: " + book.id + " / " + (ch.title || "?"));
    }
  }
}
if (!china || !china.syllabus || !china.syllabus.modeling || !china.syllabus.linearAlgebra || !china.syllabus.chemistry || !china.syllabus.physics) {
  errors.push("formal syllabus schedules incomplete");
}
if (!competitions || !competitions.competitions || competitions.competitions.length < 18) errors.push("competition catalog incomplete");
for (const item of (competitions && competitions.competitions) || []) {
  if (!item.id || !item.name || !item.category || !item.stage || !item.eligibility) errors.push("competition metadata incomplete: " + (item.id || item.name));
  if (!item.dateLabel || !item.registration || !item.url || !item.value || !item.target) errors.push("competition guidance incomplete: " + item.id);
  if (!item.prepare || !item.prepare.length) errors.push("competition preparation missing: " + item.id);
  if (!item.months || !item.months.length) errors.push("competition months missing: " + item.id);
}
if (!growth || !growth.weeks || growth.weeks.length < 18) errors.push("growth plan weeks incomplete");
for (const week of (growth && growth.weeks) || []) {
  for (const key of ["gpa", "coding", "contest", "research", "english", "verify"]) {
    if (!week[key]) errors.push("growth week " + week.week + " missing " + key);
  }
}

if (errors.length) {
  console.log("DATA CHECK FAILED");
  errors.forEach(e => console.log("- " + e));
  process.exit(1);
}
console.log("DATA CHECK PASSED");
console.log("courses=" + courses.length + " lessons=" + courses.reduce((n, c) => n + c.lessons.length, 0) + " videos=" + courses.reduce((n, c) => n + c.lessons.reduce((m, l) => m + l.videos.length, 0), 0) + " quizzes=" + courses.reduce((n, c) => n + c.quiz.length, 0));
