'use client'

import { Disclosure, DisclosureButton } from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'

const links = [
  { href: '/#contact', label: 'Contact' },
  { href: '/company', label: 'Company' },
  { href: '/blog', label: 'Blog' },
  { href: 'https://calendly.com/your-link', label: 'Book' },
]

function DesktopNav({
  isScrolled,
  onBookClick,
  isHomePage,
}: {
  isScrolled: boolean
  onBookClick: (e: React.MouseEvent) => void
  isHomePage: boolean
}) {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          {label === 'Book' ? (
            <button
              onClick={onBookClick}
              className={`flex items-center px-4 py-3 text-base font-medium transition-colors duration-300 ${
                isScrolled && isHomePage
                  ? 'text-gray-950 hover:bg-black/5'
                  : 'text-white bg-blend-multiply data-hover:bg-white/10'
              }`}
            >
              {label}
            </button>
          ) : (
            <Link
              href={href}
              className={`flex items-center px-4 py-3 text-base font-medium transition-colors duration-300 ${
                isScrolled && isHomePage
                  ? 'text-gray-950 hover:bg-black/5'
                  : 'text-white bg-blend-multiply data-hover:bg-white/10'
              }`}
            >
              {label}
            </Link>
          )}
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton({
  isScrolled,
  isHomePage,
}: {
  isScrolled: boolean
  isHomePage: boolean
}) {
  return (
    <DisclosureButton
      className={`flex size-12 items-center justify-center self-center rounded-lg transition-colors duration-300 lg:hidden ${
        isScrolled && isHomePage
          ? 'data-hover:bg-black/5'
          : 'data-hover:bg-white/10'
      }`}
      aria-label="Open main menu"
    >
      <Bars2Icon
        className={`size-6 transition-colors duration-300 ${
          isScrolled && isHomePage ? 'text-gray-950' : 'text-white'
        }`}
      />
    </DisclosureButton>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const openCalPopup = (e: React.MouseEvent) => {
    e.preventDefault()
    // Open Calendly popup widget
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/dounia-gtsitesolutions',
      })
    } else {
      // Fallback to opening in new tab if Calendly isn't loaded
      window.open('https://calendly.com/dounia-gtsitesolutions', '_blank')
    }
  }

  return (
    <Disclosure as="header" className="fixed top-0 right-0 left-0 z-50">
      {({ open }) => (
        <>
          <motion.div
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            animate={{
              backgroundColor: isScrolled
                ? 'rgba(75, 75, 75, 0.4)'
                : 'rgba(0, 0, 0, 0)',
              backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
              borderBottom: isScrolled
                ? '1px solid rgba(255, 255, 255, 0.01)'
                : '1px solid transparent',
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
            }}
          >
            <PlusGrid>
              <PlusGridRow className="relative flex justify-between px-20 py-8">
                <div className="relative flex gap-6">
                  <PlusGridItem className="py-3">
                    <Link href="/" title="Home">
                      <Logo
                        className={`h-9 transition-all duration-300 ${
                          isScrolled && isHomePage
                            ? 'text-gray-950'
                            : 'text-white'
                        }`}
                      />
                    </Link>
                  </PlusGridItem>
                  {banner && (
                    <div className="relative hidden items-center py-3 lg:flex">
                      <motion.div
                        animate={{
                          filter: isScrolled ? 'invert(1)' : 'invert(0)',
                          opacity: isScrolled ? 0.8 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {banner}
                      </motion.div>
                    </div>
                  )}
                </div>
                <DesktopNav
                  isScrolled={isScrolled}
                  onBookClick={openCalPopup}
                  isHomePage={isHomePage}
                />
                <MobileNavButton
                  isScrolled={isScrolled}
                  isHomePage={isHomePage}
                />
              </PlusGridRow>
            </PlusGrid>
          </motion.div>

          {/* Full-screen mobile overlay outside navbar container */}
          {open && (
            <>
              {/* Prevent body scroll */}
              <style jsx global>{`
                body {
                  overflow: hidden;
                }
              `}</style>

              <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl lg:hidden">
                {/* Close button */}
                <button
                  onClick={() => {
                    const button = document.querySelector(
                      '[aria-label="Open main menu"]',
                    ) as HTMLButtonElement
                    if (button) button.click()
                  }}
                  className="absolute top-8 right-8 z-50 p-2 text-white transition-colors hover:text-gray-300"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="flex h-full flex-col items-center justify-center gap-8 px-6 py-8">
                  {links.map(({ href, label }, linkIndex) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: linkIndex * 0.1,
                      }}
                      key={href}
                    >
                      {label === 'Book' ? (
                        <button
                          onClick={openCalPopup}
                          className="text-2xl font-medium text-white transition-colors duration-300 hover:text-gray-300"
                        >
                          {label}
                        </button>
                      ) : (
                        <Link
                          href={href}
                          className="text-2xl font-medium text-white transition-colors duration-300 hover:text-gray-300"
                        >
                          {label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </Disclosure>
  )
}
