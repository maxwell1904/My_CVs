"""Render the study source into a searchable Vietnamese PDF with bookmarks."""
from pathlib import Path
import html
import re
import textwrap
import sys
SPRINT = "--sprint" in sys.argv
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    Preformatted, KeepTogether, CondPageBreak,
)
from reportlab.platypus.tableofcontents import TableOfContents

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT.parent / ('output/pdf/Giao_an_Frontend_BeyondEdge_1_ngay_v2_Nguyen_Phuc_An.pdf' if SPRINT else 'output/pdf/Giao_an_Frontend_BeyondEdge_5_ngay_Nguyen_Phuc_An.pdf')
OUT.parent.mkdir(parents=True, exist_ok=True)
FONT = Path('/System/Library/Fonts/Supplemental')
if FONT.exists():
    files = ['Arial.ttf', 'Arial Bold.ttf', 'Arial Italic.ttf', 'Courier New.ttf']
else:
    FONT = Path('/usr/share/fonts/truetype/dejavu')
    files = ['DejaVuSans.ttf', 'DejaVuSans-Bold.ttf', 'DejaVuSans-Oblique.ttf', 'DejaVuSansMono.ttf']
for name, file in zip(['Body', 'Body-Bold', 'Body-Italic', 'Code'], files):
    pdfmetrics.registerFont(TTFont(name, str(FONT / file)))
pdfmetrics.registerFontFamily('Body', normal='Body', bold='Body-Bold', italic='Body-Italic', boldItalic='Body-Bold')
INK = colors.HexColor('#24352e')
ACCENT = colors.HexColor('#456651')
MUTED = colors.HexColor('#69766d')
PALE = colors.HexColor('#edf1e9')
styles = {
    'body': ParagraphStyle('BodyTextVN', fontName='Body', fontSize=10, leading=14.4, textColor=INK, spaceAfter=6, splitLongWords=True, allowWidows=0, allowOrphans=0),
    'chapter': ParagraphStyle('ChapterVN', fontName='Body-Bold', fontSize=21, leading=27, textColor=INK, spaceAfter=20, keepWithNext=True),
    'h3': ParagraphStyle('ConceptHeadingVN', fontName='Body-Bold', fontSize=10.5, leading=14, textColor=INK, spaceBefore=7, spaceAfter=4, keepWithNext=True),
    'h2': ParagraphStyle('SubheadingVN', fontName='Body-Bold', fontSize=12, leading=16.5, textColor=ACCENT, spaceBefore=8, spaceAfter=6, keepWithNext=True),
    'bullet': ParagraphStyle('BulletVN', fontName='Body', fontSize=10, leading=14.4, textColor=INK, leftIndent=12, firstLineIndent=-9, spaceAfter=4),
    'cell': ParagraphStyle('CellVN', fontName='Body', fontSize=9.1, leading=12.6, textColor=INK, spaceAfter=0),
    'code': ParagraphStyle('CodeVN', fontName='Code', fontSize=8.2, leading=11.7, textColor=INK, backColor=PALE, borderPadding=9, spaceBefore=6, spaceAfter=12),
    'cover': ParagraphStyle('CoverVN', fontName='Body-Bold', fontSize=36, leading=43, textColor=INK, spaceAfter=24),
    'subtitle': ParagraphStyle('SubtitleVN', fontName='Body', fontSize=15, leading=23, textColor=ACCENT, spaceAfter=16),
}

def inline(text):
    text = html.escape(text)
    text = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)
    text = re.sub(r'`([^`]+)`', r'<font name="Code">\1</font>', text)
    text = re.sub(r'(https?://[^\s<>]+)', r'<link href="\1" color="#456651">\1</link>', text)
    return text

