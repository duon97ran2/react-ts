import { AsyncFetchCart, AsyncAddToCart, AsyncRemoveCartItem, AsyncClearCart, AsyncIncreaseCartItem, AsyncDecreaseCartItem } from './cartThunk';
import { createSlice } from '@reduxjs/toolkit';
import { CartType } from './../../type/cartType';
type cartState = {
  cart: CartType | null,
  isFetching: boolean,
  errorMessage: string | undefined,
}
const initialState: cartState = {
  cart: null,
  isFetching: false,
  errorMessage: ""
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = null;
      state.isFetching = false;
      state.errorMessage = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(AsyncFetchCart.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncFetchCart.fulfilled, (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
    });
    builder.addCase(AsyncFetchCart.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncAddToCart.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncAddToCart.fulfilled, (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
    });
    builder.addCase(AsyncAddToCart.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncRemoveCartItem.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncRemoveCartItem.fulfilled, (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
    });
    builder.addCase(AsyncRemoveCartItem.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncClearCart.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncClearCart.fulfilled, (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
    });
    builder.addCase(AsyncClearCart.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncIncreaseCartItem.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncIncreaseCartItem.fulfilled, (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
    });
    builder.addCase(AsyncIncreaseCartItem.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncDecreaseCartItem.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncDecreaseCartItem.fulfilled, (state, action) => {
      state.isFetching = false;
      state.cart = action.payload;
    });
    builder.addCase(AsyncDecreaseCartItem.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
  }
})
export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;