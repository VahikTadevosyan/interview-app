import React, {ChangeEvent} from 'react';
import {unitsSlice} from "../../store/reducers/UnitsSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {Container, Input, Label, Switch} from "./styles";



const UnitsButton = () => {
    const dispatch = useAppDispatch()
    const {onToggle} = unitsSlice.actions
    const {value} = useAppSelector((state) => state.unitsReducer)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.checked ? dispatch(onToggle('imperial')): dispatch(onToggle('metric'))

    }
    return (
       <Container>
           <Label>
               <Input checked={value !== 'metric'} type="checkbox" onChange={handleChange} />
               <Switch />
               {value === 'metric' ? <span>&deg; C</span> : <span>&deg; F</span>}
           </Label>
       </Container>
    );
};

export default UnitsButton;
