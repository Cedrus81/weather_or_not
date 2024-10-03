'use server'
import { fetchWeatherData } from "@/utils";

export async function onSubmit(city: string) {
    // call a server action to get data from API
    const newWeatherData = await fetchWeatherData(city);
    return newWeatherData
}