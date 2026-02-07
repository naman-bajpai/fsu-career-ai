import Link from "next/link";

const simulations = [
  { id: 1, title: "Software dev sprint", role: "Intern-level", done: true, points: 100 },
  { id: 2, title: "Data analysis task", role: "Analyst", done: true, points: 100 },
  { id: 3, title: "Client pitch scenario", role: "Consulting", done: false, points: 120 },
];

export default function JobSimulationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-lg px-6 pb-24 pt-12">
        <h1 className="text-2xl font-black text-garnet uppercase tracking-tighter">Job Simulations 🎯</h1>
        <p className="mt-1 text-xs font-black uppercase text-game-text-muted italic">Real-world practice for Seminoles</p>


        <ul className="space-y-4 mt-10">
          {simulations.map((s) => (
            <li
              key={s.id}
              className={`card-glass p-6 transition-all ${s.done ? "border-gold/30 bg-gold/5" : "hover:border-garnet"
                }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="font-black text-garnet uppercase tracking-tight">{s.title}</p>
                  <p className="text-xs font-bold text-game-text-muted uppercase tracking-widest">{s.role} · +{s.points} XP</p>
                </div>
                {s.done ? (
                  <span className="rounded-xl bg-gold px-4 py-2 text-[10px] font-black text-white shadow-[0_4px_0_0_#b5a072]">DONE ✓</span>
                ) : (
                  <button type="button" className="btn-game btn-game-primary px-6 py-2 text-[10px]">
                    START
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
