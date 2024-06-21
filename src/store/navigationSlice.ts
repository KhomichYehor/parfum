import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
    items:string[];
}

const initialState: MenuState = {
    items: ['Menu', 'Discount', 'Franchise', 'Contact Us']
}

const navigationSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setNavigationItems(state, action: PayloadAction<string[]>){
            state.items = action.payload
        }
    }
})

export const {setNavigationItems} = navigationSlice.actions;
export default navigationSlice.reducer; 