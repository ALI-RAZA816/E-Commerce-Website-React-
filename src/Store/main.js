import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchItem";
import HomeSlice from "./HomeItems";
import bagSlice from "./bagItems";
const mainStore = configureStore({
    reducer:{
        intialFetch:fetchSlice.reducer,
        homeProducts:HomeSlice.reducer,
        bagItems:bagSlice.reducer
    }
});

export default mainStore;