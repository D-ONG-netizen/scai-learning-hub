(function(){
"use strict";

const exact={
  "总览":"Overview",
  "完整版首页":"Full Dashboard",
  "深色主题":"Dark Mode",
  "浅色主题":"Light Mode",
  "周计划":"Weekly Plan",
  "双语对照":"Bilingual Comparison",
  "国内教材精读":"Chinese Textbooks",
  "教材地图":"Textbook Map",
  "PDF 资料库":"PDF Library",
  "每日训练":"Daily Training",
  "升学竞赛":"Competition Hub",
  "主导航":"Main navigation",
  "搜索课程 / 知识点 / 视频（Ctrl+K）":"Search courses, topics and videos (Ctrl+K)",
  "搜索":"Search",
  "切换主题":"Switch theme",
  "设置":"Settings",
  "AI 助手":"AI Assistant",
  "AI 学习助手":"AI Study Assistant",
  "未选择课程":"No course selected",
  "关闭助手":"Close assistant",
  "分析课件":"Analyze Courseware",
  "根据课件调整计划":"Adjust Plan from Courseware",
  "问当前课程的问题...":"Ask about the current course...",
  "发送":"Send",
  "全局搜索":"Global Search",
  "搜索课程、知识点、易错点、视频或在线题库...":"Search courses, topics, pitfalls, videos or practice resources...",
  "搜索内容":"Search",
  "↑↓ 选择 · Enter 打开 · Esc 关闭":"↑↓ Select · Enter Open · Esc Close",
  "OpenAI 兼容接口地址。":"OpenAI-compatible API endpoint.",
  "模型":"Model",
  "例如 deepseek-chat、gpt-4o-mini、qwen-plus。":"For example: deepseek-chat, gpt-4o-mini or qwen-plus.",
  "只保存在本机浏览器与 config.local.js，不提交到公开仓库。":"Stored only in this browser and config.local.js; never committed to a public repository.",
  "默认 AI 课程上下文":"Default AI course context",
  "清除本地数据":"Clear Local Data",
  "导出数据":"Export Data",
  "导入数据":"Import Data",
  "保存配置":"Save Configuration",
  "关闭":"Close",
  "课程不存在":"Course not found",
  "返回总览":"Back to Overview",
  "本学期":"This Semester",
  "自学 / 先修":"Self-study / Prep",
  "课程进度":"Course Progress",
  "今日训练":"Today's Training",
  "今日任务":"Today's Tasks",
  "完成":"Complete",
  "待完成":"Pending",
  "课程模块":"Course Modules",
  "学习进度":"Learning Progress",
  "匹配视频":"Matched Videos",
  "每日训练打卡":"Daily Training Check-in",
  "词汇":"Vocabulary",
  "精听":"Listening",
  "C 语言":"C Programming",
  "连续":"Streak",
  "已打卡":"Checked In",
  "进入今日训练":"Open Today's Training",
  "复习词卡 / 精听 / 编程":"Review Words / Listening / Programming",
  "本周":"This Week",
  "已学":"Done",
  "待复习":"Review Due",
  "今日复习":"Today's Review",
  "到期":"Due",
  "查看周计划":"View Weekly Plan",
  "升学与竞赛作战台":"Competition Hub",
  "国内 ↔ 国外 双语对照":"Chinese ↔ English Comparison",
  "课程与教材":"Courses and Textbooks",
  "官方课程 + 自学与先修模块":"Official courses plus self-study and preparation modules",
  "大一全教材学习中心":"Freshman Study Hub",
  "大一全教材":"Freshman Study Hub",
  "学习中心":"Study Hub",
  "打开本周计划":"Open This Week's Plan",
  "进入每日训练":"Open Daily Training",
  "学习进度概览":"Learning progress overview",
  "本周学习完成度":"Weekly Completion",
  "保持稳定节奏":"Stay Consistent",
  "大一上 · 官方大纲优先":"Fall Semester · Official Syllabus First",
  "你的课程进度 + 跨课程补充计划":"Course Progress + Cross-Course Plan",
  "本周主攻":"Weekly Focus",
  "里程碑":"Milestones",
  "验收标准":"Acceptance Criteria",
  "先修 / 转专业":"Preparation / Transfer",
  "每日时间槽":"Daily Time Slots",
  "时间":"Time",
  "星期":"Day",
  "节次":"Period",
  "开始时间":"Start",
  "结束时间":"End",
  "教室":"Room",
  "任务":"Task",
  "目的":"Purpose",
  "真实课表导入":"Import Real Timetable",
  "选择 CSV / JSON":"Choose CSV / JSON",
  "清除已导入课表":"Clear Imported Timetable",
  "尚未导入课表，当前使用上方默认时间槽。":"No timetable imported. The default time slots above are in use.",
  "教材地图":"Textbook Map",
  "国内课标教材 ↔ 英文原版教材":"Chinese Curriculum Textbooks ↔ English Originals",
  "教材":"Textbook",
  "页数":"Pages",
  "章节":"Chapters",
  "课程":"Course",
  "角色":"Role",
  "先修":"Prep",
  "国内教材":"Chinese Textbook",
  "国外对照":"English Counterpart",
  "入口":"Open",
  "中英教材对比":"Chinese vs English Textbooks",
  "相同之处":"Similarities",
  "结构差异":"Structural Differences",
  "维度":"Dimension",
  "中英术语对照":"Chinese-English Terminology",
  "说明":"Notes",
  "国内课标 · 中文教材":"Chinese curriculum · Chinese textbook",
  "英文原版 · 英文课程":"English original · English course",
  "合并 ↓ 不重复":"Merge ↓ No duplication",
  "国内教材额外":"Chinese textbook extra",
  "英文教材额外":"English textbook extra",
  "策略：":"Strategy:",
  "怎么合并学":"How to Merge",
  "教材配对":"Textbook Pairing",
  "✓ 相同":"✓ Same",
  "概念学一次":"Learn the concept once",
  "英文教材额外：英文课程重点":"English textbook extra: English course focus",
  "精细分块对照":"Detailed Comparison",
  "同概念不重复，只补不同处":"Do not repeat shared concepts; only fill the differences",
  "C / C++ 语法差异实验室":"C / C++ Syntax Lab",
  "同一种逻辑，两种语法外壳":"One logic, two syntax systems",
  "实践入口":"Practice Resources",
  "教材、课程与已做项目":"Textbooks, courses and completed projects",
  "双线并行 · 不重复学习":"Parallel Tracks · No Duplicate Study",
  "总原则":"Core Principles",
  "大一学年 · 双线并行总节奏":"Freshman Year · Parallel Track Rhythm",
  "国内课程 ↔ SCAI 英文课程":"Chinese courses ↔ SCAI English courses",
  "国内进度":"Chinese Progress",
  "英文进度":"English Progress",
  "合并学":"Merged Study",
  "中文补差异":"Chinese-only differences",
  "英文补差异":"English-only differences",
  "大学物理官方周次进度":"Official Physics Weekly Schedule",
  "按物理课程大纲":"According to the physics syllabus",
  "教材：":"Textbook:",
  "范围：":"Coverage:",
  "考核：":"Assessment:",
  "课件校正：":"Courseware correction:",
  "本章概念":"Chapter Concepts",
  "易错点":"Common Mistakes",
  "考法 / 练习":"Exam Patterns / Practice",
  "合并学习策略：":"Merged Study Strategy:",
  "国内教材逐章精读":"Chinese Textbook Deep Reading",
  "本国内教材 / 分册":"Chinese textbooks / volumes",
  "个章节摘要":"Chapter summaries",
  "份官方课程进度":"Official course schedules",
  "个思维导图节点":"Mind-map nodes",
  "使用原则":"Principles",
  "直达教材":"Open Textbooks",
  "按课程与分册定位":"Locate by course and volume",
  "官方大纲与每周进度":"Official Syllabus and Weekly Progress",
  "数学建模、线性代数、大学物理":"Mathematical Modeling, Linear Algebra, Physics",
  "教材章节精读":"Chapter Deep Reading",
  "点击书名展开全书，再展开章节查看概念与易错点":"Open a textbook, then expand chapters to view concepts and common mistakes.",
  "我的官方学习大纲":"My Official Study Syllabus",
  "本课国内教材精读":"Chinese Textbook Reading for This Course",
  "中文教材章节摘要与官方进度":"Chinese textbook summaries and official progress",
  "周次、考核与进阶主题":"Weeks, assessment and advanced topics",
  "每课一份，下载或打印后离线做题":"One PDF per lesson for offline or printed practice",
  "在线练习与名校题库":"Online Practice and University Problem Sets",
  "英文原版 + 国内名校资源 + 按主题在线题库":"English originals + Chinese university resources + topic-based practice",
  "课件与 AI 上下文":"Courseware and AI Context",
  "支持 txt / md / pdf / docx / pptx":"Supports txt / md / pdf / docx / pptx",
  "上传本课程课件":"Upload Courseware",
  "选择文件":"Choose Files",
  "删除":"Delete",
  "还没有课件，上传后 AI 将自动参考。":"No courseware yet. Upload files and AI will use them automatically.",
  "正在读取课件并生成知识结构，请稍候...":"Reading courseware and generating a knowledge structure...",
  "上传 PPTX、PDF 或 DOCX 后，这里会自动生成本节课知识结构和思维导图。":"Upload PPTX, PDF or DOCX to generate a lesson knowledge structure and mind map.",
  "重新生成":"Regenerate",
  "关键知识点":"Key Concepts",
  "复习与自测":"Review and Self-Test",
  "请先上传课件":"Upload courseware first.",
  "不支持的文件类型":"Unsupported file type.",
  "知识地图":"Knowledge Map",
  "课程配套视频库":"Course Video Library",
  "先看直觉视频，再回教材做计算，理解效率更高":"Watch the intuition video first, then use the textbook for calculations.",
  "PDF 讲义与练习":"PDF Notes and Practice",
  "每课 PDF 内含知识点、易错点、高频考点、随堂练习、答案解析与在线题库":"Each lesson PDF includes concepts, mistakes, exam patterns, practice, solutions and online problem sets.",
  "打开本课 PDF 讲义":"Open Lesson PDF",
  "本课在线课件":"Online Courseware",
  "本课思维导图":"Lesson Mind Map",
  "标记已学":"Mark Done",
  "加入复习":"Add to Review",
  "未开始":"Not Started",
  "核心知识点":"Core Concepts",
  "高频考点":"Exam Focus",
  "匹配视频":"Matched Videos",
  "学习笔记":"Study Notes",
  "记录本课重点、疑问、错题心得...":"Record key ideas, questions and mistake notes...",
  "清空": "Clear",
  "保存": "Save",
  "已保存": "Saved",
  "加载更多":"Load More",
  "暂无":"None",
  "退出": "Exit",
  "大一升学作战台":"Freshman Competition Hub",
  "最近应该做什么":"What to Do Next",
  "按优先级排列，不按比赛数量排列":"Ordered by priority, not by the number of competitions",
  "竞赛与项目库":"Competition and Project Library",
  "按方向筛选，点击卡片查看准备路线":"Filter by direction and open a card to view the preparation path.",
  "搜索竞赛、方向或准备内容":"Search competitions, directions or preparation content",
  "搜索竞赛":"Search competitions",
  "筛选阶段":"Filter stage",
  "筛选参与条件":"Filter eligibility",
  "全部参与条件":"All Eligibility",
  "当前可参加或准备":"Open or Preparing",
  "下一周期或需选拔":"Next Cycle or Selection",
  "显示全部月份":"Show All Months",
  "大一到大三升学路线":"Freshman to Junior Roadmap",
  "每阶段只保留最重要的产出":"Keep only the highest-value output at each stage.",
  "18 周课程与竞赛双轨计划":"18-Week Course and Competition Plan",
  "课程部分对齐数学建模、线代、物理、化学官方大纲":"Courses aligned with the official modeling, linear algebra, physics and chemistry syllabi",
  "执行建议":"Execution Advice",
  "从效率手册和升学规则中提炼":"Derived from the efficiency handbook and academic progression rules",
  "资料核对日期：":"Data checked:",
  "竞赛日期可能调整，以官方通知为准。":"Competition dates may change; official notices take precedence.",
  "本页与完整版共用本地学习数据。":"This page shares local learning data with the full dashboard.",
  "最近节点":"Next Deadline",
  "打开官方入口":"Open Official Page",
  "当前状态":"Current Status",
  "没有登记中的紧急截止日期":"No Urgent Deadline Registered",
  "稳住":"Stay Consistent",
  "继续推进课程、算法和项目；新比赛通知发布后再加入。":"Continue courses, algorithms and projects; add new competitions when official notices appear.",
  "当前学期周次":"Current Semester Week",
  "当前可报 / 可准备":"Open / Preparing",
  "已加入个人备战":"Added to My Plan",
  "仍可探索的项目":"More Opportunities",
  "确认转专业范围":"Confirm Transfer Scope",
  "向学院确认只能院内转，还是可申请本部计算机学院。":"Confirm whether transfer is limited within the institute or can target the main Computer Science College.",
  "建立编程底座":"Build Programming Foundations",
  "C++、数据结构、CSP真题；这是转CS最直接的证据。":"C++, data structures and CSP problems are the most direct evidence for a CS transfer.",
  "组队与项目":"Teams and Projects",
  "APMCM/美赛练建模，大创/实验室形成长期成果。":"Use APMCM/MCM for modeling and long-term innovation-lab projects for sustained output.",
  "最高优先":"Highest Priority",
  "高优先":"High Priority",
  "拓展":"Extension",
  "已加入备战":"Added",
  "加入备战":"Add to Plan",
  "报名 / 官方入口":"Register / Official Page",
  "政策 / 通知":"Policy / Notice",
  "查看价值、目标与准备路线":"View value, goals and preparation path",
  "为什么值得":"Why It Matters",
  "阶段目标":"Stage Goal",
  "准备清单":"Preparation Checklist",
  "当前筛选没有结果。清除月份或更换分类试试。":"No results for the current filters. Clear the month or change the category.",
  "全部":"All",
  "计算机":"Computer Science",
  "数学建模":"Mathematical Modeling",
  "科研创新":"Research & Innovation",
  "工程实践":"Engineering Practice",
  "英语表达":"English Communication",
  "全部阶段":"All Stages",
  "当前可报":"Open Now",
  "准备期":"Preparing",
  "下一周期":"Next Cycle",
  "暂不符合":"Not Eligible Yet",
  "大一可报名":"Open to Freshmen",
  "项":"items",
  "课":"lessons",
  "天":"days",
  "SCAI 升学竞赛作战台":"SCAI Competition Hub",
  "SCAI 每日训练打卡":"SCAI Daily Training",
  "转 CS 自学导航":"CS Transfer Learning Path",
  "公开课与视频":"Courses and Videos",
  "CHAPTERS精讲":"CHAPTER LESSONS",
  "章节精讲":"Chapter Lessons",
  "深色模式":"Dark Mode",
  "重置进度":"Reset Progress",
  "总进度":"Total Progress",
  "已掌握知识点":"Concepts Mastered",
  "已CompleteChapters":"Chapters Completed",
  "已Complete学习周":"Weeks Completed",
  "下一步建议":"Next Step",
  "进入本章":"Open Chapter",
  "This Week安排":"This Week's Plan",
  "查看完整 16 Weekly Plan":"View Full 16-Week Plan",
  "阶段一 · 编程与 C++ 基础":"Stage 1 · Programming and C++ Foundations",
  "阶段二 · 分支与循环":"Stage 2 · Branching and Loops",
  "阶段三 · 函数与数组":"Stage 3 · Functions and Arrays",
  "阶段四 · 算法, 指针与字符串":"Stage 4 · Algorithms, Pointers and Strings",
  "本章目标":"Chapter Goals",
  "本章视频":"Chapter Videos",
  "本章免费公开课":"Free Course Videos",
  "标记完成":"Mark Complete",
  "标记本周完成":"Mark This Week Complete",
  "安装":"Install",
  "安装到手机":"Install on Phone",
  "按阶段推进":"Move Stage by Stage",
  "免费公开课":"Free Course Videos",
  "精讲":"Lessons",
  "C++ 自学Overview":"C++ Learning Overview",
  "C++ 自学总览":"C++ Learning Overview",
  "This Week安排":"This Week's Plan",
  "本周安排":"This Week's Plan",
  "已CompleteChapters":"Chapters Completed",
  "已Complete学习周":"Weeks Completed",
  "已掌握章节":"Chapters Completed",
  "已掌握学习周":"Weeks Completed",
  "已完成章节":"Chapters Completed",
  "已完成学习周":"Weeks Completed",
  "ChaptersLessons":"Chapter Lessons",
  "TopicsPages":"Topics · Pages",
  "16 Weekly Plan":"16-Week Plan",
  "16 周计划":"16-Week Plan",
  "查看完整 16 周计划":"View Full 16-Week Plan",
  "自学":"Learning",
  "知识点":"Topics",
  "查看完整":"View Full",
  "阶段一":"Stage 1",
  "阶段二":"Stage 2",
  "阶段三":"Stage 3",
  "阶段四":"Stage 4",
  "阶段四 · 算法、指针与字符串":"Stage 4 · Algorithms, Pointers and Strings",
  "高等数学（上册）":"Advanced Mathematics, Volume 1",
  "大学数学 · 微积分（上）":"SJTU Calculus, Volume 1",
  "大学数学 · 微积分（下）":"SJTU Calculus, Volume 2",
  "C++程序设计语言（第1-3部分）":"The C++ Programming Language, Parts 1-3",
  "汇编语言程序设计":"Assembly Language Programming",
  "大学计算机基础":"Computer Fundamentals",
  "大学物理学（第4版）· 力学、热学":"University Physics: Mechanics and Thermodynamics",
  "大学物理学（第4版）· 电磁学、光学、量子物理":"University Physics: Electromagnetism, Optics and Quantum Physics",
  "大学物理学 · 热学、光学、量子物理":"University Physics: Thermodynamics, Optics and Quantum Physics",
  "大学物理学 学习辅导与习题解答":"University Physics Study Guide and Solutions",
  "完成第一次能力定位":"Complete the First Skill Audit",
  "形成下一层证据":"Build the Next Layer of Evidence",
  "项完成":"items complete",
  "重要口径：2026年校级转专业通知限制匹兹堡学院学生原则上只能在学院内转专业；奥克兰学院公开介绍说明可在其五个专业间申请转专业。是否能申请本部计算机学院必须向学院和教务处书面确认。":"Important: the 2026 transfer notice restricts Pittsburgh Institute students to transfers within the institute. Auckland Institute materials describe transfer among its five majors. Confirm in writing with the institute and Academic Affairs whether applying to the main Computer Science College is possible."
};

for(const [source,target] of Object.entries(window.SCAI_UI_EN_EXTRA||{})){
  if(!exact[source])exact[source]=target;
}

const phraseEntries=Object.entries(exact)
  .filter(([source])=>source.length>=3)
  .sort((a,b)=>b[0].length-a[0].length);
const han=/[\u3400-\u9fff]/;

function normalizePunctuation(value){
  return value
    .replace(/，/g,", ")
    .replace(/。/g,". ")
    .replace(/；/g,"; ")
    .replace(/：/g,": ")
    .replace(/！/g,"! ")
    .replace(/？/g,"? ")
    .replace(/（/g,"(")
    .replace(/）/g,")")
    .replace(/【/g,"[")
    .replace(/】/g,"]")
    .replace(/《/g,"<")
    .replace(/》/g,">")
    .replace(/、/g,", ")
    .replace(/“|”/g,'"')
    .replace(/‘|’/g,"'")
    .replace(/\s{2,}/g," ");
}

function translateText(value){
  if(!value||!han.test(value))return value;
  const trimmed=value.trim();
  if(exact[trimmed]){
    const leading=value.match(/^\s*/)[0];
    const trailing=value.match(/\s*$/)[0];
    return leading+exact[trimmed]+trailing;
  }
  let output=value;
  for(const [source,target] of phraseEntries){
    if(source.length>1&&output.includes(source))output=output.split(source).join(target);
  }
  const monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  output=output
    .replace(/第\s*(\d+)\s*天/g,"Day $1")
    .replace(/第\s*(\d+)\s*周/g,"Week $1")
    .replace(/第\s*(\d+)\s*节/g,"Period $1")
    .replace(/(\d{1,2})月/g,(match,month)=>monthNames[Number(month)-1]||match)
    .replace(/(\d+)\s*课/g,"$1 lessons")
    .replace(/(\d+)\s*天/g,"$1 days")
    .replace(/(\d+)\s*项/g,"$1 items");
  output=output
    .replace(/(\d+\s*\/\s*\d+)\s*知识点\s*书内\s*pp\.\s*([\d-]+)/g,"$1 Topics · Pages $2")
    .replace(/(\d+)\s*个知识点/g,"$1 topics")
    .replace(/(\d+\s*\/\s*\d+)\s*知识点/g,"$1 topics")
    .replace(/(\d+\s*\/\s*\d+)\s*个Topics/g,"$1 topics")
    .replace(/已CompleteChapters/g,"Chapters Completed")
    .replace(/已Complete学习周/g,"Weeks Completed")
    .replace(/TopicsPages/g,"Topics · Pages")
    .replace(/This Week安排/g,"This Week's Plan")
    .replace(/书内\s*pp\./g,"Pages")
    .replace(/第\s*(\d+)\s*章精读/g,"Chapter $1 Reading")
    .replace(/第\s*(\d+)\s*章/g,"Chapter $1")
    .replace(/(\d+)\s*章/g,"$1 chapters");
  return normalizePunctuation(output);
}

function translateAttributes(element){
  for(const name of ["placeholder","title","aria-label","alt"]){
    if(element.hasAttribute&&element.hasAttribute(name)){
      const current=element.getAttribute(name);
      const translated=translateText(current);
      if(translated!==current)element.setAttribute(name,translated);
    }
  }
}

function translateTree(root){
  if(!root)return;
  if(root.nodeType===Node.TEXT_NODE){
    const translated=translateText(root.nodeValue);
    if(translated!==root.nodeValue)root.nodeValue=translated;
    return;
  }
  if(root.nodeType!==Node.ELEMENT_NODE&&root.nodeType!==Node.DOCUMENT_NODE)return;
  if(root.nodeType===Node.ELEMENT_NODE){
    if(/^(SCRIPT|STYLE|CODE|PRE)$/.test(root.tagName))return;
    translateAttributes(root);
  }
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let node;
  while((node=walker.nextNode()))translateTextNode(node);
  root.querySelectorAll&&root.querySelectorAll("[placeholder],[title],[aria-label],[alt]").forEach(translateAttributes);
}

function translateTextNode(node){
  if(node.parentElement&&/^(SCRIPT|STYLE|CODE|PRE)$/.test(node.parentElement.tagName))return;
  const translated=translateText(node.nodeValue);
  if(translated!==node.nodeValue)node.nodeValue=translated;
}

function start(){
  translateTree(document);
  if(document.title)document.title=translateText(document.title);
  const observer=new MutationObserver(mutations=>{
    for(const mutation of mutations){
      if(mutation.type==="characterData")translateTextNode(mutation.target);
      else mutation.addedNodes.forEach(translateTree);
    }
  });
  observer.observe(document.documentElement,{subtree:true,childList:true,characterData:true});
}

if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});
else start();

window.SCAI_TRANSLATE_EN=translateText;
})();
