"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { student } from "../lib/dummy-data";
import {
  IconHome,
  IconCompass,
  IconBriefcase,
  IconBook,
  IconLifebuoy,
  IconSparkles,
  IconChartBar,
} from "./Icons";
import { ReactNode } from "react";

type NavLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

const sidebarLinks: NavLink[] = [
  { href: "/", label: "Dashboard", icon: <IconHome className="w-5 h-5" /> },
  { href: "/roadmap", label: "Path", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" /></svg> },
  { href: "/career-matcher", label: "Career Match", icon: <IconCompass className="w-5 h-5" /> },
  { href: "/resume-helper", label: "Resume", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
  { href: "/applications", label: "Apps", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg> },
  { href: "/skills", label: "Skills", icon: <IconSparkles className="w-5 h-5" /> },
  { href: "/learn", label: "Learn", icon: <IconBook className="w-5 h-5" /> },
  { href: "/support", label: "Support", icon: <IconLifebuoy className="w-5 h-5" /> },
];

export function Nav() {
  const pathname = usePathname();
  const levelProgress = Math.min(100, (student.points / student.pointsToNextLevel) * 100);

  return (
    <aside className="fixed left-0 top-0 z-50 h-full w-72 border-r border-game-border bg-white shadow-xl transition-all hidden md:flex flex-col">
      {/* Sidebar Header: Logo & Branding */}
      <div className="p-8 pb-6">
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
      <nav className="flex-1 px-6 pt-4 space-y-2 overflow-y-auto">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-4 rounded-xl px-5 py-3.5 transition-all border ${isActive
                ? "border-garnet bg-garnet/[0.04] text-garnet shadow-md -translate-y-0.5"
                : "border-transparent text-game-text-muted hover:bg-gray-50/80 hover:border-game-border"
                }`}
            >
              <span className={`transition-transform ${isActive ? "scale-110 text-garnet" : "text-gray-400"}`}>{link.icon}</span>
              <span className={`text-[11px] font-bold uppercase tracking-[0.1em] ${isActive ? "text-garnet" : "text-game-text-muted"}`}>
                {link.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer: Student Stats */}
      <div className="p-8 border-t border-game-border bg-gray-50/30 space-y-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center justify-center rounded-xl border border-orange-500/10 bg-white p-3 shadow-sm">
            <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" /></svg>
            <span className="mt-1 text-xs font-bold text-orange-600">{student.streak}</span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-gold/10 bg-white p-3 shadow-sm">
            <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg>
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
