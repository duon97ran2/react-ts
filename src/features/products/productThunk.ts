import { ProductType } from './../../type/productType';
import { findAllProducts, createProduct, deleteProduct, findOneProduct, updateProduct, search, fetchProductByCategory } from './../../api/products';
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
export const fetchAsyncProductByCategory = createAsyncThunk<ProductType[], { categoryId: string, filter?: Array<any> }, { rejectValue: string }>("product/fetchAsyncProductByCategory",
  async ({ categoryId, filter }, { rejectWithValue }) => {
    try {
      const { data } = await fetchProductByCategory(categoryId, filter);
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

export const AsyncGetProduct = createAsyncThunk<ProductType, string | undefined, { rejectValue: string }>("product/AsyncGetProduct", async (id, { rejectWithValue }) => {
  const { data } = await findOneProduct(id);
  return data;
});
export const AsyncUpdateProduct = createAsyncThunk<ProductType, ProductType, { rejectValue: string }>("product/AsyncUpdateProduct", async (productData, { rejectWithValue }) => {
  try {
    const { data } = await updateProduct(productData);
    return data
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});
export const AsyncSearchProduct = createAsyncThunk<ProductType[], string, { rejectValue: string }>("product/AsyncSearchProduct", async (text, { rejectWithValue }) => {
  try {
    const { data } = await search(text);
    return data
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});