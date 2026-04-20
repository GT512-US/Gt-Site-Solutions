export function ContactSection() {
  return (
    <section className="bg-[#f5f3ef] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-8 bg-[#0f0f0f] px-8 py-10 sm:flex-row sm:items-center lg:px-12 lg:py-12">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#3b82f6]">
              Get In Touch
            </span>
            <h3 className="font-display mt-2 text-[32px] font-bold uppercase leading-tight text-white lg:text-[40px]">
              Ready to Transform<br />Your Property?
            </h3>
            <p className="font-sans mt-2 text-[14px] text-white/45">
              Contact us today — no obligation, just honest pricing.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="tel:5127483225"
              className="font-display inline-flex items-center justify-center bg-[#3b82f6] px-8 py-4 text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-90"
            >
              (512) 748-3225
            </a>
            <a
              href="mailto:Ruben@gtsitesolutions.com"
              className="font-sans inline-flex items-center justify-center border border-white/25 px-8 py-4 text-[13px] text-white/70 transition-colors hover:border-white/50 hover:text-white"
            >
              Ruben@gtsitesolutions.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
