import Image from "next/image";
import "@/app/globals.css";

const imageStyle = {
  maxWidth: "50%",
  overflow: "hidden",
  borderRadius: "100% 50% 70% 100% / 60% 60% 100% 100%",
};

const About = () => (
  <div className="">
    <main className="p-8 pt-16 md:pt-20 w-fit mx-auto md:max-w-screen-sm h-screen sm:h-full md:h-screen text-secondary">
      <h1 className="text-3xl text-shadow text-primary">About Me</h1>
      <div style={imageStyle} className="profile mx-auto my-5">
        <Image
          src="/M-9.jpg"
          alt="Thapelo M. Moumakoe"
          width={2880}
          height={3600}
          placeholder="blur"
          blurDataURL="/M-9.jpg"
        />
      </div>
      <p className="my-3">
        I am a self-taught developer based in Pretoria, South Africa. I recently
        obtained my certification from ALX Africa with a plethora of technical
        and soft skills.
      </p>
      <p className="my-2">
        See my resume{" "}
        <a
          href="https://drive.google.com/file/d/1utNUuc9L_ijoXjfyqyMr-yflr80t_v3z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 underline"
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
          className="hover:text-blue-500 underline"
        >
          here
        </a>
      </p>
    </main>
  </div>
);

export default About;