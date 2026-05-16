import Link from 'next/link';

export const metadata = {
    title: 'Login | SimCrane Pro',
    description: 'Acesse o SimCrane Pro — plataforma de engenharia de rigging.',
};

const modules = [
    { label: 'Nova Operação', tag: 'Simular', icon: 'add_circle', desc: 'Crie e configure uma nova operação de içamento com dados técnicos completos.' },
    { label: 'Configuração da Carga', tag: 'Calcular', icon: 'link', desc: 'Calcula tensão real nas slingas com CG deslocado, angulação nos eixos X e Z, catálogo de cabos e manilhas, fator de segurança instantâneo.' },
    { label: 'Tabelas & Dados Técnicos', tag: 'Acessar', icon: 'table_chart', desc: 'Biblioteca completa de guindastes com tabelas de carga oficiais dos fabricantes.' },
    { label: 'Planos de Rigging PDF', tag: 'Exportar', icon: 'picture_as_pdf', desc: 'Gere laudos técnicos com memorial de cálculo e assinatura digital.' },
    { label: 'Modo Colisão 3D', tag: 'Visualizar', icon: 'view_in_ar', desc: 'Detecção automática de interferências e colisões no canteiro em 3D.' },
    { label: 'Relatórios & Métricas', tag: 'Analisar', icon: 'analytics', desc: 'Histórico de operações, exportações e dados para gestão e auditoria.' },
];

const updates = [
    { version: 'v1.0 — Lançamento', date: '13 Jul 2026', items: ['Simulação 3D com detecção de colisão', 'Tabelas de carga Liebherr, Tadano, Grove', 'Exportação de Plano de Rigging PDF', 'Cálculo automático de cargas e ângulos'] },
    { version: 'v1.1 — Previsto', date: 'Set 2026', items: ['Tandem Lifting (2 guindastes)', 'Análise de pressão de solo', 'App mobile iOS & Android', 'Integração com AutoCAD'] },
];

