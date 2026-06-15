import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Warranty from "./components/Warranty";
import ServiceAreas from "./components/ServiceAreas";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Warranty />
      <ServiceAreas />
      <Contact />
    </main>
  );
}