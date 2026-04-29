# Design System

> Project: AI Fortune / Palm Reading Website  
> Version: v1.0  
> Status: Approved baseline for design and implementation  
> Intended readers: Product, Design, Frontend, Codex, future AI agents

---

## 0. Document Structure

This document is organized in the following order and must be implemented in the same order:

1. Brand Positioning
2. Color System
3. Typography
4. Icon System
5. Spacing System
6. Component Rules
7. Layout Rules
8. Tone of Voice
9. CTA Writing Rules
10. Do / Don't
11. Page Templates

No section in this document is optional.  
If any future page conflicts with this document, the page must be changed to match the system instead of creating a one-off visual style.

---

## 1. Brand Positioning

### 1.1 Brand Definition

The product style is:

- Premium
- Minimal
- Calm
- Trustworthy
- High-converting

The product is **not**:

- cheap fortune entertainment
- neon AI tool SaaS
- mystical marketplace
- generic startup template
- overloaded landing page

### 1.2 Brand Personality

The site must feel like:

- a private reading space
- an intelligent modern ritual
- a calm AI product with emotional sensitivity

The site must not feel like:

- a mass-market quiz page
- a dark occult store
- a crypto-style AI landing page
- a content farm

### 1.3 Style Direction

Unified style direction for all pages:

**Editorial Ritual Tech**

Definition:

- `Editorial`: strong typography, clear reading rhythm, controlled whitespace
- `Ritual`: subtle mystical cues, emotional depth, symbolic visual language
- `Tech`: clear interactions, product credibility, structured functional UI

### 1.4 Visual Goal

Every page must satisfy all 4 goals:

1. Look premium enough to justify paid readings.
2. Look calm enough to build trust.
3. Look structured enough to feel like a real product.
4. Look distinctive enough to avoid looking like a template.

### 1.5 Product Translation

The design system must support these page types without changing brand style:

- Homepage
- Palm Reading Tool Page
- Online Fortune Telling Page
- Bazi Tool Page
- Feng Shui Tool Page
- Result Page
- Checkout Page
- Article / Horoscope Page

---

## 2. Color System

### 2.1 Core Rule

Use one warm neutral base, one dark text color, and one accent color.  
Do not introduce additional hero accent colors on different pages.

### 2.2 Primary Palette

| Token | Hex | Usage |
|---|---|---|
| `bg.base` | `#F6F1E8` | Default page background |
| `bg.surface` | `#FBF8F2` | Cards, panels, modal surfaces |
| `bg.elevated` | `#FFFFFF` | Inputs, active panels, result sections |
| `text.primary` | `#1C1917` | Primary headings and body text |
| `text.secondary` | `#6B625B` | Secondary copy, helper text |
| `text.tertiary` | `#9A8F86` | Disabled text, subtle metadata |
| `border.default` | `#DED6CC` | Standard borders |
| `border.strong` | `#CBBEAE` | Focused cards, section dividers |
| `accent.primary` | `#B08A4A` | Primary accent, icons, selected states |
| `accent.primary-hover` | `#96723B` | Hover state for accent usage |
| `accent.soft` | `#EEE2C8` | Accent backgrounds, badge fills |
| `ink.inverse` | `#F9F6F1` | Text on dark buttons |
| `ui.success` | `#426B4C` | Success messages |
| `ui.warning` | `#9B6A27` | Warning messages |
| `ui.error` | `#8A3D36` | Error messages |

### 2.3 Background Usage Rules
- `bg.base` is the default background for all marketing and product pages.
- `bg.surface` is used for cards and grouped sections.
- `bg.elevated` is used only when a UI element must feel interactive or layered above content.
- Do not use pure white as the default page background.
- Do not use pure black as the default page background.

### 2.4 Accent Usage Rules

- `accent.primary` is the only branded highlight color.
- It may appear in:
  - active tabs
  - focused borders
  - small icons
  - callout lines
  - subtle dividers
  - selected chips
