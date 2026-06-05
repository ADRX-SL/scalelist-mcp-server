import { useState } from "react";
import { ChevronDown, Copy, Check } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const SKILLS: { title: string; desc: string; example: string }[] = [
  { title: "Define your ICP", desc: "Define and prioritize a narrow ideal customer profile for outbound.", example: "Define a narrow ICP for [product] — which company types get the most value and should we target first?" },
  { title: "Define the buyer persona", desc: "Pick the exact title and seniority to reach out to.", example: "Who should I email at [company type] for [product] — which title is the real decision-maker?" },
  { title: "Identify pain points", desc: "Surface a company's likely pains from signals, hiring, and tech stack.", example: "What pain points does [company] likely face right now, and which ones does [product] solve?" },
  { title: "Find competitors", desc: "Map direct and indirect competitors and differentiation angles.", example: "Who are [company]'s main competitors and how do we position against them in outreach?" },
  { title: "Deep company analysis", desc: "Mine a company's site, case studies, and reviews for buying triggers and language.", example: "Research [company] and pull pain points, buying triggers, and customer language for messaging." },
  { title: "Market research (EDPs)", desc: "Find the Existential Data Points that make a category a must-have.", example: "Research the [category] market and find the EDPs that turn our solution from nice-to-have to must-have." },
  { title: "Find data sources", desc: "Discover B2B data sources with strong buying-intent signals.", example: "Find 3-5 data sources to build a list of [target] with strong buying-intent signals." },
  { title: "List value props", desc: "Inventory every value proposition, mapped to personas and channels.", example: "List all our value props from [website] and map them to personas and outreach channels." },
  { title: "Define the offer", desc: "Turn features into an outcome-led offer for cold outreach.", example: "Turn this feature list into a one-line, outcome-focused offer: [paste features]." },
  { title: "Find campaign angles", desc: "Generate 3 distinct campaign angles for a persona.", example: "Give me 3 distinct campaign angles for [persona] selling [product]." },
  { title: "Architect the campaign", desc: "Design the full outbound sequence, channels, and cadence.", example: "Design an outbound sequence to book meetings with [persona] using email + LinkedIn." },
  { title: "Pressure-test a GTM idea", desc: "Challenge and expand any GTM idea, then give an execution plan.", example: "Here's a campaign idea: [idea]. Challenge it, find the blind spots, and give me an execution plan." },
  { title: "First-touch cold email", desc: "Write a high-converting first cold email.", example: "Write my first cold email to [persona] selling [product]." },
  { title: "Follow-up email", desc: "Write a fresh follow-up after no reply, with a new angle.", example: "They didn't reply — write a follow-up with a brand-new angle for [persona]." },
  { title: "IC email sequence", desc: "3-email sequence for individual contributors (SDR/AE/etc.).", example: "Write a 3-email sequence for [IC persona, e.g. SDR] selling [product]." },
  { title: "Manager email sequence", desc: "3-email sequence calibrated for manager-level buyers.", example: "Write a 3-email sequence for a [Sales/Marketing] Manager selling [product]." },
  { title: "VP email sequence", desc: "3-email sequence calibrated for VP-level buyers.", example: "Write a 3-email sequence for a VP of [function] selling [product]." },
  { title: "Analyze & score a cold email", desc: "Score outreach against reply-rate criteria and rewrite it.", example: "Score this cold email and rewrite it for a higher reply rate: [paste email]." },
  { title: "Refine outreach copy", desc: "Audit any email or sequence against a checklist and fix every issue.", example: "Refine this cold email against best practices and tell me what was wrong: [paste]." },
  { title: "Design a CTA", desc: "Create value-based CTAs that spark replies instead of demanding a meeting.", example: "Give me a better CTA than \"book a demo\" for this email: [paste]." },
  { title: "LinkedIn outreach angle", desc: "Find the best attack angle from a LinkedIn profile.", example: "Here's a LinkedIn profile: [URL]. What's the best outreach angle and a ready-to-use hook?" },
  { title: "LinkedIn DM sequence", desc: "2-message LinkedIn sequence to send after a connection is accepted.", example: "Write a LinkedIn DM sequence to send after they accept my request, for [persona]." },
  { title: "Cold call script", desc: "Generate a structured cold call script from a target description.", example: "Write a cold call script for [persona] at [company type], including openers and objection handling." },
  { title: "Handle a reply", desc: "Craft the right response to any prospect reply.", example: "A prospect replied \"[their reply]\" — how should I respond to move it forward?" },
  { title: "Benchmark outbound stats", desc: "Compare your reply/open/acceptance rates against real benchmarks.", example: "Is a [X]% reply rate good for cold email? Benchmark my campaign and tell me what to fix." },
  { title: "Detect CRM duplicates", desc: "Find, score, and resolve duplicate contacts and accounts.", example: "Find duplicate contacts in this CRM export and give me a merge plan: [attach CSV]." },
  { title: "Scrape a website", desc: "Extract structured data from any site into a clean CSV.", example: "Scrape [URL] and export [what to extract] into a CSV." },
  { title: "Optimize a prompt", desc: "Turn a rough prompt into a production-ready one for Claude.", example: "Make this prompt better and explain your changes: [paste prompt]." },
  { title: "Build an MCP server", desc: "Guidance to build a high-quality MCP server for any API or service.", example: "Help me build an MCP server for [service/API] with well-designed tools." },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>Skills</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Cold email & cold calling skills
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Ready-to-run skills for every step of outbound — from ICP to the call.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((s, i) => (
            <SkillCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, desc, example }: { title: string; desc: string; example: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(example);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="sl-reveal flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {open ? "Hide example" : "Show example"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <button
          type="button"
          onClick={onCopy}
          aria-label="Copy example"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:underline"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-h-48 overflow-y-auto whitespace-pre-wrap rounded-xl border border-border bg-muted/50 p-4 font-mono text-sm leading-relaxed text-foreground">
            {example}
          </div>
        </div>
      </div>
    </div>
  );
}