import Image from 'next/image'

export function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <Image
        src="/images/Appartment.jpeg"
        alt="Apartment building exterior cleaning"
        fill
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white">
            "GT Site Solutions transformed our apartment complex exterior.
            Professional, efficient, and our residents love the clean, fresh
            look!"
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Sarah Martinez</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Property Manager, Austin Heights Apartments
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}
