import { fetchDemoData } from "@/utils";
import HeroDisplay from "./_components/hero/HeroDisplay";
import ForecastCard from "./_components/ForecastCard";
import Highlights from "./_components/highlights/Highlights";
import WindDirection from "./_components/highlights/WindDirection";
import HumidityBar from "./_components/highlights/HumidityBar";

export default async function Home() {
  const data = await fetchDemoData();
  const highlightData = [
    {
      title: "Wind Status",
      content: (
        <div className="highlight-content">
          <span className="enlarged">
            {Math.round(data.current.wind_speed * 1.94384449)}
          </span>{" "}
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
      <HeroDisplay data={data} />
      <main>
        <div className="main-content">
          <div className="main-content-header">
            <button className="temperature-button">&deg;C</button>
            <button className="temperature-button">&deg;F</button>
          </div>
          <section className="forecast">
            {data.forecast.slice(1, 6).map((day, idx) => (
              <ForecastCard key={day.date} day={day} isTomorrow={idx === 0} />
            ))}
          </section>
          <div className="today-highlights">
            <h2>Today&apos;s Highlights</h2>
            <Highlights data={highlightData} />
            {/* <div className="highlight-card-list">
              {highlightData.map((highlight) => (
                <div
                  className="highlight-card"
                  key={"highlight" + highlight.title}
                >
                  <span className="highlight-title">{highlight.title}</span>
                  <span className="highlight-content">{highlight.content}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </main>
    </body>
  );
}
