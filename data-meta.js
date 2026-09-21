window.SCAI_META = {
  title: "SCAI ME1 Study Hub",
  version: "2.2.0",
  versionLabel: "第四版 · 官方大纲与课件智能分析",
  subtitle: "大一全教材学习中心 · 国内 ↔ 英文双线 · 官方大纲进度 · 课件自动知识图谱 · AI 伴学",
  semester: "2026 Fall · Sichuan University - Auckland Institute · Mechanical Engineering 1",
  startLabel: "开学第 1 周（2026 秋）",
  generated: "2026-09-14"
};

window.SCAI_BOOKS = [
  { id: "essential-calculus", title: "Essential Calculus", edition: "2nd Edition", author: "James Stewart", pages: 976, course: "calculus", role: "主教材", chapters: "13 章", fall: "Ch 1-7", spring: "Ch 8-13" },
  { id: "tongji-calculus", title: "高等数学（上册）", edition: "第八版", author: "同济大学数学科学学院", pages: 442, course: "calculus", role: "中文参考", chapters: "7 章", fall: "全册", spring: "—" },
  { id: "sjtu-calculus-1", title: "大学数学 · 微积分（上）", edition: "上海交通大学课程组", author: "上海交通大学数学系微积分课程组", pages: 383, course: "calculus", role: "国内逐章精读", chapters: "第1-6章", fall: "全册", spring: "—" },
  { id: "sjtu-calculus-2", title: "大学数学 · 微积分（下）", edition: "上海交通大学课程组", author: "上海交通大学数学系微积分课程组", pages: 307, course: "calculus", role: "国内先修精读", chapters: "第7-11章", fall: "先修", spring: "全册" },
  { id: "poole", title: "Linear Algebra: A Modern Introduction", edition: "4th Edition", author: "David Poole", pages: 721, course: "linear-algebra", role: "主教材", chapters: "7 章 + 在线 Ch 8", fall: "Ch 1-7", spring: "Ch 8 拓展" },
  { id: "physics", title: "Principles of Physics", edition: "12th Edition, International Adaptation", author: "Halliday / Resnick / Walker", pages: 1457, course: "physics", role: "主教材", chapters: "44 章", fall: "Ch 1-20", spring: "Ch 21-44" },
  { id: "chemistry", title: "Chemistry: Atoms First", edition: "4th Edition", author: "Julia Burdge & Jason Overby", pages: 1273, course: "chemistry", role: "主教材", chapters: "26 章", fall: "Ch 1-13", spring: "Ch 14-26" },
  { id: "statics", title: "Engineering Mechanics: Statics", edition: "9th Edition", author: "Meriam / Kraige / Bolton", pages: 460, course: "mechanics", role: "主教材", chapters: "7 章", fall: "Ch 1-7", spring: "—" },
  { id: "dynamics", title: "Engineering Mechanics: Dynamics", edition: "9th Edition", author: "Meriam / Kraige / Bolton", pages: 623, course: "mechanics", role: "主教材", chapters: "8 章", fall: "Ch 1-4", spring: "Ch 5-8" },
  { id: "mech-combined", title: "Engineering Mechanics Statics and Dynamics", edition: "9th Edition · 合并版", author: "Meriam 等 · 印度改编版", pages: 1981, course: "mechanics", role: "备用 / 对照", chapters: "15 章", fall: "Part I + IIA", spring: "Part IIB" },
  { id: "zhang-physics-mt", title: "大学物理学（第4版）· 力学、热学", edition: "第4版", author: "张三慧", pages: 428, course: "physics", role: "国内逐章精读", chapters: "11 章", fall: "全册", spring: "—" },
  { id: "zhang-physics-eo", title: "大学物理学（第4版）· 电磁学、光学、量子物理", edition: "第4版", author: "张三慧", pages: 515, course: "physics", role: "国内逐章精读", chapters: "第12-30章", fall: "先修", spring: "全册" },
  { id: "zhang-physics-split", title: "大学物理学 · 热学、光学、量子物理", edition: "分册版", author: "张三慧", pages: 496, course: "physics", role: "分册对照", chapters: "第17-30章", fall: "对照", spring: "对照" },
  { id: "zhang-physics-guide", title: "大学物理学 学习辅导与习题解答", edition: "第4版", author: "张三慧", pages: 402, course: "physics", role: "解题辅导", chapters: "全章配套", fall: "全册", spring: "全册" },
  { id: "cpp-stroustrup", title: "C++程序设计语言（第1-3部分）", edition: "原书第4版", author: "Bjarne Stroustrup", pages: 750, course: "programming", role: "国内编程精读", chapters: "第1-29章", fall: "全年", spring: "全年" },
  { id: "assembly", title: "汇编语言程序设计", edition: "国内课程教材", author: "高校汇编课程组", pages: 255, course: "programming", role: "机器级编程", chapters: "12 章", fall: "全年", spring: "全年" },
  { id: "computer-fundamentals", title: "大学计算机基础", edition: "人民邮电出版社", author: "姚琳 主编", pages: 234, course: "programming", role: "计算机通识", chapters: "6 章", fall: "全册", spring: "—" }
];

