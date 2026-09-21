from pathlib import Path

from pypdf import PdfReader


FILES = [
    Path(r"C:\Users\DYH\Desktop\textbook\大学数学 微积分 上 (上海交通大学数学系微积分课程组) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\textbook\大学数学 微积分 下 (上海交通大学数学系微积分课程组) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\textbook\C++程序设计语言.第1～3部分.原书第4版 (Bjarne Stroustrup) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\textbook\汇编语言程序设计 (汇编语言程序设计) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\textbook\大学计算机基础 (大学计算机基础) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\textbook\大学物理学 热学、光学、量子物理 (张三慧) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\textbook\大学物理学（第4版）电磁学、光学、量子物理 (张三慧) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\textbook\大学物理学（第4版）力学、热学 (张三慧) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\textbook\大学物理学（第4版）学习辅导与习题解答 (张三慧) (z-library.sk, 1lib.sk, z-lib.sk).pdf"),
    Path(r"C:\Users\DYH\Desktop\课件\Mathematical_Modeling_1_Syllabus_Section 1_Syllabus_Kunpeng Wang.pdf"),
    Path(r"C:\Users\DYH\Desktop\课件\MATH0280 Linear Algebra F26 sec 1 Zheng Yang Syllabus.pdf"),
    Path(r"C:\Users\DYH\Desktop\课件\LA1 F26 s1 Week 1.pdf"),
]


def flatten_outline(items, depth=0):
    out = []
    for item in items:
        if isinstance(item, list):
            out.extend(flatten_outline(item, depth + 1))
        else:
            out.append(("  " * depth) + str(item.title))
    return out


def main():
    lines = []
    for file in FILES:
        reader = PdfReader(str(file))
        lines.append("\n" + "=" * 100)
        lines.append(file.name)
        lines.append(f"pages= {len(reader.pages)}")
        metadata = reader.metadata or {}
        lines.append(f"metadata= {dict(metadata)}")
        try:
            outline = flatten_outline(reader.outline)
        except Exception as exc:
            outline = []
            lines.append(f"outline_error= {exc}")
        lines.append(f"outline_entries= {len(outline)}")
        lines.extend(outline)
        if not outline or file.name.endswith("Week 1.pdf") or "Syllabus" in file.name:
            limit = min(len(reader.pages), 18)
            for index in range(limit):
                text = reader.pages[index].extract_text() or ""
                text = " ".join(text.split())
                lines.append(f"[p{index + 1}] {text[:1200]}")
    output = Path(__file__).with_name("textbook-outlines.txt")
    output.write_text("\n".join(lines), encoding="utf-8")
    print(output)


if __name__ == "__main__":
    main()
