## Fix "Show prompt" button alignment across cards

The 9 cards in the Prompts grid currently have "Show prompt" buttons at varying vertical positions because titles and descriptions have different line counts. This makes the grid look messy (cf. screenshot).

### What to change (UseCases.tsx only)

Inside `UseCaseCard`, wrap the `<h3>` title and `<p>` description in a `<div className="flex-1">` so it grows to fill available vertical space. Then change the "Show prompt" button's top margin from `mt-4` to `mt-auto` so it always sits at the bottom of each card, aligned across the grid regardless of title/description length.

No other copy, layout, or files are touched.