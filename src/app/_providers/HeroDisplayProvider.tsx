"use client";
import { createContext, useContext, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HeroDisplayContext = createContext<any>(undefined);

export const HeroDisplayProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <HeroDisplayContext.Provider value={{ isSearchActive, setIsSearchActive }}>
      {children}
    </HeroDisplayContext.Provider>
  );
};

export const useHeroDisplay = () => useContext(HeroDisplayContext);
