import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Deliverables from "@/components/Deliverables";
import Platform from "@/components/Platform";
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
        <Audience />
        <Services />
        <Process />
        <Deliverables />
        <Platform />
        <Metrics />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
