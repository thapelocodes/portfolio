"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SunIconBlack from "@/assets/sun-svgrepo-com.svg";
import SunIconWhite from "@/assets/sun-white-svgrepo-com.svg";
import MoonIconBlack from "@/assets/moon-svgrepo-com.svg";
import MoonIconWhite from "@/assets/moon-white-svgrepo-com.svg";
import { useTheme } from "@/components/ThemeProvider";
import MenuIconBlack from "@/assets/menu-svgrepo-com.svg";
import MenuIconWhite from "@/assets/menu-white-svgrepo-com.svg";
import XIconBlack from "@/assets/cross-svgrepo-com.svg";
import XIconWhite from "@/assets/cross-white-svgrepo-com.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(0);
  const menuRef = useRef<HTMLButtonElement>(null);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node))
      setOpenMenu(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Only run this code on the client side
      setWindowSize(window.innerWidth);

      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("click", handleClickOutside);

      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }
  });

  return (
    <header
      className={`z-10 py-2 px-2 flex fixed w-full transition-all duration-300 flex justify-between items-center text-tertiary font-medium text-xs sm:text-sm md:text-base transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="w-48 drop-shadow-lg flex items-center justify-between ml-3"
      >
        <Image
          src="/thapelocodes-logo.png"
          alt="logo"
          width={35}
          height={35}
          style={{ borderRadius: "50%" }}
          priority
        />
        <p className="text-primary text-shadow text-center text-xl">
          <span className="text-sky-600 dark:text-sky-500">thapelo</span>codes
        </p>
      </Link>
      <div className="flex flex-row items-center text-center">
        {windowSize >= 768 && (
          <nav className="flex justify-between">
            <button
              className={`m-1 grow-1 transform transition-transform duration-200 hover:text-blue-700 mx-6 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === "/" &&
                "text-blue-700 dark:text-blue-400 after:w-full"
              }`}
            >
              <Link href="/" className="font-semibold">
                HOME
              </Link>
            </button>
            <button
              className={`m-1 grow-1 transform transition-transform duration-200 hover:text-blue-700 mx-6 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === "/about" &&
                "text-blue-700 dark:text-blue-400 after:w-full"
              }`}
            >
              <Link href="/about" className="font-semibold">
                ABOUT
              </Link>
            </button>
            <button
              className={`m-1 grow-1 transform transition-transform duration-200 hover:text-blue-700 mx-6 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === "/projects" &&
                "text-blue-700 dark:text-blue-400 after:w-full"
              }`}
            >
              <Link href="/projects" className="font-semibold">
                PROJECTS
              </Link>
            </button>
            <button
              className={`m-1 grow-1 transform transition-transform duration-200 hover:text-blue-700 mx-6 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === "/blogs" &&
                "text-blue-700 dark:text-blue-400 after:w-full"
              }`}
            >
              <Link href="/blogs" className="font-semibold">
                BLOG
              </Link>
            </button>
            <button
              className={`m-1 grow-1 transform transition-transform duration-200 hover:text-blue-700 mx-6 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full ${
                pathname === "/contact" &&
                "text-blue-700 dark:text-blue-400 after:w-full"
              }`}
            >
              <Link href="/contact" className="font-semibold">
                CONTACT
              </Link>
            </button>
          </nav>
        )}
        <div className="flex items-center w-20 p-2 h-full justify-between">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 mx-auto hover:shadow hover:shadow-slate-700 dark:hover:shadow-slate-400 rounded-full"
          >
            <Image
              src={theme === "dark" ? MoonIconWhite : MoonIconBlack}
              alt="Theme Toggle"
              width={25}
              height={25}
              className="dark:hidden cursor-pointer mx-auto"
            />
            <Image
              src={theme === "dark" ? SunIconWhite : SunIconBlack}
              alt="Theme Toggle"
              width={25}
              height={25}
              className="hidden dark:block cursor-pointer mx-auto"
            />
          </button>
          <button
            ref={menuRef}
            onClick={handleClick}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 mx-auto hover:shadow hover:shadow-slate-700 dark:hover:shadow-slate-400 rounded-full"
          >
            <Image
              src={openMenu ? XIconBlack : MenuIconBlack}
              alt="Menu Icon"
              width={25}
              height={25}
              className="dark:hidden cursor-pointer mx-auto z-10"
            />
            <Image
              src={openMenu ? XIconWhite : MenuIconWhite}
              alt="Menu Icon"
              width={25}
              height={25}
              className="hidden dark:block cursor-pointer mx-auto z-10"
            />
          </button>
        </div>
        {openMenu && windowSize < 768 && (
          <div className="p-3 absolute mt-[16rem] w-full right-0 shadow-md shadow-indigo-300 dark:shadow-indigo-950 animate-slide-in-from-top bg-background/80 backdrop-blur-md">
            <nav className="flex flex-col h-80 justify-around">
              <button
                onClick={handleClick}
                className="my-1 transform transition-transform duration-200 hover:text-blue-700 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link
                  href="/"
                  className="font-semibold px-2 flex justify-center"
                >
                  HOME
                </Link>
              </button>
              <button
                onClick={handleClick}
                className="my-1 transform transition-transform duration-200 hover:text-blue-700 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link
                  href="/about"
                  className="font-semibold px-2 flex justify-center"
                >
                  ABOUT
                </Link>
              </button>
              <button
                onClick={handleClick}
                className="my-1 transform transition-transform duration-200 hover:text-blue-700 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link
                  href="/projects"
                  className="font-semibold px-2 flex justify-center"
                >
                  PROJECTS
                </Link>
              </button>
              <button
                onClick={handleClick}
                className="my-1 transform transition-transform duration-200 hover:text-blue-700 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link
                  href="/blogs"
                  className="font-semibold px-2 flex justify-center"
                >
                  BLOG
                </Link>
              </button>
              <button
                onClick={handleClick}
                className="my-1 transform transition-transform duration-200 hover:text-blue-700 dark:hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-blue-700 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                <Link
                  href="/contact"
                  className="font-semibold px-2 flex justify-center"
                >
                  CONTACT
                </Link>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
