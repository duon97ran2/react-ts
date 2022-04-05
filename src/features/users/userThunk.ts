import { message } from 'antd';
import { message } from 'antd';
import { createUser, getUserList, removeUser, updateUser } from './../../api/users';
import { UserType } from './../../type/userType';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const AsyncFetchUserList = createAsyncThunk<UserType[], void, { rejectValue: string }>("users/AsyncFetchUserList",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getUserList();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  });
export const AsyncCreateUser = createAsyncThunk<UserType, UserType, { rejectValue: string }>("user/AsyncCreateUser", async (userData, { rejectWithValue }) => {
  try {
    const { data } = await createUser(userData);
    return data
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }

});
export const AsyncRemoveUser = createAsyncThunk<UserType, string | undefined, { rejectValue: string }>("user/AsyncRemoveUser",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await removeUser(id);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  });
export const AsyncUpdateUser = createAsyncThunk<UserType, UserType, { rejectValue: string }>("user/AsyncUpdateUser", async (userData, { rejectWithValue }) => {
  try {
    const { data } = await updateUser(userData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.reponse.data.message);
  }
})