- It may not appear as:
  - large full-screen gradients
  - loud blocks of background color
  - multiple competing CTA colors

### 2.5 Dark Surface Rules

Dark surfaces are allowed only for:

- primary buttons
- footer
- selected premium pricing card
- result highlight banner

Approved dark surface colors:

- `#1F1A17`
- `#26211D`

Do not use colored dark surfaces such as purple-black or blue-black.

### 2.6 Forbidden Colors

The following are prohibited:

- high-saturation purple
- high-saturation pink
- bright cyan
- bright red hero accents
- blue-purple SaaS gradients
- RGB glow colors

### 2.7 CSS Token Baseline

```css
:root {
  --bg-base: #F6F1E8;
  --bg-surface: #FBF8F2;
  --bg-elevated: #FFFFFF;

  --text-primary: #1C1917;
  --text-secondary: #6B625B;
  --text-tertiary: #9A8F86;

  --border-default: #DED6CC;
  --border-strong: #CBBEAE;

  --accent-primary: #B08A4A;
  --accent-primary-hover: #96723B;
  --accent-soft: #EEE2C8;

  --ink-inverse: #F9F6F1;

  --ui-success: #426B4C;
  --ui-warning: #9B6A27;
  --ui-error: #8A3D36;

  --surface-dark: #1F1A17;
  --surface-dark-2: #26211D;
}
```

---

## 3. Typography

### 3.1 Type Principle

Typography uses one serif family for emotional authority and one sans-serif family for product clarity.

### 3.2 Font Stack

#### Heading Serif

Primary choice:

- `Cormorant Garamond`

Fallback stack:

```css
"Cormorant Garamond", "EB Garamond", Georgia, serif
```

Use for:

- H1
- H2 on editorial sections
- quote lines
- pricing headlines when emotional emphasis is needed

#### Body Sans

Primary choice:

- `Manrope`

Fallback stack:

```css
"Manrope", "Inter", "Segoe UI", Arial, sans-serif
```

Use for:

- body text
- navigation
- labels
- buttons
- forms
- chips
- helper text

### 3.3 Type Scale

#### Desktop

| Token | Size | Line Height | Weight | Usage |
|---|---:|---:|---:|---|
| `display-xl` | 72px | 1.02 | 500 | Homepage hero H1 |
| `display-lg` | 56px | 1.05 | 500 | Tool page hero H1 |
| `heading-xl` | 40px | 1.10 | 500 | Main section titles |
| `heading-lg` | 32px | 1.15 | 500 | Secondary sections |
| `heading-md` | 24px | 1.20 | 600 | Cards and sub-sections |
| `body-lg` | 20px | 1.60 | 400 | Lead paragraph |
| `body-md` | 16px | 1.65 | 400 | Default body |
| `body-sm` | 14px | 1.60 | 500 | Meta and support text |
| `label` | 13px | 1.40 | 600 | Form labels, tabs, chips |

#### Mobile

| Token | Size | Line Height | Weight | Usage |
|---|---:|---:|---:|---|
| `display-xl` | 44px | 1.05 | 500 | Homepage hero H1 |
| `display-lg` | 36px | 1.08 | 500 | Tool page hero H1 |
| `heading-xl` | 30px | 1.15 | 500 | Main section titles |
| `heading-lg` | 24px | 1.20 | 500 | Secondary sections |
| `heading-md` | 20px | 1.25 | 600 | Cards and sub-sections |
| `body-lg` | 18px | 1.60 | 400 | Lead paragraph |
| `body-md` | 16px | 1.65 | 400 | Default body |
| `body-sm` | 14px | 1.60 | 500 | Meta and support text |
| `label` | 12px | 1.40 | 600 | Form labels, tabs, chips |

### 3.4 Typography Rules

