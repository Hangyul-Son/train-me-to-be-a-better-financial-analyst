"""
Synopsys & Cadence EDA Process Architecture PowerPoint
Two architecture slides — structurally distinct layouts that visually communicate
how each company's software architecture differs.

Synopsys = VERTICAL PIPELINE (two parallel columns: Design + Verification)
  → Shows the sequential RTL-to-GDSII pipeline with verification running alongside
  → Everything flows DOWN to signoff (PrimeTime = toll booth)

Cadence = HUB-AND-SPOKE (Virtuoso at center, quadrants radiating out)
  → Shows the analog-centric platform where everything revolves around Virtuoso/Spectre
  → Digital, Verification, Signoff, PCB/System surround the core

Stickiness: RED border = HIGH | YELLOW border = MEDIUM | WHITE border = LOW
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# ── Color Palette (Same navy template as ServiceNow) ────────────────────────
DARK_BG = RGBColor(0x0F, 0x17, 0x2A)
SECTION_LABEL_BG = RGBColor(0x1B, 0x2A, 0x4A)
CARD_BG = RGBColor(0xFF, 0xFF, 0xFF)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
LIGHT_GRAY = RGBColor(0x8A, 0x93, 0xA6)
DARK_TEXT = RGBColor(0x1A, 0x1A, 0x2E)
SUBTITLE_TEXT = RGBColor(0x5A, 0x63, 0x78)

# Accent = light blue (user requested navy + light blue + white)
ACCENT = RGBColor(0x4D, 0xA8, 0xDA)

# Stickiness border colors
STICKY_HIGH = RGBColor(0xDC, 0x3C, 0x3C)    # Red = high stickiness
STICKY_MED = RGBColor(0xF0, 0xA8, 0x20)     # Yellow = medium stickiness
STICKY_LOW = RGBColor(0xB8, 0xC0, 0xD0)     # Light = low stickiness

# Badge colors per stickiness
BADGE_HIGH_BG = RGBColor(0xFF, 0xEB, 0xEE)
BADGE_HIGH_TX = RGBColor(0xC6, 0x28, 0x28)
BADGE_MED_BG = RGBColor(0xFF, 0xF8, 0xE1)
BADGE_MED_TX = RGBColor(0xE6, 0x8A, 0x00)
BADGE_LOW_BG = RGBColor(0xF0, 0xF0, 0xF0)
BADGE_LOW_TX = RGBColor(0x75, 0x75, 0x75)

# Foundation bar colors
FOUND_BG = RGBColor(0x0D, 0x2B, 0x47)
FOUND_TEXT = RGBColor(0xA5, 0xCE, 0xE8)


# ── Helper Functions (matching ServiceNow format exactly) ────────────────────

def add_rounded_rect(slide, left, top, width, height, fill_color,
                     border_color=None, border_width=Pt(0), radius=0.05):
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
                 font_name='Segoe UI'):
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


def add_section_header(slide, left, top, width, height, text, sub_text=""):
    bar = slide.shapes.add_shape(
        MSO_SHAPE.ROUNDED_RECTANGLE, left, top, width, height
    )
    bar.fill.solid()
    bar.fill.fore_color.rgb = SECTION_LABEL_BG
    bar.line.fill.background()
    bar.adjustments[0] = 0.15
    add_text_box(slide, left + Inches(0.15), top + Inches(0.04),
                 width - Inches(0.3), height,
                 text, font_size=11, color=WHITE, bold=True)
    if sub_text:
        add_text_box(slide, left + width - Inches(2.2), top + Inches(0.04),
                     Inches(2.1), height, sub_text, font_size=8,
                     color=LIGHT_GRAY, bold=False, alignment=PP_ALIGN.RIGHT)
    return bar


def add_process_card(slide, left, top, width, height, number, title, description,
                     border_color=STICKY_MED, badge_text=None, badge_bg=None, badge_tx=None):
    # Card with border
    card = add_rounded_rect(slide, left, top, width, height,
                           CARD_BG, border_color, Pt(2.5))

    # Number circle
    circle_size = Inches(0.32)
    add_circle_number(slide, left + Inches(0.12), top + Inches(0.12),
                      circle_size, number, border_color)

    # Title (11pt bold — matching ServiceNow)
    add_text_box(slide, left + Inches(0.5), top + Inches(0.08),
                 width - Inches(0.6), Inches(0.3),
                 title, font_size=11, color=DARK_TEXT, bold=True)

    # Badge
    if badge_text:
        bg_c = badge_bg or BADGE_MED_BG
        tx_c = badge_tx or BADGE_MED_TX
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

    # Description (8pt — matching ServiceNow)
    add_text_box(slide, left + Inches(0.15), top + Inches(0.42),
                 width - Inches(0.3), height - Inches(0.5),
                 description, font_size=8, color=SUBTITLE_TEXT)

    return card


def add_flow_arrow(slide, left, top, width=Inches(0.18), height=Inches(0.18)):
    shape = slide.shapes.add_shape(MSO_SHAPE.RIGHT_ARROW, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = LIGHT_GRAY
    shape.line.fill.background()
    return shape


def add_down_arrow(slide, left, top, width=Inches(0.18), height=Inches(0.25)):
    shape = slide.shapes.add_shape(MSO_SHAPE.DOWN_ARROW, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = LIGHT_GRAY
    shape.line.fill.background()
    return shape


def add_stickiness_legend(slide, x, y):
    """Add small color legend: RED=High, YELLOW=Medium, WHITE=Low"""
    legend_w = Inches(2.8)
    legend_h = Inches(0.28)
    add_rounded_rect(slide, x, y, legend_w, legend_h,
                     RGBColor(0x12, 0x1C, 0x30), radius=0.2)

    # Red dot + text
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


def add_slide_header(slide, brand_text, title_text, subtitle_text):
    """Standard header matching ServiceNow format"""
    # Top accent bar
    top_bar = slide.shapes.add_shape(
        MSO_SHAPE.RECTANGLE, 0, 0, Inches(16), Inches(0.04)
    )
    top_bar.fill.solid()
    top_bar.fill.fore_color.rgb = ACCENT
    top_bar.line.fill.background()

    # Brand (11pt)
    add_text_box(slide, Inches(0.5), Inches(0.15), Inches(5), Inches(0.35),
                 brand_text, font_size=11, color=ACCENT, bold=True)
    # Title (22pt)
    add_text_box(slide, Inches(0.5), Inches(0.42), Inches(8), Inches(0.4),
                 title_text, font_size=22, color=WHITE, bold=True)
    # Subtitle (9pt)
    add_text_box(slide, Inches(0.5), Inches(0.78), Inches(10), Inches(0.3),
                 subtitle_text, font_size=9, color=LIGHT_GRAY)


# ── Main Presentation ────────────────────────────────────────────────────────

prs = Presentation()
prs.slide_width = Inches(16)
prs.slide_height = Inches(9)


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 1: SYNOPSYS — VERTICAL PIPELINE LAYOUT
#
# Two tall parallel columns flowing TOP-TO-BOTTOM:
#   Left:  DESIGN PIPELINE (Synthesis → P&R → Extraction → Signoff → Phys Verif)
#   Right: VERIFICATION CONTINUUM (Simulation → Formal → Debug → Emulation)
#
# Horizontal arrows connect left↔right showing parallel tracks.
# Foundation bars at bottom: DesignWare IP + TCAD/SLM
#
# This is fundamentally different from ServiceNow's HORIZONTAL BANDS.
# It visually communicates: chip design is a SEQUENTIAL PIPELINE, not a workflow.
# ═══════════════════════════════════════════════════════════════════════════════

slide1 = prs.slides.add_slide(prs.slide_layouts[6])
bg1 = slide1.background.fill
bg1.solid()
bg1.fore_color.rgb = DARK_BG

add_slide_header(slide1, "SYNOPSYS EDA",
                 "Process Architecture",
                 "8 core areas  |  RTL to GDSII  |  vs. Cadence / Siemens EDA")

# Stickiness legend
add_stickiness_legend(slide1, Inches(12.7), Inches(0.15))

# ── Layout: Two vertical columns ──
LEFT_X = Inches(0.5)
LEFT_W = Inches(7.1)
RIGHT_X = Inches(8.4)
RIGHT_W = Inches(7.1)
CARD_H = Inches(1.2)
SEC_H = Inches(0.35)
GAP = Inches(0.1)
ARROW_H = Inches(0.22)

# ═══ LEFT COLUMN: DESIGN PIPELINE ═══
y_left = Inches(1.15)
add_section_header(slide1, LEFT_X, y_left, LEFT_W, SEC_H,
                   "DESIGN PIPELINE  —  RTL to GDSII", "Sequential")
y_left += SEC_H + GAP

left_cards = [
    (1, "Logic Synthesis", "RTL → gate-level netlist. SDC constraints (Synopsys-created IEEE standard). Technology mapping to foundry PDK. Fusion Compiler unifies with P&R.",
     STICKY_HIGH, "SDC Standard", BADGE_HIGH_BG, BADGE_HIGH_TX),
    (2, "Place & Route", "IC Compiler II: floorplanning → placement → CTS → routing. Fusion Compiler merges with synthesis for physical-aware optimization.",
     STICKY_MED, None, None, None),
    (3, "Extraction + Timing Signoff", "StarRC parasitic extraction feeds PrimeTime. PrimeTime is foundry-mandated (TSMC, Samsung, Intel). The toll booth — no chip tapes out without it.",
     STICKY_HIGH, "Foundry Req'd", BADGE_HIGH_BG, BADGE_HIGH_TX),
    (4, "Physical Verification", "IC Validator: DRC, LVS, ERC. Checks layout against foundry manufacturing rules. Competes with Siemens Calibre (historical leader).",
     STICKY_MED, None, None, None),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(left_cards):
    add_process_card(slide1, LEFT_X, y_left, LEFT_W, CARD_H,
                     num, title, desc, border, badge, bbg, btx)
    y_left += CARD_H

    if i < len(left_cards) - 1:
        # Down arrow
        ax = LEFT_X + LEFT_W / 2 - Inches(0.09)
        add_down_arrow(slide1, ax, y_left + Inches(0.02))
        y_left += ARROW_H + GAP

# ═══ RIGHT COLUMN: VERIFICATION CONTINUUM ═══
y_right = Inches(1.15)
add_section_header(slide1, RIGHT_X, y_right, RIGHT_W, SEC_H,
                   "VERIFICATION CONTINUUM", "Parallel Track")
y_right += SEC_H + GAP

right_cards = [
    (5, "RTL Simulation", "VCS: gold-standard SystemVerilog/UVM simulator. 60-70% of chip design effort is verification. Massive testbench investments lock customers in.",
     STICKY_HIGH, "60-70% Effort", BADGE_HIGH_BG, BADGE_HIGH_TX),
    (6, "Formal Verification", "VC Formal: property checking, equivalence checking. SpyGlass: RTL lint, CDC, RDC analysis. Mathematical proof of correctness.",
     STICKY_MED, None, None, None),
    (7, "Debug & Analysis", "Verdi: waveform debug across all verification engines. Deep integration with VCS creates unified debug experience. SpyGlass early checks.",
     STICKY_MED, None, None, None),
    (8, "Emulation & Prototyping", "ZeBu: hardware emulation ($5-30M systems). HAPS: FPGA prototyping for software bring-up. Multi-year depreciation cycles.",
     STICKY_MED, "Hardware", BADGE_MED_BG, BADGE_MED_TX),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(right_cards):
    add_process_card(slide1, RIGHT_X, y_right, RIGHT_W, CARD_H,
                     num, title, desc, border, badge, bbg, btx)
    y_right += CARD_H

    if i < len(right_cards) - 1:
        ax = RIGHT_X + RIGHT_W / 2 - Inches(0.09)
        add_down_arrow(slide1, ax, y_right + Inches(0.02))
        y_right += ARROW_H + GAP

# ── Horizontal connecting arrows between columns (showing parallel tracks) ──
for row_idx in range(4):
    arrow_y_base = Inches(1.15) + SEC_H + GAP + row_idx * (CARD_H + ARROW_H + GAP) + CARD_H / 2 - Inches(0.09)
    # Left → Right arrow
    add_flow_arrow(slide1, LEFT_X + LEFT_W + Inches(0.15), arrow_y_base,
                   Inches(0.5), Inches(0.18))
    # Right → Left arrow (feedback)
    shape = slide1.shapes.add_shape(
        MSO_SHAPE.LEFT_ARROW,
        LEFT_X + LEFT_W + Inches(0.15),
        arrow_y_base + Inches(0.22),
        Inches(0.5), Inches(0.18)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = RGBColor(0x5A, 0x6A, 0x80)
    shape.line.fill.background()

# ── Foundation bars ──
found_y = max(y_left, y_right) + Inches(0.12)

# DesignWare IP bar
found1 = slide1.shapes.add_shape(
    MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), found_y, Inches(15), Inches(0.55)
)
found1.fill.solid()
found1.fill.fore_color.rgb = FOUND_BG
found1.line.color.rgb = STICKY_HIGH
found1.line.width = Pt(2)
found1.adjustments[0] = 0.12

add_text_box(slide1, Inches(0.7), found_y + Inches(0.04),
             Inches(3), Inches(0.25),
             "DESIGNWARE IP", font_size=12, color=ACCENT, bold=True)
add_text_box(slide1, Inches(0.7), found_y + Inches(0.28),
             Inches(14), Inches(0.25),
             "USB  •  PCIe  •  DDR  •  Ethernet  •  HDMI  •  ARC Processors  •  RISC-V  •  Security IP  •  Foundation IP  •  Multi-generation lock-in  •  Royalty revenue",
             font_size=9, color=FOUND_TEXT)

found_y += Inches(0.62)

# TCAD + SLM bar
found2 = slide1.shapes.add_shape(
    MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), found_y, Inches(15), Inches(0.55)
)
found2.fill.solid()
found2.fill.fore_color.rgb = FOUND_BG
found2.line.color.rgb = STICKY_HIGH
found2.line.width = Pt(2)
found2.adjustments[0] = 0.12

add_text_box(slide1, Inches(0.7), found_y + Inches(0.04),
             Inches(4), Inches(0.25),
             "SENTAURUS TCAD  +  SILICON LIFECYCLE", font_size=12, color=ACCENT, bold=True)
add_text_box(slide1, Inches(0.7), found_y + Inches(0.28),
             Inches(14), Inches(0.25),
             "Semiconductor process simulation  •  Device physics for foundries  •  Silicon.da analytics  •  In-chip monitoring  •  Design-to-silicon feedback  •  Upstream advantage",
             font_size=9, color=FOUND_TEXT)


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 2: CADENCE — HUB-AND-SPOKE / QUADRANT LAYOUT
#
# LARGE central card: Virtuoso + Spectre (THE HUB — analog dominance)
#
# Four quadrants radiating outward:
#   Top:          DIGITAL IMPLEMENTATION (Genus → Innovus → Cerebrus)
#   Left:         VERIFICATION (Xcelium, JasperGold)
#   Right:        SIGNOFF & ANALYSIS (Tempus, Voltus)
#   Bottom:       PCB & SYSTEM (Allegro, Sigrity, Celsius)
#
# Foundation: Palladium Emulation + Tensilica IP
#
# This is fundamentally different from Synopsys's VERTICAL PIPELINE.
# It visually communicates: Cadence = analog-centric platform where
# everything revolves around Virtuoso, not a linear pipeline.
# ═══════════════════════════════════════════════════════════════════════════════

slide2 = prs.slides.add_slide(prs.slide_layouts[6])
bg2 = slide2.background.fill
bg2.solid()
bg2.fore_color.rgb = DARK_BG

add_slide_header(slide2, "CADENCE DESIGN SYSTEMS",
                 "Process Architecture",
                 "Chip to System  |  Analog-Centric Platform  |  vs. Synopsys / Siemens EDA")

add_stickiness_legend(slide2, Inches(12.7), Inches(0.15))

# ── Layout constants ──
ML = Inches(0.5)
TW = Inches(15)
CH = Inches(1.15)
SH = Inches(0.35)

# ═══ TOP ROW: DIGITAL IMPLEMENTATION (3 cards horizontal) ═══
y = Inches(1.15)
add_section_header(slide2, ML, y, TW, SH,
                   "DIGITAL IMPLEMENTATION", "RTL to GDSII")
y += SH + Inches(0.08)

digi_w = (TW - Inches(0.24)) / 3

digi_cards = [
    (1, "Genus Synthesis", "RTL → gate-level netlist. Competing with Synopsys Design Compiler. Gaining share. Tightly integrated with Innovus downstream.",
     STICKY_MED, None, None, None),
    (2, "Innovus Implementation", "Place & route. Concurrent multi-objective optimization (timing, power, area, SI). Leading PPA at advanced nodes. Competes with ICC2.",
     STICKY_MED, None, None, None),
    (3, "Cerebrus AI Explorer", "ML-driven autonomous design space exploration. Wraps Genus + Innovus + Tempus + Voltus. Requires full Cadence flow — creates pull-through.",
     STICKY_LOW, "AI/ML", BADGE_LOW_BG, BADGE_LOW_TX),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(digi_cards):
    x = ML + i * (digi_w + Inches(0.12))
    add_process_card(slide2, x, y, digi_w, CH, num, title, desc, border, badge, bbg, btx)
    if i < 2:
        add_flow_arrow(slide2, x + digi_w, y + CH / 2 - Inches(0.09))

y += CH + Inches(0.08)

# ── Down arrows from digital row to center hub ──
for i in range(3):
    ax = ML + i * (digi_w + Inches(0.12)) + digi_w / 2 - Inches(0.09)
    add_down_arrow(slide2, ax, y)

y += Inches(0.32)

# ═══ MIDDLE ROW: LEFT(Verification) + CENTER(Virtuoso Hub) + RIGHT(Signoff) ═══
mid_y = y
side_w = Inches(3.3)
center_w = Inches(7.4)
center_x = ML + side_w + Inches(0.25)
right_x = center_x + center_w + Inches(0.25)
side_card_h = Inches(1.05)

# ── LEFT SIDE: VERIFICATION (2 stacked cards) ──
add_section_header(slide2, ML, mid_y, side_w, SH, "VERIFICATION")
vy = mid_y + SH + Inches(0.08)

verif_cards = [
    (4, "Xcelium Simulation", "SystemVerilog/UVM. Mixed-signal co-sim with Spectre is a key differentiator vs. Synopsys VCS.",
     STICKY_MED, None, None, None),
    (5, "JasperGold Formal", "Leader in formal verification. Property checking, security, connectivity. Deep methodology lock-in.",
     STICKY_MED, "Leader", BADGE_MED_BG, BADGE_MED_TX),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(verif_cards):
    add_process_card(slide2, ML, vy, side_w, side_card_h, num, title, desc, border, badge, bbg, btx)
    if i < 1:
        ax = ML + side_w / 2 - Inches(0.09)
        add_down_arrow(slide2, ax, vy + side_card_h + Inches(0.02))
    vy += side_card_h + Inches(0.28)

# ── Right arrows from verification to center hub ──
for row in range(2):
    ay = mid_y + SH + Inches(0.08) + row * (side_card_h + Inches(0.28)) + side_card_h / 2 - Inches(0.09)
    add_flow_arrow(slide2, ML + side_w + Inches(0.04), ay, Inches(0.18), Inches(0.18))

# ── CENTER: VIRTUOSO + SPECTRE HUB (large card) ──
hub_h = Inches(2.45)
hub = add_rounded_rect(slide2, center_x, mid_y, center_w, hub_h,
                       CARD_BG, STICKY_HIGH, Pt(3.5), radius=0.04)

# Hub number circle (large)
hub_circle_size = Inches(0.5)
hub_circle = slide2.shapes.add_shape(
    MSO_SHAPE.OVAL, center_x + Inches(0.2), mid_y + Inches(0.2),
    hub_circle_size, hub_circle_size
)
hub_circle.fill.solid()
hub_circle.fill.fore_color.rgb = STICKY_HIGH
hub_circle.line.fill.background()
tf = hub_circle.text_frame
tf.word_wrap = False
tf.margin_top = Emu(0)
tf.margin_bottom = Emu(0)
p = tf.paragraphs[0]
p.text = "HUB"
p.font.size = Pt(10)
p.font.color.rgb = WHITE
p.font.bold = True
p.font.name = 'Segoe UI'
p.alignment = PP_ALIGN.CENTER

# Hub title
add_text_box(slide2, center_x + Inches(0.8), mid_y + Inches(0.2),
             center_w - Inches(1.0), Inches(0.4),
             "Virtuoso + Spectre", font_size=18, color=DARK_TEXT, bold=True)

# Hub subtitle
add_text_box(slide2, center_x + Inches(0.8), mid_y + Inches(0.6),
             center_w - Inches(1.0), Inches(0.3),
             "Custom / Analog IC Design  •  ~75%+ Market Share  •  The Gravitational Center",
             font_size=10, color=SUBTITLE_TEXT, bold=True)

# Hub badge
hub_badge = add_rounded_rect(slide2, center_x + center_w - Inches(1.6), mid_y + Inches(0.2),
                              Inches(1.4), Inches(0.28), BADGE_HIGH_BG, BADGE_HIGH_TX, Pt(1), radius=0.3)
tf = hub_badge.text_frame
tf.word_wrap = False
p = tf.paragraphs[0]
p.text = "Unassailable Moat"
p.font.size = Pt(8)
p.font.color.rgb = BADGE_HIGH_TX
p.font.bold = True
p.font.name = 'Segoe UI'
p.alignment = PP_ALIGN.CENTER

# Hub description
hub_desc_lines = [
    "Virtuoso Layout Suite: decades of accumulated PCells, design rules. Every foundry delivers analog PDKs targeting Virtuoso first.",
    "Spectre Simulation: foundry-qualified SPICE models validated against Spectre. ADE integration is seamless.",
    "No credible alternative at scale. Synopsys Custom Compiler has minimal share. Switching = re-architecting everything.",
    "Mixed-signal bridge: Xcelium + Spectre co-simulation is a key differentiator — transistor to full-chip in one flow.",
]
desc_y = mid_y + Inches(1.0)
for line in hub_desc_lines:
    add_text_box(slide2, center_x + Inches(0.3), desc_y,
                 center_w - Inches(0.6), Inches(0.3),
                 line, font_size=8, color=SUBTITLE_TEXT)
    desc_y += Inches(0.32)

# ── RIGHT SIDE: SIGNOFF & ANALYSIS (2 stacked cards) ──
add_section_header(slide2, right_x, mid_y, side_w, SH, "SIGNOFF")
sy = mid_y + SH + Inches(0.08)

signoff_cards = [
    (6, "Tempus Timing", "Static timing analysis. Gaining ground vs. Synopsys PrimeTime. Tighter Innovus integration. Foundries increasingly qualify both.",
     STICKY_MED, "Challenger", BADGE_MED_BG, BADGE_MED_TX),
    (7, "Voltus Power", "IR drop, electromigration, dynamic power. Embedded in Innovus for in-design analysis. Standalone for signoff quality.",
     STICKY_MED, None, None, None),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(signoff_cards):
    add_process_card(slide2, right_x, sy, side_w, side_card_h, num, title, desc, border, badge, bbg, btx)
    if i < 1:
        ax = right_x + side_w / 2 - Inches(0.09)
        add_down_arrow(slide2, ax, sy + side_card_h + Inches(0.02))
    sy += side_card_h + Inches(0.28)

# ── Left arrows from signoff to center hub ──
for row in range(2):
    ay = mid_y + SH + Inches(0.08) + row * (side_card_h + Inches(0.28)) + side_card_h / 2 - Inches(0.09)
    shape = slide2.shapes.add_shape(
        MSO_SHAPE.LEFT_ARROW,
        right_x - Inches(0.22),
        ay,
        Inches(0.18), Inches(0.18)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = LIGHT_GRAY
    shape.line.fill.background()

# ═══ BOTTOM ROW: PCB & SYSTEM (3 cards horizontal) ═══
bottom_y = mid_y + hub_h + Inches(0.08)

# Up arrows from bottom to center hub
for i in range(3):
    ax = ML + i * (digi_w + Inches(0.12)) + digi_w / 2 - Inches(0.09)
    shape = slide2.shapes.add_shape(
        MSO_SHAPE.UP_ARROW, ax, bottom_y, Inches(0.18), Inches(0.22)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = LIGHT_GRAY
    shape.line.fill.background()

bottom_y += Inches(0.28)

add_section_header(slide2, ML, bottom_y, TW, SH,
                   "PCB & SYSTEM  —  Chip to Board  (Synopsys has NO equivalent)", "Unique to Cadence")
bottom_y += SH + Inches(0.08)

pcb_cards = [
    (8, "Allegro PCB Designer", "High-end PCB layout. Dominates complex high-speed boards (networking, server, automotive). Deep constraint management. Library lock-in.",
     STICKY_HIGH, "Dominant", BADGE_HIGH_BG, BADGE_HIGH_TX),
    (9, "Sigrity SI/PI Analysis", "Signal integrity, power integrity for PCBs and packages. Closed-loop with Allegro. Pre- and post-layout analysis.",
     STICKY_MED, None, None, None),
    (10, "Celsius Thermal", "Electro-thermal simulation across IC, package, board. Full system thermal analysis. Newer product expanding the platform.",
     STICKY_LOW, None, None, None),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(pcb_cards):
    x = ML + i * (digi_w + Inches(0.12))
    add_process_card(slide2, x, bottom_y, digi_w, CH, num, title, desc, border, badge, bbg, btx)
    if i < 2:
        add_flow_arrow(slide2, x + digi_w, bottom_y + CH / 2 - Inches(0.09))

bottom_y += CH + Inches(0.1)

# ── Foundation bars ──
# Palladium Emulation bar
found1 = slide2.shapes.add_shape(
    MSO_SHAPE.ROUNDED_RECTANGLE, ML, bottom_y, TW, Inches(0.52)
)
found1.fill.solid()
found1.fill.fore_color.rgb = FOUND_BG
found1.line.color.rgb = STICKY_HIGH
found1.line.width = Pt(2)
found1.adjustments[0] = 0.12

add_text_box(slide2, Inches(0.7), bottom_y + Inches(0.04),
             Inches(4), Inches(0.22),
             "PALLADIUM EMULATION  +  PROTIUM", font_size=12, color=ACCENT, bold=True)
add_text_box(slide2, Inches(0.7), bottom_y + Inches(0.26),
             Inches(14), Inches(0.22),
             "Hardware emulation ($5-30M systems)  •  FPGA prototyping  •  Multi-year depreciation lock-in  •  Co-leader with Synopsys ZeBu  •  Verification IP (VIP)",
             font_size=9, color=FOUND_TEXT)

bottom_y += Inches(0.58)

# Tensilica IP bar
found2 = slide2.shapes.add_shape(
    MSO_SHAPE.ROUNDED_RECTANGLE, ML, bottom_y, TW, Inches(0.52)
)
found2.fill.solid()
found2.fill.fore_color.rgb = FOUND_BG
found2.line.color.rgb = STICKY_MED
found2.line.width = Pt(2)
found2.adjustments[0] = 0.12

add_text_box(slide2, Inches(0.7), bottom_y + Inches(0.04),
             Inches(4), Inches(0.22),
             "TENSILICA IP  +  DESIGN IP", font_size=12, color=ACCENT, bold=True)
add_text_box(slide2, Inches(0.7), bottom_y + Inches(0.26),
             Inches(14), Inches(0.22),
             "Tensilica DSP/AI processors  •  Interface PHYs (DDR, PCIe, USB)  •  Memory compilers  •  Smaller IP portfolio than Synopsys DesignWare  •  Quantus extraction  •  Pegasus DRC/LVS",
             font_size=9, color=FOUND_TEXT)


# ═══════════════════════════════════════════════════════════════════════════════
# Save
# ═══════════════════════════════════════════════════════════════════════════════
output_path = "/home/user/train-me-to-be-a-better-financial-analyst/Synopsys_Cadence_Architecture.pptx"
prs.save(output_path)
print(f"Presentation saved to: {output_path}")
