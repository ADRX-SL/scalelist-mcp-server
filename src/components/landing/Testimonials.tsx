export function Testimonials() {
  return (
    <section className="bg-[#FAF7F1] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center md:gap-14">
        <div className="sl-reveal order-2 md:order-1">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Scalelist is a must-have!
          </h2>
          <blockquote className="mt-6 text-lg leading-relaxed text-foreground/80 md:text-xl">
            We've been using Scalelist for six months and are extremely satisfied. The tool is
            powerful and intuitive, and the founders provide outstanding support. What stands out
            is that user feedback is not just heard but actively implemented. Regular updates make
            it even better. If you want to scale efficiently, Scalelist is a must-have!
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <div>
              <div className="text-base font-bold text-foreground">Manuel Drissner</div>
              <div className="text-sm text-muted-foreground">
                Head of Sales @ Consolidate Software
              </div>
            </div>
            <img
              src="https://scalelist.com/wp-content/uploads/2025/09/Manuel-Drissner-company.webp"
              alt="Consolidate Software logo"
              loading="lazy"
              className="ml-2 h-10 w-auto object-contain"
            />
          </figcaption>
        </div>

        <div className="sl-reveal order-1 md:order-2">
          <div
            className="mx-auto flex aspect-square w-full max-w-md items-end justify-center overflow-hidden rounded-[2rem]"
            style={{ background: "#F5C842" }}
          >
            <img
              src="https://scalelist.com/wp-content/uploads/2026/03/Manuel-Drissner.webp"
              alt="Portrait of Manuel Drissner, Head of Sales at Consolidate Software"
              loading="lazy"
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}