# Center CTA bands between colored sections

Increase `InlineCTA` vertical padding so the white CTA band roughly matches the height of the surrounding colored sections' whitespace.

## Change

In `src/components/landing/InlineCTA.tsx`:
- `py-4 md:py-6` → `py-20 md:py-28`

Effect: button vertically centered, white band ≈ adjacent colored bands.

## Out of scope

- No background color on InlineCTA
- No padding changes in DataQuality, HowYouCanUseIt, UseCases, Testimonials
