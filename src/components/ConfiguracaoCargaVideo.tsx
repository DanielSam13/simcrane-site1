'use client';

import { useState } from 'react';

export default function ConfiguracaoCargaVideo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="mb-12 overflow-hidden rounded-2xl border border-border-dark bg-surface-dark shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary mb-6">
                            <span className="material-symbols-outlined text-[28px]">link</span>
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">Configuração da Carga</h4>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            Calcula em tempo real a tensão nas slingas com CG deslocado, controla angulação e inclinação da peça nos eixos X e Z, e exibe taxa de utilização e fator de segurança instantaneamente. Catálogo completo de cabos e manilhas integrado.
                        </p>
                    </div>
                    <div className="bg-background-dark p-6 flex flex-col items-center justify-center relative min-h-[300px] border-t lg:border-t-0 lg:border-l border-border-dark">
                        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10"></div>
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="relative w-full aspect-video rounded-xl bg-black border border-white/10 overflow-hidden shadow-xl flex items-center justify-center cursor-pointer group"
                        >
                            <video
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                src="/api/media/videos/Tela Lingada.mp4"
                                muted
                                loop
                                playsInline
                                autoPlay
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-primary/90 text-background-dark flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(241,184,16,0.5)]">
                                    <span className="material-symbols-outlined text-4xl">play_arrow</span>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 z-10">
                                <span className="text-white text-sm font-medium">Visualizar Configuração da Carga</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <span className="material-symbols-outlined text-3xl block">close</span>
                    </button>
                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            className="w-full h-full"
                            src="/api/media/videos/Tela Lingada.mp4"
                            controls
                            autoPlay
                            playsInline
                        />
                    </div>
                </div>
            )}
        </>
    );
}
