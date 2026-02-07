"use client";

import { useState } from "react";
import { student } from "../lib/dummy-data";
import { ResourcesSidebar } from "../components/ResourcesSidebar";

type PageState = "task" | "loading" | "feedback";

export default function LinkedInPage() {
    const [pageState, setPageState] = useState<PageState>("task");
    const [url, setUrl] = useState("");

    const handleCompleteTask = (e: React.FormEvent) => {
        e.preventDefault();
        setPageState("loading");
        setTimeout(() => {
            setPageState("feedback");
        }, 2000);
    };

    const feedbackData = [
        {
            title: "Headline",
            status: "good",
            text: "Your headline 'Computer Science Student at FSU' is good, but could be more specific with your specialization (e.g., 'Aspiring Full Stack Developer').",
            points: 10,
        },
        {
            title: "About Section",
            status: "critical",
            text: "Your 'About' section is currently empty. This is your personal pitch! Aim for 200+ words highlighting your passion and projects.",
            points: 25,
        },
        {
            title: "Profile Picture",
            status: "warning",
            text: "Ensure your picture is a professional headshot. Avoid selfies or group photos to maintain a corporate identity.",
            points: 5,
        },
        {
            title: "Experience",
            status: "good",
            text: "Great job listing your TechCorp internship! Remember to add skills tags to each experience entry.",
            points: 15,
        },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground lg:p-12 p-6 lg:pr-80">
            <div className="mx-auto max-w-2xl">
                <header className="mb-12">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0077b5] text-white shadow-[0_8px_0_0_#005582] mb-6">
                        <span className="text-4xl font-black">in</span>
                    </div>
                    <h1 className="text-3xl font-black text-garnet uppercase tracking-tighter">LinkedIn Mission</h1>
                    <p className="text-xs font-bold text-game-text-muted uppercase tracking-widest mt-1">Status: {pageState === "feedback" ? "Optimizing" : "Incomplete"}</p>
                </header>

                {pageState === "task" && (
                    <div className="card-glass p-8 border-b-[12px] border-garnet animate-in fade-in slide-in-from-bottom duration-500">
                        <h2 className="text-xl font-black text-garnet uppercase mb-4">Phase 1: Establish Presence</h2>
                        <p className="font-bold text-game-text-muted mb-8 leading-relaxed">
                            LinkedIn is your digital storefront. Before we can optimize, you need a profile.
                            Create your account and paste your profile URL below to begin the AI scan.
                        </p>

                        <form onSubmit={handleCompleteTask} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-game-text-muted tracking-[0.2em]">Profile URL</label>
                                <input
                                    type="url"
                                    required
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    className="w-full rounded-xl border-4 border-game-border p-4 font-bold focus:border-garnet focus:outline-none"
                                />
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 flex items-center gap-4">
                                <span className="text-3xl">💡</span>
                                <p className="text-xs font-bold text-blue-800 italic">Tip: Use your FSU email to connect with more alumni automatically!</p>
                            </div>

                            <button type="submit" className="btn-game btn-game-primary w-full py-5 text-lg">
                                Submit Profile & Scan (+500 XP)
                            </button>
                        </form>
                    </div>
                )}

                {pageState === "loading" && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="h-20 w-20 animate-spin rounded-full border-8 border-game-border border-t-garnet mb-8"></div>
                        <h2 className="text-2xl font-black text-garnet uppercase mb-2">Analyzing Profile...</h2>
                        <p className="font-bold text-game-text-muted">Scanning sections, headline, and keyword density.</p>
                    </div>
                )}

                {pageState === "feedback" && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
                        <div className="card-glass bg-garnet p-8 text-white border-b-[12px] border-garnet-dark">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-black uppercase tracking-[0.3em] opacity-80 text-gold">Scan Result</p>
                                <span className="text-3xl font-black text-gold">68/100</span>
                            </div>
                            <h2 className="text-2xl font-black italic">Found 4 key improvements!</h2>
                            <div className="progress-container h-3 mt-6 bg-white/20">
                                <div className="progress-fill !bg-gold" style={{ width: "68%" }} />
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {feedbackData.map((f, i) => (
                                <div key={i} className="card-glass p-5 border-l-8 flex items-start gap-5 hover:scale-[1.02] transition-transform"
                                    style={{ borderLeftColor: f.status === "critical" ? "#ef4444" : f.status === "warning" ? "#f59e0b" : "#22c55e" }}>
                                    <div className="text-2xl">
                                        {f.status === "critical" ? "🚩" : f.status === "warning" ? "⚠️" : "✅"}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <h3 className="font-black text-garnet uppercase text-sm">{f.title}</h3>
                                            <span className="text-[10px] font-black uppercase text-gold">+{f.points} XP potential</span>
                                        </div>
                                        <p className="text-sm font-bold text-game-text-muted leading-tight">{f.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setPageState("task")}
                            className="btn-game btn-game-secondary w-full py-4 text-xs font-black"
                        >
                            Re-scan profile
                        </button>
                    </div>
                )}
            </div>
            <ResourcesSidebar page="linkedin" />
        </div>
    );
}
