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
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-garnet text-white shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-300">
              <span className="text-3xl font-black italic tracking-tighter -ml-1">FSU</span>
            </div>
            <div>
              <h1 className="text-4xl font-black text-garnet uppercase tracking-tighter leading-none mb-1">Seminole Hub</h1>
              <p className="text-xs font-bold text-game-text-muted uppercase tracking-[0.2em]">The Ascent of {student.name}</p>
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
              className="relative w-full rounded-2xl border border-game-border bg-white/80 backdrop-blur-sm px-8 py-5 pr-20 text-lg font-medium hover:border-garnet/30 focus:border-garnet focus:outline-none transition-all shadow-xl"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-garnet px-5 py-3 text-white shadow-md transition-all active:scale-95 hover:bg-garnet-dark"
            >
              <span className="text-xl">🔍</span>
            </button>
          </form>
        </header>

        {/* Action Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {dashboardActions.map((action) => (
            <Link
              key={action.title}
              href={action.href}
              className={`group relative flex flex-col items-center justify-center rounded-3xl border border-white/40 p-10 text-center transition-all hover:-translate-y-2 active:scale-95 ${action.color} shadow-xl backdrop-blur-md`}
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-white/50 blur-2xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative text-7xl transform transition-transform group-hover:scale-125 inline-block">{action.icon}</span>
              </div>
              <h3 className={`text-xl font-bold uppercase tracking-tight ${action.textColor}`}>{action.title}</h3>
              <p className="mt-2 text-[10px] font-bold text-game-text-muted uppercase tracking-[0.1em] opacity-70">{action.subtitle}</p>
            </Link>
          ))}
        </div>

        {/* Peer Context Section - Imposter Syndrome Helper */}
        <section className="mt-12 card-glass p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📊</span>
            <h2 className="text-sm font-black uppercase text-garnet tracking-widest">How You Compare</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center p-4 rounded-xl bg-green-50 border border-green-100">
              <p className="text-2xl font-black text-green-600">{student.percentileApplications}%</p>
              <p className="text-[10px] font-bold text-green-700 uppercase mt-1">Applications</p>
              <p className="text-[9px] text-green-600 mt-0.5">vs. CS students</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
              <p className="text-2xl font-black text-blue-600">85%</p>
              <p className="text-[10px] font-bold text-blue-700 uppercase mt-1">Resume Score</p>
              <p className="text-[9px] text-blue-600 mt-0.5">vs. CS students</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
              <p className="text-2xl font-black text-purple-600">72%</p>
              <p className="text-[10px] font-bold text-purple-700 uppercase mt-1">Skills</p>
              <p className="text-[9px] text-purple-600 mt-0.5">vs. CS students</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 text-center">
            <p className="text-sm font-bold text-foreground">
              ⏰ <span className="text-garnet">You're ahead of schedule!</span> Most CS students land offers in <span className="font-black">March-April</span>.
            </p>
          </div>
        </section>

        {/* New Feature Quick Links */}
        <section className="mt-8 grid grid-cols-2 gap-4">
          <Link href="/career-matcher" className="card-glass p-5 hover:border-garnet transition-all group">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <h3 className="font-bold text-garnet group-hover:underline text-sm">Career Matcher</h3>
                <p className="text-[10px] text-game-text-muted">Find your path</p>
              </div>
            </div>
          </Link>
          <Link href="/learn" className="card-glass p-5 hover:border-garnet transition-all group">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <h3 className="font-bold text-garnet group-hover:underline text-sm">Hidden Curriculum</h3>
                <p className="text-[10px] text-game-text-muted">Unlock secrets</p>
              </div>
            </div>
          </Link>
        </section>

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
