"""
ServiceNow Architecture PowerPoint Generator
Uses the shared design system (slide_design_system.py) for visual uniformity
with all other architecture slides.
"""

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE

# Import the shared design system
from slide_design_system import (
    DARK_BG, SECTION_BG, CARD_BG, WHITE, LIGHT_GRAY, DARK_TEXT, SUBTITLE_TEXT,
    CARD_BORDER_BLUE, CARD_BORDER_GREEN, CARD_BORDER_ORANGE, CARD_BORDER_PURPLE,
    CARD_BORDER_TEAL, ACCENT_GREEN, SECTION_LABEL_BG, BADGE_BG, BADGE_TEXT,
    HIGHLIGHT_YELLOW,
    add_rounded_rect, add_text_box, add_circle_number,
    add_section_header, add_process_card, add_flow_arrow, add_down_arrow,
    add_foundation_bar, add_slide_header,
)


# ── Main Presentation ────────────────────────────────────────────────────────

prs = Presentation()
prs.slide_width = Inches(16)
prs.slide_height = Inches(9)

# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 1: Title Slide
# ═══════════════════════════════════════════════════════════════════════════════
slide = prs.slides.add_slide(prs.slide_layouts[6])  # Blank layout

# Background
bg = slide.background.fill
bg.solid()
bg.fore_color.rgb = DARK_BG

# Decorative accent bar at top
top_bar = slide.shapes.add_shape(
    MSO_SHAPE.RECTANGLE, 0, 0, prs.slide_width, Inches(0.06)
)
top_bar.fill.solid()
top_bar.fill.fore_color.rgb = ACCENT_GREEN
top_bar.line.fill.background()

# ServiceNow logo text
add_text_box(slide, Inches(1.2), Inches(2.5), Inches(13.6), Inches(0.6),
             "SERVICENOW", font_size=16, color=ACCENT_GREEN, bold=True)

# Main title
add_text_box(slide, Inches(1.2), Inches(3.0), Inches(13.6), Inches(1.2),
             "Platform Architecture", font_size=44, color=WHITE, bold=True)

# Subtitle
add_text_box(slide, Inches(1.2), Inches(4.2), Inches(10), Inches(0.8),
             "End-to-End IT Service Management  |  12 Core Process Areas  |  Single Platform",
             font_size=16, color=LIGHT_GRAY)

# Decorative line
line = slide.shapes.add_shape(
    MSO_SHAPE.RECTANGLE, Inches(1.2), Inches(5.2), Inches(3), Inches(0.04)
)
line.fill.solid()
line.fill.fore_color.rgb = ACCENT_GREEN
line.line.fill.background()

# Footer
add_text_box(slide, Inches(1.2), Inches(7.5), Inches(6), Inches(0.4),
             "Enterprise Architecture Overview  •  Confidential",
             font_size=10, color=LIGHT_GRAY)


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 2: Full Process Architecture
# ═══════════════════════════════════════════════════════════════════════════════
slide2 = prs.slides.add_slide(prs.slide_layouts[6])

bg2 = slide2.background.fill
bg2.solid()
bg2.fore_color.rgb = DARK_BG

add_slide_header(slide2, "SERVICENOW ITSM",
                 "Process Architecture",
                 "12 core steps  |  Request to Resolve  |  vs. BMC Remedy / Jira Service Management",
                 accent_color=ACCENT_GREEN)

# ── Layout constants ──
margin_left = Inches(0.5)
total_width = Inches(15)
card_height = Inches(1.35)
section_h = Inches(0.35)
gap = Inches(0.12)

y_cursor = Inches(1.2)

# ══ SECTION 1: SERVICE REQUEST ══════════════════════════════════════════════
add_section_header(slide2, margin_left, y_cursor, total_width, section_h,
                   "SERVICE REQUEST  —  Demand Intake", "Steps 1–3")
y_cursor += section_h + gap

card_w = (total_width - gap * 2) / 3

cards_s1 = [
    (1, "Service Catalog", "Self-service portal. Every request type, approval rule, and SLA defined here. Users browse and order like a storefront.", CARD_BORDER_BLUE),
    (2, "Request Fulfillment", "Full lifecycle: submission → approval → assignment → fulfillment. Automated routing via assignment rules. SLA tracking.", CARD_BORDER_BLUE),
    (3, "Knowledge Mgmt", "Deflect tickets before they're created. AI-powered search. Article lifecycle: draft → review → publish → retire.", CARD_BORDER_BLUE),
]

