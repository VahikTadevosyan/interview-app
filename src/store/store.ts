import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {weatherApi} from '../services/WeatherSevice'
import searchReducer from './reducers/SearchSlice'
import unitsReducer from './reducers/UnitsSlice'


export const rootReducer = combineReducers({
    searchReducer,
    unitsReducer,
    [weatherApi.reducerPath]: weatherApi.reducer
})
export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(weatherApi.middleware),
})

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']