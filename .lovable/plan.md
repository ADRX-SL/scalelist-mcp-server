## Change (single file: `src/components/landing/UseCases.tsx`)

1. Update the subtitle paragraph: replace "Real prompts your team can paste today..." with "Real prompts and skills your team can paste today. Use Scalelist as an AI prospecting tool — or wire it into your AI SDR agent."

2. Below the subtitle, add a pill-style toggle (matching the "For Sales Teams / For Outbound Agencies" style from Screenshot 2) with two buttons: **Prompts** and **Skills**. Default = Prompts. Selected = solid blue (primary) with white text; unselected = white with border and dark text.

3. Wire the toggle to `useState`. The existing 9-card grid renders only when **Prompts** is selected.

4. When **Skills** is selected, render a same-size section (same container width, same grid layout, same card count placeholder — 9 empty cards or a "Coming soon" placeholder grid identical in dimensions) so the section height stays consistent between tabs.

5. Once you provide the actual SKILLS content, I'll populate the Skills grid in a follow-up.

No other sections, copy, styles, or files change.