- H1 must always use serif.
- H2 may use serif or sans depending on emphasis, but one page may not mix both styles randomly.
- Body text must always use sans.
- Buttons must always use sans.
- All caps are allowed only for micro labels and must use letter spacing `0.08em`.
- Avoid italic paragraph text except for short quote highlights.
- Do not center-align long paragraphs.

### 3.5 Readability Constraints

- Standard body line length: `60–75` characters.
- Maximum content width for long reading blocks: `720px`.
- Hero paragraph max width: `620px`.
- FAQ answer max width: `760px`.

---

## 4. Icon System

### 4.1 Approved Icon Library

All product, marketing, and checkout pages must use **Lucide** as the default and only icon system.

Approved source:

- `https://lucide.dev/icons/`

Rules:

- Do not mix Lucide with Heroicons, Tabler, Feather, Font Awesome, Material Icons, emoji, or custom stock icon packs.
- Do not use filled icon sets alongside Lucide stroke icons.
- If a required symbol does not exist in Lucide, create a minimal custom SVG only after confirming that no Lucide equivalent exists.
- Custom icons must match Lucide stroke weight, corner treatment, and visual simplicity.

### 4.2 Why Lucide Is Mandatory

Lucide matches the product requirements better than heavier or more decorative icon sets because it is:

- light
- clean
- premium
- calm
- neutral enough for trust-oriented product UI

This product must not look playful, corporate-template, or over-illustrated.  
Lucide maintains visual restraint across homepage, tool pages, result pages, and checkout.

### 4.3 Icon Style Rules

All icons must follow these rules:

- stroke-based only
- round linecaps and linejoins only
- no fill-heavy icons
- no 3D icons
- no gradient icons
- no dual-color icons
- no hand-drawn inconsistent icons

Visual goal:

- quiet
- precise
- supportive
- never dominant

### 4.4 Default Icon Sizes

| Usage | Size |
|---|---:|
| inline text icon | 14px |
| button icon | 16px |
| input / chip icon | 16px |
| trust item icon | 18px |
| feature card icon | 20px |
| section lead icon | 24px |
| empty state / upload icon | 28px |
| hero symbolic icon | 32px |

Rules:

- Do not use arbitrary icon sizes.
- Do not scale icons larger than `32px` in standard UI blocks.
- Use larger illustrated symbols only if they are not Lucide UI icons and are treated as artwork, not interface icons.

### 4.5 Stroke Width Rules

Use these stroke widths only:

- `1.75` for `14px–18px` icons
- `1.5` for `20px–24px` icons
- `1.5` for `28px–32px` icons unless visual weight becomes too light

Rules:

- Do not mix noticeably different stroke weights on the same screen.
- Do not use bold or heavy icons to create emphasis.
- Emphasis must come from layout, copy, or accent usage, not thicker icon lines.

### 4.6 Icon Color Rules

Default icon colors:

- standard UI icon: `var(--text-secondary)`
- active / selected icon: `var(--accent-primary)`
- dark surface icon: `var(--ink-inverse)`
- success icon: `var(--ui-success)`
- warning icon: `var(--ui-warning)`
- error icon: `var(--ui-error)`

Rules:

- Icons must not introduce new brand colors.
- Do not color icons blue, purple, or red unless the semantic state explicitly requires warning or error.
- Decorative icons should usually use `text.secondary` or `accent.primary`, never both in the same icon.

### 4.7 Approved Icon Usage by Context

#### Navigation

Use icons sparingly.

- allowed: none or 1 icon in CTA only
- not allowed: icon before every nav link

#### Hero

- allow 1 symbolic icon or 1 lightweight helper icon per action
- do not build hero around a row of random feature icons

#### Trust Bar

- each trust item may use 1 Lucide icon
- all trust icons in the same bar must share size and color

#### Feature Cards

- 1 icon per card
- icon must sit above or to the left of heading
- icon container background is optional, but if used must be subtle and neutral

#### Form Inputs

- 1 leading icon is allowed
- do not place both leading and trailing decorative icons unless one is functional

#### Buttons

