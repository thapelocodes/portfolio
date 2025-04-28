"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import api from "@/utils/api";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const [screenWidth, setScreenWidth] = useState(0);

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the element is visible in the viewport
  const checkIfVisible = () => {
    if (elementRef.current) {
      const { top, bottom } = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If the element is in the viewport
      if (top < windowHeight - 200 && bottom > 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfVisible);
    checkIfVisible(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", checkIfVisible);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await api.post("/contacts", { name, email, message });
      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setStatus("Failed to send message");
    }
  };

  return (
    <section
      ref={elementRef}
      className={`projects w-full md:max-w-screen-lg my-5 mx-auto md:p-6 mt-20 transition-transform duration-500 ${
        isVisible
          ? "animate-slideInLeft"
          : "opacity-0 transform -translate-x-full"
      }`}
      id="contact"
    >
      <h2 className="w-fit mx-auto text-2xl p-2 text-shadow text-tertiary">
        Let&apos;s Connect
      </h2>
      <form
        className="w-full md:w-[80%] mx-auto my-8 py-8 px-12 md:max-w-screen-sm items-center bg-gradient-to-t from-tech-white dark:from-tech-darkBlue to-transparent backdrop-blur-md shadow-md rounded-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-6 w-full mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between py-4">
            <label className="text-left flex flex-col w-full md:w-[50%]">
              Name
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow-inner shadow-lg my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600 focus:outline-0 md:w-full placeholder:text-sm md:placeholder:text-base"
                required
              />
            </label>
            <label className="text-left flex flex-col w-full md:w-[50%]">
              Email
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-inner shadow-lg my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600 focus:outline-0 md:w-full placeholder:text-sm md:placeholder:text-base"
                required
              />
            </label>
          </div>
          <label className="text-left flex flex-col">
            What are you looking for?
            <textarea
              placeholder="Tell me about your project"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow-inner shadow-lg my-2 pl-5 pt-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600 focus:outline-0 min-h-[150px] placeholder:text-sm md:placeholder:text-base"
              required
            ></textarea>
          </label>
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-slate-600 to-slate-400 my-8"></div>
        <div className="text-xs md:text-sm flex flex-col-reverse md:flex-row items-center justify-between w-full mx-auto gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-tertiary font-bold">Email</span>
            info@thapelocodes.me
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-tertiary font-bold">Follow me</span>
            <div className="flex gap-8 md:gap-4 text-muted-foreground">
              <a
                href="https://github.com/thapelocodes"
                className="text-muted-foreground hover:text-tech-lightBlue transition-colors"
                aria-label="GitHub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={screenWidth < 768 ? "17" : "20"}
                  height={screenWidth < 768 ? "17" : "20"}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/thapelocodes"
                className="text-muted-foreground hover:text-tech-lightBlue transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={screenWidth < 768 ? "17" : "20"}
                  height={screenWidth < 768 ? "17" : "20"}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065c0-1.138.92-2.063 2.063-2.063c1.14 0 2.064.925 2.064 2.063c0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/thapelocodes"
                className="text-muted-foreground hover:text-tech-lightBlue transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={screenWidth < 768 ? "17" : "20"}
                  height={screenWidth < 768 ? "17" : "20"}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="text-tertiary bg-tech-blue hover:bg-tech-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-tech-blue/20"
          >
            Send
          </button>
        </div>
      </form>
      <p className="text-center">{status}</p>
      {!isContactPage && (
        <button className="text-tertiary text-sm w-full sm:w-7/12 mx-auto mt-8 lg:mx-0 font-medium py-2 shadow border border-tech-blue hover:bg-tech-blue/10 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300">
          <Link href="/contact" className="">
            Let&apos;s socialize
          </Link>
        </button>
      )}
    </section>
  );
};

export default ContactForm;
