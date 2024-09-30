import React from 'react';
import {Container, StyledMain} from "./styles";
import WeatherItem from "../WeatherCard";
import WeatherList from "../WeatherList";

const Main = () => {


    return (
        <StyledMain>
            <Container>
                <WeatherItem/>
            </Container>
            <WeatherList/>
        </StyledMain>
    );
};

export default Main;