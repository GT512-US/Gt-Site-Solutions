import { ContactSection } from '@/components/company/ContactSection'
import { Header } from '@/components/company/Header'
import { Team } from '@/components/company/Team'
import { WhyChooseUs } from '@/components/company/WhyChooseUs'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about GT Site Solutions, Austin's premier exterior cleaning company. 3+ years of experience, 500+ projects completed, licensed and insured.",
  alternates: { canonical: '/company' },
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <div className="relative z-10">
        <Navbar />
      </div>
      <Header />
      <Team />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
