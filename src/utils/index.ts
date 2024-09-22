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
        // console.log(simplifiedData);
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
            tempC: Math.round(data.current.temp_c),
            tempF: Math.round(data.current.temp_f),
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
                maxTempC: Math.round(day.day.maxtemp_c),
                maxTempF: Math.round(day.day.maxtemp_f),
                minTempC: Math.round(day.day.mintemp_c),
                minTempF: Math.round(day.day.mintemp_f),
                willRain: day.day.daily_will_it_rain,
                willSnow: day.day.daily_will_it_snow
            },
            condition: {
            text: day.day.condition.text,
            // icon: 'https:'.concat(day.day.condition.icon)
            code: day.day.condition.code
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


export function getRelevantImagePath(code:number): string{
    debugger
    switch (code){
        case 1000:
            {
                return 'Clear'
            }
         case 1006: 
         case 1030:
         case 1135:
            {
                return 'HeavyCloud'
            }
         case 1189: 
         case 1186:
         case 1192:
         case 1195:
            {
                return 'HeavyRain'
            } 
         case 1003: 
         case 1009:
            {
                return 'LightCloud'
            }
         case 1063: 
         case 1153:
         case 1183:
            {
                return 'LightRain'
            }
         case 1150: 
         case 1180:
         case 1240:
         case 1243:
         case 1246:
            {
                return 'Shower'
            }
         case 1064: 
         case 1147:
         case 1204:
         case 1207:
         case 1249:
         case 1252:
            {
                return 'Sleet'
            }
         case 1087: 
         case 1273:
         case 1276:
         case 1279:
         case 1282:
            {
                return 'ThunderStorm'
            }
         case 1072: 
         case 1168:
         case 1171:
         case 1198:
         case 1201:
         case 1237:
         case 1261:
         case 1264:
            {
                return 'Hail'
            }
        default:
            {
                return 'Snow'
            }

    }
}