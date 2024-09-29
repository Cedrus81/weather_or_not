import { DailyData, FormattedData } from '@/types';
import demoData from './demoData.json';

export async function fetchDemoData(): Promise<FormattedData> {
    const simplifiedData = simplifyData(demoData, 'Tel Aviv')
    // console.log(simplifiedData.current.weather)
    return simplifiedData
}


export async function fetchWeatherData() {
    const API_KEY = process.env.WEATHER_API_KEY
    try {
        // get the geo-data
        const geoResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=Tel%20Aviv&limit=1&appid=${API_KEY}`)
        const geoData = await geoResponse.json()
        const { lat, lon, name } = geoData[0]
        // use the latitude and longtitude to make the request for the weather data. Save the city name
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_KEY}`
        const weatherResponse = await fetch(url)
        const weatherData = await weatherResponse.json()
        // console.log(weatherData)
        const formattedData = simplifyData(weatherData, name)
        return formattedData
    } catch (error) {
        console.error(error);
        return fetchDemoData()
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function simplifyData(data: any, city: string): FormattedData {
    const { temp, wind_speed, wind_deg, weather, pressure, humidity, dt, visibility } = data.current
    const simplifiedData = {
        city,
        current: {
            isDay: isDay(dt),
            date: shortDateFormat(dt * 1000),
            temp: Math.round(temp),
            wind_speed: Math.round(wind_speed),
            wind_deg,
            weather,
            pressure,
            humidity,
            visibility
        },
        forecast: simplifyForecast(data.daily)
    }
    return simplifiedData
}


export function getDirection(angle: number) {
    // We divide it into 16 sections
    const directions = ["N", "NNE", "NE", "ENE", "E",
        "ESE", "SE", "SSE", "S",
        "SSW", "SW", "WSW", "W",
        "WNW", "NW", "NNW"];
    // This means, every 360 / 16 degree, there's a section change
    // So, in our case, every 22.5 degree, there's a section change
    // In order to get the correct section, we just need to divide
    let section = Math.round(angle / 22.5)

    // Now we know the section, just need to make sure it's under 16
    section = section % 16;

    return directions[section];
}


// helper functions

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function simplifyForecast(forecast: Array<any>): Array<DailyData> {

    const simplifiedForecast = forecast.map((day) => {
        const { dt, weather, summary } = day
        const { min, max } = day.temp
        return {
            date: shortDateFormat(dt * 1000),
            summary,
            temp: {
                min: Math.round(min),
                max: Math.round(max)
            },
            weather
        }
    })

    return simplifiedForecast
}

function shortDateFormat(miliseconds: number): string {
    const date = new Date(miliseconds);

    // Array of month names (abbreviated)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Array of weekday names (abbreviated)
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get the day of the week, day of the month, and month
    const dayOfWeek = days[date.getDay()];  // E.g., 'Wed'
    const dayOfMonth = date.getDate();      // E.g., 4
    const month = months[date.getMonth()];  // E.g., 'Jun'

    // Return the formatted date string
    return `${dayOfWeek}, ${dayOfMonth} ${month}`;
}


function isDay(timestamp: number) {
    const date = new Date(timestamp * 1000)
    const isDay = date.getHours() > 5 || date.getHours() < 18
    return isDay
}
