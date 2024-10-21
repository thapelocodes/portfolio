"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import HomeIconBlack from "@/assets/home-svgrepo-com.svg";
import HomeIconWhite from "@/assets/home-white-svgrepo-com.svg";
import AboutIconBlack from "@/assets/about-svgrepo-com.svg";
import AboutIconWhite from "@/assets/about-white-svgrepo-com.svg";
import ProjectsIconBlack from "@/assets/project-14px-svgrepo-com.svg";
import ProjectsIconWhite from "@/assets/project-14px-white-svgrepo-com.svg";
import BlogsIconBlack from "@/assets/blog-svgrepo-com.svg";
import BlogsIconWhite from "@/assets/blog-white-svgrepo-com.svg";
import ContactIconBlack from "@/assets/contact-mobile-svgrepo-com.svg";
import ContactIconWhite from "@/assets/contact-mobile-white-svgrepo-com.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setOpenMenu(!openMenu);
    }
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
        console.log("Is menu open?", `${openMenu ? "Yes" : "No"}`);
      };
    }
  }, []);

  return (
    <header className="z-10 dark:text-white py-2 flex fixed w-full shadow-lg">
      <div className="container mx-8 flex justify-between items-center text-tertiary font-medium text-xs sm:text-sm md:text-base">
        <Link href="/" className="max-w-10 md:max-w-12 drop-shadow-lg">
          <Image
            src="/thapelocodes-logo.png"
            alt="logo"
            width={500}
            height={500}
            style={{ borderRadius: "50%" }}
            priority
          />
        </Link>
        <div className="flex flex-col md:flex-row items-center">
          {windowSize >= 768 && (
            <nav className="flex w-72 justify-between">
              <button
                onClick={handleClick}
                className="m-1 group transform transition-transform duration-200 hover:scale-125"
              >
                <Link href="/" className="font-semibold pr-2">
                  <Image
                    src={HomeIconBlack}
                    alt="Home Icon"
                    width={25}
                    height={25}
                    className="h-full dark:hidden"
                  />
                  <Image
                    src={HomeIconWhite}
                    alt="Home Icon"
                    width={25}
                    height={25}
                    className="h-full hidden dark:block"
                  />
                </Link>
                <div className="text-white -left-2 top-12 absolute bg-gray-500 text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Home
                </div>
              </button>
              <button className="m-1 group transform transition-transform duration-200 hover:scale-125">
                <Link href="/about" className="font-semibold pr-2">
                  <Image
                    src={AboutIconBlack}
                    alt="About Icon"
                    width={25}
                    height={25}
                    className="h-full dark:hidden"
                  />
                  <Image
                    src={AboutIconWhite}
                    alt="About Icon"
                    width={25}
                    height={25}
                    className="h-full hidden dark:block"
                  />
                </Link>
                <div className="text-white -left-2 top-12 absolute bg-gray-500 text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  About
                </div>
              </button>
              {/* <Link
                href="/services"
                className="pr-2 transform transition-transform duration-200 hover:scale-125"
              >
                Services
              </Link> */}
              <button className="m-1 group transform transition-transform duration-200 hover:scale-125">
                <Link href="/projects" className="font-semibold pr-2">
                  <Image
                    src={ProjectsIconBlack}
                    alt="Projects Icon"
                    width={25}
                    height={25}
                    className="h-full dark:hidden"
                  />
                  <Image
                    src={ProjectsIconWhite}
                    alt="Projects Icon"
                    width={25}
                    height={25}
                    className="h-full hidden dark:block"
                  />
                </Link>
                <div className="text-white -left-4 top-12 absolute bg-gray-500 text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Projects
                </div>
              </button>
              <button className="m-1 group transform transition-transform duration-200 hover:scale-125">
                <Link href="/blogs" className="font-semibold pr-2">
                  <Image
                    src={BlogsIconBlack}
                    alt="Blog"
                    width={25}
                    height={25}
                    className="h-full dark:hidden"
                  />
                  <Image
                    src={BlogsIconWhite}
                    alt="Blog"
                    width={25}
                    height={25}
                    className="h-full hidden dark:block"
                  />
                </Link>
                <div className="text-white -left-2 top-12 absolute bg-gray-500 text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Blogs
                </div>
              </button>
              <button className="m-1 group transform transition-transform duration-200 hover:scale-125">
                <Link href="/contact" className="font-semibold">
                  <Image
                    src={ContactIconBlack}
                    alt="Blog"
                    width={25}
                    height={25}
                    className="h-full dark:hidden"
                  />
                  <Image
                    src={ContactIconWhite}
                    alt="Blog"
                    width={25}
                    height={25}
                    className="h-full hidden dark:block"
                  />
                </Link>
                <div className="text-white -left-4 top-12 absolute bg-gray-500 text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Contact
                </div>
              </button>
            </nav>
          )}
          <button
            onClick={handleClick}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 mx-auto hover:shadow hover:shadow-slate-700 dark:hover:shadow-slate-400 rounded"
          >
            <span
              className={`block w-9/12 h-0.5 bg-slate-700 dark:bg-slate-400 transform transition duration-200 ease-in-out ${
                openMenu ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-9/12 h-0.5 bg-slate-700 dark:bg-slate-400 transition duration-200 ease-in-out my-1 ${
                openMenu ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-9/12 h-0.5 bg-slate-700 dark:bg-slate-400 transform transition duration-200 ease-in-out ${
                openMenu ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
          {openMenu && windowSize < 768 && (
            <div
              ref={menuRef}
              onClick={handleClick}
              className="m-3 p-3 absolute mt-14 right-1 rounded-lg bg-gradient-to-br from-blue-100 via-slate-200 to-zinc-200 dark:from-blue-950 dark:via-slate-900 dark:to-zinc-950 border border-transparent shadow-md shadow-indigo-300 dark:shadow-indigo-950 animate-slide-in-from-top"
            >
              <nav className="flex flex-col h-72 w-32 justify-between">
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link
                    href="/"
                    className="font-semibold px-2 flex items-center"
                  >
                    <Image
                      src={HomeIconBlack}
                      alt="Home Icon"
                      width={25}
                      height={25}
                      className="dark:hidden mr-2"
                    />
                    <Image
                      src={HomeIconWhite}
                      alt="Home Icon"
                      width={25}
                      height={25}
                      className="hidden dark:block mr-2"
                    />
                    Home
                  </Link>
                </button>
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link
                    href="/about"
                    className="font-semibold px-2 flex items-center"
                  >
                    <Image
                      src={AboutIconBlack}
                      alt="About Icon"
                      width={25}
                      height={25}
                      className="dark:hidden mr-2"
                    />
                    <Image
                      src={AboutIconWhite}
                      alt="About Icon"
                      width={25}
                      height={25}
                      className="hidden dark:block mr-2"
                    />
                    About
                  </Link>
                </button>
                {/* <Link
                  href="/services"
                  className="px-2 transform transition-transform duration-200 hover:scale-125"
                >
                  Services
                </Link> */}
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link
                    href="/projects"
                    className="font-semibold px-2 flex items-center"
                  >
                    <Image
                      src={ProjectsIconBlack}
                      alt="Projects Icon"
                      width={25}
                      height={25}
                      className="dark:hidden mr-2"
                    />
                    <Image
                      src={ProjectsIconWhite}
                      alt="Projects Icon"
                      width={25}
                      height={25}
                      className="hidden dark:block mr-2"
                    />
                    Projects
                  </Link>
                </button>
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link
                    href="/blogs"
                    className="font-semibold px-2 flex items-center"
                  >
                    <Image
                      src={BlogsIconBlack}
                      alt="Blog"
                      width={25}
                      height={25}
                      className="dark:hidden mr-2"
                    />
                    <Image
                      src={BlogsIconWhite}
                      alt="Blog"
                      width={25}
                      height={25}
                      className="hidden dark:block mr-2"
                    />
                    Blogs
                  </Link>
                </button>
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link
                    href="/contact"
                    className="font-semibold px-2 flex items-center"
                  >
                    <Image
                      src={ContactIconBlack}
                      alt="Blog"
                      width={25}
                      height={25}
                      className="dark:hidden mr-2"
                    />
                    <Image
                      src={ContactIconWhite}
                      alt="Blog"
                      width={25}
                      height={25}
                      className="hidden dark:block mr-2"
                    />
                    Contact
                  </Link>
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
