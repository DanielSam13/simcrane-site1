'use client';

import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-07-13T00:00:00');

function getTimeLeft() {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return { days, hours, minutes };
}

export default function CountdownTimer() {
    const [time, setTime] = useState(getTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getTimeLeft());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const pad = (n: number) => String(n).padStart(2, '0');

    return (
        <div className="flex gap-4 sm:gap-6 my-2">
            <div className="flex flex-col items-center p-3 bg-background-dark/60 backdrop-blur-md rounded-lg border border-white/10 min-w-[70px]">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">{pad(time.days)}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Dias</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-background-dark/60 backdrop-blur-md rounded-lg border border-white/10 min-w-[70px]">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">{pad(time.hours)}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Horas</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-background-dark/60 backdrop-blur-md rounded-lg border border-white/10 min-w-[70px]">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">{pad(time.minutes)}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">Min</span>
            </div>
        </div>
    );
}
