import { createSlice } from "@reduxjs/toolkit";

const bestSellersSlice = createSlice({
    name:'bestSellers',
    initialState:[],
    reducers:{
        bestSellers:(state,action) =>{
            return action.payload;
        }
    }
});

export default bestSellersSlice;
export const bestActions = bestSellersSlice.actions;