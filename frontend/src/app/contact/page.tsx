"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import XLogoBlack from "@/assets/X_logo_2023_original.svg";
import XLogoWhite from "@/assets/X_logo_2023_white_original.svg";
import LinkedInLogoBlack from "@/assets/linkedin-svgrepo-com.svg";
import LinkedInLogoWhite from "@/assets/linkedin-white-svgrepo-com.svg";
import InstaLogoBlack from "@/assets/instagram-svgrepo-com.svg";
import InstaLogoWhite from "@/assets/instagram-white-svgrepo-com.svg";
import GitHubLogoBlack from "@/assets/github-black-142-svgrepo-com.svg";
import GitHubLogoWhite from "@/assets/github-white-142-svgrepo-com.svg";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <main className="p-8 pt-0 min-h-screen md:max-w-screen-sm mx-auto overflow-hidden">
      <h1 className="text-3xl text-shadow text-primary">Contact</h1>
      <h3 className="my-4">
        Connect with me across multiple platforms as{" "}
        <em className="text-primary">thapelocodes</em>
      </h3>
      <ul className="text-tertiary w-fit grid grid-cols-2 gap-6 my-12 scrollContainer mx-auto">
        <li>
          <a
            href="https://linkedin.com/in/thapelocodes"
            className="flex w-44 justify-between"
          >
            <Image
              src={LinkedInLogoBlack}
              alt="LinkedIn Logo"
              width={25}
              height={25}
              className="dark:hidden"
            />
            <Image
              src={LinkedInLogoWhite}
              alt="LinkedIn Logo"
              width={25}
              height={25}
              className="hidden dark:block"
            />
            in/thapelocodes
          </a>
        </li>
        <li>
          <a
            href="https://github.com/thapelocodes"
            className="flex w-44 justify-between"
          >
            <Image
              src={GitHubLogoBlack}
              alt="GitHub Logo"
              width={25}
              height={25}
              className="dark:hidden"
            />
            <Image
              src={GitHubLogoWhite}
              alt="GitHub Logo"
              width={25}
              height={25}
              className="hidden dark:block"
            />
            @thapelocodes
          </a>
        </li>
        <li>
          <a
            href="https://x.com/thapelocodes"
            className="flex w-44 justify-between"
          >
            <Image
              src={XLogoBlack}
              alt="X Logo"
              width={25}
              height={25}
              className="dark:hidden"
            />
            <Image
              src={XLogoWhite}
              alt="X Logo"
              width={25}
              height={25}
              className="hidden dark:block"
            />
            @thapelocodes
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/thapelocodes"
            className="flex w-44 justify-between"
          >
            <Image
              src={InstaLogoBlack}
              alt="Instagram Logo"
              width={25}
              height={25}
              className="dark:hidden"
            />
            <Image
              src={InstaLogoWhite}
              alt="Instagram Logo"
              width={25}
              height={25}
              className="hidden dark:block"
            />
            @thapelocodes
          </a>
        </li>
        {screenWidth >= 768 && (
          <>
            <li>
              <a
                href="https://linkedin.com/in/thapelocodes"
                className="flex w-44 justify-between"
              >
                <Image
                  src={LinkedInLogoBlack}
                  alt="LinkedIn Logo"
                  width={25}
                  height={25}
                  className="dark:hidden"
                />
                <Image
                  src={LinkedInLogoWhite}
                  alt="LinkedIn Logo"
                  width={25}
                  height={25}
                  className="hidden dark:block"
                />
                in/thapelocodes
              </a>
            </li>
            <li>
              <a
                href="https://github.com/thapelocodes"
                className="flex w-44 justify-between"
              >
                <Image
                  src={GitHubLogoBlack}
                  alt="GitHub Logo"
                  width={25}
                  height={25}
                  className="dark:hidden"
                />
                <Image
                  src={GitHubLogoWhite}
                  alt="GitHub Logo"
                  width={25}
                  height={25}
                  className="hidden dark:block"
                />
                @thapelocodes
              </a>
            </li>
            <li>
              <a
                href="https://x.com/thapelocodes"
                className="flex w-44 justify-between"
              >
                <Image
                  src={XLogoBlack}
                  alt="X Logo"
                  width={25}
                  height={25}
                  className="dark:hidden"
                />
                <Image
                  src={XLogoWhite}
                  alt="X Logo"
                  width={25}
                  height={25}
                  className="hidden dark:block"
                />
                @thapelocodes
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/thapelocodes"
                className="flex w-44 justify-between"
              >
                <Image
                  src={InstaLogoBlack}
                  alt="Instagram Logo"
                  width={25}
                  height={25}
                  className="dark:hidden"
                />
                <Image
                  src={InstaLogoWhite}
                  alt="Instagram Logo"
                  width={25}
                  height={25}
                  className="hidden dark:block"
                />
                @thapelocodes
              </a>
            </li>
          </>
        )}
      </ul>
      <ContactForm />
    </main>
  );
};

export default Contact;
