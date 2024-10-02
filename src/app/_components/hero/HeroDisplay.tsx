"use client";
import HeroCurrent from "./HeroCurrent";
import HeroSearch from "./HeroSearch";
import { useHeroDisplay } from "@/app/_providers/HeroDisplayProvider";
function HeroDisplay() {
  const { isSearchActive } = useHeroDisplay();

  return (
    <section className={`hero display`}>
      {isSearchActive ? <HeroSearch /> : <HeroCurrent />}
    </section>
  );
}

export default HeroDisplay;
