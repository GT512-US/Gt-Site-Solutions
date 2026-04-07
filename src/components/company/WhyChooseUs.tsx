export function WhyChooseUs() {
  return (
    <section className="bg-[#0f0f0f] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-3">
          <span className="font-sans inline-block w-fit bg-[#facc15] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#0f0f0f]">
            Why GT Site Solutions
          </span>
          <h2 className="font-display text-[52px] font-bold uppercase leading-[0.9] tracking-tight text-white lg:text-[72px]">
            Built on Quality,<br />
            <span className="text-[#facc15]">Reliability &amp;</span><br />
            Attention to Detail
          </h2>
        </div>

        {/* Intro paragraphs */}
        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:gap-16">
          <p className="font-sans text-[16px] leading-relaxed text-white/60">
            At GT Site Solutions, we believe the difference is in the details. A properly cleaned
            exterior or well-maintained property not only improves appearance but also protects
            surfaces and creates a safer environment for customers, employees, and residents.
          </p>
          <div className="flex flex-col gap-4">
            <p className="font-sans text-[16px] leading-relaxed text-white/60">
              Our team combines professional-grade equipment with proven cleaning techniques to
              remove dirt, grime, algae, oil stains, and buildup from a wide range of surfaces.
              From driveways and storefront windows to large commercial parking lots and
              post-construction sites, we deliver results that enhance the look and longevity of
              your property.
            </p>
            <p className="font-sans text-[16px] leading-relaxed text-white/60">
              We take pride in being dependable, responsive, and easy to work with. Our team shows
              up on time, communicates clearly, and treats every property with care and respect.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mb-16 border-t border-white/[0.08]" />

        {/* Services breakdown */}
        <div className="mb-6 flex flex-col gap-2">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-[#facc15]">
            What We Offer
          </span>
          <h3 className="font-display text-[32px] font-bold uppercase leading-tight text-white lg:text-[40px]">
            Residential, Commercial<br />&amp; Construction Solutions
          </h3>
          <p className="font-sans mt-2 max-w-2xl text-[15px] leading-relaxed text-white/55">
            GT Site Solutions provides exterior cleaning and site solutions for a wide variety of
            clients across the Austin area and surrounding cities.
          </p>
        </div>

        <div className="mt-10 grid gap-[1px] bg-[#ffffff08] sm:grid-cols-3">
          {/* Residential */}
          <div className="bg-[#0f0f0f] p-8">
            <h4 className="font-display mb-5 text-[16px] font-bold uppercase tracking-[0.06em] text-[#facc15]">
              Residential Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'House washing',
                'Roof washing',
                'Gutter cleaning',
                'Driveway and sidewalk pressure washing',
                'Patio and exterior surface cleaning',
                'Residential window cleaning',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-sans text-[13px] leading-relaxed text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#facc15]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div className="bg-[#0f0f0f] p-8">
            <h4 className="font-display mb-5 text-[16px] font-bold uppercase tracking-[0.06em] text-[#facc15]">
              Commercial Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Commercial pressure washing',
                'Storefront and building window cleaning',
                'Parking lot cleaning and maintenance',
                'Parking lot striping and layout refresh',
                'Exterior cleaning for office buildings and retail centers',
                'Facade cleaning, soft washing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-sans text-[13px] leading-relaxed text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#facc15]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Construction */}
          <div className="bg-[#0f0f0f] p-8">
            <h4 className="font-display mb-5 text-[16px] font-bold uppercase tracking-[0.06em] text-[#facc15]">
              Construction Site Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Rough and final construction cleaning',
                'VCT strip and wax',
                'Pressure washing',
                'Window cleaning',
                'Parking lot striping',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-sans text-[13px] leading-relaxed text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#facc15]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-sans mt-8 text-[15px] leading-relaxed text-white/55">
          We proudly work with homeowners, property managers, business owners, contractors,
          and construction companies to keep properties looking clean, professional, and well maintained.
        </p>

        {/* Divider */}
        <div className="my-16 border-t border-white/[0.08]" />

        {/* Bottom two sections side by side */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display mb-4 text-[22px] font-bold uppercase text-white">
              Professional Equipment &amp;<br />Responsible Practices
            </h3>
            <div className="h-[2px] w-10 bg-[#facc15]" />
            <p className="font-sans mt-5 text-[15px] leading-relaxed text-white/60">
              Our experienced team uses modern equipment and industry-proven methods to safely
              and effectively clean exterior surfaces without causing damage. We are fully licensed
              and insured, and we take pride in operating with professionalism on every job site.
            </p>
            <p className="font-sans mt-4 text-[15px] leading-relaxed text-white/60">
              We are also committed to responsible cleaning practices that protect your property,
              surrounding landscaping, and the environment whenever possible.
            </p>
          </div>

          <div>
            <h3 className="font-display mb-4 text-[22px] font-bold uppercase text-white">
              Serving Austin and<br />Surrounding Areas
            </h3>
            <div className="h-[2px] w-10 bg-[#facc15]" />
            <p className="font-sans mt-5 text-[15px] leading-relaxed text-white/60">
              GT Site Solutions proudly serves Austin and surrounding communities with dependable
              exterior cleaning and site services. Whether you need a one-time cleaning or ongoing
              property maintenance, our team is ready to help keep your property looking its best.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-white/[0.08]" />

        {/* A Partner You Can Rely On — full-width */}
        <div className="bg-[#facc15] p-8 lg:p-12">
          <h3 className="font-display text-[28px] font-bold uppercase text-[#0f0f0f] lg:text-[36px]">
            A Partner You Can Rely On
          </h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <p className="font-sans text-[15px] leading-relaxed text-[#0f0f0f]/70">
              At GT Site Solutions, we understand that the appearance of your property reflects your
              business, your home, and your work. That's why we approach every project with the
              same commitment to quality, reliability, and attention to detail.
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-[#0f0f0f]/70">
              When you work with GT Site Solutions, you're partnering with a team that values
              professionalism, strong communication, and results you can see.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
