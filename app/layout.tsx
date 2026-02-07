import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
        className={`${outfit.variable} ${jakarta.variable} antialiased min-h-screen bg-[var(--background)]`}
      >
        <div className="flex min-h-screen">
          <Nav />
          <main className="flex-1 md:pl-72">
            {children}
          </main>
          <ChatSidebar />
        </div>
      </body>
    </html>
  );
}
