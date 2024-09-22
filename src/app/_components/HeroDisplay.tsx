import { FormattedData } from "@/types";
import Image from "next/image";
import LocationIcon from "../../public/assets/icons/location.svg";
interface HeroDisplayProps {
  data: FormattedData;
}

function HeroDisplay({ data }: HeroDisplayProps) {
  console.log(data);
  const { icon } = data.forecast[0].condition;
  return (
    <section className="hero display">
      <header className="display-header">
        <button className="square">Search for places</button>
        <button className="circle">
          <Image src={LocationIcon} alt="location" width={24} height={24} />
        </button>
      </header>
      <Image
        src={icon}
        width={202}
        height={234}
        style={{ objectFit: "contain" }}
        alt="current condition"
      />
    </section>
  );
}

export default HeroDisplay;
