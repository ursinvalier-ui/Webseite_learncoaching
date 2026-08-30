import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Ungültige Eingabe." },
      { status: 400 },
    );
  }

  // Honeypot tripped — pretend success, drop silently.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    // Not configured yet — see .env.example / README for setup steps.
    console.error(
      "Kontaktformular: RESEND_API_KEY oder CONTACT_FROM_EMAIL fehlt. E-Mail wurde nicht versendet.",
    );
    return NextResponse.json(
      {
        ok: false,
        error:
          "Das Kontaktformular ist technisch noch nicht vollständig eingerichtet. Bitte kontaktieren Sie uns direkt per Telefon oder E-Mail.",
      },
      { status: 503 },
    );
  }

  const { name, email, phone, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Neue Anfrage von ${name} über die Website`,
      text: [
        `Name: ${name}`,
        `E-Mail: ${email}`,
        phone ? `Telefon: ${phone}` : null,
        "",
        "Nachricht:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) {
      console.error("Resend-Fehler:", error);
      return NextResponse.json(
        { ok: false, error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Kontaktformular-Fehler:", error);
    return NextResponse.json(
      { ok: false, error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut." },
      { status: 500 },
    );
  }
}
