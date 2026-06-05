import { Zap } from "lucide-react";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Email & Phone Finder", href: "#product" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Help Center", href: "https://scalelist.com/docs" },
      { label: "API Docs", href: "https://scalelist.com/docs" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Talk to Sales", href: "https://form.typeform.com/to/lvQHcXGx" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-5 w-5" fill="currentColor" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                Scalelist
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Verified B2B emails, mobile numbers, and clean CRM data — for humans and AI agents.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Scalelist.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-foreground">
              Do Not Sell My Contact Information
            </a>
            <a href="#" className="hover:text-foreground">
              Legal &amp; Privacy Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}