"use client";

import { useState } from "react";
import { pageResources } from "../lib/dummy-data";

interface ResourcesSidebarProps {
    page: keyof typeof pageResources;
}

export function ResourcesSidebar({ page }: ResourcesSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const resources = pageResources[page] || [];

    return (
        <>
            {/* Floating Toggle Button for Mobile/Tablet or if preferred */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-32 right-6 z-40 md:hidden flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-white shadow-xl transition-all active:scale-95"
            >
                <span className="text-2xl">📚</span>
            </button>

            {/* Sidebar Desktop (Fixed on right) or Mobile (Drawer) */}
            <aside
                className={`fixed right-0 top-0 z-40 h-full w-80 border-l border-gold/20 bg-white p-8 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
                    } flex flex-col`}
            >
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-xl font-black text-garnet uppercase tracking-tighter">Resources 📚</h2>
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-2xl">✕</button>
                </div>

                <p className="mb-6 text-[10px] font-black uppercase text-game-text-muted tracking-widest leading-relaxed">
                    Pro-tips and guides from the FSU Career Center specifically for this page.
                </p>

                <div className="flex-1 space-y-4 overflow-y-auto">
                    {resources.map((res, i) => (
                        <a
                            key={i}
                            href={res.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block rounded-xl border border-game-border p-4 transition-all hover:-translate-y-1 hover:border-gold hover:bg-gold/5 active:translate-y-0"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] font-black uppercase text-gold tracking-widest">{page.toUpperCase()}</span>
                                <span className="text-lg opacity-0 transition-opacity group-hover:opacity-100">🔗</span>
                            </div>
                            <p className="text-sm font-black text-garnet group-hover:underline leading-tight">{res.title}</p>
                        </a>
                    ))}

                    {resources.length === 0 && (
                        <div className="text-center py-10 opacity-50">
                            <span className="text-4xl">🏜️</span>
                            <p className="mt-4 text-xs font-bold uppercase">No resources found</p>
                        </div>
                    )}
                </div>

                <div className="mt-8 border-t-2 border-game-border pt-6 space-y-4">
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("toggle-chat"))}
                        className="flex w-full items-center gap-4 rounded-xl border border-garnet/20 bg-garnet/5 p-4 transition-all hover:bg-garnet/10 active:scale-95 shadow-sm"
                    >
                        <span className="text-2xl">🤖</span>
                        <div className="text-left">
                            <p className="text-[10px] font-black uppercase text-garnet tracking-widest">Interactive</p>
                            <h4 className="text-sm font-black text-garnet">Ask Career AI</h4>
                        </div>
                    </button>

                    <div className="rounded-xl border border-game-border bg-gray-50 p-5 text-center">
                        <p className="text-[10px] font-black uppercase tracking-widest text-game-text-muted mb-2">Need more help?</p>
                        <a
                            href="https://career.fsu.edu/about-us/contact-us"
                            target="_blank"
                            className="inline-block w-full rounded-lg bg-garnet py-3 text-xs font-bold text-white uppercase shadow-lg hover:bg-garnet-dark transition-colors"
                        >
                            Contact Career Center
                        </a>
                    </div>
                </div>
            </aside>
        </>
    );
}

