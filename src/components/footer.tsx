import Link from 'next/link'
import { Logo } from '@/components/logo'

const serviceLinks = [
  'Construction Cleans',
  'Pressure Washing',
  'Window Cleaning',
  'Gutter Cleaning',
  'Parking Lot Striping',
  'Site Clean Up',
]

const serviceAreas = [
  'Austin',
  'Round Rock',
  'Cedar Park',
  'Pflugerville',
  'Lakeway',
  'Westlake Hills',
]

export function Footer() {
  return (
    <footer className="bg-[#0f0f0f]">
      {/* Main footer */}
      <div className="border-b border-white/[0.06] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Logo className="h-10 w-auto text-white" />
                <div>
                  <div className="font-display text-lg font-bold uppercase text-white">
                    Site Solutions
                  </div>
                  <div className="font-sans text-[11px] text-white/40">
                    Professional Exterior Cleaning
                  </div>
                </div>
              </div>
              <p className="font-sans text-[13px] leading-relaxed text-white/50">
                Offering high-standard services tailored specifically for your
                project. Licensed, insured, and committed to excellence.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:5127483225"
                  className="font-sans flex items-center gap-2 text-[13px] text-white/55 transition-colors hover:text-[#facc15]"
                >
                  <svg className="h-3.5 w-3.5 fill-[#facc15]" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  (512) 748-3225
                </a>
                <a
                  href="mailto:Ruben@gtsitesolutions.com"
                  className="font-sans flex items-center gap-2 text-[13px] text-white/55 transition-colors hover:text-[#facc15]"
                >
                  <svg className="h-3.5 w-3.5 fill-none stroke-[#facc15]" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Ruben@gtsitesolutions.com
                </a>
                <div className="font-sans flex items-start gap-2 text-[13px] text-white/55">
                  <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 fill-[#facc15]" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  Serving Austin &amp; Surrounding Areas
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display mb-5 text-[14px] font-bold uppercase tracking-[0.06em] text-white">
                Our Services
              </h4>
              <ul className="flex flex-col gap-2.5">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <Link
                      href="#services"
                      className="font-sans text-[13px] text-white/45 transition-colors hover:text-[#facc15]"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="font-display mb-5 text-[14px] font-bold uppercase tracking-[0.06em] text-white">
                Service Areas
              </h4>
              <ul className="flex flex-col gap-2.5">
                {serviceAreas.map((a) => (
                  <li
                    key={a}
                    className="font-sans text-[13px] text-white/45"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-display mb-5 text-[14px] font-bold uppercase tracking-[0.06em] text-white">
                Business Hours
              </h4>
              <ul className="mb-5 flex flex-col gap-3 text-white/45">
                <li>
                  <span className="font-sans block text-[12px] font-semibold text-white/60">
                    Monday – Friday
                  </span>
                  <span className="font-sans text-[13px]">7:00 AM – 6:00 PM</span>
                </li>
                <li>
                  <span className="font-sans block text-[12px] font-semibold text-white/60">
                    Saturday
                  </span>
                  <span className="font-sans text-[13px]">8:00 AM – 4:00 PM</span>
                </li>
                <li>
                  <span className="font-sans block text-[12px] font-semibold text-white/60">
                    Sunday
                  </span>
                  <span className="font-sans text-[13px]">Emergency Services Only</span>
                </li>
              </ul>
              <div className="border border-[#facc15]/30 bg-[#facc15]/10 px-4 py-3">
                <p className="font-sans mb-0.5 text-[12px] font-bold text-[#facc15]">
                  24/7 Emergency
                </p>
                <p className="font-sans text-[11px] text-white/40">
                  Call for urgent cleaning needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="font-sans text-[13px] text-white/35">
                © {new Date().getFullYear()} GT Site Solutions. All rights reserved.
              </p>
              <p className="font-sans mt-0.5 text-[11px] text-white/25">
                Ruben – CEO | Owner
              </p>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex h-8 w-8 items-center justify-center bg-white/[0.06] text-white/50 transition-colors hover:bg-[#facc15]/20 hover:text-[#facc15]" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center bg-white/[0.06] text-white/50 transition-colors hover:bg-[#facc15]/20 hover:text-[#facc15]" aria-label="Instagram">
                <svg className="h-4 w-4 fill-none stroke-current" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center bg-white/[0.06] text-white/50 transition-colors hover:bg-[#facc15]/20 hover:text-[#facc15]" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
            </div>
            {/* Legal */}
            <div className="flex gap-5">
              <Link href="/privacy" className="font-sans text-[13px] text-white/35 hover:text-white/60">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-sans text-[13px] text-white/35 hover:text-white/60">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
