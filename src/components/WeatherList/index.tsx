import React from 'react';
import {Card, Container, Date, Degree, List} from "./styles";
import {useAppSelector} from "../../hooks/redux";
import {useGetForecastByCityQuery} from "../../services/WeatherSevice";

const WeatherList = () => {
    const {value} = useAppSelector((state) => state.searchReducer)
    const {value: units} = useAppSelector((state) => state.unitsReducer)

    const {data} = useGetForecastByCityQuery({city: value, units})
    console.log(data, "data")
    return (
        <Container>
            <List>
                {data?.list.map((item)=>{
                    return (
                        <Card key={item.id}>
                            <Date>{item.dt}</Date>
                            <Degree>{`${item?.main.temp}`}&deg;{units === 'metric' ? 'C' : 'F'}</Degree>
                        </Card>
                    )
                })}
            </List>
        </Container>
    );
};

export default WeatherList;