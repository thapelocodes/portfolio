import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const imageStyle = {
  width: 200,
  height: 200,
  overflow: "hidden",
  borderRadius: "100% 50% 70% 100% / 60% 60% 100% 100%",
};

const About = () => (
  <div className="h-screen">
    <Header />
    <main className="p-8 pt-20">
      <h1 className="text-2xl mb-2">About Me</h1>
      <div style={imageStyle} className="mx-auto">
        <Image
          src="/M-9.jpg"
          alt="Thapelo M. Moumakoe"
          width={2088}
          height={3600}
        />
      </div>
      <p>
        I am a self-taught developer based in Pretoria, South Africa. I recently
        obtained my certification from ALX Africa with a plethora of technical
        and soft skills.
      </p>
      <p>
        Here&apos;s my resume:{" "}
        <a
          href="https://docs.google.com/document/d/1VyPjNeAOjvbi7CqVomPRmkEvAHnICqhyoIzIk7Mk4Gw/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </p>
    </main>
    <Footer />
  </div>
);

export default About;
