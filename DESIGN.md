# Design System Specification: Cyber-Professional Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Neural Architect"**
This design system moves beyond the "hacker" trope into a sophisticated, high-density editorial experience. It envisions the portfolio not as a website, but as a high-end command interface—a "glass cockpit" for artificial intelligence. By utilizing a "Bento-grid" philosophy paired with aggressive glassmorphism, we create a sense of organized complexity. We break the standard template feel through **intentional asymmetry**: large, high-contrast display typography juxtaposed with tiny, high-density data points, suggesting a mind that handles both massive scale and minute detail.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep obsidian tones, punctuated by high-frequency electric blues.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Structural definition must be achieved through:
1.  **Tonal Shifts:** Placing a `surface-container-high` element against a `surface` background.
2.  **Luminous Depth:** Using `primary` glows (5-10% opacity) to suggest boundaries.
3.  **Backdrop Blurs:** Letting the background colors bleed through frosted layers.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of tinted glass.
*   **Base Layer (`surface` / `#0e0e0e`):** The infinite void.
*   **Section Layer (`surface-container` / `#1a1a1a`):** Defined areas for content groups.
*   **Component Layer (`surface-container-high` / `#20201f`):** Individual cards or interactive elements.
*   **Active Layer (`surface-bright` / `#2c2c2c`):** High-priority or hovered states.

### The "Glass & Gradient" Rule
To achieve "Cyber-Professional" polish, floating elements must use:
*   **Background:** `surface-variant` at 60% opacity.
*   **Effect:** `backdrop-filter: blur(20px)`.
*   **Signature Texture:** Use a subtle linear gradient on primary CTAs from `primary-dim` (#0070eb) to `secondary` (#00d2fd) at a 135-degree angle to simulate light passing through a prism.

---

## 3. Typography
We utilize a dual-font approach to balance brutalist engineering with clean professionalism.

*   **Display & Headlines (`Inter`):** Set with tight tracking (-0.02em). Use `display-lg` (3.5rem) for hero statements to create an authoritative, editorial impact.
*   **Data & Labels (`Space Grotesk`):** Used for technical metadata (e.g., Python, AWS, Model Parameters). This monospaced-leaning font conveys the "Engineer" persona.
*   **The Hierarchy Strategy:** Use "Size Contrast." Pair a `headline-lg` title with a `label-sm` tag immediately above it in `secondary` color. This high-low pairing is a hallmark of high-end digital editorial design.

---

## 4. Elevation & Depth
In this system, "Up" means "Brighter," not "Shadowier."

*   **The Layering Principle:** To lift a card, move from `surface-container-low` to `surface-container-highest`. 
*   **Ambient Shadows:** Traditional black shadows are forbidden. Use "Glow Shadows": a `primary` or `secondary` tint at 4% opacity with a `40px` blur. This simulates the light emitted from an OLED screen.
*   **The "Ghost Border" Fallback:** For accessibility in high-density areas, use a `1px` stroke of `outline-variant` at **15% opacity**. It should feel like a suggestion of an edge, not a hard stop.
*   **Glassmorphism Depth:** Elements higher in the Z-index should have a higher `backdrop-blur` (up to 40px) and a slightly lighter `surface-tint`.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary-dim` to `secondary`), `xl` (1.5rem) roundedness. Add a subtle `0 0 15px` outer glow using the `primary` color.
*   **Secondary (Glass):** `surface-variant` at 40% opacity, `backdrop-blur: 10px`, `outline-variant` ghost border.
*   **Tertiary:** No background, `label-md` typography, `secondary` color, with a 2px underline that expands from center on hover.

### Bento-Box Cards
*   **Style:** `lg` (1rem) rounded corners. No borders.
*   **Content:** High-density info. For example, a "Project Card" should feature a `title-md` header, a `body-sm` description, and a footer row of `Space Grotesk` tech tags.
*   **Interaction:** On hover, the background shifts from `surface-container` to `surface-container-highest` and the `secondary` accent glow intensifies.

### Technical Chips
*   **Visuals:** `sm` (0.25rem) roundedness (sharper than cards). 
*   **Colors:** `surface-variant` background with `on-surface-variant` text.
*   **Icons:** Minimalist 16px glyphs for Python, PyTorch, etc., placed at the leading edge.

### Inputs & Search
*   **Style:** Minimalist underline or "Ghost Box." 
*   **Focus State:** The `outline` transitions to `primary` with a `surface-bright` background shift. Avoid heavy box-shadows; use a subtle "Inner Glow" effect.

### Tooltips
*   **Visuals:** `surface-container-highest` (solid, no blur for readability), `label-sm` text, `0.5rem` padding.

---

## 6. Do's and Don'ts

### Do
*   **Do** use `24` (5.5rem) spacing between major sections to let the high-density components breathe.
*   **Do** use asymmetrical layouts (e.g., a 60/40 split grid where the 40% column contains technical "meta" data).
*   **Do** use `secondary` (#00d2fd) sparingly for "interactive" elements only.
*   **Do** embrace "Information Density." It is okay to show data, as long as the hierarchy (Typography) makes it scannable.

### Don't
*   **Don't** use pure white (#FFFFFF) for body text. Use `on-surface-variant` (#adaaaa) for secondary text to reduce eye strain and maintain the dark-room aesthetic.
*   **Don't** use standard 1px dividers. Use a `1.5` (0.3rem) vertical gap or a subtle color shift.
*   **Don't** use generic icons. Use "Thin-stroke" or "Duo-tone" icons that match the `outline` token weight.
*   **Don't** use sharp 90-degree corners. Everything must feel "milled" and "engineered" with the `DEFAULT` (0.5rem) or `lg` (1rem) radius.