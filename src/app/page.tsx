import { fetchDemoData } from "@/utils";
import HeroDisplay from "./_components/hero/HeroDisplay";
import HighlightSection from "./_components/highlights/HighlightSection";
import { HeroDisplayProvider } from "./_providers/HeroDisplayProvider";
import { WeatherDataProvider } from "./_providers/WeatherDataProvider";
import ForecastSection from "./_components/forecast/ForecastSection";

export default async function Home() {
  const data = await fetchDemoData();

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
            <ForecastSection />
            <div className="today-highlights">
              <h2>Today&apos;s Highlights</h2>
              <HighlightSection />
            </div>
          </div>
        </main>
      </WeatherDataProvider>
    </body>
  );
}
