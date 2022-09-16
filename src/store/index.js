import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";
// single slice example
//const store = configureStore({
//  reducer: counterSlice.reducer,
//});

//now multiple slices

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
