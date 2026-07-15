import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, message } = await request.json();

  // Guard: without credentials nodemailer throws a cryptic auth error → 500.
  // Surface the real cause instead.
  if (!process.env.MY_EMAIL || !process.env.MY_PASSWORD) {
    console.error(
      "[email] Missing MY_EMAIL / MY_PASSWORD env vars — cannot send."
    );
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 }
    );
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    replyTo: email,
    subject: `PORTFOLIO`,
    text: `New message from ${email}:\n\n${message}`,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (err) {
    // Log the full error server-side (visible in Vercel logs) so the actual
    // nodemailer/Gmail failure is diagnosable.
    console.error("[email] sendMail failed:", err);
    const detail = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Failed to send email.", detail },
      { status: 500 }
    );
  }
}
