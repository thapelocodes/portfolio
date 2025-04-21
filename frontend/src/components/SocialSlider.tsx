"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import XLogoBlack from "@/assets/X_logo_2023_original.svg";
import XLogoWhite from "@/assets/X_logo_2023_white_original.svg";
import LinkedInLogoBlack from "@/assets/linkedin-svgrepo-com.svg";
import LinkedInLogoWhite from "@/assets/linkedin-white-svgrepo-com.svg";
import InstaLogoBlack from "@/assets/instagram-svgrepo-com.svg";
import InstaLogoWhite from "@/assets/instagram-white-svgrepo-com.svg";
import GitHubLogoBlack from "@/assets/github-black-142-svgrepo-com.svg";
import GitHubLogoWhite from "@/assets/github-white-142-svgrepo-com.svg";
import Image from "next/image";

const SocialSlider = () => {
  const { theme } = useTheme();
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
    <ul className="text-tertiary w-fit grid sm:grid-cols-2 gap-6 my-12 scrollContainer mx-auto">
      <li>
        <a
          href="https://linkedin.com/in/thapelocodes"
          className="flex w-44 justify-between"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={theme === "dark" ? LinkedInLogoWhite : LinkedInLogoBlack}
            alt="LinkedIn Logo"
            width={25}
            height={25}
            className=""
          />
          in/thapelocodes
        </a>
      </li>
      <li>
        <a
          href="https://github.com/thapelocodes"
          className="flex w-44 justify-between"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={theme === "dark" ? GitHubLogoWhite : GitHubLogoBlack}
            alt="GitHub Logo"
            width={25}
            height={25}
            className=""
          />
          @thapelocodes
        </a>
      </li>
      <li>
        <a
          href="https://x.com/thapelocodes"
          className="flex w-44 justify-between"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={theme === "dark" ? XLogoWhite : XLogoBlack}
            alt="X Logo"
            width={25}
            height={25}
            className=""
          />
          @thapelocodes
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/thapelocodes"
          className="flex w-44 justify-between"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={theme === "dark" ? InstaLogoWhite : InstaLogoBlack}
            alt="Instagram Logo"
            width={25}
            height={25}
            className=""
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={theme === "dark" ? LinkedInLogoWhite : LinkedInLogoBlack}
                alt="LinkedIn Logo"
                width={25}
                height={25}
                className=""
              />
              in/thapelocodes
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thapelocodes"
              className="flex w-44 justify-between"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={theme === "dark" ? GitHubLogoWhite : GitHubLogoBlack}
                alt="GitHub Logo"
                width={25}
                height={25}
                className=""
              />
              @thapelocodes
            </a>
          </li>
          <li>
            <a
              href="https://x.com/thapelocodes"
              className="flex w-44 justify-between"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={theme === "dark" ? XLogoWhite : XLogoBlack}
                alt="X Logo"
                width={25}
                height={25}
                className=""
              />
              @thapelocodes
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/thapelocodes"
              className="flex w-44 justify-between"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={theme === "dark" ? InstaLogoWhite : InstaLogoBlack}
                alt="Instagram Logo"
                width={25}
                height={25}
                className=""
              />
              @thapelocodes
            </a>
          </li>
        </>
      )}
    </ul>
  );
};

export default SocialSlider;
