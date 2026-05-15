import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-border-dark bg-surface-dark relative">
            <div className="absolute inset-0 opacity-5 bg-grid-pattern pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                <div className="col-span-1 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-3xl">construction</span>
                        <h2 className="text-xl font-bold text-white">SimCrane <span className="text-primary">Pro</span></h2>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Revolucionando a engenharia de içamento com simulação física de alta precisão e mobilidade.
                    </p>
                    <div className="mt-2 inline-flex items-center px-2 py-1 rounded bg-white/5 border border-white/10 w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        <span className="text-xs text-slate-400 font-mono">v1.0.0-beta</span>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Produto</h4>
                    <ul className="space-y-3">
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="/">Funcionalidades</Link></li>
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="/engenharia">Engenharia</Link></li>
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="/enterprise">Enterprise</Link></li>
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="/pricing">Preços</Link></li>
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="/showcase">Showcase</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Suporte</h4>
                    <ul className="space-y-3">
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Documentação</Link></li>
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">API Status</Link></li>
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Fale Conosco</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Conecte-se</h4>
                    <ul className="space-y-3">
                        <li><Link className="text-slate-400 hover:text-primary text-sm transition-colors" href="/dashboard">Dashboard</Link></li>
                        <li><a className="text-slate-400 hover:text-primary text-sm transition-colors" href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp Suporte</a></li>
                    </ul>
                    <div className="flex gap-4 mt-2">
                        <Link className="text-xs text-slate-400 hover:text-primary transition-colors underline" href="#">Termos de Uso</Link>
                        <Link className="text-xs text-slate-400 hover:text-primary transition-colors underline" href="#">Privacidade</Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 py-6 border-t border-border-dark/50 flex flex-col md:flex-row items-center justify-between text-xs text-slate-600 z-10 relative">
                <p>© 2026 SimCrane Pro. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">Feito com <span className="text-red-500">♥</span> para engenheiros.</p>
            </div>
        </footer>
    );
}
