import json
import re
from pathlib import Path

from pypdf import PdfReader


PDF_PATH = Path(r"C:\Users\DYH\Desktop\textbook\雅思词汇真经 (刘洪波) (z-library.sk, 1lib.sk, z-lib.sk).pdf")
OUTPUT_PATH = Path(__file__).with_name("data-ielts.js")

CHAPTERS = [
    (1, "自然地理", 1),
    (2, "植物研究", 21),
    (3, "动物保护", 31),
    (4, "太空探索", 45),
    (5, "学校教育", 53),
    (6, "科技发明", 85),
    (7, "文化历史", 95),
    (8, "语言演化", 103),
    (9, "娱乐运动", 109),
    (10, "物品材料", 123),
    (11, "时尚潮流", 135),
    (12, "饮食健康", 145),
    (13, "建筑场所", 159),
    (14, "交通旅行", 171),
    (15, "国家政府", 183),
    (16, "社会经济", 197),
    (17, "法律法规", 213),
    (18, "沙场争锋", 223),
    (19, "社会角色", 241),
    (20, "行为动作", 253),
    (21, "身心健康", 275),
    (22, "时间日期", 307),
]


def first_unique(words):
    seen = set()
    output = []
    for word, page in words:
        key = word.lower()
        if key in seen:
            continue
        seen.add(key)
        output.append((word, page))
    return output


def extract_chapter(reader, number, title, printed_start, printed_end):
    pdf_start = printed_start + 11
    pdf_end = printed_end + 10
    words = []
    for page_number in range(pdf_start, min(pdf_end, len(reader.pages)) + 1):
        text = reader.pages[page_number - 1].extract_text() or ""
        candidates = re.findall(r"(?m)^\s*([A-Za-z][A-Za-z-]{2,})\s*/", text)
        for word in candidates:
            if word.lower() in {"chapter", "ielts"}:
                continue
            words.append((word, page_number))
    words = first_unique(words)
    records = []
    used_ids = set()
    for index, (word, page_number) in enumerate(words, 1):
        base_id = "c%02d-%s" % (number, re.sub(r"[^a-z0-9]+", "-", word.lower()).strip("-"))
        word_id = base_id
        suffix = 2
        while word_id in used_ids:
            word_id = f"{base_id}-{suffix}"
            suffix += 1
        used_ids.add(word_id)
        records.append({
            "id": word_id,
            "word": word,
            "page": page_number,
            "printedPage": page_number - 11,
            "order": index,
        })
    return records


def main():
    reader = PdfReader(str(PDF_PATH))
    chapters = []
    for index, (number, title, printed_start) in enumerate(CHAPTERS):
        printed_end = CHAPTERS[index + 1][2] - 1 if index + 1 < len(CHAPTERS) else 311
        words = extract_chapter(reader, number, title, printed_start, printed_end)
        chapters.append({
            "id": f"chapter-{number:02d}",
            "number": number,
            "title": title,
            "printedPageStart": printed_start,
            "printedPageEnd": printed_end,
            "words": words,
        })
    payload = {
        "book": "雅思词汇真经",
        "author": "刘洪波",
        "startChapter": 6,
        "extractedFromSearchablePdf": True,
        "chapters": chapters,
    }
    OUTPUT_PATH.write_text(
        "window.SCAI_IELTS_WORDS = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print("WROTE", OUTPUT_PATH)
    for chapter in chapters:
        print(chapter["number"], chapter["title"], len(chapter["words"]))
    print("TOTAL", sum(len(chapter["words"]) for chapter in chapters))


if __name__ == "__main__":
    main()
