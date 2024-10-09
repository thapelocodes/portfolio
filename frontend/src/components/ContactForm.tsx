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
      className={`projects md:max-w-screen-lg my-5 mx-auto p-3 rounded-xl shadow-lg dark:shadow-dark transition-transform duration-500 ${
        isVisible
          ? "animate-slideInLeft"
          : "opacity-0 transform -translate-x-full"
      }`}
    >
      <h2 className="w-fit mx-auto text-2xl p-2 text-shadow text-tertiary">
        Contact
      </h2>
      <form
        className="w-9/12 mx-auto md:max-w-screen-sm flex items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full mx-auto mx-auto">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow-inner shadow-lg my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow-inner shadow-lg my-2 h-10 pl-5 pb-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
            required
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow-inner shadow-lg my-2 pl-5 pt-1 rounded-xl hover:border-2 hover:border-slate-800 dark:bg-gray-600"
            required
          ></textarea>
          <button
            type="submit"
            className="text-tertiary text-sm font-medium shadow mx-auto py-1 my-2 rounded-2xl w-20 bg-gradient-to-tl from-indigo-500 to-slate-300 dark:from-indigo-900 dark:to-slate-950 dark:hover:from-indigo-700 dark:hover:to-slate-900 dark:text-white transform transition-transform duration-200 hover:scale-110"
          >
            Send
          </button>
        </div>
      </form>
      <p className="text-center">{status}</p>
      {!isContactPage && (
        <button className="text-tertiary text-sm font-medium shadow w-fit mx-auto p-2 px-4 bg-gradient-to-br from-blue-200 to-slate-500 dark:from-blue-950 dark:to-slate-900 dark:hover:from-blue-900 dark:hover:to-slate-800 rounded-3xl my-1 transform transition-transform duration-200 hover:scale-110">
          <Link href="/contact" className="">
            Let&apos;s socialize
          </Link>
        </button>
      )}
    </section>
  );
};

export default ContactForm;
