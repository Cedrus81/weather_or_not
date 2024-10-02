import Image from "next/image";
import closeIcon from "../../../public/static/assets/icons/x.svg";
import arrowRightIcon from "../../../public/static/assets/icons/arrow-right.svg";
import { useHeroDisplay } from "@/app/_providers/HeroDisplayProvider";
import HeroSearchForm from "./HeroSearchForm";
interface HistorySearchProps {
  closeSearch?: () => void;
}

const searchHistory = ["London", "Barcelona", "Long beach"];

function HeroSearch({}: HistorySearchProps) {
  const { setIsSearchActive } = useHeroDisplay();

  return (
    <div className="search search-container">
      <button
        className="close-search-btn"
        onClick={() => setIsSearchActive(false)}
      >
        <Image src={closeIcon} alt="close" width={25} height={25} />
      </button>
      <HeroSearchForm />
      <section className="history-list">
        {searchHistory.map((location, idx) => (
          <button key={location + "-" + idx} className="history-list-btn">
            <span>{location}</span>
            <Image src={arrowRightIcon} alt="choose" height={20} width={20} />
          </button>
        ))}
      </section>
    </div>
  );
}

export default HeroSearch;
