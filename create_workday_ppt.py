"""
Workday HCM Process Architecture PowerPoint Generator
Creative, professional design with gradient-style visuals and modern layout
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn
import copy

# ── Color Palette (Workday-Inspired Warm + Dark Theme) ───────────────────────
DARK_BG = RGBColor(0x0A, 0x0E, 0x1A)         # Ultra-deep navy
MID_BG = RGBColor(0x12, 0x1A, 0x2D)          # Card area background
SECTION_BG = RGBColor(0x1A, 0x25, 0x3C)      # Section background

# Workday brand colors
WD_ORANGE = RGBColor(0xF6, 0x82, 0x1F)       # Workday signature orange
WD_BLUE = RGBColor(0x00, 0x5C, 0xB9)         # Workday blue
WD_NAVY = RGBColor(0x00, 0x2A, 0x5C)         # Dark Workday navy
WD_LIGHT_BLUE = RGBColor(0x4D, 0xA8, 0xDA)   # Light accent blue
WD_TEAL = RGBColor(0x00, 0x96, 0x88)         # Teal accent
WD_CORAL = RGBColor(0xE8, 0x5D, 0x4E)        # Coral/red accent
WD_GOLD = RGBColor(0xF5, 0xA6, 0x23)         # Gold accent
WD_GREEN = RGBColor(0x43, 0xA0, 0x47)        # Green accent
WD_PURPLE = RGBColor(0x7B, 0x1F, 0xA2)       # Purple accent

# Neutrals
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
OFF_WHITE = RGBColor(0xF5, 0xF5, 0xF5)
LIGHT_GRAY = RGBColor(0x8A, 0x93, 0xA6)
DARK_TEXT = RGBColor(0x1A, 0x1A, 0x2E)
SUBTITLE_TEXT = RGBColor(0x5A, 0x63, 0x78)
CARD_BG = RGBColor(0xFF, 0xFF, 0xFF)
CARD_CREAM = RGBColor(0xFF, 0xFB, 0xF0)      # Warm cream for highlight cards
SECTION_LABEL_BG = RGBColor(0x15, 0x20, 0x38)

# Badge colors
BADGE_ORANGE_BG = RGBColor(0xFF, 0xF0, 0xDE)
BADGE_ORANGE_TEXT = RGBColor(0xBF, 0x5B, 0x00)
BADGE_BLUE_BG = RGBColor(0xE3, 0xF2, 0xFD)
BADGE_BLUE_TEXT = RGBColor(0x0D, 0x47, 0xA1)
BADGE_RED_BG = RGBColor(0xFF, 0xEB, 0xEE)
BADGE_RED_TEXT = RGBColor(0xC6, 0x28, 0x28)


# ── Helper Functions ─────────────────────────────────────────────────────────

def add_rounded_rect(slide, left, top, width, height, fill_color, border_color=None, border_width=Pt(0), radius=0.05):
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
    shape.adjustments[0] = radius
    return shape


def add_text_box(slide, left, top, width, height, text, font_size=10,
                 color=DARK_TEXT, bold=False, alignment=PP_ALIGN.LEFT,
                 font_name='Segoe UI', italic=False):
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.text = text
    p.font.size = Pt(font_size)
    p.font.color.rgb = color
    p.font.bold = bold
    p.font.name = font_name
    p.font.italic = italic
    p.alignment = alignment
    return txBox


def add_multiline_text(slide, left, top, width, height, lines, font_name='Segoe UI'):
    """Add text box with multiple styled lines: [(text, size, color, bold), ...]"""
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.word_wrap = True
    for i, (text, size, color, bold) in enumerate(lines):
        if i == 0:
            p = tf.paragraphs[0]
        else:
            p = tf.add_paragraph()
        p.text = text
        p.font.size = Pt(size)
        p.font.color.rgb = color
        p.font.bold = bold
        p.font.name = font_name
        p.space_before = Pt(2)
        p.space_after = Pt(1)
    return txBox


def add_circle_number(slide, left, top, size, number, bg_color, text_color=WHITE):
    shape = slide.shapes.add_shape(MSO_SHAPE.OVAL, left, top, size, size)
    shape.fill.solid()
    shape.fill.fore_color.rgb = bg_color
    shape.line.fill.background()
    tf = shape.text_frame
    tf.word_wrap = False
    tf.margin_top = Emu(0)
    tf.margin_bottom = Emu(0)
    p = tf.paragraphs[0]
    p.text = str(number)
    p.font.size = Pt(int(size / Emu(Pt(1).emu) * 0.38))
    p.font.color.rgb = text_color
    p.font.bold = True
    p.font.name = 'Segoe UI'
    p.alignment = PP_ALIGN.CENTER
    return shape


def add_section_banner(slide, left, top, width, height, text, accent_color, sub_text=""):
    """Creative section banner with colored left accent strip"""
    # Main bar
    bar = add_rounded_rect(slide, left, top, width, height, SECTION_LABEL_BG, radius=0.1)
    # Left accent strip
    strip = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(0.08), height
    )
    strip.fill.solid()
    strip.fill.fore_color.rgb = accent_color
    strip.line.fill.background()
    strip.adjustments[0] = 0.5

    add_text_box(slide, left + Inches(0.25), top + Inches(0.04), width - Inches(0.5), height,
                 text, font_size=11, color=WHITE, bold=True)
    if sub_text:
        add_text_box(slide, left + width - Inches(2.5), top + Inches(0.04),
                     Inches(2.4), height, sub_text, font_size=8,
                     color=LIGHT_GRAY, alignment=PP_ALIGN.RIGHT)
    return bar


def add_process_card(slide, left, top, width, height, number, title, description,
                     accent_color=WD_BLUE, badge_text=None, badge_colors=None,
                     card_bg=CARD_BG):
    # Card with colored top border effect
    card = add_rounded_rect(slide, left, top, width, height, card_bg, accent_color, Pt(2), radius=0.04)

    # Top color strip
    strip = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, left + Inches(0.08), top, width - Inches(0.16), Inches(0.05)
    )
    strip.fill.solid()
    strip.fill.fore_color.rgb = accent_color
    strip.line.fill.background()

    # Number circle
    circle_size = Inches(0.34)
    add_circle_number(slide, left + Inches(0.12), top + Inches(0.14),
                      circle_size, number, accent_color)

    # Title
    add_text_box(slide, left + Inches(0.52), top + Inches(0.1),
                 width - Inches(0.65), Inches(0.3),
                 title, font_size=11, color=DARK_TEXT, bold=True)

    # Badge
    if badge_text:
        bg_c = badge_colors[0] if badge_colors else BADGE_ORANGE_BG
        tx_c = badge_colors[1] if badge_colors else BADGE_ORANGE_TEXT
        badge_left = left + width - Inches(1.1)
        badge = add_rounded_rect(slide, badge_left, top + Inches(0.12),
                                Inches(0.95), Inches(0.24), bg_c, tx_c, Pt(1), radius=0.3)
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
    add_text_box(slide, left + Inches(0.15), top + Inches(0.48),
                 width - Inches(0.3), height - Inches(0.55),
                 description, font_size=8, color=SUBTITLE_TEXT)

    return card


def add_flow_arrow(slide, left, top, width=Inches(0.2), height=Inches(0.2), color=LIGHT_GRAY):
    shape = slide.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    return shape


def add_chevron_arrow(slide, left, top, width=Inches(0.25), height=Inches(0.22), color=WD_ORANGE):
    shape = slide.shapes.add_shape(MSO_SHAPE.CHEVRON, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    return shape


def add_down_arrow(slide, left, top, width=Inches(0.2), height=Inches(0.28), color=LIGHT_GRAY):
    shape = slide.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    return shape


def add_diamond(slide, left, top, size, color):
    shape = slide.shapes.add_shape(MSO_SHAPE.DIAMOND, left, top, size, size)
    shape.fill.solid()
    shape.fill.fore_color.rgb = color
    shape.line.fill.background()
    return shape


# ── Main Presentation ────────────────────────────────────────────────────────

prs = Presentation()
prs.slide_width = Inches(16)
prs.slide_height = Inches(9)

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 1: CREATIVE TITLE SLIDE
# ═══════════════════════════════════════════════════════════════════════════════
slide = prs.slides.add_slide(prs.slide_layouts[6])
bg = slide.background.fill
bg.solid()
bg.fore_color.rgb = DARK_BG

# Decorative geometric shapes (creative flair)
# Large faded circle top-right
circle1 = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(11), Inches(-2), Inches(7), Inches(7))
circle1.fill.solid()
circle1.fill.fore_color.rgb = RGBColor(0x15, 0x1E, 0x30)
circle1.line.fill.background()

# Medium ring
circle2 = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(12.5), Inches(4), Inches(4), Inches(4))
circle2.fill.solid()
circle2.fill.fore_color.rgb = RGBColor(0x12, 0x1B, 0x2B)
circle2.line.color.rgb = WD_ORANGE
circle2.line.width = Pt(1.5)

# Small accent diamond
add_diamond(slide, Inches(1.2), Inches(2.2), Inches(0.18), WD_ORANGE)

# Top accent bar with gradient-like effect (two bars)
top_bar1 = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(0.04))
top_bar1.fill.solid()
top_bar1.fill.fore_color.rgb = WD_ORANGE
top_bar1.line.fill.background()

top_bar2 = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, Inches(0.04), prs.slide_width, Inches(0.02))
top_bar2.fill.solid()
top_bar2.fill.fore_color.rgb = WD_GOLD
top_bar2.line.fill.background()

# Brand text
add_text_box(slide, Inches(1.5), Inches(2.5), Inches(10), Inches(0.5),
             "WORKDAY", font_size=18, color=WD_ORANGE, bold=True, font_name='Segoe UI')

add_text_box(slide, Inches(1.5), Inches(3.1), Inches(12), Inches(1.0),
             "HCM Process Architecture", font_size=48, color=WHITE, bold=True)

add_text_box(slide, Inches(1.5), Inches(4.3), Inches(10), Inches(0.5),
             "HUMAN CAPITAL MANAGEMENT", font_size=14, color=WD_GOLD, bold=True,
             font_name='Segoe UI')

# Divider line
line = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(1.5), Inches(5.0), Inches(4), Inches(0.04))
line.fill.solid()
line.fill.fore_color.rgb = WD_ORANGE
line.line.fill.background()

add_text_box(slide, Inches(1.5), Inches(5.3), Inches(12), Inches(0.8),
             "10 Core Steps  |  Hire to Retire  |  vs. Oracle Fusion Cloud HCM",
             font_size=14, color=LIGHT_GRAY)

# Bottom decorative dots
for i in range(5):
    dot = slide.shapes.add_shape(MSO_SHAPE.OVAL, Inches(1.5 + i * 0.3), Inches(6.2),
                                  Inches(0.1), Inches(0.1))
    dot.fill.solid()
    dot.fill.fore_color.rgb = WD_ORANGE if i == 0 else LIGHT_GRAY
    dot.line.fill.background()

add_text_box(slide, Inches(1.5), Inches(7.8), Inches(8), Inches(0.3),
             "Enterprise Architecture Overview  •  Confidential  •  March 2026",
             font_size=9, color=LIGHT_GRAY)


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 2: FULL HCM PROCESS ARCHITECTURE (THE MAIN DIAGRAM)
# ═══════════════════════════════════════════════════════════════════════════════
slide2 = prs.slides.add_slide(prs.slide_layouts[6])
bg2 = slide2.background.fill
bg2.solid()
bg2.fore_color.rgb = DARK_BG

# Top bars
top_bar = slide2.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(0.04))
top_bar.fill.solid()
top_bar.fill.fore_color.rgb = WD_ORANGE
top_bar.line.fill.background()

# Header
add_text_box(slide2, Inches(0.5), Inches(0.15), Inches(4), Inches(0.3),
             "WORKDAY HCM", font_size=12, color=WD_ORANGE, bold=True)
add_text_box(slide2, Inches(0.5), Inches(0.4), Inches(8), Inches(0.4),
             "Process Architecture", font_size=24, color=WHITE, bold=True)
add_text_box(slide2, Inches(0.5), Inches(0.78), Inches(12), Inches(0.3),
             "10 core steps  •  Hire to Retire  •  vs. Oracle Fusion Cloud HCM",
             font_size=9, color=LIGHT_GRAY)

# Layout constants
ML = Inches(0.5)       # margin left
TW = Inches(15)        # total width
CH = Inches(1.45)      # card height
SH = Inches(0.38)      # section header height
GAP = Inches(0.12)

y = Inches(1.15)

# ══ SECTION 1: PLAN TO HIRE ════════════════════════════════════════════════
add_section_banner(slide2, ML, y, TW, SH, "PLAN TO HIRE", WD_BLUE, "Steps 1–3")
y += SH + GAP

cw3 = (TW - GAP * 2) / 3

cards_plan = [
    (1, "Org Design", "Company org chart. Every dept, job title, reporting line. You can't hire without a position here first. Supervisory & matrix orgs.",
     WD_BLUE, None, None),
    (2, "Recruit & Hire", "Full pipeline: req to offer. AI matches candidates to roles by skills, not keywords. Evergreen reqs. Offer letter generation.",
     WD_BLUE, None, None),
    (3, "Onboard", "Day zero: laptop, badge, tax forms, compliance training, benefits deadlines. 54 activities. Preboarding portal for new hires.",
     WD_BLUE, None, None),
]

for i, (num, title, desc, color, badge, bc) in enumerate(cards_plan):
    x = ML + i * (cw3 + GAP)
    add_process_card(slide2, x, y, cw3, CH, num, title, desc, color, badge)
    if i < 2:
        add_chevron_arrow(slide2, x + cw3 + Inches(-0.02), y + CH / 2 - Inches(0.11),
                         color=WD_LIGHT_BLUE)

y += CH + Inches(0.08)

# Animated flow arrows down
for i in range(3):
    ax = ML + i * (cw3 + GAP) + cw3 / 2 - Inches(0.1)
    add_down_arrow(slide2, ax, y, color=WD_LIGHT_BLUE)

y += Inches(0.32)

# ══ SECTION 2: HIRE TO PAY — THE CORE LOOP ════════════════════════════════
add_section_banner(slide2, ML, y, TW, SH,
                   "HIRE TO PAY  —  The Core Loop", WD_ORANGE, "Steps 4–8  |  Hardest to Replace")
y += SH + GAP

cw5 = (TW - GAP * 4) / 5

cards_core = [
    (4, "Core HR", "Single source of truth. Name, job, comp history, tax, visa. The CMDB equivalent. 12-18 mo. to migrate.",
     WD_ORANGE, "Illuminate", (BADGE_ORANGE_BG, BADGE_ORANGE_TEXT)),
    (5, "Compensation", "Base, bonus, stock, merit. Real-time budget visibility. Market benchmarking. Total rewards statements.",
     WD_ORANGE, None, None),
    (6, "Benefits", "Medical, dental, 401(k), HSA. Open enrollment. One bad config = thousands on wrong plan. Life events engine.",
     WD_ORANGE, None, None),
    (7, "Payroll", "Gross-to-net every period. Taxes, deductions, garnishments. One error = thousands of corrections. Multi-country.",
     WD_ORANGE, "Tax Engine", (BADGE_RED_BG, BADGE_RED_TEXT)),
    (8, "Time & Absence", "Clock in/out, PTO, FMLA, overtime. Feeds payroll. Labor law compliance automatic. Scheduling engine.",
     WD_ORANGE, None, None),
]

for i, (num, title, desc, color, badge, bc) in enumerate(cards_core):
    x = ML + i * (cw5 + GAP)
    add_process_card(slide2, x, y, cw5, CH, num, title, desc, color, badge, bc,
                     card_bg=CARD_CREAM)
    if i < 4:
        add_chevron_arrow(slide2, x + cw5 + Inches(-0.02), y + CH / 2 - Inches(0.11),
                         color=WD_ORANGE)

y += CH + Inches(0.08)

for i in range(5):
    ax = ML + i * (cw5 + GAP) + cw5 / 2 - Inches(0.1)
    add_down_arrow(slide2, ax, y, color=WD_ORANGE)

y += Inches(0.32)

# ══ SECTION 3: DEVELOP & SEPARATE ════════════════════════════════════════
add_section_banner(slide2, ML, y, TW, SH, "DEVELOP & SEPARATE", WD_PURPLE, "Steps 9–10")
y += SH + GAP

cw2 = (TW - GAP) / 2

cards_dev = [
    (9, "Performance", "Goals, reviews, 360 feedback, calibration. Feeds comp and promotion decisions. Succession planning. Talent marketplace.",
     WD_PURPLE, None, None),
    (10, "Offboard", "Final pay, COBRA, access revoked, exit interview, org chart update. Legal hold for involuntary terms. Alumni network.",
     WD_PURPLE, None, None),
]

for i, (num, title, desc, color, badge, bc) in enumerate(cards_dev):
    x = ML + i * (cw2 + GAP)
    add_process_card(slide2, x, y, cw2, CH, num, title, desc, color, badge)
    if i < 1:
        add_chevron_arrow(slide2, x + cw2 + Inches(-0.02), y + CH / 2 - Inches(0.11),
                         color=WD_PURPLE)

y += CH + Inches(0.15)

# ══ FOUNDATION BAR: WORKER RECORD ════════════════════════════════════════
found_h = Inches(0.7)
found = slide2.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, ML, y, TW, found_h)
found.fill.solid()
found.fill.fore_color.rgb = RGBColor(0x3E, 0x21, 0x00)
found.line.color.rgb = WD_ORANGE
found.line.width = Pt(2.5)
found.adjustments[0] = 0.1

add_text_box(slide2, ML + Inches(0.25), y + Inches(0.06),
             Inches(3), Inches(0.3),
             "WORKER RECORD", font_size=13, color=WD_ORANGE, bold=True)

add_text_box(slide2, ML + Inches(0.25), y + Inches(0.35),
             TW - Inches(0.5), Inches(0.3),
             "Every employee's full lifecycle accumulates here  •  Personal data, job history, comp, tax, benefits  •  Migration: 12 to 18 months  •  Single object model  •  Tenant-based architecture",
             font_size=9, color=RGBColor(0xF5, 0xCB, 0x8A))


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 3: INTEGRATION & DATA FLOW (3 columns)
# ═══════════════════════════════════════════════════════════════════════════════
slide3 = prs.slides.add_slide(prs.slide_layouts[6])
bg3 = slide3.background.fill
bg3.solid()
bg3.fore_color.rgb = DARK_BG

top_bar3 = slide3.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(0.04))
top_bar3.fill.solid()
top_bar3.fill.fore_color.rgb = WD_ORANGE
top_bar3.line.fill.background()

add_text_box(slide3, Inches(0.5), Inches(0.15), Inches(4), Inches(0.3),
             "WORKDAY HCM", font_size=12, color=WD_ORANGE, bold=True)
add_text_box(slide3, Inches(0.5), Inches(0.42), Inches(10), Inches(0.4),
             "Integration & Data Flow Architecture", font_size=22, color=WHITE, bold=True)

col_w = Inches(4.7)
col_gap = Inches(0.2)
col_y = Inches(1.15)

tiers = [
    ("INBOUND  •  People Data", WD_TEAL, [
        ("Recruiting Gateway", "Greenhouse, Lever, LinkedIn ATS feeds. Candidate profile sync. Interview scheduling data."),
        ("HRIS Feeds", "Legacy PeopleSoft / SAP SuccessFactors migration. Bulk data loads via EIB. Worker data validation."),
        ("Employee Self-Service", "Personal info changes, address updates, direct deposit. Mobile-first. Manager self-service approvals."),
        ("Third-Party Benefits", "Carrier connections: Aetna, BCBS, Kaiser. EDI 834 feeds. Evidence of insurability tracking."),
    ]),
    ("CORE ENGINE  •  Workday Tenant", WD_ORANGE, [
        ("Business Process Framework", "Configurable approval chains. Parallel & sequential steps. Condition rules. Auto-complete logic."),
        ("Calculated Fields", "Real-time computed values. Eligibility rules, proration, rollups. No SQL — declarative logic."),
        ("Security Model", "Role-based + domain-based. Intersection security groups. Row-level data access. SOX compliance."),
        ("Reporting & Analytics", "Matrix reports, composite reports, dashboards. Discovery boards. Prism Analytics for big data."),
    ]),
    ("OUTBOUND  •  Downstream Systems", WD_PURPLE, [
        ("Payroll Providers", "ADP, Ceridian, native Workday Payroll. Pay calc → GL journal entries. Tax filing integration."),
        ("Finance & ERP", "Workday Financials, SAP, Oracle GL. Cost center mapping. Headcount-to-budget reconciliation."),
        ("Identity & Access", "Okta, Azure AD provisioning. Birthright access. Joiner-mover-leaver automation."),
        ("Compliance & Gov't", "ACA, EEO-1, VETS-4212, OSHA. Country-specific statutory reports. GDPR data subject requests."),
    ]),
]

for col_idx, (tier_title, tier_color, items) in enumerate(tiers):
    x = Inches(0.5) + col_idx * (col_w + col_gap)

    # Tier header with accent
    add_section_banner(slide3, x, col_y, col_w, Inches(0.38), tier_title, tier_color)

    item_y = col_y + Inches(0.5)
    item_h = Inches(1.05)

    for item_idx, (item_title, item_desc) in enumerate(items):
        card = add_rounded_rect(slide3, x, item_y, col_w, item_h,
                               CARD_BG, tier_color, Pt(2), radius=0.04)

        # Top strip
        strip = slide3.shapes.add_shape(
            MSO_SHAPE.RECTANGLE, x + Inches(0.06), item_y, col_w - Inches(0.12), Inches(0.04)
        )
        strip.fill.solid()
        strip.fill.fore_color.rgb = tier_color
        strip.line.fill.background()

        add_text_box(slide3, x + Inches(0.15), item_y + Inches(0.1),
                     col_w - Inches(0.3), Inches(0.28),
                     item_title, font_size=11, color=DARK_TEXT, bold=True)

        add_text_box(slide3, x + Inches(0.15), item_y + Inches(0.42),
                     col_w - Inches(0.3), Inches(0.55),
                     item_desc, font_size=8.5, color=SUBTITLE_TEXT)

        item_y += item_h + Inches(0.08)

    # Big flow arrows between columns
    if col_idx < 2:
        arrow_x = x + col_w + Inches(0.01)
        arrow_y = col_y + Inches(2.5)
        add_chevron_arrow(slide3, arrow_x, arrow_y, Inches(0.18), Inches(0.25), tier_color)

# ── Bottom platform bar ──
plat_y = Inches(6.0)
plat_bar = slide3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), plat_y, TW, Inches(0.6))
plat_bar.fill.solid()
plat_bar.fill.fore_color.rgb = RGBColor(0x3E, 0x21, 0x00)
plat_bar.line.color.rgb = WD_ORANGE
plat_bar.line.width = Pt(2)
plat_bar.adjustments[0] = 0.1

add_text_box(slide3, Inches(0.75), plat_y + Inches(0.06),
             Inches(14), Inches(0.25),
             "WORKDAY INTEGRATION CLOUD", font_size=12, color=WD_ORANGE, bold=True)
add_text_box(slide3, Inches(0.75), plat_y + Inches(0.3),
             TW - Inches(0.5), Inches(0.25),
             "Workday Studio  •  EIB (Enterprise Interface Builder)  •  Core Connectors  •  Cloud Connect  •  Document Transformation  •  REST / SOAP API  •  RaaS (Report as a Service)",
             font_size=9, color=RGBColor(0xF5, 0xCB, 0x8A))


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 4: KEY METRICS & COMPETITIVE COMPARISON
# ═══════════════════════════════════════════════════════════════════════════════
slide4 = prs.slides.add_slide(prs.slide_layouts[6])
bg4 = slide4.background.fill
bg4.solid()
bg4.fore_color.rgb = DARK_BG

top_bar4 = slide4.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(0.04))
top_bar4.fill.solid()
top_bar4.fill.fore_color.rgb = WD_ORANGE
top_bar4.line.fill.background()

add_text_box(slide4, Inches(0.5), Inches(0.15), Inches(4), Inches(0.3),
             "WORKDAY HCM", font_size=12, color=WD_ORANGE, bold=True)
add_text_box(slide4, Inches(0.5), Inches(0.42), Inches(10), Inches(0.4),
             "Implementation & Competitive Landscape", font_size=22, color=WHITE, bold=True)

# ── KPI Cards with creative styling ──
kpi_data = [
    ("12–18 mo.", "Implementation Timeline", "Full HCM suite with\ndata migration & testing", WD_ORANGE),
    ("60M+", "Users Worldwide", "Powering 60% of\nFortune 500 companies", WD_BLUE),
    ("2x / Year", "Feature Releases", "Continuous innovation.\nNo version upgrades.", WD_TEAL),
    ("99.7%", "Customer Retention", "Highest in enterprise\nHCM market", WD_GREEN),
]

kpi_w = Inches(3.5)
kpi_h = Inches(1.8)
kpi_gap = Inches(0.2)
kpi_y = Inches(1.2)

for i, (value, label, detail, accent) in enumerate(kpi_data):
    x = Inches(0.5) + i * (kpi_w + kpi_gap)

    card = add_rounded_rect(slide4, x, kpi_y, kpi_w, kpi_h,
                           MID_BG, accent, Pt(1.5), radius=0.06)

    # Accent top strip
    strip = slide4.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, x + Inches(0.06), kpi_y, kpi_w - Inches(0.12), Inches(0.05)
    )
    strip.fill.solid()
    strip.fill.fore_color.rgb = accent
    strip.line.fill.background()

    add_text_box(slide4, x + Inches(0.3), kpi_y + Inches(0.2),
                 kpi_w - Inches(0.6), Inches(0.5),
                 value, font_size=30, color=accent, bold=True)

    add_text_box(slide4, x + Inches(0.3), kpi_y + Inches(0.75),
                 kpi_w - Inches(0.6), Inches(0.3),
                 label, font_size=12, color=WHITE, bold=True)

    add_text_box(slide4, x + Inches(0.3), kpi_y + Inches(1.15),
                 kpi_w - Inches(0.6), Inches(0.5),
                 detail, font_size=9, color=LIGHT_GRAY)

# ── Comparison Table ──
table_y = Inches(3.4)
add_text_box(slide4, Inches(0.5), table_y, Inches(8), Inches(0.35),
             "Competitive Comparison", font_size=16, color=WHITE, bold=True)

# Decorative line under title
tl = slide4.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.5), table_y + Inches(0.38),
                              Inches(2.5), Inches(0.03))
tl.fill.solid()
tl.fill.fore_color.rgb = WD_ORANGE
tl.line.fill.background()

table_y += Inches(0.55)
rows = 8
cols = 4
tbl_w = Inches(15)
tbl_h = Inches(4.2)

table_shape = slide4.shapes.add_table(rows, cols, Inches(0.5), table_y, tbl_w, tbl_h)
table = table_shape.table

table.columns[0].width = Inches(3.5)
table.columns[1].width = Inches(3.8)
table.columns[2].width = Inches(3.8)
table.columns[3].width = Inches(3.9)

headers = ["Capability", "Workday HCM", "Oracle Fusion Cloud", "SAP SuccessFactors"]
data_rows = [
    ["Core HR / Worker Record", "Unified object model", "Modular (separate DBs)", "Employee Central"],
    ["Payroll", "Native + 3rd party", "Cloud Payroll", "Employee Central Payroll"],
    ["Recruiting", "Native (acquired)", "Taleo → Recruiting Cloud", "Recruiting Management"],
    ["Compensation & Benefits", "Integrated real-time", "Separate modules", "Compensation + Benefits"],
    ["Analytics", "Prism Analytics + Discovery", "OTBI + Analytics Cloud", "People Analytics (SAC)"],
    ["Architecture", "True multi-tenant SaaS", "Gen 2 Cloud (lift & shift risk)", "BTP + Neo hybrid"],
    ["Total Cost (5-yr)", "$$$ (premium SaaS)", "$$$$ (implementation heavy)", "$$$ (licensing complex)"],
]

for col_idx, header in enumerate(headers):
    cell = table.cell(0, col_idx)
    cell.text = header
    cell.fill.solid()
    cell.fill.fore_color.rgb = RGBColor(0x2A, 0x15, 0x00) if col_idx > 0 else SECTION_LABEL_BG
    for paragraph in cell.text_frame.paragraphs:
        paragraph.font.size = Pt(10)
        paragraph.font.color.rgb = WD_ORANGE if col_idx == 1 else WHITE
        paragraph.font.bold = True
        paragraph.font.name = 'Segoe UI'

for row_idx, row_data in enumerate(data_rows):
    for col_idx, cell_text in enumerate(row_data):
        cell = table.cell(row_idx + 1, col_idx)
        cell.text = cell_text
        cell.fill.solid()
        cell.fill.fore_color.rgb = RGBColor(0x14, 0x1E, 0x33) if row_idx % 2 == 0 else RGBColor(0x1A, 0x25, 0x3C)
        for paragraph in cell.text_frame.paragraphs:
            paragraph.font.size = Pt(9)
            paragraph.font.color.rgb = RGBColor(0xCC, 0xCC, 0xCC)
            paragraph.font.name = 'Segoe UI'
            if col_idx == 1:
                paragraph.font.color.rgb = WD_ORANGE
                paragraph.font.bold = True


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 5: CREATIVE SUMMARY / KEY TAKEAWAYS
# ═══════════════════════════════════════════════════════════════════════════════
slide5 = prs.slides.add_slide(prs.slide_layouts[6])
bg5 = slide5.background.fill
bg5.solid()
bg5.fore_color.rgb = DARK_BG

top_bar5 = slide5.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(0.04))
top_bar5.fill.solid()
top_bar5.fill.fore_color.rgb = WD_ORANGE
top_bar5.line.fill.background()

# Decorative circles
for cx, cy, cs, cc in [(Inches(13), Inches(1), Inches(5), RGBColor(0x15, 0x1E, 0x30)),
                         (Inches(14), Inches(5), Inches(3.5), RGBColor(0x12, 0x1B, 0x2B))]:
    c = slide5.shapes.add_shape(MSO_SHAPE.OVAL, cx, cy, cs, cs)
    c.fill.solid()
    c.fill.fore_color.rgb = cc
    c.line.fill.background()

add_text_box(slide5, Inches(0.8), Inches(0.5), Inches(4), Inches(0.3),
             "WORKDAY HCM", font_size=12, color=WD_ORANGE, bold=True)
add_text_box(slide5, Inches(0.8), Inches(0.85), Inches(10), Inches(0.5),
             "Key Architecture Takeaways", font_size=28, color=WHITE, bold=True)

# Takeaway cards — creative stacked layout
takeaways = [
    ("01", "Single Object Model", "Unlike Oracle/SAP's modular approach, Workday stores everything in one unified worker record. This eliminates data sync issues but makes migration a 12–18 month journey.", WD_ORANGE),
    ("02", "True Multi-Tenant SaaS", "Everyone runs the same code version. Updates are pushed 2x/year automatically. No version fragmentation. No on-prem option — this is a feature, not a bug.", WD_BLUE),
    ("03", "Core HR is the Foundation", "Steps 4–8 (Hire to Pay) are the hardest to replace and the stickiest. Once Core HR is live, the switching cost is enormous. Plan accordingly.", WD_CORAL),
    ("04", "Integration is the Real Project", "50% of implementation effort is integration. EIB, Studio, Core Connectors, and the new Integration Cloud are critical skills. Budget for it.", WD_TEAL),
    ("05", "Security Model is Unique", "Intersection-based security (role × org × domain) is powerful but complex. Plan your security groups early — retrofitting is painful.", WD_PURPLE),
]

card_x = Inches(0.8)
card_w = Inches(14.4)
card_h = Inches(1.05)
card_y = Inches(1.65)

for i, (num, title, desc, accent) in enumerate(takeaways):
    ty = card_y + i * (card_h + Inches(0.12))

    card = add_rounded_rect(slide5, card_x, ty, card_w, card_h, MID_BG, accent, Pt(1.5), radius=0.03)

    # Left accent bar
    strip = slide5.shapes.add_shape(MSO_SHAPE.RECTANGLE, card_x, ty + Inches(0.08),
                                     Inches(0.06), card_h - Inches(0.16))
    strip.fill.solid()
    strip.fill.fore_color.rgb = accent
    strip.line.fill.background()

    # Number
    add_text_box(slide5, card_x + Inches(0.25), ty + Inches(0.08),
                 Inches(0.6), Inches(0.4),
                 num, font_size=24, color=accent, bold=True)

    # Title
    add_text_box(slide5, card_x + Inches(0.85), ty + Inches(0.08),
                 Inches(4), Inches(0.3),
                 title, font_size=13, color=WHITE, bold=True)

    # Description
    add_text_box(slide5, card_x + Inches(0.85), ty + Inches(0.42),
                 card_w - Inches(1.2), Inches(0.55),
                 desc, font_size=9, color=LIGHT_GRAY)


# ═══════════════════════════════════════════════════════════════════════════════
# Save
# ═══════════════════════════════════════════════════════════════════════════════
output_path = "/home/user/train-me-to-be-a-better-financial-analyst/Workday_HCM_Architecture.pptx"
prs.save(output_path)
print(f"Presentation saved to: {output_path}")