- optional single leading or trailing icon
- never use icon-only primary CTA buttons in core conversion flows

#### Result Pages

- icons should support scanability only
- do not insert icons at the start of every paragraph

### 4.8 Canonical Icon Mapping

The following Lucide icons are the default mapping for recurring product concepts:

| Product Concept | Lucide Icon |
|---|---|
| trust / privacy | `Shield` |
| secure payment | `ShieldCheck` |
| instant result | `Zap` |
| personalized reading | `Sparkles` |
| guidance / direction | `Compass` |
| timing / future | `Clock3` |
| love / relationship | `Heart` |
| career / work | `BriefcaseBusiness` |
| self-reflection | `ScanSearch` |
| question prompt | `MessageCircleQuestion` |
| palm upload | `Hand` |
| upload action | `Upload` |
| preview / see sample | `Eye` |
| locked full report | `Lock` |
| unlocked result | `LockOpen` |
| email delivery | `Mail` |
| return / continue | `ArrowRight` |
| checklist / included items | `Check` |
| warning / limit | `TriangleAlert` |
| error / failed state | `CircleAlert` |
| success / completed | `CircleCheckBig` |

Rules:

- Use this mapping by default before inventing a new visual metaphor.
- If multiple teams touch the same concept, they must use the same canonical icon.

### 4.9 Icon Container Rules

When icons appear inside a container:

- small container size: `32px`
- standard container size: `40px`
- large container size: `48px`
- border radius: `10px`, `12px`, or `14px`
- background: `var(--bg-elevated)` or `var(--accent.soft)`
- border: optional `1px solid var(--border-default)`

Rules:

- Do not use loud colored icon tiles.
- Do not use shadows to decorate icon containers.
- Use containers only when the icon needs stronger grouping, not by default everywhere.

### 4.10 Accessibility Rules

- All non-decorative icons must have accessible labels or be paired with visible text.
- Decorative icons must be hidden from assistive technologies.
- Do not rely on icon meaning alone for critical actions or warnings.

### 4.11 Forbidden Icon Patterns

The following are prohibited:

- mixing outline and filled icons on the same screen
- using random icon metaphors for the same feature across pages
- oversized icons inside premium layouts
- animated bouncing icons
- gradient icon strokes
- emoji as UI icons
- stock mystical symbols used as interface controls

### 4.12 Frontend Implementation Rule

Default frontend library:

```tsx
lucide-react
```

Implementation rules:

- import icons from `lucide-react`
- set shared size and stroke values through reusable wrappers
- do not hardcode different icon sizes inline across components
- expose only approved semantic variants in the UI component layer

Recommended wrapper API:

```tsx
<Icon name="Shield" size="md" tone="muted" />
```

Allowed size tokens:

- `xs`
- `sm`
- `md`
- `lg`
- `xl`

Allowed tone tokens:

- `default`
- `muted`
- `accent`
- `inverse`
- `success`
- `warning`
- `error`

---

## 5. Spacing System

### 4.1 Base Unit

Use an `8px` base unit system.  
All padding, margin, gap, and section spacing must derive from this scale.

### 4.2 Spacing Tokens

| Token | Value |
|---|---:|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 24px |
| `space-6` | 32px |
| `space-7` | 40px |
| `space-8` | 48px |
| `space-9` | 64px |
| `space-10` | 80px |
| `space-11` | 96px |
| `space-12` | 120px |

### 4.3 Section Spacing Rules

#### Desktop

- hero top padding: `96px`
- hero bottom padding: `80px`
- standard section vertical padding: `80px`
- dense section vertical padding: `64px`
- major transition section padding: `96px`

#### Mobile

- hero top padding: `56px`
- hero bottom padding: `48px`
- standard section vertical padding: `56px`
- dense section vertical padding: `40px`
- major transition section padding: `64px`

### 4.4 Internal Component Spacing

