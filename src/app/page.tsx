import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'GT Site Solutions - Professional Exterior Cleaning Services in Austin',
  description:
    'Professional exterior cleaning services in Austin, TX. Construction cleans, pressure washing, window cleaning, and more. Licensed & insured. Call (512) 689-7606 for a free quote.',
  keywords:
    'exterior cleaning, pressure washing, window cleaning, construction cleaning, Austin TX, commercial cleaning, residential cleaning',
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
      <Hero />
      <Services />
      <Portfolio />
      <StatsSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

// Stats Section Component
function StatsSection() {
  const stats = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered',
    },
    {
      number: '6+',
      label: 'Years in Business',
      description: 'Serving Austin area',
    },
    { number: '24hr', label: 'Quote Response', description: 'Fast turnaround' },
    {
      number: '100%',
      label: 'Satisfaction Rate',
      description: 'Customer happiness',
    },
  ]

  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-5xl font-black text-black md:text-6xl">
                {stat.number}
              </div>
              <div className="text-lg font-bold text-black">{stat.label}</div>
              <div className="mt-1 text-sm text-black/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
