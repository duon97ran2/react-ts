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
})