- card padding large: `32px`
- card padding standard: `24px`
- card padding compact: `16px`
- input horizontal padding: `16px`
- input vertical padding: `14px`
- button horizontal padding: `20px`
- button vertical padding: `12px`

### 4.5 Spacing Rules

- Do not use arbitrary `18px`, `22px`, `26px`, `30px` margins unless required for exact alignment with an existing tokenized component.
- Do not collapse section spacing below `40px` on mobile.
- Do not place two full-width sections with different backgrounds without at least `64px` vertical separation or a clear divider.

---

## 6. Component Rules

### 5.1 Global Component Rules

- Every interactive component must have default, hover, focus, disabled states.
- Focus state must use `2px` visible outline or border emphasis using `accent.primary`.
- No component may rely on shadow only to indicate interactivity.
- Primary action must be visually unique within a given viewport.

### 5.2 Buttons

#### Primary Button

- Height: `48px`
- Padding: `0 20px`
- Border radius: `14px`
- Background: `#1F1A17`
- Text color: `#F9F6F1`
- Font: body sans, `14px`, `600`
- Border: none
- Shadow: none

Hover:

- background changes to `#26211D`

Focus:

- `2px` outline using `accent.primary`

Disabled:

- background `#BFB6AD`
- text `#F3EEE6`

Rules:

- Only one primary button is allowed per section.
- Only one visual primary color is allowed site-wide.
- Do not create alternate blue, purple, or gold-filled CTA buttons.

#### Secondary Button

- Height: `48px`
- Padding: `0 20px`
- Border radius: `14px`
- Background: transparent
- Border: `1px solid var(--border-default)`
- Text color: `var(--text-primary)`
- Font: `14px`, `600`

Hover:

- background `var(--bg-surface)`
- border `var(--border-strong)`

#### Tertiary Text Link Button

- Background: none
- Border: none
- Text color: `var(--text-primary)`
- Font size: `14px`
- Weight: `600`
- Underline on hover only

### 5.3 Inputs

#### Standard Text Input

- Height: `52px`
- Border radius: `16px`
- Background: `var(--bg-elevated)`
- Border: `1px solid var(--border-default)`
- Padding: `0 16px`
- Font: `16px` body sans
- Placeholder color: `var(--text-tertiary)`

Hover:

- border `var(--border-strong)`

Focus:

- border `1px solid var(--accent-primary)`
- outer ring `0 0 0 3px rgba(176, 138, 74, 0.14)`

Error:

- border `1px solid var(--ui-error)`
- helper text in `var(--ui-error)`

#### Multi-line Reading Question Input

- Min height: `136px`
- Border radius: `20px`
- Padding: `18px 18px 16px`
- No resize handle on desktop marketing pages
- Must allow preset chips above or below input

### 5.4 Chips / Preset Prompts

- Height: `36px`
- Padding: `0 14px`
- Border radius: `999px`
- Background: `var(--bg-surface)`
- Border: `1px solid var(--border-default)`
- Font: `13px`, `600`
- Text color: `var(--text-primary)`

Selected:

- background `var(--accent.soft)`
- border `var(--accent.primary)`

Maximum chips per row:

- desktop: `4`
- mobile: `2`

### 5.5 Cards

#### Standard Card

- Background: `var(--bg-surface)`
- Border: `1px solid var(--border-default)`
- Radius: `20px`
- Padding: `24px`
- Shadow: none

#### Feature Card

- Same base as standard card
- Include top icon or label area with `16px` spacing below
- Max 3 feature cards per row on desktop

#### Result Summary Card

- Background: `var(--bg-elevated)`
- Border: `1px solid var(--border-strong)`
- Radius: `24px`
- Padding: `32px`
- Optional top accent line: `2px solid var(--accent-primary)`

### 5.6 Navigation

- Height: `72px`
- Background: transparent over hero; solid `var(--bg-base)` after scroll
- Max nav items: `5`
- Primary CTA in nav: `1`
- Logo must be left-aligned
- Navigation labels must be short: 1 to 3 words only

