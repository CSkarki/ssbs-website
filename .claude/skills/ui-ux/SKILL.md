# UI/UX Skill

Provides design-system expertise and code guidance for the Turnify B2B Return Portal. Use when implementing or reviewing UI, styling, accessibility, or UX patterns so work stays consistent and on-brand.

## Description

Guides UI implementation using the portal’s design system: color palette, typography, spacing, components, and patterns. Use when building or refactoring pages, components, forms, or layouts, or when answering questions about look-and-feel, accessibility, or UX best practices.

## Use Cases

- "Style this component to match the portal"
- "What colors/spacing should I use?"
- "Make this form accessible"
- "Redesign this page to match the login/dashboard"
- "Add a new button/card/modal"
- "Fix contrast / focus states"
- "Improve UX for this flow"

## Design System

### Color Palette

| Role | Tailwind | Usage |
|------|----------|--------|
| **Brand primary** | `blue-900`, `blue-600`, `blue-500` | Headers, logo, primary buttons, links, focus rings |
| **Brand light** | `blue-50`, `blue-100` | Page backgrounds, subtle cards, selected states |
| **Neutrals** | `gray-900` (headings), `gray-700` (body), `gray-500` (secondary), `gray-400` (muted) | Text hierarchy |
| **Success** | `green-600`, `green-700` | Success states, "View" / positive actions |
| **Warning / pending** | `orange-500`, `orange-600`, `yellow-600` | Pending approvals, warnings, sync in progress |
| **Destructive** | `red-500`, `red-600` | Logout, errors, reject |
| **Status** | `purple-600`, `purple-400` | Completed, charts |

Use gradients sparingly: e.g. `bg-gradient-to-br from-blue-50 via-white to-purple-50` for page background, `from-blue-50/80 to-white/80` for overlays.

### Typography

- **Page title**: `text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight`
- **Section title**: `text-xl font-bold text-blue-900`
- **Card/panel title**: `text-lg font-bold` or `text-base font-semibold`
- **Body**: `text-base text-gray-700` or `text-gray-500` for secondary
- **Small / captions**: `text-sm text-gray-500` or `text-xs text-gray-400`
- **Uppercase label** (e.g. brand line): `text-sm font-semibold uppercase tracking-widest text-blue-600`

### Spacing & Layout

- **Page padding**: `py-10 px-2 md:px-8`, max-width `max-w-6xl` or `max-w-2xl` for narrow content
- **Section gaps**: `mb-10` between major sections, `gap-8` for card grids
- **Form spacing**: `space-y-6` for form groups, `mb-2` for label-to-input
- **Card padding**: `p-6` or `p-8` for main cards

### Components

- **Cards**: `bg-white rounded-lg shadow-xl` (or `shadow-md`), optional `border border-blue-100`
- **Buttons**  
  - Primary: `bg-blue-900 hover:bg-blue-800 text-white` with `rounded-lg`, `px-4 py-2` or `py-3`  
  - Secondary/warning: `bg-orange-500 hover:bg-orange-600`  
  - Success: `bg-green-600 hover:bg-green-700`  
  - Destructive: `bg-red-500 hover:bg-red-600`  
  - Disabled: `cursor-not-allowed` and muted background
- **Inputs**: `border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`, `px-4 py-3`
- **Labels**: `block text-sm font-medium text-gray-700 mb-2`
- **Icons**: Lucide React; size `h-10 w-10` for feature icons, `h-6 w-6` for inline, `h-4 w-4` for form controls

### Patterns

- **Stat/metric card**: Icon (colored) + large number (`text-3xl font-bold`) + label (`text-base text-gray-500`)
- **Action row**: Horizontal buttons with icon + text + optional subtext (`text-xs`)
- **Selected row**: `bg-blue-50`; unselected hover: `hover:bg-gray-100`
- **Status pills**: Small `rounded-full` dot + label; use semantic colors (yellow pending, green approved, red rejected, blue processing, purple complete)

## Accessibility

- Use semantic HTML: `button` for actions, `label` + `input` with `id`/`htmlFor`, `nav`, `main`, headings in order
- Focus: always use `focus:ring-2 focus:ring-blue-500` (or equivalent) on interactive elements; avoid removing outline without a visible replacement
- Contrast: primary text on `gray-900`/`gray-700`; secondary on `gray-500`; ensure 4.5:1 for normal text
- Loading/disabled: disable buttons with `disabled` and `aria-busy` or `aria-disabled` where appropriate; show loading state (spinner or text)

## UX Guidelines

- **Hierarchy**: One clear H1 per view; support with subtitle or short description
- **Actions**: Primary action one per section (e.g. "Sign In", "Create New Return"); secondary actions clearly styled
- **Errors**: Inline or above form with `text-red-600`; keep message user-friendly and actionable
- **Empty states**: Icon + short message + optional CTA (e.g. "No partner data available")
- **Responsive**: Use `md:` breakpoints for layout (e.g. `md:px-8`, `md:text-5xl`); stack cards on small screens with `flex-wrap`

## Reference Components

- Login: `src/app/login/page.tsx` — card layout, form fields, primary/secondary links
- Dashboard: `src/components/portal/DashboardView.tsx` — hero, stat cards, action buttons, widgets
- Layout: `src/components/portal/PortalLayout.tsx` — header, nav, sync button, user menu
- Item selection: `src/components/portal/ItemSelectionView.tsx` — list rows, selection state, inputs

When suggesting or writing code, prefer Tailwind utility classes and the tokens above; avoid one-off hex values unless the design system doesn’t cover the case.
