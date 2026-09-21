window.SCAI_COURSES = [
  {
    id: "calculus",
    order: 1,
    name: "数学建模 1 · 微积分",
    enName: "Mathematical Modeling 1 / Essential Calculus",
    code: "FALL-01",
    textbook: "Essential Calculus 2e (Stewart) + 上海交大《大学数学·微积分》上/下 + 同济高数参考",
    pages: "976 / 383 / 307",
    chapters: "Stewart Ch 1-13 · 上海交大微积分 第1-11章",
    semester: "fall",
    accent: "#C4522E",
    summary: "本课程与 Mathematical Modeling 1 大纲同步：前 5 周从量纲、概率和函数进入导数，第 6-16 周集中突破求导、优化、积分技巧、数值近似与建模。Stewart 负责英文概念，上海交大《大学数学·微积分》负责中文章节精读和规范计算。",
    goals: ["能用极限语言解释连续与导数", "熟练求导、积分与常见 ODE", "用微积分解决工程最值与物理问题", "为级数与多元微积分先修打底"],
    extraVideos: [
      { title: "宋浩《高等数学》全程教学视频", source: "Bilibili", url: "https://www.bilibili.com/video/BV1UW411k7Jv/", note: "从数列极限开始，逐步讲透全书" },
      { title: "宋浩《高等数学》2.0 版", source: "Bilibili", url: "https://www.bilibili.com/video/BV1CAxaeHEeH/", note: "新版完整课程，章节清晰" },
      { title: "3Blue1Brown《微积分的本质》", source: "Bilibili", url: "https://www.bilibili.com/video/BV1qW411N7FU/", note: "用动画建立极限、导数、积分的直觉" },
      { title: "MIT 18.01 视频课堂", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/video_galleries/video-lectures/", note: "英文原版经典课堂" }
    ],
    lessons: [
      {
        id: "cal-1",
        title: "函数与极限",
        en: "Functions and Limits",
        chapters: "Stewart Ch 1 · 同济 上册 第1章",
        week: "第1-2周",
        focus: "建立函数、极限、连续三位一体的语言系统。",
        points: ["函数定义域、值域、复合函数与反函数", "ε-δ 极限的直觉与四则运算", "夹逼准则与两个重要极限", "无穷小阶的比较与等价无穷小", "连续定义、间断点分类与闭区间性质"],
        pitfalls: ["0/0 型不能直接代值，先变形再求极限", "等价无穷小只可用于乘除，不可随意替换加减项", "分段函数在分段点的极限必须分别求左右极限", "判断间断点时先看定义域边界与分母零点"],
        exams: ["求极限综合题（含重要极限与等价无穷小）", "分段函数连续性与参数求解", "间断点分类"],
        videos: [
          { title: "高等数学（一）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" },
          { title: "高等数学 第一章 函数、极限、连续", source: "Bilibili", url: "https://www.bilibili.com/video/BV1C34y1x7C4/" },
          { title: "The Essence of Calculus · 3Blue1Brown", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }
        ]
      },
      {
        id: "cal-2",
        title: "导数与微分",
        en: "Derivatives and Differentials",
        chapters: "Stewart Ch 2 · 同济 上册 第2章",
        week: "第3-4周",
        focus: "从变化率出发掌握求导工具链。",
        points: ["导数定义与切线斜率", "四则、乘积、商与链式法则", "隐函数求导与对数求导法", "相关变化率问题", "线性近似与微分"],
        pitfalls: ["复合函数漏乘内层导数", "隐函数求导后漏写 dy/dx", "相关变化率必须先建立方程再对 t 求导", "对数求导法只适用于正数因子可乘除的场景"],
        exams: ["复合函数求导与隐函数求导", "相关变化率应用题", "利用微分做近似计算"],
        videos: [
          { title: "MIT 18.01 视频课堂", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/video_galleries/video-lectures/" },
          { title: "高等数学（一）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" }
        ]
      },
      {
        id: "cal-3",
        title: "导数的应用",
        en: "Applications of Differentiation",
        chapters: "Stewart Ch 3 · 同济 上册 第3章",
        week: "第4-6周",
        focus: "用中值定理与二阶导数读懂函数图像并解决最值问题。",
        points: ["极值与最值、临界点", "罗尔定理与拉格朗日中值定理", "单调性与一阶导符号", "凹凸性与二阶导符号", "函数作图流程", "优化问题建模与牛顿法"],
        pitfalls: ["端点与不可导点也必须在最值候选内", "f''(x)=0 不一定有拐点，需验证两侧符号", "应用题不写约束条件与可行域", "中值定理使用前先验证连续性、可导性"],
        exams: ["利用导数判定单调性/极值/最值", "优化问题（面积、体积、成本）", "证明题：用中值定理估计范围"],
        videos: [
          { title: "高等数学（一）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" },
          { title: "The Essence of Calculus · 3Blue1Brown", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }
        ]
      },
      {
        id: "cal-4",
        title: "定积分与微积分基本定理",
        en: "Integrals and the FTC",
        chapters: "Stewart Ch 4 · 同济 上册 第4-5章",
        week: "第6-8周",
        focus: "把面积求和升级为积分，并理解 FTC 的桥梁作用。",
        points: ["黎曼和与定积分定义", "微积分基本定理一、二", "换元积分法", "偶函数与奇函数在对称区间的积分", "面积与距离问题"],
        pitfalls: ["换元后忘记同步改变上下限", "奇偶性结论只适用于对称区间", "定积分是数，结果中不能残留积分变量", "分段函数积分要拆分区间"],
        exams: ["利用 FTC 求导或求值", "换元法计算定积分", "对称区间奇偶函数积分"],
        videos: [
          { title: "高等数学（一）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" },
          { title: "Integration and the Fundamental Theorem of Calculus", source: "YouTube", url: "https://www.youtube.com/watch?v=rfG8ce4nNh0" }
        ]
      },
      {
        id: "cal-5",
        title: "反函数、指数对数与洛必达法则",
        en: "Inverse Functions and L'Hopital's Rule",
        chapters: "Stewart Ch 5 · 同济 上册 第3章（洛必达）",
        week: "第6-8周",
        focus: "补齐超越函数导数，并学会处理未定式极限。",
        points: ["反函数导数公式", "自然对数与自然指数", "一般指数/对数函数求导", "反三角函数与双曲函数", "0/0、∞/∞ 型洛必达法则", "指数增长与衰减模型"],
        pitfalls: ["洛必达使用前必须验证未定式类型", "反复使用洛必达前先检查是否回到原式", "反函数求导公式与反函数值易混淆", "换底公式应用不熟练会卡在指数函数求导"],
        exams: ["指数对数复合函数求导", "洛必达法则求极限", "增长衰减模型（半衰期、人口）"],
        videos: [
          { title: "MIT 18.01 视频课堂", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/video_galleries/video-lectures/" },
          { title: "高等数学（一）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" }
        ]
      },
      {
        id: "cal-6",
        title: "积分技巧",
        en: "Techniques of Integration",
        chapters: "Stewart Ch 6 · 同济 上册 第4-5章（深化）",
        week: "第9-10周",
        focus: "分部积分、三角积分、三角代换与部分分式构成积分工具箱。",
        points: ["分部积分：LIATE 选 u", "三角恒等式化简积分", "三角代换与配方", "有理函数部分分式", "近似积分（梯形/辛普森）", "反常积分收敛性"],
        pitfalls: ["分部积分 u 与 dv 选反导致循环无进展", "三角代换后忘记回代成 x 的表达式", "部分分式分解先检查真分式", "反常积分上下限代值要用极限而不是直接代入"],
        exams: ["分部积分与三角代换", "部分分式积分", "反常积分收敛性与值"],
        videos: [
          { title: "MIT 18.01 视频课堂", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/video_galleries/video-lectures/" },
          { title: "高等数学（一）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" }
        ]
      },
      {
        id: "cal-7",
        title: "积分的应用与微分方程",
        en: "Applications of Integration and ODEs",
        chapters: "Stewart Ch 7 · 同济 上册 第6-7章",
        week: "第9-12周",
        focus: "把积分用于面积、体积、弧长、物理问题，并入门一阶微分方程。",
        points: ["曲线间面积", "旋转体体积：圆盘/壳层", "弧长与旋转曲面面积", "功、压力、流出的物理应用", "可分离变量微分方程", "初值问题与指数模型"],
        pitfalls: ["选择 dx 或 dy 积分方向时搞反上下限", "壳层法与圆盘法混用导致体积公式错误", "建立物理模型时单位不一致", "分离变量后忘记加积分常数 C"],
        exams: ["旋转体体积与曲线面积", "物理应用（做功、水压力）", "一阶线性/可分离 ODE 初值问题"],
        videos: [
          { title: "MIT 18.01 视频课堂", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/video_galleries/video-lectures/" },
          { title: "高等数学（二）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" }
        ]
      },
      {
        id: "cal-8",
        title: "级数与多元微积分先修",
        en: "Series and Multivariable Calculus Prep",
        chapters: "Stewart Ch 8-13",
        week: "第11-16周（先修）",
        focus: "期末后衔接大一下：级数、多元函数、多重积分与向量微积分。",
        points: ["数列与级数收敛判别", "幂级数与泰勒展开", "参数曲线与极坐标", "空间向量、直线与平面", "偏导数、梯度与拉格朗日乘子", "二重/三重积分与坐标变换", "线面积分与三大定理"],
        pitfalls: ["比值/根值判别法只对正项级数可直接使用", "泰勒展开要先写收敛半径", "多元函数极限沿不同路径可能不同", "换元积分忘记雅可比行列式"],
        exams: ["级数收敛性判断", "多元函数极值", "二重积分计算", "Green/Stokes/散度定理"],
        videos: [
          { title: "高等数学（三）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" },
          { title: "The Essence of Calculus · 3Blue1Brown", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }
        ]
      }
    ],
    quiz: [
      { q: "lim(x→0) sin(3x)/x 的值是？", options: ["0", "1", "3", "不存在"], answer: 2, explain: "由重要极限 lim(u→0) sin(u)/u = 1，令 u=3x，原式 = 3·1 = 3。" },
      { q: "d/dx [sin(x²)] = ?", options: ["cos(x²)", "2x·cos(x²)", "2x·sin(x²)", "cos(2x)"], answer: 1, explain: "链式法则：外层 sin 求导为 cos(x²)，再乘内层导数 2x。" },
      { q: "∫₀¹ 2x dx = ?", options: ["0", "1", "2", "1/2"], answer: 1, explain: "∫2x dx = x²，代入 1 和 0 得 1。" },
      { q: "lim(x→0) (eˣ−1)/x = ?", options: ["0", "1", "e", "∞"], answer: 1, explain: "这是 eˣ 在 0 处的导数定义，结果为 1；也可用洛必达。" },
      { q: "∫₁^∞ 1/x² dx = ?", options: ["发散", "1", "2", "0"], answer: 1, explain: "原函数为 −1/x，从 1 到 ∞ 取极限得 0−(−1)=1。" },
      { q: "f'(x)>0 且 f''(x)<0 时，函数图像为？", options: ["递增且上凸", "递增且下凸", "递减且上凸", "递减且下凸"], answer: 0, explain: "一阶导正 → 递增；二阶导负 → 上凸（concave down）。" },
      { q: "下列哪个函数在 x=0 处不连续？", options: ["f(x)=sin x / x（补充定义 f(0)=1）", "f(x)=|x|", "f(x)=1/x", "f(x)=x²"], answer: 2, explain: "1/x 在 x=0 无定义且双侧极限发散，因此不连续。" }
    ],
    online: [
      { title: "Paul's Online Notes · Calculus I Practice Problems", url: "https://tutorial.math.lamar.edu/problems/calci/CalcI.aspx", note: "按章节分题的英文题库" },
      { title: "OpenStax Calculus Volume 1", url: "https://openstax.org/details/books/calculus-volume-1", note: "免费教材 + 章节练习" },
      { title: "Khan Academy AP Calculus AB", url: "https://www.khanacademy.org/math/ap-calculus-ab", note: "自适应练习题与讲解" }
    ],
    practice: [
      { title: "MIT 18.01 习题与考试", url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/pages/assignments/", note: "英文原版经典训练" },
      { title: "同济大学《高等数学》MOOC", url: "https://www.icourse163.org/course/TONGJI-53004", note: "中文教材配套讲解" },
      { title: "国家高等教育智慧教育平台 · 高等数学", url: "https://higher.smartedu.cn/course/687815dd16c43a09c0c46fdb", note: "同济官方 MOOC 入口" }
    ]
  },
  {
    id: "linear-algebra",
    order: 2,
    name: "矩阵与线性代数",
    enName: "Matrices and Linear Algebra (Poole)",
    code: "FALL-02",
    textbook: "Linear Algebra: A Modern Introduction 4e (Poole)",
    pages: "721",
    chapters: "Ch 1-7 + 在线 Ch 8",
    semester: "fall",
    accent: "#2E6E5E",
    summary: "Poole 的写法是向量优先、几何直观优先。先建立向量与几何直觉，再进入方程组、矩阵、特征值、正交性、向量空间与 SVD，正好服务 AI 和机器学习。",
    goals: ["能解释向量、线性组合与线性无关的几何含义", "熟练高斯消元、矩阵运算与特征值计算", "理解基、维数、线性变换与矩阵的联系", "掌握最小二乘与 SVD 在 AI 中的应用"],
    extraVideos: [
      { title: "宋浩《线性代数》教学视频 2.0", source: "Bilibili", url: "https://www.bilibili.com/video/av113095196280717/", note: "中文全程课，覆盖同济版核心内容" },
      { title: "3Blue1Brown《线性代数的本质》", source: "Bilibili", url: "https://www.bilibili.com/video/BV1ys411472E/", note: "动画理解向量、矩阵与变换" },
      { title: "3Blue1Brown《线性代数的本质》官方合集", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab", note: "英文原版播放列表" },
      { title: "MIT 18.06 Linear Algebra", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/video_galleries/video-lectures/", note: "Gilbert Strang 经典课程" }
    ],
    lessons: [
      {
        id: "la-1",
        title: "向量与几何",
        en: "Vectors in R² and R³",
        chapters: "Poole Ch 1",
        week: "第1-2周",
        focus: "用几何直觉启动整个课程。",
        points: ["向量加减与数乘、平行四边形法则", "长度、点积与夹角", "正交与投影", "直线的参数方程", "平面方程与法向量", "线性组合的概念"],
        pitfalls: ["把点与向量混为一谈", "点积结果是标量不是向量", "投影公式分母忘写模长平方", "平面法向量不唯一，注意倍数"],
        exams: ["向量点积、夹角与正交判断", "平面/直线方程", "线性组合表示"],
        videos: [
          { title: "线性代数 · 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-481001" },
          { title: "Vectors · Essence of Linear Algebra", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
          { title: "《线性代数》教学视频 2.0 版 · 宋浩", source: "Bilibili", url: "https://www.bilibili.com/video/av113095196280717/" }
        ]
      },
      {
        id: "la-2",
        title: "线性方程组与消元法",
        en: "Systems of Linear Equations",
        chapters: "Poole Ch 2",
        week: "第2-4周",
        focus: "用行化简统一理解解的结构。",
        points: ["高斯消元与高斯-若尔当消元", "行阶梯形与最简行阶梯形", "主元、自由变量与秩", "齐次方程组与非齐次方程组", "无解/唯一解/无穷多解的判定", "线性组合与方程组的联系"],
        pitfalls: ["消元过程抄错符号", "把自由变量个数与解空间维数搞混", "无穷多解时参数选取不唯一", "判断无解要看增广矩阵是否出现矛盾行"],
        exams: ["增广矩阵行化简求通解", "参数讨论方程组的解", "齐次方程组非零解条件"],
        videos: [
          { title: "线性代数 · 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-481001" },
          { title: "MIT 18.06 线性代数", source: "YouTube", url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D" }
        ]
      },
      {
        id: "la-3",
        title: "矩阵与线性变换",
        en: "Matrices and Linear Transformations",
        chapters: "Poole Ch 3",
        week: "第3-5周",
        focus: "把矩阵理解为“变换”而不是表格。",
        points: ["矩阵运算与性质", "单位矩阵与逆矩阵", "初等矩阵与逆矩阵求法", "矩阵变换的几何含义", "行列空间、列空间与零空间", "秩-零化度定理"],
        pitfalls: ["矩阵乘法不满足交换律", "AB=0 不能推出 A=0 或 B=0", "可逆矩阵的列向量必须线性无关", "求逆时初等行变换不能混用列变换"],
        exams: ["矩阵乘法与求逆", "线性变换的矩阵表示", "子空间与秩"],
        videos: [
          { title: "MIT 18.06 线性代数", source: "YouTube", url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D" },
          { title: "《线性代数》教学视频 2.0 版 · 宋浩", source: "Bilibili", url: "https://www.bilibili.com/video/av113095196280717/" }
        ]
      },
      {
        id: "la-4",
        title: "行列式、特征值与特征向量",
        en: "Determinants, Eigenvalues and Eigenvectors",
        chapters: "Poole Ch 4",
        week: "第5-8周",
        focus: "行列式是工具，特征值才是主角。",
        points: ["行列式定义与性质", "展开定理与克莱姆法则", "特征方程与特征值", "特征向量与特征空间", "相似与对角化", "矩阵幂与马尔可夫链"],
        pitfalls: ["|AB|=|A||B| 正确，但 |A+B| 不可拆分", "特征向量不能为零向量", "重根特征值不一定可对角化", "矩阵幂公式只在对角化条件满足时成立"],
        exams: ["行列式计算", "求特征值与特征向量", "对角化与 Aⁿ 计算"],
        videos: [
          { title: "MIT 18.06 线性代数", source: "YouTube", url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D" },
          { title: "Eigenvectors and eigenvalues · 3Blue1Brown", source: "YouTube", url: "https://www.youtube.com/watch?v=PFDu9oVAE-g" }
        ]
      },
      {
        id: "la-5",
        title: "正交性与最小二乘",
        en: "Orthogonality and Least Squares",
        chapters: "Poole Ch 5 · Ch 7.3",
        week: "第6-10周",
        focus: "正交投影是机器学习回归背后的几何。",
        points: ["正交集与正交矩阵", "正交补与正交分解", "正交投影公式", "Gram-Schmidt 正交化", "QR 分解", "最小二乘解与正规方程"],
        pitfalls: ["投影到子空间用 A(AᵀA)⁻¹Aᵀ 时 A 必须列满秩", "Gram-Schmidt 每步都要减去已正交向量的投影", "正交矩阵满足 QᵀQ=I，不等于 Q 的行列式为 1", "最小二乘解不是原方程的解"],
        exams: ["Gram-Schmidt 正交化", "最小二乘拟合直线", "正交投影计算"],
        videos: [
          { title: "MIT 18.06 线性代数", source: "YouTube", url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D" },
          { title: "线性代数 · 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-481001" }
        ]
      },
      {
        id: "la-6",
        title: "向量空间与线性变换",
        en: "Vector Spaces and Linear Transformations",
        chapters: "Poole Ch 6",
        week: "第9-12周",
        focus: "把具体向量抽象为公理化的空间。",
        points: ["向量空间十条公理", "子空间判定", "线性无关、基与维数", "行空间、列空间与零空间", "坐标向量与换基矩阵", "线性变换的核与像", "相似矩阵"],
        pitfalls: ["验证子空间时必须检查零向量", "多项式/函数集合也可以构成向量空间", "同一向量在不同基下的坐标不同", "核是变换的零点集合，不是零向量本身"],
        exams: ["判定集合是否为子空间", "求基与维数", "线性变换核与像"],
        videos: [
          { title: "MIT 18.06 线性代数", source: "YouTube", url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D" },
          { title: "《线性代数》教学视频 2.0 版 · 宋浩", source: "Bilibili", url: "https://www.bilibili.com/video/av113095196280717/" }
        ]
      },
      {
        id: "la-7",
        title: "距离、近似与 SVD",
        en: "Distance, Approximation and SVD",
        chapters: "Poole Ch 7",
        week: "第11-16周（拓展）",
        focus: "线性代数的现代应用：范数、条件数、最小二乘与奇异值分解。",
        points: ["内积空间与范数", "向量范数与矩阵范数", "条件数与病态问题", "最小二乘与最佳逼近定理", "奇异值分解", "矩阵低秩近似与数据压缩"],
        pitfalls: ["SVD 中 U、V 的列顺序必须与奇异值顺序一致", "条件数大不代表矩阵不可逆，而是数值不稳定", "低秩近似用于压缩时按奇异值从大到小截断"],
        exams: ["计算 2×2 矩阵的 SVD", "最小二乘问题", "条件数与误差分析"],
        videos: [
          { title: "MIT 18.06 线性代数", source: "YouTube", url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D" },
          { title: "Singular Value Decomposition · 3Blue1Brown", source: "YouTube", url: "https://www.youtube.com/watch?v=gXbThCXjZFM" }
        ]
      },
      {
        id: "la-8",
        title: "编码理论拓展",
        en: "Linear Codes",
        chapters: "Poole Ch 8（在线）",
        week: "第12-16周（AI 方向拓展）",
        focus: "把线性代数用到纠错码，理解 AI/计算机底层数据可靠性。",
        points: ["校验位与错误检测", "汉明距离", "线性码与生成矩阵", "对偶码", "汉明码与 Reed-Muller 码"],
        pitfalls: ["编码空间维度与信息位/校验位关系易混", "最小距离决定纠错能力，不能只看码长", "生成矩阵与校验矩阵行空间互为对偶"],
        exams: ["生成矩阵编码", "最小距离与检错纠错能力", "汉明码构造"],
        videos: [
          { title: "MIT 18.06 线性代数", source: "YouTube", url: "https://www.youtube.com/playlist?list=PL49CF3715CB9EF31D" },
          { title: "线性代数 · 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-481001" }
        ]
      }
    ],
    quiz: [
      { q: "det([[1,2],[3,4]]) = ?", options: ["-2", "2", "10", "-10"], answer: 0, explain: "1×4 − 2×3 = 4−6 = −2。" },
      { q: "下列哪组向量线性无关？", options: ["{(1,0),(2,0)}", "{(1,0),(0,1)}", "{(1,1),(2,2)}", "{(1,2),(2,4)}"], answer: 1, explain: "标准基 (1,0) 与 (0,1) 不成倍数，因此线性无关。" },
      { q: "A=[[2,0],[0,3]] 的特征值是？", options: ["2 和 2", "3 和 3", "2 和 3", "1 和 6"], answer: 2, explain: "对角矩阵的特征值就是对角线元素 2、3。" },
      { q: "向量 (1,2,2) 与 (2,-1,0) 的点积是？", options: ["0", "1", "2", "5"], answer: 0, explain: "1×2 + 2×(-1) + 2×0 = 0，两向量正交。" },
      { q: "3×3 可逆矩阵的秩是？", options: ["0", "1", "2", "3"], answer: 3, explain: "可逆 ⇔ 列向量线性无关 ⇔ 满秩。" },
      { q: "下列哪个集合是 R² 的子空间？", options: ["过原点的直线", "不过原点的直线", "单位圆", "第一象限"], answer: 0, explain: "子空间必须包含零向量并对加法和数乘封闭。" },
      { q: "最小二乘解 x̂ 满足的正规方程是？", options: ["AᵀAx̂ = Aᵀb", "Ax̂ = b", "Aᵀx̂ = b", "x̂ = A⁻¹b"], answer: 0, explain: "正规方程 AᵀAx̂ = Aᵀb 来自最小化 ||Ax−b||²。" }
    ],
    online: [
      { title: "MIT 18.06SC Linear Algebra", url: "https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/pages/syllabus/", note: "Strang 配套习题与考试" },
      { title: "MIT 18.06 Spring 2010 Problem Sets", url: "https://web.mit.edu/18.06/www/Spring10/psets.html", note: "含 PDF 与答案" },
      { title: "Khan Academy Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra", note: "向量、矩阵与变换练习" }
    ],
    practice: [
      { title: "MIT 18.06 Problem Sets", url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/assignments/", note: "Gilbert Strang 配套习题" },
      { title: "同济大学《线性代数》MOOC", url: "https://www.icourse163.org/course/TONGJI-481001", note: "中文经典课程" },
      { title: "线性代数学习指导 · 同济大学", url: "https://www.icourse163.org/course/TONGJI-1003168003", note: "知识要点 + 例题精讲" }
    ]
  },
  {
    id: "physics",
    order: 3,
    name: "工程物理 1",
    enName: "Physics for Science and Engineering 1",
    code: "FALL-03",
    textbook: "Principles of Physics 12e (Walker)",
    pages: "1457",
    chapters: "Ch 1-44",
    semester: "fall",
    accent: "#3B6F8F",
    summary: "本学期覆盖力学、波动与热学（第 1-20 章），电磁学与近代物理作为大一下先修。物理的关键不是背公式，而是建立受力分析、能量和守恒的语言。",
    goals: ["熟练矢量分解与运动学分析", "用牛顿定律、能量和动量统一解题", "掌握转动、流体、振动与波、热学核心模型", "为大一下电磁学与近代物理打底"],
    extraVideos: [
      { title: "大学物理速成（非物理系）· 张云翼", source: "Bilibili", url: "https://www.bilibili.com/video/BV1G4wqz7EpN/", note: "力学、热学、电磁、光学全课程" },
      { title: "大学物理速成 · 振动与波动", source: "Bilibili", url: "https://www.bilibili.com/video/BV1ANT1zAENF/", note: "简谐振动、波的能量与干涉" },
      { title: "MIT 8.01 Classical Mechanics", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/syllabus/", note: "英文原版经典力学" },
      { title: "Khan Academy AP Physics 1", source: "Khan Academy", url: "https://www.khanacademy.org/science/ap-physics-1", note: "按知识点拆解练习与讲解" }
    ],
    lessons: [
      {
        id: "phy-1",
        title: "测量与一维运动",
        en: "Measurement and Motion Along a Line",
        chapters: "Walker Ch 1-2",
        week: "第1-2周",
        focus: "单位、量纲与直线运动是物理的基础语言。",
        points: ["SI 单位与量纲分析", "有效数字与科学记数", "位置、位移、速度与加速度", "匀加速运动公式", "自由落体与图像积分"],
        pitfalls: ["位移与路程不同", "速度方向与加速度方向可能相反", "匀加速公式只适用于恒定加速度", "单位换算不写中间过程容易出错"],
        exams: ["匀变速直线运动综合", "v-t 图像求位移与加速度", "自由落体"],
        videos: [
          { title: "大学物理（力学）· 哈尔滨工业大学", source: "MOOC", url: "https://www.icourse163.org/course/detail.htm?cid=1002416004" },
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" },
          { title: "Walter Lewin 8.01 经典力学", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLyQSN7X0ro203puVhQsmCj9qhlFQ-As8e" }
        ]
      },
      {
        id: "phy-2",
        title: "矢量与二维运动",
        en: "Vectors and Motion in 2D/3D",
        chapters: "Walker Ch 3-4",
        week: "第2-3周",
        focus: "把一维运动推广到平面，理解抛体与圆周运动。",
        points: ["矢量分量与单位矢量", "矢量加减法", "抛体运动分解", "匀速圆周运动", "相对运动"],
        pitfalls: ["抛体最高点竖直速度为零但水平速度不变", "圆周运动向心加速度方向总指向圆心", "相对速度要按矢量加法写方程", "分量式必须分别写，不能合并"],
        exams: ["抛体运动轨迹与射程", "圆周运动向心加速度", "相对运动合成"],
        videos: [
          { title: "大学物理（力学）· 哈尔滨工业大学", source: "MOOC", url: "https://www.icourse163.org/course/detail.htm?cid=1002416004" },
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" }
        ]
      },
      {
        id: "phy-3",
        title: "牛顿定律与摩擦力",
        en: "Newton's Laws and Friction",
        chapters: "Walker Ch 5-6",
        week: "第3-5周",
        focus: "受力分析是力学一切问题的起点。",
        points: ["牛顿三定律", "重力、支持力、张力、弹簧力", "静摩擦与滑动摩擦", "阻力与终端速度", "匀速率圆周运动的动力学"],
        pitfalls: ["把作用力与反作用力画在同一物体上", "静摩擦力方向随趋势变化", "N=mg 只在无竖直加速度时成立", "连接体问题漏掉整体法/隔离法选择"],
        exams: ["多体系统牛顿第二定律", "斜面与摩擦问题", "圆周运动临界条件"],
        videos: [
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" },
          { title: "Walter Lewin 8.01 经典力学", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLyQSN7X0ro203puVhQsmCj9qhlFQ-As8e" }
        ]
      },
      {
        id: "phy-4",
        title: "功、能量与功率",
        en: "Work, Energy and Power",
        chapters: "Walker Ch 7-8",
        week: "第4-6周",
        focus: "能量守恒是跨越复杂运动的最强工具。",
        points: ["动能与功-动能定理", "变力做功与积分", "重力/弹簧势能", "保守力与机械能守恒", "外力做功与系统能量", "功率"],
        pitfalls: ["功与力的方向夹角是 cosθ 不是 sinθ", "重力做功与路径无关", "机械能守恒前先确认只有保守力做功", "弹簧势能公式中的 x 是相对自然长度的位移"],
        exams: ["功-动能定理", "机械能守恒", "功率与效率"],
        videos: [
          { title: "大学物理（力学）· 哈尔滨工业大学", source: "MOOC", url: "https://www.icourse163.org/course/detail.htm?cid=1002416004" },
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" }
        ]
      },
      {
        id: "phy-5",
        title: "动量、质心与碰撞",
        en: "Momentum, Center of Mass and Collisions",
        chapters: "Walker Ch 9",
        week: "第5-7周",
        focus: "用动量守恒处理碰撞与系统运动。",
        points: ["质心定义与运动", "线性动量与冲量", "动量守恒条件", "弹性/非弹性/完全非弹性碰撞", "二维碰撞", "变质量系统与火箭"],
        pitfalls: ["动量守恒要求合外力为零", "完全非弹性碰撞动能不守恒", "弹性碰撞不能默认两物体速度互换", "冲量是矢量，注意方向"],
        exams: ["一维弹性/非弹性碰撞", "冲量定理", "质心运动"],
        videos: [
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" },
          { title: "大学物理（力学）· 哈尔滨工业大学", source: "MOOC", url: "https://www.icourse163.org/course/detail.htm?cid=1002416004" }
        ]
      },
      {
        id: "phy-6",
        title: "转动与角动量",
        en: "Rotation and Angular Momentum",
        chapters: "Walker Ch 10-11",
        week: "第6-8周",
        focus: "把平动公式平行迁移到转动。",
        points: ["角位移、角速度与角加速度", "匀角加速度转动", "转动惯量与平行轴定理", "力矩与转动定律", "转动动能与做功", "角动量守恒"],
        pitfalls: ["角速度方向用右手定则", "转动惯量依赖质量分布和转轴", "力矩 r×F 的方向不可交换", "只有合外力矩为零时角动量守恒"],
        exams: ["转动惯量计算", "刚体转动定律", "角动量守恒"],
        videos: [
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" },
          { title: "大学物理（力学）· 哈尔滨工业大学", source: "MOOC", url: "https://www.icourse163.org/course/detail.htm?cid=1002416004" }
        ]
      },
      {
        id: "phy-7",
        title: "平衡、引力与流体",
        en: "Equilibrium, Gravitation and Fluids",
        chapters: "Walker Ch 12-14",
        week: "第8-10周",
        focus: "静态平衡、万有引力与流体静力学/动力学。",
        points: ["刚体平衡条件", "重心与稳定平衡", "胡克定律与弹性", "万有引力定律", "重力势能与卫星轨道", "流体静压强与阿基米德原理", "连续性方程与伯努利方程"],
        pitfalls: ["平衡条件必须同时满足合力与合力矩为零", "弹性模量混淆应力与应变", "浮力等于排开流体的重力，不是物体重力", "伯努利方程仅适用于理想流体定常流动"],
        exams: ["刚体平衡求未知力", "卫星轨道能量", "浮力与伯努利综合"],
        videos: [
          { title: "大学物理（力学）· 哈尔滨工业大学", source: "MOOC", url: "https://www.icourse163.org/course/detail.htm?cid=1002416004" },
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" }
        ]
      },
      {
        id: "phy-8",
        title: "振动、波动与热学",
        en: "Oscillations, Waves and Thermodynamics",
        chapters: "Walker Ch 15-20",
        week: "第9-12周",
        focus: "本学期收官：简谐运动、机械波与热力学三大定律。",
        points: ["简谐运动与弹簧/单摆", "阻尼与受迫振动、共振", "行波、波速与波的能量", "驻波与干涉", "声波、多普勒效应", "温度、热膨胀与热传递", "理想气体与热力学第一定律", "熵与热力学第二定律"],
        pitfalls: ["简谐运动角频率与频率混用", "波的相位差与路程差关系", "多普勒公式分母分子易写反", "ΔU=Q−W 与 W 的正负约定要统一"],
        exams: ["简谐运动方程与能量", "驻波/多普勒效应", "热力学第一定律循环"],
        videos: [
          { title: "大学物理2：振动与波动、热学 · 同济大学", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-44005" },
          { title: "大学物理期末速成", source: "Bilibili", url: "https://www.bilibili.com/video/BV19oCNYHE9B/" },
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" }
        ]
      }
    ],
    quiz: [
      { q: "从静止自由下落 2 秒后的速度约为（g=9.8 m/s²）？", options: ["9.8 m/s", "19.6 m/s", "39.2 m/s", "4.9 m/s"], answer: 1, explain: "v = gt = 9.8×2 = 19.6 m/s。" },
      { q: "忽略空气阻力时，抛体运动水平方向速度？", options: ["不断增大", "不断减小", "保持不变", "先增后减"], answer: 2, explain: "水平方向无外力，因此水平速度恒定。" },
      { q: "物体竖直上升过程中，重力做的功？", options: ["正功", "负功", "零", "取决于速度"], answer: 1, explain: "重力方向向下而位移向上，夹角 180°，功为负。" },
      { q: "完全非弹性碰撞中守恒的是？", options: ["总动能", "总动量", "机械能", "速度"], answer: 1, explain: "完全非弹性碰撞动能损失最大，但合外力为零时动量守恒。" },
      { q: "转动惯量取决于？", options: ["只取决于质量", "质量与转轴位置", "只取决于速度", "只取决于半径"], answer: 1, explain: "转动惯量与质量分布及所选转轴都有关。" },
      { q: "理想流体管径变小时，流速和压强分别？", options: ["流速增大、压强减小", "流速减小、压强增大", "都增大", "都减小"], answer: 0, explain: "连续性方程 A₁v₁=A₂v₂ 与伯努利方程共同给出该结论。" }
    ],
    online: [
      { title: "OpenStax University Physics Volume 1", url: "https://openstax.org/details/books/university-physics-volume-1", note: "力学、振动、波与热学练习" },
      { title: "Khan Academy AP Physics 1", url: "https://www.khanacademy.org/science/ap-physics-1", note: "按知识点练习" },
      { title: "HyperPhysics", url: "http://hyperphysics.phy-astr.gsu.edu/hbase/index.html", note: "公式速查与概念图" }
    ],
    practice: [
      { title: "MIT 8.01 Problem Sets", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/syllabus/", note: "经典力学题集入口" },
      { title: "哈尔滨工业大学《大学物理》MOOC", url: "https://www.icourse163.org/course/detail.htm?cid=1002416004", note: "力学精讲" },
      { title: "同济大学《大学物理2》MOOC", url: "https://www.icourse163.org/course/TONGJI-44005", note: "振动、波动与热学" }
    ]
  },
  {
    id: "chemistry",
    order: 4,
    name: "工程化学 1",
    enName: "General Chemistry for Engineers 1",
    code: "FALL-04",
    textbook: "Chemistry: Atoms First 4e (Burdge)",
    pages: "1273",
    chapters: "Ch 1-26",
    semester: "fall",
    accent: "#8A5A44",
    summary: "工程化学从原子出发，再进入周期律、成键、反应、热化学、气体与溶液。先修部分包括动力学、平衡、酸碱、电化学与有机/材料。",
    goals: ["掌握原子结构与周期律", "熟练化学计量与反应方程", "理解成键、分子几何与分子间作用力", "用热力学与气体定律解决工程化学问题"],
    extraVideos: [
      { title: "大学化学 4 小时速成课", source: "Bilibili", url: "https://www.bilibili.com/video/BV1go48ehEE6/", note: "原子结构、分子结构、热力学、平衡" },
      { title: "北京大学《普通化学》", source: "Bilibili", url: "https://www.bilibili.com/video/BV1CxaUzrEDY/", note: "从原子论到现代化学的完整脉络" },
      { title: "华中农业大学《有机化学》", source: "Bilibili", url: "https://www.bilibili.com/video/BV1Zo4y1q7Zw/", note: "有机化合物与共价键理论" },
      { title: "MIT 5.111 Principles of Chemical Science", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/", note: "英文原版化学原理" }
    ],
    lessons: [
      {
        id: "chem-1",
        title: "物质、原子与周期表",
        en: "Matter, Atoms and the Periodic Table",
        chapters: "Burdge Ch 1-2",
        week: "第1-2周",
        focus: "建立物质分类与原子模型的底层结构。",
        points: ["物质分类：元素/化合物/混合物", "同位素与平均原子质量", "摩尔与阿伏伽德罗常数", "原子序数、质量数与电荷", "周期表族与周期"],
        pitfalls: ["摩尔质量单位是 g/mol，不是 g", "同位素质量数不同但化学性质几乎相同", "原子数守恒而非质量数直接守恒（核反应除外）", "平均原子质量是加权平均"],
        exams: ["摩尔与质量换算", "同位素相对丰度计算", "周期表位置判断"],
        videos: [
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" },
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" }
        ]
      },
      {
        id: "chem-2",
        title: "量子理论与电子结构",
        en: "Quantum Theory and Electronic Structure",
        chapters: "Burdge Ch 3-4",
        week: "第2-4周",
        focus: "用轨道模型解释周期性质。",
        points: ["光的波粒二象性", "氢原子能级与玻尔模型", "量子数 n/l/m/ms", "轨道填充顺序与洪特规则", "泡利不相容原理", "周期趋势：半径/电离能/电子亲和能/电负性"],
        pitfalls: ["电子排布先写 4s 再写 3d，但失去电子时先失 4s", "同一轨道两个电子自旋相反", "半满/全满轨道更稳定", "周期趋势只在同族或同周期内直接比较"],
        exams: ["电子构型书写", "周期趋势比较", "量子数判断"],
        videos: [
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" },
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" }
        ]
      },
      {
        id: "chem-3",
        title: "化学键与分子几何",
        en: "Bonding and Molecular Geometry",
        chapters: "Burdge Ch 5-7",
        week: "第3-5周",
        focus: "用路易斯结构、VSEPR 与杂化理论解释分子形状。",
        points: ["离子键与共价键", "路易斯结构与形式电荷", "电负性与键极性", "VSEPR 与分子几何", "杂化轨道与 σ/π 键", "分子间作用力"],
        pitfalls: ["形式电荷最小化不是唯一原则", "孤对电子也占据 VSEPR 几何位置", "非极性分子可以有极性键", "分子间氢键只发生在 H 与 N/O/F 之间"],
        exams: ["路易斯结构", "VSEPR 预测形状", "分子间力比较"],
        videos: [
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" },
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" }
        ]
      },
      {
        id: "chem-4",
        title: "化学反应与化学计量",
        en: "Reactions and Stoichiometry",
        chapters: "Burdge Ch 8-9",
        week: "第4-6周",
        focus: "用物质的量统一反应计算。",
        points: ["配平化学方程式", "化学计量比", "限定反应物", "理论产率与实际产率", "溶液浓度与稀释", "沉淀、酸碱、氧化还原反应分类"],
        pitfalls: ["配平系数乘以摩尔比时不能约掉化学式", "限定反应物判断要先换算成摩尔", "产率 = 实际/理论 ×100%", "氧化数变化与电子转移数要一致"],
        exams: ["化学计量计算", "限定反应物与产率", "溶液浓度计算"],
        videos: [
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" },
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" }
        ]
      },
      {
        id: "chem-5",
        title: "能量变化与热化学",
        en: "Energy and Thermochemistry",
        chapters: "Burdge Ch 10",
        week: "第5-7周",
        focus: "反应热、焓与赫斯定律。",
        points: ["系统与环境、功与热", "内能与焓", "比热容与量热", "赫斯定律", "标准生成焓与反应焓", "键能与反应热估算"],
        pitfalls: ["ΔH 正负号与吸热/放热对应关系", "赫斯定律相消时反应方向要反转", "比热容公式中的质量单位", "标准生成焓对单质取 0"],
        exams: ["赫斯定律计算", "标准生成焓求反应焓", "量热实验"],
        videos: [
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" },
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" }
        ]
      },
      {
        id: "chem-6",
        title: "气体、液体、固体与溶液",
        en: "Gases, Liquids, Solids and Solutions",
        chapters: "Burdge Ch 11-13",
        week: "第6-10周",
        focus: "用状态方程与相变理解物质存在形态。",
        points: ["理想气体定律与分压", "气体分子动力学", "相变与相图", "晶体结构与晶胞", "溶液浓度单位", "依数性：蒸气压降低/沸点升高/凝固点降低/渗透压"],
        pitfalls: ["气体定律温度必须用开尔文", "分压定律使用摩尔分数", "依数性取决于溶质粒子数，电解质要乘电离数", "标准态与 STP 条件混淆"],
        exams: ["理想气体计算", "相图判断", "依数性计算"],
        videos: [
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" },
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" }
        ]
      },
      {
        id: "chem-7",
        title: "动力学、热力学与平衡先修",
        en: "Kinetics, Thermodynamics and Equilibrium Prep",
        chapters: "Burdge Ch 14-18",
        week: "第11-16周（先修）",
        focus: "从“反应快不快、能不能发生、进行到哪”理解化学。",
        points: ["反应速率与速率定律", "阿伦尼乌斯方程", "熵与吉布斯自由能", "化学平衡常数", "勒夏特列原理", "酸碱平衡与缓冲溶液", "溶解度平衡"],
        pitfalls: ["速率定律系数不能只看方程式系数", "ΔG 判断反应自发性还要考虑温度", "平衡常数随温度变化", "缓冲液 pH 计算先判断酸碱过量"],
        exams: ["速率定律求 k", "ΔG 与平衡常数关系", "平衡移动判断"],
        videos: [
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" },
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" }
        ]
      },
      {
        id: "chem-8",
        title: "电化学、有机与现代材料先修",
        en: "Electrochemistry, Organic and Materials Prep",
        chapters: "Burdge Ch 19-26",
        week: "第12-16周（先修）",
        focus: "面向工程与 AI 的应用化学扩展。",
        points: ["氧化还原与电化学电池", "能斯特方程", "核化学基础", "环境化学", "配位化合物", "有机官能团", "高分子与现代材料"],
        pitfalls: ["标准电极电位符号", "能斯特方程 Q 的形式", "有机反应条件影响产物", "配位数与几何结构"],
        exams: ["电化学电池电动势", "官能团识别", "材料性能与结构关系"],
        videos: [
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" },
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" }
        ]
      }
    ],
    quiz: [
      { q: "1 mol H₂O 中含有多少 mol H 原子？", options: ["1", "2", "3", "6.02×10²³"], answer: 1, explain: "每个水分子含 2 个 H 原子，1 mol 水含 2 mol H。" },
      { q: "H₂O₂ 中 O 的氧化数为？", options: ["-2", "-1", "0", "+1"], answer: 1, explain: "过氧化物中 O 的氧化数通常为 -1。" },
      { q: "0.01 mol/L HCl 溶液的 pH 约为？", options: ["1", "2", "12", "13"], answer: 1, explain: "强酸完全电离，[H⁺]=0.01，pH=2。" },
      { q: "同位素之间相同的是？", options: ["质量数", "中子数", "质子数", "核子数"], answer: 2, explain: "同位素质子数相同、中子数不同。" },
      { q: "下列物质中主要含离子键的是？", options: ["H₂O", "NaCl", "CO₂", "CH₄"], answer: 1, explain: "NaCl 由 Na⁺ 与 Cl⁻ 通过离子键结合。" },
      { q: "恒温下，一定量理想气体的压强与体积关系为？", options: ["成正比", "成反比", "无关", "成平方关系"], answer: 1, explain: "PV=nRT，温度与物质的量一定时 PV 为常数。" }
    ],
    online: [
      { title: "OpenStax Chemistry: Atoms First 2e", url: "https://openstax.org/details/books/chemistry-atoms-first-2e", note: "免费教材 + 每章练习" },
      { title: "LibreTexts General Chemistry", url: "https://chem.libretexts.org/Bookshelves/General_Chemistry", note: "概念题与例题" },
      { title: "Khan Academy Chemistry", url: "https://www.khanacademy.org/science/chemistry", note: "主题练习与视频" }
    ],
    practice: [
      { title: "MIT 5.111 Resource Index", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/resource-index/", note: "化学原理全套资料" },
      { title: "西安交通大学《大学化学》MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011", note: "中文工程化学课程" },
      { title: "国家高等教育智慧教育平台 · 大学化学", url: "https://higher.smartedu.cn/course/62354d7c9906eace0490c9df", note: "公开课程入口" }
    ]
  },
  {
    id: "mechanics",
    order: 5,
    name: "工程力学",
    enName: "Engineering Mechanics: Statics and Dynamics",
    code: "FALL-05",
    textbook: "Engineering Mechanics Statics 9e + Dynamics 9e (Meriam)",
    pages: "460 + 623",
    chapters: "Statics Ch 1-7 · Dynamics Ch 1-8",
    semester: "fall",
    accent: "#5A6B4A",
    summary: "工程力学先练静力学：力系、平衡、桁架、摩擦、虚功；再进入动力学：质点运动学、牛顿第二定律、功-能、冲量-动量。力学题的核心是画受力图。",
    goals: ["能用自由体图处理二维/三维平衡", "掌握桁架、摩擦与分布力计算", "用运动学与动力学方法分析质点运动", "为刚体动力学与振动先修打底"],
    extraVideos: [
      { title: "《工程力学》速成救急", source: "Bilibili", url: "https://www.bilibili.com/video/BV1F3rhYwEgo/", note: "静力学公理、平面力系、桁架" },
      { title: "专升本工程力学（静力学部分）", source: "Bilibili", url: "https://www.bilibili.com/video/BV12M4y1g7Xm/", note: "约束、受力分析与静力学公理" },
      { title: "工程力学经典题 · 静力学计算大题", source: "Bilibili", url: "https://www.bilibili.com/video/BV1Mr4y1G7iK/", note: "25 道经典计算大题" },
      { title: "MIT 2.003 Engineering Dynamics", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/syllabus/", note: "动力学英文原版" }
    ],
    lessons: [
      {
        id: "mech-1",
        title: "静力学基础与力系",
        en: "Statics Foundations and Force Systems",
        chapters: "Statics Ch 1-2",
        week: "第1-3周",
        focus: "标量/矢量、力、力矩、力偶与合力。",
        points: ["静力学基本概念与牛顿定律", "力的分解与直角分量", "二维/三维力矩", "力偶与力偶矩", "力系简化与合力", "矢量运算"],
        pitfalls: ["力偶矩是自由矢量，与作用点无关", "三维力矩用 r×F 时易漏项", "合力矩等于各力力矩之和", "单位与方向必须同时写清"],
        exams: ["力系合成", "求对某点的力矩", "三维力分解"],
        videos: [
          { title: "Jeff Hanson 静力学课程", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc23LXGoItpkYMKtUdHaQwSDC" },
          { title: "工程力学（静力学）全套", source: "Bilibili", url: "https://www.bilibili.com/video/BV1Zm4y1C76M/" }
        ]
      },
      {
        id: "mech-2",
        title: "平衡与自由体图",
        en: "Equilibrium and Free-Body Diagrams",
        chapters: "Statics Ch 3",
        week: "第3-5周",
        focus: "把结构隔离出来，让平衡方程说话。",
        points: ["自由体图三步法", "二维平衡三方程", "三维平衡方程", "铰链、滚动支座与固定端约束", "连接体隔离与整体"],
        pitfalls: ["约束反力方向画错", "二力杆识别不清", "整体法忽略内力但隔离法要画内力", "方程数少于未知数时先找多余约束分析"],
        exams: ["支座反力求解", "多体系统平衡", "三维平衡"],
        videos: [
          { title: "Jeff Hanson 静力学课程", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc23LXGoItpkYMKtUdHaQwSDC" },
          { title: "工程力学（静力学）全套", source: "Bilibili", url: "https://www.bilibili.com/video/BV1Zm4y1C76M/" }
        ]
      },
      {
        id: "mech-3",
        title: "桁架、框架与机器",
        en: "Structures: Trusses, Frames and Machines",
        chapters: "Statics Ch 4",
        week: "第5-7周",
        focus: "用节点法与截面法求内力。",
        points: ["平面桁架假设", "零力杆识别", "节点法", "截面法", "空间桁架", "框架与机器的内力分析"],
        pitfalls: ["节点法从只有两个未知力的节点开始", "截面法要切断三根以内未知杆", "受拉/受压符号约定一致", "框架中二力杆只受轴向力"],
        exams: ["零力杆判断", "节点法求杆内力", "截面法求指定杆"],
        videos: [
          { title: "Jeff Hanson 静力学课程", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc23LXGoItpkYMKtUdHaQwSDC" },
          { title: "工程力学（静力学）全套", source: "Bilibili", url: "https://www.bilibili.com/video/BV1Zm4y1C76M/" }
        ]
      },
      {
        id: "mech-4",
        title: "分布力、形心与惯性矩",
        en: "Distributed Forces, Centroids and Moments of Inertia",
        chapters: "Statics Ch 5 + Appendix A",
        week: "第7-9周",
        focus: "把分布载荷等效成集中力，并学会截面几何量。",
        points: ["线/面/体分布载荷", "质心与形心", "组合体形心", "Pappus 定理", "梁的外力与内力", "面积惯性矩与平行轴定理", "质量惯性矩"],
        pitfalls: ["分布载荷合力作用点在形心", "组合体形心要按面积加权", "惯性矩与转轴相关", "梁内力图中剪力/弯矩符号约定"],
        exams: ["组合形心计算", "惯性矩计算", "梁剪力图与弯矩图"],
        videos: [
          { title: "Jeff Hanson 静力学课程", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc23LXGoItpkYMKtUdHaQwSDC" },
          { title: "工程力学（静力学）全套", source: "Bilibili", url: "https://www.bilibili.com/video/BV1Zm4y1C76M/" }
        ]
      },
      {
        id: "mech-5",
        title: "摩擦与虚功",
        en: "Friction and Virtual Work",
        chapters: "Statics Ch 6-7",
        week: "第8-10周",
        focus: "处理摩擦自锁与用能量方法分析平衡。",
        points: ["干摩擦模型", "滑动/滚动摩擦", "楔块、螺旋与皮带摩擦", "滚动阻力", "虚功原理", "势能与稳定性"],
        pitfalls: ["静摩擦不等于 μN 恒定值，而是 ≤ μN", "摩擦方向阻碍相对运动趋势", "虚功原理只考虑做功的力", "稳定性判断看二阶导"],
        exams: ["摩擦平衡临界问题", "皮带摩擦", "虚功求平衡"],
        videos: [
          { title: "Jeff Hanson 静力学课程", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc23LXGoItpkYMKtUdHaQwSDC" },
          { title: "理论力学期末急救", source: "Bilibili", url: "https://www.bilibili.com/video/BV1U6T7zeEAA/" }
        ]
      },
      {
        id: "mech-6",
        title: "质点运动学",
        en: "Kinematics of Particles",
        chapters: "Dynamics Ch 1-2",
        week: "第9-11周",
        focus: "研究运动本身，不追究原因。",
        points: ["直线运动与坐标选择", "曲线运动：直角/自然/极坐标", "切向与法向加速度", "相对运动（平动系）", "约束运动"],
        pitfalls: ["切向加速度改变速率，法向改变方向", "极坐标中速度含 r·θ̇ 项", "相对运动公式 a = a_B + a_rel 只在平动参考系成立", "约束方程求导后单位方向要写清"],
        exams: ["抛体/圆周运动", "n-t 坐标加速度", "相对运动"],
        videos: [
          { title: "Jeff Hanson 动力学课程", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc206fNQPkcBUFEMYje-UjtqA" },
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" }
        ]
      },
      {
        id: "mech-7",
        title: "质点动力学",
        en: "Kinetics of Particles",
        chapters: "Dynamics Ch 3-4",
        week: "第10-13周",
        focus: "用牛顿、功-能和冲量-动量三条路径解题。",
        points: ["牛顿第二定律与运动方程", "直线/曲线运动方程", "功与动能定理", "势能与机械能", "冲量与动量", "角冲量与角动量", "碰撞与变质量"],
        pitfalls: ["运动方程按切向/法向写更简单", "能量法算不出速度方向", "冲量-动量适合短时大力", "碰撞问题先判守恒量"],
        exams: ["多质点系统动力学", "功-能综合", "碰撞问题"],
        videos: [
          { title: "Jeff Hanson 动力学课程", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc206fNQPkcBUFEMYje-UjtqA" },
          { title: "理论力学期末急救", source: "Bilibili", url: "https://www.bilibili.com/video/BV1U6T7zeEAA/" }
        ]
      },
      {
        id: "mech-8",
        title: "刚体动力学与振动先修",
        en: "Rigid Body Dynamics and Vibration Prep",
        chapters: "Dynamics Ch 5-8",
        week: "第12-16周（先修）",
        focus: "刚体平面运动、三维动力学与振动是机械核心进阶。",
        points: ["刚体平面运动学", "瞬时速度中心", "相对加速度", "刚体平面动力学方程", "功-能与冲量-动量", "三维角动量与陀螺", "自由/受迫振动"],
        pitfalls: ["瞬时速度中心只适用于某时刻速度", "刚体动能包含平动与转动", "绕定轴转动时质心加速度不等于 0", "振动方程先写运动微分方程再求固有频率"],
        exams: ["刚体平面运动", "转动定律综合", "单自由度振动"],
        videos: [
          { title: "Jeff Hanson 动力学课程", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc206fNQPkcBUFEMYje-UjtqA" },
          { title: "MIT 8.01 Classical Mechanics", source: "OCW", url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/" }
        ]
      }
    ],
    quiz: [
      { q: "刚体静态平衡必须满足？", options: ["合力为零即可", "合力矩为零即可", "合力与合力矩均为零", "速度为零"], answer: 2, explain: "静态平衡要求合力与合力矩同时为零。" },
      { q: "最大静摩擦力满足？", options: ["等于 μₖN", "≤ μₛN", "总等于 μₛN", "与 N 无关"], answer: 1, explain: "静摩擦力是约束力，取值 ≤ μₛN。" },
      { q: "求平面桁架所有杆内力的标准方法是？", options: ["截面法", "节点法", "积分法", "虚功法"], answer: 1, explain: "节点法从二力节点开始逐个分析，可求所有杆内力。" },
      { q: "切向加速度的作用是？", options: ["改变方向", "改变速率", "改变角速度", "产生向心力"], answer: 1, explain: "切向加速度改变速率大小，法向加速度改变方向。" },
      { q: "功-动能定理描述的是？", options: ["合外力冲量等于动量变化", "合外力做功等于动能变化", "势能守恒", "角动量守恒"], answer: 1, explain: "W_net = ΔK。" },
      { q: "刚体定轴转动时，质心加速度？", options: ["一定为零", "等于切向加速度", "等于法向加速度", "通常不为零"], answer: 3, explain: "绕定轴转动时质心一般有向心加速度。" }
    ],
    online: [
      { title: "Engineering Statics: Open and Interactive", url: "https://engineeringstatics.org/", note: "免费英文教材 + 例题练习" },
      { title: "MIT 2.001 Mechanics and Materials I", url: "https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/pages/syllabus/", note: "静力学与材料力学习题" },
      { title: "MIT 2.003 Engineering Dynamics", url: "https://ocw.mit.edu/courses/2-003sc-engineering-dynamics-fall-2011/pages/syllabus/", note: "动力学 Problem Sets" }
    ],
    practice: [
      { title: "Jeff Hanson 静力学播放列表", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc23LXGoItpkYMKtUdHaQwSDC", note: "理论与例题同步" },
      { title: "Jeff Hanson 动力学播放列表", url: "https://www.youtube.com/playlist?list=PLRqDfxcafc206fNQPkcBUFEMYje-UjtqA", note: "动力学例题" },
      { title: "工程力学（静力学）B站全集", url: "https://www.bilibili.com/video/BV1Zm4y1C76M/", note: "中文全程讲解" }
    ]
  },
  {
    id: "general-ed",
    order: 6,
    name: "通识课",
    enName: "General Education",
    code: "FALL-06",
    textbook: "思政 / 心理健康 / 体育",
    pages: "—",
    chapters: "学校通识模块",
    semester: "fall",
    accent: "#6D5B7B",
    summary: "通识课平时分占比高、拿分稳定，是绩点保底盘。重点不是刷难题，而是按时出勤、完成作业、做好小组任务与体测准备。",
    goals: ["零扣分完成平时作业与签到", "建立心理健康与时间管理基线", "完成体测与体育课考核要求"],
    extraVideos: [
      { title: "中国大学生在线", source: "官网", url: "https://dxs.moe.gov.cn/", note: "思政学习与主题活动" },
      { title: "学习强国", source: "官网", url: "https://www.xuexi.cn/", note: "时政与通识积累" },
      { title: "国家高等教育智慧教育平台", source: "MOOC", url: "https://higher.smartedu.cn/", note: "思政与通识公开课" }
    ],
    lessons: [
      {
        id: "gen-1",
        title: "思想道德与法治",
        en: "Ideology and Law",
        chapters: "课程教材（学校统一发放）",
        week: "每周 1-2 课时",
        focus: "抓章节框架、核心概念与案例分析。",
        points: ["人生观与价值观", "理想信念与中国精神", "社会主义核心价值观", "道德规范与道德修养", "法治思想与法律基础", "宪法、民法、刑法基础"],
        pitfalls: ["大题要结合案例而不是背口号", "概念辨析题注意限定词", "平时作业与课堂展示占分高", "期末客观题以教材表述为准"],
        exams: ["社会主义核心价值观层次", "道德与法律的关系", "案例分析题"],
        videos: [
          { title: "思想道德与法治 · 中国大学MOOC", source: "MOOC", url: "https://www.icourse163.org/course/detail.htm?cid=1001752346" }
        ]
      },
      {
        id: "gen-2",
        title: "大学生心理健康",
        en: "Mental Health",
        chapters: "课程教材（学校统一发放）",
        week: "每周 1 课时",
        focus: "把心理学知识变成可操作的自助工具。",
        points: ["自我认知与情绪调节", "压力管理与时间管理", "人际关系与沟通", "学习动机与目标设定", "心理求助资源与危机识别"],
        pitfalls: ["情绪调节不等于压抑情绪", "睡眠与运动是稳定基线", "拖延应对先拆任务", "遇到持续低落要主动求助"],
        exams: ["心理测评量表", "案例分析", "小组展示"],
        videos: [
          { title: "国家高等教育智慧教育平台 · 心理健康课程", source: "MOOC", url: "https://higher.smartedu.cn/search?keyword=%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%BF%83%E7%90%86%E5%81%A5%E5%BA%B7" }
        ]
      },
      {
        id: "gen-3",
        title: "体育与体测",
        en: "Physical Education and Fitness",
        chapters: "学校体育课程",
        week: "每周 1-2 次",
        focus: "规律训练优于考前突击。",
        points: ["有氧耐力训练", "力量与柔韧", "篮球/羽毛球等专项技能", "体测项目：跑步、立定跳远、坐位体前屈等", "运动损伤预防"],
        pitfalls: ["体测前一周突击易受伤", "力量训练后需要恢复", "长期久坐影响专注", "睡眠不足时降低训练强度"],
        exams: ["体测项目", "专项技能考核", "出勤率"],
        videos: [
          { title: "Keep 官方训练课程", source: "Web", url: "https://www.gotokeep.com/" }
        ]
      },
      {
        id: "gen-4",
        title: "形势与政策",
        en: "Situation and Policy",
        chapters: "时事专题（学校统一安排）",
        week: "每学期 6-8 讲",
        focus: "用政策原文和时事案例建立分析框架。",
        points: ["国内外重大时事", "国家战略与政策解读", "经济、科技、民生议题", "时事评论写作结构", "青年担当与行动"],
        pitfalls: ["观点要有政策依据", "评论题先摆事实再讲道理", "时效性内容以最新文件为准", "不要堆砌口号而缺少分析"],
        exams: ["时事分析题", "政策术语解释", "课堂讨论与展示"],
        videos: [
          { title: "学习强国", source: "Web", url: "https://www.xuexi.cn/" }
        ]
      },
      {
        id: "gen-5",
        title: "军事理论与国家安全",
        en: "Military Theory and National Security",
        chapters: "学校军事理论课程",
        week: "每学期 4-6 讲",
        focus: "理解国防、安全观与大学生责任。",
        points: ["国防概述与武装力量", "兵役制度与国防动员", "总体国家安全观", "现代战争与信息化", "大学生国防义务"],
        pitfalls: ["军事理论以教材定义为准", "国家安全观要区分领域", "案例分析不臆造装备参数", "客观题注意年份与文件名称"],
        exams: ["国防与安全概念", "总体国家安全观", "案例分析题"],
        videos: [
          { title: "学习强国 · 国防教育专题", source: "Web", url: "https://www.xuexi.cn/" }
        ]
      }
    ],
    quiz: [
      { q: "社会主义核心价值观中，个人层面的价值准则是？", options: ["富强、民主、文明、和谐", "自由、平等、公正、法治", "爱国、敬业、诚信、友善", "创新、协调、绿色、开放"], answer: 2, explain: "个人层面是爱国、敬业、诚信、友善。" },
      { q: "关于心理健康，正确的做法是？", options: ["出现困扰就自己扛着", "持续低落时主动求助", "情绪调节等于压抑情绪", "熬夜也能高效学习"], answer: 1, explain: "求助是正常且有效的自我照顾方式。" },
      { q: "成人每周推荐的中等强度有氧运动量约为？", options: ["30 分钟", "75 分钟", "150 分钟", "300 分钟"], answer: 2, explain: "WHO 建议每周至少 150 分钟中等强度有氧运动。" },
      { q: "法律面前人人平等的核心含义是？", options: ["每个人可以制定法律", "任何人都平等地受法律约束与保护", "只有公民需要守法", "法律可以因人而异"], answer: 1, explain: "法律面前人人平等意味着同等适用、同等保护。" }
    ],
    online: [
      { title: "中国大学生在线", url: "https://dxs.moe.gov.cn/", note: "思政学习与主题活动" },
      { title: "全国高校思想政治工作网", url: "https://www.sizhengwang.cn/", note: "思政课程资料" }
    ],
    practice: [
      { title: "国家高等教育智慧教育平台", url: "https://higher.smartedu.cn/", note: "思政与通识公开课" },
      { title: "学习强国", url: "https://www.xuexi.cn/", note: "思政与时政积累" }
    ]
  },
  {
    id: "english",
    order: 7,
    name: "学术英语与雅思",
    enName: "Academic English and IELTS",
    code: "SELF-01",
    textbook: "雅思词汇真经 + 学校学术英语资料",
    pages: "—",
    chapters: "词汇 / 听力 / 口语 / 写作 / 应试",
    semester: "self",
    accent: "#B08B2D",
    summary: "奥克兰学院全英文授课，英语不是一门课而是一整套生存技能。用每日 30-60 分钟固定积累词汇、听力、口语和学术写作。",
    goals: ["学期末掌握 2000+ 核心学术词汇", "能听懂全英文授课与讲座", "能用英文完成报告、展示与面试表达", "为四级与雅思出分打底"],
    extraVideos: [
      { title: "零基础雅思系统课（B站）", source: "Bilibili", url: "https://www.bilibili.com/video/BV1hMdhBCEm2/", note: "口语、听力、写作、阅读入门" },
      { title: "雅思零基础入门全套 258 集", source: "Bilibili", url: "https://www.bilibili.com/video/BV17r5v6AEut/", note: "听说读写全科自学" },
      { title: "雅思 8.0 全套网课合集", source: "Bilibili", url: "https://www.bilibili.com/video/BV1V7496yEwi/", note: "2 个月系统备考路线" },
      { title: "British Council IELTS Practice", source: "British Council", url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests", note: "官方免费模考" }
    ],
    lessons: [
      {
        id: "eng-1",
        title: "学术词汇与阅读",
        en: "Academic Vocabulary and Reading",
        chapters: "雅思词汇真经",
        week: "每日 30 min",
        focus: "高频学术词 + 长难句拆解。",
        points: ["学术词表分主题记忆", "词根词缀猜词", "同义替换识别", "长难句主干提取", "段落主旨与细节定位"],
        pitfalls: ["只背拼写不背搭配", "阅读题先看选项再定位易错", "同义替换常换词性与短语", "生词不影响主旨时可跳过"],
        exams: ["阅读配对/段落主旨", "词汇同义替换", "学术写作用词"],
        videos: [
          { title: "雅思词汇动画课", source: "Bilibili", url: "https://www.bilibili.com/video/BV1uUPieDE4p/" },
          { title: "零基础雅思系统课", source: "Bilibili", url: "https://www.bilibili.com/video/BV1hMdhBCEm2/" }
        ]
      },
      {
        id: "eng-2",
        title: "听力与课堂理解",
        en: "Listening and Lecture Comprehension",
        chapters: "雅思听力 1200 词",
        week: "每日 30 min",
        focus: "精听、跟读、抓信号词。",
        points: ["数字、日期、地点高频词", "讲座结构信号词", "同义改写与干扰项", "精听五步法", "连读与弱读"],
        pitfalls: ["听写只写词不检查拼写", "答案词性与原文不一致", "Section 1 数字连读易漏", "边听边翻译会跟不上"],
        exams: ["听力填空", "讲座主旨与细节", "多选题"],
        videos: [
          { title: "雅思听力必须掌握的 1200 个词汇", source: "Bilibili", url: "https://www.bilibili.com/video/BV1vcG36sE3S/" },
          { title: "雅思全套教程", source: "Bilibili", url: "https://www.bilibili.com/video/BV1Ed9hB9EzK/" }
        ]
      },
      {
        id: "eng-3",
        title: "口语与展示",
        en: "Speaking and Presentation",
        chapters: "当季雅思口语题库",
        week: "每周 3 次 30 min",
        focus: "流利度 > 华丽词汇，结构化表达。",
        points: ["自我介绍与转专业动机", "Part 1 高频问题", "Part 2 事件/人物/地点", "Presentation 三段结构", "衔接词与补救表达"],
        pitfalls: ["背模板痕迹过重", "回答过短没有展开", "听不懂题目硬答", "展示时只看稿不互动"],
        exams: ["课堂展示", "英文面试", "雅思口语"],
        videos: [
          { title: "雅思口语题库与示范", source: "Bilibili", url: "https://www.bilibili.com/video/BV1c1tt6WEsA/" }
        ]
      },
      {
        id: "eng-4",
        title: "学术写作",
        en: "Academic Writing",
        chapters: "报告与论文写作框架",
        week: "每周 1 篇",
        focus: "用报告结构替代中式翻译思维。",
        points: ["引言-方法-结果-讨论结构", "图表描述句型", "论证与证据", "引用规范", "改写与降 AI 痕迹"],
        pitfalls: ["主谓一致与单复数错误", "中式英语直译", "图表题不写总体趋势", "引用不标注"],
        exams: ["实验报告", "课程小论文", "雅思 Task 1/2"],
        videos: [
          { title: "雅思全套教程", source: "Bilibili", url: "https://www.bilibili.com/video/BV1Ed9hB9EzK/" }
        ]
      },
      {
        id: "eng-5",
        title: "四级与雅思应试",
        en: "CET-4 and IELTS Strategy",
        chapters: "历年真题",
        week: "第10-16周",
        focus: "用真题卡时间训练应试节奏。",
        points: ["四级题型与时间分配", "雅思四科评分标准", "错题复盘表", "模考与机考适应"],
        pitfalls: ["刷题数量不等于质量", "作文只写不改", "听力先看题还是先听要固定策略", "模考不卡时间会失真"],
        exams: ["四级真题套卷", "雅思模考"],
        videos: [
          { title: "雅思词汇 10 天速记", source: "Bilibili", url: "https://www.bilibili.com/video/BV1cFPvevE8C/" }
        ]
      }
    ],
    quiz: [
      { q: "“abundant” 最接近的同义词是？", options: ["scarce", "plentiful", "moderate", "empty"], answer: 1, explain: "abundant = plentiful，表示丰富。" },
      { q: "更符合学术写作的句子是？", options: ["Things went up a lot.", "The results indicate a significant increase.", "Numbers got bigger.", "It is kind of high."], answer: 1, explain: "学术写作使用准确、正式的动词与数据描述。" },
      { q: "听力中听到 “However” 时，接下来最可能？", options: ["重复前文", "出现转折观点", "结束录音", "开始读题"], answer: 1, explain: "However 是转折信号词，常引出重点或反例。" },
      { q: "Presentation 中 “Let me move on to the next part” 的作用是？", options: ["道歉", "连接下一个部分", "总结全文", "提问观众"], answer: 1, explain: "这是明确的 signposting，用于过渡到下一部分。" },
      { q: "图表题写作最应先写？", options: ["每个数据", "总体趋势", "个人看法", "背景知识"], answer: 1, explain: "先给总体趋势再补充关键数据，结构更清晰。" }
    ],
    online: [
      { title: "British Council IELTS Practice Tests", url: "https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests", note: "官方免费模考" },
      { title: "IELTS Liz", url: "https://ieltsliz.com/", note: "分题型方法与练习" },
      { title: "IELTS-Up", url: "https://ielts-up.com/", note: "听说读写练习与模板" }
    ],
    practice: [
      { title: "雅思官方样题", url: "https://ielts.org/", note: "官方评分标准与样题" },
      { title: "B站零基础雅思系统课", url: "https://www.bilibili.com/video/BV1hMdhBCEm2/", note: "免费自学入口" }
    ]
  },
  {
    id: "python-ai",
    order: 8,
    name: "Python 与 AI 基础",
    enName: "Python and AI Foundations",
    code: "SELF-02",
    textbook: "Python 语言程序设计（嵩天）+ 黑马 Python+AI",
    pages: "—",
    chapters: "语法 / NumPy / Pandas / ML",
    semester: "self",
    accent: "#2F6B8F",
    summary: "机械转 AI 的补短板主线：Python 语法 → 数据分析 → 机器学习基础 → PyTorch 入门，每周固定投入，不做复杂项目，先建代码手感。",
    goals: ["独立完成 Python 基础语法任务", "会用 NumPy/Pandas 处理数据", "理解监督/无监督学习核心概念", "跑通第一个简单 ML 项目"],
    extraVideos: [
      { title: "黑马程序员 Python + AI 零基础全套", source: "Bilibili", url: "https://www.bilibili.com/video/BV1sHU9BmEne/", note: "语法、数据分析、AI 应用全覆盖" },
      { title: "黑马 Python 8 天入门到精通", source: "Bilibili", url: "https://www.bilibili.com/video/BV1qW4y1a7fU", note: "快速建立代码手感" },
      { title: "CS50 计算机科学导论", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLhQjrBD2T381L3iZyDTxRwOBuUt6m2Zpq", note: "编程思维与基础" },
      { title: "Kaggle Learn", source: "Kaggle", url: "https://www.kaggle.com/learn", note: "Python、Pandas、ML 动手练习" }
    ],
    lessons: [
      {
        id: "py-1",
        title: "Python 基础语法",
        en: "Python Basics",
        chapters: "嵩天 Python 第 1-4 章",
        week: "第1-4周",
        focus: "变量、分支、循环、函数。",
        points: ["变量与数据类型", "分支与循环", "函数与作用域", "异常处理", "模块与包"],
        pitfalls: ["缩进决定代码块", "可变对象默认参数陷阱", "range 边界左闭右开", "全局变量修改要加 global"],
        exams: ["循环输出题", "函数返回值", "简单算法实现"],
        videos: [
          { title: "Python语言程序设计 · 嵩天", source: "MOOC", url: "https://www.icourse163.org/course/BIT-268001" },
          { title: "黑马程序员 Python+AI", source: "Bilibili", url: "https://www.bilibili.com/video/BV1sHU9BmEne/" }
        ]
      },
      {
        id: "py-2",
        title: "数据结构与文件",
        en: "Data Structures and Files",
        chapters: "嵩天 Python 第 5-7 章",
        week: "第4-6周",
        focus: "列表、字典、集合与文件读写。",
        points: ["列表推导式", "字典与集合", "字符串方法", "文件读写", "JSON 与 CSV 基础"],
        pitfalls: ["列表切片是浅拷贝", "字典键必须可哈希", "文件操作要记得关闭或用 with", "CSV 读取要处理表头"],
        exams: ["列表/字典操作", "文件统计任务", "数据处理小案例"],
        videos: [
          { title: "Python语言程序设计 · 嵩天", source: "MOOC", url: "https://www.icourse163.org/course/BIT-268001" },
          { title: "黑马程序员 Python+AI", source: "Bilibili", url: "https://www.bilibili.com/video/BV1sHU9BmEne/" }
        ]
      },
      {
        id: "py-3",
        title: "NumPy 数值计算",
        en: "NumPy Fundamentals",
        chapters: "NumPy 官方教程 + 数据科学入门",
        week: "第6-8周",
        focus: "用数组替代循环，向量化思维。",
        points: ["ndarray 创建与形状", "索引与切片", "广播机制", "矩阵运算", "随机数与统计"],
        pitfalls: ["reshape 与转置区别", "广播规则从左往右对齐", "切片视图与副本", "浮点比较用 isclose"],
        exams: ["数组运算", "矩阵乘法", "数据统计"],
        videos: [
          { title: "黑马程序员 Python+AI", source: "Bilibili", url: "https://www.bilibili.com/video/BV1sHU9BmEne/" },
          { title: "Python语言程序设计 · 嵩天", source: "MOOC", url: "https://www.icourse163.org/course/BIT-268001" }
        ]
      },
      {
        id: "py-4",
        title: "Pandas 数据分析",
        en: "Pandas Data Analysis",
        chapters: "Pandas 官方教程",
        week: "第7-10周",
        focus: "用 DataFrame 完成清洗、筛选与聚合。",
        points: ["Series 与 DataFrame", "读取 CSV/Excel", "筛选与条件查询", "缺失值处理", "groupby 聚合", "merge 与 concat"],
        pitfalls: ["inplace=True 的坑", "索引不是列", "链式赋值警告", "groupby 后要 reset_index"],
        exams: ["数据清洗", "分组统计", "简单可视化"],
        videos: [
          { title: "黑马程序员 Python+AI", source: "Bilibili", url: "https://www.bilibili.com/video/BV1sHU9BmEne/" }
        ]
      },
      {
        id: "py-5",
        title: "机器学习基础",
        en: "Machine Learning Foundations",
        chapters: "南京财经《机器学习》MOOC",
        week: "第9-12周",
        focus: "理解监督/无监督学习与模型流程。",
        points: ["特征与标签", "训练/验证/测试集", "线性回归", "逻辑回归与分类", "决策树与集成", "过拟合与正则化", "模型评估指标"],
        pitfalls: ["数据泄漏：预处理必须只使用训练集信息", "类别不平衡不能只看准确率", "特征尺度差异大影响距离类模型", "测试集只能使用一次"],
        exams: ["线性回归实现", "分类模型评估", "过拟合诊断"],
        videos: [
          { title: "机器学习 · 南京财经大学", source: "MOOC", url: "https://www.icourse163.org/course/NJUE-1469504163" },
          { title: "Andrew Ng Machine Learning", source: "Coursera", url: "https://www.coursera.org/learn/machine-learning" }
        ]
      },
      {
        id: "py-6",
        title: "PyTorch 与项目实战",
        en: "PyTorch and First Project",
        chapters: "PyTorch 官方教程",
        week: "第11-16周",
        focus: "用 MNIST 等小项目跑通深度学习流程。",
        points: ["张量基本操作", "自动求导", "Dataset 与 DataLoader", "线性层与激活函数", "训练循环", "MNIST 图像分类"],
        pitfalls: ["反向传播前要 zero_grad", "训练/评估模式切换", "CPU 训练项目要控制规模", "损失函数与任务类型匹配"],
        exams: ["手写数字识别", "简单 CNN", "训练曲线分析"],
        videos: [
          { title: "机器学习 · 南京财经大学", source: "MOOC", url: "https://www.icourse163.org/course/NJUE-1469504163" },
          { title: "3Blue1Brown 神经网络", source: "YouTube", url: "https://www.youtube.com/watch?v=aircAruvnKk" }
        ]
      }
    ],
    quiz: [
      { q: "type([]) 的结果是？", options: ["tuple", "list", "dict", "set"], answer: 1, explain: "[] 创建 list。" },
      { q: "len(\"hello\") = ?", options: ["4", "5", "6", "报错"], answer: 1, explain: "字符串 hello 有 5 个字符。" },
      { q: "[1,2,3][-1] = ?", options: ["1", "2", "3", "IndexError"], answer: 2, explain: "负索引 -1 表示最后一个元素。" },
      { q: "np.array([1,2,3]) + 1 = ?", options: ["[2,3,4]", "[1,2,3,1]", "报错", "None"], answer: 0, explain: "NumPy 广播：每个元素加 1。" },
      { q: "df.head() 默认返回前几行？", options: ["3", "5", "10", "全部"], answer: 1, explain: "head() 默认返回前 5 行。" },
      { q: "下列哪个属于监督学习？", options: ["K-means 聚类", "线性回归", "PCA 降维", "关联规则"], answer: 1, explain: "线性回归使用带标签数据训练，属于监督学习。" }
    ],
    online: [
      { title: "w3resource Python Exercises", url: "https://www.w3resource.com/python-exercises/", note: "基础语法分主题题库" },
      { title: "LeetCode Problem Set", url: "https://leetcode.com/problemset/", note: "算法与代码手感" },
      { title: "Kaggle Learn", url: "https://www.kaggle.com/learn", note: "Python、Pandas 与 ML 练习" }
    ],
    practice: [
      { title: "Python语言程序设计 · 嵩天", url: "https://www.icourse163.org/course/BIT-268001", note: "MOOC 配套编程任务" },
      { title: "机器学习 · 南京财经大学", url: "https://www.icourse163.org/course/NJUE-1469504163", note: "中文 ML 入门" },
      { title: "PyTorch 官方教程", url: "https://pytorch.org/tutorials/", note: "官方动手练习" }
    ]
  },
  {
    id: "programming",
    order: 9,
    name: "计算机编程：C++ 与汇编",
    enName: "C++ Programming and Assembly Language",
    code: "CS-01",
    textbook: "Stroustrup《C++程序设计语言》 + 《汇编语言程序设计》 + 《大学计算机基础》",
    pages: "750 / 255 / 234",
    chapters: "C++ 第1-29章 · 汇编第1-12章 · 计算机基础第1-8章",
    semester: "fall",
    accent: "#2F6B8F",
    summary: "把程序设计、机器级执行和计算机通识作为完整的一条计算机主线。C++ 负责现代抽象、资源管理和工程组织，汇编负责看清寄存器、指令、堆栈与中断，计算机基础负责补系统、网络、数据库与安全。",
    goals: ["掌握 C++ 类型、函数、类和 RAII", "理解继承、模板与标准库的设计逻辑", "能阅读并编写 8086 汇编小程序", "建立 CPU、内存、操作系统和网络的整体模型", "用项目与调试记录证明编程能力"],
    extraVideos: [
      { title: "黑马程序员 C++ 从入门到精通", source: "Bilibili", url: "https://www.bilibili.com/video/BV1et411b73Z/", note: "语法、类和 STL 的中文系统课" },
      { title: "程序设计入门：C语言", source: "中国大学MOOC", url: "https://www.icourse163.org/course/ZJU-1001541001", note: "先补 C 语法与指针，再进入汇编和现代 C++" },
      { title: "计算机科学速成课", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=计算机科学速成课", note: "快速建立计算机系统全局观" },
      { title: "汇编语言程序设计", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=汇编语言程序设计 8086", note: "按教材章节选择寄存器、指令、中断与文件操作专题" }
    ],
    lessons: [
      {
        id: "prog-1",
        title: "C++ 程序结构、类型与表达式",
        en: "Program Structure, Types and Expressions",
        chapters: "Stroustrup 第1-3、6、9-10章",
        week: "第1-3周",
        focus: "从完整程序出发，理解声明、类型、作用域和表达式求值。",
        points: ["编译、链接与执行", "基本类型和对象", "声明、定义与初始化", "运算符优先级与求值顺序", "if/switch/循环", "值类别与类型转换"],
        pitfalls: ["未初始化变量", "有符号整数溢出", "把赋值当比较", "依赖未规定的表达式求值顺序", "隐式窄化转换"],
        exams: ["输出结果题", "类型与表达式判断", "语句改错"],
        videos: [
          { title: "黑马程序员 C++ 基础语法", source: "Bilibili", url: "https://www.bilibili.com/video/BV1et411b73Z/" },
          { title: "程序设计入门：C语言", source: "MOOC", url: "https://www.icourse163.org/course/ZJU-1001541001" }
        ]
      },
      {
        id: "prog-2",
        title: "指针、数组、引用与函数",
        en: "Pointers, Arrays, References and Functions",
        chapters: "Stroustrup 第7、12章",
        week: "第3-5周",
        focus: "建立地址、对象生命周期和函数接口模型。",
        points: ["指针与引用", "数组与指针关系", "const 与所有权", "值传递、引用传递", "函数重载和默认参数", "返回值和生命周期"],
        pitfalls: ["返回局部变量引用或指针", "数组越界", "悬空引用", "重载歧义", "修改 const 对象"],
        exams: ["指针输出题", "函数参数选择", "内存错误定位"],
        videos: [
          { title: "C语言指针专题", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=C语言 指针 翁恺" },
          { title: "黑马程序员 C++ 函数与指针", source: "Bilibili", url: "https://www.bilibili.com/video/BV1et411b73Z/" }
        ]
      },
      {
        id: "prog-3",
        title: "类、资源管理与 RAII",
        en: "Classes, Resource Management and RAII",
        chapters: "Stroustrup 第16-17章",
        week: "第5-7周",
        focus: "用类维护对象不变量，用构造和析构绑定资源生命周期。",
        points: ["封装与接口", "成员初始化列表", "构造函数与析构函数", "拷贝与移动语义", "Rule of Zero/Five", "智能指针浅入"],
        pitfalls: ["成员初始化顺序", "浅拷贝导致重复释放", "析构函数抛异常", "移动后的对象未保持有效状态", "自赋值"],
        exams: ["设计类接口", "写出拷贝/移动构造", "查找资源泄漏"],
        videos: [
          { title: "C++ 类与对象", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=C++ 类与对象 黑马" },
          { title: "C++ Core Guidelines", source: "GitHub", url: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines" }
        ]
      },
      {
        id: "prog-4",
        title: "继承、多态与运算符重载",
        en: "Inheritance, Polymorphism and Operators",
        chapters: "Stroustrup 第18-22章",
        week: "第7-9周",
        focus: "用接口设计解耦代码，并理解虚函数和动态绑定。",
        points: ["继承与访问控制", "虚函数和 override", "抽象类与接口", "对象切片", "动态类型识别", "常用运算符重载"],
        pitfalls: ["基类析构函数未声明 virtual", "派生类对象按值传给基类", "覆盖与隐藏混淆", "滥用 RTTI", "重载运算符破坏直觉"],
        exams: ["类层次设计题", "虚函数输出题", "运算符重载题"],
        videos: [
          { title: "C++ 继承与多态", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=C++ 继承 多态" },
          { title: "C++ Core Guidelines", source: "GitHub", url: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines" }
        ]
      },
      {
        id: "prog-5",
        title: "模板、泛型与编译期计算",
        en: "Templates, Generic Programming and Metaprogramming",
        chapters: "Stroustrup 第23-29章",
        week: "第9-11周",
        focus: "从函数模板到概念、特化和元编程，理解零开销抽象。",
        points: ["函数模板与类模板", "类型推导和约束", "特化与偏特化", "泛型算法", "constexpr 与 type traits", "模板实例化和链接"],
        pitfalls: ["模板定义与调用分离导致链接错误", "约束不满足产生长错误信息", "特化匹配顺序", "元编程过度导致不可读"],
        exams: ["模板函数编写", "特化判断", "编译期计算题"],
        videos: [
          { title: "C++ 模板与 STL", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=C++ 模板 STL" },
          { title: "C++ Core Guidelines", source: "GitHub", url: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines" }
        ]
      },
      {
        id: "prog-6",
        title: "STL、算法、异常与并发",
        en: "STL, Algorithms, Exceptions and Concurrency",
        chapters: "Stroustrup 第4-5、13章",
        week: "第11-13周",
        focus: "用标准库组织数据、算法和错误处理，并理解最基本的并发安全。",
        points: ["string/vector/map", "迭代器和算法", "lambda 与函数对象", "异常安全", "thread/mutex", "智能指针所有权"],
        pitfalls: ["迭代器失效", "erase 后继续使用迭代器", "异常期间泄漏资源", "数据竞争", "死锁", "shared_ptr 循环引用"],
        exams: ["STL 综合编程", "异常安全分析", "并发概念题"],
        videos: [
          { title: "STL 标准模板库", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=STL 标准模板库" },
          { title: "cppreference", source: "cppreference", url: "https://en.cppreference.com/w/" }
        ]
      },
      {
        id: "prog-7",
        title: "汇编基础、寻址与指令系统",
        en: "Assembly Basics, Addressing and Instructions",
        chapters: "汇编语言 第1-4章",
        week: "第3-6周",
        focus: "看清数据在寄存器与内存中的流动，理解机器级程序。",
        points: ["8086/8088 寄存器", "物理地址和段地址", "补码与数据表示", "七种寻址方式", "数据传送和算术逻辑指令", "标志位"],
        pitfalls: ["段地址左移四位", "操作数类型不匹配", "混淆 CPU 与内存", "忽略标志位变化", "非法寻址组合"],
        exams: ["寄存器内容跟踪", "寻址方式判断", "指令纠错"],
        videos: [
          { title: "汇编语言 8086 入门", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=8086 汇编语言 寄存器 寻址方式" },
          { title: "计算机组成原理", source: "中国大学MOOC", url: "https://www.icourse163.org/search.htm?search=计算机组成原理" }
        ]
      },
      {
        id: "prog-8",
        title: "汇编程序控制、子程序与中断",
        en: "Control Flow, Procedures and Interrupts",
        chapters: "汇编语言 第5-12章",
        week: "第6-10周",
        focus: "把高级语言的分支、循环、函数和 I/O 映射到机器级实现。",
        points: ["顺序、分支和循环", "call/ret 与堆栈", "参数传递和现场保护", "宏与多模块", "DOS/BIOS 调用", "中断向量与中断服务程序", "文件读写"],
        pitfalls: ["堆栈不平衡", "寄存器被调用者意外覆盖", "跳转范围", "中断未保护现场", "未发 EOI", "文件句柄未关闭"],
        exams: ["汇编程序改错", "子程序编写", "中断与文件调用"],
        videos: [
          { title: "汇编语言程序设计", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=汇编语言 子程序 中断 文件" },
          { title: "计算机系统基础", source: "中国大学MOOC", url: "https://www.icourse163.org/search.htm?search=计算机系统基础" }
        ]
      },
      {
        id: "prog-9",
        title: "计算机系统、网络、多媒体与安全",
        en: "Computer Systems, Networks, Multimedia and Security",
        chapters: "大学计算机基础 第1-6章",
        week: "第1-8周",
        focus: "建立从二进制、CPU、操作系统到网络和数据安全的完整通识地图。",
        points: ["冯诺依曼结构与指令周期", "数制、编码与数据表示", "操作系统与文件管理", "TCP/IP、IP、DNS 与 Internet", "音频、图像、视频编码与压缩", "密码、病毒、网络攻击和信息安全"],
        pitfalls: ["位与字节换算", "原码反码补码范围", "进程与线程混淆", "子网掩码计算", "采样与量化概念混淆", "哈希和加密概念混用"],
        exams: ["进制与补码", "操作系统概念", "IP 与网络协议", "多媒体编码", "安全判断题"],
        videos: [
          { title: "大学计算机基础", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=大学计算机基础 数制 网络 数据库" },
          { title: "计算机科学速成课", source: "Bilibili", url: "https://search.bilibili.com/all?keyword=计算机科学速成课" }
        ]
      }
    ],
    quiz: [
      { q: "C++ 中用于确保对象离开作用域时释放资源的机制是？", options: ["GC", "RAII", "反射", "模板元编程"], answer: 1, explain: "RAII 把资源生命周期绑定到对象生命周期，典型实现是构造函数获取资源、析构函数释放资源。" },
      { q: "基类指针删除派生类对象时，基类析构函数必须满足？", options: ["是 private", "是 virtual", "返回 void*", "是 static"], answer: 1, explain: "基类析构函数应为 virtual，否则通过基类指针删除派生类对象可能产生未定义行为。" },
      { q: "8086 实模式下物理地址通常怎样形成？", options: ["段地址 + 偏移", "段地址×16 + 偏移", "偏移×16", "页号 + 页内偏移"], answer: 1, explain: "实模式物理地址 = 段地址左移 4 位（乘 16）后加偏移地址。" },
      { q: "下列哪一项能够修改函数外部传入对象且避免拷贝？", options: ["传值", "传 const 引用", "传非 const 引用", "返回局部引用"], answer: 2, explain: "非 const 引用既能修改实参，也避免对象复制。" },
      { q: "vector 在使用迭代器遍历时插入元素，最需要注意？", options: ["迭代器可能失效", "元素自动排序", "长度不能增加", "类型会改变"], answer: 0, explain: "vector 扩容可能重新分配内存，原有迭代器、指针和引用可能失效。" },
      { q: "中断服务程序返回前通常需要发送 EOI 的原因是？", options: ["关闭文件", "通知中断控制器结束本次中断", "清除内存", "修改段寄存器"], answer: 1, explain: "发送 EOI 通知可编程中断控制器本次中断处理完成，以便处理后续中断。" }
    ],
    online: [
      { title: "LeetCode 中国", url: "https://leetcode.cn/problemset/", note: "用 C++ 刷数组、字符串、栈队列和树" },
      { title: "洛谷", url: "https://www.luogu.com.cn/problem/list", note: "适合基础语法、模拟和算法训练" },
      { title: "Compiler Explorer", url: "https://godbolt.org/", note: "观察 C++ 编译后的汇编输出" },
      { title: "cppreference", url: "https://en.cppreference.com/w/", note: "C++ 标准库和语言规则参考" }
    ],
    practice: [
      { title: "程序设计入门：C语言", url: "https://www.icourse163.org/course/ZJU-1001541001", note: "C 语言基础与指针练习" },
      { title: "计算机组成原理课程", url: "https://www.icourse163.org/search.htm?search=计算机组成原理", note: "配合汇编理解 CPU 与存储器" },
      { title: "C++ Core Guidelines", url: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines", note: "现代 C++ 工程规范" }
    ]
  },
  {
    id: "prep",
    order: 10,
    name: "大一下先修",
    enName: "Spring Semester Prep",
    code: "PREP-01",
    textbook: "各课程扩展章节",
    pages: "—",
    chapters: "微积分下 / 物理下 / 化学下 / 概率 / 编程",
    semester: "prep",
    accent: "#7B5E7E",
    summary: "在守住本学期绩点的前提下，第 11-16 周开始铺大一下：级数与多元微积分、电磁学、化学动力学与平衡、概率统计、数据结构与 MATLAB。",
    goals: ["完成大一下核心课的知识地图", "掌握概率统计基础概念", "补齐 OOP/数据结构与 MATLAB 先修", "为转 AI 面试准备项目素材"],
    extraVideos: [
      { title: "浙江大学《概率论与数理统计》", source: "Bilibili", url: "https://www.bilibili.com/video/BV1H2pkzhE5d/", note: "如何科学地变幸运" },
      { title: "《概率论与数理统计》浙大第五版零基础", source: "Bilibili", url: "https://www.bilibili.com/video/BV1UtHezmE6A/", note: "随机试验到随机变量全流程" },
      { title: "MIT 18.02 Multivariable Calculus", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/syllabus/", note: "多元微积分英文原版" },
      { title: "MIT 18.05 Probability and Statistics", source: "YouTube/OCW", url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/syllabus/", note: "概率统计 Problem Sets" }
    ],
    lessons: [
      {
        id: "prep-1",
        title: "高数下：级数与多元微积分",
        en: "Calculus II Prep",
        chapters: "Stewart Ch 8-13",
        week: "第11-16周",
        focus: "衔接 micro 到 macro：级数、偏导、重积分与向量微积分。",
        points: ["数列级数收敛判别", "幂级数与泰勒展开", "参数与极坐标", "偏导、梯度与极值", "二重/三重积分", "线面积分"],
        pitfalls: ["级数判别法适用范围", "多元极限路径依赖", "重积分积分限由区域决定", "换元要乘雅可比"],
        exams: ["级数收敛性", "多元极值", "重积分计算"],
        videos: [
          { title: "高等数学（三）· 同济大学 MOOC", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-53004" },
          { title: "The Essence of Calculus · 3Blue1Brown", source: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }
        ]
      },
      {
        id: "prep-2",
        title: "物理下：电磁、光学与近代物理",
        en: "Physics II Prep",
        chapters: "Walker Ch 21-44",
        week: "第11-16周",
        focus: "从库仑定律到麦克斯韦方程组，再到量子与核物理。",
        points: ["库仑定律与电场", "高斯定律", "电势与电容", "电路与 RC", "磁场与安培定律", "电磁感应与麦克斯韦方程", "电磁波与光学", "相对论与量子基础"],
        pitfalls: ["电场与电势符号", "高斯面选择要匹配对称性", "楞次定律判断方向", "干涉/衍射条件区分"],
        exams: ["电场/电势计算", "电路分析", "干涉衍射"],
        videos: [
          { title: "同济大学《大学物理3：电磁学》", source: "MOOC", url: "https://www.icourse163.org/course/TONGJI-44005" },
          { title: "MIT 8.02 Electricity and Magnetism", source: "OCW", url: "https://ocw.mit.edu/courses/8-022-physics-ii-electricity-and-magnetism-fall-2004/pages/assignments/" }
        ]
      },
      {
        id: "prep-3",
        title: "化学下：动力学、平衡与电化学",
        en: "Chemistry II Prep",
        chapters: "Burdge Ch 14-26",
        week: "第11-16周",
        focus: "反应速率、平衡、酸碱与电化学。",
        points: ["速率定律与机理", "化学平衡", "酸碱平衡与缓冲", "沉淀溶解平衡", "氧化还原与电化学", "有机与材料简介"],
        pitfalls: ["K 与 Q 的区别", "缓冲液 pH 计算", "能斯特方程 Q 形式", "配位数判断"],
        exams: ["平衡计算", "电化学电池", "缓冲溶液"],
        videos: [
          { title: "大学化学 · 西安交通大学", source: "MOOC", url: "https://www.icourse163.org/course/XJTU-1002331011" },
          { title: "MIT 5.111 Principles of Chemical Science", source: "OCW", url: "https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/" }
        ]
      },
      {
        id: "prep-4",
        title: "概率论与数理统计",
        en: "Probability and Statistics",
        chapters: "浙大《概率论与数理统计》",
        week: "第10-16周",
        focus: "AI 与数据分析的数学地基。",
        points: ["随机事件与概率", "随机变量与分布", "期望与方差", "大数定律与中心极限定理", "抽样分布", "参数估计与假设检验", "回归分析"],
        pitfalls: ["条件概率与独立事件", "连续型变量概率密度", "二项/泊松/正态选择", "置信区间解释"],
        exams: ["概率计算", "分布与数字特征", "假设检验"],
        videos: [
          { title: "概率论与数理统计 · 浙江大学", source: "MOOC", url: "https://www.icourse163.org/course/ZJU-232005" },
          { title: "《概率论与数理统计》全集 · 宋浩", source: "Bilibili", url: "https://www.bilibili.com/video/BV1ot411y7mU/" },
          { title: "MIT 18.05 Problem Sets", source: "OCW", url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/problem-sets/" }
        ]
      },
      {
        id: "prep-5",
        title: "编程进阶：OOP、数据结构与 MATLAB",
        en: "Programming Prep",
        chapters: "C++/Java OOP · 数据结构 · MATLAB",
        week: "第12-16周",
        focus: "面向 AI 专业补齐编程短板。",
        points: ["C 语言入门（翁恺）", "面向对象：类、封装、继承、多态", "数据结构：数组/链表/栈/队列/树", "MATLAB 基础与矩阵运算", "Git 与项目仓库"],
        pitfalls: ["OOP 三大特征只背定义不写代码", "链表指针操作易越界", "MATLAB 索引从 1 开始", "算法题先想复杂度再写"],
        exams: ["数据结构算法题", "简单 OOP 项目", "MATLAB 矩阵运算"],
        videos: [
          { title: "程序设计入门——C语言 · 翁恺", source: "MOOC", url: "https://www.icourse163.org/course/ZJU-199001" },
          { title: "数据结构 · 华中科技大学", source: "MOOC", url: "https://www.icourse163.org/course/HUST-1001907004" },
          { title: "现代科学运算 · MATLAB · 东北大学", source: "MOOC", url: "https://www.icourse163.org/course/NEU-1002660001" }
        ]
      }
    ],
    quiz: [
      { q: "下列级数判别法最适合交错级数的是？", options: ["比值判别法", "莱布尼茨判别法", "根值判别法", "积分判别法"], answer: 1, explain: "交错级数常用莱布尼茨判别法。" },
      { q: "高斯定律最适用于哪种对称性？", options: ["任意形状", "球/柱/平面高度对称", "仅矩形", "仅三角形"], answer: 1, explain: "高斯定律在球、柱、平面等高度对称场中便于求解。" },
      { q: "概率密度函数 f(x) 的归一化条件是？", options: ["∫f(x)dx = 1", "f(x) ≤ 1", "f(0)=1", "∫f(x)dx = 0"], answer: 0, explain: "连续型随机变量密度在全空间的积分为 1。" },
      { q: "MATLAB 数组索引从几开始？", options: ["0", "1", "2", "随机"], answer: 1, explain: "MATLAB 索引从 1 开始，与 Python 不同。" }
    ],
    online: [
      { title: "MIT 18.02SC Multivariable Calculus", url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/pages/syllabus/", note: "多元微积分 Problem Sets" },
      { title: "OpenStax Calculus Volume 2", url: "https://openstax.org/details/books/calculus-volume-2", note: "级数与多元微积分练习" },
      { title: "Khan Academy Statistics and Probability", url: "https://www.khanacademy.org/math/statistics-probability", note: "概率统计基础练习" }
    ],
    practice: [
      { title: "概率论与数理统计 · 浙江大学", url: "https://www.icourse163.org/course/ZJU-232005", note: "大一下先修" },
      { title: "MIT 18.05 Problem Sets", url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/pages/problem-sets/", note: "英文统计练习" },
      { title: "清华大学课程资料仓库", url: "https://github.com/Trinkle23897/THU-CST-Cracker", note: "国内名校课程与真题参考" }
    ]
  }
];
