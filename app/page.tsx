import HeroSection from "./components/sections/HeroSection";
import Skills from "./components/sections/Skills";

export default function Hero() {
  return (
    <main className="text-neutral-800 px-72">
      <HeroSection />
      <Skills />
    </main>
  );
}
