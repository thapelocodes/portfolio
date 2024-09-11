import Image from "next/image";
import Link from "next/link";

const AboutSection = () => (
  <section className="about p-5 w-fit md:max-w-screen-sm my-5 mx-auto text-center rounded-2xl shadow-lg dark:shadow-dark">
    <h2 className="text-shadow text-tertiary text-2xl">About</h2>
    <div className="profile w-fit mx-auto my-5">
      <Image
        src="/M-9.jpg"
        alt="Thapelo Michael Moumakoe"
        width={2880}
        height={3600}
        placeholder="blur"
        blurDataURL="/M-9.jpg"
      />
    </div>
    <p className="text-secondary m-5">
      Hi there! I&apos;m Thapelo and I code. Of course, as a software engineer I
      do other things too but coding takes the cup.
    </p>
    <button className="text-tertiary font-medium py-2 shadow px-4 bg-gradient-to-tl from-blue-200 to-slate-500 dark:from-cyan-900 dark:to-slate-950 dark:hover:from-cyan-900 dark:hover:to-slate-900 rounded-3xl transform transition-transform duration-200 hover:scale-110">
      <Link href="/about">Learn more about me</Link>
    </button>
  </section>
);

export default AboutSection;
