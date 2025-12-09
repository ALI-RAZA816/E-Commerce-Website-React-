import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchItem";
import HomeSlice from "./HomeItems";
import bestSellersSlice from "./bestSellers";
import collectionSlice from "./collection";
const mainStore = configureStore({
    reducer:{
        intialFetch:fetchSlice.reducer,
        homeProducts:HomeSlice.reducer,
        bestSellers:bestSellersSlice.reducer,
        collection:collectionSlice.reducer
    }
});

export default mainStore;