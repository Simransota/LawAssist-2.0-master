import type { Metadata } from "next";
// imported font

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import ChatbotButton from "./components/chatbot-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LawAssist - Connect, Consult, and Conquer Legal Challenges.",
  description: "",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true} lang="en" className="dark">
      <body className={inter.className}>
        <div
          className="relative w-full flex items-center
        justify-center"
        >
          <Navbar />
        </div>
        <ChatbotButton />
        {children}
      </body>
    </html>
  );
}
