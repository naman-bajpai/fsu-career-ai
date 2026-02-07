import Link from "next/link";
import { applications, student, applicationInsights } from "../lib/dummy-data";
import { ResourcesSidebar } from "../components/ResourcesSidebar";

function statusStyle(status: string) {
  if (status === "Interview Scheduled") return "bg-[var(--game-orange)]/20 text-[var(--game-orange-dark)]";
  if (status === "Under Review") return "bg-[var(--game-blue)]/20 text-[var(--game-blue)]";
  if (status === "Offer") return "bg-[var(--game-green)]/20 text-[var(--game-green-dark)]";
  return "bg-[var(--game-border)] text-[var(--game-text-muted)]";
}

function getInsight(status: string, daysAgo: number) {
  const insight = applicationInsights.insights.find(
    (i) => i.status === status && daysAgo >= i.daysThreshold
  );
  return insight;
}

export default function ApplicationsPage() {
  const staleApps = applications.filter((app) => {
    const insight = getInsight(app.status, app.daysAgo);
    return insight !== undefined;
  });

  return (
    <div className="min-h-screen bg-background text-foreground lg:pr-80">
      <main className="mx-auto max-w-lg px-6 pb-24 pt-12">
        <h1 className="text-2xl font-black text-garnet uppercase tracking-tighter">Your Pipeline 📋</h1>
        <p className="mt-1 text-xs font-black uppercase text-game-text-muted">Hunting for the perfect seat</p>

        {/* Encouragement */}
        <section className="my-10 card-glass border-garnet/30 bg-garnet/[0.02] p-6 shadow-xl">
          <p className="text-sm font-bold text-foreground">
            You applied to <span className="text-garnet font-black">{applications.length}</span> roles—more than <span className="text-gold font-black">{student.percentileApplications}%</span> of FSU students! 🎉
          </p>
        </section>

        {/* AI Insights for Stale Apps */}
        {staleApps.length > 0 && (
          <section className="mb-8 card-glass border-blue-500/30 bg-blue-50/50 p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🤖</span>
              <h2 className="text-sm font-black uppercase text-blue-700 tracking-widest">AI Insights</h2>
            </div>
            <p className="text-sm text-foreground mb-4">
              {staleApps.length} application{staleApps.length > 1 ? "s" : ""} may need attention:
            </p>
            <div className="space-y-3">
              {staleApps.map((app, idx) => {
                const insight = getInsight(app.status, app.daysAgo);
                if (!insight) return null;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-blue-100">
                    <p className="font-bold text-foreground text-sm">{app.role} @ {app.company}</p>
                    <p className="text-xs text-game-text-muted mt-1 mb-2">{app.daysAgo} days since applying</p>
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 mb-3">
                      <p className="text-xs text-blue-700"><span className="font-bold">Likely reason:</span> {insight.reason}</p>
                    </div>
                    <p className="text-[10px] font-bold uppercase text-game-text-muted mb-2">Suggested actions:</p>
                    <ul className="space-y-1">
                      {insight.suggestions.map((s, i) => (
                        <li key={i} className="text-xs text-foreground flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">→</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <section className="card-glass overflow-hidden shadow-xl">
          <ul className="divide-y divide-game-border">
            {applications.map((app, i) => {
              const isStale = getInsight(app.status, app.daysAgo) !== undefined;
              return (
                <li key={i} className={`px-4 py-4 hover:bg-[var(--background)] transition-colors ${isStale ? "border-l-4 border-l-blue-400" : ""}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-bold text-[var(--foreground)]">{app.role}</p>
                      <p className="text-sm text-[var(--game-text-muted)]">{app.company}</p>
                      <p className="mt-1 text-xs text-[var(--game-text-muted)]">Applied {app.date} ({app.daysAgo}d ago)</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`rounded-full px-3 py-1 text-sm font-bold ${statusStyle(app.status)}`}>
                        {app.status}
                      </span>
                      {isStale && (
                        <span className="text-[10px] font-bold text-blue-500">💡 See insights</span>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="bg-game-border/30 px-6 py-6 text-center">
            <button type="button" className="btn-game btn-game-primary w-full py-4 text-sm font-black">
              + NEW APPLICATION
            </button>
          </div>
        </section>
      </main>
      <ResourcesSidebar page="applications" />
    </div>
  );
}
