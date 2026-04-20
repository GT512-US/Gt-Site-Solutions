'use client'

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send application')
      }

      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
      }, 5000)
    } catch (err) {
      setIsSubmitting(false)
      setError(
        err instanceof Error ? err.message : 'Failed to send application. Please try again.',
      )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass =
    'w-full border border-white/10 bg-[#161616] px-4 py-3 font-sans text-[14px] text-white placeholder-white/25 outline-none transition focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]'

  const labelClass = 'font-sans mb-2 block text-[11px] font-bold uppercase tracking-[0.08em] text-white/40'

  return (
    <section id="apply" className="bg-[#0f0f0f] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <div className="mb-14">
          <span className="font-sans inline-block bg-[#3b82f6] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
            Get In Touch
          </span>
          <h2 className="font-display mt-4 text-[40px] font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-[56px]">
            Submit Your Inquiry
          </h2>
          <p className="font-sans mt-4 max-w-xl text-[15px] leading-relaxed text-white/55">
            Tell us about yourself and why you&apos;d be a great fit. We&apos;ll get back to you within 48 hours.
          </p>
        </div>

        <div className="border border-white/[0.06] p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="(512) 555-0123"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="interest" className={labelClass}>Area of Interest *</label>
              <select
                id="interest"
                name="interest"
                required
                value={formData.interest}
                onChange={handleChange}
                className={inputClass + ' appearance-none'}
              >
                <option value="">Select your area of interest...</option>
                <option value="pressure-washing">Pressure Washing</option>
                <option value="window-cleaning">Window Cleaning</option>
                <option value="construction-clean">Construction Cleaning</option>
                <option value="parking-lot">Parking Lot Services</option>
                <option value="gutter-cleaning">Gutter Cleaning</option>
                <option value="management">Management / Operations</option>
                <option value="general">General Labor</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Tell Us About Yourself *</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className={inputClass + ' resize-none'}
                placeholder="Tell us about your experience, skills, and why you want to join our team..."
              />
            </div>

            {error && (
              <div className="border border-red-500/20 bg-red-500/10 p-4">
                <p className="font-sans text-[13px] text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`font-display w-full py-4 text-[14px] font-bold uppercase tracking-[0.08em] transition-opacity ${
                isSubmitted
                  ? 'bg-white/10 text-white/60'
                  : 'bg-[#3b82f6] text-white hover:opacity-85'
              }`}
            >
              {isSubmitted ? 'Inquiry Submitted' : isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </button>

            <p className="font-sans text-center text-[12px] text-white/25">
              By submitting, you agree to be contacted regarding employment opportunities.
            </p>
          </form>
        </div>

        <div className="mt-8 text-center">
          <p className="font-sans text-[13px] text-white/40">
            Or email your resume directly to{' '}
            <a
              href="mailto:Ruben@gtsitesolutions.com"
              className="text-[#3b82f6] transition-opacity hover:opacity-75"
            >
              Ruben@gtsitesolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
