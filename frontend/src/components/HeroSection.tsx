"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import Link from "next/link";
import Image from "next/image";
import Globe from "@/assets/world-svgrepo-com.svg";
import BackIconLight from "@/assets/back-svgrepo-com.svg";
import BackIconDark from "@/assets/back-white-svgrepo-com.svg";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="hero p-2 w-full pt-20 mx-auto my-4 md:max-w-screen-lg"
      id="hero"
    >
      <div className="tech-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-6 text-center lg:text-left">
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-tertiary opacity-0 transition-all duration-1000 ${
                isLoaded && "opacity-100"
              }`}
            >
              Digital Experiences that{" "}
              <span className="gradient-text animate-glow">Look Good</span> and{" "}
              <span className="gradient-text animate-glow">
                Feel Even Better
              </span>
            </h1>
            <p
              className={`text-sm md:text-md lg:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 transition-all duration-1000 delay-300 ${
                isLoaded && "opacity-100"
              }`}
            >
              Personal brand turned company. Led by a developer who gets you
              🫱🏾‍🫲🏾
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start opacity-0 transition-all duration-1000 delay-500 ${
                isLoaded && "opacity-100"
              }`}
            >
              <button
                onClick={handleScrollToContact}
                className="text-xs sm:text-sm md:text-md lg:text-lg text-secondary bg-tech-blue hover:bg-tech-blue/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-tech-purple/20"
              >
                Let&apos;s Build Something Awesome!
              </button>
              <button
                onClick={handleScrollToProjects}
                className="text-xs sm:text-sm md:text-md lg:text-lg text-secondary border border-tech-blue hover:bg-tech-blue/10 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Projects Built
              </button>
            </div>
          </div>

          <div
            className={`flex text-left items-center lg:w-2/5 relative opacity-0 transition-all duration-1000 delay-700 top-20 sm:top-0 ${
              isLoaded && "opacity-100"
            }`}
          >
            <div className="">
              <div className="-inset-0.5 bg-tech-gradient rounded-full blur opacity-70 animate-pulse-slow"></div>
              <div className="p-4 rounded-full absolute -top-20 sm:static lg:absolute lg:-top-20">
                <Image
                  src={Globe}
                  alt="Globe"
                  width={300}
                  height={300}
                  className="text-tech-blue animate-float"
                  // strokeWidth={0.5}
                />
              </div>
            </div>

            <div className="animate-float opacity-80">
              <div className="bg-card border border-tech-purple/30 p-4 rounded-lg shadow-lg bg-background/80 backdrop-blur-md">
                <code className="text-sm dark:text-tech-blue text-tech-darkBlue">
                  <pre className="overflow-x-auto">
                    {`function optimize() {
  const experience = "seamless";
  return performance + growth;
}`}
                  </pre>
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="transform animate-bounce flex items-center justify-center w-full mx-auto my-10 mt-48 sm:mt-10">
          <Link
            href="#about"
            onClick={handleScrollToAbout}
            aria-label="Scroll to about section"
            className=""
          >
            <Image
              src={theme == "dark" ? BackIconDark : BackIconLight}
              alt="Scroll to about section"
              width={40}
              height={40}
              className="-rotate-90"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
