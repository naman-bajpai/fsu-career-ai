import Link from "next/link";
import { student } from "../lib/dummy-data";

const sampleSessions = [
  { id: 1, role: "Software Developer Intern", date: "Jan 15, 2026", score: 78, feedback: "Strong technical answers; practice STAR for behavioral." },
  { id: 2, role: "Data Analyst", date: "Jan 8, 2026", score: 82, feedback: "Good clarity; add more quantifiable outcomes." },
];

export default function MockInterviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-lg px-6 pb-24 pt-12">
        <section className="mb-10 text-center">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-garnet text-5xl shadow-xl shadow-garnet/20">
            🎤
          </div>
          <h1 className="text-3xl font-black text-garnet">Mock Interviews</h1>
          <p className="mt-2 font-bold text-game-text-muted">Master the art of the interview with AI feedback</p>
        </section>

        {/* Start Game Mode */}
        <section className="card-glass mb-12 p-6 shadow-2xl">
          <h2 className="mb-6 text-center text-xs font-black uppercase tracking-widest text-garnet/50">Select Your Challenge</h2>

          <div className="space-y-4">
            <button className="btn-game btn-game-primary w-full gap-3 py-6 text-xl">
              <span>🚀</span>
              Technical Duel
            </button>
            <button className="btn-game btn-game-secondary w-full gap-3 py-6 text-xl">
              <span>🌟</span>
              Behavioral Quest
            </button>
            <button className="btn-game btn-game-secondary w-full gap-3 py-6 text-xl">
              <span>🔄</span>
              The Gauntlet (Mixed)
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-gold/10 p-4">
            <span className="text-2xl">🔥</span>
            <p className="text-sm font-black text-gold">Earn +150 XP for your first daily win!</p>
          </div>
        </section>

        {/* Past Sessions Grid */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-black text-garnet uppercase tracking-tighter">Your Replays</h2>
            <span className="text-xs font-black text-game-text-muted uppercase">{sampleSessions.length} SESSIONS</span>
          </div>

          <div className="space-y-4">
            {sampleSessions.map((s) => (
              <div key={s.id} className="card-glass group p-5 transition-all hover:scale-[1.02] hover:border-gold">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-black text-garnet">{s.role}</h3>
                    <p className="text-xs font-bold text-game-text-muted">{s.date}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-black text-gold">{s.score}%</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-game-text-muted">MATCH SCORE</span>
                  </div>
                </div>
                <div className="mt-4 border-t-2 border-game-border pt-4">
                  <p className="text-sm font-medium leading-relaxed text-game-text-muted">
                    "{s.feedback}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-garnet/40">
            Powered by Career AI • FSU Exclusive
          </p>
        </footer>
      </main>
    </div>
  );
}
