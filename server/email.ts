import { Resend } from "resend";
import type { Contact } from "@shared/schema";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_TO = "hello@devavimedia.com";

// FROM defaults to onboarding@resend.dev (works without domain verification).
// Once devavimedia.com is verified in Resend dashboard under "Domains", set
// the RESEND_FROM_EMAIL env var to leads@devavimedia.com for branded sending.
const FROM = process.env.RESEND_FROM_EMAIL
  ? `Devavi Media <${process.env.RESEND_FROM_EMAIL}>`
  : "Devavi Media <onboarding@resend.dev>";

// Log email readiness at startup so it's visible in server output.
if (RESEND_API_KEY) {
  console.log(`📧 Email notifications ready — sending from: ${FROM} → ${NOTIFY_TO}`);
} else {
  console.warn("⚠️  RESEND_API_KEY not set — lead email notifications are disabled.");
}

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendLeadNotification(contact: Contact): Promise<void> {
  if (!RESEND_API_KEY) {
    console.warn("⚠️  Skipping lead email (RESEND_API_KEY not set) for:", contact.name);
    return;
  }

  const resend = new Resend(RESEND_API_KEY);

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: sans-serif; color: #111; max-width: 600px; margin: 0 auto; padding: 24px;">
  <h2 style="margin-top: 0; color: #7c3aed;">New Lead — Devavi Media</h2>
  <table style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600; width: 140px;">Name</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${esc(contact.name)}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Email</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${esc(contact.email)}">${esc(contact.email)}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Phone</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><a href="tel:${esc(contact.phone)}">${esc(contact.phone)}</a></td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Company</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${esc(contact.company)}</td>
    </tr>
    <tr>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">Service</td>
      <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${esc(contact.service)}</td>
    </tr>
    <tr>
      <td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top;">Message</td>
      <td style="padding: 8px 0; white-space: pre-wrap;">${esc(contact.message)}</td>
    </tr>
  </table>
  <p style="margin-top: 24px; font-size: 12px; color: #6b7280;">
    Submitted at ${contact.createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
  </p>
</body>
</html>`;

  const { error } = await resend.emails.send({
    from: FROM,
    to: NOTIFY_TO,
    subject: `New lead: ${esc(contact.name)} — ${esc(contact.company)}`,
    html,
  });

  if (error) {
    throw new Error(`Resend API error: ${error.message}`);
  }

  console.log(`✅ Lead email sent to ${NOTIFY_TO} for: ${contact.name} (${contact.company})`);
}
