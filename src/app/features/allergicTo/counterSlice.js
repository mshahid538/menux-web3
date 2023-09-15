import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "allergic",
  initialState,
  reducers: {
    allergicBy: (state, action) => ({
      ...state,
      value: [...state.value, action.payload],
    }),
  },
});

export const { allergicBy } = counterSlice.actions;

export default counterSlice.reducer;
