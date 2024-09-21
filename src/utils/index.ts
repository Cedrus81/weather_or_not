import { DailyData, FormattedData } from '@/types';
import demoData from './demoData.json';

export async function fetchDemoData(): Promise<FormattedData>{
    const simplifiedData = simplifyData(demoData)
    return simplifiedData
}


export async function fetchWeatherData(): Promise<FormattedData>{
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=6';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2183f89e08mshf84b548eec725f8p13914fjsn4d2df1511328',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const simplifiedData = simplifyData(result)
        console.log(simplifiedData);
        return simplifiedData
    } catch (error) {
        console.error(error);
        return fetchDemoData()
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function simplifyData(data: any): FormattedData{
    const simplifiedData = {
        location: {
            city: data.location.name,
            country: data.location.country
        },
        current: {
            tempC: data.current.temp_c,
            tempF: data.current.temp_f,
            isDay: data.current.is_day
        },
        forecast: simplifyForecast(data.forecast.forecastday)
    }
    return simplifiedData
}


// helper functions

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function simplifyForecast(forecast: Array<any>): Array<DailyData> {
    const simplifiedForecast = forecast.map((day) => {
        return {
            date: shortDateFormat(day.date_epoch),
            dailyData : {
                maxTempC: day.day.maxtemp_c,
                maxTempF: day.day.maxtemp_f,
                minTempC: day.day.mintemp_c,
                minTempF: day.day.mintemp_f,
                willRain: day.day.daily_will_it_rain,
                willSnow: day.day.daily_will_it_snow
            },
            condition: {
            text: day.day.condition.text,
            icon: day.day.condition.icon
            }
        }
    })

    return simplifiedForecast
}

function shortDateFormat (miliseconds: number): string{
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