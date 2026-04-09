import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, url, description } = body;

    // Validation
    if (!name || !email || !description) {
      return Response.json(
        { error: "Veuillez remplir tous les champs requis." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Adresse courriel invalide." },
        { status: 400 }
      );
    }

    // Send notification email to Studio 418
    const { error } = await resend.emails.send({
      from: "Studio 418 <onboarding@resend.dev>",
      to: ["yannsrg@proton.me"],
      replyTo: email,
      subject: `Nouvelle demande de maquette — ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #09090B; padding: 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #F97316; margin: 0; font-size: 24px;">
              Studio<span style="color: #fff;">418</span>
            </h1>
            <p style="color: #a1a1aa; margin: 8px 0 0;">Nouvelle demande de maquette</p>
          </div>
          <div style="background: #18181B; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #a1a1aa; font-size: 14px; vertical-align: top; width: 140px;">Commerce</td>
                <td style="padding: 12px 0; color: #fff; font-size: 14px;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #a1a1aa; font-size: 14px; vertical-align: top; border-top: 1px solid #27272A;">Courriel</td>
                <td style="padding: 12px 0; color: #F97316; font-size: 14px; border-top: 1px solid #27272A;">
                  <a href="mailto:${escapeHtml(email)}" style="color: #F97316; text-decoration: none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              ${
                url
                  ? `<tr>
                <td style="padding: 12px 0; color: #a1a1aa; font-size: 14px; vertical-align: top; border-top: 1px solid #27272A;">Site actuel</td>
                <td style="padding: 12px 0; color: #60a5fa; font-size: 14px; border-top: 1px solid #27272A;">
                  <a href="${escapeHtml(url)}" style="color: #60a5fa; text-decoration: none;">${escapeHtml(url)}</a>
                </td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 12px 0; color: #a1a1aa; font-size: 14px; vertical-align: top; border-top: 1px solid #27272A;">Description</td>
                <td style="padding: 12px 0; color: #fff; font-size: 14px; border-top: 1px solid #27272A; line-height: 1.6;">${escapeHtml(description)}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Erreur lors de l'envoi. Réessayez plus tard." },
        { status: 500 }
      );
    }

    // Send confirmation email to the client
    await resend.emails.send({
      from: "Studio 418 <onboarding@resend.dev>",
      to: [email],
      subject: `On a bien reçu votre demande, ${name}!`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #09090B; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 24px;">
              Studio<span style="color: #F97316;">418</span>
            </h1>
          </div>
          <div style="background: #18181B; padding: 32px; border-radius: 0 0 12px 12px; text-align: center;">
            <h2 style="color: #fff; margin: 0 0 16px; font-size: 20px;">Merci ${escapeHtml(name)}!</h2>
            <p style="color: #a1a1aa; font-size: 16px; line-height: 1.6; margin: 0;">
              Votre demande de maquette a bien été reçue. Notre équipe va s'y mettre et vous recevrez votre maquette personnalisée d'ici <strong style="color: #F97316;">48 heures</strong>.
            </p>
            <p style="color: #71717a; font-size: 14px; margin: 24px 0 0;">
              Si vous avez des questions entre-temps, répondez simplement à ce courriel.
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Une erreur inattendue est survenue." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
