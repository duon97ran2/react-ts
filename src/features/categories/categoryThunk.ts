import { message } from 'antd';
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

})