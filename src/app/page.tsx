import { fetchDemoData } from "@/utils";
import HeroDisplay from "./_components/HeroDisplay";

export default async function Home() {
  const data = await fetchDemoData();
  console.log(data.forecast[0].condition);
  return (
    <body>
      <HeroDisplay data={data} />
      <main>
        <div className="main-content">
          <div className="main-content-header">
            <button className="circle-button">&deg;C</button>
            <button className="circle-button">&deg;F</button>
          </div>
          <section className="forecast"></section>
          <div className="today-highlights"></div>
        </div>
      </main>
    </body>
  );
}
