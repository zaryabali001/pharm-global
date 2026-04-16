'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_FcZ8sT7W_3jem716T63GaCGgJRBx1HDLb');

// Email configuration from environment variables
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'Amna.Shabbir@Globalpharmaceuticalspk.Com';
const CAREER_EMAIL = process.env.CAREER_EMAIL || 'Amna.Shabbir@Globalpharmaceuticalspk.Com';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'Amna.Shabbir@Globalpharmaceuticalspk.Com';

export async function sendADRFormEmail(formData: any, recipientEmails?: string | string[]) {
  try {
    console.log("Received formData:", formData);
    
    // Create formatted email content
    let emailHtml = `
      <div style="font-family: 'Outfit', Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
        <div style="background-color: #fff; padding: 20px; border-radius: 8px; max-width: 700px;">
          <h2 style="color: #911526; border-bottom: 2px solid #911526; padding-bottom: 10px;">
            🏥 New Form Submission Received
          </h2>
          
          <p style="color: #666; font-size: 16px; margin: 20px 0;">
            A new form has been submitted. Details are below:
          </p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; margin: 20px 0;">
    `;
    
    // Format data for email - handle all field types
    const dataToDisplay = formData;
    let hasData = false;

    // Add all form fields to email
    Object.entries(dataToDisplay).forEach(([key, value]) => {
      if (key === 'formType') return; // Skip formType field
      
      if (value !== null && value !== undefined && value !== '' && value !== '[]') {
        hasData = true;
        const label = key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
        const displayValue = Array.isArray(value) ? value.join(', ') : String(value).substring(0, 500);
        emailHtml += `
          <div style="margin-bottom: 15px;">
            <strong style="color: #911526; font-size: 16px;">${label}:</strong>
            <p style="margin: 6px 0 0 0; color: #333; font-size: 13px; line-height: 1.6;">${displayValue}</p>
          </div>
        `;
      }
    });

    if (!hasData) {
      emailHtml += `<p style="color: #999; font-style: italic;">No data provided</p>`;
    }
    
    emailHtml += `
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            <strong>Submission Time:</strong> ${new Date().toLocaleString()}<br>
            This email was automatically sent from Global Pharmaceuticals System.<br>
            Please do not reply to this email.
          </p>
        </div>
      </div>
    `;

    // Determine recipient email(s)
    let recipients: string[] = [CONTACT_EMAIL]; // Default email
    
    if (recipientEmails) {
      recipients = Array.isArray(recipientEmails) ? recipientEmails : [recipientEmails];
    } else if (formData.type === 'Job Application' || formData.type === 'Job Search Filter Submission') {
      // Career forms go to career email
      recipients = [CAREER_EMAIL];
    } else if (formData.formType === 'Contact Form') {
      // Contact form goes to main email and admin email
      recipients = [CONTACT_EMAIL, ADMIN_EMAIL];
    }
    
    console.log('Email recipients:', recipients);
    console.log('Sending email via Resend API...');
    
    // Send to all recipients
    const response = await resend.emails.send({
      from: 'noreply@resend.dev',
      to: recipients,
      subject: '🏥 New Form Submission - Global Pharmaceuticals',
      html: emailHtml,
    });

    console.log('Resend API Response:', response);
    console.log('Response data:', JSON.stringify(response.data));
    console.log('Response error:', response.error);

    if (response.error) {
      console.error('❌ Resend error details:', response.error);
      const errorMsg = response.error?.message || 'Failed to send email';
      console.error('Error message:', errorMsg);
      return { 
        success: false, 
        error: errorMsg,
        details: response.error
      };
    }

    console.log('Email sent successfully with ID:', response.data?.id);
    return { 
      success: true, 
      message: 'Form submitted successfully! We will review your submission and contact you soon.' 
    };
  } catch (error: any) {
    console.error('Server error:', error);
    return { 
      success: false, 
      error: error?.message || 'Failed to submit form. Please try again.' 
    };
  }
}