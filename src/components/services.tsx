import { Briefcase, Grid3X3, Home, MapPin, Truck } from 'lucide-react'
import Link from 'next/link'

const nonFeatured = [
  {
    title: 'Construction Cleans',
    slug: 'post-construction-cleaning',
    description: 'Complete construction cleaning services from rough to final',
    bullets: ['Rough clean during construction', 'Final detailed cleaning for handover', 'Job trailer cleans', 'Debris removal'],
    shortDesc: 'Rough to final clean for job sites',
    icon: Briefcase,
  },
  {
    title: 'Window Cleaning',
    slug: 'window-cleaning',
    description: 'Crystal clear windows inside and out',
    bullets: ['Interior window cleaning', 'Exterior window washing', 'Hardwater removal', 'Screen cleaning & frames'],
    shortDesc: 'Crystal clear, inside and out',
    icon: Grid3X3,
  },
  {
    title: 'Parking Services',
    slug: 'parking-lot-striping',
    description: 'Complete parking lot maintenance solutions',
    bullets: ['Parking lot striping', 'Curb stop installation', 'Signage installation', 'ADA compliance marking'],
    shortDesc: 'Striping, curb stops & ADA',
    icon: MapPin,
  },
  {
    title: 'Gutter Cleaning',
    slug: 'gutter-cleaning',
    description: 'Protect your property with clean gutters',
    bullets: ['Debris removal', 'Downspout clearing', 'Gutter inspection', 'Minor repair services'],
    shortDesc: 'Debris removal & inspection',
    icon: Home,
  },
  {
    title: 'Site Services',
    slug: 'site-cleanup',
    description: 'Complete site maintenance and cleanup',
    bullets: ['Site clean up services', 'Debris haul off', 'Property maintenance', 'Parking lot sweeping'],
    shortDesc: 'Complete site maintenance, cleanup & debris haul-off',
    icon: Truck,
  },
]

