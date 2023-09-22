import { configureStore } from "@reduxjs/toolkit";
import allergicReducer from "../features/allergicTo/counterSlice";
import categorySlice from "../features/category/categorySlice";
import productSlice from "../features/product/productSlice";
import requirementsSlice from "../features/requirements/requirementsSlice";
import restaurantSlice from "../features/restaurant/restaurantSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "menux",
  version: 1,
  storage,
};

const reducer = combineReducers({
  allergic: allergicReducer,
  category: categorySlice,
  product: productSlice,
  requirements: requirementsSlice,
  restaurant: restaurantSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
