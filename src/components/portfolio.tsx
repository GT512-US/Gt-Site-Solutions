'use client'

import { BeforeAfterSlider } from '@/components/before-after-slider'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

const projects = [
  {
    id: 1,
    category: 'commercial',
    title: 'New Construction Window Cleaning',
    location: 'Austin, TX',
    date: '',
    afterImage: '/before-after/BenzAfter.png',
    description:
      'GT Site Solutions provided window cleaning removing adhesive, dust, and construction debris from all glass before opening.',
    services: ['Window Cleaning', 'Construction Cleaning'],
    highlight: true,
    testimonial:
      'GT Site Solutions provided window cleaning removing adhesive, dust, and construction debris from all glass before opening.',
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Office Exterior Cleaning',
    location: 'Austin, TX',
    date: 'March 2024',
    beforeImage: '/before-after/Before1.jpg',
    afterImage: '/before-after/After1.jpg',
    description:
      'Complete campus exterior cleaning including buildings, walkways, and outdoor areas',
    services: ['Pressure Washing', 'Window Cleaning'],
  },
  {
    id: 3,
    category: 'commercial',
    title: 'QuikTrip Store Exterior',
    location: 'Austin, TX',
    date: 'February 2024',
    afterImage: '/before-after/QuikTrip.jpeg',
    description:
      'Complete exterior pressure washing and facade cleaning for QuikTrip convenience store',
    services: ['Pressure Washing', 'Facade Cleaning', 'Window Cleaning'],
  },
  {
    id: 4,
    category: 'commercial',
    title: 'Baylor Campus Housing Remodel',
    location: 'Waco, TX',
    date: 'January 2024',
    afterImage: '/before-after/HistoricBuilding.jpeg',
    description:
      'Complete exterior window cleaning for campus housing at Baylor University',
    services: ['Pressure Washing', 'Facade Cleaning'],
  },
  {
    id: 5,
    category: 'commercial',
    title: 'Corporate Office Building',
    location: 'Austin, TX',
    date: 'December 2023',
    afterImage: '/before-after/CorprateOffice.jpeg',
    description:
      'High-rise window cleaning and facade maintenance for corporate office building',
    services: ['High-Rise Windows', 'Facade Cleaning', 'Pressure Washing'],
  },
  {
    id: 6,
    category: 'residential',
    title: 'Modern Residential Home',
    location: 'Austin, TX',
    date: 'November 2023',
    afterImage: '/before-after/ResedentialHome.png',
    description:
      'Complete exterior cleaning for modern residential home including pressure washing and window cleaning',
    services: ['Pressure Washing', 'Window Cleaning', 'Exterior Soft Wash'],
    wide: true,
  },
  {
    id: 7,
    category: 'commercial',
    title: 'Sidewalk & Walkway Cleaning',
    location: 'Austin, TX',
    date: 'March 2025',
    afterImage: '/before-after/3D90B1D5-7FA2-4804-8EB2-B116E6E733CD.png',
    description: 'Concrete sidewalk pressure washing removing built-up grime and discoloration.',
    services: ['Pressure Washing', 'Surface Cleaning'],
    composite: true,
  },
  {
    id: 8,
    category: 'commercial',
    title: 'Commercial Parking Lot Cleaning',
    location: 'Austin, TX',
    date: 'March 2025',
    afterImage: '/before-after/15A7F180-1CD4-4533-8763-ABEEEAA90A11.png',
    description: 'Full commercial parking lot and loading area pressure washing restoration.',
    services: ['Pressure Washing', 'Parking Lot Cleaning'],
    composite: true,
  },
  {
    id: 9,
    category: 'commercial',
    title: 'Parking Garage Floor Cleaning',
    location: 'Austin, TX',
    date: 'March 2025',
    afterImage: '/before-after/42E3A0D6-020A-4E09-8AC4-58C74F76FD13.png',
    description: 'Deep cleaning of multi-level parking garage floors removing oil and grime.',
    services: ['Pressure Washing', 'Concrete Cleaning'],
    composite: true,
  },
  {
    id: 10,
    category: 'residential',
    title: 'Stepping Stone Pathway Restoration',
    location: 'Austin, TX',
    date: 'March 2025',
    afterImage: '/before-after/2738C768-BD3D-4EC5-A19C-54D0394BC216.png',
    description: 'Residential pathway cleaning restoring stepping stones to like-new condition.',
    services: ['Pressure Washing', 'Surface Cleaning'],
    composite: true,
  },
  {
    id: 11,
    category: 'commercial',
    title: 'Commercial Glass & Window Cleaning',
    location: 'Austin, TX',
    date: 'April 2025',
    afterImage: '/before-after/86749437-B50D-433A-A5C3-414191E14952.png',
    description: 'Streak-free commercial glass and storefront window cleaning.',
    services: ['Window Cleaning', 'Glass Restoration'],
    composite: true,
  },
  {
    id: 14,
    category: 'commercial',
    title: 'Graffiti Removal',
    location: 'Austin, TX',
    date: 'April 2025',
    afterImage: '/before-after/A787F809-5D7A-46BF-A68C-3162D35CDEC9.png',
    description: 'Complete graffiti removal from concrete drainage infrastructure.',
    services: ['Pressure Washing', 'Graffiti Removal'],
    composite: true,
  },
  {
    id: 15,
    category: 'commercial',
    title: 'Exterior Window Cleaning',
    location: 'Austin, TX',
    date: 'April 2025',
    afterImage: '/before-after/A4437A92-BA5B-4D46-B5CA-490F6060A49B.png',
    description: 'Multi-pane exterior window cleaning delivering crystal clear results.',
    services: ['Window Cleaning', 'Facade Cleaning'],
    composite: true,
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'residential', label: 'Residential' },
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects =
    selectedCategory === 'all'
      ? projects.filter((p) => !p.highlight)
      : projects.filter((p) => p.category === selectedCategory && !p.highlight)

  const featuredProject = projects.find((p) => p.highlight)!
  const featuredHasSlider = !!(featuredProject.beforeImage && featuredProject.afterImage)

  return (
    <section id="portfolio" className="bg-[#f5f3ef] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <motion.div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between" {...inView()}>
          <div className="flex flex-col gap-3">
            <span className="font-sans inline-block w-fit bg-[#0f0f0f] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#3b82f6]">
              OUR WORK
            </span>
            <h2 className="font-display text-[56px] font-bold uppercase leading-[0.92] tracking-tight text-[#0f0f0f] lg:text-[72px]">
              See The<br />
              <span className="text-[#3b82f6]">Transformation</span>
            </h2>
          </div>
          <p className="font-sans max-w-[420px] text-[17px] leading-relaxed text-[#555] lg:pb-2">
            Real results from real jobs across Austin and surrounding areas.
            Every photo shows the GT Site Solutions difference.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`font-display px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#3b82f6] text-white'
                  : 'bg-[#0f0f0f] text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured project */}
        <motion.div className="mb-[2px] bg-[#0f0f0f] lg:mb-16" {...inView(0.1)}>
          {/* Yellow strip */}
          <div className="flex items-center justify-between bg-[#3b82f6] px-8 py-3.5">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-[#0f0f0f]">
              ★ FEATURED PROJECT
            </span>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f0f0f]">
              {featuredProject.location}
            </span>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* Image / slider */}
            <div className="relative h-64 lg:order-2 lg:h-auto lg:min-h-[360px]">
              {featuredHasSlider ? (
                <BeforeAfterSlider
                  beforeImage={featuredProject.beforeImage!}
                  afterImage={featuredProject.afterImage!}
                  className="h-full w-full rounded-none"
                />
              ) : (
                <Image
                  src={(featuredProject.afterImage || featuredProject.beforeImage)!}
                  alt={featuredProject.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            {/* Info */}
            <div className="flex flex-col justify-center gap-4 px-6 py-8 lg:order-1 lg:gap-5 lg:px-10 lg:py-12">
              <h3 className="font-display text-[34px] font-bold uppercase leading-tight text-white">
                {featuredProject.title}
              </h3>
              <p className="font-sans text-[14px] leading-relaxed text-white/55">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredProject.services.map((s) => (
                  <span
                    key={s}
                    className="font-sans border border-white/15 px-3 py-1 text-[12px] text-white/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {featuredProject.testimonial && (
                <blockquote className="font-sans border-l-2 border-[#3b82f6] pl-4 text-[13px] italic leading-relaxed text-white/50">
                  "{featuredProject.testimonial}"
                </blockquote>
              )}
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-[2px] bg-[#d6d3cd] md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isWide = !!project.wide
            const spanClass = isWide ? 'lg:col-span-2' : ''
            return (
            <motion.div
              key={project.id}
              className={`flex overflow-hidden bg-white ${spanClass} ${isWide ? 'flex-col lg:flex-row' : 'flex-col'}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut' as const, delay: (index % 3) * 0.08 }}
            >
              {/* Image area — right side when wide, top otherwise */}
              {isWide ? (
                <>
                  {/* Content — left on desktop */}
                  <div className="flex flex-1 flex-col justify-center gap-2 p-4 lg:p-8">
                    <h3 className="font-display text-[20px] font-bold uppercase leading-tight text-[#0f0f0f] lg:text-[24px]">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[12px] text-[#999]">
                      {project.location}
                    </p>
                    <p className="font-sans mt-1 text-[13px] leading-relaxed text-[#666]">
                      {project.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.services.slice(0, 3).map((s) => (
                        <span key={s} className="font-sans bg-[#f5f3ef] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.04em] text-[#666]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Image — right on desktop, top on mobile */}
                  <div className={`relative order-first w-full flex-shrink-0 lg:order-last lg:w-1/2 ${project.composite ? 'aspect-video bg-[#0f0f0f] lg:aspect-auto lg:h-auto' : 'h-64 lg:h-auto'}`}>
                    <Image
                      src={(project.afterImage || project.beforeImage)!}
                      alt={project.title}
                      fill
                      className={project.composite ? 'object-contain' : 'object-cover object-center'}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Standard vertical card */}
                  <div className="relative">
                    {project.beforeImage && project.afterImage ? (
                      <BeforeAfterSlider
                        beforeImage={project.beforeImage}
                        afterImage={project.afterImage}
                        className="h-64 w-full rounded-none"
                      />
                    ) : (
                      <div className={`relative w-full ${project.composite ? 'aspect-video bg-[#0f0f0f]' : 'h-64'}`}>
                        <Image
                          src={(project.afterImage || project.beforeImage)!}
                          alt={project.title}
                          fill
                          className={project.composite ? 'object-contain' : 'object-cover object-center'}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5 p-4 lg:gap-2 lg:p-6">
                    <h3 className="font-display text-[17px] font-bold uppercase leading-tight text-[#0f0f0f] lg:text-[20px]">
                      {project.title}
                    </h3>
                    <p className="font-sans text-[11px] text-[#999] lg:text-[12px]">
                      {project.location}
                    </p>
                    <p className="font-sans line-clamp-2 hidden text-[13px] leading-relaxed text-[#666] lg:block">
                      {project.description}
                    </p>
                    <div className="mt-1 hidden flex-wrap gap-1.5 lg:flex">
                      {project.services.slice(0, 3).map((s) => (
                        <span key={s} className="font-sans bg-[#f5f3ef] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.04em] text-[#666]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
            )
          })}
          {/* Filler cells to complete the last row */}
          {(() => {
            const totalSlots = filteredProjects.reduce((sum, p) => sum + (p.wide ? 2 : 1), 0)
            const remainder = totalSlots % 3
            const fillers = remainder === 0 ? 0 : 3 - remainder
            return Array.from({ length: fillers }).map((_, i) => (
              <div key={`filler-${i}`} className="hidden bg-white lg:block" />
            ))
          })()}
        </div>

        {/* CTA bar */}
        <div className="mt-[2px] flex flex-col items-start justify-between gap-5 bg-[#0f0f0f] px-8 py-8 sm:flex-row sm:items-center lg:mt-16">
          <div>
            <h3 className="font-display text-[28px] font-bold uppercase text-white">
              Ready to Transform Your Property?
            </h3>
            <p className="font-sans text-[14px] text-white/45">
              Join hundreds of satisfied customers across Austin and surrounding
              areas.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:5127483225"
              className="font-display inline-flex items-center bg-[#3b82f6] px-6 py-3.5 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-90"
            >
              Get Free Quote
            </a>
            <a
              href="#contact"
              className="font-display inline-flex items-center border border-white/25 px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:border-white/50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
