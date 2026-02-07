import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Career Journey | FSU Career Center",
  description: "Your gamified, personalized career roadmap—resume building, mock interviews, job matches, and real rewards.",
};

import { Nav } from "./components/Nav";
import { ChatSidebar } from "./components/ChatSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[var(--background)]`}
      >
        <div className="flex min-h-screen">
          <Nav />
          <main className="flex-1 md:pl-64">
            {children}
          </main>
          <ChatSidebar />
        </div>
      </body>
    </html>
  );
}
