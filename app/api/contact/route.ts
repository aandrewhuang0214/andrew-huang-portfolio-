import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, subject, message } = body

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: 'Email, subject, and message are required.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF4500; border-bottom: 1px solid #eee; padding-bottom: 12px;">
            New message from your portfolio
          </h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 24px; padding: 20px; background: #f5f5f5; border-left: 3px solid #FF4500;">
            <p style="white-space: pre-wrap; margin: 0;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
