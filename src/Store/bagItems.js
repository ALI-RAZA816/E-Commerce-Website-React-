import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name:'Bag',
    initialState:[],
    reducers:{
        addToBag:(state,action) =>{
            state.push(action.payload);
        },
        removeFromBag:(state,action) => {
            return state.filter(id => id !== action.payload);
        }
    }
});

export default bagSlice;
export const bagActions = bagSlice.actions;