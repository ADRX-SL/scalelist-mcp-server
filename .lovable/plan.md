## Problem

The grid uses CSS Grid defaults, so all cards in the same row share the tallest row height. Expanding "Show prompt" on one card stretches its siblings to match (screenshots 1–2). Desired behavior: only the clicked card grows; siblings keep their natural height (screenshots 3–4).

## Fix

In `src/components/landing/UseCases.tsx`, add `items-start` to both grid containers (the Prompts grid and the Skills grid). This makes each card align to the start of its row track and size to its own content instead of stretching to the row's max height.

No other changes.
