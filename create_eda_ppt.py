"""
Synopsys & Cadence EDA Process Architecture PowerPoint
Uses the SAME design system as ServiceNow (slide_design_system.py).

Identical: colors, fonts, card styling, section headers, foundation bars, badges.
Different: layout arrangement and stickiness border colors (RED/YELLOW/WHITE).

Synopsys = VERTICAL PIPELINE (two parallel columns: Design + Verification)
Cadence  = HUB-AND-SPOKE (Virtuoso at center, quadrants radiating out)
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# Import the SAME design system used by ServiceNow
from slide_design_system import (
    DARK_BG, SECTION_BG, CARD_BG, WHITE, LIGHT_GRAY, DARK_TEXT, SUBTITLE_TEXT,
    CARD_BORDER_BLUE, CARD_BORDER_ORANGE, CARD_BORDER_PURPLE, CARD_BORDER_TEAL,
    ACCENT_GREEN, SECTION_LABEL_BG, BADGE_BG, BADGE_TEXT,
    STICKY_HIGH, STICKY_MED, STICKY_LOW,
    BADGE_HIGH_BG, BADGE_HIGH_TX, BADGE_MED_BG, BADGE_MED_TX, BADGE_LOW_BG, BADGE_LOW_TX,
    add_rounded_rect, add_text_box, add_circle_number,
    add_section_header, add_process_card, add_flow_arrow, add_down_arrow,
    add_foundation_bar, add_slide_header, add_stickiness_legend,
)


# ── Main Presentation ────────────────────────────────────────────────────────

prs = Presentation()
prs.slide_width = Inches(16)
prs.slide_height = Inches(9)


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 1: SYNOPSYS — VERTICAL PIPELINE LAYOUT
#
# Two tall parallel columns flowing TOP-TO-BOTTOM:
#   Left:  DESIGN PIPELINE (Synthesis → P&R → Signoff → Phys Verif)
#   Right: VERIFICATION CONTINUUM (Simulation → Formal → Debug → Emulation)
#
# Horizontal arrows connect left↔right showing parallel tracks.
# Foundation bars at bottom: DesignWare IP + TCAD/SLM
# ═══════════════════════════════════════════════════════════════════════════════

slide1 = prs.slides.add_slide(prs.slide_layouts[6])
bg1 = slide1.background.fill
bg1.solid()
bg1.fore_color.rgb = DARK_BG

add_slide_header(slide1, "SYNOPSYS EDA",
                 "Process Architecture",
                 "8 core areas  |  RTL to GDSII  |  vs. Cadence / Siemens EDA",
                 accent_color=ACCENT_GREEN)

# Stickiness legend
add_stickiness_legend(slide1, Inches(12.7), Inches(0.15))

# ── Layout: Two vertical columns ──
LEFT_X = Inches(0.5)
LEFT_W = Inches(7.1)
RIGHT_X = Inches(8.4)
RIGHT_W = Inches(7.1)
CARD_H = Inches(1.35)       # Same as ServiceNow card_height
SEC_H = Inches(0.35)        # Same as ServiceNow section_h
GAP = Inches(0.12)          # Same as ServiceNow gap

# ═══ LEFT COLUMN: DESIGN PIPELINE ═══
y_left = Inches(1.2)
add_section_header(slide1, LEFT_X, y_left, LEFT_W, SEC_H,
                   "DESIGN PIPELINE  —  RTL to GDSII", "Sequential")
y_left += SEC_H + GAP

left_cards = [
    (1, "Logic Synthesis",
     "RTL → gate-level netlist. SDC constraints (Synopsys-created IEEE standard). Technology mapping to foundry PDK. Fusion Compiler unifies with P&R.",
     STICKY_HIGH, "SDC Standard", BADGE_HIGH_BG, BADGE_HIGH_TX),
    (2, "Place & Route",
     "IC Compiler II: floorplanning → placement → CTS → routing. Fusion Compiler merges with synthesis for physical-aware optimization.",
     STICKY_MED, None, None, None),
    (3, "Extraction + Timing Signoff",
     "StarRC parasitic extraction feeds PrimeTime. PrimeTime is foundry-mandated (TSMC, Samsung, Intel). The toll booth — no chip tapes out without it.",
     STICKY_HIGH, "Foundry Req'd", BADGE_HIGH_BG, BADGE_HIGH_TX),
    (4, "Physical Verification",
     "IC Validator: DRC, LVS, ERC. Checks layout against foundry manufacturing rules. Competes with Siemens Calibre (historical leader).",
     STICKY_MED, None, None, None),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(left_cards):
    add_process_card(slide1, LEFT_X, y_left, LEFT_W, CARD_H,
                     num, title, desc, border, badge_text=badge,
                     badge_bg_color=bbg, badge_tx_color=btx)
    y_left += CARD_H

    if i < len(left_cards) - 1:
        ax = LEFT_X + LEFT_W / 2 - Inches(0.09)
        add_down_arrow(slide1, ax, y_left)
        y_left += Inches(0.15) + GAP

# ═══ RIGHT COLUMN: VERIFICATION CONTINUUM ═══
y_right = Inches(1.2)
add_section_header(slide1, RIGHT_X, y_right, RIGHT_W, SEC_H,
                   "VERIFICATION CONTINUUM", "Parallel Track")
y_right += SEC_H + GAP

right_cards = [
    (5, "RTL Simulation",
     "VCS: gold-standard SystemVerilog/UVM simulator. 60-70% of chip design effort is verification. Massive testbench investments lock customers in.",
     STICKY_HIGH, "60-70% Effort", BADGE_HIGH_BG, BADGE_HIGH_TX),
    (6, "Formal Verification",
     "VC Formal: property checking, equivalence checking. SpyGlass: RTL lint, CDC, RDC analysis. Mathematical proof of correctness.",
     STICKY_MED, None, None, None),
    (7, "Debug & Analysis",
     "Verdi: waveform debug across all verification engines. Deep integration with VCS creates unified debug experience. SpyGlass early checks.",
     STICKY_MED, None, None, None),
    (8, "Emulation & Prototyping",
     "ZeBu: hardware emulation ($5-30M systems). HAPS: FPGA prototyping for software bring-up. Multi-year depreciation cycles.",
     STICKY_MED, "Hardware", BADGE_MED_BG, BADGE_MED_TX),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(right_cards):
    add_process_card(slide1, RIGHT_X, y_right, RIGHT_W, CARD_H,
                     num, title, desc, border, badge_text=badge,
                     badge_bg_color=bbg, badge_tx_color=btx)
    y_right += CARD_H

    if i < len(right_cards) - 1:
        ax = RIGHT_X + RIGHT_W / 2 - Inches(0.09)
        add_down_arrow(slide1, ax, y_right)
        y_right += Inches(0.15) + GAP

# ── Horizontal connecting arrows between columns (showing parallel tracks) ──
for row_idx in range(4):
    card_top = Inches(1.2) + SEC_H + GAP + row_idx * (CARD_H + Inches(0.15) + GAP)
    arrow_y = card_top + CARD_H / 2 - Inches(0.09)
    # Left → Right
    add_flow_arrow(slide1, LEFT_X + LEFT_W + Inches(0.15), arrow_y,
                   Inches(0.5), Inches(0.18))
    # Right → Left (feedback)
    shape = slide1.shapes.add_shape(
        MSO_SHAPE.LEFT_ARROW,
        LEFT_X + LEFT_W + Inches(0.15),
        arrow_y + Inches(0.22),
        Inches(0.5), Inches(0.18)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = RGBColor(0x5A, 0x6A, 0x80)
    shape.line.fill.background()

# ── Foundation bars (same style as ServiceNow's NOW PLATFORM bar) ──
found_y = max(y_left, y_right) + Inches(0.08)

add_foundation_bar(slide1, Inches(0.5), found_y, Inches(15),
                   STICKY_HIGH,
                   "DESIGNWARE IP",
                   "USB  •  PCIe  •  DDR  •  Ethernet  •  HDMI  •  ARC Processors  •  RISC-V  •  Security IP  •  Foundation IP  •  Multi-generation lock-in  •  Royalty revenue")

found_y += Inches(0.72)

add_foundation_bar(slide1, Inches(0.5), found_y, Inches(15),
                   STICKY_HIGH,
                   "SENTAURUS TCAD + SLM",
                   "Semiconductor process simulation  •  Device physics for foundries  •  Silicon.da analytics  •  In-chip monitoring  •  Design-to-silicon feedback  •  Upstream advantage")


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 2: CADENCE — HUB-AND-SPOKE / QUADRANT LAYOUT
#
# LARGE central card: Virtuoso + Spectre (THE HUB — analog dominance)
# Four quadrants radiating outward:
#   Top:    DIGITAL IMPLEMENTATION (Genus → Innovus → Cerebrus)
#   Left:   VERIFICATION (Xcelium, JasperGold)
#   Right:  SIGNOFF & ANALYSIS (Tempus, Voltus)
#   Bottom: PCB & SYSTEM (Allegro, Sigrity, Celsius)
# Foundation: Palladium Emulation + Tensilica IP
# ═══════════════════════════════════════════════════════════════════════════════

slide2 = prs.slides.add_slide(prs.slide_layouts[6])
bg2 = slide2.background.fill
bg2.solid()
bg2.fore_color.rgb = DARK_BG

add_slide_header(slide2, "CADENCE DESIGN SYSTEMS",
                 "Process Architecture",
                 "Chip to System  |  Analog-Centric Platform  |  vs. Synopsys / Siemens EDA",
                 accent_color=ACCENT_GREEN)

add_stickiness_legend(slide2, Inches(12.7), Inches(0.15))

# ── Layout constants (using ServiceNow's exact values where possible) ──
margin_left = Inches(0.5)
total_width = Inches(15)
card_height = Inches(1.35)   # Same as ServiceNow
section_h = Inches(0.35)     # Same as ServiceNow
gap = Inches(0.12)           # Same as ServiceNow

# ═══ TOP ROW: DIGITAL IMPLEMENTATION (3 cards horizontal) ═══
y = Inches(1.2)
add_section_header(slide2, margin_left, y, total_width, section_h,
                   "DIGITAL IMPLEMENTATION", "RTL to GDSII")
y += section_h + gap

card_w3 = (total_width - gap * 2) / 3   # Same formula as ServiceNow Section 1

digi_cards = [
    (1, "Genus Synthesis",
     "RTL → gate-level netlist. Competing with Synopsys Design Compiler. Gaining share. Tightly integrated with Innovus downstream.",
     STICKY_MED, None, None, None),
    (2, "Innovus Implementation",
     "Place & route. Concurrent multi-objective optimization (timing, power, area, SI). Leading PPA at advanced nodes. Competes with ICC2.",
     STICKY_MED, None, None, None),
    (3, "Cerebrus AI Explorer",
     "ML-driven autonomous design space exploration. Wraps Genus + Innovus + Tempus + Voltus. Requires full Cadence flow — creates pull-through.",
     STICKY_LOW, "AI/ML", BADGE_LOW_BG, BADGE_LOW_TX),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(digi_cards):
    x = margin_left + i * (card_w3 + gap)
    add_process_card(slide2, x, y, card_w3, card_height,
                     num, title, desc, border, badge_text=badge,
                     badge_bg_color=bbg, badge_tx_color=btx)
    if i < 2:
        add_flow_arrow(slide2, x + card_w3, y + card_height / 2 - Inches(0.09))

y += card_height + Inches(0.15)

# Down arrows from digital row to center hub
for i in range(3):
    ax = margin_left + i * (card_w3 + gap) + card_w3 / 2 - Inches(0.09)
    add_down_arrow(slide2, ax, y - Inches(0.12))

y += Inches(0.18)

# ═══ MIDDLE ROW: LEFT(Verification) + CENTER(Virtuoso Hub) + RIGHT(Signoff) ═══
mid_y = y
side_w = Inches(3.3)
center_w = Inches(7.4)
center_x = margin_left + side_w + Inches(0.25)
right_x = center_x + center_w + Inches(0.25)
side_card_h = Inches(1.1)

# ── LEFT SIDE: VERIFICATION (2 stacked cards) ──
add_section_header(slide2, margin_left, mid_y, side_w, section_h, "VERIFICATION")
vy = mid_y + section_h + gap

verif_cards = [
    (4, "Xcelium Simulation",
     "SystemVerilog/UVM. Mixed-signal co-sim with Spectre is a key differentiator vs. Synopsys VCS.",
     STICKY_MED, None, None, None),
    (5, "JasperGold Formal",
     "Leader in formal verification. Property checking, security, connectivity. Deep methodology lock-in.",
     STICKY_MED, "Leader", BADGE_MED_BG, BADGE_MED_TX),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(verif_cards):
    add_process_card(slide2, margin_left, vy, side_w, side_card_h,
                     num, title, desc, border, badge_text=badge,
                     badge_bg_color=bbg, badge_tx_color=btx)
    if i < 1:
        ax = margin_left + side_w / 2 - Inches(0.09)
        add_down_arrow(slide2, ax, vy + side_card_h)
    vy += side_card_h + Inches(0.28)

# Right arrows from verification to center hub
for row in range(2):
    ay = mid_y + section_h + gap + row * (side_card_h + Inches(0.28)) + side_card_h / 2 - Inches(0.09)
    add_flow_arrow(slide2, margin_left + side_w + Inches(0.04), ay, Inches(0.18), Inches(0.18))

# ── CENTER: VIRTUOSO + SPECTRE HUB (large card) ──
hub_h = Inches(2.55)
hub = add_rounded_rect(slide2, center_x, mid_y, center_w, hub_h,
                       CARD_BG, STICKY_HIGH, Pt(3))

# Hub number circle
circle_size = Inches(0.32)
add_circle_number(slide2, center_x + Inches(0.12), mid_y + Inches(0.12),
                  circle_size, "★", STICKY_HIGH)

# Hub title (11pt bold — same as all cards)
add_text_box(slide2, center_x + Inches(0.5), mid_y + Inches(0.08),
             center_w - Inches(0.6), Inches(0.3),
             "Virtuoso + Spectre  —  Custom / Analog IC Design", font_size=11, color=DARK_TEXT, bold=True)

# Hub badge (same style as ServiceNow badges)
badge_left = center_x + center_w - Inches(1.5)
badge = add_rounded_rect(slide2, badge_left, mid_y + Inches(0.1),
                        Inches(1.35), Inches(0.22), BADGE_HIGH_BG, BADGE_HIGH_TX, Pt(1))
tf = badge.text_frame
tf.word_wrap = False
p = tf.paragraphs[0]
p.text = "~75%+ Share"
p.font.size = Pt(7)
p.font.color.rgb = BADGE_HIGH_TX
p.font.bold = True
p.font.name = 'Segoe UI'
p.alignment = PP_ALIGN.CENTER

# Hub description (8pt — same as all card descriptions)
hub_desc_lines = [
    "Virtuoso Layout Suite: decades of accumulated PCells, design rules. Every foundry delivers analog PDKs targeting Virtuoso first.",
    "Spectre Simulation: foundry-qualified SPICE models validated against Spectre. ADE integration is seamless.",
    "No credible alternative at scale. Synopsys Custom Compiler has minimal share. Switching = re-architecting everything.",
    "Mixed-signal bridge: Xcelium + Spectre co-simulation is a key differentiator — transistor to full-chip in one flow.",
    "As nodes shrink (3nm, 2nm), analog design gets harder — Virtuoso becomes MORE critical, not less. The moat is widening.",
]
desc_y = mid_y + Inches(0.42)
for line in hub_desc_lines:
    add_text_box(slide2, center_x + Inches(0.15), desc_y,
                 center_w - Inches(0.3), Inches(0.3),
                 line, font_size=8, color=SUBTITLE_TEXT)
    desc_y += Inches(0.38)

# ── RIGHT SIDE: SIGNOFF & ANALYSIS (2 stacked cards) ──
add_section_header(slide2, right_x, mid_y, side_w, section_h, "SIGNOFF")
sy = mid_y + section_h + gap

signoff_cards = [
    (6, "Tempus Timing",
     "Static timing analysis. Gaining ground vs. Synopsys PrimeTime. Tighter Innovus integration. Foundries increasingly qualify both.",
     STICKY_MED, "Challenger", BADGE_MED_BG, BADGE_MED_TX),
    (7, "Voltus Power",
     "IR drop, electromigration, dynamic power. Embedded in Innovus for in-design analysis. Standalone for signoff quality.",
     STICKY_MED, None, None, None),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(signoff_cards):
    add_process_card(slide2, right_x, sy, side_w, side_card_h,
                     num, title, desc, border, badge_text=badge,
                     badge_bg_color=bbg, badge_tx_color=btx)
    if i < 1:
        ax = right_x + side_w / 2 - Inches(0.09)
        add_down_arrow(slide2, ax, sy + side_card_h)
    sy += side_card_h + Inches(0.28)

# Left arrows from signoff to center hub
for row in range(2):
    ay = mid_y + section_h + gap + row * (side_card_h + Inches(0.28)) + side_card_h / 2 - Inches(0.09)
    shape = slide2.shapes.add_shape(
        MSO_SHAPE.LEFT_ARROW,
        right_x - Inches(0.22), ay,
        Inches(0.18), Inches(0.18)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = LIGHT_GRAY
    shape.line.fill.background()

# ═══ BOTTOM ROW: PCB & SYSTEM (3 cards horizontal) ═══
bottom_y = mid_y + hub_h + Inches(0.15)

# Up arrows from bottom section to center hub
for i in range(3):
    ax = margin_left + i * (card_w3 + gap) + card_w3 / 2 - Inches(0.09)
    shape = slide2.shapes.add_shape(
        MSO_SHAPE.UP_ARROW, ax, bottom_y - Inches(0.12),
        Inches(0.18), Inches(0.25)
    )
    shape.fill.solid()
    shape.fill.fore_color.rgb = LIGHT_GRAY
    shape.line.fill.background()

bottom_y += Inches(0.18)

add_section_header(slide2, margin_left, bottom_y, total_width, section_h,
                   "PCB & SYSTEM  —  Chip to Board", "Unique to Cadence  |  No Synopsys Equivalent")
bottom_y += section_h + gap

pcb_cards = [
    (8, "Allegro PCB Designer",
     "High-end PCB layout. Dominates complex high-speed boards (networking, server, automotive). Deep constraint management. Library lock-in.",
     STICKY_HIGH, "Dominant", BADGE_HIGH_BG, BADGE_HIGH_TX),
    (9, "Sigrity SI/PI Analysis",
     "Signal integrity, power integrity for PCBs and packages. Closed-loop with Allegro. Pre- and post-layout analysis.",
     STICKY_MED, None, None, None),
    (10, "Celsius Thermal",
     "Electro-thermal simulation across IC, package, board. Full system thermal analysis. Newer product expanding the platform.",
     STICKY_LOW, None, None, None),
]

for i, (num, title, desc, border, badge, bbg, btx) in enumerate(pcb_cards):
    x = margin_left + i * (card_w3 + gap)
    add_process_card(slide2, x, bottom_y, card_w3, card_height,
                     num, title, desc, border, badge_text=badge,
                     badge_bg_color=bbg, badge_tx_color=btx)
    if i < 2:
        add_flow_arrow(slide2, x + card_w3, bottom_y + card_height / 2 - Inches(0.09))

bottom_y += card_height + Inches(0.15)

# ── Foundation bars (SAME style as ServiceNow's NOW PLATFORM bar) ──
add_foundation_bar(slide2, margin_left, bottom_y, total_width,
                   STICKY_HIGH,
                   "PALLADIUM + PROTIUM",
                   "Hardware emulation ($5-30M)  •  FPGA prototyping  •  Multi-year lock-in  •  Co-leader with Synopsys ZeBu  •  Verification IP (VIP)")

bottom_y += Inches(0.72)

add_foundation_bar(slide2, margin_left, bottom_y, total_width,
                   STICKY_MED,
                   "TENSILICA IP + DESIGN IP",
                   "Tensilica DSP/AI processors  •  Interface PHYs (DDR, PCIe, USB)  •  Memory compilers  •  Quantus extraction  •  Pegasus DRC/LVS")


# ═══════════════════════════════════════════════════════════════════════════════
# Save
# ═══════════════════════════════════════════════════════════════════════════════
output_path = "/home/user/train-me-to-be-a-better-financial-analyst/Synopsys_Cadence_Architecture.pptx"
prs.save(output_path)
print(f"Presentation saved to: {output_path}")
