import CountdownTimer from '@/components/CountdownTimer';
import VideoPickerModal from '@/components/VideoPickerModal';

export default function Home() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden w-full pt-6 pb-10 px-4">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-grid-pattern"></div>
        <div className="@container">
          <div className="relative w-full overflow-hidden rounded-2xl bg-surface-dark shadow-2xl border border-border-dark aspect-[4/5] sm:aspect-[16/9] flex flex-col items-center justify-center text-center p-6 sm:p-12">
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHwun2JenLdBIdQrbtjTiuaRxROp7X0z1E7rrtgrYd9LQEskgJvuFSk18PLvUisULWe5OHL7eUMXAU1WN4x_prPsuJNdt17eIl1shrmsl3TSYkLJVotECMfP57QD1hv1DTzXz64SnhFGSxlamck1F4GsyEgKRbt7bdXJcMHumjpv_-dWWwNsNMiL7YGsZIT41S5zniViuw0pg9nMJSikCXF-PkTjDEJWk78Jqc04_8Nd69-kA0nXqSVnteVTtJMnNL_fHFPja_IA")',
                filter: "brightness(0.35)",
              }}
            ></div>
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary ring-1 ring-inset ring-primary/30 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Lançamento Oficial v1.0
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight drop-shadow-xl">
                O futuro da Engenharia Rigging chega em{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                  13 de Julho
                </span>
              </h1>
              <CountdownTimer />
              <p className="text-slate-200 text-base sm:text-lg md:text-xl font-light max-w-lg leading-relaxed drop-shadow-md">
                Simulação avançada de guindastes rodoviários e AT na palma da sua mão. Precisão técnica para içamentos complexos.
              </p>
              <div className="pt-6 w-full flex justify-center">
                <button className="group relative flex w-full sm:w-auto min-w-[240px] items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-5 text-background-dark text-lg font-bold shadow-[0_0_20px_rgba(241,184,16,0.3)] transition-all hover:bg-primary-hover hover:shadow-[0_0_40px_rgba(241,184,16,0.5)] hover:-translate-y-1 active:translate-y-0">
                  <span className="relative z-10">QUERO ACESSO ANTECIPADO</span>
                  <span className="material-symbols-outlined relative z-10 text-[24px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-primary">verified</span>
                Junte-se a +2.000 engenheiros na lista de espera
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Funcionalidades Principais */}
      <section className="px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">Funcionalidades Principais</h3>
          <div className="h-px flex-1 bg-border-dark ml-6 opacity-50"></div>
        </div>

        <VideoPickerModal />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative overflow-hidden rounded-xl border border-border-dark bg-surface-dark p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 h-full">
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 transition-transform group-hover:scale-150"></div>
            <div className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[28px]">construction</span>
            </div>
            <div className="relative z-10 space-y-2">
              <h4 className="text-lg font-bold text-white">Biblioteca de Guindastes</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Acesso a modelos detalhados de guindastes rodoviários e AT (Liebherr, Tadano, Grove) com tabelas de carga atualizadas.
              </p>
            </div>
          </div>
          <a
            href="/api/media/Plano de Rigging/Plano_de_Rigging_Modelo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border border-border-dark bg-surface-dark p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 h-full block cursor-pointer"
          >
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 transition-transform group-hover:scale-150"></div>
            <div className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-[28px]">picture_as_pdf</span>
            </div>
            <div className="relative z-10 space-y-2">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                Planos de Rigging PDF
                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Clique para visualizar um exemplo de plano de rigging e laudo técnico que você exporta pronto para assinatura e aprovação.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* 3. Soluções Enterprise */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-surface-dark border-y border-border-dark">
          <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-sm font-medium text-primary border border-primary/20">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Soluções Enterprise
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Sua marca, nossa <br />{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                  tecnologia White Label
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Personalize o SimCrane Pro com a identidade visual da sua locadora. Ofereça aos seus clientes uma ferramenta exclusiva para planejamento de içamentos com sua frota.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Logo e cores customizáveis no app e relatórios</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Integração com seu ERP via API</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  <span>Gestão de frota exclusiva no simulador</span>
                </li>
              </ul>
              <div className="pt-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-surface-dark font-bold hover:bg-slate-200 transition-colors">
                  <span>Consultar Especialista</span>
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </button>
              </div>
            </div>
            <div className="relative h-full flex items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-2xl"></div>
              <div className="relative z-10 bg-background-dark border border-border-dark p-1 rounded-2xl shadow-2xl w-full max-w-md transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="bg-surface-dark rounded-xl p-6 overflow-hidden relative">
                  <div className="flex items-center justify-between mb-6 border-b border-border-dark pb-4">
                    <div className="h-8 w-24 bg-gray-600/50 rounded animate-pulse"></div>
                    <div className="h-8 w-8 bg-primary rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-gray-700/30 rounded-lg w-full"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-gray-700/30 rounded-lg"></div>
                      <div className="h-20 bg-gray-700/30 rounded-lg"></div>
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

      {/* 4. Baixe o Checklist */}
      <section className="px-4 py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface-dark border border-border-dark overflow-hidden shadow-2xl flex flex-col md:flex-row">
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
                <label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="name">
                  Nome Completo
                </label>
                <input
                  className="w-full rounded-lg bg-surface-dark border border-border-dark text-white px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm placeholder-slate-600 outline-none"
                  id="name"
                  placeholder="Eng. Carlos Silva"
                  type="text"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="email">
                  E-mail Corporativo
                </label>
                <input
                  className="w-full rounded-lg bg-surface-dark border border-border-dark text-white px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm placeholder-slate-600 outline-none"
                  id="email"
                  placeholder="carlos@empresa.com.br"
                  type="email"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="role">
                  Cargo
                </label>
                <select
                  className="w-full rounded-lg bg-surface-dark border border-border-dark text-slate-300 px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary text-sm outline-none"
                  id="role"
                >
                  <option>Engenheiro de Rigging</option>
                  <option>Supervisor de Operações</option>
                  <option>Gerente de Frota</option>
                  <option>Outro</option>
                </select>
              </div>
              <button
                className="w-full rounded-lg bg-primary hover:bg-primary-hover text-background-dark font-bold py-3 mt-2 transition-colors flex items-center justify-center gap-2"
                type="button"
              >
                <span>Baixar Material Grátis</span>
                <span className="material-symbols-outlined text-[18px]">download</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. CTA Final */}
      <section className="px-4 py-12">
        <div className="rounded-2xl bg-gradient-to-r from-surface-dark to-background-dark border border-border-dark p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Pronto para elevar seu nível?</h3>
              <p className="text-slate-400">Garanta sua vaga no lançamento e receba 20% de desconto.</p>
            </div>
            <button className="w-full md:w-auto whitespace-nowrap rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 font-semibold transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-[20px]">mail</span>
              Entrar na Lista de Espera
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
