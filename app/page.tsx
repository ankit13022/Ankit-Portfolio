import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

export default function Home() {
  return (
    <>
      <Cursor />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}
