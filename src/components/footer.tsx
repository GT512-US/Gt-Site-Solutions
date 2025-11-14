import { Container } from '@/components/container'
import { Logo } from '@/components/logo'
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import Link from 'next/link'

const services = [
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
    <footer className="bg-gradient-to-b from-neutral-900 to-gray-900 text-white">
      {/* Main Footer */}
      <div className="border-b border-gray-800 py-16">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Company Info */}
              <div>
                <div className="mb-6 flex items-center space-x-3">
                  <Logo className="h-12 w-auto text-white" />
                  <div>
                    <h3 className="text-2xl font-bold">Site Solutions</h3>
                    <p className="text-xs text-gray-400">
                      Professional Exterior Cleaning
                    </p>
                  </div>
                </div>
                <p className="mb-6 text-gray-400">
                  Offering high-standard services tailored specifically for your
                  project. Licensed, insured, and committed to excellence.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:5127483225"
                    className="flex items-center gap-2 text-gray-300 transition hover:text-yellow-400"
                  >
                    <Phone className="h-4 w-4" />
                    (512) 748-3225
                  </a>
                  <a
                    href="mailto:Ruben@gtsitesolutions.com"
                    className="flex items-center gap-2 text-gray-300 transition hover:text-yellow-400"
                  >
                    <Mail className="h-4 w-4" />
                    Ruben@gtsitesolutions.com
                  </a>
                  <div className="flex items-start gap-2 text-gray-300">
                    <MapPin className="mt-1 h-4 w-4" />
                    <span>Serving Austin & Surrounding Areas</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-6 text-lg font-bold">Our Services</h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service}>
                      <Link
                        href="#services"
                        className="text-gray-400 transition hover:text-yellow-400"
                      >
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="mb-6 text-lg font-bold">Service Areas</h3>
                <ul className="space-y-3">
                  {serviceAreas.map((area) => (
                    <li key={area} className="text-gray-400">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Hours & Contact */}
              <div>
                <h3 className="mb-6 text-lg font-bold">Business Hours</h3>
                <ul className="mb-6 space-y-3 text-gray-400">
                  <li>
                    <span className="text-gray-300">Monday - Friday:</span>
                    <br />
                    7:00 AM - 6:00 PM
                  </li>
                  <li>
                    <span className="text-gray-300">Saturday:</span>
                    <br />
                    8:00 AM - 4:00 PM
                  </li>
                  <li>
                    <span className="text-gray-300">Sunday:</span>
                    <br />
                    Emergency Services Only
                  </li>
                </ul>
                <div className="rounded-lg border border-yellow-400/30 bg-yellow-400/10 p-4">
                  <p className="mb-1 text-sm font-semibold text-yellow-400">
                    24/7 Emergency
                  </p>
                  <p className="text-xs text-gray-400">
                    Call for urgent cleaning needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-400">
                  © {new Date().getFullYear()} GT Site Solutions. All rights
                  reserved.
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Ruben - CEO | Owner
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-yellow-400"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-yellow-400"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-yellow-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/privacy"
                  className="text-gray-400 transition hover:text-yellow-400"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-gray-400 transition hover:text-yellow-400"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
