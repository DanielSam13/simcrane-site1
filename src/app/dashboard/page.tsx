export const metadata = {
    title: 'Dashboard | SimCrane Pro',
    description: 'Central de gerenciamento de licença e frota do SimCrane Pro.',
};

export default function DashboardPage() {
    const usageData = [
        { month: 'Jan', hours: 18 },
        { month: 'Fev', hours: 32 },
        { month: 'Mar', hours: 25 },
        { month: 'Abr', hours: 45 },
        { month: 'Mai', hours: 38 },
        { month: 'Jun', hours: 52 },
    ];
    const maxHours = Math.max(...usageData.map(d => d.hours));

    return (
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-black text-white tracking-tight">Painel de Controle</h1>
                <p className="text-slate-400 mt-1">Gerencie sua licença, frota de equipamentos e histórico de uso.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* COLUNA PRINCIPAL */}
                <div className="lg:col-span-2 flex flex-col gap-6">

                    {/* 1. Status da Conta */}
                    <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
                        <h2 className="flex items-center gap-2 text-white font-bold text-lg mb-6">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                            Status da Conta
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {/* Plano Atual */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-green-500/20 text-green-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">check_circle</span>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Plano Atual</p>
                                    <p className="text-green-400 font-bold text-base mt-0.5">Anual Ativo</p>
                                </div>
                            </div>
                            {/* Data de Bloqueio */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-yellow-500/20 text-yellow-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">timer</span>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Data de Bloqueio</p>
                                    <p className="text-yellow-400 font-bold text-base mt-0.5">13/06/2027</p>
                                </div>
                            </div>
                            {/* Tempo de Uso */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-400 shrink-0">
                                    <span className="material-symbols-outlined text-2xl">schedule</span>
                                </div>
                                <div>
                                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Tempo de Uso</p>
                                    <p className="text-white font-bold text-base mt-0.5">124h 30m</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Frota Ativa */}
                    <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
                        <h2 className="flex items-center gap-2 text-white font-bold text-lg mb-6">
                            <span className="material-symbols-outlined text-primary">precision_manufacturing</span>
                            Frota Ativa
                        </h2>
                        <div className="space-y-3">
                            {[
                                { icon: 'crane', name: 'Guindastes Standard (AT/RT)', desc: 'Modelos convencionais de 30t a 250t', locked: false },
                                { icon: 'construction', name: 'Advanced Pack (Jib / Luffing)', desc: 'Configurações complexas para alta performance', locked: false },
                                { icon: 'view_in_ar', name: 'Crawler Cranes (Esteira)', desc: 'Guindastes sobre esteira de grande porte', locked: true },
                            ].map((item) => (
                                <div key={item.name} className={`flex items-center justify-between p-4 rounded-xl border ${item.locked ? 'border-border-dark opacity-60' : 'border-border-dark hover:border-primary/30'} bg-background-dark transition-colors`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${item.locked ? 'bg-slate-800' : 'bg-primary/20'}`}>
                                            <span className={`material-symbols-outlined text-xl ${item.locked ? 'text-slate-500' : 'text-primary'}`}>{item.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold text-sm">{item.name}</p>
                                            <p className="text-slate-400 text-xs mt-0.5">{item.desc}</p>
                                        </div>
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.locked ? 'bg-slate-700 text-slate-400' : 'bg-green-500/20 text-green-400'}`}>
                                        {item.locked ? 'Bloqueado' : 'Liberado'}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <h4 className="text-white font-semibold text-sm">Elevar para Pack Full</h4>
                                <p className="text-slate-400 text-xs mt-1">Desbloqueie toda a frota incluindo Crawler Cranes e módulos especiais.</p>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-background-dark font-bold text-sm rounded-lg hover:bg-primary-hover transition-colors shadow-[0_0_15px_rgba(241,184,16,0.3)] whitespace-nowrap">
                                <span className="material-symbols-outlined text-[18px]">bolt</span>
                                Upgrade (R$ 1.999)
                            </button>
                        </div>
                    </div>

                    {/* 3. Renovação */}
                    <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
                        <h2 className="flex items-center gap-2 text-white font-bold text-lg mb-6">
                            <span className="material-symbols-outlined text-primary">autorenew</span>
                            Central de Renovação
                        </h2>
                        <div className="space-y-3">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-background-dark border border-border-dark">
                                <div>
                                    <h5 className="text-white font-semibold text-sm">Renovação Antecipada (12 meses)</h5>
                                    <p className="text-slate-400 text-xs mt-1">Garanta o valor promocional estendendo sua licença agora.</p>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-primary text-background-dark font-bold text-sm rounded-lg hover:bg-primary-hover transition-colors whitespace-nowrap">
                                    Renovar Licença
                                </button>
                            </div>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-background-dark border border-border-dark">
                                <div>
                                    <h5 className="text-white font-semibold text-sm">Adicionar Tempo</h5>
                                    <p className="text-slate-400 text-xs mt-1">Sume +1 mês avulso ao seu período atual.</p>
                                </div>
                                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
                                    <span className="material-symbols-outlined text-[18px]">add</span>
                                    Adicionar 1 Mês
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SIDEBAR */}
                <div className="flex flex-col gap-6">

                    {/* Histórico de Uso */}
                    <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
                        <h2 className="flex items-center gap-2 text-white font-bold text-lg mb-1">
                            <span className="material-symbols-outlined text-primary">bar_chart</span>
                            Histórico de Uso
                        </h2>
                        <p className="text-slate-400 text-xs mb-6">Horas de simulação por mês</p>
                        <div className="flex items-end justify-between gap-2 h-32">
                            {usageData.map((d) => (
                                <div key={d.month} className="flex flex-col items-center gap-1 flex-1">
                                    <span className="text-[10px] text-slate-400 font-mono">{d.hours}h</span>
                                    <div
                                        className="w-full rounded-t-md bg-primary/60 hover:bg-primary transition-colors"
                                        style={{ height: `${(d.hours / maxHours) * 100}%` }}
                                    ></div>
                                    <span className="text-[10px] text-slate-500">{d.month}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border-dark flex justify-between text-xs">
                            <span className="text-slate-400">Total no período</span>
                            <span className="text-white font-bold">210h</span>
                        </div>
                    </div>

                    {/* Segurança */}
                    <div className="bg-surface-dark border border-border-dark rounded-2xl p-6">
                        <h2 className="flex items-center gap-2 text-white font-bold text-lg mb-6">
                            <span className="material-symbols-outlined text-primary">security</span>
                            Segurança
                        </h2>
                        <div className="space-y-3">
                            {[
                                { label: 'Último acesso', value: 'Hoje, 14:32', icon: 'login' },
                                { label: 'Dispositivos ativos', value: '2 dispositivos', icon: 'devices' },
                                { label: '2FA', value: 'Ativado', icon: 'verified_user', ok: true },
                            ].map((item) => (
                                <div key={item.label} className="flex items-center justify-between py-2 border-b border-border-dark last:border-0">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-slate-500 text-[18px]">{item.icon}</span>
                                        <span className="text-slate-400 text-sm">{item.label}</span>
                                    </div>
                                    <span className={`text-sm font-medium ${item.ok ? 'text-green-400' : 'text-white'}`}>{item.value}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">manage_accounts</span>
                            Gerenciar Conta
                        </button>
                    </div>

                    {/* Suporte */}
                    <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-primary">support_agent</span>
                            <h3 className="text-white font-bold">Suporte Premium</h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">Acesso direto à equipe técnica via WhatsApp.</p>
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-sm hover:bg-[#20bd5a] transition-colors"
                        >
                            Abrir Suporte
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
