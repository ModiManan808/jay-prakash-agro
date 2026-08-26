import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SketchDefs } from './components/Sketch';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import GradesSection from './components/sections/GradesSection';
import ProcessSection from './components/sections/ProcessSection';
import PackagingSection from './components/sections/PackagingSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  return (
    <>
      <SketchDefs />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <GradesSection />
        <ProcessSection />
        <PackagingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
