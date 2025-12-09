import { configureStore } from "@reduxjs/toolkit";
import fetchStatus from "./FetchStatus";

const mainStore = configureStore({
    reducer:{
        fetch:fetchStatus.reducer
    }
});

export default mainStore;