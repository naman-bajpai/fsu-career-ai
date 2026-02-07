"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { student } from "../lib/dummy-data";

const sidebarLinks = [
  { href: "/", label: "Dashboard", icon: "🏠" },
  { href: "/roadmap", label: "Path", icon: "🛤️" },
  { href: "/resume-helper", label: "Resume", icon: "📄" },
  { href: "/applications", label: "Apps", icon: "📋" },
  { href: "/skills", label: "Skills", icon: "⚡" },
  { href: "/rewards", label: "Rewards", icon: "🎁" },
];

export function Nav() {
  const pathname = usePathname();
  const levelProgress = Math.min(100, (student.points / student.pointsToNextLevel) * 100);

  return (
    <aside className="fixed left-0 top-0 z-50 h-full w-64 border-r-4 border-garnet-dark bg-white shadow-xl transition-all hidden md:flex flex-col">
      {/* Sidebar Header: Logo & Branding */}
      <div className="p-8 pb-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-garnet text-white shadow-[0_6px_0_0_#5a2330]">
            <span className="text-2xl font-black italic">F</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black leading-none text-garnet uppercase tracking-tighter">FSU Career</span>
            <span className="text-xs font-bold text-gold uppercase tracking-[0.2em] mt-0.5">Journey</span>
          </div>
        </Link>
      </div>

      {/* Sidebar Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 rounded-2xl px-6 py-4 transition-all border-2 ${isActive
                ? "border-garnet bg-garnet/5 text-garnet shadow-[0_4px_0_0_var(--fsu-garnet-dark)] -translate-y-[2px]"
                : "border-transparent text-game-text-muted hover:bg-gray-50 hover:border-game-border"
                }`}
            >
              <span className={`text-2xl ${isActive ? "scale-110" : ""}`}>{link.icon}</span>
              <span className={`text-sm font-black uppercase tracking-widest ${isActive ? "text-garnet" : "text-game-text-muted"}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer: Student Stats */}
      <div className="p-6 border-t-2 border-game-border space-y-6">
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-orange-500/20 bg-orange-500/5 p-2">
            <span className="text-lg">🔥</span>
            <span className="mt-1 text-xs font-black text-orange-600">{student.streak}</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-blue-500/20 bg-blue-500/5 p-2">
            <span className="text-lg">💎</span>
            <span className="mt-1 text-xs font-black text-blue-600">{student.points}</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-gold/20 bg-gold/5 p-2">
            <span className="text-lg">🎖️</span>
            <span className="mt-1 text-xs font-black text-amber-600">2</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-black uppercase text-game-text-muted tracking-widest">
            <span>Progress</span>
            <span>{Math.round(levelProgress)}%</span>
          </div>
          <div className="progress-container h-2 shadow-inner">
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
