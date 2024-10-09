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
      className={`about p-5 md:max-w-screen-lg my-5 mx-auto text-center rounded-2xl shadow-lg dark:shadow-dark ${
        isVisible
          ? "animate-slideInLeft"
          : "opacity-0 transform translate-x-full"
      } transition duration-500`}
    >
      <h2 className="md:hidden text-shadow text-tertiary text-2xl">About Me</h2>
      <div className="md:flex flex-row-reverse items-center">
        <div className="profile sm:max-w-xs sm:ma mx-auto my-5 self-end">
          <Image
            src="/M-9.jpg"
            alt="Thapelo Michael Moumakoe"
            width={2880}
            height={3600}
            placeholder="blur"
            blurDataURL="/M-9.jpg"
          />
        </div>
        <div className="flex flex-col md:items-start md:max-w-xs mx-auto md:self-center">
          <h2 className="hidden md:block text-shadow text-tertiary text-2xl mb-5">
            About Me
          </h2>
          <p className="text-secondary md:text-justify mb-5 mr-5">
            Hi there! I&apos;m Thapelo and I code. Of course, as a software
            engineer I do other things too but coding takes the cup.
          </p>
          <button className="text-tertiary text-sm w-7/12 md:w-fit mx-auto md:mx-0 font-medium py-2 shadow px-4 bg-gradient-to-tl from-blue-200 to-slate-500 dark:from-cyan-900 dark:to-slate-950 dark:hover:from-cyan-900 dark:hover:to-slate-900 rounded-3xl transform transition-transform duration-200 hover:scale-110">
            <Link href="/about">Learn more about me</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
