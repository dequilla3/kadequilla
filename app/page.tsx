import AboutMe from "./components/sections/AboutMe";
import ContactMe from "./components/sections/ContactMe";
import HeroSection from "./components/sections/HeroSection";
import Portfolio from "./components/sections/Portfolio";

export default function Hero() {
  return (
    <main className="text-neutral-800">
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <ContactMe />
    </main>
  );
}
