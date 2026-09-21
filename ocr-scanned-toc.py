from pathlib import Path

import numpy as np
import pypdfium2 as pdfium
from rapidocr_onnxruntime import RapidOCR


FILES = [
    (Path(r"C:\Users\DYH\Desktop\textbook\大学计算机基础 (大学计算机基础) (z-library.sk, 1lib.sk, z-lib.sk).pdf"), range(0, 7)),
]


def main():
    engine = RapidOCR()
    lines = []
    for file, pages in FILES:
        doc = pdfium.PdfDocument(str(file))
        lines.append("\n" + "=" * 100)
        lines.append(file.name)
        lines.append(f"pages= {len(doc)}")
        for index in pages:
            if index >= len(doc):
                continue
            page = doc[index]
            image = page.render(scale=1.5).to_pil()
            result, _ = engine(np.asarray(image))
            lines.append(f"\n[p{index + 1}]")
            if result:
                for item in result:
                    lines.append(item[1])
        doc.close()
    output = Path(__file__).with_name("scanned-toc-computer.txt")
    output.write_text("\n".join(lines), encoding="utf-8")
    print(output)


if __name__ == "__main__":
    main()
