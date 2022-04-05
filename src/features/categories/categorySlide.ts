import { AsyncFetchCategoryList, AsyncCreateCategory, AsyncRemoveCategory, AsyncUpdateCategory } from './categoryThunk';
import { createSlice } from '@reduxjs/toolkit';
import { CategoryType } from './../../type/categoryType';
type categoryState = {
  categories: CategoryType[],
  currentCategory: CategoryType | null,
  isFetching: boolean,
  errorMessage: string | undefined,
}
const initialState: categoryState = {
  categories: [],
  currentCategory: null,
  isFetching: false,
  errorMessage: "",
}

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(AsyncFetchCategoryList.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncFetchCategoryList.fulfilled, (state, action) => {
      state.isFetching = false;
      state.categories = action.payload;
    });
    builder.addCase(AsyncFetchCategoryList.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncCreateCategory.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncCreateCategory.fulfilled, (state, action) => {
      state.isFetching = false;
      state.categories.push(action.payload);
    });
    builder.addCase(AsyncCreateCategory.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncRemoveCategory.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncRemoveCategory.fulfilled, (state, action) => {
      state.isFetching = false;
      state.categories = state.categories.filter(item => item._id !== action.payload._id);
    });
    builder.addCase(AsyncRemoveCategory.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncUpdateCategory.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncUpdateCategory.fulfilled, (state, action) => {
      state.isFetching = false;
      state.categories = state.categories.map(item => item._id === action.payload._id ? action.payload : item);
    });
    builder.addCase(AsyncUpdateCategory.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
  }
})

export default categorySlice.reducer;