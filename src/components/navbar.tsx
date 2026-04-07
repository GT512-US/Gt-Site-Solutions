'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Logo } from './logo'

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#testimonials', label: 'Reviews' },
  { href: '/#contact', label: 'Contact' },
  { href: '/company', label: 'Company' },
]

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 60)
  })

  return (
    <>
      <motion.header
        className="fixed top-0 right-0 left-0 z-50"
        animate={{
          backgroundColor: isScrolled ? 'rgba(10,10,10,0.82)' : 'rgba(0,0,0,0)',
          backdropFilter: isScrolled ? 'blur(18px)' : 'blur(0px)',
          borderBottom: isScrolled
            ? '1px solid rgba(250,204,21,0.12)'
            : '1px solid transparent',
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        style={{ WebkitBackdropFilter: isScrolled ? 'blur(18px)' : 'blur(0px)' }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="h-8 text-white transition-opacity group-hover:opacity-80" />
            <span className="font-display hidden sm:block text-[15px] font-bold uppercase tracking-[0.06em] text-white/70">
              Site Solutions
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center lg:flex">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans relative px-4 py-2 text-[13px] font-medium tracking-wide text-white/55 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:5127483225"
              className="font-display bg-[#facc15] px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.08em] text-[#0f0f0f] transition-opacity hover:opacity-85"
            >
              (512) 748-3225
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <div className="flex flex-col gap-[5px]">
              <div className="h-0.5 w-[22px] bg-white" />
              <div className="h-0.5 w-4 bg-[#facc15]" />
              <div className="h-0.5 w-[22px] bg-white" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col bg-[#0f0f0f] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
              <Logo className="h-8 text-white" />
              <span className="font-display text-[15px] font-bold uppercase tracking-[0.06em] text-white/70">
                Site Solutions
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center"
              aria-label="Close menu"
            >
              <div className="relative h-[22px] w-[22px]">
                <div className="absolute top-1/2 left-0 h-0.5 w-[22px] -translate-y-1/2 rotate-45 bg-white" />
                <div className="absolute top-1/2 left-0 h-0.5 w-[22px] -translate-y-1/2 -rotate-45 bg-[#facc15]" />
              </div>
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col justify-center gap-1 px-6">
            {links.map(({ href, label }, i) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: i * 0.06 }}
              >
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display block border-b border-white/[0.06] py-5 text-[36px] font-bold uppercase leading-none tracking-tight text-white transition-colors hover:text-[#facc15]"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-white/[0.06] px-6 py-8">
            <a
              href="tel:5127483225"
              className="font-display block w-full bg-[#facc15] py-4 text-center text-[16px] font-bold uppercase tracking-[0.08em] text-[#0f0f0f]"
            >
              Call (512) 748-3225
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
