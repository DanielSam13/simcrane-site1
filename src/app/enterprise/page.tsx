import InteresseButton from '@/components/InteresseModal';

export const metadata = {
    title: 'Training Work | SimCrane Pro',
    description: 'Capacitação técnica de alto nível para operadores, supervisores e equipes de segurança em operações de rigging.',
};

export default function TrainingWorkPage() {
    return (
        <main className="flex-grow w-full">

            {/* Hero */}
            <section className="relative overflow-hidden w-full pt-6 pb-10 px-4">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>
                <div className="@container">
                    <div className="relative w-full overflow-hidden rounded-2xl bg-surface-dark shadow-2xl border border-border-dark aspect-[4/5] sm:aspect-[16/9] flex flex-col items-center justify-center text-center p-6 sm:p-12">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVyq_miswh1i24rYrK2twc1AyK5T5Q0i-MiGwzBvoDw8hnqYDc0Oh1sb53TQYfp6zEDJOOzMlxqN_Ruz2-yn36s9FDxiaYlLAsfMpoWBc_wSV2UVrkk6VEN9E4u8UadynhcrlBaNMJt07jxkLWS9ZQkzhBHqwbIn6uye58eajExEGm6arw59SWk9vDIp93AxFJ1iJTRYoBZ47XfQ-gKXiAtASRxcazrDLOicN7MSNJtiuOXI3V-akgfmhMenNb2vqZU43sQfd4Bg')",
                                filter: "brightness(0.4)",
                            }}
                        ></div>
                        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/40">
                                <span className="material-symbols-outlined text-[16px]">school</span>
                                Training Work
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                                A Fronteira entre o Treinamento e a{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">Realidade</span>
                            </h1>
                            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light max-w-lg leading-relaxed">
                                Capacitação técnica de alto nível para operadores, supervisores e equipes de segurança.
                            </p>
                            <div className="pt-4 w-full flex justify-center">
                                <InteresseButton className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 text-background-dark text-base font-bold shadow-[0_0_20px_rgba(241,184,14,0.3)] transition-all hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(241,184,14,0.5)] hover:-translate-y-0.5 active:translate-y-0">
                                    <span className="relative z-10">TENHO INTERESSE</span>
                                    <span className="material-symbols-outlined relative z-10 text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </InteresseButton>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 font-medium">Quem fechar no mês do lançamento ganha 20% de desconto</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Training Work — Main Section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-surface-dark border-y border-border-dark">
                    <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Left — Content */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-sm font-medium text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-[18px]">school</span>
                                Training Work
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                                SimCrane Pro: A Fronteira entre o{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                                    Treinamento e a Realidade
                                </span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                O erro em uma operação de rigging não é uma opção. Por isso, o SimCrane Pro foi desenvolvido para ser a ferramenta definitiva na capacitação e reciclagem de profissionais da área de movimentação de carga.
                            </p>

                            <div>
                                <h4 className="text-white font-bold text-base mb-3">Capacitação Técnica de Alto Nível</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    Transforme a teoria em experiência prática antes mesmo de ligar o motor do guindaste. Nossa plataforma permite que instrutores e supervisores criem cenários reais de içamento para treinar:
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        { bold: 'Operadores e Riggers:', text: 'Visualização clara de ângulos de içamento e comportamento da carga.' },
                                        { bold: 'Supervisores de Rigging:', text: 'Verificação imediata de planos de rigging e identificação de riscos estruturais.' },
                                        { bold: 'Equipes de Segurança (SESMT):', text: 'Simulação de zonas de exclusão e análise de interferências no canteiro.' },
                                    ].map((item) => (
                                        <li key={item.bold} className="flex items-start gap-3 text-slate-300">
                                            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">check_circle</span>
                                            <span className="text-sm"><strong className="text-white">{item.bold}</strong> {item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-white font-bold text-base mb-3">Benefícios do Treinamento</h4>
                                <ul className="space-y-3">
                                    {[
                                        { icon: 'health_and_safety', bold: 'Risco Zero:', text: 'Treine manobras complexas em um ambiente seguro.' },
                                        { icon: 'monitoring', bold: 'Análise em Tempo Real:', text: 'Monitore o tempo de uso e a evolução pelo dashboard.' },
                                        { icon: 'verified', bold: 'Padronização de Excelência:', text: 'Garanta que a equipe utilize a mesma base de cálculos.' },
                                    ].map((item) => (
                                        <li key={item.bold} className="flex items-start gap-3 text-slate-300">
                                            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">{item.icon}</span>
                                            <span className="text-sm"><strong className="text-white">{item.bold}</strong> {item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right — Image */}
                        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-border-dark">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/api/media/Imagem/training.png"
                                alt="Treinamento com SimCrane Pro"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Plataforma em múltiplos dispositivos */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-white mb-3">Disponível em todos os dispositivos</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">Acesse o SimCrane Pro de qualquer lugar — desktop, tablet ou mobile.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative rounded-2xl overflow-hidden border border-border-dark shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/api/media/Imagem/Notebook.png"
                            alt="SimCrane Pro no Notebook"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-bold">Notebook</p>
                            <p className="text-slate-300 text-xs">Experiência completa para engenharia de rigging</p>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden border border-border-dark shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/api/media/Imagem/tablet.png"
                            alt="SimCrane Pro no Tablet"
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-bold">Tablet</p>
                            <p className="text-slate-300 text-xs">Leve para o canteiro de obras</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Checklist Download */}
            <section className="px-4 py-16 bg-background-dark border-t border-border-dark">
                <div className="max-w-4xl mx-auto rounded-2xl bg-surface-dark border border-border-dark overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
                        <h3 className="text-2xl font-bold text-white mb-4">Baixe o Checklist Técnico de Rigging</h3>
                        <p className="text-slate-400 mb-6 text-sm">
                            Garanta a segurança das suas operações com nosso guia de verificação em campo. Item obrigatório para supervisores de içamento.
                        </p>
                        <div className="relative bg-black/30 rounded-xl p-4 border border-white/10 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">assignment</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">Checklist Completo em PDF</p>
                                    <p className="text-slate-500 text-xs mt-1">Versão 2024 • Atualizado NR-12</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-8 md:p-12 md:w-1/2 bg-background-dark/50 border-t md:border-t-0 md:border-l border-border-dark">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="name">Nome Completo</label>
                                <input className="w-full rounded-lg bg-surface-dark border border-border-dark text-white px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm placeholder-slate-600 outline-none" id="name" placeholder="Eng. Carlos Silva" type="text" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="email">E-mail Corporativo</label>
                                <input className="w-full rounded-lg bg-surface-dark border border-border-dark text-white px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm placeholder-slate-600 outline-none" id="email" placeholder="carlos@empresa.com.br" type="email" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="role">Cargo</label>
                                <select className="w-full rounded-lg bg-surface-dark border border-border-dark text-slate-300 px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm outline-none" id="role">
                                    <option>Engenheiro de Rigging</option>
                                    <option>Supervisor de Operações</option>
                                    <option>Gerente de Frota</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <button className="w-full rounded-lg bg-primary hover:bg-primary-hover text-background-dark font-bold py-3 mt-2 transition-colors flex items-center justify-center gap-2" type="button">
                                <span>Baixar Material Grátis</span>
                                <span className="material-symbols-outlined text-[18px]">download</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </main>
    );
}
