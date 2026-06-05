import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClosingCTA() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-muted/60 px-6 py-20 text-center md:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 0%, hsl(212 100% 50% / 0.18), transparent 70%)",
          }}
        />
        <div className="relative">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_12px_40px_-10px_hsl(212_100%_50%/0.7)]">
            <Zap className="h-7 w-7" fill="currentColor" />
          </span>
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            If we can't find the contact, no one else can.
          </h2>
          <p className="mt-5 text-sm font-medium text-muted-foreground md:text-base">
            50 free credits · No credit card · GDPR &amp; CCPA aligned
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              className="group h-14 w-full max-w-sm rounded-full px-10 text-base font-semibold shadow-[0_14px_36px_-10px_hsl(212_100%_50%/0.7)] sm:w-auto"
            >
              <a href="https://app.scalelist.com/auth/signup?redirectUrl=%2Fapp%2Fdashboard">
                Get started for free
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}