import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { Testimonial } from './Testimonial'

export function ContactSection() {
  return (
    <div className="bg-neutral-900 py-20 sm:py-32">
      <Container>
        <Subheading>Get in touch</Subheading>
        <Heading as="h3" className="mt-2 text-white">
          Ready to transform your property?
        </Heading>
        <Lead className="mt-6 max-w-3xl text-white/70">
          Contact us today for a free, no-obligation estimate. We're here to
          answer your questions and help you find the perfect cleaning solution
          for your property.
        </Lead>
        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
          <div className="lg:max-w-2xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="text-base font-semibold text-white">Phone</h4>
                <p className="mt-2 text-sm/6 text-white/70">
                  Call us for immediate assistance or to schedule a
                  consultation.
                </p>
                <p className="mt-4 text-lg font-semibold text-yellow-400">
                  <a href="tel:(512)748-3225">(512) 748-3225</a>
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="text-base font-semibold text-white">
                  Service Area
                </h4>
                <p className="mt-2 text-sm/6 text-white/70">
                  Proudly serving Austin and surrounding areas.
                </p>
                <p className="mt-4 text-sm font-medium text-white">
                  Austin, TX & 30-mile radius
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="text-base font-semibold text-white">
                  Business Hours
                </h4>
                <p className="mt-2 text-sm/6 text-white/70">
                  Monday - Saturday: 7:00 AM - 6:00 PM
                </p>
                <p className="text-sm/6 text-white/70">
                  Sunday: Emergency services only
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                <h4 className="text-base font-semibold text-white">
                  Response Time
                </h4>
                <p className="mt-2 text-sm/6 text-white/70">
                  We typically respond to inquiries within 24 hours.
                </p>
                <p className="mt-2 text-sm/6 text-white/70">
                  Emergency services available 24/7.
                </p>
              </div>
            </div>
          </div>
          <Testimonial />
        </div>
      </Container>
    </div>
  )
}
