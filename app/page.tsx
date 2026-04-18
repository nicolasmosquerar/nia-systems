import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Platform from "@/components/Platform";
import Process from "@/components/Process";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Platform />
        <Process />
        <Metrics />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
