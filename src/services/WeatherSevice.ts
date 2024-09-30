import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Weather} from '../types/Weather'
import {Forecast} from "../types/Weather";

const REACT_APP_API_KEY = 'e888b6bb7fce4b065d1c5d921a520d7f'
const baseUrl = 'https://api.openweathermap.org/data/2.5'


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<Weather, {city: string, units: string } >({
            query: ({city, units }) => ({
                url: `/weather`,
                params: {
                    q: city || 'Yerevan',
                    appid: REACT_APP_API_KEY,
                    units: units || "metric"
                }
            }),
        }),
        getForecastByCity: builder.query<Forecast, {city: string, units: string } >({
            query: ({city, units }) => ({
                url: `/forecast`,
                params: {
                    q: city || 'Yerevan',
                    appid: REACT_APP_API_KEY,
                    units: units || "metric"
                }
            }),
        }),
    }),
})
export const { useGetWeatherByCityQuery, useGetForecastByCityQuery } = weatherApi