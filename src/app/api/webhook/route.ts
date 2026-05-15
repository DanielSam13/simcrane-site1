import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const body = await req.text();
    const sig = req.headers.get('stripe-signature');

    if (!sig) {
        return NextResponse.json({ error: 'Assinatura ausente' }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch {
        return NextResponse.json({ error: 'Webhook inválido' }, { status: 400 });
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        // TODO: salvar assinatura no banco (Supabase + Prisma — próxima etapa)
        console.log('Pagamento confirmado:', {
            id: session.id,
            email: session.customer_email,
            amount: session.amount_total,
        });
    }

    return NextResponse.json({ received: true });
}
