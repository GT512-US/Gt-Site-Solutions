export const site = {
  name: 'GT Site Solutions',
  url: 'https://www.gtsitesolutions.com',
  phone: '(512) 748-3225',
  phoneHref: 'tel:5127483225',
  phoneE164: '+1-512-748-3225',
  email: 'Ruben@gtsitesolutions.com',
  serviceAreas: ['Austin', 'Round Rock', 'Cedar Park', 'Pflugerville', 'Lakeway', 'West Lake Hills'],
}

// Renders schema.org data as a JSON-LD script tag
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, '\\u003c') }
}
