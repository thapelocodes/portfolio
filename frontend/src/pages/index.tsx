import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
// import HeroSection from "../components/HeroSection";
import BlogsSection from "@/components/BlogsSection";
// import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import "@/app/globals.css";

const Home = () => (
  <div>
    <Header />
    <main className="p-8 pt-16 md:pt-20">
      <h1 className="text-primary text-shadow text-center text-3xl textjjdi">
        thapelocodes
      </h1>
      {/* <HeroSection /> */}
      <AboutSection />
      {/* <ServicesSection /> */}
      <ProjectsSection />
      <BlogsSection />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default Home;
