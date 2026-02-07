import Link from "next/link";
import { applications, student } from "../lib/dummy-data";
import { ResourcesSidebar } from "../components/ResourcesSidebar";

function statusStyle(status: string) {
  if (status === "Interview Scheduled") return "bg-[var(--game-orange)]/20 text-[var(--game-orange-dark)]";
  if (status === "Under Review") return "bg-[var(--game-blue)]/20 text-[var(--game-blue)]";
  if (status === "Offer") return "bg-[var(--game-green)]/20 text-[var(--game-green-dark)]";
  return "bg-[var(--game-border)] text-[var(--game-text-muted)]";
}

export default function ApplicationsPage() {
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

        <section className="card-glass overflow-hidden shadow-xl">
          <ul className="divide-y-2 divide-game-border">
            {applications.map((app, i) => (
              <li key={i} className="px-4 py-4 hover:bg-[var(--background)] transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-[var(--foreground)]">{app.role}</p>
                    <p className="text-sm text-[var(--game-text-muted)]">{app.company}</p>
                    <p className="mt-1 text-xs text-[var(--game-text-muted)]">Applied {app.date}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-bold ${statusStyle(app.status)}`}>
                    {app.status}
                  </span>
                </div>
              </li>
            ))}
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
