'use client'

import { BeforeAfterSlider } from '@/components/before-after-slider'
import { Container } from '@/components/container'
import { Building2, Calendar, MapPin, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    category: 'commercial',
    title: 'Mercedes-Benz AMG Dealership',
    location: 'Austin, TX',
    date: 'Ongoing Contract',
    // Only after image - no before
    afterImage: '/before-after/BenzAfter.jpeg',
    description:
      'Complete exterior cleaning, showroom windows, and monthly pressure washing maintenance',
    services: ['Pressure Washing', 'Window Cleaning', 'Monthly Maintenance'],
    highlight: true,
    testimonial:
      'GT Site Solutions maintains our dealership to the highest standards. Their attention to detail matches the Mercedes-Benz brand perfectly.',
  },
  {
    id: 2,
    category: 'commercial',
    title: 'School Campus Exterior Cleaning',
    location: 'Austin, TX',
    date: 'March 2024',
    beforeImage: '/before-after/Before1.jpg',
    afterImage: '/before-after/After1.jpg',
    description:
      'Complete campus exterior cleaning including buildings, walkways, and outdoor areas',
    services: ['Pressure Washing', 'Window Cleaning', 'Campus Maintenance'],
  },
  {
    id: 3,
    category: 'commercial',
    title: 'QuikTrip Store Exterior Cleaning',
    location: 'Austin, TX',
    date: 'February 2024',
    // Only after image - no before
    afterImage: '/before-after/QuikTrip.jpeg',
    description:
      'Complete exterior pressure washing and facade cleaning for QuikTrip convenience store',
    services: ['Pressure Washing', 'Facade Cleaning', 'Window Cleaning'],
  },
  {
    id: 4,
    category: 'commercial',
    title: 'Historic Building Restoration',
    location: 'Downtown Austin',
    date: 'January 2024',
    // Only after image - no before
    afterImage: '/before-after/HistoricBuilding.jpeg',
    description:
      'Delicate exterior cleaning and restoration for historic downtown building',
    services: ['Soft Washing', 'Facade Restoration', 'Historic Preservation'],
  },
  {
    id: 5,
    category: 'commercial',
    title: 'Corporate Office Building',
    location: 'Austin, TX',
    date: 'December 2023',
    // Only after image - no before
    afterImage: '/before-after/CorprateOffice.jpeg',
    description:
      'High-rise window cleaning and facade maintenance for corporate office building',
    services: [
      'High-Rise Window Cleaning',
      'Facade Cleaning',
      'Pressure Washing',
    ],
  },
  {
    id: 6,
    category: 'residential',
    title: 'Modern Residential Home',
    location: 'Austin, TX',
    date: 'November 2023',
    // Only after image - no before
    afterImage: '/before-after/ResedentialHome.png',
    description:
      'Complete exterior cleaning for modern residential home including pressure washing and window cleaning',
    services: ['Pressure Washing', 'Window Cleaning', 'Exterior Soft Wash'],
  },
]

const categories = [
  { id: 'all', label: 'All Projects', icon: null },
  { id: 'commercial', label: 'Commercial', icon: Building2 },
  { id: 'residential', label: 'Residential', icon: null },
  { id: 'construction', label: 'Construction', icon: null },
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  const featuredProject = projects.find((p) => p.highlight)

  return (
    <section id="portfolio" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              See The Transformation
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Trusted by Austin's premier businesses and homeowners. Drag the
              slider to see the dramatic before & after results.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`transform rounded-full px-6 py-3 font-semibold transition-all hover:scale-105 ${
                  selectedCategory === cat.id
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Featured Project */}
          {featuredProject && (
            <div className="mb-16">
              <div className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-1">
                <div className="rounded-xl bg-white p-8">
                  <div className="mb-4 flex items-center gap-2">
                    <Star className="h-5 w-5 fill-current text-yellow-500" />
                    <span className="text-sm font-semibold text-yellow-600">
                      Featured Project
                    </span>
                  </div>

                  <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div>
                      <h3 className="mb-2 text-2xl font-bold text-gray-900">
                        {featuredProject.title}
                      </h3>
                      <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {featuredProject.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {featuredProject.date}
                        </div>
                      </div>
                      <p className="mb-4 text-gray-700">
                        {featuredProject.description}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {featuredProject.services.map((service, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      {featuredProject.testimonial && (
                        <blockquote className="border-l-4 border-yellow-400 pl-4 text-gray-700 italic">
                          "{featuredProject.testimonial}"
                        </blockquote>
                      )}
                    </div>

                    <div className="relative">
                      {featuredProject.beforeImage &&
                      featuredProject.afterImage ? (
                        <BeforeAfterSlider
                          beforeImage={featuredProject.beforeImage}
                          afterImage={featuredProject.afterImage}
                          className="rounded-lg shadow-xl"
                        />
                      ) : (
                        <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl">
                          <Image
                            src={
                              featuredProject.afterImage ||
                              featuredProject.beforeImage
                            }
                            alt={featuredProject.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  {project.beforeImage && project.afterImage ? (
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.afterImage}
                      className="h-80 w-full"
                    />
                  ) : (
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={project.afterImage || project.beforeImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-900 backdrop-blur-sm">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-yellow-600">
                    {project.title}
                  </h3>

                  <div className="mb-3 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>

                  <p className="mb-4 line-clamp-2 text-sm text-gray-700">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      >
                        {service}
                      </span>
                    ))}
                    {project.services.length > 3 && (
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                        +{project.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">
                Ready to Transform Your Property?
              </h3>
              <p className="mx-auto mb-6 max-w-2xl text-gray-300">
                Join hundreds of satisfied customers who trust GT Site Solutions
                for their exterior cleaning needs.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="tel:+15125550123"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-400 px-8 py-3 font-semibold text-black transition-colors hover:bg-yellow-300"
                >
                  Get Free Quote
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
