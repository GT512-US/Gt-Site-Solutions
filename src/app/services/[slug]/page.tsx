import { Footer } from '@/components/footer'
import { projects, type Project } from '@/lib/projects'
import { commonFaqs, getService, services } from '@/lib/services'
import { jsonLd, site } from '@/lib/site'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  const path = `/services/${service.slug}`
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: path },
    openGraph: {
      title: service.title,
      description: service.description,
      url: path,
      siteName: site.name,
      locale: 'en_US',
      type: 'website',
      // Setting openGraph here replaces the inherited app/opengraph-image, so name it again
      images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630 }],
    },
  }
}

const steps = [
  {
    title: 'Tell us about the job',
    body: `Call ${site.phone} or send the quote form with the property and the service you need.`,
  },
  {
    title: 'Get your quote',
    body: 'We get back to you with a quote within 24 hours. No obligation.',
  },
  {
    title: 'We do the work',
    body: 'Our crew shows up on the scheduled day with the equipment the job needs.',
  },
]

// Grid columns that leave no empty cells for each number of projects
const workGrid: Record<number, string> = {
  1: 'max-w-2xl',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const url = `${site.url}/services/${service.slug}`
  const work = service.projectIds
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => !!p)
  const faqs = [...service.faqs, ...commonFaqs]
  const otherServices = services.filter((s) => s.slug !== service.slug)

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.description,
        url,
        provider: { '@id': `${site.url}/#business` },
        areaServed: site.serviceAreas.map((name) => ({ '@type': 'City', name: `${name}, TX` })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
          { '@type': 'ListItem', position: 3, name: service.name, item: url },
        ],
      },
    ],
  }

  // No overflow-hidden on <main>: it would stop the quote card from sticking
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />

      {/* Header */}
      <section className="relative bg-[#0f0f0f] pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute top-0 left-0 h-full w-[3px] bg-[#3b82f6]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <nav aria-label="Breadcrumb" className="font-sans mb-8 text-[13px] text-white/45">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/services" className="hover:text-white">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/70">{service.name}</li>
            </ol>
          </nav>
          <h1 className="font-display max-w-4xl text-[clamp(38px,10vw,52px)] font-bold uppercase leading-[0.95] tracking-tight text-white lg:text-[72px]">
            {service.h1}
          </h1>
          <p className="font-sans mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">
            {service.intro[0]}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="font-display flex items-center justify-center bg-[#3b82f6] px-7 py-4 text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-90"
            >
              Call {site.phone}
            </a>
            <Link
              href="/#contact"
              className="font-display flex items-center justify-center border border-white/25 px-7 py-4 text-[15px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:border-white/50"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-[#f5f3ef] py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_340px] lg:gap-16 lg:px-20">
          <div className="max-w-2xl">
            {service.intro.slice(1).map((p) => (
              <p key={p} className="font-sans mb-12 text-[17px] leading-relaxed text-[#444]">
                {p}
              </p>
            ))}

            <h2 className="font-display mb-5 text-[32px] font-bold uppercase leading-none text-[#0f0f0f] lg:text-[40px]">
              What’s included
            </h2>
            <ul className="mb-12 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="font-sans flex items-start gap-3 text-[15px] leading-snug text-[#333]">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3b82f6]" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-display mb-5 text-[32px] font-bold uppercase leading-none text-[#0f0f0f] lg:text-[40px]">
              Who we work with
            </h2>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {service.idealFor.map((item) => (
                <li key={item} className="font-sans flex items-start gap-3 text-[15px] leading-snug text-[#333]">
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3b82f6]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quote card */}
          <aside className="h-fit bg-[#0f0f0f] p-8 lg:sticky lg:top-28">
            <h2 className="font-display mb-3 text-[24px] font-bold uppercase text-white">Get a free quote</h2>
            <p className="font-sans mb-6 text-[14px] leading-relaxed text-white/55">
              We respond within 24 hours. Licensed and insured.
            </p>
            <a href={site.phoneHref} className="font-display block text-[26px] font-bold text-[#3b82f6] hover:opacity-80">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="font-sans mt-1 block text-[14px] text-white/70 hover:text-white">
              {site.email}
            </a>
            <div className="font-sans mt-6 border-t border-white/10 pt-6 text-[14px] leading-relaxed text-white/55">
              <p>Mon–Fri: 7:00 AM – 6:00 PM</p>
              <p>Saturday: 8:00 AM – 4:00 PM</p>
            </div>
            <Link
              href="/#contact"
              className="font-display mt-6 block bg-[#3b82f6] py-3.5 text-center text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-opacity hover:opacity-90"
            >
              Request a Quote
            </Link>
          </aside>
        </div>
      </section>

      {/* Recent work */}
      {work.length > 0 && (
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <h2 className="font-display mb-10 text-[40px] font-bold uppercase leading-[0.92] tracking-tight text-[#0f0f0f] lg:text-[56px]">
              Recent work
            </h2>
            <div className={`grid gap-[2px] border-2 border-[#d6d3cd] bg-[#d6d3cd] ${workGrid[work.length] ?? 'md:grid-cols-2 lg:grid-cols-3'}`}>
              {work.map((p) => (
                <figure key={p.id} className="flex flex-col bg-white">
                  <div className={`relative w-full ${p.composite ? 'aspect-video bg-[#0f0f0f]' : 'h-64'}`}>
                    <Image
                      src={p.afterImage}
                      alt={`${p.title} in ${p.location}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={p.composite ? 'object-contain' : 'object-cover'}
                    />
                  </div>
                  <figcaption className="flex-1 p-5">
                    <h3 className="font-display text-[18px] font-bold uppercase leading-tight text-[#0f0f0f]">
                      {p.title}
                    </h3>
                    <p className="font-sans mt-1 text-[12px] text-[#999]">{p.location}</p>
                    <p className="font-sans mt-2 text-[13px] leading-relaxed text-[#666]">{p.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="bg-[#0f0f0f] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="font-display mb-10 text-[40px] font-bold uppercase leading-[0.92] text-white lg:text-[56px]">
            How it works
          </h2>
          <ol className="grid gap-[2px] bg-white/[0.06] md:grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-[#0f0f0f] p-7">
                <span className="font-display text-[40px] font-bold leading-none text-[#3b82f6]">{i + 1}</span>
                <h3 className="font-display mt-4 text-[20px] font-bold uppercase text-white">{step.title}</h3>
                <p className="font-sans mt-2 text-[14px] leading-relaxed text-white/55">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f5f3ef] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="font-display mb-8 text-[40px] font-bold uppercase leading-[0.92] tracking-tight text-[#0f0f0f] lg:text-[56px]">
            Common questions
          </h2>
          <div className="max-w-3xl divide-y divide-[#d6d3cd] border-y border-[#d6d3cd]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="font-sans flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] font-semibold leading-snug text-[#0f0f0f] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="font-display text-[22px] leading-none text-[#3b82f6] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="font-sans mt-3 max-w-2xl text-[15px] leading-relaxed text-[#555]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="font-display mb-8 text-[32px] font-bold uppercase leading-none text-[#0f0f0f] lg:text-[40px]">
            Other services
          </h2>
          <ul className="grid gap-[2px] border-2 border-[#d6d3cd] bg-[#d6d3cd] sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <li key={s.slug} className="bg-white">
                <Link href={`/services/${s.slug}`} className="block h-full p-6 transition-colors hover:bg-[#f5f3ef]">
                  <span className="font-display block text-[20px] font-bold uppercase leading-tight text-[#0f0f0f]">
                    {s.name}
                  </span>
                  <span className="font-sans mt-1.5 block text-[13px] leading-relaxed text-[#666]">{s.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  )
}
