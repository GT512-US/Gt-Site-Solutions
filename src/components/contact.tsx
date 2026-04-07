'use client'

import { CheckCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to send message')
      setIsSubmitting(false)
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      }, 5000)
    } catch (err) {
      setIsSubmitting(false)
      setError(
        err instanceof Error ? err.message : 'Failed to send message. Please try again.',
      )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass =
    'font-sans w-full border border-[#ddd] bg-white px-4 py-3.5 text-[14px] text-[#0f0f0f] placeholder-[#bbb] outline-none transition focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15]'
  const labelClass =
    'font-sans mb-2 block text-[11px] font-bold uppercase tracking-[0.08em] text-[#555]'

  return (
    <section id="contact" className="bg-[#f5f3ef] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="font-sans mb-3 inline-block bg-[#0f0f0f] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#facc15]">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-[56px] font-bold uppercase leading-[0.92] text-[#0f0f0f] lg:text-[72px]">
            Request Your<br />Free Quote
          </h2>
          <p className="font-sans mt-4 max-w-xl text-[17px] leading-relaxed text-[#666]">
            Get a detailed quote within 24 hours. No obligations, just honest
            pricing.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          {/* Info panel */}
          <div className="bg-[#0f0f0f] p-8 lg:p-10">
            <div>
              <h3 className="font-display mb-4 text-[26px] font-bold uppercase text-white">
                Let's Transform Your Property
              </h3>
              <p className="font-sans mb-8 text-[14px] leading-relaxed text-white/50">
                Contact us today for a free consultation and quote. Our team is
                ready to help you achieve exceptional results.
              </p>

              <div className="flex flex-col gap-7">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-[#facc15]/15">
                    <svg className="h-4 w-4 fill-[#facc15]" viewBox="0 0 24 24">
                      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white/40">
                      Call Us Directly
                    </p>
                    <a href="tel:5127483225" className="font-display block text-[22px] font-bold text-[#facc15] hover:opacity-80">
                      (512) 748-3225
                    </a>
                    <p className="font-sans text-[12px] text-white/35">Ruben – CEO</p>
                    <a href="tel:5126897606" className="font-display mt-1.5 block text-[22px] font-bold text-[#facc15] hover:opacity-80">
                      (512) 689-7606
                    </a>
                    <p className="font-sans text-[12px] text-white/35">Dounia Mohad – CMO</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-[#facc15]/15">
                    <svg className="h-4 w-4 fill-none stroke-[#facc15]" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white/40">
                      Email Us
                    </p>
                    <a href="mailto:Ruben@gtsitesolutions.com" className="font-sans block text-[14px] text-[#facc15] hover:opacity-80">
                      Ruben@gtsitesolutions.com
                    </a>
                    <p className="font-sans text-[12px] text-white/35">Ruben – CEO</p>
                    <a href="mailto:Dounia@gtsitesolutions.com" className="font-sans mt-1.5 block text-[14px] text-[#facc15] hover:opacity-80">
                      Dounia@gtsitesolutions.com
                    </a>
                    <p className="font-sans text-[12px] text-white/35">Dounia Mohad – CMO</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-[#facc15]/15">
                    <svg className="h-4 w-4 fill-none stroke-[#facc15]" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white/40">
                      Business Hours
                    </p>
                    <p className="font-sans text-[14px] text-white/65">Mon–Fri: 7:00 AM – 6:00 PM</p>
                    <p className="font-sans text-[14px] text-white/65">Saturday: 8:00 AM – 4:00 PM</p>
                    <p className="font-sans mt-1.5 text-[13px] text-[#facc15]">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="mt-8 border-t border-white/[0.08] pt-8">
                <div className="grid grid-cols-3 gap-[1px] bg-white/[0.08]">
                {[
                  { val: '100%', label: 'Insured' },
                  { val: '3+', label: 'Years' },
                  { val: '500+', label: 'Projects' },
                ].map((b) => (
                  <div key={b.label} className="bg-[#0f0f0f] py-4 text-center">
                    <div className="font-display text-[24px] font-bold text-[#facc15]">{b.val}</div>
                    <div className="font-sans text-[10px] uppercase tracking-[0.08em] text-white/40">{b.label}</div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Your Name *</label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="John Smith" className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                <input
                  type="tel" id="phone" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  placeholder="(512) 555-0123" className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Email Address *</label>
              <input
                type="email" id="email" name="email" required
                value={formData.email} onChange={handleChange}
                placeholder="john@example.com" className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="service" className={labelClass}>Service Needed *</label>
              <select
                id="service" name="service" required
                value={formData.service} onChange={handleChange}
                className={inputClass}
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
              <label htmlFor="message" className={labelClass}>Project Details</label>
              <textarea
                id="message" name="message" rows={4}
                value={formData.message} onChange={handleChange}
                placeholder="Tell us about your project, property size, timeline, etc..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && (
              <div className="border border-red-200 bg-red-50 px-4 py-3">
                <p className="font-sans text-[13px] text-red-600">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`font-display flex w-full items-center justify-center gap-2 py-4 text-[16px] font-bold uppercase tracking-[0.06em] transition-opacity disabled:opacity-70 ${
                isSubmitted
                  ? 'bg-green-500 text-white'
                  : 'bg-[#facc15] text-[#0f0f0f] hover:opacity-90'
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
                  <Send className="h-4 w-4" />
                  Get Free Quote
                </>
              )}
            </button>

            <p className="font-sans text-center text-[12px] text-[#999]">
              By submitting this form, you agree to be contacted regarding your
              service request.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
