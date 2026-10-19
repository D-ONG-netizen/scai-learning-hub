import json
import os
import re
import sys
from html import escape
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
)

HERE = os.path.dirname(os.path.abspath(__file__))
BUILD = os.path.join(HERE, "build", "courses.json")
OUT_ROOT = os.path.join(HERE, "pdfs")

pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))

ACCENT = colors.HexColor("#2E6E5E")
WARN = colors.HexColor("#B3402E")
GOLD = colors.HexColor("#A67C00")
INK = colors.HexColor("#17211C")
MUTED = colors.HexColor("#5F6C66")
LINE = colors.HexColor("#D8DED8")


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


S_TITLE = style("title", fontSize=19, leading=26, textColor=colors.HexColor("#17211C"))
S_EN = style("en", fontSize=9.5, leading=14, textColor=MUTED)
S_KICKER = style("kicker", fontSize=8.5, leading=12, textColor=ACCENT)
S_H1 = style("h1", fontSize=13, leading=18, textColor=ACCENT, spaceBefore=10, spaceAfter=6)
S_BODY = style("body")
S_BULLET = style("bullet", leftIndent=14, bulletIndent=2, spaceAfter=3)
S_LINK = style("link", leftIndent=14, textColor=colors.HexColor("#3B6F8F"), spaceAfter=3)
S_QUESTION = style("question", spaceBefore=8, spaceAfter=2)
S_OPTION = style("option", leftIndent=18, spaceAfter=2)
S_ANSWER = style("answer", leftIndent=14, textColor=WARN, spaceBefore=4, spaceAfter=4)
S_SMALL = style("small", fontSize=8, leading=12, textColor=MUTED)
S_FOOTER = style("footer", fontSize=8, leading=11, textColor=MUTED)


def clean(text):
    return re.sub(r"\s+", " ", str(text or "")).strip()


def esc(text):
    return xml_escape(clean(text))


def page_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.6)
    canvas.line(1.5 * cm, 1.15 * cm, A4[0] - 1.5 * cm, 1.15 * cm)
    canvas.setFont("STSong-Light", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(1.5 * cm, 0.75 * cm, "SCAI ME · 大一全教材学习中心")
    canvas.drawRightString(A4[0] - 1.5 * cm, 0.75 * cm, "第 %d 页" % doc.page)
    canvas.restoreState()


def add_header(story, course, lesson):
    story.append(Paragraph(esc(course["code"] + " · " + course["name"]), S_KICKER))
    story.append(Paragraph(esc(lesson["title"]), S_TITLE))
    story.append(Paragraph(esc(lesson["en"]), S_EN))
    story.append(Spacer(1, 4))
    story.append(Paragraph(
        "<font color='#5F6C66'>教材章节：%s　|　计划周次：%s</font>" % (esc(lesson["chapters"]), esc(lesson["week"])),
        S_SMALL,
    ))
    story.append(Spacer(1, 8))
    story.append(Paragraph(esc(lesson["focus"]), S_BODY))


def add_points(story, title, items, marker="•", color=INK):
    story.append(Paragraph(esc(title), S_H1))
    for item in items:
        story.append(Paragraph(
            "<font color='#%s'>%s</font> %s" % (color.hexval()[2:], marker, esc(item)),
            S_BULLET,
        ))


def add_quiz(story, quiz):
    story.append(PageBreak())
    story.append(Paragraph("随堂练习", S_H1))
    story.append(Paragraph(
        "独立完成后再翻到本讲义末尾核对答案。每课 5-7 题，覆盖本课核心计算与概念。",
        S_SMALL,
    ))
    for i, q in enumerate(quiz, 1):
        block = [
            Paragraph("%d. %s" % (i, esc(q["q"])), S_QUESTION),
        ]
        for j, opt in enumerate(q["options"]):
            block.append(Paragraph("%s. %s" % (chr(65 + j), esc(opt)), S_OPTION))
        block.append(Spacer(1, 4))
        story.append(KeepTogether(block))


def add_answers(story, quiz):
    story.append(PageBreak())
    story.append(Paragraph("参考答案与解析", S_H1))
    story.append(Paragraph("先订正，再把错题归入错题本：写出错误原因、正确方法、同类型题复练。", S_SMALL))
    for i, q in enumerate(quiz, 1):
        letter = chr(65 + q["answer"])
        story.append(Paragraph(
            "<font color='#B3402E'>%d. 答案：%s</font>　%s" % (i, letter, esc(q["explain"])),
            S_ANSWER,
        ))


def add_practice(story, course, lesson):
    story.append(PageBreak())
    story.append(Paragraph("建议练习与在线题库", S_H1))
    story.append(Paragraph(
        "教材任务：完成 %s 对应章节的课后 Review Exercises 与奇数题；中文版同步做同济对应章节课后题，优先补计算熟练度。" % esc(lesson["chapters"]),
        S_BODY,
    ))
    story.append(Paragraph(
        "进阶任务：每周从下方资源中选择 1 个 Problem Set 或 10 道题限时完成，错题按“概念 / 计算 / 读题”分类。",
        S_BODY,
    ))
    story.append(Spacer(1, 4))
    story.append(Paragraph("本课程在线练习与名校题库", S_H1))

    seen = set()
    links = list(course.get("online", [])) + list(course.get("practice", []))
    for link in links:
        url = clean(link.get("url", ""))
        title = clean(link.get("title", ""))
        note = clean(link.get("note", ""))
        if not url or url in seen:
            continue
        seen.add(url)
        label = (title + (" · " + note if note else ""))
        story.append(Paragraph(
            "<link href='%s'>%s</link><br/><font color='#5F6C66'>%s</font>" % (esc(url), esc(label), esc(url)),
            S_LINK,
        ))


def build_lesson(course, lesson):
    out_dir = os.path.join(OUT_ROOT, course["id"])
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, lesson["id"] + ".pdf")

    doc = SimpleDocTemplate(
        out_path,
        pagesize=A4,
        leftMargin=1.5 * cm,
        rightMargin=1.5 * cm,
        topMargin=1.4 * cm,
        bottomMargin=1.5 * cm,
        title="%s · %s" % (course["name"], lesson["title"]),
        author="SCAI ME Study Hub",
    )
    story = []
    add_header(story, course, lesson)
    add_points(story, "一、核心知识点", lesson["points"])
    add_points(story, "二、易错点", lesson["pitfalls"], marker="!", color=WARN)
    add_points(story, "三、高频考点", lesson["exams"], marker="★", color=GOLD)
    add_quiz(story, course["quiz"])
    add_answers(story, course["quiz"])
    add_practice(story, course, lesson)
    doc.build(story, onFirstPage=page_footer, onLaterPages=page_footer)
    return out_path


def main():
    with open(BUILD, "r", encoding="utf-8") as fh:
        courses = json.load(fh)

    files = []
    total_lessons = 0
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
            total_lessons += 1

    index_path = os.path.join(OUT_ROOT, "index.json")
    with open(index_path, "w", encoding="utf-8") as fh:
        json.dump(files, fh, ensure_ascii=False, indent=2)

    print("PDF DONE lessons=%d files=%d root=%s" % (total_lessons, len(files), OUT_ROOT))


if __name__ == "__main__":
    sys.exit(main())
