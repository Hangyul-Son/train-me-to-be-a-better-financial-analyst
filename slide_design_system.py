"""
Shared Design System — identical helpers, colors, fonts, card styling.
All architecture slides import from here to guarantee visual uniformity.
Copied verbatim from the ServiceNow PPT format.
"""

from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# ── Color Palette (Professional Dark Theme) ──────────────────────────────────
# These are the EXACT same values from the ServiceNow PPT.
DARK_BG = RGBColor(0x0F, 0x17, 0x2A)        # Deep navy background
SECTION_BG = RGBColor(0x1A, 0x25, 0x3C)      # Section header background
CARD_BG = RGBColor(0xFF, 0xFF, 0xFF)          # White cards
CARD_BORDER_BLUE = RGBColor(0x00, 0x7B, 0xC7) # Blue border
CARD_BORDER_GREEN = RGBColor(0x00, 0xA3, 0x6C) # Green border
CARD_BORDER_ORANGE = RGBColor(0xE8, 0x6C, 0x00) # Orange border
CARD_BORDER_PURPLE = RGBColor(0x7B, 0x2D, 0x8E) # Purple border
CARD_BORDER_TEAL = RGBColor(0x00, 0x89, 0x97)   # Teal border
ACCENT_GREEN = RGBColor(0x81, 0xB6, 0x22)    # Now Platform green
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
LIGHT_GRAY = RGBColor(0x8A, 0x93, 0xA6)
DARK_TEXT = RGBColor(0x1A, 0x1A, 0x2E)
SUBTITLE_TEXT = RGBColor(0x5A, 0x63, 0x78)
BADGE_BG = RGBColor(0xE8, 0xF5, 0xE9)
BADGE_TEXT = RGBColor(0x2E, 0x7D, 0x32)
HIGHLIGHT_YELLOW = RGBColor(0xFF, 0xF8, 0xE1) # Warm highlight for cards
SECTION_LABEL_BG = RGBColor(0x1B, 0x2A, 0x4A) # Dark blue section labels

# ── Stickiness Colors (additional — used by EDA slides) ─────────────────────
STICKY_HIGH = RGBColor(0xDC, 0x3C, 0x3C)     # Red = high stickiness
STICKY_MED = RGBColor(0xF0, 0xA8, 0x20)      # Yellow = medium stickiness
STICKY_LOW = RGBColor(0xB8, 0xC0, 0xD0)      # Light = low stickiness

BADGE_HIGH_BG = RGBColor(0xFF, 0xEB, 0xEE)
BADGE_HIGH_TX = RGBColor(0xC6, 0x28, 0x28)
BADGE_MED_BG = RGBColor(0xFF, 0xF8, 0xE1)
BADGE_MED_TX = RGBColor(0xE6, 0x8A, 0x00)
BADGE_LOW_BG = RGBColor(0xF0, 0xF0, 0xF0)
BADGE_LOW_TX = RGBColor(0x75, 0x75, 0x75)


# ── Helper Functions ─────────────────────────────────────────────────────────
# EXACT same signatures and logic as ServiceNow PPT.

def add_rounded_rect(slide, left, top, width, height, fill_color, border_color=None, border_width=Pt(0)):
    shape = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    if border_color:
        shape.line.color.rgb = border_color
        shape.line.width = border_width
    else:
        shape.line.fill.background()
    # Adjust corner rounding
    shape.adjustments[0] = 0.05
    return shape


def add_text_box(slide, left, top, width, height, text, font_size=10,
                 color=DARK_TEXT, bold=False, alignment=PP_ALIGN.LEFT, font_name='Segoe UI'):
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(font_size)
    p.font.color.rgb = color
    p.font.bold = bold
    p.font.name = font_name
    p.alignment = alignment
    return txBox


def add_circle_number(slide, left, top, size, number, bg_color, text_color=WHITE):
    shape = slide.shapes.add_shape(
        MSO_SHAPE.OVAL, left, top, size, size
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = bg_color
    shape.line.fill.background()
    tf = shape.text_frame
    tf.word_wrap = False
    p = tf.paragraphs[0]
    p.text = str(number)
    p.font.size = Pt(int(size / Emu(Pt(1).emu) * 0.38))
    p.font.color.rgb = text_color
    p.font.bold = True
    p.font.name = 'Segoe UI'
    p.alignment = PP_ALIGN.CENTER
    tf.paragraphs[0].space_before = Pt(0)
    tf.paragraphs[0].space_after = Pt(0)
    shape.text_frame.margin_top = Emu(0)
    shape.text_frame.margin_bottom = Emu(0)
    return shape


def add_section_header(slide, left, top, width, height, text, sub_text=""):
    # Background bar
    bar = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height
    )
    bar.fill.solid()
    bar.fill.fore_color.rgb = SECTION_LABEL_BG
    bar.line.fill.background()
    bar.adjustments[0] = 0.15

    # Section title
    add_text_box(slide, left + Inches(0.15), top + Inches(0.04), width - Inches(0.3), height,
                 text, font_size=11, color=WHITE, bold=True)

    if sub_text:
        add_text_box(slide, left + width - Inches(2.2), top + Inches(0.04),
                     Inches(2.1), height, sub_text, font_size=8,
                     color=LIGHT_GRAY, bold=False, alignment=PP_ALIGN.RIGHT)
    return bar


