import { authAsyncRegister, authAsyncLogin } from './authThunk';
import { createSlice } from '@reduxjs/toolkit';
import { UserType } from './../../type/userType';

type AuthState = {
  userInfo: UserType | null,
  isError: boolean,
  isAuthenticated: boolean,
  errorMessage: string | undefined,
  accessToken: string,
}
const initialState: AuthState = {
  userInfo: null,
  isError: false,
  isAuthenticated: false,
  errorMessage: "",
  accessToken: "",
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearState: (state) => {
      state.userInfo = null;
      state.isError = false;
      state.isAuthenticated = false;
      state.errorMessage = "";
      state.accessToken = "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(authAsyncLogin.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload.user;
      state.accessToken = action.payload.token;
    });
  }
});
export const { clearState } = authSlice.actions;
export default authSlice.reducer;