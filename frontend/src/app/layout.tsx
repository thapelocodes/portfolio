import React from "react";
import type { Metadata } from "next";
// import { AuthProviderWrapper } from "@/components/AuthProviderWrapper";
// import { QueryClientWrapper } from "@/components/QueryClientWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata: Metadata = {
  title: "thapelocodes",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`text-secondary antialiased text-blue-950 dark:text-slate-200`}
      >
        <ThemeProvider defaultTheme="dark">
          <div className="">
            {/* <QueryClientWrapper> */}
            {/* <AuthProviderWrapper> */}
            <ParticlesBackground />
            <Header />
            <div className="pt-16 md:pt-24">{children}</div>
            <Footer />
            {/* </AuthProviderWrapper> */}
            {/* </QueryClientWrapper> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
