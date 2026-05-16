import Link from "next/link";
import InteresseButton from '@/components/InteresseModal';

export default function EnterprisePage() {
    return (
        <main className="flex-grow w-full max-w-7xl mx-auto">
            <section className="relative overflow-hidden w-full pt-6 pb-10 px-4">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>
                <div className="@container">
                    <div className="relative w-full overflow-hidden rounded-md bg-surface-dark shadow-2xl border border-border-dark aspect-[4/5] sm:aspect-[16/9] flex flex-col items-center justify-center text-center p-6 sm:p-12">
                        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVyq_miswh1i24rYrK2twc1AyK5T5Q0i-MiGwzBvoDw8hnqYDc0Oh1sb53TQYfp6zEDJOOzMlxqN_Ruz2-yn36s9FDxiaYlLAsfMpoWBc_wSV2UVrkk6VEN9E4u8UadynhcrlBaNMJt07jxkLWS9ZQkzhBHqwbIn6uye58eajExEGm6arw59SWk9vDIp93AxFJ1iJTRYoBZ47XfQ-gKXiAtASRxcazrDLOicN7MSNJtiuOXI3V-akgfmhMenNb2vqZU43sQfd4Bg')", filter: "brightness(0.4)" }}></div>
                        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
                            <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/40">
                                Lançamento v1.0
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                                O futuro do Rigging Engenheirado chega em <span className="text-primary">21 de Abril</span>
                            </h1>
                            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light max-w-lg leading-relaxed">
                                Simulação avançada de guindastes na palma da sua mão. Precisão técnica e facilidade de uso em um só lugar.
                            </p>
                            <div className="pt-4 w-full flex justify-center">
                                <InteresseButton className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-md bg-primary px-8 py-4 text-background-dark text-base font-bold shadow-[0_0_20px_rgba(241,184,14,0.3)] transition-all hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(241,184,14,0.5)] hover:-translate-y-0.5 active:translate-y-0">
                                    <span className="relative z-10">TENHO INTERESSE</span>
                                    <span className="material-symbols-outlined relative z-10 text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </InteresseButton>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 font-medium">Quem fechar no mês do lançamento ganha 20% de desconto</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-surface-dark border-y border-border-dark">
                    <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-sm font-medium text-primary border border-primary/20">
                                <span className="material-symbols-outlined text-[18px]">verified</span>
                                Soluções Enterprise
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                                Sua marca, nossa <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">tecnologia White Label</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Personalize o SimCrane Pro com a identidade visual da sua locadora. Ofereça aos seus clientes uma ferramenta exclusiva para planejamento de içamentos com sua frota.
                            </p>
                            <ul className="space-y-3">
                                {['Logo e cores customizáveis no app e relatórios', 'Integração com seu ERP via API', 'Gestão de frota exclusiva no simulador'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4">
                                <button className="flex items-center gap-2 px-6 py-3 rounded-md bg-white text-surface-dark font-bold hover:bg-slate-200 transition-colors">
                                    <span>Consultar Especialista</span>
                                    <span className="material-symbols-outlined text-[20px]">chat</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative h-full flex items-center justify-center min-h-[300px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-md blur-2xl"></div>
                            <div className="relative z-10 bg-background-dark border border-border-dark p-1 rounded-md shadow-2xl w-full max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-surface-dark rounded-md p-6 overflow-hidden relative">
                                    <div className="flex items-center justify-between mb-6 border-b border-border-dark pb-4">
                                        <div className="h-8 w-24 bg-gray-600/50 rounded animate-pulse"></div>
                                        <div className="h-8 w-8 bg-primary rounded-full"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-32 bg-gray-700/30 rounded-md w-full"></div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-20 bg-gray-700/30 rounded-md"></div>
                                            <div className="h-20 bg-gray-700/30 rounded-md"></div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-center">
                                        <span className="text-xs text-slate-500 font-mono">powered by SimCrane Engine</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto rounded-md bg-surface-dark border border-border-dark overflow-hidden shadow-2xl flex flex-col md:flex-row">
                    <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
                        <h3 className="text-2xl font-bold text-white mb-4">Baixe o Checklist Técnico de Rigging</h3>
                        <p className="text-slate-400 mb-6 text-sm">
                            Garanta a segurança das suas operações com nosso guia de verificação em campo. Item obrigatório para supervisores de içamento.
                        </p>
                        <div className="relative bg-black/30 rounded-md p-4 border border-white/10 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/20 rounded-md text-primary">
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
                                <input className="w-full rounded-md bg-surface-dark border border-border-dark text-white px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm placeholder-slate-600" id="name" placeholder="Eng. Carlos Silva" type="text" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="email">E-mail Corporativo</label>
                                <input className="w-full rounded-md bg-surface-dark border border-border-dark text-white px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm placeholder-slate-600" id="email" placeholder="carlos@empresa.com.br" type="email" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="role">Cargo</label>
                                <select className="w-full rounded-md bg-surface-dark border border-border-dark text-slate-300 px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm" id="role">
                                    <option>Engenheiro de Rigging</option>
                                    <option>Supervisor de Operações</option>
                                    <option>Gerente de Frota</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <button className="w-full rounded-md bg-primary hover:bg-primary-hover text-background-dark font-bold py-3 mt-2 transition-colors flex items-center justify-center gap-2" type="button">
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
