import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const handleClick = () => {
    setOpenMenu(!openMenu);
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

  return (
    <header className="z-10 dark:text-white py-2 flex fixed w-full">
      <div className="container mx-8 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/thapelocodes-logo.png"
            alt="logo"
            width={windowSize <= 750 ? 45 : 55}
            height={windowSize <= 750 ? 45 : 55}
            style={{ borderRadius: "50%" }}
          />
        </Link>
        <div className="flex">
          {windowSize > 750 && (
            <nav className="flex">
              <Link href="/" className="pr-2">
                Home
              </Link>
              <Link href="/projects" className="pr-2">
                Projects
              </Link>
              <Link href="/blogs" className="pr-2">
                Blog
              </Link>
              <Link href="/services" className="pr-2">
                Services
              </Link>
              <Link href="/about" className="pr-2">
                About
              </Link>
              <Link href="/contact" className="">
                Contact
              </Link>
            </nav>
          )}
          <button
            onClick={handleClick}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 mx-auto border border-slate-700 dark:border-slate-400 rounded"
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
          {openMenu && windowSize <= 750 && (
            <div className="flex">
              <nav className="flex flex-col md:flex-row">
                <Link href="/" className="px-2">
                  Home
                </Link>
                <Link href="/projects" className="px-2">
                  Projects
                </Link>
                <Link href="/blogs" className="px-2">
                  Blog
                </Link>
                <Link href="/services" className="px-2">
                  Services
                </Link>
                <Link href="/about" className="px-2">
                  About
                </Link>
                <Link href="/contact" className="px-2">
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