for i, (num, title, desc, color) in enumerate(cards_s1):
    x = margin_left + i * (card_w + gap)
    add_process_card(slide2, x, y_cursor, card_w, card_height,
                     num, title, desc, color)
    if i < len(cards_s1) - 1:
        add_flow_arrow(slide2, x + card_w + Inches(0.0), y_cursor + card_height / 2 - Inches(0.09))

y_cursor += card_height + Inches(0.15)

# Down arrows
for i in range(3):
    x = margin_left + i * (card_w + gap) + card_w / 2 - Inches(0.09)
    add_down_arrow(slide2, x, y_cursor - Inches(0.12))

y_cursor += Inches(0.18)

# ══ SECTION 2: INCIDENT & PROBLEM — The Core Loop ═══════════════════════════
add_section_header(slide2, margin_left, y_cursor, total_width, section_h,
                   "INCIDENT & PROBLEM  —  The Core Loop", "Steps 4–8  |  Hardest to Replace")
y_cursor += section_h + gap

card_w5 = (total_width - gap * 4) / 5

cards_s2 = [
    (4, "Incident Mgmt", "Restore service ASAP. Priority matrix (impact × urgency). Major incident workflow. Parent-child linking.", CARD_BORDER_ORANGE, "CMDB-Linked"),
    (5, "Problem Mgmt", "Root cause analysis. Known errors database. Proactive problem identification. Feeds back to reduce incidents.", CARD_BORDER_ORANGE, None),
    (6, "Change Mgmt", "Standard / Normal / Emergency. CAB workflow. Risk assessment engine. Collision detection. Blackout windows.", CARD_BORDER_ORANGE, "Risk Engine"),
    (7, "Release Mgmt", "Bundle changes into releases. Deployment pipelines. Rollback plans. Environment tracking.", CARD_BORDER_ORANGE, None),
    (8, "CMDB", "Single source of truth. CI relationships & dependencies. Discovery auto-populates. Impact analysis. 12-18 mo. to mature.", CARD_BORDER_ORANGE, "Foundation"),
]

for i, (num, title, desc, color, badge) in enumerate(cards_s2):
    x = margin_left + i * (card_w5 + gap)
    add_process_card(slide2, x, y_cursor, card_w5, card_height,
                     num, title, desc, color, badge_text=badge)
    if i < len(cards_s2) - 1:
        add_flow_arrow(slide2, x + card_w5 + Inches(0.0), y_cursor + card_height / 2 - Inches(0.09))

y_cursor += card_height + Inches(0.15)

# Down arrows
for i in range(5):
    x = margin_left + i * (card_w5 + gap) + card_w5 / 2 - Inches(0.09)
    add_down_arrow(slide2, x, y_cursor - Inches(0.12))

y_cursor += Inches(0.18)

# ══ SECTION 3: OPTIMIZE & GOVERN ════════════════════════════════════════════
add_section_header(slide2, margin_left, y_cursor, total_width, section_h,
                   "OPTIMIZE & GOVERN", "Steps 9–10")
y_cursor += section_h + gap

card_w2 = (total_width - gap) / 2

cards_s3 = [
    (9, "SLA Management", "Define, measure, report. Breach notifications & escalations. OLA and underpinning contracts. Feeds executive dashboards.", CARD_BORDER_PURPLE),
    (10, "Continual Improvement", "CSI register. Improvement initiatives tied to process metrics. Benchmarking against ITIL maturity. Backlog prioritization.", CARD_BORDER_PURPLE),
]

for i, (num, title, desc, color) in enumerate(cards_s3):
    x = margin_left + i * (card_w2 + gap)
    add_process_card(slide2, x, y_cursor, card_w2, card_height,
                     num, title, desc, color)
    if i < len(cards_s3) - 1:
        add_flow_arrow(slide2, x + card_w2 + Inches(0.0), y_cursor + card_height / 2 - Inches(0.09))

y_cursor += card_height + Inches(0.15)

# ══ SECTION 4: NOW PLATFORM FOUNDATION ══════════════════════════════════════
add_foundation_bar(slide2, margin_left, y_cursor, total_width,
                   ACCENT_GREEN,
                   "NOW PLATFORM",
                   "Single data model  •  Workflow engine  •  AI/ML (Now Intelligence)  •  Integration Hub  •  App Engine  •  Security Operations  •  Performance Analytics")


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 3: Detailed Data Flow
# ═══════════════════════════════════════════════════════════════════════════════
slide3 = prs.slides.add_slide(prs.slide_layouts[6])

