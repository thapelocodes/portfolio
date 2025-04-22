"use client";
// import div from "next/div";
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
    <section className="services w-full rounded-2xl my-2 md:max-w-screen-sm mx-auto py-8 px-3 overflow-hidden">
      <h2 className="text-shadow text-tertiary text-2xl mb-5">
        Services & Skills
      </h2>
      <ul className="flex flex-col md:flex-row md:whitespace-nowrap sliderContainer gap-4">
        <li className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
          Web Development
        </li>
        <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
          App Development
        </div>
        <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
          Frontend Development
        </div>
        <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
          API Development
        </div>
        <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
          API Integration
        </div>
        <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
          Technical SEO
        </div>
        <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
          UI/UX Design
        </div>

        {
          /* Duplicate for seamless scrolling */
          windowSize >= 768 && (
            <>
              <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
                Web Development
              </div>
              <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
                App Development
              </div>
              <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
                Frontend Development
              </div>
              <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
                API Development
              </div>
              <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
                API Integration
              </div>
              <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
                Technical SEO
              </div>
              <div className="w-full sm:w-3/4 my-1 mx-auto rounded-xl bg-gradient-to-tl from-slate-500 dark:from-slate-700 py-4 px-8 transform transition-transform duration-300 hover:scale-110">
                UI/UX Design
              </div>
            </>
          )
        }
      </ul>
    </section>
  );
};

export default ServicesSection;
