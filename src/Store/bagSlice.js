import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name:'bagItems',
    initialState:[],
    reducers:{
        addtoBagItems:(state, action) =>{
            // state.push(action.payload);
            console.log(action.payload);
        }
    }
});

export default bagSlice;
export const bagActions = bagSlice.actions;