### 5.7 Section Labels

Use for small context text above headings.

- Font size: `12px`
- Weight: `700`
- Letter spacing: `0.08em`
- Text transform: uppercase
- Color: `var(--text-secondary)`

Allowed examples:

- Palm Reading
- AI Fortune
- How It Works
- Private Reading

### 5.8 Trust Bar

Used below hero or above checkout CTA.

- Display mode: horizontal inline list
- Item count: `3` or `4`
- Gap: `24px`
- Each item contains:
  - simple icon
  - max `4` words

Allowed examples:

- Private by design
- Instant summary
- No app required
- Personalized reading

### 5.9 FAQ Items

- Use accordion
- Item padding: `24px 0`
- Divider: `1px solid var(--border-default)`
- Question font: `18px`, `600`
- Answer font: `16px`, `400`
- Do not use boxed FAQ cards unless page density requires it

### 5.10 Pricing Cards

- Radius: `24px`
- Padding: `32px`
- Standard plan card background: `var(--bg-surface)`
- Featured plan card background: `var(--surface-dark)`
- Featured plan text: `var(--ink-inverse)`
- Featured card may use thin accent border

Only one card may be visually featured on a pricing block.

### 5.11 Upload Zone

For Palm Reading and similar image tools.

- Min height: `220px`
- Border radius: `24px`
- Border: `1.5px dashed var(--border-strong)`
- Background: `var(--bg-surface)`
- Center content with icon, title, helper text, CTA
- Must support drag/drop and button-trigger upload

Error state:

- dashed border becomes `var(--ui-error)`
- inline explanation shown below

### 5.12 Loading State

- Use short text plus subtle animated dots or pulse
- Do not use flashy spinners
- Standard loading copy format:
  - `Reading your question`
  - `Preparing your palm insights`
  - `Finding the strongest pattern`

### 5.13 Result Blocks

Each reading result page must be built using repeatable blocks:

1. Summary
2. Main insight
3. Love / Career / Timing / Self section
4. Reflection prompt
5. Next action CTA

Do not render result pages as one unbroken wall of text.

---

## 7. Layout Rules

### 6.1 Container Widths

| Token | Width | Usage |
|---|---:|---|
| `container-sm` | 720px | Reading content, FAQs |
| `container-md` | 960px | Standard marketing sections |
| `container-lg` | 1120px | Homepage hero and multi-column layouts |
| `container-xl` | 1280px | Only when needed for dense layouts |

Default page container: `1120px`

### 6.2 Grid Rules

#### Desktop

- Default grid: `12 columns`
- Standard gap: `24px`
- Main content sections may use:
  - `6 / 6`
  - `5 / 7`
  - `4 / 8`
  - `8 / 4`

#### Tablet

- Collapse to `8 columns`

#### Mobile

- Collapse to `4 columns`
- Section gap: `16px`

### 6.3 Alignment Rules

- Primary text content must be left aligned.
- Only hero headline and short supporting copy may be center aligned.
- Long-form reading content must never be center aligned.
- Feature card grids must align to a visible shared top edge.

### 6.4 Hero Layout Rules

Homepage hero must use a two-zone layout on desktop:

- left: headline + support copy
- right: interactive widget

Desktop split:

- text column: `5`
- widget column: `7`

Mobile:

- stack vertically
- widget must appear before trust/feature sections

### 6.5 Page Density Rules

- Homepage density: medium
- Tool page density: medium-high
- Result page density: low-medium
- Checkout page density: low

Interpretation:

- Homepage may combine messaging and function.
- Tool page should prioritize steps and actions over storytelling.
- Result page should prioritize reading comfort.
- Checkout page should remove distractions.

### 6.6 Section Ordering Rules

Do not change these default orders without product reason.

#### Homepage

1. Hero
2. Trust bar
3. How it works
4. Main tool / reading entry
5. Supporting tool paths
6. Testimonials or trust proof
7. FAQ
8. Footer

