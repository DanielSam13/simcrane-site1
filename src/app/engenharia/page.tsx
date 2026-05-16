import Link from 'next/link';

export const metadata = {
    title: 'Engenharia de Rigging | SimCrane Pro',
    description: 'Ferramentas avançadas para planejamento e execução de içamentos com precisão técnica.',
};

const features = [
    {
        icon: 'calculate',
        title: 'Cálculo de Cargas',
        desc: 'Motor de cálculo automático de cargas, ângulos de lanço e esforços nos pontos de ancoragem conforme normas ABNT e NR-12.',
    },
    {
        icon: 'view_in_ar',
        title: 'Modelagem 3D',
        desc: 'Visualização tridimensional da operação com representação fiel dos equipamentos, peça e obstáculos do canteiro.',
    },
    {
        icon: 'route',
        title: 'Planejamento de Rota',
        desc: 'Trace a rota de içamento e verifique colisões potenciais com estruturas e interferências no caminho de trabalho.',
    },
    {
        icon: 'picture_as_pdf',
        title: 'Laudos Técnicos PDF',
        desc: 'Exporte planos de rigging profissionais com memorial de cálculo, assinatura digital e ART integrada.',
    },
    {
        icon: 'groups',
        title: 'Tandem Lifting',
        desc: 'Simule operações de içamento em tandem com dois ou mais guindastes, calculando a distribuição de carga em tempo real.',
    },
    {
        icon: 'terrain',
        title: 'Análise de Solo',
        desc: 'Calcule a pressão de contato sobre o terreno e verifique a necessidade de chapas de distribuição ou reforço de base.',
    },
];

export default function EngenhariaPage() {
    return (
        <main className="flex-grow w-full">

            {/* Hero */}
            <section className="relative overflow-hidden w-full pt-6 pb-16 px-4">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>
                <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center gap-6 pt-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary ring-1 ring-inset ring-primary/30">
                        <span className="material-symbols-outlined text-[16px]">engineering</span>
                        Módulo de Engenharia
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight max-w-4xl">
                        Engenharia de Rigging com{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                            precisão técnica absoluta
                        </span>
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                        Do planejamento à execução, o SimCrane Pro oferece todas as ferramentas de engenharia que um içamento seguro e eficiente exige.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/pricing"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary-hover shadow-[0_0_20px_rgba(241,184,16,0.3)] hover:shadow-[0_0_40px_rgba(241,184,16,0.5)] transition-all hover:-translate-y-1"
                        >
                            <span>Ver Planos</span>
                            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </Link>
                        <a
                            href="/Plano de Rigging/Plano_de_Rigging_Modelo.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <span className="material-symbols-outlined text-[20px]">download</span>
                            <span>Modelo de Laudo PDF</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 bg-surface-dark border-y border-border-dark relative">
                <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-white mb-3">Funcionalidades Técnicas</h2>
                        <p className="text-slate-400 max-w-xl mx-auto">Cada ferramenta foi desenvolvida com engenheiros de rigging para atender as exigências reais do campo.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="group bg-background-dark border border-border-dark rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all">
                                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                                    <span className="material-symbols-outlined text-[26px]">{f.icon}</span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Normas Técnicas */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-sm font-medium text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-[18px]">gavel</span>
                            Conformidade Normativa
                        </div>
                        <h2 className="text-3xl font-black text-white leading-tight">
                            Conforme as normas{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">brasileiras e internacionais</span>
                        </h2>
                        <p className="text-slate-400 leading-relaxed">
                            Todos os cálculos seguem rigorosamente as normas vigentes, garantindo laudos válidos e aceitos por órgãos fiscalizadores.
                        </p>
                        <ul className="space-y-3">
                            {[
                                'ABNT NBR 11363 — Içamento de cargas',
                                'NR-12 — Segurança em máquinas e equipamentos',
                                'ISO 4301 — Classificação de mecanismos de guindastes',
                                'ASME B30.5 — Guindastes autopropelidos',
                            ].map((norm) => (
                                <li key={norm} className="flex items-center gap-3 text-slate-300 text-sm">
                                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                    {norm}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-surface-dark border border-border-dark rounded-2xl p-8 space-y-4">
                        <div className="flex items-center gap-3 pb-4 border-b border-border-dark">
                            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">description</span>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Plano de Rigging Modelo</p>
                                <p className="text-slate-500 text-xs">Versão 2024 • Com memorial de cálculo</p>
                            </div>
                            <a
                                href="/Plano de Rigging/Plano_de_Rigging_Modelo.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-auto flex items-center gap-1 text-primary text-sm font-semibold hover:underline"
                            >
                                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                            </a>
                        </div>
                        {[
                            { label: 'Capacidade Máxima', value: '250t' },
                            { label: 'Raio de Trabalho', value: '18m' },
                            { label: 'Altura de Içamento', value: '42m' },
                            { label: 'Coeficiente de Segurança', value: '5:1' },
                        ].map((stat) => (
                            <div key={stat.label} className="flex justify-between items-center">
                                <span className="text-slate-400 text-sm">{stat.label}</span>
                                <span className="text-white font-bold">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 pb-16">
                <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-primary/10 to-background-dark border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Pronto para projetos sem margem de erro?</h3>
                        <p className="text-slate-400">Comece com o plano gratuito e exporte seu primeiro laudo hoje.</p>
                    </div>
                    <Link
                        href="/pricing"
                        className="flex items-center gap-2 px-8 py-4 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary-hover transition-colors shadow-[0_0_20px_rgba(241,184,16,0.3)] whitespace-nowrap"
                    >
                        <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                        Começar Agora
                    </Link>
                </div>
            </section>

        </main>
    );
}
