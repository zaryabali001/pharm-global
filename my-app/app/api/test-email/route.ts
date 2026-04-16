import { sendADRFormEmail } from '@/app/actions/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Get test data
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      patientName: 'Test Patient',
      message: 'This is a test submission',
      timestamp: new Date().toISOString(),
    };

    console.log('Sending test email with data:', testData);
    const result = await sendADRFormEmail(testData);
    console.log('Email result:', result);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}
