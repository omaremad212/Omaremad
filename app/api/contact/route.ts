import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: "oemad8637@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;background:#0a0a0a;color:#e5e5e5;border-radius:12px;overflow:hidden;">
          <div style="background:#111;padding:24px 32px;border-bottom:1px solid #222;">
            <h2 style="margin:0;font-size:18px;color:#fff;">New Contact from Portfolio</h2>
          </div>
          <div style="padding:28px 32px;display:flex;flex-direction:column;gap:16px;">
            <div>
              <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#666;">Name</p>
              <p style="margin:0;font-size:15px;color:#fff;font-weight:600;">${name}</p>
            </div>
            <div>
              <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#666;">Email</p>
              <p style="margin:0;font-size:15px;color:#a3a3a3;">${email}</p>
            </div>
            <div style="border-top:1px solid #222;padding-top:16px;">
              <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#666;">Message</p>
              <p style="margin:0;font-size:15px;color:#d4d4d4;line-height:1.6;white-space:pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="padding:16px 32px;background:#111;border-top:1px solid #222;">
            <p style="margin:0;font-size:12px;color:#555;">Sent from omaremad.dev portfolio · Reply directly to this email to respond to ${name}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
