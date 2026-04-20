'use client'

import { AnimatedNumber } from '@/components/animated-number'

const stats = [
  { value: '3+', label: 'Years in Business', animated: false },
  { value: '500+', label: 'Projects Completed', animated: false },
  { value: '100%', label: 'Satisfaction Rate', animated: false },
  { value: '24hr', label: 'Response Time', animated: false },
]

export function Header() {
  return (
    <div className="relative bg-[#0f0f0f] pt-32 pb-0">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/linked-avatars/hero-bg.png"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
        {/* Eyebrow */}
        <span className="font-sans inline-block bg-[#3b82f6] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
          About Us
        </span>

        {/* Heading */}
        <h1 className="font-display mt-4 text-[52px] font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-[80px]">
          About GT<br />
          <span className="text-[#3b82f6]">Site Solutions</span>
        </h1>

        <p className="font-sans mt-6 max-w-xl text-[17px] leading-relaxed text-white/55">
          A professional cleaning and site services company dedicated to helping
          homes, businesses, and construction projects maintain clean, safe, and
          professional environments.
        </p>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-[1px] bg-[#ffffff08] lg:grid-cols-4">
          {[
            { val: '3+', label: 'Years in Business' },
            { val: '500+', label: 'Projects Completed' },
            { val: '100%', label: 'Satisfaction Rate' },
            { val: '24hr', label: 'Response Time' },
          ].map((s) => (
            <div key={s.label} className="bg-[#0f0f0f] px-6 py-7 text-center">
              <div className="font-display mb-1 text-[40px] font-bold leading-none text-[#3b82f6]">
                {s.val}
              </div>
              <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
