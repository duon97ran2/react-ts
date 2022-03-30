import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import attributeReducer from "../features/attributes/attributeSlice";
import productReducer from "../features/products/productSlide"
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // persist:root
  storage,
  whitelist: ["attributeReducer"],
};
const reducers = combineReducers({
  attributeReducer,
  productReducer
});

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;