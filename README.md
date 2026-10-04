# SCAI ME1 Study Hub · 本地完整版

川大奥克兰学院机械 1 班大一全教材学习网站。本项目仅供个人在本机使用，不包含公开部署、国内分享版或线上托管配置。第五版把官方课程大纲设为周计划主线，新增升学竞赛、每日训练、雅思词汇遗忘曲线、剑桥雅思精听和 C 语言训练。

## 版本历史

- v1.0.0：第一版，官方英文教材 + 16 周计划 + PDF 资料库
- v2.0.0：第二版，加入机械设计制造及其自动化六本国内教材的双线映射、学年计划、CS C/C++ 自学子应用
- v2.1.0：第三版，加入上海交大微积分、张三慧物理、C++、汇编、大学计算机基础逐章精读；接入数学建模、线性代数、物理官方大纲与周次；新增独立计算机编程课程
- v2.2.0：第四版，把课程大纲设为周计划主线；加入 CHEM0960 官方进度；课件上传后自动生成知识点、易错点、自测问题和思维导图
- v2.3.0：第五版，改为本机个人版；新增升学竞赛作战台、每日训练、雅思词汇动态分批、C10-C21 精听、C 语言 56 天训练和打卡热力图

## 本机运行

- 双击桌面快捷方式 `SCAI本地学习中心`，脚本会复用已运行的服务，或自动寻找 `8765-8795` 中的空闲端口。
- 也可以在 `freshman-hub` 中双击 `启动学习网站.cmd`。
- 默认地址：`http://127.0.0.1:8765/landing.html`；端口被占用时以脚本实际打开的地址为准。
- 如果 Python 不可用，双击桌面的 `SCAI离线直接打开.url`，无需本地服务即可打开首页。
- 本地服务停止后，重新双击主快捷方式即可恢复，不需要重新安装或部署。

`landing.html` 是新的首屏入口，显示核心课程、今日打卡和竞赛快捷入口；完整学习中心仍位于 `index.html`。启动脚本只在本机打开 `127.0.0.1`，不会上传任何文件，也不会创建公网地址。学习进度、词卡、打卡和编程记录全部保存在当前浏览器。

## 已整合教材

- Essential Calculus 2e（Stewart）+ 同济《高等数学（上册）》第八版
- Linear Algebra: A Modern Introduction 4e（Poole）
- Principles of Physics 12e（Walker）
- Chemistry: Atoms First 4e（Burdge）
- Engineering Mechanics Statics 9e + Dynamics 9e（Meriam），合并版作备用对照
- 双线对照模块：机械设计制造及其自动化国内教材 ↔ 英文原版教材
  - 同济《高等数学》↔ Stewart《Essential Calculus 2e》
  - 同济《线性代数》↔ Poole《Linear Algebra》
  - 浙大《概率论与数理统计》↔ MIT 18.05 / Blitzstein
  - 马文蔚《物理学》↔ Walker《Principles of Physics》
  - 谭浩强《C程序设计》↔ Gaddis《Starting Out with C++》
  - 子应用 `cs-app/`：嵌入 CS 文件夹中已完成的 SCAI C++ 自学导航
- 国内教材逐章精读：9 本教材/分册、113 个章节摘要、章节级概念/易错点/考法
  - 上海交大《大学数学·微积分》上、下册
  - Stroustrup《C++程序设计语言》第1-3部分
  - 《汇编语言程序设计》
  - 姚琳《大学计算机基础》
  - 张三慧《大学物理学》力学热学分册、电磁光学量子分册、热学光学量子分册、学习辅导
- 官方进度：Mathematical Modeling 1、MATH0280 Linear Algebra、CHEM0960、大学物理 2026 Fall
- 升学竞赛作战台：`growth.html`，含竞赛筛选、月份时间轴、官方报名入口、个人备战清单、18周课程与竞赛双轨计划
- 每日训练台：`daily.html`，含雅思词汇遗忘曲线、剑桥雅思 C10-C21 精听、C 语言 56 天训练、计时器、打卡热力图与本地导入导出

