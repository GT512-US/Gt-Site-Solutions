'use client'

import { Container } from '@/components/container'
import {
  Building2,
  ChevronLeft,
  ChevronRight,
  Home,
  Quote,
  Star,
} from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'John P.',
    text: 'GT Exterior Services LLC are absolutely the BEST! GT was fast and professional and went beyond their proposal to make our pavement look brand new. I recommend GT to both residential and commercial entities.',
    rating: 5,
    type: 'commercial',
    featured: true,
  },
  {
    id: 2,
    name: 'Lauryn H.',
    text: "GT Exterior Services did an amazing job with our window cleaning and graffiti removal! My family runs a locally owned business and wanted to make sure our storefront looked its best. The team was super friendly and professional, and they really knew what they were doing. They used some kind of magic solution that left our windows looking crystal clear, and they got rid of the graffiti like it was never there. We were really impressed with their commitment to quality and their attention to detail. Overall, we would highly recommend GT Exterior Services to anyone looking for top-tier exterior cleaning services. They're the best!",
    rating: 5,
    type: 'commercial',
  },
  {
    id: 3,
    name: 'Phil C.',
    text: "We've had GT Exterior Services pressure wash our exterior surfaces. They did an excellent job! They are competent, professional, and friendly. We highly recommend them! You can't go wrong by calling them!",
    rating: 5,
    type: 'residential',
  },
  {
    id: 4,
    name: 'Mary G.',
    text: 'GT Exterior Services cleaned the limestone chimney, exterior walls and walkway of my house. They look SO MUCH BETTER! The price was fair and the guys were very professional. I will definitely use them again!',
    rating: 5,
    type: 'residential',
  },
  {
    id: 5,
    name: 'Dylan C.',
    text: "GT Exterior Services delivered outstanding window cleaning, building wash, and surface cleaning services for our commercial property. The windows are now streak-free, offering a perfect, unobstructed view. The building exterior has been revitalized with their thorough wash, presenting our property at its absolute best. Surfaces around the property, including walkways and entry areas, were meticulously cleaned, enhancing overall safety and visual appeal. The team's professionalism and efficiency are commendable. We're thoroughly impressed and recommend GT Exterior Services for any business in need of top-quality exterior cleaning. 5 stars for a job well done!",
    rating: 5,
    type: 'commercial',
  },
  {
    id: 6,
    name: 'Reid',
    text: 'Ruben and his team were extremely knowledgeable, professional, and most importantly, Got The Job Done Right!! I would absolutely recommend their services to family and friends. Ruben and Jordan were a a pleasure to work with!',
    rating: 5,
    type: 'commercial',
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section id="testimonials" className="bg-gray-50 py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold tracking-wider text-yellow-500 uppercase">
              Testimonials
            </span>
            <h2 className="mt-2 mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Don't just take our word for it. Here's what our customers have to
              say about working with GT Site Solutions.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="mb-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-black p-8 text-white lg:p-12">
              <div className="absolute top-0 right-0 opacity-10">
                <Quote className="h-64 w-64" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="text-sm font-semibold tracking-wider text-yellow-400 uppercase">
                    Featured Review
                  </span>
                </div>

                <div className="max-w-4xl">
                  <p className="mb-8 text-2xl leading-relaxed font-light italic lg:text-3xl">
                    "{testimonials[0].text}"
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xl font-bold text-white">
                        {testimonials[0].name}
                      </p>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative rounded-2xl bg-white p-8 shadow-xl lg:p-12">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex text-yellow-400">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-current" />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <blockquote className="mb-8">
              <p className="text-xl text-gray-700 italic">
                "{activeTestimonial.text}"
              </p>
            </blockquote>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900">
                  {activeTestimonial.name}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {activeTestimonial.type === 'commercial' ? (
                  <Building2 className="h-5 w-5 text-gray-400" />
                ) : (
                  <Home className="h-5 w-5 text-gray-400" />
                )}
                <span className="text-sm text-gray-500 capitalize">
                  {activeTestimonial.type}
                </span>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-8 bg-yellow-400'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-black text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-gray-900">5/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-gray-900">3+</div>
              <div className="text-sm text-gray-600">Years Trusted</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
