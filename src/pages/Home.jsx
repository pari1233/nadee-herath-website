import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Reviews />
        <FAQ  />
        <Contact />
      </main>
    </>
  );
}

export default Home;
