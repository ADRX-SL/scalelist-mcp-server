## Goal

In both the Prompts and Skills grids, every card in a row should have the same collapsed height so the action button ("Show prompt" / "Download Skill") sits on the same line. Expanding one card must still not stretch its siblings (keep current `items-start` behavior).

## Change

File: `src/components/landing/UseCases.tsx`

Normalize the height of the description block so cards with shorter copy match cards with longer copy, while leaving the grid in `items-start` mode.

1. In `UseCaseCard`, change the description `<p>` to reserve room for ~3 lines:
   - add `min-h-[4.5rem]` (≈3 lines at `text-sm` / `leading-relaxed`)
2. In `SkillCard`, apply the same `min-h-[4.5rem]` to its description `<p>`.

No other changes. Grid keeps `items-start`, content area keeps `flex-1`, button row keeps `mt-4`, so:
- collapsed cards align to the same height → buttons on one line
- expanded card grows downward only, siblings stay put
