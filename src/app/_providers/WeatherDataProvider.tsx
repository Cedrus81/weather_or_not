"use client";
import { FormattedData } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const weatherDataContext = createContext<{
  weatherData: FormattedData | undefined;
  setWeatherData: Dispatch<SetStateAction<FormattedData>>;
}>({ weatherData: undefined, setWeatherData: () => {} });

export function WeatherDataProvider({
  children,
  initialData,
}: {
  children: React.ReactNode;
  initialData: FormattedData;
}) {
  const [weatherData, setWeatherData] = useState(initialData);

  return (
    <weatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </weatherDataContext.Provider>
  );
}

export const useWeatherData = () => useContext(weatherDataContext);
