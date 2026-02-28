export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
	try {
		const data = await request.json();

		// Honeypot anti-spam
		if (data._honey) {
			return new Response(JSON.stringify({ success: true }), { status: 200 });
		}

		const { nom, email, telephone, sujet, message, magasin, modifications, _subject } = data;

		const transporter = nodemailer.createTransport({
			host: import.meta.env.SMTP_HOST,
			port: Number(import.meta.env.SMTP_PORT),
			secure: false,
			auth: {
				user: import.meta.env.SMTP_USER,
				pass: import.meta.env.SMTP_PASSWORD,
			},
		});

		const subject = _subject || 'Nouveau message - Var Incontinence';
		const fromName = nom || magasin || 'Visiteur';

		let htmlBody = `<h2>${subject}</h2><table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">`;
		if (nom) htmlBody += `<tr><td><strong>Nom</strong></td><td>${escapeHtml(nom)}</td></tr>`;
		if (magasin) htmlBody += `<tr><td><strong>Magasin</strong></td><td>${escapeHtml(magasin)}</td></tr>`;
		if (email) htmlBody += `<tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>`;
		if (telephone) htmlBody += `<tr><td><strong>Téléphone</strong></td><td>${escapeHtml(telephone)}</td></tr>`;
		if (sujet) htmlBody += `<tr><td><strong>Sujet</strong></td><td>${escapeHtml(sujet)}</td></tr>`;
		if (message) htmlBody += `<tr><td><strong>Message</strong></td><td>${escapeHtml(message)}</td></tr>`;
		if (modifications) htmlBody += `<tr><td><strong>Modifications</strong></td><td>${escapeHtml(modifications)}</td></tr>`;
		htmlBody += '</table>';

		await transporter.sendMail({
			from: `"${fromName} via Var Incontinence" <${import.meta.env.SMTP_FROM}>`,
			replyTo: email || undefined,
			to: import.meta.env.RAPPORT_EMAIL,
			subject,
			html: htmlBody,
		});

		return new Response(JSON.stringify({ success: true }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Erreur envoi email:', error);
		return new Response(JSON.stringify({ success: false, error: 'Erreur serveur' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}
