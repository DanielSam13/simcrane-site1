import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PRICE_IDS: Record<string, string> = {
    mensal: process.env.STRIPE_PRICE_MENSAL!,
    semestral: process.env.STRIPE_PRICE_SEMESTRAL!,
    anual: process.env.STRIPE_PRICE_ANUAL!,
};

export async function POST(req: NextRequest) {
    const { plan } = await req.json();

    if (!plan || !PRICE_IDS[plan]) {
        return NextResponse.json({ error: 'Plano inválido' }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL ?? 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [{ price: PRICE_IDS[plan], quantity: 1 }],
        payment_method_types: ['card', 'pix'],
        success_url: `${baseUrl}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/pricing`,
        locale: 'pt-BR',
    });

    return NextResponse.json({ url: session.url });
}
