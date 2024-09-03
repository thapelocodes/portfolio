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
        This is a portfolio website created using the MERN stack. It is a simple
        website that showcases my projects, blog posts, and services.
      </p>
    </main>
    <Footer />
  </div>
);

export default About;
