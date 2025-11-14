'use client'

import { Container } from '@/components/container'
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      }, 5000)
    } catch (err) {
      setIsSubmitting(false)
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to send message. Please try again.',
      )
      console.error('Error submitting form:', err)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="text-sm font-semibold tracking-wider text-yellow-500 uppercase">
              Get In Touch
            </span>
            <h2 className="mt-2 mb-4 text-4xl font-black text-gray-900 md:text-5xl">
              Request Your Free Quote
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Get a detailed quote within 24 hours. No obligations, just honest
              pricing.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <div className="h-full rounded-3xl bg-gradient-to-br from-gray-900 to-black p-8 text-white lg:p-10">
                <h3 className="mb-6 text-2xl font-bold">
                  Let's Transform Your Property
                </h3>
                <p className="mb-8 text-gray-300">
                  Contact us today for a free consultation and quote. Our team
                  is ready to help you achieve exceptional results.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-yellow-400/20 p-3">
                      <Phone className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">Call Us Directly</p>
                      <div className="space-y-1">
                        <a
                          href="tel:5127483225"
                          className="block text-xl text-yellow-400 hover:text-yellow-300"
                        >
                          (512) 748-3225
                        </a>
                        <p className="text-sm text-gray-400">Ruben - CEO</p>
                        <a
                          href="tel:5126897606"
                          className="block text-xl text-yellow-400 hover:text-yellow-300"
                        >
                          (512) 689-7606
                        </a>
                        <p className="text-sm text-gray-400">
                          Dounia Mohad - CMO
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-yellow-400/20 p-3">
                      <Mail className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">Email Us</p>
                      <div className="space-y-1">
                        <a
                          href="mailto:Ruben@gtsitesolutions.com"
                          className="block text-yellow-400 hover:text-yellow-300"
                        >
                          Ruben@gtsitesolutions.com
                        </a>
                        <p className="text-sm text-gray-400">Ruben - CEO</p>
                        <a
                          href="mailto:Dounia@gtsitesolutions.com"
                          className="block text-yellow-400 hover:text-yellow-300"
                        >
                          Dounia@gtsitesolutions.com
                        </a>
                        <p className="text-sm text-gray-400">
                          Dounia Mohad - CMO
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-yellow-400/20 p-3">
                      <MapPin className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">Service Area</p>
                      <p className="text-gray-300">
                        Austin & Surrounding Areas
                      </p>
                      <p className="mt-1 text-sm text-gray-400">
                        Round Rock, Cedar Park, Pflugerville
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-yellow-400/20 p-3">
                      <Clock className="h-5 w-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="mb-1 font-semibold">Business Hours</p>
                      <p className="text-gray-300">
                        Mon-Fri: 7:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-300">
                        Saturday: 8:00 AM - 4:00 PM
                      </p>
                      <p className="mt-1 text-sm text-yellow-400">
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-8 border-t border-white/10 pt-8">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        100%
                      </div>
                      <div className="text-xs text-gray-400">Insured</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        3+
                      </div>
                      <div className="text-xs text-gray-400">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">
                        500+
                      </div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition outline-none focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition outline-none focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                        placeholder="(512) 555-0123"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition outline-none focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 py-3 transition outline-none focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select a service...</option>
                    <option value="construction">Construction Clean</option>
                    <option value="pressure">Pressure Washing</option>
                    <option value="windows">Window Cleaning</option>
                    <option value="parking">Parking Lot Services</option>
                    <option value="gutter">Gutter Cleaning</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="other">Other / Custom</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Project Details
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute top-3 left-3 h-5 w-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-lg border border-gray-300 py-3 pr-4 pl-10 transition outline-none focus:border-transparent focus:ring-2 focus:ring-yellow-400"
                      placeholder="Tell us about your project, property size, timeline, etc..."
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`flex w-full transform items-center justify-center gap-2 rounded-lg py-4 text-lg font-bold transition-all hover:scale-[1.02] ${
                    isSubmitted
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-400 text-black shadow-lg hover:bg-yellow-300 hover:shadow-xl'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Quote Request Sent!
                    </>
                  ) : isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Get Free Quote
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to be contacted regarding
                  your service request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
