import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name:'Bag',
    initialState:[],
    reducers:{
        addToBag:(state,action) =>{
            return state.push(action.payload);
        }
    }
});

export default bagSlice;
export const bagActions = bagSlice.actions;