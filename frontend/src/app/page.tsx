import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import BlogsSection from "@/components/BlogsSection";
// import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import "@/app/globals.css";

const Home = () => (
  <div>
    <main className="p-8 pt-0">
      <HeroSection />
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      <BlogsSection />
      <ContactForm />
    </main>
  </div>
);

export default Home;
