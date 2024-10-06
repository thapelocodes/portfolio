import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
// import HeroSection from "@/components/HeroSection";
import BlogsSection from "@/components/BlogsSection";
// import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import "@/app/globals.css";

const Home = () => (
  <div>
    <main className="p-8 md:pt-12">
      <h1 className="text-primary text-shadow text-center text-3xl">
        thapelocodes
      </h1>
      {/* <HeroSection /> */}
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      <BlogsSection />
      <ContactForm />
    </main>
  </div>
);

export default Home;
