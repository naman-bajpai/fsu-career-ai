"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { student } from "../lib/dummy-data";

const sidebarLinks = [
  { href: "/", label: "Dashboard", icon: "🏠" },
  { href: "/roadmap", label: "Path", icon: "🛤️" },
  { href: "/career-matcher", label: "Career Match", icon: "🧭" },
  { href: "/resume-helper", label: "Resume", icon: "📄" },
  { href: "/applications", label: "Apps", icon: "📋" },
  { href: "/skills", label: "Skills", icon: "⚡" },
  { href: "/learn", label: "Learn", icon: "📚" },
  { href: "/support", label: "Support", icon: "🆘" },
  { href: "/rewards", label: "Rewards", icon: "🎁" },
];

export function Nav() {
  const pathname = usePathname();
  const levelProgress = Math.min(100, (student.points / student.pointsToNextLevel) * 100);

  return (
    <aside className="fixed left-0 top-0 z-50 h-full w-72 border-r border-game-border bg-white shadow-xl transition-all hidden md:flex flex-col">
      {/* Sidebar Header: Logo & Branding */}
      <div className="p-10 pb-12">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-garnet text-white shadow-md group-hover:-rotate-3 transition-transform">
            <span className="text-2xl font-black italic tracking-tighter">F</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none text-garnet uppercase tracking-tighter">Seminole</span>
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mt-1">Journey</span>
          </div>
        </Link>
      </div>

      {/* Sidebar Navigation Links */}
      <nav className="flex-1 px-6 space-y-3">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-5 rounded-xl px-6 py-4 transition-all border ${isActive
                ? "border-garnet bg-garnet/[0.04] text-garnet shadow-md -translate-y-0.5"
                : "border-transparent text-game-text-muted hover:bg-gray-50/80 hover:border-game-border"
                }`}
            >
              <span className={`text-2xl transition-transform ${isActive ? "scale-110" : "group-hover:scale-110"}`}>{link.icon}</span>
              <span className={`text-[11px] font-bold uppercase tracking-[0.1em] ${isActive ? "text-garnet" : "text-game-text-muted"}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer: Student Stats */}
      <div className="p-8 border-t border-game-border bg-gray-50/30 space-y-8">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center justify-center rounded-xl border border-orange-500/10 bg-white p-3 shadow-sm">
            <span className="text-xl">🔥</span>
            <span className="mt-1 text-xs font-bold text-orange-600">{student.streak}</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-blue-500/10 bg-white p-3 shadow-sm">
            <span className="text-xl">💎</span>
            <span className="mt-1 text-xs font-bold text-blue-600">{student.points}</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-gold/10 bg-white p-3 shadow-sm">
            <span className="text-xl">🎖️</span>
            <span className="mt-1 text-xs font-bold text-amber-600">2</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between text-[10px] font-black uppercase text-game-text-muted tracking-[0.2em] px-1">
            <span>Level 04 Progress</span>
            <span>{Math.round(levelProgress)}%</span>
          </div>
          <div className="progress-container h-3 shadow-inner">
            <div
              className="progress-fill !bg-gold"
              style={{ width: `${levelProgress}%` }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
