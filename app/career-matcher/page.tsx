"use client";

import { useState } from "react";
import Link from "next/link";
import { careerQuizQuestions, careerPaths } from "../lib/dummy-data";

type CareerMatch = {
    id: string;
    title: string;
    description: string;
    icon: string;
    avgSalary: string;
    demandLevel: string;
    matchPercent: number;
};

export default function CareerMatcherPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [showResults, setShowResults] = useState(false);
    const [matches, setMatches] = useState<CareerMatch[]>([]);

    const handleAnswer = (tags: string[]) => {
        const newTags = [...selectedTags, ...tags];
        setSelectedTags(newTags);

        if (currentQuestion < careerQuizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateMatches(newTags);
        }
    };

    const calculateMatches = (tags: string[]) => {
        const tagCounts: Record<string, number> = {};
        tags.forEach((tag) => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });

        const results = careerPaths.map((path) => {
            const matchingTags = path.matchTags.filter((t) => tagCounts[t]);
            const matchScore = matchingTags.reduce((sum, t) => sum + (tagCounts[t] || 0), 0);
            const maxPossible = careerQuizQuestions.length;
            const matchPercent = Math.min(100, Math.round((matchScore / maxPossible) * 100) + 40);

            return { ...path, matchPercent };
        });

        results.sort((a, b) => b.matchPercent - a.matchPercent);
        setMatches(results);
        setShowResults(true);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedTags([]);
        setShowResults(false);
        setMatches([]);
    };

    const question = careerQuizQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / careerQuizQuestions.length) * 100;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="mx-auto max-w-lg px-6 pb-24 pt-12">
                {/* Header */}
                <header className="mb-10 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-garnet to-garnet-dark text-3xl text-white shadow-lg">
                        🧭
                    </div>
                    <h1 className="text-3xl font-black text-garnet uppercase tracking-tighter">
                        Career Path Matcher
                    </h1>
                    <p className="mt-2 text-sm font-medium text-game-text-muted">
                        Discover roles that fit your skills and interests
                    </p>
                </header>

                {!showResults ? (
                    <>
                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="flex justify-between text-xs font-bold text-game-text-muted mb-2">
                                <span>Question {currentQuestion + 1} of {careerQuizQuestions.length}</span>
                                <span>{Math.round(progress)}%</span>
                            </div>
                            <div className="progress-container h-2">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Question Card */}
                        <div className="card-glass p-8 mb-6">
                            <h2 className="text-xl font-bold text-foreground mb-8 text-center">
                                {question.question}
                            </h2>

                            <div className="space-y-3">
                                {question.options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(option.tags)}
                                        className="w-full text-left p-5 rounded-xl border border-game-border bg-white hover:border-garnet hover:bg-garnet/5 transition-all group"
                                    >
                                        <span className="font-medium text-foreground group-hover:text-garnet">
                                            {option.text}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Results */}
                        <div className="card-glass p-8 mb-8 text-center">
                            <div className="text-5xl mb-4">🎯</div>
                            <h2 className="text-2xl font-black text-garnet mb-2">Your Career Matches</h2>
                            <p className="text-sm text-game-text-muted">
                                Based on your responses, here are your top career paths
                            </p>
                        </div>

                        <div className="space-y-4">
                            {matches.slice(0, 4).map((match, idx) => (
                                <div
                                    key={match.id}
                                    className={`card-glass p-6 relative overflow-hidden ${idx === 0 ? "border-gold/50 bg-gold/5" : ""
                                        }`}
                                >
                                    {idx === 0 && (
                                        <div className="absolute top-3 right-3 bg-gold text-white text-[10px] font-black uppercase px-2 py-1 rounded-full">
                                            Best Match
                                        </div>
                                    )}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-game-border text-2xl">
                                            {match.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-bold text-garnet text-lg">{match.title}</h3>
                                                <span className="text-sm font-black text-gold">{match.matchPercent}%</span>
                                            </div>
                                            <p className="text-sm text-game-text-muted mb-3">{match.description}</p>
                                            <div className="flex gap-4 text-xs">
                                                <span className="text-foreground">
                                                    <span className="font-bold">Salary:</span> {match.avgSalary}
                                                </span>
                                                <span className="text-foreground">
                                                    <span className="font-bold">Demand:</span> {match.demandLevel}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="h-2 bg-game-border rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-garnet to-gold rounded-full transition-all duration-700"
                                                style={{ width: `${match.matchPercent}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={resetQuiz}
                                className="btn-game btn-game-secondary flex-1 py-4 text-sm"
                            >
                                Retake Quiz
                            </button>
                            <Link href="/roadmap" className="btn-game btn-game-primary flex-1 py-4 text-sm text-center">
                                Start Your Path
                            </Link>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}
