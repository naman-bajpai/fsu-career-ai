"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { student } from "./lib/dummy-data";

export default function DashboardPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this might navigate to a chat route or open the sidebar
      router.push("/roadmap");
    }
  };

  const dashboardActions = [
    {
      title: "Your Milestone",
      subtitle: "Continue your career path",
      icon: "🛤️",
      href: "/roadmap",
      color: "border-blue-500 bg-blue-50 shadow-blue-200",
      textColor: "text-blue-700",
    },
    {
      title: "Application Tracking",
      subtitle: "Manage your job hunt",
      icon: "📋",
      href: "/applications",
      color: "border-orange-500 bg-orange-50 shadow-orange-200",
      textColor: "text-orange-700",
    },
    {
      title: "Skills in Progress",
      subtitle: "Level up your abilities",
      icon: "⚡",
      href: "/skills",
      color: "border-gold bg-gold/10 shadow-gold/20",
      textColor: "text-amber-700",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background p-6 lg:p-12">
      <div className="mx-auto w-full max-w-4xl">
        {/* Header Section */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-garnet text-white shadow-[0_8px_0_0_#5a2330]">
              <span className="text-4xl font-black italic">F</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-garnet uppercase tracking-tighter leading-none">Seminole Hub</h1>
              <p className="text-xs font-bold text-game-text-muted uppercase tracking-[0.2em] mt-1">Ready for the climb, {student.name}?</p>
            </div>
          </div>

          {/* AI Search Bar */}
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask Career Center AI..."
              className="w-full rounded-2xl border-4 border-game-border bg-white px-6 py-5 pr-16 text-lg font-bold shadow-xl transition-all focus:border-garnet focus:outline-none focus:ring-0 group-hover:border-garnet/30"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl bg-garnet p-3 text-white shadow-[0_4px_0_0_#5a2330] transition-all active:translate-y-1 active:shadow-none"
            >
              <span className="text-xl">🔍</span>
            </button>
          </form>
        </header>

        {/* Action Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {dashboardActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className={`group relative flex flex-col items-center justify-center rounded-3xl border-4 p-8 text-center transition-all hover:-translate-y-2 active:translate-y-1 ${action.color} border-b-[12px]`}
            >
              <span className="text-6xl mb-4 transform transition-transform group-hover:scale-110">{action.icon}</span>
              <h3 className={`text-xl font-black uppercase tracking-tighter ${action.textColor}`}>{action.title}</h3>
              <p className="mt-1 text-xs font-bold text-game-text-muted uppercase tracking-widest">{action.subtitle}</p>
            </Link>
          ))}
        </div>

        {/* Quick Stats Overlay (Mobile friendly version of sidebar stats) */}
        <div className="mt-12 md:hidden grid grid-cols-3 gap-4">
          <div className="card-glass flex flex-col items-center p-4">
            <span className="text-2xl">🔥</span>
            <span className="mt-1 text-xs font-black text-orange-600">{student.streak}</span>
          </div>
          <div className="card-glass flex flex-col items-center p-4">
            <span className="text-2xl">💎</span>
            <span className="mt-1 text-xs font-black text-blue-600">{student.points}</span>
          </div>
          <div className="card-glass flex flex-col items-center p-4">
            <span className="text-2xl">🛡️</span>
            <span className="mt-1 text-xs font-black text-garnet">LVL {student.level}</span>
          </div>
        </div>

        {/* Footer Polish */}
        <footer className="mt-16 text-center opacity-30">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-garnet">
            Florida State University • Career Center • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
