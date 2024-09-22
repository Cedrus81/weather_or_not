export type FormattedData = {
    location: {
        city: string,
        country: string
    },
    current: {
        tempC: number,
        tempF: number,
        isDay: number,
    },
    forecast: Array<DailyData>
}

export type DailyData = {
        date: string,
        dailyData : {
            maxTempC: number,
            maxTempF: number,
            minTempC: number,
            minTempF: number,
            willRain: number,
            willSnow: number
        },
        condition: {
        text: string,
        // icon: string
        code: number
        }
}