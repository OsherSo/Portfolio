import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import HiringProcess from "./components/HiringProcess";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <HiringProcess />
      <Projects />
      <ContactForm />
      <ScrollToTop />
    </>
  );
};

export default App;
