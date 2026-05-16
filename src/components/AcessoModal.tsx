'use client';
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';

function Modal({ onClose }: { onClose: () => void }) {
    const [form, setForm] = useState({ nome: '', empresa: '', email: '' });
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!form.nome || !form.empresa || !form.email) return;
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
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-1.5 z-10"
                >
                    <span className="material-symbols-outlined text-xl block">close</span>
                </button>

                {!enviado ? (
                    <div className="p-8">
                        <div className="mb-6">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400 mb-4">
                                <span className="material-symbols-outlined text-[28px]">person_add</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white">Acessar SimCrane Pro</h2>
                            <p className="text-slate-400 text-sm mt-1">Preencha seus dados para receber o acesso de teste gratuito.</p>
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
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Empresa *</label>
                                <input
                                    type="text"
                                    name="empresa"
                                    value={form.empresa}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nome da sua empresa"
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
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
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-1 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <span className="material-symbols-outlined text-[18px]">login</span>
                                        Solicitar Acesso
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
                        <h2 className="text-2xl font-bold text-white mb-3">Solicitação enviada!</h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Em até <span className="text-blue-400 font-bold">24 horas</span> você receberá um e-mail com login e senha para acessar o <span className="text-white font-semibold">SimCrane Pro</span> por um período de <span className="text-blue-400 font-bold">15 dias de teste</span>.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-6 px-6 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-colors"
                        >
                            Fechar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function AcessoButton({ className, children }: { className?: string; children?: ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <button onClick={() => setOpen(true)} className={className}>
                {children}
            </button>
            {open && <Modal onClose={() => setOpen(false)} />}
        </>
    );
}
