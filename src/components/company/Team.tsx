export function Team() {
  return (
    <section className="bg-[#f5f3ef] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-sans inline-block w-fit bg-[#0f0f0f] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#facc15]">
            Our Story
          </span>
          <h2 className="font-display text-[52px] font-bold uppercase leading-[0.9] tracking-tight text-[#0f0f0f] lg:text-[72px]">
            Professional<br />
            <span className="text-[#facc15]">Cleaning &amp; Site</span><br />
            Solutions
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-5">
            <p className="font-sans text-[16px] leading-relaxed text-[#555]">
              GT Site Solutions is a professional cleaning and site services company dedicated to
              helping homes, businesses, and construction projects maintain clean, safe, and
              professional environments. We specialize in pressure washing, window cleaning,
              parking lot cleaning, parking lot striping, and construction site cleanup for both
              residential and commercial clients.
            </p>
            <p className="font-sans text-[16px] leading-relaxed text-[#555]">
              Our goal is simple: deliver reliable service and exceptional results on every project.
              Whether we're restoring the appearance of a home, maintaining a commercial property,
              or preparing a construction site for completion, our team approaches every job with
              professionalism, attention to detail, and pride in our work.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:5127483225"
                className="font-display inline-flex items-center justify-center bg-[#facc15] px-6 py-3.5 text-[14px] font-bold uppercase tracking-[0.06em] text-[#0f0f0f] transition-opacity hover:opacity-90"
              >
                Call (512) 748-3225
              </a>
              <a
                href="mailto:Ruben@gtsitesolutions.com"
                className="font-display inline-flex items-center justify-center border border-[#0f0f0f]/25 px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#0f0f0f] transition-colors hover:border-[#0f0f0f]/50"
              >
                Email Ruben
              </a>
            </div>
          </div>

          <div className="overflow-hidden">
            <img
              src="/before-after/Working.jpg"
              alt="GT Site Solutions team at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
