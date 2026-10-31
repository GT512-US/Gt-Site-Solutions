import { getSortedPostsData } from '@/lib/posts'
import { services } from '@/lib/services'
import { site } from '@/lib/site'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/services`, changeFrequency: 'monthly', priority: 0.9 },
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${site.url}/company`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${site.url}/careers`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${site.url}/blog`, changeFrequency: 'weekly', priority: 0.4 },
    ...getSortedPostsData().map((post) => ({
      url: `${site.url}/blog/${post.id}`,
      lastModified: new Date(post.date),
      priority: 0.3,
    })),
  ]
}
