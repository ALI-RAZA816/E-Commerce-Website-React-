import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
    name:'homeSlice',
    initialState :[],
    reducers:{
        addInitialItems:(action) =>{
            return action.payload
        }
    }
});

export const HomeActions = HomeSlice.actions;
export default HomeSlice;