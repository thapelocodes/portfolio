import CVIconBlack from "@/assets/curriculum-resume-svgrepo-com.svg";
import CVIconWhite from "@/assets/curriculum-resume-white-svgrepo-com.svg";
import CertIconBlack from "@/assets/certificate-svgrepo-com.svg";
import CertIconWhite from "@/assets/certificate-white-svgrepo-com.svg";
import Image from "next/image";

// const imageStyle = {
//   maxWidth: "50%",
//   overflow: "hidden",
//   borderRadius: "100% 50% 70% 100% / 60% 60% 100% 100%",
// };

const About = () => (
  <main className="pt-0 min-h-screen text-secondary">
    <h1 className="md:hidden text-3xl text-shadow text-primary">About Me</h1>
    <div className="md:flex flex-row-reverse items-center">
      <div
        // style={imageStyle}
        className="profile max-w-xs mx-auto my-8 self-end"
      >
        {/* <Image
          src="/M-9.jpg"
          alt="Thapelo M. Moumakoe"
          width={2880}
          height={3600}
          placeholder="blur"
          blurDataURL="/M-9.jpg"
        /> */}
      </div>
      <div className="md:flex flex-col md:items-start md:max-w-xs mx-auto md:self-center p-3">
        <h1 className="hidden md:block text-3xl text-shadow text-primary">
          About Me
        </h1>
        <p className="my-3 text-justify mx-6 md:ml-0 md:mr-5">
          I am a self-taught developer and I recently obtained my certification
          from ALX with a plethora of technical and soft skills. I have a
          passion for coding creative user interfaces and solving complex
          problems. As a full-stack developer and frontend specialist it is
          guaranteed that adding me to your team will prove to be a valuable
          investment. See my resume and certification below.
        </p>
        <div className="flex gap-4 w-fit mx-auto md:mx-0">
          <button className="group my-2 p-2 rounded-full bg-gradient-to-br from-indigo-100 via-slate-200 to-zinc-200 dark:from-indigo-900 dark:via-slate-900 dark:hover:via-late-700 dark:to-zinc-900 transform transition-transform duration-200 hover:scale-125 shadow dark:shadow-indigo-800 hover:shadow-md dark:hover:shadow-indigo-900">
            <a
              href="https://drive.google.com/file/d/1_AcxiTkjjxHuqUsmirNM4viKe3Vcr8TX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image
                src={CVIconBlack}
                alt="Certificate Icon"
                width={25}
                height={25}
                className="dark:hidden"
              />
              <Image
                src={CVIconWhite}
                alt="Certificate Icon"
                width={25}
                height={25}
                className="hidden dark:block"
              />
            </a>
            <div className="absolute -left-2 top-12 text-sm opacity-0 group-hover:opacity-100 rounded p-1 bg-gray-500 bg-opacity-50">
              Resume
            </div>
          </button>
          <button className="group my-2 p-2 rounded-full bg-gradient-to-br from-indigo-100 via-slate-200 to-zinc-200 dark:from-indigo-900 dark:via-slate-900 dark:hover:via-late-700 dark:to-zinc-900 transform transition-transform duration-200 hover:scale-125 shadow dark:shadow-indigo-800 hover:shadow-md dark:hover:shadow-indigo-900">
            <a
              href="https://drive.google.com/file/d/12RcucTAqtZldT1NLAPbzxvf_Of-uAizv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <Image
                src={CertIconBlack}
                alt="Certificate Icon"
                width={25}
                height={25}
                className="dark:hidden"
              />
              <Image
                src={CertIconWhite}
                alt="Certificate Icon"
                width={25}
                height={25}
                className="hidden dark:block"
              />
              <div className="absolute -left-5 top-12 text-sm opacity-0 group-hover:opacity-100 rounded p-1 bg-gray-500 bg-opacity-50">
                Certification
              </div>
            </a>
          </button>
        </div>
      </div>
    </div>
  </main>
);

export default About;
