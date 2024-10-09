import React from "react";
import type { Metadata } from "next";
// import { AuthProviderWrapper } from "@/components/AuthProviderWrapper";
// import { QueryClientWrapper } from "@/components/QueryClientWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

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
      <body className={`text-secondary antialiased`}>
        <div className="">
          {/* <QueryClientWrapper> */}
          {/* <AuthProviderWrapper> */}
          <Header />
          <div className="pt-16 md:pt-24">{children}</div>
          <Footer />
          {/* </AuthProviderWrapper> */}
          {/* </QueryClientWrapper> */}
        </div>
      </body>
    </html>
  );
}
