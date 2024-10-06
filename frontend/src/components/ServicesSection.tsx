"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const ServicesSection = () => {
  const [windowSize, setWindowSize] = useState(0);

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
    <section className="services w-full rounded-2xl my-2 md:max-w-screen-sm mx-auto py-2 px-3 overflow-hidden">
      <h2 className="text-xl m-2">Services & Skills</h2>
      <div className="flex flex-col md:flex-row justify-between-2 md:whitespace-nowrap scrollContainer">
        <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
          <Link href="/services/web-dev" className="">
            Web Development
          </Link>
        </div>
        <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
          <Link href="/services/app-dev" className="">
            App Development
          </Link>
        </div>
        <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
          <Link href="/services/frontend" className="">
            Frontend Development
          </Link>
        </div>
        <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
          <Link href="/services/api-dev" className="">
            API Development and Integration
          </Link>
        </div>
        <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
          <Link href="/services/seo" className="">
            Technical SEO
          </Link>
        </div>
        <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
          <Link href="/services/ui-ux" className="">
            UI/UX Design & Development
          </Link>
        </div>

        {
          /* Duplicate for seamless scrolling */
          windowSize >= 768 && (
            <>
              <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
                <Link href="/services/web-dev" className="">
                  Web Development
                </Link>
              </div>
              <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
                <Link href="/services/app-dev" className="">
                  App Development
                </Link>
              </div>
              <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
                <Link href="/services/frontend" className="">
                  Frontend Development
                </Link>
              </div>
              <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
                <Link href="/services/api-dev" className="">
                  API Development and Integration
                </Link>
              </div>
              <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
                <Link href="/services/seo" className="">
                  Technical SEO
                </Link>
              </div>
              <div className="w-fit my-1 mx-auto md:mx-1 rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 p-1 transform transition-transform duration-300 hover:scale-110">
                <Link href="/services/ui-ux" className="">
                  UI/UX Design & Development
                </Link>
              </div>
            </>
          )
        }
      </div>
      <div className="w-fit mx-auto bg-gradient-to-br from-blue-200 to-slate-500 dark:from-blue-950 dark:to-slate-900 dark:hover:from-blue-900 dark:hover:to-slate-800 rounded-xl my-1 py-2 px-4 transform transition-transform duration-300 hover:scale-110">
        <Link href="/services">See more services</Link>
      </div>
    </section>
  );
};

export default ServicesSection;
