import { findAllProducts } from './../../api/products';
import { ProductType } from '../../type/productType';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncProductList = createAsyncThunk<ProductType[], void, { rejectValue: string }>("product/fetchAsyncProductList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await findAllProducts();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  })