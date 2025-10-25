import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { MdxContent } from '@/components/mdx-content'
import { Navbar } from '@/components/navbar'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getPostData(params.slug)
  if (!post) {
    return {}
  }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="overflow-hidden bg-neutral-900 pt-20">
      <div className="relative z-10">
        <Navbar />
      </div>
      <Container className="py-2">
        <div className="mx-auto max-w-6xl">
          <div className="mt-12 overflow-hidden rounded-xl bg-neutral-800 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              className="h-64 w-full object-cover sm:h-80 md:h-96"
            />
          </div>
        </div>
      </Container>
      <Container className="py-24">
        <div className="prose prose-invert prose-xl mx-auto max-w-6xl">
          <div className="leading-relaxed text-white">
            <MdxContent content={post.content} />
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}
