import Image from "next/image";
import closeIcon from "../../../public/static/assets/icons/x.svg";
import searchIcon from "../../../public/static/assets/icons/search.svg";
import arrowRightIcon from "../../../public/static/assets/icons/arrow-right.svg";
interface HistorySearchProps {
  closeSearch: () => void;
}

const searchHistory = ["London", "Barcelona", "Long beach"];

function HeroSearch({ closeSearch }: HistorySearchProps) {
  return (
    <div className="search-container">
      <button className="close-search-btn" onClick={closeSearch}>
        <Image src={closeIcon} alt="close" width={25} height={25} />
      </button>
      <form action="" className="search-form">
        <div className="input-box">
          <Image src={searchIcon} alt="search" height={20} width={20} />
          <input type="text" placeholder="Search location" />
        </div>
        <button>Search</button>
      </form>
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
