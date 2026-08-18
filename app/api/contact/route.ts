import { NextResponse } from "next/server";
import { isValidEmail, readString, sendNotificationEmail } from "@/src/lib/mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = readString(body.name, 120);
    const company = readString(body.company, 160);
    const email = readString(body.email, 160);
    const phone = readString(body.phone, 80);
    const country = readString(body.country, 80);
    const inquiryType = readString(body.inquiryType, 80) || "General";
    const message = readString(body.message, 5000);

    if (!name || !company || !phone || !country || !message) {
      return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
    }

    await sendNotificationEmail({
      subject: `Website inquiry from ${name} — ${inquiryType}`,
      replyTo: email,
      fields: [
        ["Name", name],
        ["Company", company],
        ["Email", email],
        ["Phone", phone],
        ["Country", country],
        ["Inquiry type", inquiryType],
      ],
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send your inquiry right now. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
