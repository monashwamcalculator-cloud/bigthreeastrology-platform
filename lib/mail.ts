import nodemailer from "nodemailer";

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
}

export async function sendSignupEmail(email: string, name?: string | null) {
  const host = process.env.SMTP_HOST;
  if (!host) {
    console.log(`[signup-email-fallback] Welcome email for ${email} (${name ?? "new user"})`);
    return;
  }

  const transporter = createTransporter();

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "noreply@bigthreeastrology.com",
    to: email,
    subject: "Welcome to BIGThreeAstrology",
    text: `Hi ${name ?? "there"}, your account is ready.`
  });
}

export async function sendListingCreatedEmail(input: { to: string; name: string }) {
  if (!process.env.SMTP_HOST) {
    console.log(`[listing-created-fallback] Confirmation for ${input.to} (${input.name})`);
    return;
  }

  const transporter = createTransporter();
  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "noreply@bigthreeastrology.com",
    to: input.to,
    subject: "Your listing was received on BIGThreeAstrology",
    text: `Hi ${input.name}, your listing has been submitted. Please log in regularly and update your profile to keep it discoverable in search.`
  });
}

export async function sendListingReminderEmail(input: { to: string; name: string }) {
  if (!process.env.SMTP_HOST) {
    console.log(`[listing-reminder-fallback] Reminder for ${input.to} (${input.name})`);
    return;
  }

  const transporter = createTransporter();
  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? "noreply@bigthreeastrology.com",
    to: input.to,
    subject: "Please update your astrologer listing",
    text: `Hi ${input.name}, please log in and refresh your listing details so it remains indexed and visible to users searching for astrologers.`
  });
}
