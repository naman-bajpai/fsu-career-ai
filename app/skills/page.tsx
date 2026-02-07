import Link from "next/link";
import { skillsInProgress } from "../lib/dummy-data";
import { ResourcesSidebar } from "../components/ResourcesSidebar";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground lg:pr-80">
      <main className="mx-auto max-w-lg px-8 pb-32 pt-16">
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl">⚡</span>
            <h1 className="text-4xl font-black text-garnet uppercase tracking-tighter">Skill Tree</h1>
          </div>
          <p className="text-xs font-black uppercase text-game-text-muted tracking-[0.2em]">Ascending to Legendary Status</p>
        </header>

        <section className="my-12 card-glass p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

          <p className="mb-10 text-[10px] font-black uppercase text-game-text-muted tracking-[0.2em] leading-relaxed">
            These professional attributes amplify your ATS compatibility and secure elite job matches.
          </p>

          <ul className="space-y-10">
            {skillsInProgress.map((s) => (
              <li key={s.name} className="group">
                <div className="flex justify-between items-end mb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.1em] text-game-text-muted opacity-60 mb-1">Competency</span>
                    <span className="text-sm font-black uppercase tracking-widest text-garnet group-hover:text-gold transition-colors">{s.name}</span>
                  </div>
                  <span className="text-sm font-black text-gold tracking-tighter">{s.progress}%</span>
                </div>
                <div className="progress-container h-2.5">
                  <div
                    className="progress-fill !bg-gradient-to-r !from-gold !to-gold-dark"
                    style={{ width: `${s.progress}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-2xl bg-garnet text-white p-8 shadow-xl relative group/tip">
            <div className="absolute -top-4 -right-4 text-4xl transform rotate-12 group-hover/tip:rotate-0 transition-transform">💡</div>
            <p className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-2">Professional Insight</p>
            <p className="text-xs font-bold leading-relaxed">
              Achieving <span className="text-gold font-black underline decoration-2">Legendary status</span> in Technical Interviewing unlocks direct referrals to FSU Alumni networks.
            </p>
          </div>
        </section>
      </main>
      <ResourcesSidebar page="skills" />
    </div>
  );
}
