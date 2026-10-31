'use client'

import { BeforeAfterSlider } from '@/components/before-after-slider'
import Image from 'next/image'
import { projects } from '@/lib/projects'
import { useState } from 'react'

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

  // On desktop, stretch the last card across the final row instead of leaving empty cells
  const slotCount = filteredProjects.reduce((sum, p) => sum + (p.wide ? 2 : 1), 0)
  const remainder = slotCount % 3

  return (
    <section id="portfolio" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-[40px] font-bold uppercase leading-[0.92] tracking-tight text-[#0f0f0f] sm:text-[56px] lg:text-[72px]">
            See The<br />
            <span className="text-[#3b82f6]">Transformation</span>
          </h2>
          <p className="font-sans max-w-[420px] text-[17px] leading-relaxed text-[#555] lg:pb-2">
            Real results from real jobs across Austin and surrounding areas.
            Every photo shows the GT Site Solutions difference.
          </p>
        </div>

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
        <div className="mb-[2px] bg-[#0f0f0f] lg:mb-16">
          <div className="flex items-center justify-between bg-[#3b82f6] px-8 py-3.5">
            <span className="font-sans text-[12px] font-bold text-[#0f0f0f]">
              Featured project
            </span>
            <span className="font-sans text-[12px] font-semibold text-[#0f0f0f]">
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
                  alt={featuredProject.title}
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
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-[2px] border-2 border-[#d6d3cd] bg-[#d6d3cd] md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isLast = index === filteredProjects.length - 1
            const span = (project.wide ? 2 : 1) + (isLast && remainder ? 3 - remainder : 0)
            const isWide = span > 1
            const spanClass = span === 3 ? 'lg:col-span-3' : span === 2 ? 'lg:col-span-2' : ''
            return (
            <div
              key={project.id}
              className={`flex overflow-hidden bg-white ${spanClass} ${isWide ? 'flex-col lg:flex-row' : 'flex-col'}`}
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
                        <span key={s} className="font-sans bg-[#f5f3ef] px-2 py-0.5 text-[11px] font-medium text-[#666]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Image — right on desktop, top on mobile */}
                  <div className={`relative order-first w-full flex-shrink-0 lg:order-last lg:w-1/2 ${project.composite ? 'aspect-video bg-[#0f0f0f]' : 'h-64 lg:h-auto'}`}>
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
                        alt={project.title}
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
                        <span key={s} className="font-sans bg-[#f5f3ef] px-2 py-0.5 text-[11px] font-medium text-[#666]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            )
          })}
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
          <div className="flex flex-shrink-0 gap-3">
            <a
              href="tel:5127483225"
              className="font-display inline-flex items-center whitespace-nowrap bg-[#3b82f6] px-6 py-3.5 text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-90"
            >
              Call (512) 748-3225
            </a>
            <a
              href="#contact"
              className="font-display inline-flex items-center whitespace-nowrap border border-white/25 px-6 py-3.5 text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:border-white/50"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
