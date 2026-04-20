import { Navbar } from '@/components/navbar'
import { SanityLive } from '@/sanity/live'
import { revalidateSyncTags } from '@/sanity/revalidateSyncTags'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - GT Site Solutions',
    default: 'GT Site Solutions - Professional Exterior Cleaning in Austin',
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
        <Navbar />
        {children}
        <SanityLive revalidateSyncTags={revalidateSyncTags} />
      </body>
    </html>
  )
}
