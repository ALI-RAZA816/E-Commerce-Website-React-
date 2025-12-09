import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchItem";
import HomeSlice from "./HomeItems";
import bestSellersSlice from "./bestSellers";

const mainStore = configureStore({
    reducer:{
        intialFetch:fetchSlice.reducer,
        homeProducts:HomeSlice.reducer,
        bestSellers:bestSellersSlice.reducer
    }
});

export default mainStore;