import { addToCartType } from './../../type/cartType';
import { message } from 'antd';
import { addToCart, getCart, removeCartItem, clearCart, increaseCartItem, decreaseCartItem } from './../../api/cart';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartType } from '../../type/cartType';


export const AsyncFetchCart = createAsyncThunk<CartType, string | undefined, { rejectValue: string }>("cart/AsyncFetchCart", async (userId, { rejectWithValue }) => {
  try {
    const { data } = await getCart(userId);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
export const AsyncAddToCart = createAsyncThunk<CartType, addToCartType, { rejectValue: string }>("cart/AsyncAddToCart", async (cartData, { rejectWithValue }) => {
  try {
    const { data } = await addToCart(cartData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }

});
export const AsyncRemoveCartItem = createAsyncThunk<CartType, { id: string | undefined, productId: string | undefined }, { rejectValue: string }>("cart/AsyncRemoveCartItem", async (removeData, { rejectWithValue }) => {
  try {
    const { data } = await removeCartItem(removeData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
export const AsyncClearCart = createAsyncThunk<CartType, { id: string | undefined }, { rejectValue: string }>("cart/AsyncClearCart", async (clearData, { rejectWithValue }) => {
  try {
    const { data } = await clearCart(clearData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
export const AsyncIncreaseCartItem = createAsyncThunk<CartType, { id: string | undefined, productId: string | undefined }, { rejectValue: string }>("cart/AsyncIncreaseCartItem", async (requestData, { rejectWithValue }) => {
  try {
    const { data } = await increaseCartItem(requestData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});
export const AsyncDecreaseCartItem = createAsyncThunk<CartType, { id: string | undefined, productId: string | undefined }, { rejectValue: string }>("cart/AsyncDecreaseCartItem", async (requestData, { rejectWithValue }) => {
  try {
    const { data } = await decreaseCartItem(requestData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
});