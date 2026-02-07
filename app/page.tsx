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
        <header className="mb-14">
          <div className="flex items-center gap-6 mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-garnet text-white shadow-[0_10px_0_0_hsl(346,43%,25%)] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <span className="text-5xl font-black italic tracking-tighter">F</span>
            </div>
            <div>
              <h1 className="text-4xl font-black text-garnet uppercase tracking-tighter leading-none mb-2">Seminole Hub</h1>
              <p className="text-xs font-black text-game-text-muted uppercase tracking-[0.3em]">The Ascent of {student.name}</p>
            </div>
          </div>

          {/* AI Search Bar */}
          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-garnet to-gold rounded-[2.5rem] opacity-20 group-hover:opacity-40 transition-opacity blur-lg"></div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask Career Center AI..."
              className="relative w-full rounded-[2rem] border-4 border-game-border bg-white px-8 py-6 pr-20 text-xl font-bold hover:border-garnet/30 focus:border-garnet focus:outline-none transition-all shadow-xl"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-2xl bg-garnet px-5 py-4 text-white shadow-[0_6px_0_0_hsl(346,43%,25%)] transition-all active:translate-y-1 active:shadow-none hover:scale-105"
            >
              <span className="text-2xl">🔍</span>
            </button>
          </form>
        </header>

        {/* Action Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {dashboardActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className={`group relative flex flex-col items-center justify-center rounded-[2.5rem] border-4 p-10 text-center transition-all hover:-translate-y-3 active:translate-y-1 ${action.color} border-b-[16px] shadow-2xl`}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-white/50 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative text-7xl transform transition-transform group-hover:scale-125 inline-block">{action.icon}</span>
              </div>
              <h3 className={`text-2xl font-black uppercase tracking-tighter ${action.textColor}`}>{action.title}</h3>
              <p className="mt-2 text-[10px] font-black text-game-text-muted uppercase tracking-[0.2em] opacity-70">{action.subtitle}</p>
            </Link>
          ))}
        </div>

        {/* Quick Stats Overlay */}
        <div className="mt-16 md:hidden grid grid-cols-3 gap-6">
          <div className="card-glass flex flex-col items-center p-6 bg-white/90">
            <span className="text-3xl mb-2">🔥</span>
            <span className="text-sm font-black text-orange-600 uppercase">STREAK: {student.streak}</span>
          </div>
          <div className="card-glass flex flex-col items-center p-6 bg-white/90">
            <span className="text-3xl mb-2">💎</span>
            <span className="text-sm font-black text-blue-600 uppercase">XP: {student.points}</span>
          </div>
          <div className="card-glass flex flex-col items-center p-6 bg-white/90">
            <span className="text-3xl mb-2">🛡️</span>
            <span className="text-sm font-black text-garnet uppercase">LVL: {student.level}</span>
          </div>
        </div>

        {/* Footer Polish */}
        <footer className="mt-24 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-garnet/30">
            Florida State University • Career Center • 2026
          </p>
        </footer>
      </div>
    </div>
  );
}
