import { BeforeAfterSlider } from '@/components/before-after-slider'
import { Logo } from '@/components/logo'
import Image from 'next/image'

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

      {/* Left accent bar */}
      <div className="absolute top-0 left-0 z-20 h-full w-[3px] bg-[#3b82f6]" />

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
          <div className="mb-8 flex items-center gap-2.5">
            <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#3b82f6]" />
            <span className="font-sans text-[14px] font-medium text-white/65">
              Licensed and insured
            </span>
          </div>

          {/* Headline — the page's one load animation */}
          <h1 className="hero-reveal font-display mb-6 flex flex-col text-[clamp(44px,14.5vw,60px)] font-bold uppercase leading-[0.9] tracking-tight lg:text-[82px]">
            <span className="text-white">Professional</span>
            <span className="text-[#3b82f6]">Exterior</span>
            <span className="text-[#3b82f6]">Cleaning</span>
            <span className="font-sans mt-4 text-[20px] font-semibold normal-case tracking-normal text-white lg:text-[24px]">
              in Austin, TX
            </span>
          </h1>

          <p className="font-sans mb-6 text-[17px] font-medium text-white/80 lg:text-[18px]">
            We bring solutions to your residential and commercial properties.
          </p>

          <p className="font-sans mb-8 max-w-xl text-[15px] leading-relaxed text-white/55">
            GT Site Solutions partners with contractors, home owners and
            property managers to handle it all: interior and exterior cleaning,
            pressure washing, window cleaning, parking lot maintenance and
            striping. Every service backed by reliability and results.
          </p>

          <div className="font-sans mb-8 grid grid-cols-2 gap-x-8 gap-y-2.5 text-[13px] text-white/55">
            {[
              'Residential and commercial',
              'Premium equipment',
              '5.0 star rating',
              'Free quotes',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#3b82f6]" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
              href="#contact"
              className="font-display flex items-center justify-center gap-2 border border-white/25 px-7 py-4 text-[15px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:border-white/50"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right — a real job, before and after */}
        <div className="flex w-full flex-shrink-0 flex-col justify-center gap-3 pb-12 lg:w-[360px] lg:pt-28 lg:pb-10">
          <BeforeAfterSlider
            beforeImage="/before-after/Before1.jpg"
            afterImage="/before-after/After1.jpg"
            alt="Office building exterior in Austin"
            className="h-72 w-full rounded-none sm:h-96 lg:h-[440px]"
          />
          <p className="font-sans text-[13px] text-white/55">
            Office exterior cleaning in Austin. Drag across the photo to compare.
          </p>
        </div>
      </div>
    </section>
  )
}
