import React from "react";
import ForecastCard from "./ForecastCard";

function ForecastSection() {
  return (
    <section className="forecast">
      {Array.from({ length: 5 }, (_, i) => i + 1).map((day) => (
        <ForecastCard
          key={`day-card-` + day}
          dayIdx={day}
          isTomorrow={day === 1}
        />
      ))}
    </section>
  );
}

export default ForecastSection;
