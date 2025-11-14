import { Container } from '@/components/container'
import { CareersContact } from '@/components/careers-contact'
import {
  Users,
  TrendingUp,
  Award,
  Heart,
  Briefcase,
  MapPin,
} from 'lucide-react'

export const metadata = {
  title: 'Careers - Join Our Team | GT Site Solutions',
  description:
    'Join the GT Site Solutions team. We are looking for dedicated professionals who are passionate about delivering exceptional service.',
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Clear career progression and advancement paths',
  },
  {
    icon: Award,
    title: 'Professional Training',
    description: 'Ongoing training and certification programs',
  },
  {
    icon: Users,
    title: 'Team Environment',
    description: 'Supportive, family-like work culture',
  },
  {
    icon: Heart,
    title: 'Competitive Benefits',
    description: 'Industry-leading pay and benefits package',
  },
]

export default function CareersPage() {
  return (
    <main className="bg-neutral-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black pt-32 pb-20 text-white">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-4 inline-block rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold tracking-wider text-yellow-400 uppercase">
              Join Our Team
            </span>
            <h1 className="mb-6 text-5xl font-black md:text-6xl">
              Build Your Career
              <br />
              <span className="text-yellow-400">With GT Site Solutions</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-300">
              We&apos;re growing and looking for dedicated professionals who share
              our commitment to excellence. Join a team that values hard work,
              integrity, and customer satisfaction.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="bg-neutral-900 py-20">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-yellow-400 uppercase">
              Why GT Site Solutions
            </span>
            <h2 className="mt-2 mb-4 text-4xl font-black text-white md:text-5xl">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-400">
              We believe in taking care of our team members
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-neutral-800 bg-neutral-800/50 p-8 transition-all hover:border-yellow-400 hover:bg-neutral-800"
              >
                <div className="mb-4 inline-flex rounded-lg bg-yellow-400/10 p-3">
                  <benefit.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions Info */}
      <section className="bg-neutral-900 py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-800/50 p-12 text-center">
            <Briefcase className="mx-auto mb-6 h-16 w-16 text-yellow-400" />
            <h2 className="mb-4 text-3xl font-bold text-white">
              Interested in Joining Our Team?
            </h2>
            <div className="mb-8 space-y-4 text-left text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <div>
                  <p className="font-semibold text-white">Service Area</p>
                  <p className="text-gray-400">Austin & Surrounding Areas</p>
                </div>
              </div>
              <p className="text-gray-400">
                We&apos;re always looking for talented, hardworking individuals to join our growing team.
                Whether you&apos;re experienced in pressure washing, window cleaning, construction cleaning,
                or looking to start a new career, we want to hear from you.
              </p>
              <p className="text-gray-400">
                Submit your information below and tell us why you&apos;d be a great fit for GT Site Solutions.
                We&apos;ll review your inquiry and reach out about current and future opportunities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Inquiry Form */}
      <CareersContact />
    </main>
  )
}
