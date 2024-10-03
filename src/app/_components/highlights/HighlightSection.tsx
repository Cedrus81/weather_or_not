"use client";
import { useWeatherData } from "@/app/_providers/WeatherDataProvider";
import HumidityBar from "./HumidityBar";
import WindDirection from "./WindDirection";

// type HighlightsProps = {
//   current: {
//     isDay: boolean;
//     date: string;
//     temp: number;
//     wind_speed: number;
//     wind_deg: number;
//     humidity: number;
//     pressure: number;
//     visibility: number;
//     weather: Array<{
//       id: number;
//       main: string;
//       description: string;
//       icon: string;
//     }>;
//   };
// };

function HighlightSection() {
  const data = useWeatherData().weatherData;
  if (!data) return;
  const { current } = data;
  const highlightData = [
    {
      title: "Wind Status",
      content: (
        <div className="highlight-content">
          <span className="enlarged">
            {Math.round(current.wind_speed * 1.94384449)}
          </span>
          Knots
        </div>
      ),
      extra: <WindDirection angle={current.wind_deg} />,
    },
    {
      title: "Humidity",
      content: (
        <div className="highlight-content">
          <span className="enlarged">{current.humidity}</span>%
        </div>
      ),
      extra: <HumidityBar percentage={current.humidity} />,
    },
    {
      title: "Visibility",
      content: (
        <div className="highlight-content">
          <span className="enlarged">
            {(current.visibility / 1000).toFixed(2)}
          </span>
          km
        </div>
      ),
    },
    {
      title: "Air Pressure",
      content: (
        <div className="highlight-content">
          <span className="enlarged">{current.pressure}</span>mb
        </div>
      ),
    },
  ];

  return (
    <div className="highlight-card-list">
      {highlightData.map((highlight) => (
        <div className="highlight-card" key={"highlight" + highlight.title}>
          <span className="highlight-title">{highlight.title}</span>
          {highlight.content}
          {highlight.extra}
        </div>
      ))}
    </div>
  );
}

export default HighlightSection;
