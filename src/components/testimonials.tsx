'use client'

import { motion } from 'framer-motion'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' as const, delay },
})

const featured = {
  name: 'John P.',
  initial: 'J',
  type: 'Commercial Client',
  text: 'GT Exterior Services LLC are absolutely the BEST! GT was fast and professional and went beyond their proposal to make our pavement look brand new. I recommend GT to both residential and commercial entities.',
  rating: 5,
}

const reviews = [
  {
    name: 'Phil C.',
    initial: 'P',
    text: "We've had GT Exterior Services pressure wash our exterior surfaces. They did an excellent job! They are competent, professional, and friendly. We highly recommend them!",
    rating: 5,
    type: 'residential',
  },
  {
    name: 'Mary G.',
    initial: 'M',
    text: 'GT Exterior Services cleaned the limestone chimney, exterior walls and walkway of my house. They look SO MUCH BETTER! The price was fair and the guys were very professional.',
    rating: 5,
    type: 'residential',
  },
  {
    name: 'Reid',
    initial: 'R',
    text: 'Ruben and his team were extremely knowledgeable, professional, and most importantly, Got The Job Done Right!! I would absolutely recommend their services to family and friends.',
    rating: 5,
    type: 'commercial',
  },
]

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '5/5', label: 'Average Rating' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '3+', label: 'Years Trusted' },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#0f0f0f] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <motion.div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between" {...inView()}>
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#3b82f6]">
              Testimonials
            </span>
            <h2 className="font-display text-[56px] font-bold uppercase leading-[0.92] text-white lg:text-[72px]">
              What Our<br />Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-[#3b82f6]" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-sans text-sm text-white/50">5.0 / 5.0 Average</span>
          </div>
        </motion.div>

        {/* Featured quote */}
        <motion.div className="mb-10 border-l-[3px] border-[#3b82f6] pl-6 lg:pl-8" {...inView(0.1)}>
          <p className="font-sans mb-6 text-xl leading-relaxed text-white italic lg:text-2xl lg:leading-relaxed">
            "{featured.text}"
          </p>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#3b82f6]">
              <span className="font-display text-[15px] font-bold text-[#0f0f0f]">
                {featured.initial}
              </span>
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-white">{featured.name}</p>
              <p className="font-sans text-xs text-white/40">{featured.type}</p>
            </div>
          </div>
        </motion.div>

        {/* Review grid */}
        <div className="mb-12 grid gap-[2px] bg-[#ffffff08] lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="flex flex-col gap-4 bg-[#0f0f0f] p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: 'easeOut' as const, delay: i * 0.1 }}
            >
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-[#3b82f6]" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-sans flex-1 text-[14px] leading-relaxed text-white/65 italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#3b82f6]/20">
                  <span className="font-display text-[12px] font-bold text-[#3b82f6]">
                    {review.name[0]}
                  </span>
                </div>
                <span className="font-sans text-[13px] font-semibold text-white/70">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-[1px] bg-[#ffffff08] lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="bg-[#0f0f0f] px-6 py-7 text-center">
              <div className="font-display mb-1 text-[40px] font-bold leading-none text-[#3b82f6]">
                {s.value}
              </div>
              <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-white/40">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
