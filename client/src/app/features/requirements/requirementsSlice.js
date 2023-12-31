import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "UnSelected", //
};

export const requirementsSlice = createSlice({
  name: "requirements",
  initialState,
  reducers: {
    setRequirements: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRequirements } = requirementsSlice.actions;

export default requirementsSlice.reducer;
