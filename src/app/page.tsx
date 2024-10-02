import { fetchDemoData } from "@/utils";
import HeroDisplay from "./_components/hero/HeroDisplay";
import HighlightSection from "./_components/highlights/HighlightSection";
import WindDirection from "./_components/highlights/WindDirection";
import HumidityBar from "./_components/highlights/HumidityBar";
import { HeroDisplayProvider } from "./_providers/HeroDisplayProvider";
import { WeatherDataProvider } from "./_providers/WeatherDataProvider";
import ForecastSection from "./_components/forecast/ForecastSection";

export default async function Home() {
  const data = await fetchDemoData();
  const highlightData = [
    {
      title: "Wind Status",
      content: (
        <div className="highlight-content">
          <span className="enlarged">
            {Math.round(data.current.wind_speed * 1.94384449)}
          </span>
          Knots
        </div>
      ),
      extra: <WindDirection angle={data.current.wind_deg} />,
    },
    {
      title: "Humidity",
      content: (
        <div className="highlight-content">
          <span className="enlarged">{data.current.humidity}</span>%
        </div>
      ),
      extra: <HumidityBar percentage={data.current.humidity} />,
    },
    {
      title: "Visibility",
      content: (
        <div className="highlight-content">
          <span className="enlarged">
            {(data.current.visibility / 1000).toFixed(2)}
          </span>
          km
        </div>
      ),
    },
    {
      title: "Air Pressure",
      // content: `${data.current.pressure} mb`,
      content: (
        <div className="highlight-content">
          <span className="enlarged">{data.current.pressure}</span>mb
        </div>
      ),
    },
  ];

  return (
    <body>
      <WeatherDataProvider initialData={data}>
        <HeroDisplayProvider>
          <HeroDisplay />
        </HeroDisplayProvider>
        <main>
          <div className="main-content">
            <div className="main-content-header">
              <button className="temperature-button">&deg;C</button>
              <button className="temperature-button">&deg;F</button>
            </div>
            <ForecastSection forecast={data.forecast} />
            <div className="today-highlights">
              <h2>Today&apos;s Highlights</h2>
              <HighlightSection data={highlightData} />
            </div>
          </div>
        </main>
      </WeatherDataProvider>
    </body>
  );
}