window.SCAI_PLAN = {
  weeks: [
    { week: 1, theme: "适应与建档", focus: ["高数：函数与极限", "线代：向量与几何", "物理：测量与一维运动", "化学：原子与周期表", "力学：静力学基础", "Python：环境与第一个脚本", "英语：每日 30 词"], milestones: ["建立笔记与错题系统", "完成各课诊断测试", "固定每日时间槽"], verify: ["高数 Ch1 核心习题 20 道", "线代 Ch1 习题 15 道", "Python 3 个小程序"], prep: "浏览各课 syllabus 与评分权重" },
    { week: 2, theme: "极限与向量", focus: ["高数：极限计算与连续", "线代：线性组合与点积", "物理：二维运动与抛体", "化学：量子理论与周期趋势", "力学：力系与力矩", "Python：变量、分支与循环", "英语：听力入门"], milestones: ["极限题 30 道零错误", "画清 2D 受力图", "Python 循环作业"], verify: ["高数 Ch1 复习题", "线代 Ch1 复习题", "物理 Ch3-4 习题"], prep: "开始整理公式卡" },
    { week: 3, theme: "求导与方程组", focus: ["高数：导数定义与求导法则", "线代：高斯消元与解的结构", "物理：牛顿定律与摩擦", "化学：化学键与分子几何", "力学：二维平衡与自由体图", "Python：函数与列表", "英语：学术写作基础"], milestones: ["链式法则 30 题", "自由体图 20 张", "第一篇英文摘要"], verify: ["高数 Ch2 习题", "线代 Ch2 习题", "物理 Ch5-6 习题"], prep: "联系学长了解转专业政策" },
    { week: 4, theme: "链式法则与矩阵", focus: ["高数：链式、隐函数与相关变化率", "线代：矩阵运算与逆矩阵", "物理：功与能量", "化学：反应与化学计量", "力学：桁架与截面法", "Python：字典、集合与文件", "英语：听力精听"], milestones: ["相关变化率应用题全对", "化学计量 20 题", "Python 文件处理小项目"], verify: ["高数 Ch2 复习", "线代 Ch3 习题", "化学 Ch8-9"], prep: "整理转专业材料清单" },
    { week: 5, theme: "中值定理与特征值", focus: ["高数：MVT、极值与作图", "线代：行列式与特征值", "物理：动量与碰撞", "化学：热化学与赫斯定律", "力学：节点法求桁架", "Python：NumPy 入门", "英语：阅读技巧"], milestones: ["高数作图流程完整走一遍", "2×2 特征值手算 20 题", "第一次全科周测"], verify: ["高数 Ch3 习题", "线代 Ch4 前半", "物理 Ch9"], prep: "期中复习材料建档" },
    { week: 6, theme: "积分初步与正交性", focus: ["高数：不定积分与换元", "线代：特征向量与对角化", "物理：转动与角动量", "化学：气体与溶液", "力学：分布力与形心", "Python：Pandas 入门", "英语：口语练习"], milestones: ["换元积分 30 题", "Pandas 数据清洗案例", "英文小组展示提纲"], verify: ["高数 Ch4", "线代 Ch4 后半", "物理 Ch10-11"], prep: "联系 AI 方向导师表达进组意愿" },
    { week: 7, theme: "定积分与期中冲刺", focus: ["高数：定积分与 FTC", "线代：正交性与投影", "物理：平衡、引力与流体", "化学：动力学与平衡先修", "力学：摩擦与虚功", "Python：数据项目", "英语：写作强化"], milestones: ["期中模考 2 套", "错题本清零", "Python 数据分析小项目完成"], verify: ["高数 Ch4 复习", "线代 Ch5", "物理 Ch12-14"], prep: "期中成绩是转专业重要参考" },
    { week: 8, theme: "期中考试周", focus: ["全科期中复习", "按考试优先级分配时间", "保持英语与 Python 最低投入", "考后试卷复盘"], milestones: ["完成所有期中考试", "整理薄弱知识点清单", "期中复盘报告"], verify: ["错题重做", "薄弱点专项 20 题"], prep: "暂停新内容，全力课内" },
    { week: 9, theme: "积分技巧与最小二乘", focus: ["高数：分部积分与三角代换", "线代：Gram-Schmidt 与最小二乘", "物理：振动与波动", "化学：气体/溶液进阶", "力学：质点运动学", "Python：机器学习概念", "英语：雅思阅读"], milestones: ["分部积分 30 题", "最小二乘拟合实现", "跑通第一个分类模型"], verify: ["高数 Ch6", "线代 Ch5 后半", "物理 Ch15-16"], prep: "概率论正式启动" },
    { week: 10, theme: "微分方程与向量空间", focus: ["高数：积分应用与 ODE", "线代：向量空间与基", "物理：声波与热学", "化学：酸碱与平衡", "力学：质点动力学", "Python：scikit-learn", "英语：写作大作文"], milestones: ["可分离 ODE 30 题", "概率论 随机事件 20 题", "ML 模型评估报告"], verify: ["高数 Ch7", "线代 Ch6", "物理 Ch17-18"], prep: "概率论与数理统计 MOOC 跟课" },
    { week: 11, theme: "先修启动", focus: ["高数：级数与泰勒", "线代：SVD 与距离", "物理：电磁学先修", "化学：电化学与有机", "力学：刚体动力学", "Python：PyTorch 入门", "英语：模考一次"], milestones: ["级数收敛判别 20 题", "PyTorch 张量练习", "第一次全科期末模考"], verify: ["高数 Ch8", "线代 Ch7", "物理 Ch21-22"], prep: "大一下课程地图建档" },
    { week: 12, theme: "期末冲刺第一轮", focus: ["按学分权重排序复习", "高数/线代/物理优先", "每天 2 套真题选择题", "错题按知识点聚类"], milestones: ["完成第一轮知识图谱", "高学分课程模拟卷 80+", "英语保持每日 30 分钟"], verify: ["各科错题重做", "公式卡背诵", "真题时间控制"], prep: "寒假先修计划初稿" },
    { week: 13, theme: "期末冲刺第二轮", focus: ["薄弱章节专项突破", "英文术语表默写", "小组作业与报告收尾", "保持睡眠与运动"], milestones: ["薄弱点清零", "英文报告提交前自查", "模考成绩稳定"], verify: ["专项题 30 道", "报告查重与引用检查"], prep: "转专业个人陈述初稿" },
    { week: 14, theme: "补强与先修加速", focus: ["根据 AI 助手分析补弱", "上传课件让 AI 生成考点清单", "大一下先修模块提速"], milestones: ["AI 生成课程重点清单", "期末高频考点清单", "概率论完成 1/3"], verify: ["高频考点自测", "先修模块视频 2 个"], prep: "MATLAB/数据结构任一启动" },
    { week: 15, theme: "期末考试周", focus: ["按考试日程执行", "每科考前只过高频考点", "保持英语与编程最低投入"], milestones: ["完成全部期末考试", "不熬夜，保持 7 小时睡眠"], verify: ["考前 15 分钟只看公式卡"], prep: "等待转专业结果" },
    { week: 16, theme: "收尾与寒假规划", focus: ["期末成绩复盘", "寒假高数下/物理下先修", "转专业材料与作品集", "雅思首考或四级规划"], milestones: ["寒假计划定稿", "GitHub 代码仓库整理", "转专业面试英文稿"], verify: ["成绩单复盘", "先修章节地图", "英语模考"], prep: "大一下正式课程预习" }
  ],
  daily: [
    { time: "07:30-08:00", task: "英语：词汇 30 个 + 跟读", purpose: "长期积累，适配全英文授课" },
    { time: "08:30-12:00", task: "上午课程 / 自习", purpose: "课前预习，课中记框架" },
    { time: "14:00-17:30", task: "下午课程 / 自习", purpose: "当堂消化，标记疑难" },
    { time: "19:00-21:00", task: "当晚主攻科目", purpose: "按周计划轮换高数/线代/物理等" },
    { time: "21:00-22:00", task: "Python / AI / 英语专项", purpose: "转专业补短板" },
    { time: "22:00-22:30", task: "复盘与次日计划", purpose: "清空遗留，闭环" },
    { time: "23:00 前", task: "休息", purpose: "睡眠不少于 7 小时" }
  ]
};

