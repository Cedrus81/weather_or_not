import { FormattedData } from "@/types";

interface HeroDisplayProps {
  data: FormattedData;
}

function HeroDisplay({ data }: HeroDisplayProps) {
  console.log(data);
  return (
    <section className="hero display">
      <header className="display-header">
        <button>Search for places</button>
        <button>O</button>
      </header>
    </section>
  );
}

export default HeroDisplay;
