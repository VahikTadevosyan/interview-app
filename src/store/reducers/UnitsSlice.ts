import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UnitsState {
    value: string;
}

const initialState: UnitsState = {
    value: 'metric',
}

export const unitsSlice = createSlice({
    name: 'unitsSlice',
    initialState,
    reducers: {
        onToggle: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
    },
})

export default unitsSlice.reducer