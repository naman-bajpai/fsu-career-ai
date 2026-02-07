"use client";

import { useState } from "react";
import { barrierCategories, supportResources } from "../lib/dummy-data";

export default function SupportPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredResources = selectedCategory
        ? supportResources.filter((r) => r.categories.includes(selectedCategory))
        : supportResources;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="mx-auto max-w-lg px-6 pb-24 pt-12">
                {/* Header */}
                <header className="mb-10 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-3xl text-white shadow-lg">
                        🆘
                    </div>
                    <h1 className="text-3xl font-black text-garnet uppercase tracking-tighter">
                        Barrier Support Hub
                    </h1>
                    <p className="mt-2 text-sm font-medium text-game-text-muted">
                        Resources tailored to your unique situation
                    </p>
                </header>

                {/* Empathy Message */}
                <div className="card-glass p-6 mb-8 border-l-4 border-l-blue-500">
                    <p className="text-sm font-medium text-foreground">
                        <span className="font-bold">We get it.</span> Not everyone starts from the same place.
                        Whether you need visa sponsorship, paid-only opportunities, or financial support — we're here to help level the playing field.
                    </p>
                </div>

                {/* Filter Pills */}
                <div className="mb-8">
                    <p className="text-xs font-bold uppercase text-game-text-muted mb-3 tracking-widest">
                        Filter by your situation
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${selectedCategory === null
                                    ? "bg-garnet text-white"
                                    : "bg-game-border text-game-text-muted hover:bg-garnet/10"
                                }`}
                        >
                            All
                        </button>
                        {barrierCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${selectedCategory === cat.id
                                        ? "bg-garnet text-white"
                                        : "bg-game-border text-game-text-muted hover:bg-garnet/10"
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                <span>{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="space-y-4">
                    {filteredResources.length > 0 ? (
                        filteredResources.map((resource) => (
                            <a
                                key={resource.id}
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block card-glass p-5 hover:border-garnet transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-game-border text-2xl group-hover:bg-garnet/10 transition-colors">
                                        {resource.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-garnet group-hover:underline">{resource.title}</h3>
                                            <span className="text-game-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                                                ↗
                                            </span>
                                        </div>
                                        <p className="text-sm text-game-text-muted">{resource.description}</p>
                                        <div className="flex gap-2 mt-2">
                                            {resource.categories.map((catId) => {
                                                const cat = barrierCategories.find((c) => c.id === catId);
                                                return (
                                                    <span
                                                        key={catId}
                                                        className="text-[10px] font-bold uppercase text-game-text-muted bg-game-border px-2 py-0.5 rounded-full"
                                                    >
                                                        {cat?.icon} {cat?.label}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    ) : (
                        <div className="text-center py-12">
                            <span className="text-4xl">🔍</span>
                            <p className="mt-4 text-sm font-bold text-game-text-muted">No resources match this filter yet.</p>
                        </div>
                    )}
                </div>

                {/* Help Message */}
                <div className="mt-10 p-6 rounded-xl bg-garnet/5 border border-garnet/20 text-center">
                    <p className="text-sm font-bold text-garnet mb-2">Need something specific?</p>
                    <p className="text-xs text-game-text-muted mb-4">
                        Our Career AI can help find resources tailored to your exact situation.
                    </p>
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("toggle-chat"))}
                        className="btn-game btn-game-primary py-3 px-6 text-sm"
                    >
                        💬 Ask Career AI
                    </button>
                </div>
            </main>
        </div>
    );
}
