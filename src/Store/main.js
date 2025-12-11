import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchItem";
import HomeSlice from "./HomeItems";

const mainStore = configureStore({
    reducer:{
        intialFetch:fetchSlice.reducer,
        homeProducts:HomeSlice.reducer,
    }
});

export default mainStore;