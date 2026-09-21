window.SCAI_DUAL = {
  title: "国内课标教材 ↔ 英文原版教材",
  subtitle: "机械设计制造及其自动化 · 大一双线并行对照",
  principle: [
    "相同概念只学一遍：以英文原版建立概念与术语，再用国内教材的章节习题验收，不重复听课。",
    "国内教材单独处理差异：证明语言、计算方法、行列式/二次型、统计表格、谭版 C 语法是期末得分点。",
    "英文原版单独处理差异：几何直觉、现代应用、SVD/最小二乘、Bayesian 视角、C++/vector/string 是英文课程得分点。",
    "双线以学期为单位排块，不按页数逐页对照；同一知识块同时推进，考试前回各自教材查考点。"
  ],
  groups: [
    {
      id: "calculus",
      order: 1,
      subject: "高等数学",
      accent: "#C4522E",
      course: "calculus",
      zh: {
        name: "大学数学·微积分（上、下册）+ 同济高数参考",
        author: "上海交通大学数学系微积分课程组",
        chapters: "上册 1-6章 + 下册 7-11章",
        scope: "大一全年"
      },
      en: {
        name: "Essential Calculus 2e",
        author: "James Stewart · Brooks/Cole",
        chapters: "13 章，完整微积分",
        scope: "SCAI 英文主线，与 MIT 18.01 / 18.02 同源"
      },
      strategy: "Stewart 负责“为什么”：图像、数值直觉与英文术语；同济负责“怎么考”：ε-δ 证明、无穷小比较、中值定理证明与规范计算。概念重合时不重复学，中文课后题当作第一遍验收。",
      blocks: [
        {
          phase: "大一上 · 第1-4周",
          zh: "高数上 第1章 函数与极限；第2章 导数与微分",
          en: "Stewart Ch1-2 · Functions, Limits, Derivatives",
          same: "函数与反函数、复合函数；极限四则运算与夹逼；连续与间断；导数定义；四则/链式/隐函数求导",
          zhOnly: "ε-δ / ε-N 语言、数列极限、无穷小阶与等价无穷小替换、间断点分类、微分 dy 的近似应用",
          enOnly: "极限的图像与数值预览、瞬时变化率建模、反函数求导、英文术语 continuity / derivative / chain rule",
          rule: "用 Stewart/MIT 视频学概念，用同济例题练书写；等价无穷小和间断点分类只在中文材料中补。"
        },
        {
          phase: "大一上 · 第5-8周",
          zh: "高数上 第3章 微分中值定理与导数应用；第4章 不定积分",
          en: "Stewart Ch3-4 · Applications of Differentiation, Integrals",
          same: "中值定理、单调性、极值最值、凹凸拐点、函数作图；不定积分、换元与分部积分思想",
          zhOnly: "柯西中值定理、洛必达规则在中文教材的位置、微分近似题、常用积分表背诵",
          enOnly: "Newton 法、优化建模、数值积分预览、英文 Applied Project",
          rule: "证明题按同济规范书写；应用/作图题按 Stewart 流程，两边各自完成一版即可。"
        },
        {
          phase: "大一上 · 第9-12周",
          zh: "高数上 第5章 定积分；第6章 定积分的应用",
          en: "Stewart Ch4-7 · FTC, Techniques and Applications",
          same: "黎曼和、微积分基本定理、面积/体积/弧长/物理应用",
          zhOnly: "变上限积分求导、反常积分、微元法典型题、旋转体与平行截面面积题",
          enOnly: "Between Curves、Average Value、Shell/Washer 的英文表述与应用题",
          rule: "FTC 与换元在英文材料中建立直觉；反常积分和微元法多刷同济课后题。"
        },
        {
          phase: "大一上 · 第13-16周",
          zh: "高数上 第7章 微分方程",
          en: "Stewart Ch7 + ODE 相关章节",
          same: "可分离变量、一阶线性、可降阶与二阶常系数方程的基本模型",
          zhOnly: "可降阶高阶方程、常系数非齐次特解设取法、综合应用题（国内期末考试重点）",
          enOnly: "方向场、Euler 方法、斜率场与数值解直觉",
          rule: "中文教材把微分方程解法讲得系统，建议作为主要解法教材；英文只补图像与建模。"
        },
        {
          phase: "大一下 · 第1-8周",
          zh: "高数下：向量与空间解析几何、多元函数微分学",
          en: "Stewart Ch9-12 · Vectors, Vector Functions, Partial Derivatives",
          same: "向量点积叉积、直线平面、偏导/全微分、链式法则、方向导数梯度、多元极值",
          zhOnly: "空间曲面与曲线、隐函数存在定理、条件极值拉格朗日乘数法的计算题",
          enOnly: "Vector Functions 的运动学解释、梯度下降前身、英文术语 gradient / divergence",
          rule: "机械专业以“空间几何 → 场”为主线；同济侧重计算，Stewart 侧重直观。"
        },
        {
          phase: "大一下 · 第9-16周",
          zh: "高数下：重积分、曲线曲面积分、无穷级数",
          en: "Stewart Ch8, Ch13 · Series and Multiple Integrals",
          same: "二重/三重积分、交换积分次序；数项级数与幂级数判敛、Taylor 展开",
          zhOnly: "曲线曲面积分、Green/Gauss/Stokes 公式的国内考试题型",
          enOnly: "级数的数值/图像直觉、Fourier 级数先修、多元积分在物理场的应用",
          rule: "判敛法与重积分计算用同济章末题；Green/Gauss/Stokes 的中英术语各做一张卡。"
        }
      ]
    },
    {
      id: "linear-algebra",
      order: 2,
      subject: "线性代数",
      accent: "#2E6E5E",
      course: "linear-algebra",
      zh: {
        name: "线性代数",
        author: "同济大学数学系 · 高等教育出版社",
        chapters: "行列式 / 矩阵 / 方程组 / 向量组 / 相似与二次型 / 线性空间",
        scope: "通常大一上或大一下，按学校进度移动"
      },
      en: {
        name: "Linear Algebra: A Modern Introduction 4e",
        author: "David Poole",
        chapters: "Ch1-8：向量 → 方程组 → 矩阵 → 特征值 → 正交 → 向量空间 → SVD",
        scope: "SCAI 英文主线，配合 MIT 18.06"
      },
      strategy: "两本书的最大差异是起点：Poole 从向量几何开始，同济从行列式开始。不要按两本书分别完整学一遍；用 Poole 建立几何与变换直觉，用同济补齐行列式、秩与二次型的应考套路。",
      blocks: [
        {
          phase: "第一模块 · 向量与方程组",
          zh: "同济 第1/3/4章：行列式、初等变换与线性方程组、向量组",
          en: "Poole Ch1-2：Vectors, Systems of Linear Equations",
          same: "线性组合、高斯消元、解的结构、线性相关/无关、秩",
          zhOnly: "行列式性质与展开、克拉默法则、用初等行变换求逆、极大无关组求法",
          enOnly: "Row/Column Picture、向量几何、Span 与线性组合的视觉解释",
          rule: "顺序上建议先跟 Poole 建立“向量与方程组是一件事”，再回同济做行列式与秩的计算。"
        },
        {
          phase: "第二模块 · 矩阵与线性变换",
          zh: "同济 第2章 矩阵及其运算",
          en: "Poole Ch3 前半：Matrix Operations and Linear Transformations",
          same: "矩阵乘法、逆矩阵、转置、初等矩阵、分块思想",
          zhOnly: "伴随矩阵求逆、矩阵方程、方阵幂的规范步骤",
          enOnly: "矩阵即线性变换、复合变换的矩阵乘法、变换的几何效果",
          rule: "英文课程强调“矩阵是变换的表格”，中文课程强调计算；两者在乘法定义后自然合并。"
        },
        {
          phase: "第三模块 · 行列式与特征值",
          zh: "同济 第1章 + 第5章前半：行列式、相似矩阵与对角化",
          en: "Poole Ch4：Determinants, Eigenvalues and Eigenvectors",
          same: "行列式性质、特征方程、特征向量、相似与对角化、矩阵幂",
          zhOnly: "按行/列展开、行列式恒等式、重根可对角化判定、实对称矩阵正交对角化",
          enOnly: "特征值作为变换拉伸系数、Markov 链、动态系统 Aⁿx",
          rule: "概念看 Poole/3Blue1Brown；期末计算与判定按同济题型刷。"
        },
        {
          phase: "第四模块 · 正交性与二次型",
          zh: "同济 第5章后半：二次型、标准形与正定性",
          en: "Poole Ch5 / Ch7 部分：Orthogonality, Quadratic Forms",
          same: "内积、正交、投影、正交变换（配方或特征值法标准化）",
          zhOnly: "配方法化二次型、惯性指数、正定矩阵判定（顺序主子式）",
          enOnly: "Gram-Schmidt、QR、最小二乘、SVD 的低秩近似",
          rule: "这部分是“差异最大”的地方：中文期末考二次型正定，英文课程考最小二乘与 SVD，两边都要单独补。"
        },
        {
          phase: "第五模块 · 向量空间（进阶）",
          zh: "同济 第6章 线性空间与线性变换（部分学校选学）",
          en: "Poole Ch6：Vector Spaces",
          same: "子空间判定、基与维数、坐标变换、核与像、线性变换矩阵",
          zhOnly: "线性空间公理与子空间证明的规范表达",
          enOnly: "行列空间/列空间/零空间、秩-零化度定理、换基矩阵应用",
          rule: "若学校不考第6章，向量空间只跟 Poole 学；若期末考，再补同济证明格式。"
        }
      ]
    },
    {
      id: "probability",
      order: 3,
      subject: "概率论与数理统计",
      accent: "#3B6F8F",
      course: "prep",
      zh: {
        name: "概率论与数理统计",
        author: "浙江大学（盛骤等）· 高等教育出版社",
        chapters: "随机事件 / 随机变量 / 数字特征 / 大数定律与 CLT / 抽样分布 / 参数估计 / 假设检验",
        scope: "大一下或大二上，项目内按大一下规划"
      },
      en: {
        name: "Introduction to Probability（英文对照主线）",
        author: "MIT 18.05 / Blitzstein & Hwang",
        chapters: "概率公理 / 随机变量 / 期望 / 大数定律 / 贝叶斯推断 / 参数估计与检验",
        scope: "免费英文讲义与 Problem Sets，中文主教材为浙大版"
      },
      strategy: "概率论的底层概念完全一样，不需要两套都从头学。浙大版负责公式、分布表和国内期末题型；MIT/Blitzstein 负责 simulation、Bayesian 视角和英文术语。",
      blocks: [
        {
          phase: "第一模块",
          zh: "第1章 随机事件与概率",
          en: "Sample Spaces, Conditional Probability, Independence, Bayes",
          same: "古典概型、条件概率、全概率公式、Bayes 公式、独立性",
          zhOnly: "排列组合应用题、不放回/放回模型、事件运算的严谨书写",
          enOnly: "树图/仿真直觉、Bayes 更新的动态解释、英文事件名词",
          rule: "公式只学一遍；中文多做应用题，英文看 Simulation 与 Bayes 解释。"
        },
        {
          phase: "第二模块",
          zh: "第2章 随机变量及其分布",
          en: "Discrete/Continuous Random Variables, PMF/PDF/CDF",
          same: "0-1/二项/泊松/均匀/指数/正态分布；分布函数与密度函数",
          zhOnly: "分布函数求法、常见分布表格背诵、概率计算题",
          enOnly: "LOTUS、随机变量的故事/场景、正态近似、常用英文分布名",
          rule: "分布表格按浙大版记忆；英文重点放在“为什么用这个分布”。"
        },
        {
          phase: "第三模块",
          zh: "第3-4章 多维随机变量、数字特征",
          en: "Joint Distributions, Expectation, Variance, Covariance",
          same: "期望/方差、协方差/相关系数、条件期望、独立性",
          zhOnly: "二维随机变量联合分布与边缘分布计算、协方差公式",
          enOnly: "Law of Total Expectation、条件期望作为“最优预测”、不等式（Markov/Chebyshev）",
          rule: "计算题以浙大版为准；条件期望的直觉用英文材料补。"
        },
        {
          phase: "第四模块",
          zh: "第5-6章 大数定律、中心极限定理、样本与抽样分布",
          en: "LLN, CLT, Sampling Distributions",
          same: "大数定律、CLT、χ²/t/F 抽样分布",
          zhOnly: "依概率收敛/分布收敛证明、抽样分布定理、自由度概念",
          enOnly: "CLT 的模拟实验、样本均值分布、bootstrap 先修",
          rule: "国内定理证明按中文教材，CLT 直觉看英文模拟。"
        },
        {
          phase: "第五模块",
          zh: "第7-8章 参数估计、假设检验、回归分析",
          en: "Maximum Likelihood, Confidence Intervals, Hypothesis Tests, Regression",
          same: "矩估计/MLE、区间估计、u/t/χ²/F 检验、一元回归",
          zhOnly: "统计表查表、检验步骤规范、两类错误、区间估计公式",
          enOnly: "似然函数图像、p-value 解释、Bayesian 推断对照、模拟检验",
          rule: "国内期末按“设统计量-拒绝域-结论”模板答题；英文课程强调 p-value 与似然。"
        }
      ]
    },
    {
      id: "physics",
      order: 4,
      subject: "大学物理",
      accent: "#5A6B4A",
      course: "physics",
      zh: {
        name: "物理学（上、下册）",
        author: "马文蔚等 · 高等教育出版社",
        chapters: "力学 / 振动波动与热学 / 电磁学 / 光学与近代物理",
        scope: "通常大一大二两个学期"
      },
      en: {
        name: "Principles of Physics 12e",
        author: "Halliday / Resnick / Walker",
        chapters: "Ch1-44，对应项目 Walker 主线",
        scope: "SCAI 英文主线，可配合 OpenStax University Physics 免费练习"
      },
      strategy: "物理是按“模型”组织的：受力分析、能量、动量、转动、场、波。中文与英文教材在同一模型下只学一次；马文蔚负责中文概念与期末计算，Walker 负责英文表述、Checkpoint 与实际工程例子。",
      blocks: [
        {
          phase: "力学一 · 质点",
          zh: "马文蔚 上册：运动学、牛顿定律",
          en: "Walker Ch1-6：Measurement, Motion, Vectors, Newton's Laws",
          same: "矢量、运动方程、牛顿定律、摩擦、圆周运动",
          zhOnly: "中文“设正方向”解题规范、典型计算题",
          enOnly: "英文量纲/有效数字术语、Checkpoint、真实场景题",
          rule: "受力分析流程用一张自由体图卡固定；中英只各做一次受力分析。"
        },
        {
          phase: "力学二 · 功与能量、动量",
          zh: "马文蔚 上册：功和能量、动量",
          en: "Walker Ch7-9：Work, Energy, Momentum",
          same: "功-动能定理、势能、机械能守恒、冲量动量、碰撞",
          zhOnly: "变力做功积分、系统动能定理、碰撞系数题型",
          enOnly: "能量视角的解题策略、Power/效率、二维碰撞的工程例子",
          rule: "先掌握“能量还是动量”的选择标准，再做中英各一组题。"
        },
        {
          phase: "刚体与振动波热学",
          zh: "马文蔚 上册：刚体转动、振动波动、热学",
          en: "Walker Ch10-20：Rotation, Oscillations, Waves, Thermodynamics",
          same: "转动惯量、角动量、简谐运动、机械波、热力学第一/二定律",
          zhOnly: "转动惯量积分、简谐运动方程推导、热机循环计算",
          enOnly: "角动量守恒的太空/体操案例、波的能量与 Doppler 建模",
          rule: "力学期末最重的转动与热学用中文教材练计算，英文教材用来读题。"
        },
        {
          phase: "电磁学 · 大一下",
          zh: "马文蔚 下册：静电场、恒定磁场、电磁感应",
          en: "Walker Ch21-32：Charge, Field, Potential, Circuits, Magnetism, Induction",
          same: "库仑定律、高斯定理、电势、电容、欧姆定律、安培/洛伦兹力、法拉第定律",
          zhOnly: "场强叠加积分、高斯定理选取高斯面、磁通量方向判断",
          enOnly: "电场线/等势面可视化、RC 电路、Maxwell 方程组先修",
          rule: "高斯定理和感应电动势是中文考试重点；英文重点在电路与 Maxwell 图像。"
        },
        {
          phase: "光学与近代物理 · 大一下",
          zh: "马文蔚 下册：波动光学、相对论、量子物理",
          en: "Walker Ch33-44：Light, Optics, Relativity, Quantum",
          same: "杨氏双缝、薄膜干涉、衍射、狭义相对论、光电效应、物质波",
          zhOnly: "光程差公式、半波损失、衍射明暗纹计算",
          enOnly: "激光/光纤应用、相对论时空图、量子概率解释",
          rule: "干涉衍射按中文公式刷题；近代物理的“为什么”用英文材料看。"
        }
      ]
    },
    {
      id: "computer-foundation",
      order: 5,
      subject: "大学计算机基础",
      accent: "#7B5E7E",
      course: "python-ai",
      zh: {
        name: "大学计算机基础",
        author: "按学校指定教材（通常高等教育出版社）",
        chapters: "计算机系统 / 数制 / 操作系统 / 办公软件 / 网络 / 信息素养",
        scope: "大一上，重实操与课程作业"
      },
      en: {
        name: "CS50 / MIT 6.0001（免费英文入门）",
        author: "Harvard / MIT OpenCourseWare",
        chapters: "Abstraction, Algorithms, Data, Internet, Programming",
        scope: "用于补英文计算机概念与编程思维"
      },
      strategy: "大学计算机基础是“信息素养 + 实操”课，不需要和算法课一样精读。把数制、CPU/内存、文件系统、网络这些概念合并进 CS50/Gaddis 第1章一次学完，Office 与课程实验按国内教材完成。",
      blocks: [
        {
          phase: "系统与信息表示",
          zh: "教材第1-3章：计算机系统、数制与编码",
          en: "CS50 Week0-2 / Gaddis Ch1：Binary, Abstraction, Hardware/Software",
          same: "二进制、字符编码、CPU/主存/辅存、编译与解释、操作系统",
          zhOnly: "进制转换笔算、补码/原码题、Word/Excel 实验操作",
          enOnly: "Abstraction 分层、algorithm 与 pseudocode、英文 Computer Science 术语",
          rule: "概念以英文课程建立，进制换算按中文教材做 20 题，Office 实操单独做作业。"
        },
        {
          phase: "网络、信息安全与数字素养",
          zh: "教材第4-6章：计算机网络、信息安全、信息检索",
          en: "CS50 网络章节 / Internet 与 Security 基础",
          same: "IP/DNS、HTTP、客户端服务器、密码与安全常识",
          zhOnly: "国内网络协议考点（TCP/IP 分层、域名、子网计算）、学术不端与信息检索规范",
          enOnly: "Internet 分层动画、加密与 HTTPS 原理",
          rule: "协议分层在中文材料里按考点背；加密/HTTPS 原理看英文动画即可。"
        }
      ]
    },
    {
      id: "programming",
      order: 6,
      subject: "C 语言程序设计",
      accent: "#2F6B8F",
      course: "python-ai",
      zh: {
        name: "C程序设计",
        author: "谭浩强 · 清华大学出版社",
        chapters: "程序结构 / 数据类型 / 选择循环 / 数组 / 函数 / 指针 / 结构体 / 文件",
        scope: "国内课程教材；CS 文件夹中另有对应实践项目"
      },
      en: {
        name: "Starting Out with C++ 9e",
        author: "Tony Gaddis（CS 文件夹项目主线）",
        chapters: "Ch1-10：程序结构、类型、分支、循环、函数、数组、指针、字符串",
        scope: "英文 C/C++ 主线；配合翁恺 C 语言中文课与 Compiler Explorer"
      },
      strategy: "C 与 C++ 的“程序流程、数据类型、分支循环、函数数组”完全同源，只学一遍。真正需要区分的是语法外壳：printf/scanf 与 cin/cout、C 字符串与 string、malloc/free 与 new/delete、struct 与 class。CS 文件夹里的 SCAI C++ 自学导航就是这条英文实践线。",
      codeLabs: [
        {
          id: "io-diff",
          title: "同一个“读成绩算平均”，两种语言外壳",
          note: "C 用 printf/scanf + %lf；C++ 用 cout/cin。不要两遍都学概念，只背输入输出语法差异。",
          zh: {
            label: "谭版 C",
            code: `#include <stdio.h>

int main() {
    double a, b;
    printf("Enter two scores: ");
    scanf("%lf %lf", &a, &b);
    printf("Average: %.2f\\n", (a + b) / 2.0);
    return 0;
}`
          },
          en: {
            label: "Gaddis C++（CS 项目）",
            code: `#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    double a, b;
    cout << "Enter two scores: ";
    cin >> a >> b;
    cout << "Average: " << fixed << setprecision(2)
         << (a + b) / 2.0 << endl;
    return 0;
}`
          }
        },
        {
          id: "memory-diff",
          title: "字符串与容器差异",
          note: "C 的字符数组要处理 '\\0' 和 strlen/strcpy；C++ 的 string 自动管理长度，另有 vector 可动态扩容。",
          zh: {
            label: "谭版 C",
            code: `#include <stdio.h>
#include <string.h>

int main() {
    char name[32] = "SCAI";
    printf("%s %d\\n", name, (int)strlen(name));
    return 0;
}`
          },
          en: {
            label: "Gaddis C++",
            code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "SCAI";
    cout << name << " " << name.length() << endl;
    return 0;
}`
          }
        }
      ],
      blocks: [
        {
          phase: "W1-4 · 入门与顺序结构",
          zh: "谭 第1-3章：程序、算法、顺序结构",
          en: "Gaddis Ch1-3：Program Structure, Variables, I/O",
          same: "程序 = 输入/处理/输出；变量与类型；算术运算；整数除法与取余",
          zhOnly: "printf/scanf 格式串、%d/%lf、地址运算符 &、算法流程图规范",
          enOnly: "cout/cin、命名空间、const、setprecision、Compiler Explorer 运行",
          rule: "第一个程序两边各写一次即可；之后统一用“中文教材看算法，英文工具做运行”。"
        },
        {
          phase: "W5-8 · 选择与循环",
          zh: "谭 第4-5章：选择结构、循环控制",
          en: "Gaddis Ch4-5：Making Decisions, Loops",
          same: "if/else、switch、while/for/do-while、break/continue",
          zhOnly: "关系运算符与 if 嵌套的中文习题、循环边界易错题",
          enOnly: "C++ 布尔类型、输入验证循环、菜单循环、嵌套循环表格输出",
          rule: "循环概念只学一遍；中文多做“输出图形/求素数”题，英文做输入验证。"
        },
        {
          phase: "W9-12 · 数组与函数",
          zh: "谭 第6-7章：数组、函数",
          en: "Gaddis Ch6-8：Functions, Arrays, Searching/Sorting",
          same: "一维/二维数组、求和平均最值、函数定义与调用、形参实参、排序查找",
          zhOnly: "数组元素地址、函数声明位置、静态局部变量、递归初步",
          enOnly: "vector 动态数组、函数重载、默认参数、引用参数、range-based for",
          rule: "数组遍历与函数拆解一起练；C 的指针数组细节看中文，C++ vector 只当英文扩展。"
        },
        {
          phase: "W13-16 · 指针、结构体与文件",
          zh: "谭 第8-10章：指针、结构体、文件",
          en: "Gaddis Ch9-10：Pointers, C-strings, Files",
          same: "地址与指针概念、动态内存、结构体/记录、文件读写",
          zhOnly: "指针与数组关系、指针函数、malloc/free、结构体指针、文件 fscanf/fprintf",
          enOnly: "C++ string、new/delete、ifstream/ofstream、class 先修",
          rule: "指针是谭版期末重点，必须用 C 完成；C++ 类与容器留给 CS 项目第13章后。"
        }
      ],
      resources: [
        {
          title: "CS 文件夹 · SCAI C++ 自学导航",
          url: "cs-app/index.html",
          note: "由 Tony Gaddis + 翁恺整理的 10 章代码实践，已嵌入本项目；手机可在本页右上角直接打开。",
          source: "CS project"
        },
        {
          title: "翁恺《程序设计入门—C语言》",
          url: "https://www.icourse163.org/course/ZJU-1001541001",
          note: "国内 C 语言主线中文课，按谭版章节学习。",
          source: "MOOC"
        },
        {
          title: "LearnCpp.com",
          url: "https://www.learncpp.com/",
          note: "英文 C++ 免费教程，对应 Gaddis 章节。",
          source: "LearnCpp"
        },
        {
          title: "Compiler Explorer",
          url: "https://godbolt.org/",
          note: "C/C++ 在线编译运行，配合 CS 项目代码练习。",
          source: "Godbolt"
        }
      ]
    }
  ],
  yearPlan: {
    intro: "下面的学期节奏不是死课表，而是“国内课程 vs SCAI 英文课程”的合并建议。若学校把线代/概率放在另一学期，只需把对应块整体平移；原则始终是相同概念只学一遍，不同处单独补。",
    terms: [
      {
        id: "sem1",
        title: "大一上 · 第1-16周",
        note: "主任务：函数/极限/导数/矩阵/运动学建立共同语言；C 语言从零到指针前；计算机基础与英文 CS 概念合并。",
        phases: [
          {
            range: "第1-4周",
            zh: "高数上 1-2章；线代：向量/方程组/行列式；物理：运动学与牛顿定律；计算机基础：系统与数制；C：顺序/输入输出",
            en: "Stewart Ch1-2；Poole Ch1-2；Walker Ch1-6；Gaddis Ch1-3；CS50 Week0-2",
            merged: "极限/导数/向量/方程组/程序输入输出只建立一次概念",
            zhDiff: "同济 ε-δ、等价无穷小、行列式计算；谭版 printf/scanf",
            enDiff: "英文术语、几何直觉、cout/cin、Compiler Explorer"
          },
          {
            range: "第5-8周",
            zh: "期中复盘；高数导数应用；线代矩阵运算；C 选择与循环",
            en: "Stewart Ch3；Poole Ch3；Gaddis Ch4-5；MIT/OpenStax 对应 Problem Set",
            merged: "中值定理/极值/矩阵乘法/分支循环合并复习，期中前错题清零",
            zhDiff: "同济中值定理证明与洛必达；谭版 switch 题型",
            enDiff: "英文应用题与输入验证编程题"
          },
          {
            range: "第9-12周",
            zh: "高数定积分与微元法；线代特征值与二次型；物理功/能量/动量/转动；C 数组与函数",
            en: "Stewart Ch4-7；Poole Ch4-5；Walker Ch7-11；Gaddis Ch6-8",
            merged: "FTC/特征值/功与能量/数组函数同一周推进",
            zhDiff: "变上限积分、反常积分、旋转体、二次型、转动惯量计算",
            enDiff: "Gram-Schmidt、QR、最小二乘、C++ vector"
          },
          {
            range: "第13-16周",
            zh: "高数微分方程；线代二次型收尾；C 指针与文件；各科期末",
            en: "Stewart ODE；Poole Ch6-7；Gaddis Ch9-10",
            merged: "微分方程/向量空间/指针文件做期末冲刺",
            zhDiff: "高阶常系数 ODE、正定判定、指针运算按中文期末标准",
            enDiff: "SVD/线性变换与 C++ 动态内存按英文作业标准"
          }
        ]
      },
      {
        id: "sem2",
        title: "大一下 · 第17-32周",
        note: "主任务：高数下、概率统计、物理下（电磁/光学/近代）、C/C++ 进阶与 CS 项目。",
        phases: [
          {
            range: "第17-20周",
            zh: "高数下：空间解析几何/多元微分；概率：随机事件与随机变量；物理下：静电场；编程：C++/CS 项目面向对象先修",
            en: "Stewart Ch9-12；浙大概率 1-2章；Walker Ch21-24；CS C++ 导航第1-4章",
            merged: "向量/概率分布/场强概念合并",
            zhDiff: "空间曲面、条件概率/分布函数计算、高斯定理积分",
            enDiff: "梯度/散度英文、Bayes 模拟、vector/string"
          },
          {
            range: "第21-24周",
            zh: "高数重积分；概率多维随机变量/数字特征；物理磁学；C++/CS 项目 5-8章",
            en: "Stewart Ch13；浙大概率 3-4章；Walker Ch25-32；CS 导航第5-8章",
            merged: "重积分/期望方差/磁场计算/循环函数合并",
            zhDiff: "交换积分次序、协方差/相关系数、安培环路",
            enDiff: "条件期望/LOTUS、C++ 类与引用"
          },
          {
            range: "第25-28周",
            zh: "高数曲线曲面积分/级数；概率大数定律与 CLT；光学；CS 项目 9-10章",
            en: "Stewart Ch8/13；浙大概率 5-6章；Walker Ch33-36；CS 导航第9-10章",
            merged: "级数/CLT/干涉衍射/指针数组",
            zhDiff: "判敛法、Green/Gauss/Stokes、统计表",
            enDiff: "Taylor/傅里叶直觉、bootstrap、C++ 智能指针"
          },
          {
            range: "第29-32周",
            zh: "概率参数估计/假设检验/回归；近代物理；期末与 CS 项目结项",
            en: "浙大概率 7-8章；Walker Ch37-44；MIT 18.05 Problem Sets",
            merged: "估计/检验/回归与 Bayesian 对照复习",
            zhDiff: "置信区间、u/t/χ²/F 检验步骤、相对论/量子中文题",
            enDiff: "MLE/p-value/似然英文表达、CS 仓库作品整理"
          }
        ]
      }
    ]
  }
};