function DesktopCard({ title, slug, description, bullets, icon: Icon }: typeof nonFeatured[0]) {
  return (
    <div className="flex h-full flex-col gap-5 bg-white p-10">
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3b82f6]">
        <Icon className="h-3.5 w-3.5 text-[#0f0f0f]" />
      </div>
      <h3 className="font-display text-[22px] font-bold uppercase leading-tight text-[#0f0f0f]">
        <Link href={`/services/${slug}`} className="hover:text-[#3b82f6]">{title}</Link>
      </h3>
      <p className="font-sans text-[13px] leading-relaxed text-[#777]">{description}</p>
      <ul className="flex flex-col gap-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[12px] leading-relaxed text-[#666]">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3b82f6]" />
            {b}
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${slug}`}
        className="font-sans mt-auto w-fit text-[13px] font-semibold text-[#0f0f0f] underline decoration-[#3b82f6] decoration-2 underline-offset-3 hover:opacity-70"
      >
        More about {title.toLowerCase()}
      </Link>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-[#f5f3ef] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <div className="mb-10 lg:mb-16">
          <h2 className="font-display text-[52px] font-bold uppercase leading-[0.9] tracking-tight text-[#0f0f0f] lg:text-[72px]">
            Our{' '}<br />Services
          </h2>
          <p className="font-sans mt-3 max-w-xl text-[15px] leading-relaxed text-[#666]">
            Licensed, insured, and committed to excellence across every job site in Austin and surrounding areas.
          </p>
        </div>

        {/* ── DESKTOP GRID (hidden on mobile) ── */}
        <div className="hidden gap-px bg-[#dbd8d3] lg:grid lg:grid-cols-3">
          <DesktopCard {...nonFeatured[0]} />

          {/* Pressure Washing — featured, center column */}
          <div className="flex flex-col">
            <div className="bg-[#3b82f6] px-6 py-3">
              <span className="font-sans text-[12px] font-bold text-[#0f0f0f]">Most popular</span>
            </div>
            <div className="flex flex-1 flex-col gap-5 bg-[#0f0f0f] p-10">
              <h3 className="font-display text-[28px] font-bold uppercase text-[#3b82f6]">
                <Link href="/services/pressure-washing" className="hover:text-white">Pressure Washing</Link>
              </h3>
              <p className="font-sans text-[13px] leading-relaxed text-white/55">
                Pressure washing and softwashing for all exterior surfaces
              </p>
              <ul className="flex flex-col gap-1.5">
                {['Building exteriors & facades', 'Houses, roofs & driveways', 'Parking garages & structures', 'Surface stain removal'].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[12px] leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3b82f6]" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/services/pressure-washing" className="font-sans mt-auto w-fit text-[13px] font-semibold text-[#3b82f6] underline decoration-[#3b82f6] decoration-2 underline-offset-3 hover:opacity-70">
                More about pressure washing
              </Link>
            </div>
          </div>

          {nonFeatured.slice(1).map((s) => (
            <DesktopCard key={s.title} {...s} />
          ))}
        </div>

        {/* ── MOBILE GRID (hidden on desktop) ── */}
        <div className="grid grid-cols-2 gap-[2px] bg-[#2a2a2a] lg:hidden">
          {/* Featured — full width */}
          <div className="col-span-2">
            <div className="bg-[#3b82f6] px-5 py-3">
              <span className="font-sans text-[12px] font-bold text-[#0f0f0f]">Most popular</span>
            </div>
            <div className="flex flex-col gap-4 bg-[#0f0f0f] p-5">
              <p className="font-display text-[28px] font-bold uppercase text-[#3b82f6]">Pressure Washing</p>
              <p className="font-sans text-[13px] leading-relaxed text-white/55">
                Pressure washing and softwashing for all exterior surfaces — buildings, roofs, driveways, and more.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Building exteriors', 'Roofs & driveways', 'Stain removal'].map((tag) => (
                  <span key={tag} className="font-sans border border-white/20 px-2.5 py-1 text-[11px] text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/services/pressure-washing" className="font-sans text-[13px] font-semibold text-[#3b82f6] underline decoration-[#3b82f6] underline-offset-2 hover:opacity-70">
                More about pressure washing
              </Link>
            </div>
          </div>

          {/* Next four in a 2-col grid */}
          {nonFeatured.slice(0, 4).map((s) => (
            <div key={s.title} className="flex flex-col gap-2 bg-[#0f0f0f] p-4">
              <p className="font-display text-[15px] font-bold uppercase leading-tight text-white">{s.title}</p>
              <p className="font-sans text-[11px] leading-relaxed text-white/45">{s.shortDesc}</p>
              <Link href={`/services/${s.slug}`} className="font-sans mt-auto text-[12px] font-bold text-[#3b82f6] underline decoration-[#3b82f6] underline-offset-2 hover:opacity-70">
                Details
              </Link>
            </div>
          ))}

          {/* Site Services — full width, horizontal */}
          <div className="col-span-2 flex items-end justify-between bg-[#0f0f0f] p-4">
            <div className="flex flex-col gap-1.5">
              <p className="font-display text-[17px] font-bold uppercase text-white">Site Services</p>
              <p className="font-sans text-[11px] leading-relaxed text-white/45">
                Complete site maintenance, cleanup & debris haul-off
              </p>
            </div>
            <Link href="/services/site-cleanup" className="font-sans flex-shrink-0 pl-4 text-[12px] font-bold text-[#3b82f6] underline decoration-[#3b82f6] underline-offset-2 hover:opacity-70">
              Details
            </Link>
          </div>
        </div>

        {/* CTA bar */}
        <div className="mt-[2px] flex items-center justify-between gap-4 bg-[#0f0f0f] px-6 py-7 lg:px-8 lg:py-8">
          <div>
            <h3 className="font-display text-[18px] font-bold uppercase text-white lg:text-[22px]">
              Need a Custom Solution?
            </h3>
            <p className="font-sans text-[13px] text-white/45">
              We offer specialized services for unique projects.
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-3">
            <a
              href="tel:5127483225"
              className="font-display bg-[#3b82f6] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-90"
            >
              <span className="lg:hidden">Call Us</span>
              <span className="hidden lg:inline">(512) 748-3225</span>
            </a>
            <a
              href="mailto:Ruben@gtsitesolutions.com"
              className="font-sans hidden border border-white/25 px-5 py-3 text-[13px] text-white/70 hover:text-white lg:block"
            >
              Ruben@gtsitesolutions.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
