import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Education } from "./sections/Educaiton";
import { Experience } from "./sections/Experience";
import Certifications from "./sections/Certifications";
import ArtGallery from "./sections/ArtGallery";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        {/* <Testimonials /> */}
        <Certifications />
        <ArtGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
