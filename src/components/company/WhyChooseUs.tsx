import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'

export function WhyChooseUs() {
  return (
    <div className="bg-neutral-900 py-20 sm:py-32">
      <Container>
        <Subheading>Why choose GT Site Solutions</Subheading>
        <Heading as="h3" className="mt-2 text-white">
          Licensed, insured, and committed to excellence.
        </Heading>
        <Lead className="mt-6 max-w-3xl text-white/70">
          When you choose GT Site Solutions, you're partnering with Austin's most trusted
          exterior cleaning professionals.
        </Lead>
        <ul
          role="list"
          className="mx-auto mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <li className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white">Licensed & Insured</h3>
            <p className="mt-4 text-sm/6 text-white/70">
              We're fully licensed and carry comprehensive insurance coverage for your
              complete peace of mind. All work is performed by trained, background-checked
              professionals who follow industry best practices and safety protocols.
            </p>
          </li>
          <li className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white">Eco-Friendly Solutions</h3>
            <p className="mt-4 text-sm/6 text-white/70">
              Our cleaning processes use environmentally responsible products and techniques
              that are safe for your family, pets, and landscaping while still delivering
              powerful cleaning results that protect your property.
            </p>
          </li>
          <li className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white">Professional Equipment</h3>
            <p className="mt-4 text-sm/6 text-white/70">
              We invest in commercial-grade equipment and maintain it to the highest standards.
              Our professional tools ensure consistent, efficient cleaning that delivers
              superior results every time.
            </p>
          </li>
          <li className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-lg font-medium text-white">Satisfaction Guarantee</h3>
            <p className="mt-4 text-sm/6 text-white/70">
              We stand behind our work with a 100% satisfaction guarantee. If you're not
              completely happy with our service, we'll return and make it right at no
              additional cost to you.
            </p>
          </li>
        </ul>
      </Container>
    </div>
  )
}