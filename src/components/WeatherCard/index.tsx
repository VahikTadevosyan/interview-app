import React from 'react';
import {Container, Degree, Details, StyledImage, Title} from "./styles";
import {useGetWeatherByCityQuery} from "../../services/WeatherSevice";
import {useAppSelector} from "../../hooks/redux";

const imgBaseUrl = 'https://openweathermap.org/img/wn/'
const WeatherItem = () => {
    const {value} = useAppSelector((state) => state.searchReducer)
    const {value: units} = useAppSelector((state) => state.unitsReducer)

    const {data} = useGetWeatherByCityQuery({city: value, units})
    return (
        <Container>
            <Title>{data?.name}</Title>
            <Degree>{`${data?.main.temp}`}&deg;{units === 'metric' ? 'C' : 'F'}</Degree>
            <StyledImage src={`${imgBaseUrl}${data?.weather[0].icon}@2x.png`}/>
            <Details>Cloud</Details>

        </Container>
    );
};

export default WeatherItem;