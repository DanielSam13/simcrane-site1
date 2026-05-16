'use client';
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: '/', label: 'Funcionalidades' },
    { href: '/engenharia', label: 'Engenharia' },
    { href: '/enterprise', label: 'Enterprise' },
    { href: '/pricing', label: 'Preços' },
    { href: '/showcase', label: 'Showcase' },
];

function AcessoModal({ onClose }: { onClose: () => void }) {
    const [form, setForm] = useState({ nome: '', empresa: '', email: '' });
    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.nome || !form.empresa || !form.email) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setEnviado(true);
        }, 800);
    }

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-md rounded-2xl border border-border-dark bg-surface-dark shadow-2xl p-8"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-1.5"
                >
                    <span className="material-symbols-outlined text-xl block">close</span>
                </button>

                {!enviado ? (
                    <>
                        <div className="mb-6">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary mb-4">
                                <span className="material-symbols-outlined text-[28px]">person_add</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white">Acesso SimCrane Pro</h2>
                            <p className="text-slate-400 text-sm mt-1">Preencha seus dados para receber o acesso de teste gratuito.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-300">Nome completo</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={form.nome}
                                    onChange={handleChange}
                                    required
                                    placeholder="Seu nome completo"
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-300">Empresa</label>
                                <input
                                    type="text"
                                    name="empresa"
                                    value={form.empresa}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nome da sua empresa"
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="seu@email.com.br"
                                    className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-background-dark font-bold text-sm hover:bg-primary-hover transition-colors disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                                        Enviando...
                                    </>
                                ) : 'OK — Solicitar Acesso'}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="flex flex-col items-center text-center py-4">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-5">
                            <span className="material-symbols-outlined text-4xl">check_circle</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">Solicitação enviada!</h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Em até <span className="text-primary font-bold">24 horas</span> você receberá um email com login e senha para acessar o <span className="text-white font-semibold">SimCrane Pro</span> por um período de <span className="text-primary font-bold">15 dias de teste</span>.
                        </p>
                        <button
                            onClick={onClose}
                            className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-background-dark font-bold text-sm hover:bg-primary-hover transition-colors"
                        >
                            Fechar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-dark/90 border-b border-border-dark">
                <div className="flex items-center justify-between px-5 h-16 max-w-7xl mx-auto">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                        SimCrane <span className="text-primary">Pro</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <Link key={link.href} className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href={link.href}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link className="hidden sm:block text-sm font-semibold text-slate-300 hover:text-primary transition-colors" href="/dashboard">
                            Dashboard
                        </Link>
                        <button
                            onClick={() => setMobileOpen(prev => !prev)}
                            className="flex items-center justify-center w-10 h-10 md:hidden rounded-full hover:bg-white/10 transition-colors text-white"
                            aria-label="Abrir menu"
                        >
                            <span className="material-symbols-outlined text-2xl">{mobileOpen ? 'close' : 'menu'}</span>
                        </button>
                        <button
                            onClick={() => setModalOpen(true)}
                            className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg bg-primary text-background-dark hover:bg-primary-hover transition-colors"
                        >
                            Acesso SimCrane Pro
                        </button>
                    </div>
                </div>
                {/* Menu mobile */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-border-dark bg-background-dark/95 backdrop-blur-md px-5 py-4 flex flex-col gap-1">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors py-2.5 border-b border-border-dark/50 last:border-0"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/dashboard"
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors py-2.5 border-b border-border-dark/50"
                        >
                            Dashboard
                        </Link>
                        <button
                            onClick={() => { setMobileOpen(false); setModalOpen(true); }}
                            className="mt-3 flex items-center justify-center px-4 py-3 text-sm font-bold rounded-lg bg-primary text-background-dark hover:bg-primary-hover transition-colors"
                        >
                            Acesso SimCrane Pro
                        </button>
                    </div>
                )}
            </header>

            {modalOpen && <AcessoModal onClose={() => setModalOpen(false)} />}
        </>
    );
}
