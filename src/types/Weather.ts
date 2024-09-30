export interface Coord {
    lon: number;
    lat: number;
}

export interface WeatherUnit {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface WeatherMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Clouds {
    all: number;
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface Weather {
    coord?: Coord;
    weather: WeatherUnit[];
    base: "stations";
    main: WeatherMain;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface Forecast {
    list: Weather[]
}