import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "./Eyebrow";

const SCALELIST_MCP_URL = "[SCALELIST_MCP_URL]";

export const FAQS = [
  {
    q: "Which AI clients does the Scalelist MCP server work with?",
    a: "Any MCP-compatible client — Claude Desktop, ChatGPT (via MCP), Cursor, and other assistants that support the Model Context Protocol. Paste the connector URL once and you're live.",
  },
  {
    q: "What can my AI agent actually do with Scalelist?",
    a: "Find verified work emails and mobile numbers, enrich CSVs and LinkedIn URLs, build lead lists from plain-English descriptions, map orgs, draft personalized outreach, prep meeting briefs, and push contacts to your CRM — all in chat.",
  },
  {
    q: "How accurate is the data?",
    a: "We waterfall across multiple providers and verify every result before it reaches your agent. Bounce and wrong-number rates stay low because junk is filtered out before output, and the underlying data is refreshed weekly.",
  },
  {
    q: "How do credits work — do I pay for misses?",
    a: "No. Credits are only spent when verified data is found. If we can't find a valid email or mobile, you're not charged for that contact.",
  },
  {
    q: "Is my data and my prospects' data handled compliantly?",
    a: "Yes. Scalelist is GDPR and CCPA aligned. Your queries and lists are private to your workspace, and we honor data subject rights and Do Not Sell requests.",
  },
  {
    q: "Can it push to my CRM?",
    a: "Yes. The agent can push enriched contacts directly to your CRM, check duplicates, map fields, and tag records — from the same chat.",
  },
  {
    q: "How do I get set up?",
    a: "Create a free account (50 credits, no card), copy your Scalelist MCP URL, paste it into your AI client's connector settings, and start asking. Most teams are live in under five minutes.",
  },
  {
    q: "Is Scalelist a good MCP server for sales and marketing?",
    a: "Yes — Scalelist is purpose-built as an MCP server for sales and marketing teams. The waterfall across multiple verified data providers keeps fill rates high, every result is checked before it reaches your AI assistant, and credits are only spent when verified data is found.",
  },
  {
    q: "Can I use Scalelist as an AI sales assistant?",
    a: "That's exactly the point. Connect Scalelist to your AI client and it becomes an AI sales assistant that can prospect, enrich, write outreach, prep meetings, and push to CRM — all from chat, on top of verified, weekly-refreshed B2B data.",
  },
  {
    q: "How do I use Scalelist for sales in ChatGPT?",
    a: `In ChatGPT's MCP connector settings, paste your Scalelist MCP URL (${SCALELIST_MCP_URL}) and authorize. ChatGPT can then find verified emails and mobiles, enrich contacts, and draft outreach inside the chat. You only pay for verified results, and the data is GDPR & CCPA aligned.`,
  },
  {
    q: "How do I use Scalelist for sales in Claude?",
    a: `Open Claude Desktop, add a new MCP server, and paste ${SCALELIST_MCP_URL}. Claude immediately becomes a sales-ready assistant — ask it to build a lead list, enrich a CSV, or prep your next meeting, and it queries Scalelist's waterfall behind the scenes.`,
  },
  {
    q: "Can Scalelist power an AI SDR agent?",
    a: "Yes. Scalelist is built for MCP for sales AI agents, so any AI SDR agent or autonomous workflow that speaks MCP can plug in. The agent sources prospects, only spends credits on verified hits, and pushes clean records to your CRM — all without the bad-data tax that breaks most SDR automations.",
  },
];

export function FAQ() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center sl-reveal">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}