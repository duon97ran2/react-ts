import { message } from 'antd';
import { OrderType, OrderSend } from './../../type/orderType';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOrder } from '../../api/orders';

export const AsyncCreateOrder = createAsyncThunk<OrderType, OrderSend, { rejectValue: string }>("orders/AsyncCreateOrder", async (orderData, { rejectWithValue }) => {
  try {
    const { data } = await createOrder(orderData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
})