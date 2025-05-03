"use client";
import { useEffect, useState } from "react";
import SocialSlider from "@/components/SocialSlider";
import ContactForm from "@/components/ContactForm";
import { useTheme } from "@/components/ThemeProvider";

const Contact = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  const { theme } = useTheme();

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
    <main className="p-8 min-h-screen md:max-w-screen-lg mx-auto overflow-hidden">
      <h1 className="text-3xl text-shadow text-primary my-4">Contact</h1>
      <h3 className="my-8">
        Connect with us across multiple platforms as{" "}
        <em className="text-primary text-white text-shadow">thapelocodes</em>
      </h3>
      <div className="max-w-screen-sm mx-auto overflow-hidden py-8">
        <SocialSlider />
      </div>
      <ContactForm />
    </main>
  );
};

export default Contact;
