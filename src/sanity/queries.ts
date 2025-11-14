type Post = {
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  mainImage?: any
  author?: { name: string }
}

export async function getPostsForFeed(): Promise<Post[]> {
  // This would normally fetch from Sanity
  // For now, return empty array to prevent build errors
  return []
}
