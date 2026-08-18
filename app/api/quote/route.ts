import { NextResponse } from "next/server";
import { products } from "@/src/data/products";
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
    const productSlug = readString(body.product, 120);
    const productType = readString(body.productType, 80);
    const temperature = readString(body.temperature, 40);
    const quantity = readString(body.quantity, 160);
    const packaging = readString(body.packaging, 200);
    const message = readString(body.message, 5000);
    const productName = products.find((product) => product.slug === productSlug)?.name || productSlug;

    if (!name || !company || !phone || !country || !quantity || !message) {
      return NextResponse.json({ ok: false, error: "Please complete all required fields." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Enter a valid business email." }, { status: 400 });
    }

    await sendNotificationEmail({
      subject: `Quote request from ${name} — ${productName || productType || "Export"}`,
      replyTo: email,
      fields: [
        ["Name", name],
        ["Company", company],
        ["Email", email],
        ["Phone", phone],
        ["Country", country],
        ["Product type", productType],
        ["Product", productName],
        ["Temperature", temperature],
        ["Quantity", quantity],
        ["Packaging", packaging || "—"],
      ],
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote form email failed:", error);
    return NextResponse.json(
      { ok: false, error: "Unable to send your quote request right now. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
