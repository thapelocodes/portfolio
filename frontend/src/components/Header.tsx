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
    <header className="z-10 dark:text-white py-2 flex fixed w-full shadow-lg">
      <div className="container mx-8 flex justify-between items-center text-tertiary font-medium text-xs sm:text-sm md:text-base">
        <Link href="/" className="max-w-10 md:max-w-12 drop-shadow-lg">
          <Image
            src="/thapelocodes-logo.png"
            alt="logo"
            width={500}
            height={500}
            style={{ borderRadius: "50%" }}
          />
        </Link>
        <div className="flex flex-col md:flex-row items-center">
          {windowSize >= 768 && (
            <nav className="flex">
              <button className="m-1 transform transition-transform duration-200 hover:scale-125">
                <Link href="/" className="font-semibold pr-2">
                  Home
                </Link>
              </button>
              <button className="m-1 transform transition-transform duration-200 hover:scale-125">
                <Link href="/about" className="font-semibold pr-2">
                  About
                </Link>
              </button>
              {/* <Link
                href="/services"
                className="pr-2 transform transition-transform duration-200 hover:scale-125"
              >
                Services
              </Link> */}
              <button className="m-1 transform transition-transform duration-200 hover:scale-125">
                <Link href="/projects" className="font-semibold pr-2">
                  Projects
                </Link>
              </button>
              <button className="m-1 transform transition-transform duration-200 hover:scale-125">
                <Link href="/blogs" className="font-semibold pr-2">
                  Blogs
                </Link>
              </button>
              <button className="m-1 transform transition-transform duration-200 hover:scale-125">
                <Link href="/contact" className="font-semibold">
                  Contact
                </Link>
              </button>
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
            <div className="m-3">
              <nav className="flex flex-col">
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link href="/" className="font-semibold px-2">
                    Home
                  </Link>
                </button>
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link href="/about" className="font-semibold px-2">
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
                  <Link href="/projects" className="font-semibold px-2">
                    Projects
                  </Link>
                </button>
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link href="/blogs" className="font-semibold px-2">
                    Blogs
                  </Link>
                </button>
                <button className="my-1 transform transition-transform duration-200 hover:scale-125">
                  <Link href="/contact" className="font-semibold px-2">
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
