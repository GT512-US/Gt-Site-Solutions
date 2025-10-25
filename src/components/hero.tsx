import {
  ArrowRight,
  CheckCircle,
  Phone,
  Shield,
  Sparkles,
  Star,
} from 'lucide-react'
import { Button } from './button'

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation space */}
        <div className="h-20" />

        {/* Main content */}
        <div className="flex min-h-[calc(100vh-5rem)] items-center">
          <div className="w-full">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left column - Main content */}
              <div className="space-y-8">
                {/* Trust badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent/20 px-4 py-2 backdrop-blur-sm">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">
                    Licensed & Insured • 6+ Years
                  </span>
                </div>

                {/* Main headline */}
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
                    Professional
                    <span className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text pb-1 leading-tight text-transparent">
                      Exterior Cleaning
                    </span>
                    <span className="block text-4xl font-medium text-white sm:text-5xl lg:text-6xl">
                      That Protects Your Investment
                    </span>
                  </h1>
                </div>

                {/* Value proposition */}
                <p className="max-w-2xl text-xl leading-relaxed text-white">
                  GT Site Solutions partners with builders and contractors to
                  handle it all: interior and exterior cleaning, pressure
                  washing, window care, striping, and haul-off. Every service
                  backed by reliability and results.
                </p>

                {/* Key benefits */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: '500+ Happy Customers' },
                    { icon: Sparkles, text: 'Premium Equipment' },
                    { icon: Star, text: '5.0 Star Rating' },
                    { icon: Shield, text: 'Fully Insured' },
                  ].map((benefit) => (
                    <div key={benefit.text} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                        <benefit.icon className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-white">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button variant="hero-primary" size="xl" className="group">
                    <Phone className="h-5 w-5 transition-transform group-hover:scale-110" />
                    Get Free Quote Today
                  </Button>

                  <Button variant="hero-secondary" size="xl" className="group">
                    View Our Work
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* Right column - Service showcase */}
              <div className="hidden lg:block">
                <div className="space-y-6">
                  {/* Service cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Pressure Washing',
                      'Window Cleaning',
                      'Gutter Service',
                      'Construction Cleanup',
                    ].map((service) => (
                      <div
                        key={service}
                        className="rounded-xl border border-primary-foreground/20 bg-primary/20 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-primary/30"
                      >
                        <div className="text-sm font-semibold text-primary-foreground">
                          {service}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social proof */}
                  <div className="rounded-xl border border-primary-foreground/20 bg-primary/20 p-6 backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex text-accent">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-white">
                          5.0 Rating
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-accent">
                          500+
                        </div>
                        <div className="text-xs text-white/80">Projects</div>
                      </div>
                    </div>
                    <p className="text-sm text-white italic">
                      "Exceptional service and results. Our property looks brand
                      new!"
                    </p>
                    <p className="mt-2 text-xs text-white/80">
                      - Sarah Johnson, Homeowner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </section>
  )
}
