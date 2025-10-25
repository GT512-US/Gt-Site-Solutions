import { Container } from '@/components/container';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Heading, Lead, Subheading } from '@/components/text';
import { getSortedPostsData } from '@/lib/posts';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - GT Site Solutions',
  description: 'Read our latest articles and project showcases.',
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <main className="overflow-hidden bg-neutral-900">
      <div className="relative z-10">
        <Navbar />
      </div>
      <Container className="py-20 sm:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <Subheading>Blog</Subheading>
          <Heading as="h1" className="mt-2 text-white">Our Latest Projects & Articles</Heading>
          <Lead className="mt-6 text-white/70">
            Stay up to date with our latest work and get tips on exterior cleaning.
          </Lead>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {allPosts.map(({ id, date, title, excerpt, image, author }) => (
            <Link href={`/blog/${id}`} key={id} className="group relative block h-64 rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative flex flex-col h-full p-8">
                <p className="text-sm text-white/70">{date}</p>
                <h3 className="mt-2 text-lg font-medium text-white">{title}</h3>
                <p className="mt-4 text-sm text-white/70 flex-grow">{excerpt}</p>
                <p className="text-sm font-semibold text-white mt-4">By {author}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}