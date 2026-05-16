'use client';
import { useState } from 'react';

function Modal({ onClose }: { onClose: () => void }) {
    const [form, setForm] = useState({ nome: '', email: '', telefone: '', empresa: '' });
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.nome || !form.email || !form.telefone) return;
        setLoading(true);
        try {
            await fetch('/api/acesso', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
        } finally {
            setLoading(false);
            setEnviado(true);
        }
    }

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md rounded-2xl border border-border-dark bg-surface-dark shadow-2xl overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-yellow-200"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-1.5 z-10"
                >
                    <span className="material-symbols-outlined text-xl block">close</span>
                </button>

                {!enviado ? (
                    <div className="p-8">
                        <div className="mb-5">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary mb-4">
                                <span className="material-symbols-outlined text-[28px]">thumb_up</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white">Tenho Interesse</h2>
                            <p className="text-slate-400 text-sm mt-1">Registre seu interesse e nossa equipe entrará em contato em até 24h.</p>
                        </div>

                        {/* Discount banner */}
                        <div className="mb-5 rounded-xl bg-primary/10 border border-primary/30 px-4 py-3 flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">local_offer</span>
                            <div>
                                <p className="text-white font-bold text-sm">Oferta especial de lançamento</p>
                                <p className="text-slate-300 text-xs leading-relaxed mt-0.5">
                                    Clientes que fecharem até <strong className="text-primary">31 de julho de 2026</strong> ganham <strong className="text-primary">20% de desconto</strong> na licença anual.
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Nome completo *</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={form.nome}
                                    onChange={handleChange}
                                    required
                                    placeholder="Eng. Carlos Silva"
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">E-mail *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="carlos@empresa.com.br"
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Telefone / WhatsApp *</label>
                                <input
                                    type="tel"
                                    name="telefone"
                                    value={form.telefone}
                                    onChange={handleChange}
                                    required
                                    placeholder="(11) 99999-9999"
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Empresa</label>
                                <input
                                    type="text"
                                    name="empresa"
                                    value={form.empresa}
                                    onChange={handleChange}
                                    placeholder="Nome da empresa (opcional)"
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-1 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-background-dark font-bold text-sm hover:bg-primary-hover transition-colors disabled:opacity-60 shadow-[0_0_20px_rgba(241,184,16,0.2)]"
                            >
                                {loading ? (
                                    <>
                                        <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-[18px]">send</span>
                                        Registrar Interesse
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="p-8 flex flex-col items-center text-center">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-5">
                            <span className="material-symbols-outlined text-4xl">check_circle</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">Interesse registrado!</h2>
                        <p className="text-slate-300 text-sm leading-relaxed mb-2">
                            Obrigado, <strong className="text-white">{form.nome.split(' ')[0]}</strong>! Seus dados foram registrados com sucesso.
                        </p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">
                            Nossa equipe comercial entrará em contato em até <span className="text-primary font-bold">24 horas úteis</span> para apresentar a melhor solução para sua operação.
                        </p>
                        <div className="w-full rounded-xl bg-primary/10 border border-primary/20 px-4 py-3 mb-6">
                            <p className="text-primary font-bold text-sm">Lembre-se: 20% de desconto</p>
                            <p className="text-slate-400 text-xs mt-0.5">Para contratos fechados até 31/07/2026 na licença anual.</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 rounded-lg bg-primary text-background-dark font-bold text-sm hover:bg-primary-hover transition-colors"
                        >
                            Fechar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function InteresseButton({ className, children }: { className?: string; children?: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)} className={className}>
                {children ?? (
                    <>
                        <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                        Tenho Interesse
                    </>
                )}
            </button>
            {open && <Modal onClose={() => setOpen(false)} />}
        </>
    );
}
