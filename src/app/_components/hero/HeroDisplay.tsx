"use client";
import { FormattedData } from "@/types";
import { useState } from "react";
import HeroCurrent from "./HeroCurrent";
import HeroSearch from "./HeroSearch";
interface HeroDisplayProps {
  data: FormattedData;
}

function HeroDisplay({ data }: HeroDisplayProps) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <section className={`hero display ${isSearchActive ? "search" : ""}`}>
      {isSearchActive ? (
        <HeroSearch closeSearch={() => setIsSearchActive(false)} />
      ) : (
        <HeroCurrent
          data={data}
          activateSearch={() => setIsSearchActive(true)}
        />
      )}
    </section>
  );
}

export default HeroDisplay;
