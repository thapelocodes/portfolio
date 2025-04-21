"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`about p-5 pt-20 lg:max-w-screen-lg my-5 mx-auto text-center rounded-2xl ${
        isVisible
          ? "animate-slideInLeft"
          : "opacity-0 transform translate-x-full"
      } transition duration-500`}
      id="about"
    >
      <h2 className="md:hidden text-shadow text-tertiary text-2xl">About Me</h2>
      <div className="md:flex flex-row-reverse items-center">
        <div className="profile max-w-xs md:w-80 mx-auto my-10 self-end"></div>
        <div className="flex flex-col md:items-start md:max-w-xs mx-auto md:self-center">
          <h2 className="hidden md:block text-shadow text-tertiary text-2xl mb-5">
            About Me
          </h2>
          <p className="text-secondary md:text-justify mb-5 md:mb-10">
            Hi there! I&apos;m Thapelo and I code. Of course, as a software
            engineer I do other things too but coding takes the cup.
          </p>
          <button className="text-tertiary text-sm w-full sm:w-7/12 mx-auto md:mx-0 md:w-full font-medium py-2 shadow px-4 border border-tech-blue hover:bg-tech-blue/10 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300">
            <Link href="/about">Learn more about me</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
