import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name:'fetch',
    initialState:{
        fetchDone:false,
        currentFetch:false
    },
    reducers:{
        initialFetch:(state) =>{
            state.fetchDone = true
        },
        fetchStart:(state) => {
            state.currentFetch = true
        },
        fetchEnd:(state) =>{
            state.currentFetch = false
        }
    }
});


export default fetchSlice;
export const fetchActions = fetchSlice.actions;