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
    <html lang="en">
      <body className={`font-roboto antialiased`}>
        <div className="">
          {/* <QueryClientWrapper> */}
          {/* <AuthProviderWrapper> */}
          <Header />
          <div className="pt-12">{children}</div>
          <Footer />
          {/* </AuthProviderWrapper> */}
          {/* </QueryClientWrapper> */}
        </div>
      </body>
    </html>
  );
}
