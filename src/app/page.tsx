import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Pressure Washing & Exterior Cleaning in Austin, TX | GT Site Solutions',
  },
  description:
    'Professional exterior cleaning services in Austin, TX. Construction cleans, pressure washing, window cleaning, and more. Licensed & insured. Call (512) 748-3225 for a free quote.',
  keywords:
    'exterior cleaning, pressure washing, window cleaning, construction cleaning, Austin TX, commercial cleaning, residential cleaning',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'GT Site Solutions - Professional Exterior Cleaning',
    description:
      "Transform your property with Austin's premier exterior cleaning services",
    url: 'https://www.gtsitesolutions.com',
    siteName: 'GT Site Solutions',
    locale: 'en_US',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="lg:flex lg:min-h-screen lg:flex-col">
        <Hero />
        <StatsBar />
      </div>
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}


function StatsBar() {
  const stats = [
    { number: '500+', label: 'Projects completed' },
    { number: '3+', label: 'Years in business' },
    { number: '24hr', label: 'Quote response' },
    { number: '100%', label: 'Satisfaction rate' },
  ]

  return (
    <div className="grid grid-cols-2 gap-[1px] bg-blue-700 md:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center bg-[#3b82f6] py-7 text-center"
        >
          <div className="font-display text-[44px] font-bold leading-none text-white md:text-[52px]">
            {stat.number}
          </div>
          <div className="font-sans mt-1.5 text-[13px] font-semibold text-white/80">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
