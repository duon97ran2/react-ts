import { RootState } from './../app/store';

export const getProducts = (state: RootState) => state.productReducer;
