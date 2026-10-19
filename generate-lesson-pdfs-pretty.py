import json
import os
import re
import sys
from xml.sax.saxutils import escape as xml_escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import cm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

HERE = os.path.dirname(os.path.abspath(__file__))
BUILD = os.path.join(HERE, "build", "courses.json")
OUT_ROOT = os.path.join(HERE, "pdfs")

pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))

INK = colors.HexColor("#17211C")
MUTED = colors.HexColor("#5F6C66")
LINE = colors.HexColor("#D8DED8")
TEAL = colors.HexColor("#2E6E5E")
TEAL_SOFT = colors.HexColor("#E1EEE9")
ACCENT = colors.HexColor("#C4522E")
ACCENT_SOFT = colors.HexColor("#F6E5DE")
GOLD = colors.HexColor("#A67C00")
GOLD_SOFT = colors.HexColor("#F4EBD4")
BLUE = colors.HexColor("#3B6F8F")
BLUE_SOFT = colors.HexColor("#E3EDF2")
DANGER = colors.HexColor("#B3402E")
DANGER_SOFT = colors.HexColor("#F7E2DD")
WHITE = colors.white


def style(name, **kw):
    base = dict(
        fontName="STSong-Light",
        fontSize=10,
        leading=15,
        textColor=INK,
        alignment=TA_LEFT,
        spaceAfter=4,
    )
    base.update(kw)
    return ParagraphStyle(name, **base)


S_TITLE = style("title", fontSize=20, leading=26)
S_EN = style("en", fontSize=9.5, leading=14, textColor=MUTED)
S_KICKER = style("kicker", fontSize=8.5, leading=12, textColor=ACCENT)
S_META = style("meta", fontSize=8, leading=12, textColor=MUTED)
S_H1 = style("h1", fontSize=13, leading=18, textColor=TEAL, spaceBefore=10, spaceAfter=6)
S_H1_WARN = style("h1w", fontSize=13, leading=18, textColor=DANGER, spaceBefore=10, spaceAfter=6)
S_H1_GOLD = style("h1g", fontSize=13, leading=18, textColor=GOLD, spaceBefore=10, spaceAfter=6)
S_H1_BLUE = style("h1b", fontSize=13, leading=18, textColor=BLUE, spaceBefore=10, spaceAfter=6)
S_BODY = style("body")
S_CARD = style("card", fontSize=9, leading=13.5, leftIndent=4, spaceAfter=2)
S_LINK = style("link", fontSize=8.8, leading=13, textColor=BLUE, spaceAfter=2)
S_SMALL = style("small", fontSize=8, leading=12, textColor=MUTED)
S_QUESTION = style("question", fontSize=10, leading=15, spaceBefore=6)
S_OPTION = style("option", fontSize=9, leading=13, leftIndent=16)
S_ANSWER = style("answer", fontSize=9, leading=13, textColor=ACCENT)


def clean(text):
    return re.sub(r"\s+", " ", str(text or "")).strip()


