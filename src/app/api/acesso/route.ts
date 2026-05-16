import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { nome, email, telefone, empresa } = await req.json();

    if (!nome || !email || !telefone) {
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

    const assuntoInterno = `Cliente Potencial - ${nome}${empresa ? ` / ${empresa}` : ''}`;

    // Email 1: alerta interno
    await transporter.sendMail({
        from: `"SimCrane Pro" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO ?? 'contato@simcrane.com.br',
        subject: assuntoInterno,
        html: `
            <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;background:#0f172a;color:#f1f5f9;border-radius:12px;overflow:hidden;">
                <div style="background:#f1b810;padding:24px 32px;">
                    <h1 style="margin:0;color:#0f172a;font-size:20px;font-weight:800;">🏗️ Nova Oportunidade de Negócio</h1>
                    <p style="margin:4px 0 0;color:#0f172a;font-size:13px;opacity:0.8;">Um novo usuário demonstrou interesse no SimCrane Pro</p>
                </div>
                <div style="padding:32px;">
                    <p style="color:#94a3b8;font-size:13px;margin:0 0 20px;">Abaixo estão os dados cadastrados para o primeiro contato comercial:</p>
                    <table style="width:100%;border-collapse:collapse;">
                        <tr>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;width:120px;">Nome</td>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;font-weight:600;">${nome}</td>
                        </tr>
                        <tr>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">E-mail</td>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;font-size:14px;font-weight:600;"><a href="mailto:${email}" style="color:#f1b810;text-decoration:none;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#94a3b8;font-size:13px;">Telefone</td>
                            <td style="padding:12px 0;border-bottom:1px solid #1e293b;color:#f1f5f9;font-size:14px;font-weight:600;"><a href="tel:${telefone}" style="color:#f1b810;text-decoration:none;">${telefone}</a></td>
                        </tr>
                        <tr>
                            <td style="padding:12px 0;color:#94a3b8;font-size:13px;">Empresa</td>
                            <td style="padding:12px 0;color:#f1f5f9;font-size:14px;font-weight:600;">${empresa || '—'}</td>
                        </tr>
                    </table>
                    <div style="margin-top:24px;padding:16px;background:#1e293b;border-radius:8px;border-left:3px solid #f1b810;">
                        <p style="margin:0;color:#f1b810;font-size:13px;font-weight:700;">⚡ Ação recomendada</p>
                        <p style="margin:6px 0 0;color:#94a3b8;font-size:12px;">Realizar o contato comercial em até <strong style="color:#f1f5f9;">24 horas úteis</strong>. Responda diretamente para <a href="mailto:${email}" style="color:#f1b810;">${email}</a>.</p>
                    </div>
                </div>
            </div>
        `,
    });

    // Email 2: boas-vindas para o cliente
    await transporter.sendMail({
        from: `"SimCrane Pro" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Ficamos felizes com seu interesse no SimCrane Pro!',
        html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0f172a;color:#f1f5f9;border-radius:12px;overflow:hidden;">
                <div style="background:#f1b810;padding:24px 32px;">
                    <h1 style="margin:0;color:#0f172a;font-size:22px;font-weight:800;">SimCrane Pro</h1>
                    <p style="margin:4px 0 0;color:#0f172a;font-size:13px;opacity:0.8;">Engenharia de Rigging com Precisão Técnica Absoluta</p>
                </div>
                <div style="padding:32px;">
                    <p style="color:#f1f5f9;font-size:15px;line-height:1.6;">Olá, <strong>${nome.split(' ')[0]}</strong>,</p>
                    <p style="color:#94a3b8;font-size:14px;line-height:1.7;">Agradecemos o seu interesse no SimCrane Pro. Confirmamos que os seus dados foram registrados com sucesso em nossa base.</p>
                    <p style="color:#94a3b8;font-size:14px;line-height:1.7;">Nossa equipe técnica e comercial já está analisando o seu perfil e, em breve, um de nossos especialistas entrará em contato para entender o cenário da sua empresa e apresentar a melhor solução.</p>

                    <div style="margin:28px 0;padding:20px;background:#1e293b;border-radius:10px;border-left:3px solid #f1b810;">
                        <p style="margin:0 0 6px;color:#f1b810;font-size:13px;font-weight:700;">🎯 Oferta especial de lançamento</p>
                        <p style="margin:0;color:#f1f5f9;font-size:14px;line-height:1.6;">Clientes que fecharem contrato até <strong>31 de julho de 2026</strong> garantem <strong style="color:#f1b810;">20% de desconto</strong> na licença anual.</p>
                    </div>

                    <h2 style="color:#f1b810;font-size:16px;margin:28px 0 16px;">Por que o SimCrane Pro é o parceiro ideal para a sua operação?</h2>

                    <table style="width:100%;border-collapse:collapse;">
                        <tr>
                            <td style="padding:14px 0;border-bottom:1px solid #1e293b;vertical-align:top;width:28px;">
                                <span style="color:#f1b810;font-size:18px;">🏗️</span>
                            </td>
                            <td style="padding:14px 0 14px 12px;border-bottom:1px solid #1e293b;">
                                <p style="margin:0 0 4px;color:#f1f5f9;font-size:14px;font-weight:700;">Foco em Engenharia Rigging</p>
                                <p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.6;">Desenvolvido especificamente para atender às demandas complexas de movimentação de carga e içamentos pesados.</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:14px 0;border-bottom:1px solid #1e293b;vertical-align:top;">
                                <span style="color:#f1b810;font-size:18px;">🚛</span>
                            </td>
                            <td style="padding:14px 0 14px 12px;border-bottom:1px solid #1e293b;">
                                <p style="margin:0 0 4px;color:#f1f5f9;font-size:14px;font-weight:700;">Especialização em Guindastes All-Terrain</p>
                                <p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.6;">Simulações dinâmicas e precisas focadas em guindastes rodoviários e frotas de grande porte.</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:14px 0;vertical-align:top;">
                                <span style="color:#f1b810;font-size:18px;">🛡️</span>
                            </td>
                            <td style="padding:14px 0 14px 12px;">
                                <p style="margin:0 0 4px;color:#f1f5f9;font-size:14px;font-weight:700;">Segurança e Precisão</p>
                                <p style="margin:0;color:#94a3b8;font-size:13px;line-height:1.6;">Funcionalidades avançadas como Modo Colisão e análise de Verticalização, garantindo previsibilidade total antes mesmo do guindaste chegar ao campo.</p>
                            </td>
                        </tr>
                    </table>

                    <p style="color:#94a3b8;font-size:14px;line-height:1.7;margin-top:28px;">Se você tiver qualquer dúvida imediata ou quiser adiantar alguma informação sobre os seus projetos, basta responder a este e-mail ou escrever para <a href="mailto:contato@simcrane.com.br" style="color:#f1b810;">contato@simcrane.com.br</a>.</p>
                    <p style="color:#94a3b8;font-size:14px;line-height:1.7;">Estamos ansiosos para elevar o nível das suas simulações industriais.</p>
                    <p style="color:#f1f5f9;font-size:14px;margin-top:24px;">Cordialmente,<br/><strong style="color:#f1b810;">Equipe SimCrane Pro</strong></p>
                </div>
                <div style="background:#0a0f1e;padding:16px 32px;text-align:center;border-top:1px solid #1e293b;">
                    <p style="margin:0;color:#475569;font-size:12px;">www.simcrane.com.br · contato@simcrane.com.br</p>
                </div>
            </div>
        `,
    });

    return NextResponse.json({ ok: true });
}
