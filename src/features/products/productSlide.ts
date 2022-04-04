import { fetchAsyncProductList, AsyncCreateProduct, AsyncRemoveProduct, AsyncGetProduct, AsyncUpdateProduct, AsyncSearchProduct } from './productThunk';
import { ProductType } from '../../type/productType';
import { createSlice } from '@reduxjs/toolkit';


type ProductState = {
  products: ProductType[],
  currentProduct: ProductType | null,
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
    });
    builder.addCase(AsyncCreateProduct.pending, (state,) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncCreateProduct.fulfilled, (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    });
    builder.addCase(AsyncCreateProduct.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncRemoveProduct.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncRemoveProduct.fulfilled, (state, action) => {
      state.isFetching = false;
      state.products = state.products.filter(item => item._id !== action.payload._id);
    });
    builder.addCase(AsyncRemoveProduct.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncGetProduct.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncGetProduct.fulfilled, (state, action) => {
      state.isFetching = false;
      state.currentProduct = action.payload;
    });
    builder.addCase(AsyncGetProduct.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncUpdateProduct.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncUpdateProduct.fulfilled, (state, action) => {
      state.isFetching = false;
      state.products = state.products.map(item => (item._id !== action.payload._id ? item : action.payload));
    });
    builder.addCase(AsyncUpdateProduct.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
  }
});

export default productSlice.reducer;