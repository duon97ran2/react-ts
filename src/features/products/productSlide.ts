import { fetchAsyncProductList } from './productThunk';
import { ProductType } from '../../type/productType';
import { createSlice } from '@reduxjs/toolkit';
import { build } from 'vite';


type ProductState = {
  products: ProductType[],
  currentProduct: ProductType[] | null,
  isFetching: boolean,
  errorMessage: string | undefined,
}

const initialState: ProductState = {
  products: [],
  currentProduct: null,
  isFetching: false,
  errorMessage: "",
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncProductList.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(fetchAsyncProductList.fulfilled, (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAsyncProductList.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    })
  }
});

export default productSlice.reducer;