## 功能

- 总览页：10 个课程模块、本周任务、Quiz 完成度、视频数量
- 16 周计划：周次切换、每日时间槽、真实课表 CSV/JSON 导入
- 大一学年双线总节奏：国内课程与 SCAI 英文课程按“相同只学一遍、差异单独补”排块
- 教材地图：6 本教材的章节、学期归属与课程映射
- 双语对照：六个科目的中英教材精细分块，含“✓ 相同 / 中 / EN”三类差异与 C/C++ 语法对照
- 课程页：知识点、易错点、高频考点、国内教材精读入口、匹配视频、PDF 讲义、在线题库
- 计算机编程课程：C++、汇编、计算机基础共 9 个学习模块
- PDF 资料库：70 份每课 PDF，含随堂练习、答案解析与在线题库链接
- 全局搜索：`Ctrl+K` 或顶栏搜索按钮，可检索课程、知识点、视频、教材和每周计划
- 学习进度：每课可标记“已学 / 待复习 / 未开始”，首页显示进度条与今日复习队列
- 学习笔记：每课内嵌笔记框，自动保存在本机浏览器
- 数据备份：设置中可导出/导入学习数据，本地文件不包含 API Key
- 离线支持：通过本地服务访问时自动注册 PWA，核心页面与 PDF 讲义可离线打开
- 课件上传：支持 `.txt/.md/.pdf/.docx/.pptx`；上传后自动生成课程关键知识点、易错点、自测问题和思维导图，在线 AI 失败时自动使用本地分析
- AI 助手：默认 DeepSeek，可换 Base URL 与模型；未联网或请求失败时自动使用离线模式
- 每日训练：雅思词汇按完整 Chapter 动态分成约 30-60 词的连续批次，不在一个批次内混入下一章；复习节点为第 1、2、4、7、15、30 天
- PTA PAT 路线：223 道课程题拆分为 56 天，每天显示具体题号、标题、分值、完成勾选和复盘流程

## PDF 资料

每份 PDF 位于 `pdfs/<课程>/<课程ID>.pdf`，包含：

- 核心知识点、易错点、高频考点
- 随堂练习与参考答案、解析
- 建议练习任务与在线题库链接

网站导航中的“PDF 资料库”可一键打开全部讲义，课程页的每节课也提供直接打开入口。

## AI 配置

API Key 存放在 `config.local.js`，该文件已被 `.gitignore` 忽略，不会进入版本库。设置面板也可修改 Base URL、模型和 Key，修改后保存在浏览器 `localStorage`。

## 重新生成 PDF 讲义

1. `node export-data.cjs`
2. `node build-lesson-extra.cjs`
3. `node generate-lesson-pdfs-html.cjs`
4. `node generate-mindmaps-preview.cjs`

输出到 `pdfs/`，并自动更新 `pdfs/index.json`。新版讲义包含本课思维导图、学习目标、课本概念精要、课本原文要点、典型例题、本课在线课件、视频、随堂练习与学习自查清单。每课思维导图总览位于 `mindmaps/`，课程页可直接打开对应页。

## 本地数据

浏览器本地存储键：`scai_llm_config`、`scai_uploaded_courseware`、`scai_courseware_insights`、`scai_quiz_scores`、`scai_progress`、`scai_notes`、`scai_dual_group`、`scai_plan_week`、`scai_timetable`、`scai_daily_profile`、`scai_word_records`、`scai_daily_tasks`、`scai_programming_records`、`scai_daily_checkins`。设置面板中的“清除本地数据”可一键清空。

## 课表导入格式

CSV 示例：

```csv
星期,节次,开始时间,结束时间,课程,教室
周一,1,08:30,10:05,高等数学,A101
```

JSON 示例：

```json
[{"day":"周一","period":"1","start":"08:30","end":"10:05","course":"高等数学","room":"A101"}]
```
