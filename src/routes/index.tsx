import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoBar } from "@/components/landing/LogoBar";
import { DataQuality } from "@/components/landing/DataQuality";
import { UseCases } from "@/components/landing/UseCases";
import { Testimonials } from "@/components/landing/Testimonials";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { StatsBand } from "@/components/landing/StatsBand";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { ClosingCTA } from "@/components/landing/ClosingCTA";
import { Footer } from "@/components/landing/Footer";
import { useReveal } from "@/components/landing/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Scalelist MCP Server — Verified B2B contacts for your AI agent",
      },
      {
        name: "description",
        content:
          "Connect Scalelist to Claude, ChatGPT, or any MCP client and your AI assistant can find, verify, and enrich B2B contacts without leaving the conversation.",
      },
      {
        property: "og:title",
        content: "Scalelist MCP Server — Verified B2B contacts for your AI agent",
      },
      {
        property: "og:description",
        content:
          "Find verified emails and mobiles, enrich CSVs, prep meetings and push to CRM — all from chat. 50 free credits, no card required.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <DataQuality />
        <UseCases />
        <Testimonials />
        <HowItWorks />
        <StatsBand />
        <Pricing />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
