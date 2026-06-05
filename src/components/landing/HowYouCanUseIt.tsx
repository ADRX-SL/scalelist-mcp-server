import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "./Eyebrow";

type Tab = {
  label: string;
  videoSrc: string;
  videoTitle: string;
  title: string;
  paragraph: string;
  bullets: string[];
};

const TABS: Tab[] = [
  {
    label: "Find phone numbers",
    videoSrc: "https://www.youtube-nocookie.com/embed/4ZZ2qZ6BJZw",
    videoTitle: "Find phone numbers for leads with Claude",
    title: "Find direct phone numbers for your leads in Claude",
    paragraph:
      "Connect the Scalelist MCP to Claude, build a target list in the chat, then ask Claude to find direct, verified phone numbers for every contact — no exports, no second tool.",
    bullets: [
      "Build a company and decision-maker list straight from Claude",
      "Pull direct, verified mobile numbers in bulk, right in the chat",
      "Only spend credits on numbers that are actually found",
    ],
  },
  {
    label: "Find verified emails",
    videoSrc: "https://www.youtube-nocookie.com/embed/I-o2zLIkkao",
    videoTitle: "Find verified emails for leads with Claude",
    title: "Find verified work emails for your leads in Claude",
    paragraph:
      "Ask Claude to enrich your list with verified work emails — flagged valid, risky, or not found — then export to CSV or Google Drive without leaving the conversation.",
    bullets: [
      "Turn a company list into a clean contact spreadsheet",
      "Get verified emails flagged valid or risky; misses cost nothing",
      "Export to CSV or Google Drive in one step",
    ],
  },
];

export function HowYouCanUseIt() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>In Claude</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            How you can use Scalelist in Claude
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Find phone numbers and verified emails for your leads — without leaving the chat.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {TABS.map((t, i) => (
            <button
              key={t.label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                active === i
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_hsl(212_100%_50%/0.6)]"
                  : "border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  active === i
                    ? "bg-primary-foreground text-primary"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {i + 1}
              </span>
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-10 rounded-3xl border border-border bg-card p-6 shadow-sm md:grid-cols-2 md:items-center md:gap-12 md:p-10">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
              {tab.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {tab.paragraph}
            </p>
            <ul className="mt-6 space-y-3">
              {tab.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                  <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
            <div className="relative aspect-video w-full">
              <iframe
                key={tab.videoSrc}
                src={tab.videoSrc}
                title={tab.videoTitle}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            className="group h-12 w-full max-w-xs rounded-full px-6 text-sm font-semibold shadow-[0_10px_28px_-10px_hsl(212_100%_50%/0.65)] sm:w-auto"
          >
            <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
              Get started for free
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full max-w-xs rounded-full border-border bg-background px-6 text-sm font-semibold sm:w-auto"
          >
            <a href="https://form.typeform.com/to/lvQHcXGx?typeform-source=scalelist.com">
              Talk to sales
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}