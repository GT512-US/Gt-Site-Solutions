import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Heading, Lead } from '@/components/text'
import { Shield } from 'lucide-react'

export function Header() {
  return (
    <div className="relative overflow-hidden pt-24 sm:pt-32">
      {/* Background with modern overlay */}
      <div className="absolute inset-0 bg-neutral-800">
        <img
          src="/linked-avatars/hero-bg.png"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-64 w-64 rounded-full bg-accent/10 blur-2xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/20 px-4 py-2 backdrop-blur-sm">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-semibold text-accent">
              Licensed & Insured • 6+ Years
            </span>
          </div>
          <Heading as="h1" className="mt-6 text-white">
            About GT Site Solutions
          </Heading>
          <Lead className="mt-6 text-white/90">
            We are a team of dedicated professionals committed to providing the
            best exterior cleaning services in Austin, TX. Our mission is to
            deliver exceptional quality and value to our clients.
          </Lead>
        </div>

        <div className="mt-20 mb-10">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm">
              <dt className="text-sm/6 text-white/70">Years in Business</dt>
              <dd className="order-first text-5xl font-bold tracking-tight text-white">
                <AnimatedNumber start={4} end={6} />+
              </dd>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm">
              <dt className="text-sm/6 text-white/70">Projects Completed</dt>
              <dd className="order-first text-5xl font-bold tracking-tight text-white">
                <AnimatedNumber start={300} end={500} />+
              </dd>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm">
              <dt className="text-sm/6 text-white/70">Satisfaction Rate</dt>
              <dd className="order-first text-5xl font-bold tracking-tight text-white">
                <AnimatedNumber start={95} end={100} />%
              </dd>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm">
              <dt className="text-sm/6 text-white/70">Response Time</dt>
              <dd className="order-first text-5xl font-bold tracking-tight text-white">
                <AnimatedNumber start={12} end={24} />
                hr
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </div>
  )
}
