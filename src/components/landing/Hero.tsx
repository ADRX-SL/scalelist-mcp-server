import { ArrowRight, Play, Star, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "./Eyebrow";
import { CopyField } from "./CopyField";

const SCALELIST_MCP_URL = "https://mcp.scalelist.com/sse";
const DEMO_VIDEO_URL = "#";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* faint hero wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-[600px] max-w-5xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, hsl(212 100% 50% / 0.10), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>MCP Server for Sales</Eyebrow>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-7xl">
            Your AI agent just learned
            <br />
            <span className="text-primary">how to prospect.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Scalelist is the MCP server for sales — connect it to Claude, ChatGPT, or any MCP
            client and turn your AI assistant into an AI sales assistant that finds, verifies, and
            enriches B2B contacts without leaving the chat.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              className="group h-14 w-full rounded-full px-8 text-base font-semibold shadow-[0_12px_30px_-10px_hsl(212_100%_50%/0.65)] sm:w-auto"
            >
              <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
                Get started for free
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* connector card */}
          <div className="mt-10 w-full max-w-2xl rounded-2xl border border-border bg-card p-5 text-left shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Paste this URL into your AI connector:
              </p>
              <a
                href="https://scalelist.com/docs"
                className="text-xs font-semibold text-primary hover:underline"
              >
                How to use ↗
              </a>
            </div>
            <div className="mt-3">
              <CopyField value={SCALELIST_MCP_URL} />
            </div>
          </div>

          {/* trust badges */}
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <li className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> 50 free credits
            </li>
            <li className="inline-flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-primary" /> No credit card
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> GDPR &amp; CCPA compliant
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href={DEMO_VIDEO_URL}
              className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Play className="h-3.5 w-3.5" fill="currentColor" />
              </span>
              Watch demo · 30s
            </a>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">
              <Star className="h-3.5 w-3.5 fill-primary text-primary" /> 4.8 on Google
              <span className="text-muted-foreground">[CONFIRM_RATING]</span>
            </span>
          </div>
        </div>

        {/* hero screenshot placeholder */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 -top-10 bottom-10 -z-10 rounded-[3rem]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, hsl(212 100% 50% / 0.15), transparent 70%)",
            }}
          />
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  const rows = [
    { name: "Sarah Chen", title: "VP Marketing", company: "Northwind SaaS", verified: true },
    { name: "James Okafor", title: "Head of Growth", company: "Lumen Labs", verified: true },
    { name: "Priya Natarajan", title: "Director, Demand Gen", company: "Acme Cloud", verified: true },
    { name: "Mateo Alvarez", title: "Marketing Lead", company: "Briskpoint", verified: true },
    { name: "Linnea Holm", title: "VP Marketing", company: "Forsyth", verified: true },
  ];
  return (
    <div className="bg-background p-4 md:p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-muted" />
        <span className="h-3 w-3 rounded-full bg-muted" />
        <span className="h-3 w-3 rounded-full bg-muted" />
        <div className="ml-4 hidden h-7 flex-1 rounded-md border border-border bg-muted/50 sm:block" />
      </div>
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-12 gap-2 border-b border-border bg-muted/40 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <div className="col-span-4">Name</div>
          <div className="col-span-3 hidden md:block">Title</div>
          <div className="col-span-3 hidden md:block">Company</div>
          <div className="col-span-2 text-right">Status</div>
          <div className="col-span-8 md:hidden">Title · Company</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-12 items-center gap-2 border-b border-border px-4 py-3 text-sm last:border-0"
          >
            <div className="col-span-4 font-medium text-foreground">{r.name}</div>
            <div className="col-span-3 hidden text-muted-foreground md:block">{r.title}</div>
            <div className="col-span-3 hidden text-muted-foreground md:block">{r.company}</div>
            <div className="col-span-8 text-xs text-muted-foreground md:hidden">
              {r.title} · {r.company}
            </div>
            <div className="col-span-2 flex justify-end">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                <ShieldCheck className="h-3 w-3" /> Verified
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}