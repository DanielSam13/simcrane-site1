import Link from 'next/link';

export const metadata = {
    title: 'Central de Comando | SimCrane Pro',
    description: 'Visão geral do painel de operações e recursos do SimCrane Pro.',
};

const showcaseItems = [
    {
        icon: 'monitor',
        tag: 'Interface',
        title: 'Painel de Operação',
        desc: 'Visualização completa da operação em tempo real. Controle de cargas, raios, alturas e alertas de segurança em um único painel.',
        highlight: 'Tempo Real',
    },
    {
        icon: 'map',
        tag: 'Planejamento',
        title: 'Mapa de Canteiro',
        desc: 'Posicione o guindaste, defina obstáculos e simule a trajetória da carga diretamente sobre o layout do canteiro em 2D e 3D.',
        highlight: '2D & 3D',
    },
    {
        icon: 'analytics',
        tag: 'Análise',
        title: 'Relatórios e Métricas',
        desc: 'Acompanhe o histórico de simulações, exportações e uso por equipamento. Dados estruturados para gestão e auditoria.',
        highlight: 'Exportável',
    },
    {
        icon: 'group_work',
        tag: 'Colaboração',
        title: 'Projetos em Equipe',
        desc: 'Compartilhe projetos com sua equipe, defina permissões por usuário e acompanhe revisões com histórico de alterações.',
        highlight: 'Multi-usuário',
    },
    {
        icon: 'notifications_active',
        tag: 'Segurança',
        title: 'Alertas Inteligentes',
        desc: 'Sistema de alertas automáticos para sobrecarga, interferência com obstáculos, condições de vento e limites operacionais.',
        highlight: 'Automático',
    },
    {
        icon: 'cloud_sync',
        tag: 'Sincronização',
        title: 'Backup em Nuvem',
        desc: 'Todos os projetos salvos automaticamente na nuvem. Acesse de qualquer dispositivo com sincronização instantânea.',
        highlight: 'Sempre salvo',
    },
];

const stats = [
    { value: '+2.000', label: 'Engenheiros cadastrados' },
    { value: '+15.000', label: 'Simulações realizadas' },
    { value: '98%', label: 'Satisfação dos usuários' },
    { value: '< 2s', label: 'Tempo de simulação' },
];

export default function ShowcasePage() {
    return (
        <main className="flex-grow w-full">

            {/* Hero */}
            <section className="relative overflow-hidden pt-12 pb-16 px-4">
                <div className="absolute inset-0 opacity-10 bg-grid-pattern pointer-events-none"></div>
                <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary ring-1 ring-inset ring-primary/30">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Central de Comando
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl">
                        Tudo que você precisa,{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                            em um só lugar
                        </span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                        Uma plataforma completa para planejamento, simulação e gestão de içamentos. Do escritório ao canteiro de obras.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="border-y border-border-dark bg-surface-dark py-10 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center">
                            <p className="text-3xl md:text-4xl font-black text-primary">{s.value}</p>
                            <p className="text-slate-400 text-sm mt-1">{s.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Showcase Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-white mb-3">Recursos da Plataforma</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Cada recurso foi projetado para tornar o trabalho do engenheiro de içamento mais rápido, seguro e profissional.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {showcaseItems.map((item) => (
                            <div key={item.title} className="group relative bg-surface-dark border border-border-dark rounded-2xl p-6 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all overflow-hidden">
                                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                                            <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">{item.highlight}</span>
                                    </div>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{item.tag}</span>
                                    <h3 className="text-white font-bold text-lg mt-1 mb-2">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Preview */}
            <section className="py-16 bg-surface-dark border-y border-border-dark relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-white leading-tight">
                                Interface pensada para{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">engenheiros de campo</span>
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                Design limpo e funcional que permite foco total no planejamento. Sem distrações, sem curva de aprendizado longa.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    'Funciona offline em campo',
                                    'Compatível com tablet e smartphone',
                                    'Interface em português',
                                    'Modo noturno integrado',
                                ].map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-slate-300 text-sm">
                                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-4">
                                <Link
                                    href="/pricing"
                                    className="flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-[0_0_20px_rgba(241,184,16,0.3)]"
                                >
                                    Assinar Agora
                                </Link>
                                <Link
                                    href="/engenharia"
                                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    Ver Módulo Técnico
                                </Link>
                            </div>
                        </div>

                        {/* Mock UI */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-3xl -z-10"></div>
                            <div className="bg-background-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl">
                                {/* Toolbar simulada */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-border-dark bg-surface-dark">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono">SimCrane Pro v1.0</span>
                                    <div className="w-16 h-3 bg-slate-700 rounded animate-pulse"></div>
                                </div>
                                {/* Conteúdo simulado */}
                                <div className="p-5 space-y-4">
                                    <div className="flex gap-3">
                                        <div className="h-24 flex-1 bg-slate-800/60 rounded-xl"></div>
                                        <div className="h-24 flex-1 bg-primary/10 rounded-xl border border-primary/20"></div>
                                    </div>
                                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                                    <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                                    <div className="grid grid-cols-3 gap-2 pt-2">
                                        {[60, 85, 45].map((h, i) => (
                                            <div key={i} className="space-y-1">
                                                <div className="bg-slate-700 rounded-t h-1" style={{ height: `${h * 0.5}px` }}></div>
                                                <div className="h-1 bg-primary/40 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 pt-1">
                                        <div className="h-8 flex-1 bg-primary rounded-lg"></div>
                                        <div className="h-8 w-16 bg-slate-700 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Pronto para começar?</h2>
                    <p className="text-slate-400 mb-8">Junte-se a mais de 2.000 engenheiros que já usam o SimCrane Pro para içamentos mais seguros e eficientes.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/pricing"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-[0_0_20px_rgba(241,184,16,0.3)] hover:shadow-[0_0_40px_rgba(241,184,16,0.5)] hover:-translate-y-1"
                        >
                            <span>Ver Planos e Preços</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </Link>
                        <Link
                            href="/enterprise"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <span className="material-symbols-outlined text-[20px]">business</span>
                            Soluções Enterprise
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
