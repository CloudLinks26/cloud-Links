import { NextRequest, NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const { email, source } = await request.json();

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return NextResponse.json({ success: false, error: 'Invalid email address' }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ success: false, error: 'Subscription service not configured' }, { status: 500 });
  }

  const sheetRes = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, source: source || 'Unknown' }),
  });

  if (!sheetRes.ok) {
    return NextResponse.json({ success: false, error: 'Failed to save subscription' }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
