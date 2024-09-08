import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageStyle = {
  // maxWidth: "10%",
};

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
        <Link href="/" style={ImageStyle} className="max-w-10 md:max-w-12">
          <Image
            src="/thapelocodes-logo.png"
            alt="logo"
            width={500}
            height={500}
            style={{ borderRadius: "50%" }}
          />
        </Link>
        <div className="flex flex-col">
          {windowSize >= 768 && (
            <nav className="flex">
              <Link
                href="/"
                className="pr-2 transform transition-transform duration-200 hover:scale-110"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="pr-2 transform transition-transform duration-200 hover:scale-110"
              >
                About
              </Link>
              {/* <Link
                href="/services"
                className="pr-2 transform transition-transform duration-200 hover:scale-110"
              >
                Services
              </Link> */}
              <Link
                href="/projects"
                className="pr-2 transform transition-transform duration-200 hover:scale-110"
              >
                Projects
              </Link>
              <Link
                href="/blogs"
                className="pr-2 transform transition-transform duration-200 hover:scale-110"
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className="transform transition-transform duration-200 hover:scale-110"
              >
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
          {openMenu && windowSize < 768 && (
            <div className="flex">
              <nav className="flex flex-col">
                <Link
                  href="/"
                  className="px-2 transform transition-transform duration-200 hover:scale-110"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-2 transform transition-transform duration-200 hover:scale-110"
                >
                  About
                </Link>
                {/* <Link
                  href="/services"
                  className="px-2 transform transition-transform duration-200 hover:scale-110"
                >
                  Services
                </Link> */}
                <Link
                  href="/projects"
                  className="px-2 transform transition-transform duration-200 hover:scale-110"
                >
                  Projects
                </Link>
                <Link
                  href="/blogs"
                  className="px-2 transform transition-transform duration-200 hover:scale-110"
                >
                  Blogs
                </Link>
                <Link
                  href="/contact"
                  className="px-2 transform transition-transform duration-200 hover:scale-110"
                >
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
