import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false, // Initial value
};

export const SHOW_SUITABLE = "showSuitable/SET_SHOW_SUITABLE";

export const showSuitableSlice = createSlice({
  name: "showSuitable",
  initialState,
  reducers: {
    [SHOW_SUITABLE]: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setShowSuitable } = showSuitableSlice.actions;

export default showSuitableSlice.reducer;