class Book(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if isinstance(flowable, Paragraph) and flowable.style.name == 'ChapterVN' and re.match(r'^\d{2} /', flowable.getPlainText()):
            title = flowable.getPlainText()
            key = f'chapter-{title.split(" /")[0]}'
            self.canv.bookmarkPage(key)
            self.canv.addOutlineEntry(title, key, level=0)
            self.notify('TOCEntry', (0, title, self.page, key))

def furniture(canvas, doc):
    canvas.saveState()
    w, h = doc.pagesize
    canvas.setFillColor(MUTED)
    canvas.setFont('Body', 8)
    if doc.page > 1:
        canvas.drawString(20*mm, h - 14*mm, 'FRONTEND FRESHER / BEYONDEDGE')
        canvas.drawRightString(w - 20*mm, h - 14*mm, 'Nguyễn Phúc An · 15/11/2026' if SPRINT else 'Nguyễn Phúc An · 10/11/2026')
        canvas.setStrokeColor(colors.HexColor('#d6ddd2'))
        canvas.line(20*mm, h-17*mm, w-20*mm, h-17*mm)
    canvas.drawString(20*mm, 12*mm, 'Predict · Run · Trace · Explain · Transfer')
    canvas.drawRightString(w-20*mm, 12*mm, str(doc.page))
    canvas.restoreState()

story = []
story.append(Spacer(1, 30*mm))
story.append(Paragraph('GIÁO ÁN<br/>PHỎNG VẤN<br/>FRONTEND', styles['cover']))
story.append(Paragraph('ÔN CẤP TỐC MỘT NGÀY<br/>JavaScript · React · Redux · Next.js' if SPRINT else 'React · Redux · JavaScript · Next.js<br/>Ôn tập có thực nghiệm trong 4-5 ngày', styles['subtitle']))
story.append(Spacer(1, 10*mm))
for text in [
    'Nguyễn Phúc An',
    'Theo CV đã gửi BeyondEdge và JD Frontend Fresher',
    'Giải thích cơ chế bằng ví dụ chạy được, truy vấn sâu project và luyện nói Anh-Việt.',
    'C0-C6 · Lý thuyết nền · Ví dụ và phân tích · Vận dụng · Project/contribution · Mock Anh-Việt' if SPRINT else '37 chương · 58 câu hỏi có reasoning key · 2 mock interview · Lab React/Redux và Next.js độc lập',
    'Chuẩn bị 15/11/2026 · Interview offline 14:00 ngày 16/11/2026' if SPRINT else 'Bản chuẩn bị ngày 10/11/2026',
]:
    story.append(Paragraph(inline(text), styles['body']))
story.append(PageBreak())
story.append(Paragraph('Mục lục', styles['chapter']))
toc = TableOfContents()
toc.levelStyles = [ParagraphStyle('TOCEntryVN', fontName='Body', fontSize=10.1, leading=17, textColor=INK, spaceBefore=4)]
story.append(toc)

lines = (ROOT / ('docs/ONE_DAY.md' if SPRINT else 'docs/GIAO_AN.md')).read_text().splitlines()
i = 0
first_chapter = True
while i < len(lines):
    line = lines[i].strip()
    if not line:
        i += 1
        continue
    if line.startswith('# '):
        # Give the standalone Next lab a clean opening instead of splitting
        # its file-map table across the previous chapter's final page.
        story.append(PageBreak() if first_chapter or line.startswith('# 37 /') else CondPageBreak(110*mm))
        first_chapter = False
        story.append(Paragraph(inline(line[2:]), styles['chapter']))
        i += 1
    elif line.startswith('### '):
        story.append(CondPageBreak(35*mm))
        story.append(Paragraph(inline(line[4:]), styles['h3']))
        i += 1
    elif line.startswith('## '):
        story.append(Paragraph(inline(line[3:]), styles['h2']))
        i += 1
    elif line.startswith('```'):
        code = []
        i += 1
        while i < len(lines) and not lines[i].startswith('```'):
            raw = lines[i].rstrip()
            indent = len(raw) - len(raw.lstrip())
            wrapped = textwrap.wrap(raw, width=86, subsequent_indent=' ' * min(indent+2, 12), replace_whitespace=False, drop_whitespace=False) or ['']
            code.extend(wrapped)
            i += 1
        block = Preformatted('\n'.join(code), styles['code'])
        if SPRINT and story and isinstance(story[-1], Paragraph) and story[-1].style.name in ('SubheadingVN', 'ConceptHeadingVN'):
            heading = story.pop()
            story.append(KeepTogether([heading, block]))
        else:
            story.append(KeepTogether([block]) if SPRINT else block)
        i += 1
    elif line.startswith('|'):
        rows = []
        while i < len(lines) and lines[i].strip().startswith('|'):
            values = [value.strip() for value in lines[i].strip().strip('|').split('|')]
            if not all(re.fullmatch(r'[:\- ]+', value or '-') for value in values):
                rows.append([Paragraph(inline(value), styles['cell']) for value in values])
            i += 1
        n = len(rows[0])
        width = 170*mm
        ratios = {2:[.32,.68], 3:[.21,.31,.48],4:[.13,.34,.20,.33]}.get(n, [1/n]*n)
        table = Table(rows, colWidths=[width*r for r in ratios], repeatRows=1, hAlign='LEFT')
        table.setStyle(TableStyle([
            ('BACKGROUND',(0,0),(-1,0),PALE),
            ('LINEBELOW',(0,0),(-1,0),.7,ACCENT),
            ('LINEBELOW',(0,1),(-1,-1),.25,colors.HexColor('#d7ded3')),
            ('VALIGN',(0,0),(-1,-1),'TOP'),
            ('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),7),
            ('TOPPADDING',(0,0),(-1,-1),7),('BOTTOMPADDING',(0,0),(-1,-1),7),
        ]))
        story.extend([table, Spacer(1,10)])
    elif line.startswith('- ') or re.match(r'^\d+\. ', line):
        text = '• ' + line[2:] if line.startswith('- ') else line
        story.append(Paragraph(inline(text), styles['bullet']))
        i += 1
    else:
        paragraph = [line]
        i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r'^(#|```|\||- |\d+\. )', lines[i].strip()):
            paragraph.append(lines[i].strip())
            i += 1
        story.append(Paragraph(inline(' '.join(paragraph)), styles['body']))

book = Book(str(OUT), pagesize=(210*mm,297*mm), leftMargin=20*mm, rightMargin=20*mm, topMargin=23*mm, bottomMargin=19*mm, title='Giáo án phỏng vấn Frontend BeyondEdge - Nguyễn Phúc An', author='Nguyễn Phúc An / Interview preparation', allowSplitting=True)
book.multiBuild(story, onFirstPage=furniture, onLaterPages=furniture)
print(OUT)
