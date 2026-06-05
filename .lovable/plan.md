I can see it clearly: in the screenshot, cards with longer titles/descriptions push their “Show prompt” button lower, so the buttons are not on the same horizontal line.

Plan:
1. Update only the use-case prompt cards in `src/components/landing/UseCases.tsx`.
2. Give each collapsed prompt card a fixed/equal base height so all cards in the grid start with the same height.
3. Change the card layout so the action row is pinned to the bottom of that equal-height card, making every “Show prompt” button align across each row.
4. Keep the expanded prompt behavior isolated so opening one card grows only that card downward and does not stretch neighboring cards.

Technical detail:
- Add a responsive `min-h` to `UseCaseCard`.
- Keep the card as `flex flex-col`.
- Keep the content wrapper as `flex-1`.
- Keep the grid using `items-start`.
- Do not change other sections or the Skills cards unless needed for this exact alignment issue.