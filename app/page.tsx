import AboutMe from "./components/sections/AboutMe";
import HeroSection from "./components/sections/HeroSection";

export default function Hero() {
  return (
    <main className="text-neutral-800">
      <HeroSection />
      <AboutMe />
    </main>
  );
}
