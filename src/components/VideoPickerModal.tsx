'use client';

import { useState } from 'react';

export default function VideoPickerModal() {
    const [activeVideo, setActiveVideo] = useState<'colisao' | 'simulacao'>('simulacao');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const videoSrc = {
        colisao: '/api/media/videos/Colisao.mp4',
        simulacao: '/api/media/videos/simulacao.mp4',
    };

    const label = activeVideo === 'colisao' ? 'Visualizar Modo Colisão' : 'Visualizar Simulação Realista';

    return (
        <>
            <div className="mb-12 overflow-hidden rounded-2xl border border-border-dark bg-surface-dark shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary mb-6">
                            <span className="material-symbols-outlined text-[28px]">schedule</span>
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4">Simulação em Tempo Real</h4>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Visualize operações complexas instantaneamente com nossa engine física proprietária. Ajuste cargas e raios com feedback imediato das forças em atuação e possíveis conflitos no canteiro.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setActiveVideo('colisao')}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${activeVideo === 'colisao'
                                    ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(241,184,16,0.3)]'
                                    : 'bg-background-dark text-slate-300 border border-border-dark hover:border-primary/50'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[20px]">warning</span>
                                Modo Colisão
                            </button>
                            <button
                                onClick={() => setActiveVideo('simulacao')}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${activeVideo === 'simulacao'
                                    ? 'bg-primary text-background-dark shadow-[0_0_15px_rgba(241,184,16,0.3)]'
                                    : 'bg-background-dark text-slate-300 border border-border-dark hover:border-primary/50'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[20px]">videogame_asset</span>
                                Simulação Realista
                            </button>
                        </div>
                    </div>
                    <div className="bg-background-dark p-6 flex flex-col items-center justify-center relative min-h-[300px] border-t lg:border-t-0 lg:border-l border-border-dark">
                        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10"></div>
                        <div
                            onClick={() => setIsModalOpen(true)}
                            className="relative w-full aspect-video rounded-xl bg-black border border-white/10 overflow-hidden shadow-xl flex items-center justify-center cursor-pointer group"
                        >
                            <video
                                key={activeVideo}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                src={videoSrc[activeVideo]}
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
                                <span className="text-white text-sm font-medium">{label}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Teatro */}
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
                            key={`modal-${activeVideo}`}
                            className="w-full h-full"
                            src={videoSrc[activeVideo]}
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
