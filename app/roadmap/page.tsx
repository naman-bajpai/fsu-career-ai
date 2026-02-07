"use client";

import Link from "next/link";
import { student, milestones, quickLinks } from "../lib/dummy-data";
import { ChatSidebar } from "../components/ChatSidebar";

export default function RoadmapPage() {
  const nextMilestone = milestones.find((m) => !m.done);
  const dailyProgress = Math.min(100, (student.dailyXpEarned / student.dailyGoalXp) * 100);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <main className="mx-auto max-w-lg px-6 pb-32 pt-12">
        {/* Daily Progress Card */}
        <section className="card-glass mb-10 overflow-hidden p-6 animate-in slide-in-from-top duration-500">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-black text-garnet uppercase tracking-tighter">Daily Goal</h2>
            <span className="text-sm font-black text-gold">
              {student.dailyXpEarned}/{student.dailyGoalXp} XP
            </span>
          </div>
          <div className="progress-container h-3">
            <div
              className="progress-fill !bg-gold"
              style={{ width: `${dailyProgress}%` }}
            />
          </div>
          <p className="mt-3 text-xs font-black uppercase text-game-text-muted tracking-tight">
            {student.dailyXpEarned >= student.dailyGoalXp
              ? "Goal reached! You're crushing it! 🏹"
              : "Just a little more to level up today!"}
          </p>
        </section>

        {/* The Path - Duolingo Curvy Style */}
        <section className="relative mb-8 flex flex-col items-center">
          <div className="mb-12 w-full">
            <h2 className="text-center text-2xl font-black uppercase tracking-[0.2em] text-garnet/30">
              Career Path
            </h2>
          </div>

          <div className="relative flex w-full flex-col items-center gap-16">
            {milestones.map((m, i) => {
              const isDone = m.done;
              const isNext = nextMilestone?.id === m.id;
              const isLocked = !isDone && !isNext && milestones.slice(0, i).some((prev) => !prev.done);

              // Alternating horizontal offset for the curvy path
              const offsets = ["0px", "60px", "0px", "-60px"];
              const offset = offsets[i % offsets.length];

              return (
                <div
                  key={m.id}
                  className="relative flex flex-col items-center"
                  style={{ transform: `translateX(${offset})` }}
                >
                  <Link
                    href={isLocked ? "#" : m.href}
                    className={`group relative flex h-24 w-24 items-center justify-center rounded-[2rem] transition-all duration-200 ${isDone
                      ? "bg-gold text-white shadow-[0_8px_0_0_#b5a072] active:translate-y-[2px] active:shadow-[0_6px_0_0_#b5a072]"
                      : isNext
                        ? "bg-garnet text-white shadow-[0_8px_0_0_#5a2330] active:translate-y-[2px] active:shadow-[0_6px_0_0_#5a2330]"
                        : "bg-game-border text-game-text-muted shadow-[0_8px_0_0_#d1d1d1]"
                      } ${isLocked ? "cursor-not-allowed grayscale" : "hover:scale-110 active:scale-95"}`}
                  >
                    <span className="text-4xl">{isDone ? "✓" : m.icon}</span>

                    {/* Tooltip-style Label */}
                    <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-foreground px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-xl">
                      {m.label}
                      <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-foreground" />
                    </div>
                  </Link>
                  <p className="mt-6 text-center text-[10px] font-black uppercase tracking-widest text-game-text-muted/60">
                    {m.id.replace("-", " ")}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick Actions Grid */}
        <section className="mt-20">
          <h2 className="mb-8 text-center text-xs font-black uppercase tracking-widest text-garnet/40 italic flex items-center justify-center gap-2">
            <span className="h-[2px] flex-1 bg-game-border"></span>
            Career Boosters
            <span className="h-[2px] flex-1 bg-game-border"></span>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="btn-game-secondary group flex flex-col items-center gap-3 p-8 transition-all hover:border-gold hover:text-gold rounded-3xl"
              >
                <span className="text-4xl transition-transform group-hover:scale-125 group-active:scale-90">{link.icon}</span>
                <span className="text-center text-[10px] font-black uppercase tracking-widest leading-tight">
                  {link.title}
                </span>
              </Link>
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

      <ChatSidebar />
    </div>
  );
}
