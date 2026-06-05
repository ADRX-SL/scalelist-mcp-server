import { Eyebrow } from "./Eyebrow";

const QUOTES = [
  {
    q: "We replaced two tools and a manual cleanup workflow with one connector. Our SDRs ask for leads in chat and get verified contacts back.",
    name: "[Name]",
    role: "[Role] at [Company]",
  },
  {
    q: "Coverage on European mobiles is the best we've tested. The waterfall really does what it says.",
    name: "[Name]",
    role: "[Role] at [Company]",
  },
  {
    q: "Our AE prep used to take 20 minutes per account. Now it's a one-line prompt before the call.",
    name: "[Name]",
    role: "[Role] at [Company]",
  },
  {
    q: "The fact we only pay when data is found makes the math obvious. We stopped budgeting around platform seats.",
    name: "[Name]",
    role: "[Role] at [Company]",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center sl-reveal">
          <Eyebrow>Customer love</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            What our users say.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {QUOTES.map((t, i) => (
            <figure
              key={i}
              className="sl-reveal flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              <blockquote className="text-lg leading-relaxed text-foreground">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.name.charAt(1) || "•"}
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}