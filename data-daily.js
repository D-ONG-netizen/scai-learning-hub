(function(){
"use strict";

const listeningItems=[];
let listeningOrder=0;
for(let book=10;book<=21;book++){
  for(let test=1;test<=4;test++){
    for(let section=1;section<=4;section++){
      listeningOrder+=1;
      listeningItems.push({
        id:`c${book}-t${test}-s${section}`,
        order:listeningOrder,
        book,
        test,
        section,
        label:`剑桥雅思 ${book} · Test ${test} · Section ${section}`,
        reviewAfterTest:section===4
      });
    }
  }
}

window.SCAI_DAILY={
  meta:{
    startDate:"2026-10-05",
    timezone:"Asia/Shanghai",
    resetAt:"00:00",
    newWordsPerDay:50,
    targetWordsPerDay:50,
    batchMode:"chapter-balanced",
    chapterBoundaryRule:"每天的批次不混入下一章；较长章节按 30-60 词拆成连续学习单元。",
    minWordsPerDay:30,
    maxWordsPerDay:60,
    reviewOffsets:[1,2,4,7,15,30],
    expectedVocabularyDays:null
  },
  ielts:{
    title:"雅思词汇真经 · 每日词卡",
    startChapter:6,
    sourceLabel:"《雅思词汇真经》刘洪波",
    reviewRule:"学习后第 1、2、4、7、15、30 天复习；模糊或忘记的词额外次日复习。",
    overloadThreshold:200,
    batchRule:"按章节动态分配，每天目标约50词，实际约30-60词；不跨章节拆分。"
  },
  listening:{
    title:"剑桥雅思精听",
    url:"https://www.idictation.cn/main/book",
    sourceLabel:"爱听写 · 剑雅 10-21",
    items:listeningItems,
    steps:[
      {id:"blind",label:"盲听抓主旨",minutes:5},
      {id:"dictation",label:"逐句听写",minutes:12},
      {id:"correct",label:"对照订正",minutes:6},
      {id:"shadow",label:"跟读复述",minutes:5}
    ],
    afterAll:"完成 C10-C21 后进入整套模考、错题回炉和高频场景复习。"
  },
  programming:{
    title:"C 语言 30 分钟训练",
    dailyMinutes:30,
    ptaUrl:"https://pintia.cn/problem-sets/2096403164988022784/exam/overview",
    routine:[
      {minutes:5,label:"复习昨日错题和测试用例"},
      {minutes:20,label:"完成当天主平台题目"},
      {minutes:5,label:"记录错误类型、边界条件和思路"}
    ],
    phases:[
      {
        days:[1,7],
        title:"输入输出与变量",
        tasks:[
          {title:"程序结构与 printf",goal:"能编译运行第一个程序，理解预处理、主函数和语句。"},
          {title:"整数输入 scanf",goal:"正确读取整数和多个输入，理解变量地址。"},
          {title:"算术运算",goal:"完成加减乘除和取余，处理整数除法。"},
          {title:"浮点类型",goal:"区分 int、float、double 和格式占位符。"},
          {title:"字符与 ASCII",goal:"读写字符并完成大小写转换。"},
          {title:"格式化输出",goal:"控制小数位、宽度和换行。"},
          {title:"综合复习",goal:"重做本周错题，写出两类输入边界。"}
        ]
      },
      {
        days:[8,14],
        title:"条件与分支",
        tasks:[
          {title:"关系运算",goal:"区分 = 与 ==，掌握比较运算结果。"},
          {title:"if / else",goal:"把文字条件翻译成程序分支。"},
          {title:"最大值与最小值",goal:"用条件结构处理三类数据。"},
          {title:"嵌套条件",goal:"处理成绩等级、三角形分类等问题。"},
          {title:"字符分类",goal:"判断字母、数字、空格等字符类型。"},
          {title:"switch",goal:"完成菜单和离散分支题。"},
          {title:"综合复习",goal:"重做错题并检查条件顺序。"}
        ]
      },
      {
        days:[15,21],
        title:"循环控制",
        tasks:[
          {title:"for 循环",goal:"掌握计数循环、起点、终点和步长。"},
          {title:"while 循环",goal:"处理事先不知道次数的循环。"},
          {title:"do-while",goal:"理解至少执行一次的场景。"},
          {title:"累加与计数",goal:"完成求和、平均值和统计题。"},
          {title:"图形输出",goal:"用嵌套循环输出三角形和矩形。"},
          {title:"break 与 continue",goal:"控制提前结束和跳过本次迭代。"},
          {title:"综合复习",goal:"整理循环边界与死循环错因。"}
        ]
      },
      {
        days:[22,28],
        title:"一维数组",
        tasks:[
          {title:"数组定义与遍历",goal:"读写一维数组并正确处理下标。"},
          {title:"数组求和平均",goal:"完成基础统计题。"},
          {title:"最大值与最小值",goal:"保存下标而不是只保存值。"},
          {title:"逆序与交换",goal:"正确使用临时变量交换元素。"},
          {title:"线性查找",goal:"完成存在性判断和首次出现位置。"},
          {title:"计数排序初步",goal:"用数组统计频次。"},
          {title:"综合复习",goal:"检查越界、初始化和边界输入。"}
        ]
      },
      {
        days:[29,35],
        title:"字符数组与字符串",
        tasks:[
          {title:"C 字符串基础",goal:"理解结尾 '\\0' 和字符数组。"},
          {title:"字符串输入输出",goal:"区分 scanf、fgets 和 puts。"},
          {title:"strlen 与遍历",goal:"手写长度统计并对比 strlen。"},
          {title:"字符统计",goal:"统计字母、数字、空格和标点。"},
          {title:"字符串复制与连接",goal:"理解 strcpy、strcat 和缓冲区。"},
          {title:"回文与反转",goal:"处理字符串下标和边界。"},
          {title:"综合复习",goal:"检查数组长度、结尾符和输入换行。"}
        ]
      },
      {
        days:[36,42],
        title:"函数与递归入门",
        tasks:[
          {title:"函数定义与调用",goal:"拆出函数并明确参数和返回值。"},
          {title:"值传递",goal:"观察形参与实参的独立存储。"},
          {title:"返回多个结果的替代方案",goal:"使用数组或指针参数返回结果。"},
          {title:"函数声明",goal:"理解声明与定义、调用顺序。"},
          {title:"递归阶乘与斐波那契",goal:"写出递归边界和递推关系。"},
          {title:"模块化编程",goal:"把综合题拆成 3 个以上小函数。"},
          {title:"综合复习",goal:"检查返回值遗漏、参数顺序和递归出口。"}
        ]
      },
      {
        days:[43,49],
        title:"二维数组与综合题",
        tasks:[
          {title:"二维数组定义",goal:"读写矩阵并理解行优先存储。"},
          {title:"矩阵求和",goal:"完成行列统计和边界处理。"},
          {title:"矩阵转置",goal:"输出与原地修改分开理解。"},
          {title:"主对角线",goal:"处理方阵对角线与副对角线。"},
          {title:"二维查找",goal:"完成矩阵最大值和位置记录。"},
          {title:"图案与矩阵",goal:"把图形规律转化为行列条件。"},
          {title:"综合复习",goal:"重写一道多模块综合题。"}
        ]
      },
      {
        days:[50,56],
        title:"指针、结构体、文件与项目",
        tasks:[
          {title:"指针基础",goal:"理解地址、解引用与类型。"},
          {title:"指针与数组",goal:"使用指针遍历数组。"},
          {title:"函数中的指针",goal:"使用指针交换变量或返回多个结果。"},
          {title:"结构体",goal:"定义学生或坐标结构并访问成员。"},
          {title:"结构体数组",goal:"完成录入、排序和统计。"},
          {title:"文件基础",goal:"使用 fopen、fscanf、fprintf、fclose。"},
          {title:"综合小项目",goal:"完成一项带菜单、文件存储和错误检查的控制台程序。"}
        ]
      }
    ],
    platforms:[
      {
        id:"pta",
        name:"PTA 拼题A",
        url:"https://pintia.cn/problem-sets/2096403164988022784/exam/overview",
        locale:"中文",
        difficulty:"基础到课程综合",
        bestFor:"课程同步、C 语言基础、教师题集",
        recommend:"主平台",
        note:"使用你的课程题集；未登录时会跳转平台登录页。"
      },
      {
        id:"nowcoder",
        name:"牛客网 C 语言题库",
        url:"https://www.nowcoder.com/exam/oj",
        locale:"中文",
        difficulty:"基础",
        bestFor:"输入输出、语法、专项练习",
        recommend:"第4周加入",
        note:"适合补充 PTA 之外的语法题和输入输出训练。"
      },
      {
        id:"leetcode",
        name:"LeetCode 中国",
        url:"https://leetcode.cn/problemset/",
        locale:"中文",
        difficulty:"简单到困难",
        bestFor:"面试算法、数组、字符串、哈希",
        recommend:"第5-6周加入",
        note:"先只做简单题；遇到未学数据结构时跳过。"
      },
      {
        id:"luogu",
        name:"洛谷",
        url:"https://www.luogu.com.cn/problem/list",
        locale:"中文",
        difficulty:"基础到竞赛",
        bestFor:"算法、模拟、搜索、动态规划",
        recommend:"第7周后加入",
        note:"基础语法熟练后再进入，避免过早陷入竞赛难度。"
      },
      {
        id:"codeforces",
        name:"Codeforces",
        url:"https://codeforces.com/problemset",
        locale:"英文",
        difficulty:"比赛体系",
        bestFor:"英文读题、Rating、限时算法",
        recommend:"第7周少量加入",
        note:"只从 800-1000 难度开始，不追求初期 Rating。"
      },
      {
        id:"hackerrank",
        name:"HackerRank C",
        url:"https://www.hackerrank.com/domains/c",
        locale:"英文",
        difficulty:"基础",
        bestFor:"结构化 C 练习、函数、字符串",
        recommend:"拓展",
        note:"适合查看英文题面和模块化知识点。"
      },
      {
        id:"exercism",
        name:"Exercism C",
        url:"https://exercism.org/tracks/c",
        locale:"英文",
        difficulty:"基础到进阶",
        bestFor:"导师反馈、代码质量、精修",
        recommend:"拓展",
        note:"更适合周末做一道并认真阅读反馈。"
      }
    ],
    successRules:[
      "先写输入输出和伪代码，再开始编码。",
      "15 分钟没有思路可以看题解，但必须关闭题解后重写。",
      "每题至少测试正常、边界和异常三类输入。",
      "错误不能只记“粗心”，要记录具体类型：越界、类型、初始化、条件、循环边界或语法。",
      "周末回看本周错题，不新增超量题目。"
    ]
  },
  habits:[
    "每天先完成任务再打卡，不用“打开网页”代替真实练习。",
    "词汇与编程分开计时，避免背词时间被编程题悄悄占用。",
    "每周保存一次学习数据备份，防止浏览器清理后丢失进度。",
    "若连续三天未完成，优先暂停新词一天，只清理复习积压。",
    "达到 30 天连续打卡后，再提高编程题难度而不是增加平台数量。"
  ]
};
})();