def add_process_card(slide, left, top, width, height, number, title, description,
                     border_color=CARD_BORDER_BLUE, number_color=None, badge_text=None,
                     badge_bg_color=None, badge_tx_color=None):
    if number_color is None:
        number_color = border_color

    # Card background with border
    card = add_rounded_rect(slide, left, top, width, height,
                           CARD_BG, border_color, Pt(2.5))

    # Number circle
    circle_size = Inches(0.32)
    add_circle_number(slide, left + Inches(0.12), top + Inches(0.12),
                      circle_size, number, number_color)

    # Title
    add_text_box(slide, left + Inches(0.5), top + Inches(0.08),
                 width - Inches(0.6), Inches(0.3),
                 title, font_size=11, color=DARK_TEXT, bold=True)

    # Badge if present
    if badge_text:
        bg_c = badge_bg_color if badge_bg_color else BADGE_BG
        tx_c = badge_tx_color if badge_tx_color else BADGE_TEXT
        badge_left = left + width - Inches(1.0)
        badge = add_rounded_rect(slide, badge_left, top + Inches(0.1),
                                Inches(0.85), Inches(0.22), bg_c, tx_c, Pt(1))
        tf = badge.text_frame
        tf.word_wrap = False
        p = tf.paragraphs[0]
        p.text = badge_text
        p.font.size = Pt(7)
        p.font.color.rgb = tx_c
        p.font.bold = True
        p.font.name = 'Segoe UI'
        p.alignment = PP_ALIGN.CENTER

    # Description
    add_text_box(slide, left + Inches(0.15), top + Inches(0.42),
                 width - Inches(0.3), height - Inches(0.5),
                 description, font_size=8, color=SUBTITLE_TEXT)

    return card


def add_flow_arrow(slide, left, top, width=Inches(0.18), height=Inches(0.18)):
    """Add a small arrow indicator between cards"""
    shape = slide.shapes.add_shape(
        MSO_SHAPE.RIGHT_ARROW, left, top, width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = LIGHT_GRAY
    shape.line.fill.background()
    return shape


def add_down_arrow(slide, left, top, width=Inches(0.18), height=Inches(0.25)):
    shape = slide.shapes.add_shape(
        MSO_SHAPE.DOWN_ARROW, left, top, width, height
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = LIGHT_GRAY
    shape.line.fill.background()
    return shape


def add_foundation_bar(slide, left, top, width, accent_color, title, description):
    """Standard foundation bar — same style as ServiceNow's NOW PLATFORM bar."""
    height = Inches(0.65)
    bar = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height
    )
    bar.fill.solid()
    bar.fill.fore_color.rgb = RGBColor(0x0D, 0x47, 0x2B)
    bar.line.color.rgb = accent_color
    bar.line.width = Pt(2)
    bar.adjustments[0] = 0.12

    add_text_box(slide, left + Inches(0.2), top + Inches(0.06),
                 Inches(3), Inches(0.3),
                 title, font_size=12, color=accent_color, bold=True)

    add_text_box(slide, left + Inches(0.2), top + Inches(0.32),
                 width - Inches(0.4), Inches(0.3),
                 description, font_size=9, color=RGBColor(0xA5, 0xD6, 0xA7))

    return bar


def add_slide_header(slide, brand_text, title_text, subtitle_text, accent_color=ACCENT_GREEN):
    """Standard slide header — same layout as ServiceNow."""
    # Top accent bar
    top_bar = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, 0, 0, Inches(16), Inches(0.04)
    )
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = accent_color
    top_bar.line.fill.background()

    # Brand (11pt — matching ServiceNow)
    add_text_box(slide, Inches(0.5), Inches(0.15), Inches(5), Inches(0.35),
                 brand_text, font_size=11, color=accent_color, bold=True)
    # Title (22pt — matching ServiceNow)
    add_text_box(slide, Inches(0.5), Inches(0.42), Inches(8), Inches(0.4),
                 title_text, font_size=22, color=WHITE, bold=True)
    # Subtitle (9pt — matching ServiceNow)
    add_text_box(slide, Inches(0.5), Inches(0.78), Inches(10), Inches(0.3),
                 subtitle_text, font_size=9, color=LIGHT_GRAY)


def add_stickiness_legend(slide, x, y):
    """Small color legend for stickiness: RED=High, YELLOW=Medium, WHITE=Low."""
    legend_w = Inches(2.8)
    legend_h = Inches(0.28)
    bar = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, x, y, legend_w, legend_h
    )
    bar.fill.solid()
    bar.fill.fore_color.rgb = RGBColor(0x12, 0x1C, 0x30)
    bar.line.fill.background()
    bar.adjustments[0] = 0.2

    dot_size = Inches(0.12)
    dx = x + Inches(0.12)
    dy = y + Inches(0.08)

    for color, label, offset in [
        (STICKY_HIGH, "High", 0),
        (STICKY_MED, "Medium", 0.9),
        (STICKY_LOW, "Low", 1.95),
    ]:
        dot = slide.shapes.add_shape(MSO_SHAPE.OVAL,
                                      dx + Inches(offset), dy, dot_size, dot_size)
        dot.fill.solid()
        dot.fill.fore_color.rgb = color
        dot.line.fill.background()
        add_text_box(slide, dx + Inches(offset) + Inches(0.16), y + Inches(0.03),
                     Inches(0.7), legend_h, label, font_size=7,
                     color=LIGHT_GRAY, bold=False)
