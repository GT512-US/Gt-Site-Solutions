# Contact Form Setup Guide

The contact form is now fully functional and will send emails using Resend. Follow these steps to complete the setup:

## 1. Get a Resend API Key

1. Go to [Resend](https://resend.com) and sign up for a free account
2. Navigate to **API Keys** in your dashboard
3. Click **Create API Key**
4. Give it a name (e.g., "GT Site Solutions Contact Form")
5. Copy the API key (it starts with `re_`)

## 2. Configure Environment Variables

1. Open your `.env.local` file
2. Replace `your_resend_api_key_here` with your actual Resend API key
3. The `CONTACT_EMAIL` is already set to `Ruben@gtsitesolutions.com` - you can change this if needed

```bash
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=Ruben@gtsitesolutions.com
```

## 3. Verify Your Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In your Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `gtsitesolutions.com`)
4. Follow the DNS verification steps
5. Once verified, update the API route to use your domain:

In `src/app/api/contact/route.ts`, change line 28:
```typescript
from: 'GT Site Solutions <contact@gtsitesolutions.com>',
```

**Note:** Without domain verification, emails will be sent from `onboarding@resend.dev` which works but may look less professional.

## 4. Test the Contact Form

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. Fill out and submit the form
4. Check the email inbox for the address specified in `CONTACT_EMAIL`

## 5. What Happens When Someone Submits the Form

1. User fills out the contact form with:
   - Name
   - Email
   - Phone
   - Service needed
   - Project details (optional)

2. Form data is sent to `/api/contact`

3. The API validates the data and sends a formatted email to `CONTACT_EMAIL`

4. The email includes:
   - All form data in a nicely formatted HTML template
   - Reply-To address set to the customer's email for easy responses
   - Professional styling with your brand colors

5. User sees a success message and the form resets after 5 seconds

## 6. Troubleshooting

### "Failed to send message" error
- Check that `RESEND_API_KEY` is correctly set in `.env.local`
- Verify the API key is valid in your Resend dashboard
- Restart your development server after adding the API key

### Not receiving emails
- Check your spam/junk folder
- Verify `CONTACT_EMAIL` is set correctly
- Check Resend dashboard for delivery logs

### Development vs Production
- In development, you can use `onboarding@resend.dev` as the sender
- In production, verify your domain for better deliverability
- Resend free tier includes 100 emails/day, which should be plenty for most contact forms

## 7. Free Tier Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month
- No credit card required

This should be more than enough for a contact form. If you exceed this, upgrade plans start at $20/month for 50,000 emails.

## Files Modified

- `src/components/contact.tsx` - Updated form submission handler
- `src/app/api/contact/route.ts` - New API endpoint for handling submissions
- `.env.local` - Added environment variables
- `.env.example` - Template for environment variables

## Support

If you have any issues, check:
- [Resend Documentation](https://resend.com/docs)
- [Resend Dashboard](https://resend.com/emails) for email logs
- Your browser console for any error messages
