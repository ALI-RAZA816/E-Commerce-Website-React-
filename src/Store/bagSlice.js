import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name:'bagItems',
    initialState:[],
    reducers:{
        addtoBagItems:(state, action) =>{
            return state.push(action.payload);
        }
    }
});

export default bagSlice;
export const bagActions = bagSlice.actions;
