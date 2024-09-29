import { FormattedData } from "@/types";
import Image from "next/image";
import LocationIcon from "../../public/static/assets/icons/location.svg";
import GPSIcon from "../../public/static/assets/icons/location-dot-solid.svg";
// import { getRelevantImagePath } from "@/utils";
import BackgroundImage from "../../public/static/assets/images/Cloud-background.webp";
interface HeroDisplayProps {
  data: FormattedData;
}

async function HeroDisplay({ data }: HeroDisplayProps) {
  const { icon } = data.current.weather[0];
  // const ConditionImg = await import(
  //   `../../public/assets/images/${getRelevantImagePath(code)}.webp`
  // );

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
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
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
        <span className="hero-degrees">{data.current.temp}</span>
        &deg;C
      </span>

      <h1>{data.current.weather[0].main}</h1>
      <footer className="hero-footer">
        <div className="hero-footer-top">
          <span>{data.current.isDay ? "Today" : "Tonight"}</span>
          <span className="separator">•</span>
          <span> {data.forecast[0].date}</span>
        </div>
        <div className="hero-footer-bottom">
          <Image src={GPSIcon} alt="gps" width={24} height={24} />
          <span>{data.city}</span>
        </div>
      </footer>
    </section>
  );
}

export default HeroDisplay;
