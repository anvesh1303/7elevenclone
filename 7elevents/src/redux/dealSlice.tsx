import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Dealobj{
    _id: string;
    StoreId: string;
    ImageUrl: string;
    Description: string;
    Disclaimer: string;
    ValidTill: string;
}

interface DealsState{
    allDeals: Dealobj[];
    filteredDeals: Dealobj[];
    isFoodDropdown: boolean;
    login: boolean;
}

const initialState: DealsState = {
    allDeals: [],
    filteredDeals: [],
    isFoodDropdown: false,
    login: false
};


export const dealSlice = createSlice({
    name: 'deals',
    initialState,
    reducers: {
        setDeals: (state, action: PayloadAction<Dealobj[]>) => {
            state.allDeals = action.payload;
            state.filteredDeals = action.payload;
        },

        setFilteredDeals: (state, action: PayloadAction<string>) =>{
            const filterInput = action.payload.toLowerCase();
            state.filteredDeals = state.allDeals.filter(deal => deal.Description.toLowerCase().includes(filterInput))
        },

        setIsFoodDropdown: (state, action: PayloadAction<boolean>) =>{
            state.isFoodDropdown = action.payload;
        },

        setLogin: (state, action: PayloadAction<boolean>) =>{
            state.login = action.payload;
        }
    }
});

export const {setDeals, setFilteredDeals, setIsFoodDropdown, setLogin} = dealSlice.actions;

export default dealSlice.reducer;