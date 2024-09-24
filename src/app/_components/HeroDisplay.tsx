import { FormattedData } from "@/types";
import Image from "next/image";
import LocationIcon from "../../public/assets/icons/location.svg";
import GPSIcon from "../../public/assets/icons/location-dot-solid.svg";
import { getRelevantImagePath } from "@/utils";
import BackgroundImage from "../../public/assets/images/Cloud-background.webp";
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
      <div className="weather-icon-container">
        <Image
          src={ConditionImg.default}
          width={202}
          height={234}
          style={{ objectFit: "contain" }}
          alt="current condition"
        />
        <Image
          src={BackgroundImage}
          alt="clouds"
          width={459}
          height={376}
          className="weather-background"
        />
      </div>
      <span className="hero-degrees">
        <span className="hero-degrees">{data.current.tempC}</span>
        &deg;C
      </span>

      <h1>{data.forecast[0].condition.text}</h1>
      <footer className="hero-footer">
        <div className="hero-footer-top">
          <span>{data.current.isDay ? "Today" : "Tonight"}</span>
          <span className="separator">•</span>
          <span> {data.forecast[0].date}</span>
        </div>
        <div className="hero-footer-bottom">
          <Image src={GPSIcon} alt="gps" width={24} height={24} />
          <span>{data.location.city}</span>
        </div>
      </footer>
    </section>
  );
}

export default HeroDisplay;
