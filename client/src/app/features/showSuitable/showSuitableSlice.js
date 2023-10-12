import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false, // Initial value
};

export const showSuitableSlice = createSlice({
  name: "showSuitable",
  initialState,
  reducers: {
    setShowSuitable: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setShowSuitable } = showSuitableSlice.actions;

export default showSuitableSlice.reducer;
