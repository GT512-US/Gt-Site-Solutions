export type Project = {
  id: number
  category: 'commercial' | 'residential'
  title: string
  location: string
  date: string
  beforeImage?: string
  afterImage: string
  description: string
  services: string[]
  highlight?: boolean
  wide?: boolean
  composite?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    category: 'commercial',
    title: 'New Construction Window Cleaning',
    location: 'Austin, TX',
    date: '',
    afterImage: '/before-after/BenzAfter.png',
    description:
      'GT Site Solutions provided window cleaning removing adhesive, dust, and construction debris from all glass before opening.',
    services: ['Window Cleaning', 'Construction Cleaning'],
    highlight: true,
  },
  {
    id: 2,
    category: 'commercial',
    title: 'Office Exterior Cleaning',
    location: 'Austin, TX',
    date: 'March 2024',
    beforeImage: '/before-after/Before1.jpg',
    afterImage: '/before-after/After1.jpg',
    description:
      'Complete campus exterior cleaning including buildings, walkways, and outdoor areas',
    services: ['Pressure Washing', 'Window Cleaning'],
  },
  {
    id: 3,
    category: 'commercial',
    title: 'QuikTrip Store Exterior',
    location: 'Austin, TX',
    date: 'February 2024',
    afterImage: '/before-after/QuikTrip.jpeg',
    description:
      'Complete exterior pressure washing and facade cleaning for QuikTrip convenience store',
    services: ['Pressure Washing', 'Facade Cleaning', 'Window Cleaning'],
  },
  {
    id: 4,
    category: 'commercial',
    title: 'Baylor Campus Housing Remodel',
    location: 'Waco, TX',
    date: 'January 2024',
    afterImage: '/before-after/HistoricBuilding.jpeg',
    description:
      'Complete exterior window cleaning for campus housing at Baylor University',
    services: ['Pressure Washing', 'Facade Cleaning'],
  },
  {
    id: 5,
    category: 'commercial',
    title: 'Corporate Office Building',
    location: 'Austin, TX',
    date: 'December 2023',
    afterImage: '/before-after/CorprateOffice.jpeg',
    description:
      'High-rise window cleaning and facade maintenance for corporate office building',
    services: ['High-Rise Windows', 'Facade Cleaning', 'Pressure Washing'],
  },
  {
    id: 6,
    category: 'residential',
    title: 'Modern Residential Home',
    location: 'Austin, TX',
    date: 'November 2023',
    afterImage: '/before-after/ResedentialHome.png',
    description:
      'Complete exterior cleaning for modern residential home including pressure washing and window cleaning',
    services: ['Pressure Washing', 'Window Cleaning', 'Exterior Soft Wash'],
    wide: true,
  },
  {
    id: 7,
    category: 'commercial',
    title: 'Sidewalk & Walkway Cleaning',
    location: 'Austin, TX',
    date: 'March 2025',
    afterImage: '/before-after/3D90B1D5-7FA2-4804-8EB2-B116E6E733CD.png',
    description: 'Concrete sidewalk pressure washing removing built-up grime and discoloration.',
    services: ['Pressure Washing', 'Surface Cleaning'],
    composite: true,
  },
  {
    id: 8,
    category: 'commercial',
    title: 'Commercial Parking Lot Cleaning',
    location: 'Austin, TX',
    date: 'March 2025',
    afterImage: '/before-after/15A7F180-1CD4-4533-8763-ABEEEAA90A11.png',
    description: 'Full commercial parking lot and loading area pressure washing restoration.',
    services: ['Pressure Washing', 'Parking Lot Cleaning'],
    composite: true,
  },
  {
    id: 9,
    category: 'commercial',
    title: 'Parking Garage Floor Cleaning',
    location: 'Austin, TX',
    date: 'March 2025',
    afterImage: '/before-after/42E3A0D6-020A-4E09-8AC4-58C74F76FD13.png',
    description: 'Deep cleaning of multi-level parking garage floors removing oil and grime.',
    services: ['Pressure Washing', 'Concrete Cleaning'],
    composite: true,
  },
  {
    id: 10,
    category: 'residential',
    title: 'Stepping Stone Pathway Restoration',
    location: 'Austin, TX',
    date: 'March 2025',
    afterImage: '/before-after/2738C768-BD3D-4EC5-A19C-54D0394BC216.png',
    description: 'Residential pathway cleaning restoring stepping stones to like-new condition.',
    services: ['Pressure Washing', 'Surface Cleaning'],
    composite: true,
  },
  {
    id: 11,
    category: 'commercial',
    title: 'Commercial Glass & Window Cleaning',
    location: 'Austin, TX',
    date: 'April 2025',
    afterImage: '/before-after/86749437-B50D-433A-A5C3-414191E14952.png',
    description: 'Streak-free commercial glass and storefront window cleaning.',
    services: ['Window Cleaning', 'Glass Restoration'],
    composite: true,
  },
  {
    id: 14,
    category: 'commercial',
    title: 'Graffiti Removal',
    location: 'Austin, TX',
    date: 'April 2025',
    afterImage: '/before-after/A787F809-5D7A-46BF-A68C-3162D35CDEC9.png',
    description: 'Complete graffiti removal from concrete drainage infrastructure.',
    services: ['Pressure Washing', 'Graffiti Removal'],
    composite: true,
  },
  {
    id: 15,
    category: 'commercial',
    title: 'Exterior Window Cleaning',
    location: 'Austin, TX',
    date: 'April 2025',
    afterImage: '/before-after/A4437A92-BA5B-4D46-B5CA-490F6060A49B.png',
    description: 'Multi-pane exterior window cleaning delivering crystal clear results.',
    services: ['Window Cleaning', 'Facade Cleaning'],
    composite: true,
  },
]
