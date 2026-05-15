'use client';
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { href: '/', label: 'Funcionalidades' },
    { href: '/engenharia', label: 'Engenharia' },
    { href: '/enterprise', label: 'Enterprise' },
    { href: '/pricing', label: 'Preços' },
    { href: '/showcase', label: 'Showcase' },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background-dark/90 border-b border-border-dark">
            <div className="flex items-center justify-between px-5 h-16 max-w-7xl mx-auto">
                <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                    SimCrane <span className="text-primary">Pro</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <Link key={link.href} className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <Link className="hidden sm:block text-sm font-semibold text-slate-300 hover:text-primary transition-colors" href="/dashboard">
                        Dashboard
                    </Link>
                    <button
                        onClick={() => setMobileOpen(prev => !prev)}
                        className="flex items-center justify-center w-10 h-10 md:hidden rounded-full hover:bg-white/10 transition-colors text-white"
                        aria-label="Abrir menu"
                    >
                        <span className="material-symbols-outlined text-2xl">{mobileOpen ? 'close' : 'menu'}</span>
                    </button>
                    <Link href="/pricing" className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg bg-primary text-background-dark hover:bg-primary-hover transition-colors">
                        Baixar Demo
                    </Link>
                </div>
            </div>
            {/* Menu mobile */}
            {mobileOpen && (
                <div className="md:hidden border-t border-border-dark bg-background-dark/95 backdrop-blur-md px-5 py-4 flex flex-col gap-1">
                    {navLinks.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-sm font-medium text-slate-300 hover:text-primary transition-colors py-2.5 border-b border-border-dark/50 last:border-0"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/dashboard"
                        onClick={() => setMobileOpen(false)}
                        className="text-sm font-medium text-slate-300 hover:text-primary transition-colors py-2.5 border-b border-border-dark/50"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/pricing"
                        onClick={() => setMobileOpen(false)}
                        className="mt-3 flex items-center justify-center px-4 py-3 text-sm font-bold rounded-lg bg-primary text-background-dark hover:bg-primary-hover transition-colors"
                    >
                        Baixar Demo
                    </Link>
                </div>
            )}
        </header>
    );
}
