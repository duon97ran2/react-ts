import { AsyncFetchCategoryList } from './categoryThunk';
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
    })
  }
})

export default categorySlice.reducer;