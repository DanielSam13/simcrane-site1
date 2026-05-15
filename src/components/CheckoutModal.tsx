'use client';

import { useState } from 'react';

type PlanType = 'mensal' | 'semestral' | 'anual' | null;

interface CheckoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    plan: PlanType;
}

const planDetails = {
    mensal: { name: 'Mensal', price: 'R$ 699,00' },
    semestral: { name: 'Semestral', price: 'R$ 3.499,00' },
    anual: { name: 'Anual VIP', price: 'R$ 4.999,00' },
};

export default function CheckoutModal({ isOpen, onClose, plan }: CheckoutModalProps) {
    const [method, setMethod] = useState<'credit' | 'pix' | 'debit'>('credit');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen || !plan) return null;

    const currentPlan = planDetails[plan];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        setError(null);
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ plan }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error ?? 'Erro ao criar sessão');
            window.location.href = data.url;
        } catch (err) {
            setIsProcessing(false);
            setError(err instanceof Error ? err.message : 'Erro inesperado. Tente novamente.');
        }
    };

    const resetAndClose = () => {
        setIsSuccess(false);
        setIsProcessing(false);
        setError(null);
        setMethod('credit');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface-dark border border-border-dark shadow-2xl rounded-2xl flex flex-col md:flex-row">

                {/* Fechar mobile */}
                <button onClick={resetAndClose} className="md:hidden absolute top-4 right-4 z-10 text-slate-400 hover:text-white">
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Sidebar Resumo */}
                <div className="w-full md:w-1/3 bg-background-dark p-6 md:p-8 border-b md:border-b-0 md:border-r border-border-dark flex flex-col">
                    <div className="mb-6 hidden md:flex items-center gap-2 text-white">
                        <span className="material-symbols-outlined text-primary">lock</span>
                        <span className="font-semibold text-sm">Checkout Seguro</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-6">Resumo do Pedido</h3>
                    <div className="flex-1 space-y-4">
                        <div className="flex justify-between items-start border-b border-white/5 pb-4">
                            <div>
                                <p className="text-white font-medium">Plano SimCrane {currentPlan.name}</p>
                                <p className="text-xs text-slate-400 mt-1">Acesso imediato à plataforma</p>
                            </div>
                            <p className="text-white font-bold">{currentPlan.price}</p>
                        </div>
                        <div className="flex justify-between items-center text-sm pt-2">
                            <span className="text-slate-400">Subtotal</span>
                            <span className="text-white">{currentPlan.price}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm text-primary">
                            <span>Desconto</span>
                            <span>R$ 0,00</span>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-white/10 pt-4 flex justify-between items-end">
                        <span className="text-slate-300">Total</span>
                        <div className="text-right">
                            <p className="text-xs text-slate-500 mb-1">BRL</p>
                            <p className="text-2xl font-bold text-white">{currentPlan.price}</p>
                        </div>
                    </div>
                </div>

                {/* Área de Pagamento */}
                <div className="w-full md:w-2/3 p-6 md:p-8 bg-surface-dark relative">
                    <button onClick={resetAndClose} className="hidden md:block absolute top-6 right-6 text-slate-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">close</span>
                    </button>

                    {isSuccess ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl">check_circle</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Pagamento Aprovado!</h3>
                                <p className="text-slate-400 mt-2 max-w-sm mx-auto">
                                    Bem-vindo ao SimCrane Pro. Seus dados de acesso foram enviados para o seu e-mail.
                                </p>
                            </div>
                            <button onClick={resetAndClose} className="px-8 py-3 bg-primary text-background-dark font-bold rounded-md hover:bg-primary-hover transition-colors shadow-lg">
                                Acessar Plataforma
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-white">Pagamento</h2>
                                <p className="text-slate-400 text-sm mt-1">Todas as transações são seguras e criptografadas.</p>
                            </div>

                            {/* Abas de método */}
                            <div className="flex bg-background-dark p-1 rounded-lg border border-border-dark mb-8">
                                <button onClick={() => setMethod('credit')} className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${method === 'credit' ? 'bg-surface-dark text-white shadow-sm border border-white/5' : 'text-slate-400 hover:text-slate-200'}`}>
                                    Cartão de Crédito
                                </button>
                                <button onClick={() => setMethod('pix')} className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${method === 'pix' ? 'bg-[#32BCAD]/10 text-[#32BCAD] shadow-sm border border-[#32BCAD]/20' : 'text-slate-400 hover:text-slate-200'}`}>
                                    PIX
                                </button>
                                <button onClick={() => setMethod('debit')} className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${method === 'debit' ? 'bg-surface-dark text-white shadow-sm border border-white/5' : 'text-slate-400 hover:text-slate-200'}`}>
                                    Débito / Boleto
                                </button>
                            </div>

                            {method === 'pix' ? (
                                <div className="flex flex-col items-center justify-center py-6 text-center space-y-6">
                                    <div className="w-48 h-48 bg-white p-3 rounded-lg flex items-center justify-center">
                                        <div className="w-full h-full grid grid-cols-7 gap-0.5">
                                            {Array.from({ length: 49 }).map((_, i) => (
                                                <div key={i} className={`aspect-square ${(i % 2 === 0 || i % 3 === 0) ? 'bg-black' : 'bg-white'}`}></div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium mb-2">Escaneie o QR Code ou copie o código</p>
                                        <div className="flex items-center gap-2 bg-background-dark border border-border-dark rounded-md p-1 pr-2 max-w-sm mx-auto">
                                            <input type="text" readOnly value="00020126580014br.gov.bcb.pix0136..." className="bg-transparent border-none text-slate-400 text-sm px-3 py-2 w-full focus:outline-none" />
                                            <button className="bg-primary/20 hover:bg-primary/30 text-primary px-3 py-1.5 rounded text-sm font-medium transition-colors">Copiar</button>
                                        </div>
                                    </div>
                                    <button onClick={handleSubmit} disabled={isProcessing} className="w-full sm:w-auto mt-4 px-8 py-3 bg-[#32BCAD] text-white font-bold rounded-md hover:bg-[#209f92] transition-colors shadow-lg disabled:opacity-70 flex items-center justify-center gap-2">
                                        {isProcessing ? 'Verificando PIX...' : 'Simular Pagamento PIX Concluído'}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Nome Completo</label>
                                        <input required type="text" placeholder="Nome impresso no cartão" className="w-full bg-background-dark border border-border-dark text-white rounded-md px-4 py-3 focus:outline-none focus:border-primary transition-colors" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Número do Cartão</label>
                                        <div className="relative">
                                            <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-background-dark border border-border-dark text-white rounded-md pl-4 pr-12 py-3 focus:outline-none focus:border-primary transition-colors font-mono" />
                                            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">credit_card</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Validade</label>
                                            <input required type="text" placeholder="MM/AA" className="w-full bg-background-dark border border-border-dark text-white rounded-md px-4 py-3 focus:outline-none focus:border-primary transition-colors font-mono" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">CVV</label>
                                            <input required type="text" placeholder="123" className="w-full bg-background-dark border border-border-dark text-white rounded-md px-4 py-3 focus:outline-none focus:border-primary transition-colors font-mono" />
                                        </div>
                                    </div>
                                    {method === 'credit' && (
                                        <div>
                                            <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Parcelamento</label>
                                            <div className="relative">
                                                <select className="w-full bg-background-dark border border-border-dark text-white rounded-md px-4 py-3 appearance-none focus:outline-none focus:border-primary transition-colors">
                                                    <option>1x de {currentPlan.price} sem juros</option>
                                                    <option>2x de {currentPlan.price} sem juros</option>
                                                    <option>3x de {currentPlan.price} sem juros</option>
                                                    <option>6x de {currentPlan.price} sem juros</option>
                                                    <option>12x de {currentPlan.price} com juros da operadora</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                    )}
                                    <button type="submit" disabled={isProcessing} className="w-full mt-4 flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-background-dark font-bold text-lg rounded-md px-4 py-4 transition-colors shadow-lg disabled:opacity-70">
                                        {isProcessing ? (
                                            <span>Processando Pagamento...</span>
                                        ) : (
                                            <>
                                                <span className="material-symbols-outlined">lock</span>
                                                Pagar {currentPlan.price}
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}

                            {error && (
                                <p className="mt-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-md px-4 py-3">
                                    {error}
                                </p>
                            )}

                            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
                                <span className="text-xs font-bold font-mono text-white">SSL SECURE</span>
                                <span className="text-xs font-bold font-mono text-white">stripe</span>
                                <span className="text-xs font-bold font-mono text-white">VISA</span>
                                <span className="text-xs font-bold font-mono text-white">MASTERCARD</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
