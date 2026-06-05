import { Bot, MessageSquare, Plug } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

const CARDS = [
  {
    icon: Bot,
    title: "Scalelist for Claude",
    desc: "Add the MCP server and use Claude for sales: prospect, enrich, and prep calls in chat.",
    alt: "Scalelist MCP server connector running inside Claude as an AI sales assistant",
  },
  {
    icon: MessageSquare,
    title: "Scalelist in ChatGPT",
    desc: "Connect once and use ChatGPT for sales with verified B2B data.",
    alt: "Scalelist MCP connector turning ChatGPT into an AI sales assistant",
  },
  {
    icon: Plug,
    title: "Any MCP client",
    desc: "Cursor and any MCP-compatible AI agent. Built for MCP for sales AI agents.",
    alt: "Scalelist MCP connector working with Cursor and other MCP for sales AI agents",
  },
];

export function ClientsSection() {
  return (
    <section id="clients" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>MCP connector</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            The MCP server for sales that works in any AI assistant
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            One MCP connector. Your whole prospecting stack, inside the assistant you already use.
          </p>
          <div className="mt-8 flex items-center justify-center gap-8 opacity-80">
            <img
              src="https://cdn.simpleicons.org/claude/0f172a"
              alt="Claude logo"
              loading="lazy"
              className="h-7 w-auto"
            />
            <img
              src="https://cdn.simpleicons.org/openai/0f172a"
              alt="OpenAI logo"
              loading="lazy"
              className="h-7 w-auto"
            />
            <img
              src="https://cdn.simpleicons.org/cursor/0f172a"
              alt="Cursor logo"
              loading="lazy"
              className="h-7 w-auto"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="sl-reveal rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"
                role="img"
                aria-label={c.alt}
              >
                <c.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}