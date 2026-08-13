import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { token } = await request.json();

  if (!token) {
    return NextResponse.json({ success: false, error: 'Missing captcha token' }, { status: 400 });
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;

  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ secret: secret ?? '', response: token }),
  });

  const data = await verifyRes.json();

  return NextResponse.json({ success: data.success === true });
}
