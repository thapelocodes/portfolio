import Link from "next/link";

const AboutSection = () => (
  <section className="about">
    <h2>About</h2>
    <p>
      I am a self-taught developer based in Pretoria, South Africa. I recently
      obtained my online certification from ALX Africa with a plethora of
      technical and soft skills.
    </p>
    <Link href="/about">See more about me</Link>
  </section>
);

export default AboutSection;
