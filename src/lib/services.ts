import { site } from '@/lib/site'

export type Service = {
  slug: string
  name: string
  title: string
  h1: string
  description: string
  summary: string
  intro: string[]
  included: string[]
  idealFor: string[]
  projectIds: number[]
  faqs: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    title: 'Commercial & Residential Pressure Washing in Austin, TX',
    h1: 'Pressure Washing in Austin, TX',
    description: `Pressure washing and soft washing for building exteriors, storefronts, roofs, driveways, sidewalks, parking lots and garages in Austin, TX. Free quotes: ${site.phone}.`,
    summary: 'Pressure washing and soft washing for buildings, storefronts, roofs, driveways, lots and garages.',
    intro: [
      'Pressure washing is our most requested service. We clean building exteriors, storefronts, sidewalks, driveways, parking lots and parking garages for businesses and homeowners across Austin.',
      'Not every surface should be blasted. For siding, roofs and painted surfaces we soft wash, using lower pressure and a cleaning solution to lift dirt, mildew and stains without damaging what is underneath. Concrete and flatwork get higher pressure to remove grime, oil and built-up discoloration.',
    ],
    included: [
      'Building exteriors and facades',
      'Storefronts, sidewalks and walkways',
      'Houses, roofs and driveways (soft washing)',
      'Parking lots and loading areas',
      'Parking garages and structures',
      'Surface stain removal',
    ],
    idealFor: ['Retail stores and gas stations', 'Office buildings', 'Property managers', 'Homeowners'],
    projectIds: [2, 3, 7, 8, 9, 10],
    faqs: [
      {
        q: 'What is the difference between pressure washing and soft washing?',
        a: 'Pressure washing uses high water pressure to clean hard surfaces like concrete, brick and pavement. Soft washing uses low pressure with a cleaning solution, which is safer for siding, roofs, paint and other surfaces that high pressure can damage. We choose the method surface by surface.',
      },
      {
        q: 'Can you clean parking garages and parking lots?',
        a: 'Yes. We pressure wash parking garage floors and structures, parking lots and loading areas, removing oil and grime that sweeping leaves behind.',
      },
      {
        q: 'Is pressure washing safe for my house?',
        a: 'For siding, painted surfaces and roofs we soft wash instead of using high pressure. That cleans the surface without forcing water behind siding or stripping paint.',
      },
      {
        q: 'How often should a commercial property be pressure washed?',
        a: 'It depends on foot traffic, weather and how the property is used. High-traffic storefronts and walkways usually need cleaning more often than building walls. We can suggest a schedule after seeing the property.',
      },
    ],
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    title: 'Post-Construction Cleaning in Austin, TX',
    h1: 'Post-Construction Cleaning in Austin, TX',
    description: `Rough, final and job trailer cleans for general contractors and builders in Austin, TX, including glass, adhesive and debris removal. Call ${site.phone}.`,
    summary: 'Rough to final construction cleans, job trailer cleans and debris removal for contractors.',
    intro: [
      'GT Site Solutions handles construction cleaning for general contractors, builders and property managers across Austin. We clean from rough to final, so the building is ready for inspections, punch walks and handover.',
      'Construction dust does not stop at the floors. Our crews clean the glass, frames, fixtures and surfaces the trades leave behind, including the adhesive, labels and dust on new windows.',
    ],
    included: [
      'Rough clean during construction',
      'Final detailed clean before handover',
      'Window and glass cleaning, including adhesive removal',
      'Job trailer cleans',
      'Debris removal and haul-off',
    ],
    idealFor: ['General contractors and builders', 'Commercial and retail build-outs', 'Remodels and renovations', 'Campus and multifamily housing'],
    projectIds: [1, 4],
    faqs: [
      {
        q: 'What is the difference between a rough clean and a final clean?',
        a: 'A rough clean happens while work is still underway: we clear debris, sweep and remove packaging so trades can keep working and the site stays safe. A final clean happens once construction wraps up. It is a detailed clean of glass, frames, fixtures, floors and surfaces so the space is ready for inspection and handover.',
      },
      {
        q: 'Do you clean windows as part of a construction clean?',
        a: 'Yes. New windows usually arrive with stickers, adhesive and construction dust. We clean the glass and frames inside and out as part of the final clean, or as a separate window cleaning visit.',
      },
      {
        q: 'Can you work around our construction schedule?',
        a: 'Tell us your timeline when you request a quote, and we will plan the rough and final cleans around it.',
      },
      {
        q: 'Do you clean job trailers?',
        a: 'Yes. We clean job trailers on their own or as part of a larger construction cleaning job.',
      },
    ],
  },
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    title: 'Commercial & Residential Window Cleaning in Austin, TX',
    h1: 'Window Cleaning in Austin, TX',
    description: `Interior and exterior window cleaning for offices, storefronts, new construction and homes in Austin, TX. Hard water stain removal, screens and frames. Call ${site.phone}.`,
    summary: 'Interior and exterior window cleaning, hard water removal, screens and frames.',
    intro: [
      'We clean windows inside and out for offices, storefronts, dealerships, new construction and homes across Austin. That includes multi-story and high-rise office buildings as well as single storefronts.',
      'Austin’s hard water leaves mineral spots on glass that a regular wash will not remove. We treat hard water stains as part of the job, and we clean the screens and frames, not just the glass.',
    ],
    included: [
      'Interior window cleaning',
      'Exterior window washing',
      'Storefront and commercial glass',
      'Multi-story and high-rise windows',
      'Hard water stain removal',
      'Screens and frames',
    ],
    idealFor: ['Office buildings', 'Retail storefronts and dealerships', 'New construction', 'Homes'],
    projectIds: [1, 5, 11],
    faqs: [
      {
        q: 'Can you remove hard water stains from windows?',
        a: 'Yes. Hard water removal is part of our window cleaning service. Heavy buildup takes longer than a standard clean, so mention it when you ask for a quote.',
      },
      {
        q: 'Do you clean windows on multi-story buildings?',
        a: 'Yes. We have cleaned windows on multi-story office buildings in Austin and on campus housing at Baylor University in Waco.',
      },
      {
        q: 'Do you clean screens and frames too?',
        a: 'Yes. Screen and frame cleaning are included with our window cleaning.',
      },
      {
        q: 'Do you clean windows after construction?',
        a: 'Yes. New construction glass usually has stickers, adhesive and dust on it. We clean it as part of our post-construction cleaning or as a standalone visit.',
      },
    ],
  },
  {
    slug: 'parking-lot-striping',
    name: 'Parking Lot Striping',
    title: 'Parking Lot Striping & ADA Marking in Austin, TX',
    h1: 'Parking Lot Striping in Austin, TX',
    description: `Parking lot striping, ADA compliance marking, curb stops and signage for commercial properties in Austin, TX. Free quotes: ${site.phone}.`,
    summary: 'Striping and restriping, ADA marking, curb stops and parking signage.',
    intro: [
      'Faded lines make a parking lot look neglected and confuse drivers. GT Site Solutions stripes and restripes parking lots for businesses and property managers across Austin, and installs the curb stops and signs that go with them.',
      'We also handle ADA compliance marking, including accessible parking spaces and the signs that identify them. Because we pressure wash and sweep lots too, we can clean the surface before we paint so the lines last.',
    ],
    included: [
      'Parking lot striping and restriping',
      'ADA compliance marking',
      'Curb stop installation',
      'Signage installation',
      'Lot sweeping and pressure washing before striping',
    ],
    idealFor: ['Retail centers and stores', 'Office parks', 'Property managers', 'New construction lots'],
    projectIds: [],
    faqs: [
      {
        q: 'Can you clean the lot before striping it?',
        a: 'Yes. Paint holds best on a clean surface. We can sweep or pressure wash the lot before restriping it, so you only need one company for the job.',
      },
      {
        q: 'Do you install curb stops and parking signs?',
        a: 'Yes. Curb stop and signage installation are part of our parking services.',
      },
      {
        q: 'Do you mark ADA parking spaces?',
        a: 'Yes. ADA compliance marking is one of our parking services, including accessible spaces and the signs that go with them.',
      },
    ],
  },
  {
    slug: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    title: 'Gutter Cleaning in Austin, TX',
    h1: 'Gutter Cleaning in Austin, TX',
    description: `Gutter cleaning, downspout clearing and inspection for homes and commercial buildings in Austin, TX. Call GT Site Solutions at ${site.phone}.`,
    summary: 'Gutter debris removal, downspout clearing, inspection and minor repairs.',
    intro: [
      'Clogged gutters overflow during Texas storms and send water where it does not belong: down the siding, against the foundation and over walkways. We clear gutters and downspouts for homes and commercial buildings across Austin.',
      'While we are up there, we inspect the gutters and tell you about loose sections, leaks or damage. We handle minor repairs too.',
    ],
    included: ['Gutter debris removal', 'Downspout clearing', 'Gutter inspection', 'Minor gutter repairs'],
    idealFor: ['Homeowners', 'Commercial buildings', 'Property managers'],
    projectIds: [],
    faqs: [
      {
        q: 'Why does gutter cleaning matter?',
        a: 'When gutters clog, rainwater spills over the edge instead of draining away. That can stain siding, wear down landscaping and pool around the foundation. Clean gutters and clear downspouts carry the water where it should go.',
      },
      {
        q: 'Do you repair gutters?',
        a: 'We handle minor gutter repairs. If we find bigger damage during the inspection, we will tell you what we saw.',
      },
      {
        q: 'Can I book gutter cleaning with other services?',
        a: 'Yes. You can combine gutter cleaning with pressure washing or window cleaning in one visit.',
      },
    ],
  },
  {
    slug: 'site-cleanup',
    name: 'Site Cleanup & Debris Removal',
    title: 'Site Cleanup & Debris Haul-Off in Austin, TX',
    h1: 'Site Cleanup and Debris Removal in Austin, TX',
    description: `Job site cleanup, debris haul-off, parking lot sweeping and property maintenance for contractors and property managers in Austin, TX. Call ${site.phone}.`,
    summary: 'Job site cleanup, debris haul-off, lot sweeping and property maintenance.',
    intro: [
      'A clean site is safer and easier to work on. We clean up job sites and commercial properties across Austin, haul off the debris, and sweep parking lots so they are ready for crews, tenants or customers.',
      'For property managers, we also take on ongoing property maintenance, so the outside of the property stays as clean as the day it opened.',
    ],
    included: ['Site cleanup', 'Debris haul-off', 'Parking lot sweeping', 'Property maintenance'],
    idealFor: ['General contractors', 'Property managers', 'Commercial property owners'],
    projectIds: [],
    faqs: [
      {
        q: 'Do you haul the debris away?',
        a: 'Yes. Debris haul-off is part of the service, so you do not need to arrange a separate pickup.',
      },
      {
        q: 'Can you handle ongoing property maintenance?',
        a: 'Yes. Tell us what the property needs and how often, and we will quote it.',
      },
      {
        q: 'Do you sweep parking lots?',
        a: 'Yes. Parking lot sweeping is part of our site services, and we can pressure wash or restripe the lot as well.',
      },
    ],
  },
  {
    slug: 'graffiti-removal',
    name: 'Graffiti Removal',
    title: 'Graffiti Removal in Austin, TX',
    h1: 'Graffiti Removal in Austin, TX',
    description: `Graffiti removal from concrete, masonry, walls and drainage structures for businesses and property managers in Austin, TX. Call GT Site Solutions at ${site.phone}.`,
    summary: 'Graffiti removal from concrete, masonry, walls and drainage structures.',
    intro: [
      'Graffiti that stays up tends to attract more. We remove it from concrete, block and brick walls, drainage structures and building exteriors across Austin.',
      'How we remove it depends on the surface and the paint. Bare concrete can take more pressure than a painted wall, so we look at each job before quoting.',
    ],
    included: [
      'Graffiti removal from concrete and masonry',
      'Building walls and exteriors',
      'Drainage structures and other infrastructure',
      'Pressure washing the surrounding surface',
    ],
    idealFor: ['Business owners', 'Property managers', 'Commercial properties'],
    projectIds: [14],
    faqs: [
      {
        q: 'Can graffiti be removed from concrete?',
        a: 'Yes. Concrete is porous, so paint soaks in, but it can usually be removed with the right cleaning method and pressure. You can see one of our concrete graffiti jobs below.',
      },
      {
        q: 'Will graffiti removal damage the surface?',
        a: 'We match the method to the surface. Painted or delicate surfaces need a gentler approach than bare concrete, which is why we look at the job before quoting.',
      },
    ],
  },
]

// Questions that apply to every service
export const commonFaqs = [
  {
    q: 'How quickly can I get a quote?',
    a: `We respond to quote requests within 24 hours. Call ${site.phone} or send the quote form.`,
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. GT Site Solutions is licensed and insured.',
  },
  {
    q: 'What areas do you serve?',
    a: `${site.serviceAreas.slice(0, -1).join(', ')} and ${site.serviceAreas[site.serviceAreas.length - 1]}. We have also taken on projects farther out, including campus housing in Waco.`,
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}
