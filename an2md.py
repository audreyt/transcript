#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import sys
import re
from lxml import etree
from markdownify import markdownify as md

# 對齊原版的英數偵測
EN_REGEX = re.compile(r'^[a-zA-Z0-9$@$!%*?&#^\-_. +]+$')

def check_en(s: str) -> bool:
    return EN_REGEX.match(s or "") is not None

def element_children(el):
    """只取元素型態的小孩（略過文字節點），維持與 libxmljs.child() 類似的語意。"""
    return [c for c in el if isinstance(c.tag, str)]

def tostring(el) -> str:
    """把元素含子樹序列化成文字（給 HTML->MD 轉換用）。"""
    if el is None:
        return ""
    return etree.tostring(el, encoding="unicode")

def an2md(xml_root: etree._Element, out_path: str) -> None:
    # namespace-agnostic 查找，對齊 //debateSection 與 //heading 的語意
    debate_matches = xml_root.xpath('//*[local-name()="debateSection"]')
    if not debate_matches:
        raise ValueError("找不到 <debateSection>")
    debate = debate_matches[0]

    heading_el_list = debate.xpath('.//*[local-name()="heading"]')
    heading_text = (heading_el_list[0].text or "").strip() if heading_el_list else ""
    colon = ":" if check_en(heading_text) else "："

    md_out = f"# {heading_text}\n\n"

    # 逐一處理 debateSection 的直屬子元素
    for child in element_children(debate):
        tag = etree.QName(child).localname
        if tag == "speech":
            # 取發言者
            speaker = (child.get("by") or "").replace("#", "")
            # 處理所有 p 元素，對齊原程式但支援多段落
            kids = element_children(child)
            if kids:
                # 如果有子元素，處理所有 p 元素
                p_elements = [k for k in kids if etree.QName(k).localname == "p"]
                if p_elements:
                    content_parts = []
                    for p_el in p_elements:
                        content_html = tostring(p_el)
                        content_md = md(content_html).strip()
                        # 移除連結前後的不必要換行
                        content_md = re.sub(r'\n+(\[.*?\]\(.*?\))', r' \1', content_md)
                        content_md = re.sub(r'(\[.*?\]\(.*?\))\n+', r'\1 ', content_md)
                        # 移除斜體文字前後的不必要換行
                        content_md = re.sub(r'\n+(\*.*?\*)', r' \1', content_md)
                        content_md = re.sub(r'(\*.*?\*)\n+', r'\1 ', content_md)
                        if content_md:
                            content_parts.append(content_md)
                    content_md = "\n\n".join(content_parts)
                else:
                    # 如果沒有 p 元素，使用原邏輯
                    content_el = kids[1] if len(kids) > 1 else kids[0]
                    content_html = tostring(content_el)
                    content_md = md(content_html).strip()
                    # 移除連結前後的不必要換行
                    content_md = re.sub(r'\n+(\[.*?\]\(.*?\))', r' \1', content_md)
                    content_md = re.sub(r'(\[.*?\]\(.*?\))\n+', r'\1 ', content_md)
                    # 移除斜體文字前後的不必要換行
                    content_md = re.sub(r'\n+(\*.*?\*)', r' \1', content_md)
                    content_md = re.sub(r'(\*.*?\*)\n+', r'\1 ', content_md)
            else:
                # 如果沒有子元素，使用文字內容
                content_md = md(child.text or "").strip()
                # 移除連結前後的不必要換行
                content_md = re.sub(r'\n+(\[.*?\]\(.*?\))', r' \1', content_md)
                content_md = re.sub(r'(\[.*?\]\(.*?\))\n+', r'\1 ', content_md)
                # 移除斜體文字前後的不必要換行
                content_md = re.sub(r'\n+(\*.*?\*)', r' \1', content_md)
                content_md = re.sub(r'(\*.*?\*)\n+', r'\1 ', content_md)
            md_out += f"### {speaker}{colon}\n{content_md}\n\n"

        elif tag == "narrative":
            kids = element_children(child)
            chosen = kids[1] if len(kids) > 1 else (kids[0] if kids else None)
            text_html = tostring(chosen) if chosen is not None else (child.text or "")
            # 對齊原始碼：narrative 的 MD 會把底線移除
            text_md = md(text_html).replace("_", "").strip()
            md_out += f"> {text_md}\n\n"

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(md_out)

def main():
    if len(sys.argv) < 3:
        print(f"用法：{sys.argv[0]} input.xml output.md")
        sys.exit(1)

    in_path = sys.argv[1]
    out_path = sys.argv[2]

    # 對齊原始 Node 版本：將 & 統一替換為 &amp; 再解析
    #（若你的 XML 是有效的，可改用 recover 解析器、移除此替換）
    with open(in_path, "r", encoding="utf-8") as f:
        xml_text = f.read()
    xml_text = xml_text.replace("&", "&amp;")

    # 解析 XML（若要更寬鬆可用 XMLParser(recover=True)）
    # 將 Unicode 字串轉為 bytes 以支援 encoding declaration
    root = etree.fromstring(xml_text.encode('utf-8'))

    an2md(root, out_path)

if __name__ == "__main__":
    main()
