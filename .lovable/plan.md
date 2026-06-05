Fix the CTA spacing mistake by changing only `src/components/landing/InlineCTA.tsx`.

Plan:
1. Replace the oversized CTA wrapper padding `py-20 md:py-28` with smaller vertical padding.
2. Use a compact value around `py-8 md:py-10` so the CTA sits much closer between the surrounding sections, matching the screenshot request to decrease padding.
3. Leave CTA placement, buttons, text, and other landing sections unchanged.