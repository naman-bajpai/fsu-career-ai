import Link from "next/link";
import { rewards, student } from "../lib/dummy-data";

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-lg px-6 pb-24 pt-12">
        <section className="mb-10 text-center">
          <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gold text-5xl shadow-xl shadow-gold/20">
            🎁
          </div>
          <h1 className="text-3xl font-black text-garnet">Career Loot</h1>
          <p className="mt-2 font-bold text-game-text-muted">Turn your hard work into FSU legendary rewards</p>
        </section>

        {/* Balance Card */}
        <div className="card-glass mb-10 overflow-hidden bg-gradient-to-br from-garnet to-garnet-dark p-6 text-white shadow-xl">
          <p className="text-xs font-black uppercase tracking-widest opacity-70">Current Balance</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-5xl font-black tracking-tighter">{student.points}</span>
            <span className="text-xl font-bold text-gold">XP</span>
          </div>
          <p className="mt-4 text-sm font-bold opacity-80">You're {500 - student.points} XP away from FSU Football Tickets!</p>
        </div>

        <h2 className="mb-6 text-center text-xs font-black uppercase tracking-widest text-garnet/50">Available Unlocks</h2>

        <div className="grid grid-cols-1 gap-4">
          {rewards.map((r) => {
            const canAfford = student.points >= r.points;
            return (
              <div
                key={r.name}
                className={`card-glass relative overflow-hidden p-5 transition-all duration-300 ${r.unlocked
                  ? "border-gold/50 bg-gold/5 opacity-80"
                  : canAfford
                    ? "border-garnet shadow-lg"
                    : "grayscale-[0.5]"
                  }`}
              >
                <div className="flex items-center gap-5">
                  <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl shadow-lg ${r.unlocked ? "bg-gold/20" : "bg-game-border"
                    }`}>
                    {r.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black leading-tight text-garnet">{r.name}</h3>
                    {r.unlocked ? (
                      <span className="mt-1 inline-block text-[10px] font-black uppercase tracking-widest text-gold">Claimed</span>
                    ) : (
                      <div className="mt-1 flex items-center gap-1.5">
                        <span className={`text-sm font-black ${canAfford ? "text-garnet" : "text-game-text-muted"}`}>
                          {r.points} XP
                        </span>
                        {!canAfford && (
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-game-border">
                            <div
                              className="h-full bg-gold transition-all"
                              style={{ width: `${(student.points / r.points) * 100}%` }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  {!r.unlocked && (
                    <button
                      className={`btn-game ${canAfford ? "btn-game-primary px-6 py-3 text-xs" : "btn-game-secondary px-6 py-3 text-xs pointer-events-none opacity-50"}`}
                    >
                      {canAfford ? "Unlock" : "Locked"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 text-center text-xs font-black uppercase tracking-tighter text-game-text-muted opacity-50">
          * Rewards are subject to availability and campus policies.
        </p>
      </main>
    </div>
  );
}
