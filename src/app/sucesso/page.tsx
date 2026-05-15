import Link from 'next/link';

export default function SucessoPage() {
    return (
        <main className="min-h-screen bg-background-dark flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="w-24 h-24 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                </div>
                <div>
                    <h1 className="text-3xl font-black text-white">Pagamento Aprovado!</h1>
                    <p className="text-slate-400 mt-3 leading-relaxed">
                        Bem-vindo ao SimCrane. Seus dados de acesso foram enviados para o seu e-mail. Aproveite todas as funcionalidades da plataforma.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <Link
                        href="/dashboard"
                        className="px-8 py-3 bg-primary text-background-dark font-bold rounded-md hover:bg-primary-hover transition-colors shadow-lg"
                    >
                        Acessar Dashboard
                    </Link>
                    <Link
                        href="/"
                        className="px-8 py-3 border border-border-dark text-slate-300 font-medium rounded-md hover:border-primary/50 transition-colors"
                    >
                        Voltar ao Início
                    </Link>
                </div>
            </div>
        </main>
    );
}
