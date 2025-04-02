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
      <h2 className="lg:hidden text-shadow text-tertiary text-2xl">About Me</h2>
      <div className="lg:flex flex-row-reverse items-center">
        <div className="profile max-w-xs lg:w-80 mx-auto my-10 self-end">
          {/* <Image
            src="/M-9.jpg"
            alt="Thapelo Michael Moumakoe"
            width={2880}
            height={3600}
            placeholder="blur"
            blurDataURL="/M-9.jpg"
          /> */}
        </div>
        <div className="flex flex-col lg:items-start lg:max-w-xs mx-auto lg:self-center">
          <h2 className="hidden lg:block text-shadow text-tertiary text-2xl mb-5">
            About Me
          </h2>
          <p className="text-secondary lg:text-justify mb-5 lg:mb-10">
            Hi there! I&apos;m Thapelo and I code. Of course, as a software
            engineer I do other things too but coding takes the cup.
          </p>
          <button className="text-tertiary text-sm w-full sm:w-7/12 mx-auto lg:mx-0 lg:w-full font-medium py-2 shadow px-4 bg-gradient-to-tl from-blue-200 to-slate-500 dark:from-cyan-900 dark:to-slate-950 dark:hover:from-cyan-900 dark:hover:to-slate-900 rounded-3xl transform transition-transform duration-200 hover:scale-110">
            <Link href="/about">Learn more about me</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
