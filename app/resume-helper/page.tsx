"use client";

import { useState } from "react";
import Link from "next/link";
import { student } from "../lib/dummy-data";

interface Suggestion {
  id: string;
  type: "verb" | "metric" | "clarity";
  text: string;
  original: string;
  suggested: string;
  section: "summary" | "experience";
  index?: number;
}

const initialSuggestions: Suggestion[] = [
  {
    id: "s1",
    type: "verb",
    text: "Use a stronger action verb instead of 'Worked on'.",
    original: "Worked on frontend features",
    suggested: "Architected and implemented responsive frontend features",
    section: "experience",
    index: 0,
  },
  {
    id: "s2",
    type: "metric",
    text: "Quantify your impact at TechCorp.",
    original: "Improved site performance",
    suggested: "Boosted site loading speed by 40% through lazy loading and asset optimization",
    section: "experience",
    index: 1,
  },
  {
    id: "s3",
    type: "clarity",
    text: "Refine your professional summary for CS roles.",
    original: "Student looking for internships",
    suggested: "Ambitious Computer Science student at FSU specializing in React and Cloud Architecture, seeking to leverage technical skills in a fast-paced development role.",
    section: "summary",
  },
];

import { ResourcesSidebar } from "../components/ResourcesSidebar";

export default function ResumeHelperPage() {
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [atsScore, setAtsScore] = useState(student.atsScore);

  const applySuggestion = (suggestion: Suggestion) => {
    // Logic disabled as resume is now a PDF viewer
    setSuggestions(suggestions.filter((s) => s.id !== suggestion.id));
    setAtsScore((prev) => Math.min(100, prev + 5));
  };

  return (
    <div className="min-h-screen bg-background text-foreground lg:pr-80">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Panel: Suggestions */}
        <aside className="w-full lg:w-1/3 border-r border-game-border bg-gray-50/50 flex flex-col h-full overflow-hidden">
          <div className="p-8 border-b border-game-border bg-white">
            <h1 className="text-2xl font-black text-garnet uppercase tracking-tighter">AI Reviewer 🤖</h1>
            <p className="text-xs font-bold text-game-text-muted uppercase mt-1">Found {suggestions.length} potential upgrades</p>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-game-text-muted uppercase">Live ATS Score</span>
                <span className="text-3xl font-black text-orange-500">{atsScore}</span>
              </div>
              <div className="progress-container w-32 h-2">
                <div
                  className="progress-fill !bg-orange-500"
                  style={{ width: `${atsScore}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {suggestions.length > 0 ? (
              suggestions.map((s) => (
                <div key={s.id} className="card-glass p-5 border-l-4 border-l-blue-500 animate-in slide-in-from-left duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-2 py-0.5 rounded bg-blue-100 text-[10px] font-black text-blue-700 uppercase">{s.type}</span>
                      </div>
                      <p className="text-sm font-bold text-foreground mb-3">{s.text}</p>

                      <div className="text-xs space-y-2">
                        <div className="bg-red-50 p-2 rounded border-2 border-red-100 text-red-700 line-through opacity-60">
                          {s.original}
                        </div>
                        <div className="bg-green-50 p-2 rounded border-2 border-green-100 text-green-700 font-bold">
                          {s.suggested}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => applySuggestion(s)}
                    className="btn-game btn-game-primary w-full mt-4 py-2 text-xs"
                  >
                    Accept Change (+5 XP)
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4 text-gold">🏆</div>
                <h2 className="text-lg font-black text-garnet uppercase">Perfect Score!</h2>
                <p className="text-sm font-bold text-game-text-muted">Your resume is ready for the Seminole job market.</p>
              </div>
            )}
          </div>
        </aside>

        {/* Right Panel: Resume Editor */}
        <main className="flex-1 bg-white flex flex-col h-full overflow-hidden">
          <div className="p-8 border-b border-game-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
              <span className="ml-4 text-xs font-bold text-game-text-muted uppercase tracking-widest">RESUME1.PDF</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-black uppercase text-garnet">
              <button className="hover:underline">Export PDF</button>
              <button className="hover:underline">Save Draft</button>
            </div>
          </div>

          <div className="flex-1 overflow-hidden bg-gray-100">
            <iframe
              src="/Resume1.pdf"
              className="w-full h-full border-none"
              title="Resume Preview"
            />
          </div>
        </main>
      </div>
      <ResourcesSidebar page="resume" />
    </div>
  );
}
