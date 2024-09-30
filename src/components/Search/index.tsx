import React, {useRef} from 'react';
import {useAppDispatch} from "../../hooks/redux";
import {searchSlice} from "../../store/reducers/SearchSlice";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 5px;
`

const Container = styled.div`
  display: flex;
  gap: 10px;
`

const StyledButton = styled.button`
  width: 60px;
  padding: 6px;
  border-radius: 5px;
`

const Search = () => {
    const ref = useRef<HTMLInputElement>(null)

    const dispatch = useAppDispatch()
    const {onSearch} = searchSlice.actions
    const handleSearch = () => {
        if (ref.current) {
            dispatch(onSearch(ref.current.value))
        }
    }

    return (
        <Container>
            <StyledInput ref={ref}/>
            <StyledButton onClick={handleSearch}>Find</StyledButton>
        </Container>
    );
};

export default Search;