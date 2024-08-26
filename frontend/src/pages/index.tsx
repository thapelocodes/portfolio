import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import BlogsSection from "@/components/BlogsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";

const Home = () => (
  <div>
    <Header />
    <main>
      <h1>Welcome to my Portfolio</h1>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogsSection />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default Home;
