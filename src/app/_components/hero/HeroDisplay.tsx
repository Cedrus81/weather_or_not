"use client";
import { FormattedData } from "@/types";
import { useState } from "react";
import HeroCurrent from "./HeroCurrent";
interface HeroDisplayProps {
  data: FormattedData;
}

function HeroDisplay({ data }: HeroDisplayProps) {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <section className="hero display">
      {isSearchActive ? (
        <div className=""></div>
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
