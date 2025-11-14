'use client'

import { Container } from '@/components/container'
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  Briefcase,
  FileText,
} from 'lucide-react'
import { useState } from 'react'

export function CareersContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
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
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send application')
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
          interest: '',
          message: '',
        })
      }, 5000)
    } catch (err) {
      setIsSubmitting(false)
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to send application. Please try again.',
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
    <section id="apply" className="bg-neutral-900 py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="text-sm font-semibold tracking-wider text-yellow-400 uppercase">
              Get In Touch
            </span>
            <h2 className="mt-2 mb-4 text-4xl font-black text-white md:text-5xl">
              Submit Your Inquiry
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-400">
              Tell us about yourself and why you&apos;d be a great fit for our team.
              We&apos;ll get back to you within 48 hours.
            </p>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-800/50 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-300"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-700 bg-neutral-900 py-3 pr-4 pl-10 text-white transition outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-300"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-700 bg-neutral-900 py-3 pr-4 pl-10 text-white transition outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                      placeholder="(512) 555-0123"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-300"
                >
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-neutral-700 bg-neutral-900 py-3 pr-4 pl-10 text-white transition outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="mb-2 block text-sm font-semibold text-gray-300"
                >
                  Area of Interest *
                </label>
                <div className="relative">
                  <Briefcase className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
                  <select
                    id="interest"
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-lg border border-neutral-700 bg-neutral-900 py-3 pr-4 pl-10 text-white transition outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                  >
                    <option value="">Select your area of interest...</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="construction-clean">Construction Cleaning</option>
                    <option value="parking-lot">Parking Lot Services</option>
                    <option value="gutter-cleaning">Gutter Cleaning</option>
                    <option value="management">Management/Operations</option>
                    <option value="general">General Labor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-300"
                >
                  Tell Us About Yourself *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute top-3 left-3 h-5 w-5 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border border-neutral-700 bg-neutral-900 py-3 pr-4 pl-10 text-white transition outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400"
                    placeholder="Tell us about your experience, skills, and why you want to join our team..."
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-lg border border-red-800 bg-red-900/20 p-4">
                  <p className="text-sm text-red-400">{error}</p>
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
                    Inquiry Submitted!
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                By submitting this inquiry, you agree to be contacted regarding
                employment opportunities.
              </p>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
              You can also email your resume directly to{' '}
              <a
                href="mailto:Ruben@gtsitesolutions.com"
                className="font-semibold text-yellow-400 hover:text-yellow-300"
              >
                Ruben@gtsitesolutions.com
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
