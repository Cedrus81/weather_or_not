import Image from "next/image";
import LocationIcon from "../../../public/static/assets/icons/location.svg";
import GPSIcon from "../../../public/static/assets/icons/location-dot-solid.svg";
import BackgroundImage from "../../../public/static/assets/images/Cloud-background.webp";
import SearchButton from "../buttons/SearchButton";
import { useWeatherData } from "@/app/_providers/WeatherDataProvider";

function HeroCurrent() {
  const { weatherData } = useWeatherData();
  if (!weatherData)
    throw new Error(
      "current weather data is undefined, this shouldnt be happening"
    );
  const { icon } = weatherData.current.weather[0];
  return (
    <>
      <header className="display-header">
        <SearchButton />
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
        <span className="hero-degrees">{weatherData.current.temp}</span>
        &deg;C
      </span>

      <h1>{weatherData.current.weather[0].main}</h1>
      <footer className="hero-footer">
        <div className="hero-footer-top">
          <span>{weatherData.current.isDay ? "Today" : "Tonight"}</span>
          <span className="separator">•</span>
          <span> {weatherData.forecast[0].date}</span>
        </div>
        <div className="hero-footer-bottom">
          <Image src={GPSIcon} alt="gps" width={24} height={24} />
          <span>{weatherData.city}</span>
        </div>
      </footer>
    </>
  );
}

export default HeroCurrent;
