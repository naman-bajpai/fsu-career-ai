"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { student } from "./lib/dummy-data";

export default function LandingPage() {
  const router = useRouter();
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsSwiping(true);
  };

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isSwiping || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - containerRect.left;
    const width = containerRect.width - 64; // handle width

    const progress = Math.min(Math.max(0, x / width), 1);
    setSwipeProgress(progress * 100);

    if (progress >= 0.95) {
      setIsSwiping(false);
      setSwipeProgress(100);
      router.push("/roadmap");
    }
  };

  const handleEnd = () => {
    if (swipeProgress < 95) {
      setSwipeProgress(0);
    }
    setIsSwiping(false);
  };

  useEffect(() => {
    if (isSwiping) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleEnd);
    } else {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isSwiping, swipeProgress]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-garnet text-white shadow-[0_12px_0_0_#5a2330] transition-transform hover:scale-105 active:translate-y-2 active:shadow-[0_8px_0_0_#5a2330]">
            <span className="text-6xl font-black italic">F</span>
          </div>
        </div>
        <h1 className="mb-4 text-5xl font-black tracking-tight text-garnet">
          Unleash Your <br />
          <span className="text-gold italic">Potential.</span>
        </h1>
        <p className="mb-12 max-w-sm font-bold text-game-text-muted">
          Welcome back, <span className="text-garnet">{student.name}</span>. <br />
          Your gamified career journey continues here.
        </p>

        {/* Swipe Button */}
        <div className="flex justify-center">
          <div
            ref={containerRef}
            className="swipe-button-container"
          >
            <div
              className="swipe-button-track"
              style={{ width: `${swipeProgress}%` }}
            />
            <span className="swipe-text">Swipe to Start</span>
            <div
              ref={handleRef}
              onMouseDown={handleStart}
              onTouchStart={handleStart}
              className="swipe-button-handle"
              style={{ transform: `translateX(${swipeProgress * 2.36}px)` }} // Adjusted for track width
            >
              <span className="text-2xl font-black text-garnet">→</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-2xl">🔥</span>
            <span className="mt-1 text-xs font-black uppercase text-garnet">{student.streak} Day Streak</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">💎</span>
            <span className="mt-1 text-xs font-black uppercase text-garnet">{student.points} XP</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl">🛡️</span>
            <span className="mt-1 text-xs font-black uppercase text-garnet">Lvl {student.level}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
