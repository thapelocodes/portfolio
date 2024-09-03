import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import "@/app/globals.css";

const imageStyle = {
  maxWidth: "50%",
  overflow: "hidden",
  borderRadius: "100% 50% 70% 100% / 60% 60% 100% 100%",
};

const About = () => (
  <div className="">
    <Header />
    <main className="p-8 pt-20 w-fit mx-auto md:max-w-screen-sm h-screen">
      <h1 className="text-2xl mb-5">About Me</h1>
      <div style={imageStyle} className="mx-auto my-5">
        <Image
          src="/M-9.jpg"
          alt="Thapelo M. Moumakoe"
          width={2088}
          height={3600}
        />
      </div>
      <p className="my-2">
        I am a self-taught developer based in Pretoria, South Africa. I recently
        obtained my certification from ALX Africa with a plethora of technical
        and soft skills.
      </p>
      <p className="my-2">
        See my resume{" "}
        <a
          href="https://docs.google.com/document/d/1VyPjNeAOjvbi7CqVomPRmkEvAHnICqhyoIzIk7Mk4Gw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          here
        </a>
      </p>
      <p className="my-2">
        See my certificate{" "}
        <a
          href="https://drive.google.com/file/d/10qXN1X57JYn9VoVLMsOy2AZFp6K_1duE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          here
        </a>
      </p>
    </main>
    <Footer />
  </div>
);

export default About;
