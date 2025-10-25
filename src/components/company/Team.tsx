import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { ServiceItem } from './ServiceItem'

export function Team() {
  return (
    <div className="bg-neutral-900 py-20 sm:py-32">
      <Container>
        <Subheading>Meet the team</Subheading>
        <Heading as="h3" className="mt-2 text-white">
          Professional, experienced, and reliable.
        </Heading>
        <Lead className="mt-6 max-w-3xl text-white/70">
          GT Site Solutions is built on a foundation of skilled professionals
          who take pride in delivering exceptional results for every client.
        </Lead>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex h-full max-w-lg flex-col justify-between">
            <div>
              <p className="text-base/7 text-white/70">
                At GT Site Solutions, our mission is simple: to bring clarity,
                care, and craftsmanship to every project. We take pride in
                transforming worksites into safe, spotless, and professional
                spaces. We believe details matter. With a friendly team,
                reliable service, and a polished finish, we partner with
                contractors and builders to deliver sites that feel as good as
                they look. Excellence delivered, every time.
              </p>
              <p className="mt-8 text-base/7 text-white/70">
                Today, our experienced team combines state-of-the-art equipment
                with time-tested techniques to deliver results that protect your
                investment and enhance your property's value. We're fully
                licensed, insured, and committed to environmental responsibility
                in all our cleaning processes.
              </p>
            </div>
            <div className="mt-8">
              <Button className="w-full sm:w-auto" asChild>
                <a href="tel:(512)689-7606">Call (512) 689-7606</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center max-lg:order-first">
            <div className="overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                src="/before-after/Working.jpg"
                alt="GT Site Solutions team at work"
                className="h-auto max-h-[50rem] object-contain"
              />
            </div>
          </div>
        </div>
        <Subheading as="h3" className="mt-24">
          Our services
        </Subheading>
        <hr className="mt-6 border-t border-white/10" />
        <ul
          role="list"
          className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <ServiceItem
            name="Pressure Washing"
            description="Professional high-pressure cleaning for driveways, sidewalks, decks, and building exteriors"
          />
          <ServiceItem
            name="Window Cleaning"
            description="Interior and exterior window cleaning for crystal-clear views and enhanced curb appeal"
          />
          <ServiceItem
            name="Construction Cleanup"
            description="Post-construction cleaning to remove debris, dust, and construction residue"
          />
          <ServiceItem
            name="Gutter Cleaning"
            description="Complete gutter cleaning and inspection to protect your property from water damage"
          />
          <ServiceItem
            name="Deck Restoration"
            description="Deep cleaning and restoration services to bring your deck back to life"
          />
          <ServiceItem
            name="Emergency Services"
            description="24/7 emergency cleaning services for storm damage and urgent situations"
          />
        </ul>
      </Container>
    </div>
  )
}
