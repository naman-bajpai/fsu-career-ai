"use client";

import Link from "next/link";
import { student, milestones, quickLinks, badges } from "../lib/dummy-data";

export default function RoadmapPage() {
  const nextMilestone = milestones.find((m) => !m.done);
  const dailyProgress = Math.min(100, (student.dailyXpEarned / student.dailyGoalXp) * 100);

  return (
    <div className="min-h-screen bg-background text-foreground relative lg:pr-80">
      <main className="mx-auto max-w-lg px-6 pb-32 pt-12">
        {/* Daily Progress Card */}
        <section className="card-glass mb-14 overflow-hidden p-8 animate-in slide-in-from-top duration-700">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-garnet uppercase tracking-tighter">Daily Mission</h2>
              <p className="text-[10px] font-bold text-game-text-muted uppercase tracking-widest mt-1">XP Surge Active ⚡</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-gold">
                {student.dailyXpEarned}
              </span>
              <span className="text-xs font-black text-game-text-muted">/{student.dailyGoalXp} XP</span>
            </div>
          </div>
          <div className="progress-container h-4 shadow-inner">
            <div
              className="progress-fill !bg-gradient-to-r !from-gold !to-gold-dark"
              style={{ width: `${dailyProgress}%` }}
            />
          </div>
          <p className="mt-4 text-xs font-bold text-garnet leading-tight">
            {student.dailyXpEarned >= student.dailyGoalXp
              ? "Mission Accomplished! You've secured today's growth. 🏹"
              : "Just a few more actions to reach your daily peak!"}
          </p>
        </section>

        {/* Badges Collection */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 px-2">
            <h2 className="text-xs font-black uppercase text-garnet tracking-[0.3em]">Achievements</h2>
            <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-gold/30">
              {badges.filter(b => b.unlocked).length} / {badges.length} Unlocked
            </span>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar mask-fade-right">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`flex-shrink-0 flex flex-col items-center gap-3 p-6 rounded-3xl border transition-all hover:scale-105 ${badge.unlocked
                  ? "border-gold/30 bg-white shadow-lg"
                  : "border-game-border bg-gray-50/50 opacity-40 grayscale"
                  }`}
              >
                <div className="relative">
                  <span className="text-4xl block">{badge.icon}</span>
                  {badge.unlocked && <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>}
                </div>
                <span className="text-[10px] font-black uppercase text-center w-24 leading-tight tracking-tighter text-garnet">
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* The Path - Duolingo Curvy Style */}
        <section className="relative mb-8 flex flex-col items-center">
          <div className="mb-20 w-full relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t-4 border-game-border border-dashed opacity-30"></div>
            </div>
            <h2 className="relative bg-background px-6 mx-auto w-fit text-center text-3xl font-black uppercase tracking-[0.3em] text-garnet/20 italic">
              The Ascent
            </h2>
          </div>

          <div className="relative flex w-full flex-col items-center gap-20">
            {/* SVG Connector Path would go here in a more advanced version */}
            {milestones.map((m, i) => {
              const isDone = m.done;
              const isNext = nextMilestone?.id === m.id;
              const isLocked = !isDone && !isNext && milestones.slice(0, i).some((prev) => !prev.done);

              const offsets = ["0px", "80px", "0px", "-80px"];
              const offset = offsets[i % offsets.length];

              return (
                <div
                  key={m.id}
                  className="relative flex flex-col items-center group"
                  style={{ transform: `translateX(${offset})` }}
                >
                  <Link
                    href={isLocked ? "#" : m.href}
                    className={`relative flex h-24 w-24 items-center justify-center rounded-2xl border transition-all duration-300 ${isDone
                      ? "bg-gold border-gold-dark text-white shadow-lg"
                      : isNext
                        ? "bg-garnet border-garnet-dark text-white shadow-xl shadow-garnet/20 animate-bounce-subtle"
                        : "bg-white border-game-border text-game-text-muted shadow-md"
                      } ${isLocked ? "cursor-not-allowed grayscale-[0.8] opacity-60" : "hover:scale-110 active:scale-95 active:shadow-none"}`}
                  >
                    <span className="text-4xl drop-shadow-lg">{isDone ? "✓" : m.icon}</span>

                    {m.badgeId && (
                      <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-xl bg-white border-2 border-gold text-sm shadow-lg animate-pulse z-10">
                        🎖️
                      </div>
                    )}

                    {/* Progress floating label for active task */}
                    {isNext && (
                      <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-garnet px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl animate-in slide-in-from-bottom-2">
                        START MISSION
                        <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-garnet" />
                      </div>
                    )}
                  </Link>
                  <div className="mt-8 text-center max-w-[120px]">
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${isLocked ? "text-game-text-muted/40" : "text-garnet"}`}>
                      {m.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Updated Quick Actions (Boosters) */}
        <section className="mt-20">
          <h2 className="mb-8 text-center text-xs font-black uppercase tracking-widest text-garnet/40 italic flex items-center justify-center gap-2 text-wrap px-4">
            <span className="h-[2px] flex-1 bg-game-border"></span>
            FSU Resources
            <span className="h-[2px] flex-1 bg-game-border"></span>
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                className="flex items-center gap-6 p-6 transition-all border border-game-border rounded-2xl hover:border-gold group bg-white shadow-sm hover:shadow-md"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{link.icon}</span>
                <div className="text-left">
                  <h3 className="font-bold text-garnet uppercase text-sm leading-none">{link.title}</h3>
                  <p className="text-[10px] font-medium text-game-text-muted mt-1 uppercase tracking-widest">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-24 text-center opacity-30 grayscale active:grayscale-0 transition-all cursor-default">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-garnet">
            Florida State University
          </p>
          <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.5em] text-game-text-muted">
            Career Journey AI © 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
