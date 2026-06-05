import { useState } from "react";
import { ChevronDown, Copy, Check } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const CASES = [
  {
    title: "Build a lead list from a description",
    desc: "Describe who you want; the AI finds them and returns a clean table with verified emails and phones.",
    prompt:
      "Find 15 Heads of Marketing at SaaS companies in San Francisco, under 200 employees. Verified emails + mobiles only. Return a clean table.",
  },
  {
    title: "Enrich a CSV without leaving the chat",
    desc: "Drop a CSV of LinkedIn URLs, names, or domains; the AI enriches every row.",
    prompt:
      "Here are 50 LinkedIn URLs from last week's event. Enrich all rows with verified work email and direct mobile. Flag anyone we can't reach.",
  },
  {
    title: "Write outreach that doesn't look like outreach",
    desc: "The AI pulls career history and company context, then writes tailored emails, DMs, or call scripts.",
    prompt:
      "Write a personalized cold email for each of these 10 contacts. I sell [product]. Short, direct, and reference something specific from their career or company.",
  },
  {
    title: "Map an org before your first call",
    desc: "Company or domain in; org chart, hierarchy, and who to contact first out.",
    prompt:
      "Map the GTM team at [company]. Build an org chart from titles and seniority. Tell me who to contact first for a [offer] pitch and why.",
  },
  {
    title: "Build a sequence from scratch",
    desc: "The AI designs timing, channel mix, branches, and a breakup message.",
    prompt:
      "Build a 5-touch sequence for these 20 leads. Email at T1/T3/T5, LinkedIn DM at T2/T4. Personalize every touch using the enriched profile. Breakup message at T5.",
  },
  {
    title: "Prep for a meeting in 30 seconds",
    desc: "LinkedIn URL or name in; a full brief out.",
    prompt:
      "I have a call with [name] at [company] in 10 minutes. Brief me: career path, company context, recent signals, a suggested opener, and 3 questions worth asking.",
  },
  {
    title: "Push to CRM in one prompt",
    desc: "The AI detects your CRM, maps fields, checks duplicates, and pushes.",
    prompt:
      "Push these 20 contacts to my CRM. Tag 'Scalelist Q2 2026'. Check duplicates first. Add the company context as a note on each contact.",
  },
  {
    title: "Source candidates like a headhunter",
    desc: "Describe a role; the AI searches, enriches, and tiers candidates.",
    prompt:
      "Source 15 Senior Backend Engineers, Python, remote France. Enrich with mobile + email. Tier them 1/2/3 with a one-line reason each. Exclude our company.",
  },
  {
    title: "Find contacts that look like your best customers",
    desc: "Share a converted contact; the AI reverse-engineers the ICP and finds lookalikes.",
    prompt:
      "This contact converted last month: [LinkedIn URL]. Reverse-engineer the ICP and find 10 lookalikes. Rank by match score with a one-line reason each.",
  },
];

export function UseCases() {
  return (
    <section id="solutions" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>Use cases</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            One conversation. Your entire prospecting stack.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real prompts your team can paste today. Use Scalelist as an AI prospecting tool — or
            wire it into your AI SDR agent.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c, i) => (
            <UseCaseCard key={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCaseCard({
  title,
  desc,
  prompt,
}: {
  title: string;
  desc: string;
  prompt: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="sl-reveal flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary hover:underline"
      >
        {open ? "Hide prompt" : "Show prompt"}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="relative rounded-xl border border-border bg-muted/50 p-4 pr-12 font-mono text-sm leading-relaxed text-foreground">
            {prompt}
            <button
              type="button"
              onClick={onCopy}
              aria-label="Copy prompt"
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:text-primary"
            >
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
            </button>
            {copied && (
              <span className="absolute -top-2 right-12 rounded-full bg-foreground px-2 py-0.5 text-xs font-medium text-background">
                Copied!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}