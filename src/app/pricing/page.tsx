import PricingPlans from '@/components/PricingPlans';
import DemoVideos from '@/components/DemoVideos';

export default function PricingPage() {
    return (
        <main className="flex-grow w-full max-w-7xl mx-auto">
            <section className="relative overflow-hidden w-full pt-6 pb-10 px-4">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>
                <div className="@container">
                    <div className="relative w-full overflow-hidden rounded-md bg-surface-dark shadow-2xl border border-border-dark aspect-[4/5] sm:aspect-[16/9] flex flex-col items-center justify-center text-center p-6 sm:p-12">
                        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFf-hoej-h_LtDixTIQmHA3mfYrBWy_CHFSf_AoTakB0MGERwv0VkuDcSVhGqwLgFKCZPadkWhRoWZYwdjRBtXmUcnEVolb0LuZfG5Wd3onK16CStlYFP33XJ1IyyxGS5Qo3f2gaTqzlBrf1qAs_N-qBddUKNiGJORmNGeT6BECzGuqDtISG9oOkSlEM62XAjjGp2moWVZN7YkbY7-tmEUTAND1pqfqOcYFIn_zG-gMjTZaKbIwZAWubNvYLJHs0ndoSFzHbegWg")`, filter: "brightness(0.4)" }}></div>
                        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
                            <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/40">
                                Lançamento v1.0
                            </span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm">
                                O futuro do Rigging Engenheirado chega em <span className="text-primary">13 de Julho</span>
                            </h1>
                            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-light max-w-lg leading-relaxed">
                                Simulação avançada de guindastes na palma da sua mão. Precisão técnica e facilidade de uso em um só lugar.
                            </p>
                            <div className="pt-4 w-full flex justify-center">
                                <button className="group relative flex w-full sm:w-auto min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-md bg-primary px-8 py-4 text-background-dark text-base font-bold shadow-[0_0_20px_rgba(241,184,14,0.3)] transition-all hover:bg-primary-hover hover:shadow-[0_0_30px_rgba(241,184,14,0.5)] hover:-translate-y-0.5 active:translate-y-0">
                                    <span className="relative z-10">QUERO ACESSO ANTECIPADO</span>
                                    <span className="material-symbols-outlined relative z-10 text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </button>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 font-medium">Junte-se a +2.000 engenheiros na lista de espera</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-12 bg-background-dark border-t border-border-dark">
                <div className="text-center mb-10">
                    <span className="text-primary font-bold text-sm tracking-wide uppercase">Demonstração</span>
                    <h3 className="text-3xl font-bold text-white mt-2">Veja o SimCrane em Ação</h3>
                    <p className="text-slate-400 mt-2 max-w-2xl mx-auto">Descubra como nossa ferramenta pode otimizar seu planejamento de rigging em diferentes cenários.</p>
                </div>
                <DemoVideos />
            </section>

            <PricingPlans />
        </main>
    );
}
