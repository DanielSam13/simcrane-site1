import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { nome, empresa, email } = await req.json();

    if (!nome || !empresa || !email) {
        return NextResponse.json({ error: 'Campos obrigatórios ausentes' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST ?? 'smtp.hostinger.com',
        port: Number(process.env.EMAIL_PORT ?? 465),
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"SimCrane Pro" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO ?? 'contato@simcrane.com.br',
        subject: '🏗️ Novo cadastro — Acesso SimCrane Pro (15 dias)',
        html: `
            <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;background:#0f172a;color:#f1f5f9;border-radius:12px;overflow:hidden;">
                <div style="background:#f1b810;padding:24px 32px;">
                    <h1 style="margin:0;color:#0f172a;font-size:20px;font-weight:800;">SimCrane Pro — Novo Cadastro</h1>
                    <p style="margin:4px 0 0;color:#0f172a;font-size:13px;opacity:0.8;">Solicitação de acesso de teste (15 dias)</p>
                </div>
                <div style="padding:32px;">
                    <table style="width:100%;border-collapse:collapse;">
                        <tr>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;width:120px;">Nome completo</td>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;font-weight:600;">${nome}</td>
                        </tr>
                        <tr>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Empresa</td>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;font-weight:600;">${empresa}</td>
                        </tr>
                        <tr>
                            <td style="padding:12px 0;color:#94a3b8;font-size:13px;">Email</td>
                            <td style="padding:12px 0;font-size:14px;font-weight:600;"><a href="mailto:${email}" style="color:#f1b810;text-decoration:none;">${email}</a></td>
                        </tr>
                    </table>
                    <div style="margin-top:24px;padding:16px;background:#1e293b;border-radius:8px;border-left:3px solid #f1b810;">
                        <p style="margin:0;color:#94a3b8;font-size:12px;">Responda diretamente para <strong style="color:#f1f5f9;">${email}</strong> com as credenciais de acesso.</p>
                    </div>
                </div>
            </div>
        `,
    });

    return NextResponse.json({ ok: true });
}
