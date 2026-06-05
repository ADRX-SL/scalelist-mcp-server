const LOGOS = ["Northwind", "Lumen Labs", "Acme Cloud", "Forsyth", "Briskpoint", "Helix.io"];

export function LogoBar() {
  return (
    <section className="border-y border-border bg-muted/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-sm font-medium text-muted-foreground">
          Trusted by fast-growing B2B teams
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          {LOGOS.map((l) => (
            <span
              key={l}
              className="text-lg font-extrabold tracking-tight text-foreground grayscale"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}