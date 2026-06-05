import { useEffect, useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "Product", href: "#product" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Docs", href: "https://scalelist.com/docs" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-5 w-5" fill="currentColor" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">Scalelist</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Log in
          </a>
          <Button
            asChild
            className="h-10 rounded-full px-5 shadow-[0_8px_24px_-8px_hsl(212_100%_50%/0.6)]"
          >
            <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
              Try for free
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href="https://app.scalelist.com/auth/login?redirectUrl=%2Fapp%2Fdashboard"
              className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
            >
              Log in
            </a>
            <Button asChild className="mt-2 h-11 w-full rounded-full">
              <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
                Try for free
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}