bg3 = slide3.background.fill
bg3.solid()
bg3.fore_color.rgb = DARK_BG

add_slide_header(slide3, "SERVICENOW ITSM",
                 "Integration & Data Flow Architecture",
                 "",
                 accent_color=ACCENT_GREEN)

# ── Three column layout for integration tiers ──
col_w = Inches(4.7)
col_gap = Inches(0.2)
col_start_y = Inches(1.2)

tiers = [
    ("INBOUND CHANNELS", CARD_BORDER_TEAL, [
        ("Self-Service Portal", "Employee & customer portal with virtual agent chatbot"),
        ("Email & Chat", "Inbound email parsing, Teams/Slack integration, walk-up"),
        ("API / Events", "REST API, MID Server, Event Management, SCCM/Intune feeds"),
        ("Discovery", "Horizontal & vertical probes, cloud discovery, service mapping"),
    ]),
    ("CORE PLATFORM ENGINE", CARD_BORDER_ORANGE, [
        ("Flow Designer", "Low-code workflow automation with reusable actions"),
        ("Assignment Engine", "Round-robin, capacity-based, ML-powered routing"),
        ("SLA Engine", "Retroactive start, pause conditions, breach escalation"),
        ("Predictive Intelligence", "Classification, similarity, regression for auto-triage"),
    ]),
    ("OUTBOUND & REPORTING", CARD_BORDER_PURPLE, [
        ("Notifications", "Multi-channel: email, SMS, push, Teams. Digest rules."),
        ("Integration Hub", "500+ spokes. ServiceNow ↔ Jira, SAP, Workday, AWS"),
        ("Performance Analytics", "Scorecards, breakdowns, time series. Executive dashboards."),
        ("CMDB Health", "Audit, orphan CI detection, staleness scoring, compliance"),
    ]),
]

for col_idx, (tier_title, tier_color, items) in enumerate(tiers):
    x = Inches(0.5) + col_idx * (col_w + col_gap)

    # Tier header
    tier_bar = add_rounded_rect(slide3, x, col_start_y, col_w, Inches(0.38),
                                SECTION_LABEL_BG)
    add_text_box(slide3, x + Inches(0.15), col_start_y + Inches(0.05),
                 col_w - Inches(0.3), Inches(0.3),
                 tier_title, font_size=11, color=WHITE, bold=True)

    item_y = col_start_y + Inches(0.5)
    item_h = Inches(0.95)

    for item_idx, (item_title, item_desc) in enumerate(items):
        card = add_rounded_rect(slide3, x, item_y, col_w, item_h,
                               CARD_BG, tier_color, Pt(2))

        add_text_box(slide3, x + Inches(0.15), item_y + Inches(0.08),
                     col_w - Inches(0.3), Inches(0.28),
                     item_title, font_size=11, color=DARK_TEXT, bold=True)

        add_text_box(slide3, x + Inches(0.15), item_y + Inches(0.38),
                     col_w - Inches(0.3), Inches(0.5),
                     item_desc, font_size=9, color=SUBTITLE_TEXT)

        item_y += item_h + Inches(0.1)

    # Flow arrows between columns
    if col_idx < 2:
        arrow_x = x + col_w + Inches(0.02)
        arrow_y = col_start_y + Inches(2.3)
        add_flow_arrow(slide3, arrow_x, arrow_y, Inches(0.16), Inches(0.2))


# ── Bottom platform bar ──
plat_y = Inches(5.8)
add_foundation_bar(slide3, Inches(0.5), plat_y, total_width,
                   ACCENT_GREEN,
                   "NOW PLATFORM",
                   "Single Table Architecture  •  Update Sets & Scoped Apps  •  Instance Security  •  MID Server  •  Domain Separation")


# ═══════════════════════════════════════════════════════════════════════════════
# SLIDE 4: Key Metrics & Comparison
# ═══════════════════════════════════════════════════════════════════════════════
slide4 = prs.slides.add_slide(prs.slide_layouts[6])

bg4 = slide4.background.fill
bg4.solid()
bg4.fore_color.rgb = DARK_BG

add_slide_header(slide4, "SERVICENOW ITSM",
                 "Implementation Considerations",
                 "",
                 accent_color=ACCENT_GREEN)

