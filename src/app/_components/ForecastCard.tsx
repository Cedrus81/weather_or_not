import { DailyData } from "@/types";
import Image from "next/image";

interface ForecastCardProps {
  isTomorrow: boolean;
  day: DailyData;
}

async function ForecastCard({ day, isTomorrow }: ForecastCardProps) {
  const { icon } = day.weather[0];
  // const ConditionImg = await import(
  //   `../../public/assets/images/${getRelevantImagePath(code)}.webp`
  // );
  return (
    <div className="forecast-card">
      <div className="forecast-card-content">
        <span>{isTomorrow ? "Tomorrow" : day.date}</span>
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={"condition"}
          height={88}
          width={88}
        />
      </div>
      <div className="forecast-card-footer">
        <span className="max-temp">{day.temp.max}&deg;C</span>
        <span className="min-temp">{day.temp.min}&deg;C</span>
      </div>
    </div>
  );
}

export default ForecastCard;
