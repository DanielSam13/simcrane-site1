'use client';

import { useState } from 'react';

function LaunchModal({ onClose }: { onClose: () => void }) {
    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-sm rounded-2xl border border-primary/40 bg-surface-dark shadow-[0_0_60px_-10px_rgba(241,184,14,0.3)] p-8 text-center"
                onClick={e => e.stopPropagation()}
            >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary mb-5 mx-auto">
                    <span className="material-symbols-outlined text-4xl">lock_clock</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">Preço em breve</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    Os valores dos planos serão revelados no lançamento oficial do SimCrane Pro.
                </p>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-xl px-5 py-3 mb-6">
                    <span className="material-symbols-outlined text-primary text-xl">event</span>
                    <span className="text-primary font-bold text-lg">13 de Julho de 2026</span>
                </div>
                <p className="text-slate-500 text-xs mb-6">
                    Quer garantir acesso antecipado? Use o botão <span className="text-primary font-semibold">Acesso SimCrane Pro</span> no topo da página.
                </p>
                <button
                    onClick={onClose}
                    className="w-full px-6 py-2.5 rounded-lg bg-primary text-background-dark font-bold text-sm hover:bg-primary-hover transition-colors"
                >
                    Entendido
                </button>
            </div>
        </div>
    );
}

function PrecoOculto({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="mt-4 flex items-baseline gap-1 text-white group cursor-pointer select-none"
            title="Clique para saber quando o preço será revelado"
        >
            <span className="text-3xl font-bold tracking-tight text-slate-500">R$</span>
            <span className="text-5xl font-extrabold tracking-tight blur-sm group-hover:blur-none transition-all duration-300 text-slate-400">
                ●●●,●●
            </span>
            <span className="material-symbols-outlined text-slate-500 text-xl ml-1 group-hover:text-primary transition-colors">lock</span>
        </button>
    );
}

export default function PricingPlans() {
    const [launchOpen, setLaunchOpen] = useState(false);

    return (
        <>
            <section className="px-4 py-16 bg-surface-dark border-t border-border-dark relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Escolha seu Plano</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Planos flexíveis para engenheiros autônomos e grandes empresas. Cancele quando quiser.</p>
                        <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
                            <span className="material-symbols-outlined text-primary text-base">event</span>
                            <span className="text-primary text-sm font-semibold">Preços revelados em 13 de Julho de 2026</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
                        {/* Mensal */}
                        <div className="rounded-md bg-background-dark border border-border-dark p-8 flex flex-col h-full hover:border-primary/30 transition-colors">
                            <h4 className="text-xl font-semibold text-slate-300">Mensal</h4>
                            <PrecoOculto onClick={() => setLaunchOpen(true)} />
                            <p className="mt-4 text-sm text-slate-400">Ideal para projetos de curto prazo.</p>
                            <ul className="mt-8 space-y-4 flex-1">
                                {['Acesso ao SimCrane Web'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                                        <span className="material-symbols-outlined text-primary text-xl">check</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setLaunchOpen(true)}
                                className="mt-8 w-full rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors border border-white/5"
                            >
                                Começar Mensal
                            </button>
                        </div>

                        {/* Anual VIP - Destaque */}
                        <div className="relative rounded-md bg-[#131b2e] border border-primary p-8 flex flex-col h-full shadow-[0_0_40px_-10px_rgba(241,184,14,0.15)] transform md:-translate-y-4 z-10">
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-background-dark shadow-lg">
                                MAIS POPULAR
                            </div>
                            <h4 className="text-xl font-semibold text-primary">Anual VIP</h4>
                            <PrecoOculto onClick={() => setLaunchOpen(true)} />
                            <p className="mt-1 text-xs text-primary/80 font-medium">Economize 40% anualmente</p>
                            <ul className="mt-8 space-y-4 flex-1">
                                {['Acesso ao SimCrane Web', 'Acesso à Biblioteca Modelo 3D', 'Acesso ao Módulo Engenharia', 'Suporte por e-mail e WhatsApp'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-white font-medium">
                                        <span className="material-symbols-outlined text-primary text-xl">verified</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setLaunchOpen(true)}
                                className="mt-8 w-full rounded-md bg-primary px-4 py-3 text-sm font-bold text-background-dark hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                            >
                                Assinar Anual VIP
                            </button>
                        </div>

                        {/* Semestral */}
                        <div className="rounded-md bg-background-dark border border-border-dark p-8 flex flex-col h-full hover:border-primary/30 transition-colors">
                            <h4 className="text-xl font-semibold text-slate-300">Semestral</h4>
                            <PrecoOculto onClick={() => setLaunchOpen(true)} />
                            <p className="mt-4 text-sm text-slate-400">Equilíbrio perfeito para médio prazo.</p>
                            <ul className="mt-8 space-y-4 flex-1">
                                {['Acesso ao SimCrane Web', 'Acesso à Biblioteca Modelo 3D'].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                                        <span className="material-symbols-outlined text-primary text-xl">check</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => setLaunchOpen(true)}
                                className="mt-8 w-full rounded-md bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors border border-white/5"
                            >
                                Começar Semestral
                            </button>
                        </div>
                    </div>

                    {/* Pacotes 3D */}
                    <div className="mt-20">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white tracking-tight">Pacotes de Modelos 3D</h3>
                            <div className="h-px flex-1 bg-border-dark ml-6"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center p-4 rounded-md bg-background-dark border border-border-dark gap-4">
                                <div className="w-12 h-12 rounded-md bg-slate-800 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-slate-400">inventory_2</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold">Standard Pack</h5>
                                    <p className="text-xs text-slate-400">20 Guindastes Rodoviários</p>
                                </div>
                                <div className="ml-auto"><span className="text-sm font-bold text-slate-500">Incluso</span></div>
                            </div>
                            <div className="flex items-center p-4 rounded-md bg-background-dark border border-border-dark gap-4">
                                <div className="w-12 h-12 rounded-md bg-indigo-900/30 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-indigo-400">precision_manufacturing</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold">Advanced Pack</h5>
                                    <p className="text-xs text-slate-400">+15 Guindastes Treliçados</p>
                                </div>
                                <div className="ml-auto"><span className="text-sm font-bold text-primary">VIP</span></div>
                            </div>
                            <div className="flex items-center p-4 rounded-md bg-background-dark border border-border-dark gap-4">
                                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-primary">rocket_launch</span>
                                </div>
                                <div>
                                    <h5 className="text-white font-semibold">Full Pack</h5>
                                    <p className="text-xs text-slate-400">Todos os modelos + Atualizações</p>
                                </div>
                                <div className="ml-auto"><span className="text-sm font-bold text-primary">VIP</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {launchOpen && <LaunchModal onClose={() => setLaunchOpen(false)} />}
        </>
    );
}
