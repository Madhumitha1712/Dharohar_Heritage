# DHAROHAR Design Direction

## Stylistic Approaches

### Theme Name: Archive of Light
Very Brief Intro: A sun-washed digital museum language that pairs manuscript warmth with precise contemporary interaction. Ivory space, sandstone accents and quiet gold details create an atmosphere of cultural reverence without nostalgia overload.
Probability: 0.07

### Theme Name: Courtyard Modernism
Very Brief Intro: A modern architectural composition built around courtyards, thresholds and framed views. Large calm planes, offset columns and structural linework make the interface feel like entering a restored monument.
Probability: 0.03

### Theme Name: Night at the Observatory
Very Brief Intro: A cinematic, low-light interpretation of heritage technology with brass, ink and faint constellation lines. It is atmospheric and immersive, but intentionally not the chosen direction for this brief.
Probability: 0.02

## Selected Approach: Archive of Light

### Design Movement
Contemporary Indian editorialism, drawing from museum catalogues, illuminated manuscripts, sandstone façades and the quiet proportion of Mughal and Rajasthani architectural spaces.

### Core Principles
1. Treat whitespace as a carved architectural surface rather than empty background.
2. Pair precise, modern navigation with expressive serif typography and restrained ornamental details.
3. Use material cues—paper grain, sandstone warmth, antique gold and linework—to make digital heritage feel tactile.
4. Keep every interaction calm, purposeful and slightly ceremonial; no dashboard density or futuristic spectacle.

### Color Philosophy
Ivory and parchment form the daylight field so the page feels open and archival. Sandstone and muted ochre anchor content in the physical world of carved stone. Antique gold is used sparingly as a cue for discovery and ceremonial importance, while dark umber supplies legibility and visual gravity. The palette should feel sunlit, hand-held and enduring—not glossy or synthetic.

### Layout Paradigm
An asymmetric, editorial split composition that behaves like a sequence of architectural thresholds: a quiet full-width masthead, a hero with left-side copy and a large unboxed monument on the right, then horizontal bands and offset content rails that reveal the platform's depth. Avoid a centered marketing stack and use vertical rules, cropped borders and framed negative space to guide the eye.

### Signature Elements
- Fine architectural rules and corner marks inspired by jali screens and manuscript framing.
- A recurring circular seal motif used as a navigation cue and section marker.
- Very light paper grain and faint sandstone contour textures behind content, never competing with type.

### Interaction Philosophy
Interactions should feel like turning a page or stepping through a threshold. Hover states reveal a warm gold underline, a small directional shift, or a gentle elevation. Buttons use compact, tactile transitions; the hero model responds to pointer movement without becoming a toy. Placeholder navigation keeps the tone honest with a discreet toast rather than pretending unfinished areas are live.

### Animation
Use slow, low-amplitude movement for the monument and ambient particles, with a 22–30 second full rotation and subtle parallax on pointer move. Page elements enter with short, staggered opacity/translate transitions in the 180–260ms range. Avoid elastic or bouncy motion. Respect prefers-reduced-motion by freezing the model rotation and removing non-essential entrance motion.

### Typography System
Display: Cormorant Garamond, with weight 500–600 and tight line-height for architectural elegance. Body and navigation: DM Sans, with 400–600 weights for clean modern reading. Labels use DM Sans at 10–11px, generous tracking and uppercase. The main hero heading should max out around 68px on wide screens and retain a clear four-line rhythm on desktop.

### Brand Essence
Dharohar is a digital Indian heritage platform for curious travelers, students, researchers and custodians who want to experience the past with more depth; it is different because it unites story, spatial exploration and preservation in one calm, immersive archive.
Personality: considered, luminous, curious.

### Brand Voice
Headlines are evocative but exact. CTAs are invitations rather than sales prompts. Microcopy sounds like a museum guide who respects the visitor's pace.
Example lines:
- “Every monument has another layer.”
- “Begin with a place. Leave with a deeper sense of time.”

### Wordmark & Logo
Use the supplied DHAROHAR wordmark treatment as the visual reference: a lowercase-inspired, hand-drawn Devanagari-leaning wordmark in deep terracotta/umber with a continuous horizontal cap line. Pair it with a small geometric arch/seal mark for the favicon and responsive header state rather than typesetting the name in a default font.

### Signature Brand Color
Burnished Saffron: #B65A3A — a muted terracotta-red that links brick, sandstone and archival pigment while remaining distinctive against ivory.

## Implementation Notes

- Hero model: use a self-contained, stylized Taj Mahal visual centerpiece with slow rotation and interaction affordances. The Sketchfab page is a reference for the subject and presentation only; the linked asset is not downloadable.
- Use the uploaded wordmark image as a visual reference, but recreate the wordmark in editable text/CSS so it remains crisp and responsive.
- Build the first viewport to feel presentation-ready at 1280×720 and remain legible at 375px wide.
- Add a second section visible below the fold so the page feels like a real platform rather than a single hero mockup.
