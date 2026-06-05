# Add 3 CTA blocks to the landing page

Fill the longest CTA-dead stretches with consistent "Get started for free" + "Talk to sales" button pairs, matching the existing Hero/HowItWorks style (primary blue pill + white outline pill).

## CTAs to add

**1. After `DataQuality` section**
- Primary: `Get started for free` → `https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard`
- Secondary: `Talk to sales` → `https://form.typeform.com/to/lvQHcXGx`
- Placement: centered, just before `HowYouCanUseIt`

**2. After `UseCases` section**
- Same two buttons
- Placement: centered, just before `Testimonials`

**3. After `FAQ` section**
- Same two buttons, with small lead-in line: "Still have questions?"
- Placement: centered, just before `ClosingCTA`

## Implementation

- Create one shared component `src/components/landing/InlineCTA.tsx` accepting an optional `eyebrow` prop, rendering the two buttons exactly like the pair at the bottom of `HowItWorks.tsx` (same classes, same links, same shadow).
- Mount it from `src/routes/index.tsx` between the three section pairs above — no edits inside the section components themselves.
- Reuse existing tokens (`primary`, `border`, `muted`); no new colors.
- Add `sl-reveal` class for the existing scroll-reveal animation.

## Out of scope

- Per-card CTAs in `ClientsSection`
- Navbar CTA changes
- Testimonials CTA
- Copy or layout changes to existing sections
