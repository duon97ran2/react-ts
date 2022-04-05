import { CategoryType } from './../../type/categoryType';
import { createCategory, removeCategory, updateCategory } from './../../api/category';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories } from '../../api/category';
import { CategoryType } from '../../type/categoryType';

export const AsyncFetchCategoryList = createAsyncThunk<CategoryType[], void, { rejectValue: string }>("category/AsyncFecthCategoryList", async (_, { rejectWithValue }) => {

  try {
    const { data } = await getCategories();
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }

});
export const AsyncCreateCategory = createAsyncThunk<CategoryType, CategoryType, { rejectValue: string }>("categories/AsyncCreateCategory", async (categoryData, { rejectWithValue }) => {
  try {
    const { data } = await createCategory(categoryData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message)
  }

});
export const AsyncRemoveCategory = createAsyncThunk<CategoryType, string | undefined, { rejectValue: string }>("categories/AsyncRemoveCategory", async (id, { rejectWithValue }) => {
  try {
    const { data } = await removeCategory(id);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message)
  }

});
export const AsyncUpdateCategory = createAsyncThunk<CategoryType, CategoryType, { rejectValue: string }>("categories/AsyncUpdateCategory", async (categoryData, { rejectWithValue }) => {
  try {
    const { data } = await updateCategory(categoryData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message)
  }

});