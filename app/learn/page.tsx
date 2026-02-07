"use client";

import { useState } from "react";
import { hiddenCurriculumLessons, student } from "../lib/dummy-data";
import { IconBook } from "../components/Icons";

export default function LearnPage() {
    const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
    const completedCount = hiddenCurriculumLessons.filter((l) => l.completed).length;
    const totalXp = hiddenCurriculumLessons.reduce((sum, l) => sum + (l.completed ? l.xpReward : 0), 0);

    const lesson = hiddenCurriculumLessons.find((l) => l.id === selectedLesson);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="mx-auto max-w-lg px-6 pb-24 pt-12">
                {/* Header */}
                <header className="mb-10">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-garnet to-garnet-dark text-white shadow-md">
                            <IconBook className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl font-black text-garnet uppercase tracking-tighter">
                            Hidden Curriculum
                        </h1>
                    </div>
                    <p className="text-sm font-medium text-game-text-muted">
                        Master the unwritten rules that top performers already know
                    </p>
                </header>

                {/* Progress Card */}
                <div className="card-glass p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-[10px] font-bold uppercase text-game-text-muted tracking-widest">Your Progress</p>
                            <p className="text-2xl font-black text-garnet">
                                {completedCount} / {hiddenCurriculumLessons.length}
                                <span className="text-sm font-bold text-game-text-muted ml-2">lessons</span>
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-bold uppercase text-game-text-muted tracking-widest">XP Earned</p>
                            <p className="text-2xl font-black text-gold">{totalXp}</p>
                        </div>
                    </div>
                    <div className="progress-container h-2">
                        <div
                            className="progress-fill"
                            style={{ width: `${(completedCount / hiddenCurriculumLessons.length) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Lesson Grid */}
                {!selectedLesson ? (
                    <div className="space-y-4">
                        {hiddenCurriculumLessons.map((lesson) => (
                            <button
                                key={lesson.id}
                                onClick={() => lesson.unlocked && setSelectedLesson(lesson.id)}
                                disabled={!lesson.unlocked}
                                className={`w-full text-left card-glass p-5 transition-all ${lesson.unlocked
                                    ? "hover:border-garnet cursor-pointer"
                                    : "opacity-50 grayscale cursor-not-allowed"
                                    } ${lesson.completed ? "border-gold/30 bg-gold/5" : ""}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl ${lesson.completed ? "bg-gold/20" : "bg-game-border"
                                        }`}>
                                        {lesson.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-bold text-garnet">{lesson.title}</h3>
                                            {lesson.completed && (
                                                <span className="text-[10px] font-black uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                                                    Done
                                                </span>
                                            )}
                                            {!lesson.unlocked && (
                                                <span className="text-[10px] font-black uppercase text-game-text-muted bg-game-border px-2 py-0.5 rounded-full">
                                                    🔒 Locked
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-game-text-muted mb-2">{lesson.description}</p>
                                        <div className="flex gap-4 text-xs text-game-text-muted">
                                            <span>⏱️ {lesson.duration}</span>
                                            <span>⭐ +{lesson.xpReward} XP</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                ) : (
                    /* Lesson Detail View */
                    <div>
                        <button
                            onClick={() => setSelectedLesson(null)}
                            className="mb-6 text-sm font-bold text-garnet hover:underline flex items-center gap-2"
                        >
                            ← Back to lessons
                        </button>

                        <div className="card-glass p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-game-border text-3xl">
                                    {lesson?.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-garnet">{lesson?.title}</h2>
                                    <p className="text-sm text-game-text-muted">⏱️ {lesson?.duration} • ⭐ +{lesson?.xpReward} XP</p>
                                </div>
                            </div>

                            <p className="text-foreground mb-8">{lesson?.description}</p>

                            <h3 className="text-sm font-black uppercase text-game-text-muted mb-4 tracking-widest">
                                What You'll Learn
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {lesson?.topics.map((topic, idx) => (
                                    <li key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-game-border">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-garnet text-white text-xs font-bold">
                                            {idx + 1}
                                        </span>
                                        <span className="font-medium text-foreground">{topic}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className="btn-game btn-game-primary w-full py-4 text-sm">
                                {lesson?.completed ? "Review Lesson" : "Start Lesson"} →
                            </button>
                        </div>
                    </div>
                )}

                {/* Unlock Message */}
                <div className="mt-10 p-6 rounded-xl border border-dashed border-game-border text-center">
                    <p className="text-sm font-bold text-game-text-muted">
                        🔓 Unlock more lessons by earning XP on your career journey!
                    </p>
                    <p className="text-xs text-game-text-muted mt-1">
                        Current XP: <span className="font-black text-garnet">{student.points}</span>
                    </p>
                </div>
            </main>
        </div>
    );
}
