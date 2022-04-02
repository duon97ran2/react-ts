import { ProductType } from './../../type/productType';
import { findAllProducts, createProduct, deleteProduct, findOneProduct } from './../../api/products';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncProductList = createAsyncThunk<ProductType[], void, { rejectValue: string }>("product/fetchAsyncProductList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await findAllProducts();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  });

export const AsyncCreateProduct = createAsyncThunk<ProductType, ProductType, { rejectValue: string }>("product/AsyncCreateProduct", async (productData, { rejectWithValue }) => {
  try {
    const { data } = await createProduct(productData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});
export const AsyncRemoveProduct = createAsyncThunk<ProductType, string | undefined, { rejectValue: string }>("product/AsyncRemoveProduct", async (id, { rejectWithValue }) => {
  try {
    const { data } = await deleteProduct(id);
    return data
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});

export const AsyncGetProduct = createAsyncThunk<ProductType, string, { rejectValue: string }>("product/AsyncGetProduct", async (id, { rejectWithValue }) => {
  const { data } = await findOneProduct(id);
  return data;
})