def esc(text):
    return xml_escape(clean(text))


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.7)
    canvas.line(1.4 * cm, 1.15 * cm, A4[0] - 1.4 * cm, 1.15 * cm)
    canvas.setFont("STSong-Light", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(1.4 * cm, 0.78 * cm, "SCAI ME · 大一全教材学习中心")
    canvas.drawRightString(A4[0] - 1.4 * cm, 0.78 * cm, "第 %d 页" % doc.page)
    canvas.restoreState()


def heading(title, color, bg):
    p = Paragraph("<font color='#FFFFFF'>%s</font>" % esc(title), style("h", fontSize=12, leading=17, textColor=WHITE, backColor=color, borderPadding=(4, 8, 4, 8), borderRadius=5))
    return p


def card_table(items, marker_color, marker, bg):
    if not items:
        return Spacer(1, 2)
    rows = []
    width = 8.7 * cm
    for i in range(0, len(items), 2):
        cells = []
        for j in range(2):
            idx = i + j
            if idx < len(items):
                cells.append(Paragraph(
                    "<font color='#%s'>%s</font>&nbsp; %s" % (marker_color, marker, esc(items[idx])),
                    S_CARD,
                ))
            else:
                cells.append(Paragraph("", S_CARD))
        rows.append(cells)
    t = Table(rows, colWidths=[width, width])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), bg),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def link_rows(items):
    rows = [[Paragraph("<b>%s</b><br/><font color='#5F6C66'>%s</font>" % (esc(it.get("title", "")), esc(it.get("note") or it.get("source") or "")), S_LINK),
             Paragraph(esc(it.get("source", "链接")), S_SMALL)] for it in items]
    t = Table(rows, colWidths=[13.2 * cm, 3.5 * cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), WHITE),
        ("BOX", (0, 0), (-1, -1), 0.6, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def concept_box(course, lesson):
    first = (lesson.get("videos") or [{}])[0]
    flow = "① 直觉视频　② 教材定义　③ 例题拆解　④ 独立做题　⑤ 错题复述"
    watch = "建议先看：" + (first.get("title", "") + " · " + first.get("source", "")) if first.get("title") else ""
    rows = [
        [Paragraph("<font color='#2E6E5E'><b>概念拆解 · 本课在回答</b></font>", S_H1),
         Paragraph(esc(lesson.get("focus", "")), S_BODY)],
        [Paragraph("<font color='#5F6C66'>%s</font>" % esc(flow), S_SMALL), ""],
        [Paragraph("<font color='#5F6C66'>%s</font>" % esc(watch), S_SMALL), ""],
    ]
    t = Table(rows, colWidths=[3.8 * cm, 13 * cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), TEAL_SOFT),
        ("BOX", (0, 0), (-1, -1), 1, TEAL),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return t


def build_lesson(course, lesson):
    out_dir = os.path.join(OUT_ROOT, course["id"])
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, lesson["id"] + ".pdf")

    doc = SimpleDocTemplate(
        out_path,
        pagesize=A4,
        leftMargin=1.4 * cm,
        rightMargin=1.4 * cm,
        topMargin=1.4 * cm,
        bottomMargin=1.5 * cm,
        title="%s · %s" % (course["name"], lesson["title"]),
        author="SCAI ME Study Hub",
    )
    story = []
    story.append(Paragraph("%s · %s" % (esc(course["code"]), esc(course["name"])), S_KICKER))
    story.append(Paragraph(esc(lesson["title"]), S_TITLE))
    story.append(Paragraph(esc(lesson["en"]), S_EN))
    story.append(Paragraph("%s · %s · %s" % (esc(lesson["chapters"]), esc(lesson["week"]), esc(course["textbook"])), S_META))
    story.append(Spacer(1, 6))
    story.append(concept_box(course, lesson))
    story.append(Spacer(1, 10))

    story.append(heading("核心知识点", TEAL, TEAL_SOFT))
    story.append(card_table(lesson["points"], "2E6E5E", "•", WHITE))
    story.append(Spacer(1, 10))

    story.append(heading("易错点", DANGER, DANGER_SOFT))
    story.append(card_table(lesson["pitfalls"], "B3402E", "!", DANGER_SOFT))
    story.append(Spacer(1, 10))

    story.append(heading("高频考点", GOLD, GOLD_SOFT))
    story.append(card_table(lesson["exams"], "A67C00", "★", GOLD_SOFT))
    story.append(Spacer(1, 10))

    story.append(heading("本课视频", BLUE, BLUE_SOFT))
    if lesson.get("videos"):
        story.append(link_rows(lesson["videos"]))
    else:
        story.append(Paragraph("暂无单独视频，请使用课程配套视频库。", S_SMALL))
    story.append(PageBreak())

    story.append(heading("随堂练习", TEAL, TEAL_SOFT))
    story.append(Paragraph("先独立完成，再翻到下一页核对答案。", S_SMALL))
    story.append(Spacer(1, 4))
    for i, q in enumerate(course["quiz"], 1):
        block = [Paragraph("%d. %s" % (i, esc(q["q"])), S_QUESTION)]
        for j, opt in enumerate(q["options"]):
            block.append(Paragraph("%s. %s" % (chr(65 + j), esc(opt)), S_OPTION))
        block.append(Spacer(1, 6))
        story.append(KeepTogether(block))
    story.append(PageBreak())

    story.append(heading("参考答案与解析", ACCENT, ACCENT_SOFT))
    for i, q in enumerate(course["quiz"], 1):
        story.append(Paragraph(
            "<font color='#C4522E'><b>%d. 答案 %s</b></font>　%s" % (i, chr(65 + q["answer"]), esc(q["explain"])),
            S_ANSWER,
        ))
        story.append(Spacer(1, 3))
    story.append(PageBreak())

    story.append(heading("课程配套视频库", BLUE, BLUE_SOFT))
    story.append(link_rows(course.get("extraVideos") or []))
    story.append(Spacer(1, 10))
    story.append(heading("建议练习与在线题库", TEAL, TEAL_SOFT))
    story.append(Paragraph(
        "教材任务：完成 %s 对应章节的课后 Review Exercises 与奇数题；每周再选 1 个 Problem Set 限时完成。" % esc(lesson["chapters"]),
        S_BODY,
    ))
    story.append(Spacer(1, 4))
    story.append(link_rows([*(course.get("online") or []), *(course.get("practice") or [])]))

    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
    return out_path


def main():
    with open(BUILD, "r", encoding="utf-8") as fh:
        courses = json.load(fh)
    files = []
    for course in courses:
        for lesson in course["lessons"]:
            out_path = build_lesson(course, lesson)
            files.append({
                "course": course["id"],
                "courseName": course["name"],
                "lesson": lesson["id"],
                "title": lesson["title"],
                "file": os.path.relpath(out_path, HERE).replace("\\", "/"),
            })
    with open(os.path.join(OUT_ROOT, "index.json"), "w", encoding="utf-8") as fh:
        json.dump(files, fh, ensure_ascii=False, indent=2)
    print("PRETTY PDF DONE lessons=%d" % len(files))


if __name__ == "__main__":
    sys.exit(main())
