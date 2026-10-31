import { Footer } from '@/components/footer'
import { services } from '@/lib/services'
import { site } from '@/lib/site'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Exterior Cleaning Services in Austin, TX',
  description: `Pressure washing, post-construction cleaning, window cleaning, parking lot striping, gutter cleaning, site cleanup and graffiti removal in Austin, TX. Call ${site.phone}.`,
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative bg-[#0f0f0f] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute top-0 left-0 h-full w-[3px] bg-[#3b82f6]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h1 className="font-display max-w-4xl text-[clamp(38px,10vw,52px)] font-bold uppercase leading-[0.95] tracking-tight text-white lg:text-[72px]">
            Exterior Cleaning Services in Austin, TX
          </h1>
          <p className="font-sans mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
            GT Site Solutions works with contractors, property managers and
            homeowners across Austin and the surrounding area. Pick a service to
            see what is included, recent jobs and common questions.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f3ef] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <ul className="divide-y divide-[#d6d3cd] border-y border-[#d6d3cd]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-10"
                >
                  <h2 className="font-display text-[28px] font-bold uppercase leading-tight text-[#0f0f0f] transition-colors group-hover:text-[#3b82f6] lg:text-[34px]">
                    {s.name}
                  </h2>
                  <p className="font-sans max-w-md text-[15px] leading-relaxed text-[#666]">{s.summary}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 bg-[#0f0f0f] px-8 py-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-[24px] font-bold uppercase text-white">Not sure what you need?</h2>
              <p className="font-sans text-[14px] text-white/55">Tell us about the property and we will put a quote together.</p>
            </div>
            <a
              href={site.phoneHref}
              className="font-display inline-flex items-center whitespace-nowrap bg-[#3b82f6] px-6 py-3.5 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-90"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