#### Tool Page

1. Hero
2. Tool input area
3. Sample output or explanation
4. Trust / privacy proof
5. FAQ
6. Footer

#### Checkout Page

1. Offer summary
2. What is included
3. Payment module
4. Trust and guarantees
5. FAQ / support

### 6.7 Whitespace Rules

- Every major section must visibly breathe.
- Do not stack more than `3` dense content modules without a whitespace break.
- Do not use full-width background color changes as a substitute for actual spacing.

---

## 8. Tone of Voice

### 7.1 Core Tone

All copy must sound:

- calm
- personal
- clear
- grounded
- quietly confident

All copy must not sound:

- loud
- manipulative
- mystical in a theatrical way
- over-promising
- generic AI marketing

### 7.2 Writing Style Rules

- Use short to medium sentences.
- Prefer concrete emotional clarity over abstract cosmic language.
- Speak as a guide, not as a guru.
- Use “you” more than “we”.
- Avoid exaggerated claims about certainty.

### 7.3 Approved Copy Style

Approved style examples:

- `A personal reading, shaped by your question.`
- `Start with a quick insight. Go deeper when you are ready.`
- `Private by design. Clear by default.`
- `A calmer way to look at love, timing, and next steps.`

### 7.4 Prohibited Copy Style

Do not use:

- `Unlock your cosmic destiny now`
- `The universe has chosen you`
- `100% accurate psychic reading`
- `Instant miracle answers`
- `Your fate is sealed`

### 7.5 Reading Content Tone

Reading outputs must:

- sound observant, not dramatic
- offer perspective, not commands
- stay emotionally specific
- avoid absolute predictions

Use:

- `This suggests`
- `You may be moving through`
- `A stronger pattern here is`
- `This often points to`

Do not use:

- `This will definitely happen`
- `Your future is guaranteed`
- `You must do this`

---

## 9. CTA Writing Rules

### 8.1 CTA Principle

CTA copy must describe the next action clearly.  
Do not use vague, inflated, or gimmicky CTA language.

### 8.2 Primary CTA Rules

Format:

- Verb-first
- 2 to 5 words
- clear action

Approved examples:

- `Start free`
- `Get your reading`
- `Upload your palm`
- `Continue reading`
- `See full report`
- `Unlock full insight`

### 8.3 Secondary CTA Rules

Approved examples:

- `See sample reading`
- `How it works`
- `Ask another question`
- `View pricing`

### 8.4 CTA Restrictions

Do not use:

- `Click here`
- `Submit`
- `Go now`
- `Unlock magic`
- `Reveal your destiny`
- `Buy now` on hero sections

### 8.5 Page-Specific CTA Mapping

#### Homepage

- primary: `Get your reading`
- secondary: `Upload your palm`

#### Palm Tool Page

- primary: `Upload your palm`
- secondary: `See sample reading`

#### Fortune Chat Page

- primary: `Start reading`
- secondary: `Try palm reading`

#### Checkout Page

- primary: `Unlock full report`
- secondary: `Back to summary`

---

## 10. Do / Don't

### 9.1 Do

- Use warm neutral backgrounds.
- Use serif headings and sans body consistently.
- Keep visual hierarchy simple and obvious.
- Build strong whitespace between sections.
- Keep one primary action visible at a time.
- Make forms and tools feel premium and calm.
- Use subtle symbolic graphics only.
- Preserve the same accent color across all pages.
- Keep checkout visually aligned with the rest of the site.

### 9.2 Don't

- Do not use neon purple, bright blue, or cyber gradients.
- Do not use heavy drop shadows.
- Do not use glassmorphism as a default style.
- Do not use multiple highlighted CTA colors on one page.
- Do not use low-quality mystical icons or stock crystal imagery.
- Do not use starfield backgrounds behind body text.
- Do not pack the homepage with too many cards.
- Do not use centered long-form paragraphs.
- Do not use generic SaaS illustration style.
- Do not allow one page to feel like a different brand.

