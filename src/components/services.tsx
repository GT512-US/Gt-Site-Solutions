'use client'

import { Briefcase, Droplets, Grid3X3, Home, MapPin, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const inView = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

const nonFeatured = [
  {
    id: '01',
    title: 'Construction Cleans',
    description: 'Complete construction cleaning services from rough to final',
    bullets: ['Rough clean during construction', 'Final detailed cleaning for handover', 'Job trailer cleans', 'Debris removal'],
    shortDesc: 'Rough to final clean for job sites',
    icon: Briefcase,
  },
  {
    id: '03',
    title: 'Window Cleaning',
    description: 'Crystal clear windows inside and out',
    bullets: ['Interior window cleaning', 'Exterior window washing', 'Hardwater removal', 'Screen cleaning & frames'],
    shortDesc: 'Crystal clear, inside and out',
    icon: Grid3X3,
  },
  {
    id: '04',
    title: 'Parking Services',
    description: 'Complete parking lot maintenance solutions',
    bullets: ['Parking lot striping', 'Curb stop installation', 'Signage installation', 'ADA compliance marking'],
    shortDesc: 'Striping, curb stops & ADA',
    icon: MapPin,
  },
  {
    id: '05',
    title: 'Gutter Cleaning',
    description: 'Protect your property with clean gutters',
    bullets: ['Debris removal', 'Downspout clearing', 'Gutter inspection', 'Minor repair services'],
    shortDesc: 'Debris removal & inspection',
    icon: Home,
  },
  {
    id: '06',
    title: 'Site Services',
    description: 'Complete site maintenance and cleanup',
    bullets: ['Site clean up services', 'Debris haul off', 'Property maintenance', 'Parking lot sweeping'],
    shortDesc: 'Complete site maintenance, cleanup & debris haul-off',
    icon: Truck,
  },
]

function DesktopCard({ id, title, description, bullets, icon: Icon }: typeof nonFeatured[0]) {
  return (
    <div className="flex flex-col gap-5 bg-white p-10">
      <div className="flex items-start justify-between">
        <span className="font-sans text-[11px] font-semibold text-[#ccc]">{id}</span>
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#facc15]">
          <Icon className="h-3.5 w-3.5 text-[#0f0f0f]" />
        </div>
      </div>
      <h3 className="font-display text-[22px] font-bold uppercase leading-tight text-[#0f0f0f]">
        {title}
      </h3>
      <p className="font-sans text-[13px] leading-relaxed text-[#777]">{description}</p>
      <ul className="flex flex-col gap-1.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-[12px] leading-relaxed text-[#666]">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#facc15]" />
            {b}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="font-sans mt-auto w-fit text-[13px] font-semibold text-[#0f0f0f] underline decoration-[#facc15] decoration-2 underline-offset-3 hover:opacity-70"
      >
        Get Quote →
      </a>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-[#f5f3ef] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <motion.div className="mb-10 lg:mb-16" {...inView}>
          <span className="font-display mb-3 inline-block bg-[#0f0f0f] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#facc15]">
            What We Do
          </span>
          <h2 className="font-display text-[52px] font-bold uppercase leading-[0.9] tracking-tight text-[#0f0f0f] lg:text-[72px]">
            <span className="lg:hidden">Our<br />Services</span>
            <span className="hidden lg:block">Professional<br />Site Solutions</span>
          </h2>
          <p className="font-sans mt-3 max-w-xl text-[15px] leading-relaxed text-[#666]">
            Licensed, insured, and committed to excellence across every job site in Austin and surrounding areas.
          </p>
        </motion.div>

        {/* ── DESKTOP GRID (hidden on mobile) ── */}
        <div className="hidden gap-px bg-[#dbd8d3] lg:grid lg:grid-cols-3">
          {/* 01 Construction Cleans */}
          <motion.div {...inView} transition={{ duration: 0.55, ease: 'easeOut', delay: 0 }}>
            <DesktopCard {...nonFeatured[0]} />
          </motion.div>

          {/* 02 Pressure Washing — featured, center column */}
          <motion.div className="flex flex-col" {...inView} transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}>
            <div className="flex items-center justify-between bg-[#facc15] px-6 py-3">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#0f0f0f]">02</span>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#0f0f0f]">Most Popular</span>
            </div>
            <div className="flex flex-1 flex-col gap-5 bg-[#0f0f0f] p-10">
              <h3 className="font-display text-[28px] font-bold uppercase text-[#facc15]">Pressure Washing</h3>
              <p className="font-sans text-[13px] leading-relaxed text-white/55">
                Pressure washing and softwashing for all exterior surfaces
              </p>
              <ul className="flex flex-col gap-1.5">
                {['Building exteriors & facades', 'Houses, roofs & driveways', 'Parking garages & structures', 'Surface stain removal'].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[12px] leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#facc15]" />
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="font-sans mt-auto w-fit text-[13px] font-semibold text-[#facc15] underline decoration-[#facc15] decoration-2 underline-offset-3 hover:opacity-70">
                Get Quote →
              </a>
            </div>
          </motion.div>

          {/* 03 Window Cleaning */}
          <motion.div {...inView} transition={{ duration: 0.55, ease: 'easeOut', delay: 0.16 }}>
            <DesktopCard {...nonFeatured[1]} />
          </motion.div>

          {/* 04 Parking Services */}
          <motion.div {...inView} transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}>
            <DesktopCard {...nonFeatured[2]} />
          </motion.div>

          {/* 05 Gutter Cleaning */}
          <motion.div {...inView} transition={{ duration: 0.55, ease: 'easeOut', delay: 0.16 }}>
            <DesktopCard {...nonFeatured[3]} />
          </motion.div>

          {/* 06 Site Services */}
          <motion.div {...inView} transition={{ duration: 0.55, ease: 'easeOut', delay: 0.24 }}>
            <DesktopCard {...nonFeatured[4]} />
          </motion.div>
        </div>

        {/* ── MOBILE GRID (hidden on desktop) ── */}
        <div className="grid grid-cols-2 gap-[2px] bg-[#2a2a2a] lg:hidden">
          {/* Featured — full width */}
          <div className="col-span-2">
            <div className="flex items-center justify-between bg-[#facc15] px-5 py-3">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#0f0f0f]">01</span>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#0f0f0f]">Most Popular</span>
            </div>
            <div className="flex flex-col gap-4 bg-[#0f0f0f] p-5">
              <h3 className="font-display text-[28px] font-bold uppercase text-[#facc15]">Pressure Washing</h3>
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
              <a href="#contact" className="font-sans text-[13px] font-semibold text-[#facc15] underline decoration-[#facc15] underline-offset-2 hover:opacity-70">
                Get Quote →
              </a>
            </div>
          </div>

          {/* 02–05 in 2-col grid */}
          {nonFeatured.slice(0, 4).map((s, i) => (
            <div key={s.id} className="flex flex-col gap-2 bg-[#0f0f0f] p-4">
              <span className="font-sans text-[10px] font-semibold text-white/30">0{i + 2}</span>
              <h3 className="font-display text-[15px] font-bold uppercase leading-tight text-white">{s.title}</h3>
              <p className="font-sans text-[11px] leading-relaxed text-white/45">{s.shortDesc}</p>
              <a href="#contact" className="font-sans text-[12px] font-bold text-[#facc15] underline decoration-[#facc15] underline-offset-2 hover:opacity-70">
                Quote →
              </a>
            </div>
          ))}

          {/* 06 Site Services — full width, horizontal */}
          <div className="col-span-2 flex items-end justify-between bg-[#0f0f0f] p-4">
            <div className="flex flex-col gap-1.5">
              <span className="font-sans text-[10px] font-semibold text-white/30">06</span>
              <h3 className="font-display text-[17px] font-bold uppercase text-white">Site Services</h3>
              <p className="font-sans text-[11px] leading-relaxed text-white/45">
                Complete site maintenance, cleanup & debris haul-off
              </p>
            </div>
            <a href="#contact" className="font-sans flex-shrink-0 pl-4 text-[12px] font-bold text-[#facc15] underline decoration-[#facc15] underline-offset-2 hover:opacity-70">
              Quote →
            </a>
          </div>
        </div>

        {/* CTA bar */}
        <div className="mt-[2px] flex items-center justify-between gap-4 bg-[#0f0f0f] px-6 py-7 lg:px-8 lg:py-8">
          <div>
            <h3 className="font-display text-[18px] font-bold uppercase text-white lg:text-[22px]">
              <span className="lg:hidden">Need Something Custom?</span>
              <span className="hidden lg:inline">Need a Custom Solution?</span>
            </h3>
            <p className="font-sans text-[13px] text-white/45">
              <span className="lg:hidden">Specialized services available.</span>
              <span className="hidden lg:inline">We offer specialized services for unique projects.</span>
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-3">
            <a
              href="tel:5127483225"
              className="font-display bg-[#facc15] px-5 py-3 text-[13px] font-bold uppercase tracking-[0.06em] text-[#0f0f0f] transition-opacity hover:opacity-90"
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
