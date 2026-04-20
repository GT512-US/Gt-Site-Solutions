import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !interest || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Format interest for better readability
    const interestLabels: { [key: string]: string } = {
      'pressure-washing': 'Pressure Washing',
      'window-cleaning': 'Window Cleaning',
      'construction-clean': 'Construction Cleaning',
      'parking-lot': 'Parking Lot Services',
      'gutter-cleaning': 'Gutter Cleaning',
      'management': 'Management/Operations',
      'general': 'General Labor',
      'other': 'Other',
    };

    const formattedInterest = interestLabels[interest] || interest;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'GT Site Solutions <onboarding@resend.dev>', // You'll change this to your domain
      to: process.env.CAREERS_EMAIL || process.env.CONTACT_EMAIL || 'your-email@example.com',
      replyTo: email, // Applicant's email for easy replies
      subject: `New Careers Inquiry - ${formattedInterest}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #eab308; color: black; padding: 20px; text-align: center; }
              .content { background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #1f2937; }
              .value { color: #4b5563; margin-top: 5px; }
              .message-box { background-color: white; padding: 15px; border-radius: 6px; margin-top: 10px; border-left: 4px solid #eab308; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px; }
              .badge { background-color: #eab308; color: black; padding: 5px 10px; border-radius: 4px; display: inline-block; font-weight: bold; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>💼 New Careers Inquiry</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${phone}</div>
                </div>
                <div class="field">
                  <div class="label">Area of Interest:</div>
                  <div class="value"><span class="badge">${formattedInterest}</span></div>
                </div>
                <div class="field">
                  <div class="label">About Themselves:</div>
                  <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This inquiry was submitted from the GT Site Solutions careers page.</p>
                <p>You can reply directly to this email to contact ${name}.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Inquiry submitted successfully',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending inquiry:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit inquiry',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
