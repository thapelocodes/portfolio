import Image from "next/image";
import Link from "next/link";

const imageStyle = {
  overflow: "hidden",
  borderRadius: "100% 65% 65% 100% / 60% 60% 100% 100%",
  maxWidth: "50%",
  height: 200,
};

const AboutSection = () => (
  <section className="about p-2 w-fit md:max-w-screen-sm mx-auto text-center rounded-2xl">
    <h2 className="m-2 text-xl">About</h2>
    <div style={imageStyle} className="profile w-fit mx-auto my-2">
      <Image
        src="/M-9.jpg"
        alt="Thapelo Michael Moumakoe"
        width={2880}
        height={3600}
        layout="responsive"
      />
    </div>
    <p>
      I am a self-taught developer based in Pretoria, South Africa. I recently
      obtained my online certification from ALX Africa with a plethora of
      technical and soft skills.
    </p>
    <button className="mt-2 py-2 px-4 bg-gradient-to-tl from-blue-200 to-slate-500 dark:from-cyan-900 dark:to-slate-950 dark:hover:from-cyan-900 dark:hover:to-slate-900 rounded-lg transform transition-transform duration-200 hover:scale-110">
      <Link href="/about">See more about me</Link>
    </button>
  </section>
);

export default AboutSection;
