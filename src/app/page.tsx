import { fetchDemoData } from "@/utils";
import HeroDisplay from "./_components/HeroDisplay";
import ForecastCard from "./_components/ForecastCard";

export default async function Home() {
  const data = await fetchDemoData();
  return (
    <body>
      <HeroDisplay data={data} />
      <main>
        <div className="main-content">
          <div className="main-content-header">
            <button className="temperature-button">&deg;C</button>
            <button className="temperature-button">&deg;F</button>
          </div>
          <section className="forecast">
            {data.forecast.slice(1).map((day, idx) => (
              <ForecastCard key={day.date} day={day} isTomorrow={idx === 0} />
            ))}
          </section>
          <div className="today-highlights"></div>
        </div>
      </main>
    </body>
  );
}
