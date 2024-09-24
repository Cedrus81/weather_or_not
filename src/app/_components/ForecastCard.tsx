import { DailyData } from "@/types";
import { getRelevantImagePath } from "@/utils";
import Image from "next/image";

interface ForecastCardProps {
  isTomorrow: boolean;
  day: DailyData;
}

async function ForecastCard({ day, isTomorrow }: ForecastCardProps) {
  const { code } = day.condition;
  const ConditionImg = await import(
    `../../public/assets/images/${getRelevantImagePath(code)}.webp`
  );
  return (
    <div className="forecast-card">
      <div className="forecast-card-content">
        <span>{isTomorrow ? "Tomorrow" : day.date}</span>
        <Image src={ConditionImg.default} alt={"condition"} height={62} />
      </div>
      <div className="forecast-card-footer">
        <span className="max-temp">{day.dailyData.maxTempC}&deg;C</span>
        <span className="min-temp">{day.dailyData.minTempC}&deg;C</span>
      </div>
    </div>
  );
}

export default ForecastCard;
