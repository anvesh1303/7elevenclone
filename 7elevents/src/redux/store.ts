import {configureStore} from '@reduxjs/toolkit'
import dealReducer from './dealSlice'

const store = configureStore({
    reducer: {
        deals: dealReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>


export default store;
