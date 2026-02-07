import Link from "next/link";
import { skillsInProgress } from "../lib/dummy-data";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-lg px-6 pb-24 pt-12">
        <h1 className="text-2xl font-black text-garnet uppercase tracking-tighter">Skill Tree ⚡</h1>
        <p className="mt-1 text-xs font-black uppercase text-game-text-muted">Evolving into a professional</p>

        <section className="my-10 card-glass p-8 shadow-xl">
          <p className="mb-8 text-xs font-black uppercase text-game-text-muted tracking-tight">
            These skills boost your ATS score and job matches.
          </p>
          <ul className="space-y-8">
            {skillsInProgress.map((s) => (
              <li key={s.name}>
                <div className="flex justify-between text-[10px] font-black uppercase mb-2 tracking-widest leading-none">
                  <span className="text-garnet">{s.name}</span>
                  <span className="text-gold">{s.progress}%</span>
                </div>
                <div className="progress-container h-2 shadow-inner">
                  <div
                    className="progress-fill !bg-gold"
                    style={{ width: `${s.progress}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl bg-gold/10 border-2 border-gold/30 p-5">
            <p className="text-xs font-black text-garnet uppercase tracking-widest mb-1">💡 Pro Tip</p>
            <p className="text-xs font-bold text-game-text-muted leading-relaxed">
              Complete more simulations to unlock legendary status.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
