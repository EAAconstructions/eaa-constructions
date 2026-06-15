
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";
import { Services } from "./components/Services";



export function App() {
  return (
    <>
      <Hero />
      <Navbar />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}