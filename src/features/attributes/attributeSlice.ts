import { createSlice } from "@reduxjs/toolkit";

export type AttributeType = {
  _id?: string;
  attributeName: string;
  attributeType: string;
};

type AttributeState = {
  attributes: AttributeType[];
  currentAttribute: AttributeType | null;
  isFetching: boolean;
  errorMessage: string;
};

const initialState: AttributeState = {
  attributes: [],
  currentAttribute: null,
  isFetching: false,
  errorMessage: "",
};


const attributeSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    setError: (state) => {
      state.errorMessage = "Lỗi";
    },
    clearError: (state) => {
      state.errorMessage = "";
    },
  },
});

export const { setError, clearError } = attributeSlice.actions;
export default attributeSlice.reducer;