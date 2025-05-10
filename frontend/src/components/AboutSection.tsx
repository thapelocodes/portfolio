"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const AboutSection = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if the element is visible in the viewport
  const checkIfVisible = () => {
    if (elementRef.current) {
      const { top, bottom } = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If the element is in the viewport
      if (top < windowHeight - 20) {
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

  return (
    <section
      className={`about p-5 pt-20 lg:max-w-screen-lg my-5 mx-auto text-center rounded-2xl ${
        isVisible ? "animate-slide-in-from-bottom" : ""
      } transition duration-500`}
      id="about"
      ref={elementRef}
    >
      <h2 className="md:hidden text-shadow text-tertiary text-2xl md:text-left md:flex flex-col">
        Built on code. Driven by design. Focused on results.
      </h2>
      <div className="md:flex flex-row-reverse items-center">
        <div className="business-profile max-w-xs md:w-80 mx-auto my-10 self-end"></div>
        <div className="flex flex-col md:items-start md:max-w-xs mx-auto md:self-center">
          <div className="hidden md:block text-shadow text-left text-tertiary text-2xl mb-5">
            <h2>Built on code.</h2>
            <h2>Driven by design.</h2>
            <h2>Focused on results.</h2>
          </div>
          <p className="text-secondary md:text-justify mb-5 md:mb-10">
            <span className="italic">
              A dev-led company born from a personal brand.
            </span>{" "}
            We craft websites and web apps that don’t just look good - they feel
            even better.
          </p>
          <button className="text-tertiary text-sm w-full sm:w-7/12 mx-auto md:mx-0 md:w-full font-medium py-2 shadow px-4 border border-tech-blue hover:bg-tech-blue/10 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300">
            <Link href="/about">Learn more about us</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
