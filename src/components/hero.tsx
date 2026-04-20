'use client'

import Image from 'next/image'
import { Logo } from '@/components/logo'
import { motion } from 'framer-motion'

const serviceCards = [
  { label: 'Pressure Washing' },
  { label: 'Window Cleaning' },
  { label: 'Parking Lot Striping' },
  { label: 'Construction Cleaning' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' as const, delay },
})

export function Hero() {
  return (
    <section className="relative flex flex-1 flex-col bg-[#0f0f0f] min-h-[80svh] lg:min-h-[680px]">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/linked-avatars/hero-bg.png"
          alt="Austin skyline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0f0f0f]/75" />
      </div>

      {/* Yellow left accent bar */}
      <motion.div
        className="absolute top-0 left-0 z-20 w-[3px] bg-[#3b82f6]"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.2 }}
      />

      {/* Vertical divider (desktop) */}
      <div className="absolute top-0 right-[380px] z-20 hidden h-full w-px bg-[#3b82f6]/10 lg:block" />

      {/* Ghost watermark */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
        <Logo className="absolute right-0 bottom-0 h-auto w-[260px] select-none text-white/[0.15] lg:w-[400px]" />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex flex-1 w-full max-w-7xl flex-col px-6 lg:flex-row lg:px-20">
        {/* Left — main content */}
        <div className="flex flex-1 flex-col justify-center pt-28 pb-10 lg:pt-32 lg:pb-12 lg:pr-16">
          {/* Trust badge */}
          <motion.div className="mb-8 flex items-center gap-2.5" {...fadeUp(0.1)}>
            <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#3b82f6]" />
            <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-white/60">
              Licensed &amp; Insured · Austin, TX · 3+ Years
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 flex flex-col">
            <motion.span
              className="font-display text-[60px] font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-[82px]"
              {...fadeUp(0.2)}
            >
              Professional
            </motion.span>
            <motion.span
              className="font-display text-[60px] font-bold uppercase leading-[0.9] tracking-tight text-[#3b82f6] lg:text-[82px]"
              {...fadeUp(0.28)}
            >
              Exterior
            </motion.span>
            <motion.span
              className="font-display text-[60px] font-bold uppercase leading-[0.9] tracking-tight text-[#3b82f6] lg:text-[82px]"
              {...fadeUp(0.36)}
            >
              Cleaning
            </motion.span>
          </div>

          {/* Subheading */}
          <motion.div className="mb-6 flex items-start gap-3" {...fadeUp(0.44)}>
            <div className="mt-[10px] h-[2px] w-7 flex-shrink-0 bg-[#3b82f6]" />
            <p className="font-display text-sm font-medium uppercase tracking-[0.06em] text-white/70 lg:text-[15px]">
              We bring solutions to your residential and commercial properties
            </p>
          </motion.div>

          {/* Body */}
          <motion.p
            className="font-sans mb-8 max-w-xl text-[15px] leading-relaxed text-white/55"
            {...fadeUp(0.52)}
          >
            GT Site Solutions partners with contractors, home owners and
            property managers to handle it all: interior and exterior cleaning,
            pressure washing, window cleaning, parking lot maintenance and
            striping. Every service backed by reliability and results.
          </motion.p>

          {/* Bullets */}
          <motion.div
            className="font-sans mb-8 grid grid-cols-2 gap-x-8 gap-y-2.5 text-[13px] text-white/55"
            {...fadeUp(0.58)}
          >
            {[
              '500+ Happy Customers',
              'Premium Equipment',
              '5.0 Star Rating',
              'Fully Insured',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#3b82f6]" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap" {...fadeUp(0.64)}>
            <a
              href="tel:5127483225"
              className="font-display flex items-center justify-center gap-2 bg-[#3b82f6] px-7 py-4 text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              (512) 748-3225
            </a>
            <a
              href="mailto:Ruben@gtsitesolutions.com"
              className="font-display flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-[15px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:border-white/50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get a Quote
            </a>
          </motion.div>
        </div>

        {/* Right — service cards + social proof (desktop only) */}
        <div className="hidden w-[360px] flex-shrink-0 flex-col justify-center gap-3 pt-28 pb-10 lg:flex">
          {/* 2×2 service card grid */}
          <div className="grid grid-cols-2 gap-[2px] bg-[#3b82f6]/10">
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="flex flex-col gap-3 bg-[#0f0f0f]/80 p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' as const, delay: 0.5 + i * 0.08 }}
              >
                <div className="h-[2px] w-6 bg-[#3b82f6]" />
                <span className="font-display text-sm font-bold uppercase tracking-[0.04em] text-white">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Social proof card */}
          <motion.div
            className="border border-[#3b82f6]/20 bg-[#0f0f0f]/70 p-5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' as const, delay: 0.82 }}
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-[#3b82f6]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-display text-2xl font-bold text-[#3b82f6]">500+</span>
            </div>
            <p className="font-sans mb-3 text-sm italic leading-relaxed text-white/70">
              "Exceptional service and results. Our property looks brand new!"
            </p>
            <p className="font-sans text-xs text-white/40">— Sarah Johnson, Homeowner</p>
            <p className="font-sans mt-1 text-xs text-white/30">Projects Done</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
