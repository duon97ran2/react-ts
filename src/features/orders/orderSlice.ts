import { AsyncCreateOrder } from './orderThunk';
import { createSlice } from '@reduxjs/toolkit';
import { OrderType } from './../../type/orderType';

type OrderState = {
  orders: OrderType[],
  orderFetching: boolean,
  orderMessage: string | undefined,
}
const initialState: OrderState = {
  orders: [],
  orderFetching: false,
  orderMessage: '',
}

const OrderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(AsyncCreateOrder.pending, (state) => {
      state.orderFetching = true;
    });
    builder.addCase(AsyncCreateOrder.fulfilled, (state, action) => {
      state.orderFetching = false;
      state.orders.push(action.payload);
    });
    builder.addCase(AsyncCreateOrder.rejected, (state, action) => {
      state.orderFetching = false;
      state.orderMessage = action.payload;
    });
  }
});

export default OrderSlice.reducer;