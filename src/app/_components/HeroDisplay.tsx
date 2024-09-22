import { FormattedData } from "@/types";
import Image from "next/image";
import LocationIcon from "../../public/assets/icons/location.svg";
import { getRelevantImagePath } from "@/utils";
interface HeroDisplayProps {
  data: FormattedData;
}

async function HeroDisplay({ data }: HeroDisplayProps) {
  const { code } = data.forecast[0].condition;
  const ConditionImg = await import(
    `../../public/assets/images/${getRelevantImagePath(code)}.webp`
  );

  return (
    <section className="hero display">
      <header className="display-header">
        <button className="square">Search for places</button>
        <button className="circle">
          <Image src={LocationIcon} alt="location" width={24} height={24} />
        </button>
      </header>
      <Image
        src={ConditionImg.default}
        width={202}
        height={234}
        style={{ objectFit: "contain" }}
        alt="current condition"
      />
    </section>
  );
}

export default HeroDisplay;
