import { createSlice } from "@reduxjs/toolkit";

const fetchStatus = createSlice({
    name:'fetch',
    initialState:{
        fetchDone:false,
        fetching:false
    },
    reducers:{
        fetching:(state,action)=>{
            console.log("hahaha");
        }
    }
});

export const FetchActions = fetchStatus.actions;
export default fetchStatus;