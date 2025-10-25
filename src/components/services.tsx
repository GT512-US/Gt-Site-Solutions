'use client'

import { Container } from '@/components/container'
import {
  Building2,
  CheckCircle,
  Droplets,
  Home,
  MapPin,
  Sparkles,
  Truck,
} from 'lucide-react'

const services = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Construction Cleans',
    description: 'Complete construction cleaning services from rough to final',
    features: [
      'Rough clean during construction',
      'Progress cleaning between phases',
      'Final detailed cleaning for handover',
      'Post-construction debris removal',
    ],
    highlight: false,
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: 'Pressure Washing',
    description: 'High-pressure cleaning for all exterior surfaces',
    features: [
      'Building exteriors & facades',
      'Driveways & sidewalks',
      'Parking garages & structures',
      'Surface stain removal',
    ],
    highlight: true,
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Window Cleaning',
    description: 'Crystal clear windows inside and out',
    features: [
      'Interior window cleaning',
      'Exterior window washing',
      'High-rise window services',
      'Screen cleaning & frames',
    ],
    highlight: false,
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: 'Parking Services',
    description: 'Complete parking lot maintenance solutions',
    features: [
      'Parking lot striping',
      'Curb stop installation',
      'Signage installation',
      'ADA compliance marking',
    ],
    highlight: false,
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: 'Gutter Cleaning',
    description: 'Protect your property with clean gutters',
    features: [
      'Debris removal',
      'Downspout clearing',
      'Gutter inspection',
      'Minor repair services',
    ],
    highlight: false,
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Site Services',
    description: 'Complete site maintenance and cleanup',
    features: [
      'Site clean up services',
      'Debris haul off',
      'Property maintenance',
      'Emergency cleanup',
    ],
    highlight: false,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold tracking-wider text-yellow-500 uppercase">
              What We Do
            </span>
            <h2 className="mt-2 mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Professional Exterior Services
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              High-standard services tailored specifically for your project.
              Licensed, insured, and committed to excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl border-2 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
                  service.highlight ? 'border-yellow-400' : 'border-transparent'
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <span className="rounded-full bg-yellow-400 px-4 py-1 text-xs font-bold text-black uppercase">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 inline-block rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 text-white transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-gray-100 pt-6">
                  <a
                    href="#contact"
                    className="group flex items-center gap-2 text-sm font-semibold text-yellow-600 transition-colors hover:text-yellow-700"
                  >
                    Get Quote
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-gray-900 to-black p-8 text-center lg:p-12">
            <h3 className="mb-4 text-3xl font-bold text-white">
              Need a Custom Solution?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-gray-300">
              We offer specialized services for unique projects. Contact us to
              discuss your specific needs.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="tel:5126897606"
                className="rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300"
              >
                Call for Custom Quote
              </a>
              <a
                href="mailto:Dounia@gtsitesolutions.com"
                className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-black"
              >
                Email Your Requirements
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
