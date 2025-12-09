import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
    name:'collectionPage',
    initialState:[],
    reducers:{
        addItems:(state,action)=>{
            return action.payload;
        }
    }
});

export default collectionSlice
export const collectionActions = collectionSlice.actions
