import { UserType } from './../../type/userType';
import { login } from './../../api/auth';
import { RegisterType, LoginType } from './../../type/authType';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { register } from '../../api/auth';

export const authAsyncRegister = createAsyncThunk<{ message: string, user: { username: string, email: string, _id: string } }, RegisterType, { rejectValue: string }>("auth/authAsyncRegister", async (registerData, { rejectWithValue }) => {
  try {
    const { data } = await register(registerData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }

});
export const authAsyncLogin = createAsyncThunk<{ message: string, token: string, user: UserType | null }, LoginType, { rejectValue: string }>("auth/authAsyncLogin", async (loginData, { rejectWithValue }) => {
  try {
    const { data } = await login(loginData);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data.message);
  }
})

