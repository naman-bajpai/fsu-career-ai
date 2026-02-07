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
  const [summary, setSummary] = useState("Student looking for internships");
  const [experience, setExperience] = useState([
    "Worked on frontend features for the internal dashboard.",
    "Improved site performance and fixed bugs.",
    "Collaborated with the design team to implement new UI/UX components.",
  ]);
  const [suggestions, setSuggestions] = useState(initialSuggestions);
  const [atsScore, setAtsScore] = useState(student.atsScore);

  const applySuggestion = (suggestion: Suggestion) => {
    if (suggestion.section === "summary") {
      setSummary(suggestion.suggested);
    } else if (suggestion.section === "experience" && suggestion.index !== undefined) {
      const newExperience = [...experience];
      newExperience[suggestion.index] = suggestion.suggested;
      setExperience(newExperience);
    }
    setSuggestions(suggestions.filter((s) => s.id !== suggestion.id));
    setAtsScore((prev) => Math.min(100, prev + 5));
  };

  return (
    <div className="min-h-screen bg-background text-foreground lg:pr-80">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Panel: Suggestions */}
        <aside className="w-full lg:w-1/3 border-r-2 border-game-border bg-gray-50/50 flex flex-col h-full overflow-hidden">
          <div className="p-8 border-b-2 border-game-border bg-white">
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
                <div key={s.id} className="card-glass p-5 border-l-8 border-l-blue-500 animate-in slide-in-from-left duration-300">
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
          <div className="p-8 border-b-2 border-game-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
              <span className="ml-4 text-xs font-bold text-game-text-muted uppercase tracking-widest">JORDAN_RESUME_V4.PDF</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-black uppercase text-garnet">
              <button className="hover:underline">Export PDF</button>
              <button className="hover:underline">Save Draft</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-gray-100 p-12">
            <div className="mx-auto max-w-2xl bg-white shadow-2xl p-16 font-serif text-sm">
              <div className="text-center border-b-2 border-black pb-8 mb-8">
                <h2 className="text-3xl font-black uppercase tracking-tight text-black">{student.name.toUpperCase()}</h2>
                <p className="mt-2 font-medium">Tallahassee, FL | jordan@fsu.edu | (850) 123-4567</p>
                <div className="flex justify-center gap-4 mt-2 font-bold text-blue-700 underline underline-offset-4">
                  <a href="#">LinkedIn</a>
                  <a href="#">GitHub</a>
                  <a href="#">Portfolio</a>
                </div>
              </div>

              {/* Summary */}
              <section className="mb-8">
                <h3 className="font-black border-b border-black mb-3 uppercase tracking-widest text-xs">Professional Summary</h3>
                <textarea
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full bg-transparent resize-none focus:outline-none focus:bg-yellow-50 p-1 rounded transition-colors"
                  spellCheck={false}
                  rows={2}
                />
              </section>

              {/* Experience */}
              <section className="mb-8">
                <h3 className="font-black border-b border-black mb-4 uppercase tracking-widest text-xs">Technical Experience</h3>

                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-black text-black">TechCorp Inc.</h4>
                    <span className="text-[10px] font-bold">Tallahassee, FL</span>
                  </div>
                  <div className="flex justify-between items-baseline mb-2 italic">
                    <span className="font-bold">Software Development Intern</span>
                    <span className="text-[10px] font-bold">Jan 2026 – Present</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.map((bullet, i) => (
                      <li key={i} className="group relative">
                        <textarea
                          value={bullet}
                          onChange={(e) => {
                            const next = [...experience];
                            next[i] = e.target.value;
                            setExperience(next);
                          }}
                          className="w-full bg-transparent resize-none focus:outline-none focus:bg-yellow-50 p-1 rounded transition-colors"
                          spellCheck={false}
                          rows={2}
                        />
                        {suggestions.find(s => s.section === "experience" && s.index === i) && (
                          <div className="absolute -left-7 top-2 text-blue-500 animate-bounce">✨</div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h3 className="font-black border-b border-black mb-4 uppercase tracking-widest text-xs">Education</h3>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-black text-black">Florida State University</h4>
                  <span className="text-[10px] font-bold italic">Expected graduation: May 2027</span>
                </div>
                <div className="flex justify-between items-baseline mt-1">
                  <span className="font-bold">Bachelor of Science in Computer Science</span>
                  <span className="text-[10px] font-bold font-serif">GPA: 3.8 / 4.0</span>
                </div>
              </section>

              {/* Technical Skills */}
              <section>
                <h3 className="font-black border-b border-black mb-3 uppercase tracking-widest text-xs">Technical Skills</h3>
                <p className="font-medium">
                  <span className="font-black">Langs:</span> JavaScript (ES6+), TypeScript, Python, Java, SQL <br />
                  <span className="font-black">Frameworks:</span> Next.js, React, Tailwind CSS, Node.js, Express <br />
                  <span className="font-black">Tools:</span> Git, Docker, AWS (Lambda, S3), Jira
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
      <ResourcesSidebar page="resume" />
    </div>
  );
}
