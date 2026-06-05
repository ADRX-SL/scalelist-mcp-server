import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoBar } from "@/components/landing/LogoBar";
import { DataQuality } from "@/components/landing/DataQuality";
import { HowYouCanUseIt } from "@/components/landing/HowYouCanUseIt";
import { ClientsSection } from "@/components/landing/ClientsSection";
import { UseCases } from "@/components/landing/UseCases";
import { Testimonials } from "@/components/landing/Testimonials";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { StatsBand } from "@/components/landing/StatsBand";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ, FAQS } from "@/components/landing/FAQ";
import { ClosingCTA } from "@/components/landing/ClosingCTA";
import { Footer } from "@/components/landing/Footer";
import { useReveal } from "@/components/landing/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scalelist MCP Server — Verified B2B Data for AI Sales Assistants" },
      {
        name: "description",
        content:
          "Scalelist is the MCP server for sales. Connect Claude, ChatGPT, or any MCP client and turn your AI assistant into an AI sales assistant that finds and verifies B2B contacts.",
      },
      { name: "robots", content: "index,follow" },
      {
        property: "og:title",
        content: "Scalelist MCP Server — Verified B2B Data for AI Sales Assistants",
      },
      {
        property: "og:description",
        content:
          "The MCP server for sales. Connect Claude, ChatGPT, or any MCP client and turn your AI assistant into an AI sales assistant with verified B2B contacts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Scalelist MCP Server — Verified B2B Data for AI Sales Assistants",
      },
      {
        name: "twitter:description",
        content:
          "The MCP server for sales. Turn Claude or ChatGPT into an AI sales assistant with verified B2B contacts.",
      },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Scalelist MCP Server",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Scalelist MCP Server is the MCP server for sales — connect Claude, ChatGPT, or any MCP client to find, verify, and enrich B2B contacts inside your AI sales assistant.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
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
        <HowYouCanUseIt />
        <ClientsSection />
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
