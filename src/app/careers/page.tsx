import { CareersContact } from '@/components/careers-contact'

export const metadata = {
  title: 'Careers - Join Our Team | GT Site Solutions',
  description:
    'Join the GT Site Solutions team. We are looking for dedicated professionals who are passionate about delivering exceptional service.',
}

const benefits = [
  {
    title: 'Growth Opportunities',
    description: 'Clear career progression and advancement paths within a growing company.',
  },
  {
    title: 'Professional Training',
    description: 'Ongoing training and certification programs to sharpen your skills.',
  },
  {
    title: 'Team Environment',
    description: 'Supportive, family-like work culture where everyone looks out for each other.',
  },
  {
    title: 'Competitive Pay',
    description: 'Industry-leading compensation and benefits package.',
  },
]

export default function CareersPage() {
  return (
    <main className="bg-[#0f0f0f]">
      {/* Hero */}
      <section className="relative bg-[#0f0f0f] pt-36 pb-24">
        <div className="absolute inset-0">
          <img
            src="/linked-avatars/hero-bg.png"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
        </div>

        {/* Yellow left accent */}
        <div className="absolute top-0 left-0 h-full w-[3px] bg-[#3b82f6]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
          <span className="font-sans inline-block bg-[#3b82f6] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
            Join Our Team
          </span>
          <h1 className="font-display mt-4 text-[52px] font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-[80px]">
            Build Your Career<br />
            <span className="text-[#3b82f6]">With GT Site Solutions</span>
          </h1>
          <p className="font-sans mt-6 max-w-xl text-[17px] leading-relaxed text-white/55">
            We&apos;re growing and looking for dedicated professionals who share
            our commitment to excellence. Join a team that values hard work,
            integrity, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#0f0f0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-16">
            <span className="font-sans inline-block bg-[#3b82f6] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
              Why GT Site Solutions
            </span>
            <h2 className="font-display mt-4 text-[40px] font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-[56px]">
              Benefits &amp; Perks
            </h2>
          </div>

          <div className="grid gap-[1px] bg-[#3b82f6]/10 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-[#0f0f0f] p-8 transition-colors hover:bg-[#161616]"
              >
                <div className="mb-4 h-[2px] w-6 bg-[#3b82f6]" />
                <h3 className="font-display mb-3 text-[18px] font-bold uppercase tracking-[0.04em] text-white">
                  {benefit.title}
                </h3>
                <p className="font-sans text-[14px] leading-relaxed text-white/50">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Info */}
      <section className="bg-[#0f0f0f] pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="border border-[#3b82f6]/10 p-10 lg:p-14">
            <span className="font-sans inline-block bg-[#3b82f6] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
              Opportunities
            </span>
            <h2 className="font-display mt-4 text-[32px] font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-[44px]">
              Interested in Joining?
            </h2>

            <div className="mt-8 grid gap-6 text-white/55 md:grid-cols-2">
              <div>
                <div className="mb-2 h-[2px] w-6 bg-[#3b82f6]" />
                <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white">
                  Service Area
                </p>
                <p className="font-sans mt-1 text-[15px] leading-relaxed">
                  Austin &amp; Surrounding Areas
                </p>
              </div>
              <div>
                <div className="mb-2 h-[2px] w-6 bg-[#3b82f6]" />
                <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-white">
                  Who We&apos;re Looking For
                </p>
                <p className="font-sans mt-1 text-[15px] leading-relaxed">
                  Experienced in pressure washing, window cleaning, construction
                  cleaning, or looking to start a new career — we want to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <CareersContact />
    </main>
  )
}
