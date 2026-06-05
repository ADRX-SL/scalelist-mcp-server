## Goal
In the "Use cases" grid, the expanded "Show prompt" box currently grows to fit the full multi-line prompt, making cards wildly tall and the section ugly. Cap the prompt box at a small fixed height and let users scroll inside it.

## Change (single file: `src/components/landing/UseCases.tsx`)

On the inner prompt container (the `<div class="relative ... font-mono ...">` that renders `{prompt}`):
- Add `max-h-48` (≈12rem, matches the visual height of the shortest prompts before this change so cards stay compact and uniform).
- Add `overflow-y-auto` so the prompt scrolls inside the box.
- Keep `whitespace-pre-wrap` so line breaks still render.
- Keep the copy button pinned top-right (already `absolute`), so it stays visible while scrolling.
- Keep the Show/Hide toggle and copy-full-prompt behavior unchanged.

No other sections, copy, or styles change.