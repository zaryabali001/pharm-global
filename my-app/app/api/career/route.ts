import { sendADRFormEmail } from '@/app/actions/sendEmail';
import { NextResponse } from 'next/server';

const CAREER_EMAIL = process.env.CAREER_EMAIL || 'Amna.Shabbir@Globalpharmaceuticalspk.Com';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.type) {
      return NextResponse.json(
        { error: 'Invalid request type' },
        { status: 400 }
      );
    }

    console.log('Career form submission:', formData);

    // Send email based on submission type
    let result;
    
    if (formData.type === 'apply') {
      // Job application email
      const applicationData = {
        type: 'Job Application',
        jobTitle: formData.jobTitle || 'Not specified',
        fullName: formData.fullName || '',
        email: formData.email || '',
        phone: formData.phone || '',
        experience: formData.experience || '',
        resume: formData.resume || 'Attached',
        coverLetter: formData.coverLetter || '',
        timestamp: new Date().toISOString(),
      };
      console.log('Sending to CAREER_EMAIL:', CAREER_EMAIL);
      result = await sendADRFormEmail(applicationData, CAREER_EMAIL);
    } else if (formData.type === 'submit') {
      // Job search filter submission
      const searchData = {
        type: 'Job Search Filter Submission',
        jobTitle: formData.jobTitle || 'All',
        employment: formData.employment || 'All',
        company: formData.company || 'All',
        department: formData.department || 'All',
        city: formData.city || 'All',
        searchQuery: formData.searchQuery || '',
        timestamp: new Date().toISOString(),
      };
      console.log('Sending to CAREER_EMAIL:', CAREER_EMAIL);
      result = await sendADRFormEmail(searchData, CAREER_EMAIL);
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      result,
    });
  } catch (error: any) {
    console.error('Error sending career email:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
