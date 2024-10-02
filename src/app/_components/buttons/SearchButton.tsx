"use client";

import { useHeroDisplay } from "@/app/_providers/HeroDisplayProvider";

// interface SearchButtonProps {
//   onClick: () => void
//   classes: string
//   text:
// }

function SearchButton() {
  const { setIsSearchActive } = useHeroDisplay();
  return (
    <button className="square" onClick={() => setIsSearchActive(true)}>
      Search for places
    </button>
  );
}

export default SearchButton;
