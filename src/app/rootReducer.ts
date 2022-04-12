import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import attributeReducer from "../features/attributes/attributeSlice";
import productReducer from "../features/products/productSlide"
import authReducer from "../features/auths/authSlice";
import userReducer from "../features/users/userSlice";
import orderReducer from "../features/orders/orderSlice";
import categoryReducer from "../features/categories/categorySlide";
import cartReducer from "../features/cart/cartSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", // persist:root
  storage,
  whitelist: ["authReducer"],
};
const reducers = combineReducers({
  authReducer,
  attributeReducer,
  productReducer,
  categoryReducer,
  userReducer,
  cartReducer,
  orderReducer
});

const rootReducer = persistReducer(persistConfig, reducers);

export default rootReducer;