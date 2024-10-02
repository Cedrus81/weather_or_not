import React from "react";
import ForecastCard from "./ForecastCard";
import { DailyData } from "@/types";

interface ForecastSectionProps {
  forecast: Array<DailyData>;
}

function ForecastSection({ forecast }: ForecastSectionProps) {
  return (
    <section className="forecast">
      {forecast.slice(1, 6).map((day, idx) => (
        <ForecastCard key={day.date} day={day} isTomorrow={idx === 0} />
      ))}
    </section>
  );
}

export default ForecastSection;