export default function ShowcasePage() {
    return (
        <main className="flex-grow w-full bg-background-dark">

            {/* System header bar */}
            <div className="w-full border-b border-primary/20 bg-black/40 px-6 py-2 flex items-center justify-between">
                <div className="font-mono text-xs text-primary/70 flex items-center gap-6">
                    <span>// SYNC_MODE: ACTIVE</span>
                    <span className="hidden sm:block">// RENDER_TARGET: SCP-001</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="font-mono text-xs text-green-400">SYSTEM.STATUS [OK]</span>
                </div>
            </div>

            {/* Hero — Login Section */}
            <section className="relative overflow-hidden px-4 pt-16 pb-20">
                <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Heading */}
                    <div className="space-y-8">
                        <div className="space-y-1">
                            <p className="font-mono text-xs text-primary/60 tracking-widest uppercase">// Portal do Operador</p>
                            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none tracking-tight uppercase">
                                ACESSE O<br />
                                <span className="text-primary">SISTEMA.</span>
                            </h1>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-primary/40 pl-4 font-mono text-sm">
                            O SimCrane Pro é uma plataforma de <strong className="text-white">engenharia mecânica</strong> projetada para planejamento de rigging, cálculo de cargas e visualização 3D de alta fidelidade em tempo real.
                        </p>

                        {/* Launch countdown badge */}
                        <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-xl px-5 py-3">
                            <span className="material-symbols-outlined text-primary text-[22px]">rocket_launch</span>
                            <div>
                                <p className="text-white font-bold text-sm">Lançamento: 13 de Julho de 2026</p>
                                <p className="text-primary text-xs font-mono">Quem fechar no mês ganha 20% de desconto</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href="/pricing"
                                className="flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary-hover transition-colors shadow-[0_0_20px_rgba(241,184,16,0.3)]"
                            >
                                <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                                Tenho Interesse
                            </Link>
                            <Link
                                href="/engenharia"
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                            >
                                <span className="material-symbols-outlined text-[18px]">engineering</span>
                                Ver Engenharia
                            </Link>
                        </div>
                    </div>

                    {/* Right: Login card */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent rounded-3xl blur-3xl -z-10"></div>
                        <div className="bg-surface-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl">
                            {/* Card toolbar */}
                            <div className="flex items-center justify-between px-5 py-3 border-b border-border-dark bg-black/30">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                                </div>
                                <span className="font-mono text-xs text-slate-500">SimCrane Pro — Acesso</span>
                                <div className="w-14 h-2.5 bg-slate-700 rounded animate-pulse"></div>
                            </div>

                            <div className="p-8 space-y-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">lock_clock</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Área do Cliente</p>
                                        <p className="text-slate-500 text-xs font-mono">Disponível em 13/07/2026</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">E-mail</label>
                                        <div className="w-full rounded-lg bg-background-dark border border-border-dark text-slate-500 px-4 py-2.5 text-sm font-mono cursor-not-allowed select-none">
                                            usuario@empresa.com.br
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-mono text-slate-500 mb-1.5 uppercase tracking-wider">Senha</label>
                                        <div className="w-full rounded-lg bg-background-dark border border-border-dark text-slate-500 px-4 py-2.5 text-sm font-mono cursor-not-allowed select-none">
                                            ••••••••••••
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-xl bg-primary/10 border border-primary/20 p-4 flex items-start gap-3">
                                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">info</span>
                                    <div>
                                        <p className="text-white text-sm font-semibold mb-1">Sistema em pré-lançamento</p>
                                        <p className="text-slate-400 text-xs leading-relaxed">O acesso ao sistema será liberado no lançamento oficial. Cadastre seu interesse para receber credenciais de acesso por e-mail.</p>
                                    </div>
                                </div>

                                <Link
                                    href="/pricing"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary-hover transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                                    Registrar Interesse
                                </Link>

                                <p className="text-center text-xs text-slate-600 font-mono">
                                    RENDERIZAÇÃO GPU-ACCELERATED · WWW.SIMCRANE.COM.BR
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Módulos */}
            <section className="border-t border-border-dark bg-surface-dark py-16 px-4">
                <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <p className="font-mono text-xs text-primary tracking-widest uppercase">// MÓDULOS CARREGADOS</p>
                        <div className="h-px flex-1 bg-primary/20"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {modules.map((mod) => (
                            <div key={mod.label} className="group bg-background-dark border border-border-dark rounded-xl p-5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                        <span className="material-symbols-outlined text-[22px]">{mod.icon}</span>
                                    </div>
                                    <span className="font-mono text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">{mod.tag}</span>
                                </div>
                                <h3 className="text-white font-bold text-sm mb-1 font-mono uppercase tracking-wide">{mod.label}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{mod.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Updates / Roadmap */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                        <p className="font-mono text-xs text-primary tracking-widest uppercase">// LANÇAMENTOS & ATUALIZAÇÕES</p>
                        <div className="h-px flex-1 bg-primary/20"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {updates.map((u) => (
                            <div key={u.version} className="bg-surface-dark border border-border-dark rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-5 pb-4 border-b border-border-dark">
                                    <p className="font-mono text-sm font-bold text-white">{u.version}</p>
                                    <span className="font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{u.date}</span>
                                </div>
                                <ul className="space-y-2.5">
                                    {u.items.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                                            <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer bar */}
            <div className="border-t border-border-dark bg-black/40 px-6 py-3 flex items-center justify-between">
                <span className="font-mono text-xs text-slate-600">RENDERIZAÇÃO GPU-ACCELERATED</span>
                <span className="font-mono text-xs text-primary">WWW.SIMCRANE.COM.BR</span>
                <span className="font-mono text-xs text-green-400">SYSTEM.STATUS [OK]</span>
            </div>

        </main>
    );
}
