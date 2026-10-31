import { Navbar } from '@/components/navbar'
import { services } from '@/lib/services'
import { jsonLd, site } from '@/lib/site'
import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: '%s | GT Site Solutions',
    default: 'GT Site Solutions | Exterior Cleaning in Austin, TX',
  },
}

// Sitewide business details for search engines
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/before-after/CorprateOffice.jpeg`,
  telephone: site.phoneE164,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: site.serviceAreas.map((name) => ({ '@type': 'City', name: `${name}, TX` })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Exterior cleaning services',
    itemListElement: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: `${site.url}/services/${s.slug}` },
    })),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="GT Site Solutions Blog"
          href="/blog/feed.xml"
        />
      </head>
      <body className="overflow-x-hidden text-gray-950 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(businessSchema)} />
        <Navbar />
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
