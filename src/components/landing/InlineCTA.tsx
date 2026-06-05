import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InlineCTA({ eyebrow }: { eyebrow?: string }) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="sl-reveal flex flex-col items-center justify-center gap-3 sm:flex-row">
          {eyebrow && (
            <p className="mb-2 w-full text-center text-sm font-medium text-muted-foreground sm:mb-0 sm:mr-2 sm:w-auto">
              {eyebrow}
            </p>
          )}
          <Button
            asChild
            className="group h-12 w-full rounded-full px-8 text-base font-semibold shadow-[0_10px_28px_-12px_hsl(212_100%_50%/0.6)] sm:w-auto"
          >
            <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
              Get started for free
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 w-full rounded-full border-border bg-background px-8 text-base font-semibold text-foreground hover:bg-muted sm:w-auto"
          >
            <a href="https://form.typeform.com/to/lvQHcXGx">Talk to sales</a>
          </Button>
        </div>
      </div>
    </section>
  );
}