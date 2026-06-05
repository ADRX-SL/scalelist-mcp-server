## Problem

Switching to the Skills tab inside `UseCases` renders all 29 cards in the DOM, but they're invisible. The cards carry the `sl-reveal` class, which starts at `opacity: 0` and only becomes visible once an `IntersectionObserver` (set up once on home-page mount in `useReveal`) adds `is-visible` to it. Because the Skills cards mount *after* the observer has already scanned the page, they never get observed and stay hidden — that's the "empty section" in the screenshot. The Prompts tab works because it's the default and gets observed on initial load.

## Fix

In `src/components/landing/UseCases.tsx`, remove `sl-reveal` from the card root in both `UseCaseCard` and `SkillCard`. The section header above the grid keeps its own `sl-reveal` for the entry animation, so nothing visual is lost — only the per-card fade-in is dropped, which is what's currently breaking the Skills tab.

No other files change.
