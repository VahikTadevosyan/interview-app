import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
    value: string;
}

const initialState: SearchState = {
    value: '',
}

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        onSearch: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export default searchSlice.reducer