# ── KPI Cards ──
kpi_data = [
    ("12–18 mo.", "Typical Implementation", "Full ITSM suite deployment\nwith CMDB maturity"),
    ("40–60%", "Ticket Deflection", "With Knowledge + Virtual Agent\n+ Service Catalog optimization"),
    ("500+", "Integration Spokes", "Pre-built connectors via\nIntegration Hub"),
    ("99.99%", "Platform Uptime SLA", "Enterprise instance with\nhigh availability"),
]

kpi_w = Inches(3.5)
kpi_h = Inches(1.6)
kpi_gap = Inches(0.2)
kpi_y = Inches(1.3)

for i, (value, label, detail) in enumerate(kpi_data):
    x = Inches(0.5) + i * (kpi_w + kpi_gap)
    card = add_rounded_rect(slide4, x, kpi_y, kpi_w, kpi_h,
                           SECTION_BG, CARD_BORDER_TEAL, Pt(1.5))

    add_text_box(slide4, x + Inches(0.25), kpi_y + Inches(0.15),
                 kpi_w - Inches(0.5), Inches(0.5),
                 value, font_size=28, color=ACCENT_GREEN, bold=True)

    add_text_box(slide4, x + Inches(0.25), kpi_y + Inches(0.65),
                 kpi_w - Inches(0.5), Inches(0.3),
                 label, font_size=12, color=WHITE, bold=True)

    add_text_box(slide4, x + Inches(0.25), kpi_y + Inches(1.0),
                 kpi_w - Inches(0.5), Inches(0.5),
                 detail, font_size=9, color=LIGHT_GRAY)

# ── Comparison Table ──
table_y = Inches(3.3)
add_text_box(slide4, Inches(0.5), table_y, Inches(10), Inches(0.4),
             "Platform Comparison", font_size=16, color=WHITE, bold=True)

table_y += Inches(0.5)
cols = 4
rows = 7
tbl_w = Inches(15)
tbl_h = Inches(4.0)

table_shape = slide4.shapes.add_table(rows, cols, Inches(0.5), table_y, tbl_w, tbl_h)
table = table_shape.table

# Column widths
table.columns[0].width = Inches(3.5)
table.columns[1].width = Inches(3.8)
table.columns[2].width = Inches(3.8)
table.columns[3].width = Inches(3.9)

headers = ["Capability", "ServiceNow", "BMC Remedy", "Jira Service Mgmt"]
data_rows = [
    ["CMDB / Asset DB", "Native CMDB with Discovery", "Atrium CMDB", "Assets (limited CMDB)"],
    ["Workflow Engine", "Flow Designer (low-code)", "Digital Workplace", "Jira Automation"],
    ["AI / ML", "Now Intelligence (built-in)", "BMC Helix AI", "Atlassian Intelligence"],
    ["Integration", "Integration Hub (500+ spokes)", "Integration Studio", "Marketplace + REST"],
    ["Scalability", "Enterprise (Fortune 500)", "Enterprise (legacy heavy)", "Mid-market / Dev teams"],
    ["Total Cost", "$$$ (premium)", "$$$$ (legacy overhead)", "$ – $$ (competitive)"],
]

for col_idx, header in enumerate(headers):
    cell = table.cell(0, col_idx)
    cell.text = header
    cell.fill.solid()
    cell.fill.fore_color.rgb = SECTION_LABEL_BG
    for paragraph in cell.text_frame.paragraphs:
        paragraph.font.size = Pt(10)
        paragraph.font.color.rgb = WHITE
        paragraph.font.bold = True
        paragraph.font.name = 'Segoe UI'

for row_idx, row_data in enumerate(data_rows):
    for col_idx, cell_text in enumerate(row_data):
        cell = table.cell(row_idx + 1, col_idx)
        cell.text = cell_text
        cell.fill.solid()
        cell.fill.fore_color.rgb = RGBColor(0x14, 0x1E, 0x33) if row_idx % 2 == 0 else SECTION_BG
        for paragraph in cell.text_frame.paragraphs:
            paragraph.font.size = Pt(9)
            paragraph.font.color.rgb = RGBColor(0xCC, 0xCC, 0xCC)
            paragraph.font.name = 'Segoe UI'
            if col_idx == 1:  # Highlight ServiceNow column
                paragraph.font.color.rgb = ACCENT_GREEN
                paragraph.font.bold = True


# ═══════════════════════════════════════════════════════════════════════════════
# Save
# ═══════════════════════════════════════════════════════════════════════════════
output_path = "/home/user/train-me-to-be-a-better-financial-analyst/ServiceNow_Architecture.pptx"
prs.save(output_path)
print(f"Presentation saved to: {output_path}")
