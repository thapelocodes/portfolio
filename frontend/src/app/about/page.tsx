"use client";
import CVIconBlack from "@/assets/curriculum-resume-svgrepo-com.svg";
import CVIconWhite from "@/assets/curriculum-resume-white-svgrepo-com.svg";
import CertIconBlack from "@/assets/certificate-svgrepo-com.svg";
import CertIconWhite from "@/assets/certificate-white-svgrepo-com.svg";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";

// const imageStyle = {
//   maxWidth: "50%",
//   overflow: "hidden",
//   borderRadius: "100% 50% 70% 100% / 60% 60% 100% 100%",
// };

const About = () => {
  const { theme } = useTheme();
  return (
    <main className="min-h-screen text-secondary py-12">
      {/* Company Section */}
      <section>
        <h1 className="text-3xl text-shadow text-primary">
          About thapelocodes™
        </h1>
        <div className="md:flex flex-row-reverse justify-center items-center my-8 mx-6">
          <div className="business-profile max-w-xs md:w-80 mx-auto my-8 md:my-auto self-end"></div>
          <div className="md:flex flex-col md:w-[50%] mx-auto md:mx-0 md:self-center p-3">
            <div className="my-8 text-xl font-bold gap-4 md:text-left md:mx-6">
              <h4>Built on code.</h4>
              <h4>Driven by design.</h4>
              <h4>Focused on results.</h4>
            </div>
            <div className="grid">
              <p className="my-3 text-justify mx-6">
                <span className="text-primary text-white">thapelocodes™</span>{" "}
                is a developer-led digital company founded by Thapelo, a
                software engineer and frontend specialist with a passion for
                turning ideas into fast, interactive web-based applications.
              </p>
              <p className="my-3 text-justify mx-6">
                What began as a solo pursuit has grown into a creative force
                that helps startups and small companies scale their digital
                presence with sleek, high-performance solutions. We specialize
                in building custom web applications and digital platforms that
                don&apos;t just work, they work beautifully.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* The Mind Behind Section */}
      <section className="py-12">
        <h2 className="md:hidden text-2xl text-shadow text-tertiary my-8">
          The Mind Behind thapelocodes™
        </h2>
        <div className="md:flex flex-row-reverse justify-center items-center mx-6">
          <div className="profile max-w-xs md:w-80 mx-auto my-8 md:my-auto self-end"></div>
          <div className="md:flex flex-col md:items-start md:w-[50%] md:self-center p-3">
            <h2 className="hidden md:block text-2xl text-shadow text-tertiaryw-fit mx-auto md:mx-6 my-8 text-left">
              The Mind Behind thapelocodes™
            </h2>
            <p className="my-3 text-justify mx-6 ">
              Hi there! I&apos;m Thapelo and I write code, build experiences and
              help startups grow.
            </p>
            <p className="my-3 text-justify mx-6 ">
              What started as{" "}
              <span className="text-primary text-white">thapelocodes</span> - a
              handle I used to share my dev work - has become a full-fledged
              company focused on delivering smart, scalable solutions. With a
              keen eye for design and a passion for performance, I work closely
              with clients to craft digital products that meet goals{" "}
              <span className="italic">and</span> delight users.
            </p>
            <p className="my-3 text-justify mx-6 ">
              View my resume and certification below to learn more about my
              background and experience.
            </p>
            <div className="flex gap-8 w-fit mx-auto">
              <button className="group my-2 p-2 rounded-full bg-gradient-to-br from-indigo-100 via-slate-200 to-zinc-200 dark:from-indigo-900 dark:via-slate-900 dark:hover:via-late-700 dark:to-zinc-900 transform transition-transform duration-200 hover:scale-125 shadow dark:shadow-indigo-800 hover:shadow-md dark:hover:shadow-indigo-900">
                <a
                  href="https://drive.google.com/file/d/1_AcxiTkjjxHuqUsmirNM4viKe3Vcr8TX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <Image
                    src={theme === "dark" ? CVIconWhite : CVIconBlack}
                    alt="Certificate Icon"
                    width={25}
                    height={25}
                    className=""
                  />
                </a>
                <div className="absolute -left-2 top-12 text-sm opacity-0 group-hover:opacity-100 rounded p-1 bg-gray-500 bg-opacity-50">
                  Resume
                </div>
              </button>
              <button className="group my-2 p-2 rounded-full bg-gradient-to-br from-indigo-100 via-slate-200 to-zinc-200 dark:from-indigo-900 dark:via-slate-900 dark:hover:via-late-700 dark:to-zinc-900 transform transition-transform duration-200 hover:scale-125 shadow dark:shadow-indigo-800 hover:shadow-md dark:hover:shadow-indigo-900">
                <a
                  href="https://drive.google.com/file/d/12RcucTAqtZldT1NLAPbzxvf_Of-uAizv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <Image
                    src={theme === "dark" ? CertIconWhite : CertIconBlack}
                    alt="Certificate Icon"
                    width={25}
                    height={25}
                    className=""
                  />
                  <div className="absolute -left-5 top-12 text-sm opacity-0 group-hover:opacity-100 rounded p-1 bg-gray-500 bg-opacity-50">
                    Certification
                  </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Company values section */}
      <section className="py-12 mx-6">
        <h2 className="text-2xl text-shadow text-tertiary my-8">
          What We Value
        </h2>
        <ul className="py-6 w-fit md:w-11/12 mx-auto list-disc list-inside grid md:grid-cols-2 gap-4 text-justify">
          <li>
            <span className="font-bold">Speed</span> - Fast delivery without
            cutting corners
          </li>
          <li>
            <span className="font-bold">Clarity</span> - Clean code, clear
            communication
          </li>
          <li>
            <span className="font-bold">Collaboration</span> - We listen, adapt
            and work with you
          </li>
          <li>
            <span className="font-bold">Impact</span> - Every decision moves
            your goals forward
          </li>
        </ul>
      </section>
      {/* CTA section */}
      <section className="py-12 mx-6">
        <h2 className="text-2xl text-shadow text-tertiary my-8">
          Ready to Work With Us?
        </h2>
        <p className="py-6 text-justify md:text-center mx-6">
          Whether you&apos;re launching a startup, reimagining a product or need
          a partner to scale your digital tools, we&apos;re here for it.
        </p>
        <p className="py-6 text-justify md:text-center mx-6">
          Let&apos;s build something awesome together!
        </p>
        <div className="py-6 flex md:w-7/12 gap-4 justify-center mx-6 md:mx-auto">
          <button className="text-tertiary text-sm w-full sm:w-7/12 mx-auto md:mx-0 md:w-full bg-tech-blue hover:bg-tech-blue/90 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-tech-purple/20">
            <a href="/contact">Get in Touch</a>
          </button>
          <button className="text-tertiary text-sm w-full sm:w-7/12 mx-auto md:mx-0 md:w-full py-2 shadow px-4 border border-tech-blue hover:bg-tech-blue/10 text-foreground rounded-lg font-medium transition-all duration-300">
            <a href="/projects">View Our Work</a>
          </button>
        </div>
      </section>
    </main>
  );
};

export default About;
