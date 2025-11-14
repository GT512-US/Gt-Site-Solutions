# Careers Page Setup - Complete!

## What Changed

### 1. Navigation Updated
- Replaced "Blog" link with "Careers" link in the main navigation (`src/components/navbar.tsx`)
- Blog page is still accessible via direct URL (`/blog`) but removed from nav menu

### 2. New Careers Page Created
**File:** `src/app/careers/page.tsx`

Features:
- Professional hero section with company branding
- Benefits & perks section highlighting:
  - Competitive pay
  - Growth opportunities
  - Flexible scheduling
  - Professional training
  - Team environment
  - Health benefits

- Current job openings section with 4 positions:
  - Pressure Washing Technician ($18-25/hr)
  - Window Cleaning Specialist ($17-23/hr)
  - Construction Clean Crew Member ($16-22/hr)
  - Operations Manager ($50k-65k/year)

- Custom careers application form

### 3. Careers Contact Form
**File:** `src/components/careers-contact.tsx`

A custom application form that includes:
- Full Name
- Phone Number
- Email Address
- Position applying for (dropdown with all positions)
- Years of experience (dropdown)
- About yourself (textarea)
- Success/error handling
- Auto-reset after submission

### 4. Careers API Route
**File:** `src/app/api/careers/route.ts`

- Handles job application submissions
- Sends formatted emails using Resend
- Professional HTML email template with:
  - All applicant information
  - Position applied for (highlighted badge)
  - Experience level
  - About the candidate section
  - Reply-to set to applicant's email for easy contact

### 5. Environment Variables
Added to `.env.local`:
```
CAREERS_EMAIL=Ruben@gtsitesolutions.com
```

This email address receives all job applications. If not set, it falls back to `CONTACT_EMAIL`.

## How to Update Job Openings

To add, remove, or modify job listings, edit the `jobOpenings` array in `src/app/careers/page.tsx`:

```typescript
const jobOpenings = [
  {
    id: 1,
    title: 'Position Title',
    location: 'Austin, TX',
    type: 'Full-Time', // or Part-Time
    salary: '$XX-XX/hr',
    description: 'Job description here...',
    requirements: [
      'Requirement 1',
      'Requirement 2',
      // Add more as needed
    ],
  },
  // Add more job openings...
]
```

Don't forget to also update the position dropdown in `src/components/careers-contact.tsx` to match:

```typescript
<option value="position-slug">Position Title</option>
```

## Testing the Careers Page

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to http://localhost:3000/careers

3. Test the application form:
   - Fill out all required fields
   - Submit the form
   - Check `CAREERS_EMAIL` inbox for the application

## Page Structure

```
/careers
├── Hero Section
│   └── "Build Your Career With GT Site Solutions"
├── Benefits & Perks (6 cards)
├── Current Openings (4 positions)
│   └── "Don't See Your Perfect Role?" CTA
└── Application Form
    └── Submit Application button
```

## Styling

- Consistent with the rest of the site's design system
- Yellow/black brand colors
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and hover effects
- Professional layout with clear hierarchy

## Future Enhancements

Possible additions:
- Add "Share this job" buttons for social media
- Include salary ranges in position cards
- Add application deadline dates
- Create employee testimonials section
- Add "Life at GT Site Solutions" photo gallery
- Integrate with an Applicant Tracking System (ATS)

## Notes

- Blog pages are still accessible at `/blog` but not linked in navigation
- The blog will work if you add MDX files to `/src/content/blog/`
- All form submissions use the same Resend email service
- The careers form has the same validation as the contact form