### 9.3 Conversion-Specific Don't

- Do not place more than one major CTA in the hero row.
- Do not hide the first useful interaction below the fold.
- Do not ask for too much information before the first result.
- Do not make checkout visually louder than the reading flow.
- Do not interrupt result reading with noisy banners or popups.

---

## 11. Page Templates

### 10.1 Homepage Template

#### Purpose

- Rank for top-level category intent
- communicate brand value
- provide immediate product entry
- route users to the best next path

#### Primary Keyword Role

- `AI Fortune Teller`

#### Structure

1. Hero
2. Trust bar
3. How it works
4. Main entry module
5. Tool path cards
6. Proof / reassurance
7. FAQ
8. Footer

#### Hero Requirements

- H1 must be serif.
- Hero must include an interactive widget or entry field.
- Hero must include one primary CTA and one secondary CTA only.
- Hero must not be image-only.
- Hero must not rely on long paragraphs to explain the product.

#### Main Entry Module

Must include:

- a question input or guided prompt
- preset chips
- one path to generic reading
- one path to palm upgrade

#### Supporting Tool Path Cards

Allowed cards:

- Palm Reading
- Online Fortune Telling
- Bazi Calculator
- Feng Shui

Rules:

- show max `3` cards in first row
- do not show more than `4` total cards on homepage
- cards must route, not explain everything

### 10.2 Tool Page Template

Applies to:

- `/ai-palm-reading`
- `/online-fortune-telling`
- `/bazi-calculator`
- `/ai-feng-shui`

#### Purpose

- capture intent-specific traffic
- reduce friction to start
- generate first result quickly
- move user toward full reading or paid upgrade

#### Structure

1. Hero with promise
2. Tool input zone
3. Quick result expectation
4. Privacy / trust explanation
5. FAQ
6. Footer

#### Tool Input Zone Rules

- must appear above the fold on desktop
- must appear before explanatory copy on mobile
- must include one obvious primary action
- must include short helper text below input

#### Sample Result Rules

- show structured sample
- max 4 preview blocks
- keep summary short
- preserve some locked value for paid upgrade

### 10.3 Checkout Page Template

#### Purpose

- convert high-intent users
- explain value clearly
- reduce decision friction
- preserve trust

#### Structure

1. Short offer headline
2. Included in your report
3. Pricing / payment module
4. Privacy / guarantee proof
5. Compact FAQ

#### Checkout Rules

- remove full navigation or reduce it to logo + support only
- do not place unrelated tools on checkout
- do not place blog links on checkout
- do not place multiple price offers in first release unless required
- keep total visible choices low

#### Checkout UI Constraints

- content width: `960px`
- primary payment card width: `520px` max
- side reassurance column width: `320px` max
- primary CTA always visible without scrolling on desktop

### 10.4 Result Page Template

Although not requested as a core template, result pages must use the same system.

#### Structure

1. Reading title
2. Summary card
3. Structured reading sections
4. Reflection prompt
5. Upgrade / next action

#### Reading Rules

- use generous spacing
- avoid dashboard-like UI
- avoid tiny text
- keep reading blocks distinct
- use subtle separators

---

## 12. Implementation Notes

### 11.1 Enforcement

This design system is the default source of truth for:

- new pages
- redesign work
- component implementation
- AI-generated UI work

If a future design conflicts with this system, update the system first, then the page.

### 11.2 Non-Negotiable Defaults

These defaults are mandatory:

- one accent color only
- serif headings + sans body
- warm neutral background
- calm, premium interaction design
- one primary CTA per section
- no cheap mystical visual clichés

### 11.3 Developer Hand-off Priority

Implementation order:

1. Define tokens
2. Build typography styles
3. Build button/input/card primitives
4. Build page container/grid system
5. Build homepage hero widget
6. Build tool page template
7. Build checkout template
