import AboutMe from "./components/sections/AboutMe";
import HeroSection from "./components/sections/HeroSection";
import Portfolio from "./components/sections/Portfolio";

export default function Hero() {
  return (
    <main className="text-neutral-800">
      <HeroSection />
      <AboutMe />
      <Portfolio />
    </main>
  );
}
