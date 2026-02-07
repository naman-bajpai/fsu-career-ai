"use client";

import { useState, useRef, useEffect } from "react";
import { student } from "../lib/dummy-data";

export function ChatSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: "assistant", content: `Hey Jordan! I've analyzed your profile. You're a Computer Science major with a 5-day streak. How can I help you level up today?` }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = { role: "user", content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");

        // Simulate AI response based on context
        setTimeout(() => {
            let response = "I'm looking into that for you...";
            if (input.toLowerCase().includes("resume")) {
                response = `Based on your ATS score of ${student.atsScore}, I suggest adding more quantifiable achievements to your TechCorp intern description. Would you like to see a template?`;
            } else if (input.toLowerCase().includes("interview")) {
                response = "I see you have an AI mock interview milestone pending. Would you like to start a practice session for 'General Engineering' roles?";
            } else if (input.toLowerCase().includes("fsu")) {
                response = "The FSU Career Center has a session on LinkedIn networking this Tuesday at 2 PM. It would help you complete your 'LinkedIn profile' milestone!";
            }

            setMessages(prev => [...prev, { role: "assistant", content: response }]);
        }, 1000);
    };

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-garnet text-white shadow-xl transition-transform hover:scale-110 active:scale-95 lg:bottom-12"
            >
                <span className="text-2xl">💬</span>
                <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-black border-2 border-white">
                    1
                </div>
            </button>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <aside className={`fixed right-0 top-0 z-50 h-full w-[350px] bg-white shadow-2xl transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex h-full flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b-2 border-game-border p-6 bg-white">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-garnet flex items-center justify-center text-white">
                                <span className="font-black italic">A</span>
                            </div>
                            <div>
                                <h2 className="text-sm font-black uppercase text-garnet">Career Agent</h2>
                                <p className="text-[10px] font-bold text-game-text-muted uppercase">Context: Jordan (CS)</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-game-text-muted hover:text-garnet transition-colors font-black"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50"
                    >
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm font-medium shadow-sm border-2 ${m.role === "user"
                                        ? "bg-garnet text-white border-garnet-dark"
                                        : "bg-white text-foreground border-game-border"
                                    }`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area (Cursor Agent style) */}
                    <div className="p-6 border-t-2 border-game-border bg-white">
                        <div className="relative">
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSend();
                                    }
                                }}
                                placeholder="Ask about your resume, roadmap, or FSU services..."
                                className="w-full resize-none rounded-xl border-2 border-game-border p-3 pr-12 text-sm font-medium focus:border-garnet focus:outline-none transition-colors min-h-[80px]"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-garnet text-white disabled:opacity-50 transition-all hover:bg-garnet-dark active:scale-90 shadow-sm"
                            >
                                <span className="font-black">↑</span>
                            </button>
                        </div>
                        <p className="mt-2 text-[10px] font-bold text-center text-game-text-muted uppercase tracking-tighter">
                            Press Enter to send · AI may provide suggestions
                        </p>
                    </div>
                </div>
            </aside>
        </>
    );
}
