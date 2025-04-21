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
      className={`projects w-full md:max-w-screen-lg my-5 mx-auto md:p-3 pt-20 transition-transform duration-500 ${
        isVisible
          ? "animate-slideInLeft"
          : "opacity-0 transform -translate-x-full"
      }`}
      id="contact"
    >
      <h2 className="w-fit mx-auto text-2xl p-2 text-shadow text-tertiary">
        Contact
      </h2>
      <form
        className="w-9/12 mx-auto py-8 md:max-w-screen-sm flex items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full mx-auto mx-auto">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-inner shadow-lg my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600 focus:outline-0"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-inner shadow-lg my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600 focus:outline-0"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow-inner shadow-lg my-2 pl-5 pt-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600 focus:outline-0"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-6 text-tertiary bg-tech-blue hover:bg-tech-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-tech-blue/20"
          >
            Send
          </button>
        </div>
      </form>
      <p className="text-center">{status}</p>
      {!isContactPage && (
        <button className="text-tertiary text-sm w-full sm:w-7/12 mx-auto lg:mx-0 font-medium py-2 shadow border border-tech-blue hover:bg-tech-blue/10 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300">
          <Link href="/contact" className="">
            Let&apos;s socialize
          </Link>
        </button>
      )}
    </section>
  );
};

export default ContactForm;
