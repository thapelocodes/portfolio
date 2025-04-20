"use client";
import React from "react";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BackIconBlack from "@/assets/back-svgrepo-com.svg";
import BackIconWhite from "@/assets/back-white-svgrepo-com.svg";

const Footer = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const srollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-tertiary text-sm font-medium bg-slate-300 dark:bg-slate-900 flex items-centerj text-left">
      <div className="tech-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 border-b border-border">
          <div>
            <Link href="/" className="flex items-center gap-2 my-4">
              <Image
                src="/thapelocodes-logo.png"
                alt="logo"
                width={35}
                height={35}
                style={{ borderRadius: "50%" }}
                priority
              />
              <h3 className="text-primary text-shadow text-xl font-bold">
                <span className="text-sky-600 dark:text-sky-500">thapelo</span>
                codes
              </h3>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Building scalable digital experiences that drive growth and
              generate leads.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/thapelocodes"
                className="text-muted-foreground hover:text-tech-purple transition-colors"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/thapelocodes"
                className="text-muted-foreground hover:text-tech-purple transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063c1.14 0 2.064.925 2.064 2.063c0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/thapelocodes"
                className="text-muted-foreground hover:text-tech-purple transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:text-right">
            <h4 className="font-semibold my-4">Quick Links</h4>
            <nav className="space-y-3">
              <a
                href={pathname === "/" ? "#about" : "/about"}
                className="block text-muted-foreground hover:text-tech-purple transition-colors"
                onClick={() => scrollToSection("about")}
              >
                About
              </a>
              <a
                href={pathname === "/" ? "#projects" : "/projects"}
                className="block text-muted-foreground hover:text-tech-purple transition-colors"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
              <a
                href={pathname === "/" ? "#blog" : "/blogs"}
                className="block text-muted-foreground hover:text-tech-purple transition-colors"
                onClick={() => scrollToSection("blog")}
              >
                Blog
              </a>
              <a
                href={pathname === "/" ? "#contact" : "/contact"}
                className="block text-muted-foreground hover:text-tech-purple transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-2">
          <p className="m-3 md:ml-0 text-secondary flex">
            &copy; {new Date().getFullYear()} thapelocodes. All rights reserved.
          </p>
          <button
            className="flex items-center gap-2 w-fit mx-auto md:mx-0 text-secondary text-sm p-2 md:pr-0 my-1 hover:text-tech-purple transition-all duration-300 group"
            onClick={srollToTop}
          >
            <span>Back to top</span>
            <Image
              src={theme === "dark" ? BackIconWhite : BackIconBlack}
              alt="Back Icon"
              width={15}
              height={15}
              className="rotate-90 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
