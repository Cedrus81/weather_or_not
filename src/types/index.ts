export type FormattedData = {
    city: string,
    current: {
        isDay: boolean,
        date: string,
        temp: number,
        wind_speed: number,
        wind_deg: number,
        humidity: number,
        pressure: number,
        visibility: number,
        weather: Array<{
            id: number,
            main: string,
            description: string,
            icon: string
        }>
    },
    forecast: Array<DailyData>
}

export type DailyData = {
    date: string,
    summary: string,
    temp: {
        min: number,
        max: number
    },
    weather: Array<{
        id: number,
        main: string,
        description: string,
        icon: string
    }>
}