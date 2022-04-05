import { AsyncFetchUserList, AsyncCreateUser, AsyncRemoveUser, AsyncUpdateUser } from './userThunk';
import { createSlice } from '@reduxjs/toolkit';
import { UserType } from './../../type/userType';
type UserState = {
  users: UserType[],
  currentUser: UserType[] | null,
  isFetching: boolean,
  errorMessage: string | undefined
}

const initialState: UserState = {
  users: [],
  currentUser: null,
  isFetching: false,
  errorMessage: ""
}
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(AsyncFetchUserList.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncFetchUserList.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    });
    builder.addCase(AsyncFetchUserList.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncCreateUser.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncCreateUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload.user);
    });
    builder.addCase(AsyncCreateUser.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncRemoveUser.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncRemoveUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = state.users.filter(item => item._id !== action.payload._id);
    });
    builder.addCase(AsyncRemoveUser.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    });
    builder.addCase(AsyncUpdateUser.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(AsyncUpdateUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = state.users.map(item => item._id === action.payload._id ? action.payload : item);
    });
    builder.addCase(AsyncUpdateUser.rejected, (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    })

  }
})

export default userSlice.reducer;