window.SCAI_COMPARE = {
  similarities: [
    "都是大一第一年的数学基础教材，强调定义、定理、例题与习题的完整学习闭环。",
    "都把计算熟练度作为考核主线，考试离不开大量手算训练。",
    "都要求理解“为什么”，同济高数讲证明与推导，Stewart 讲概念与图示，Poole 讲几何与直觉。",
    "都配有大量分层习题，从基础计算到综合应用题逐步递进。",
    "都服务于工程学科，微积分与线性代数在物理、力学、化学、AI 中交叉出现。"
  ],
  differences: [
    { dim: "学科主题", tongji: "一元微积分（极限、导数、积分、ODE）", stewart: "完整微积分（含级数、多元、向量微积分）", poole: "线性代数（向量、矩阵、特征值、向量空间）" },
    { dim: "章节结构", tongji: "上册 7 章，下册另有 5 章", stewart: "13 章 + 附录，一册覆盖两学期", poole: "7 章 + 在线第 8 章编码理论" },
    { dim: "编排逻辑", tongji: "定义 → 定理 → 证明 → 例题 → 习题", stewart: "具体例子先行 → 概念 → 应用项目", poole: "向量优先、几何优先，先具体后抽象" },
    { dim: "证明严格度", tongji: "较高，含 ε-δ 与中值定理证明", stewart: "完整但更重直观，证明精选", poole: "证明可读、基础，复杂证明放在选读" },
    { dim: "习题风格", tongji: "计算量大、题型规范、适合应考", stewart: "每节 Exercises + Review + 项目题", poole: "2000+ 习题，含 True/False 概念题与应用题" },
    { dim: "技术工具", tongji: "纸笔计算为主", stewart: "可选 CAS/图形计算器", poole: "明确支持 MATLAB/CAS 与数值线性代数" },
    { dim: "应用导向", tongji: "以物理与工程计算为主", stewart: "工程、生物、经济等 Applied Projects", poole: "GPS、搜索引擎、图像压缩、编码等现实案例" },
    { dim: "英文学习建议", tongji: "用来补计算熟练度和中文概念", stewart: "掌握英文术语与完整课程体系", poole: "建立向量与变换的几何直觉，服务 AI" }
  ],
  terms: [
    { en: "limit", zh: "极限", note: "函数行为在 x→a 时的趋势" },
    { en: "continuity", zh: "连续", note: "极限值等于函数值" },
    { en: "derivative", zh: "导数", note: "瞬时变化率" },
    { en: "chain rule", zh: "链式法则", note: "复合函数求导" },
    { en: "definite integral", zh: "定积分", note: "黎曼和的极限" },
    { en: "fundamental theorem of calculus", zh: "微积分基本定理", note: "微分与积分互逆" },
    { en: "vector", zh: "向量", note: "有大小和方向的量" },
    { en: "linear combination", zh: "线性组合", note: "标量加权和" },
    { en: "matrix", zh: "矩阵", note: "线性变换的表格表示" },
    { en: "rank", zh: "秩", note: "行/列空间的维数" },
    { en: "determinant", zh: "行列式", note: "衡量线性变换的缩放" },
    { en: "eigenvalue / eigenvector", zh: "特征值 / 特征向量", note: "变换后方向不变的向量" },
    { en: "diagonalization", zh: "对角化", note: "相似到对角矩阵" },
    { en: "orthogonal", zh: "正交", note: "点积为零" },
    { en: "linear independence", zh: "线性无关", note: "不能由其他向量线性表示" },
    { en: "basis", zh: "基", note: "线性无关且张成空间" },
    { en: "dimension", zh: "维数", note: "基中向量个数" },
    { en: "least squares", zh: "最小二乘", note: "最小化残差平方和" },
    { en: "singular value decomposition", zh: "奇异值分解", note: "SVD，矩阵分解为 UΣVᵀ" }
  ]
};
