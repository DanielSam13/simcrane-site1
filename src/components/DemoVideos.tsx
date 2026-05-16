'use client';

const demos = [
    { src: '/api/media/videos/interface.mp4', label: 'Interface Profissional', icon: 'monitor' },
    { src: '/api/media/videos/Colisao.mp4', label: 'Modo Colisão', icon: 'emergency' },
    { src: '/api/media/videos/tabela.mp4', label: 'Tabela de Cargas', icon: 'table_chart' },
];

export default function DemoVideos() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {demos.map((demo) => (
                <div key={demo.label} className="group relative aspect-video rounded-xl overflow-hidden bg-surface-dark border border-border-dark shadow-lg hover:border-primary/40 hover:shadow-primary/10 transition-all">
                    <video
                        src={demo.src}
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                        onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                        onMouseLeave={e => {
                            const v = e.currentTarget as HTMLVideoElement;
                            v.pause();
                            v.currentTime = 0;
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                            <span className="material-symbols-outlined text-background-dark text-3xl ml-0.5">play_arrow</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-2 pointer-events-none">
                        <span className="material-symbols-outlined text-primary text-[18px]">{demo.icon}</span>
                        <h4 className="text-white font-bold text-sm">{demo.label}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}
