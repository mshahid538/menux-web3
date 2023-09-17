import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "allergic",
  initialState,
  reducers: {
    allergicBy: (state, action) => {
      const newValues = action.payload;
      const existingValues = state.value;

      // Create a Set to ensure uniqueness of values
      const uniqueValues = new Set([...existingValues, ...newValues]);

      // Convert the Set back to an array
      const updatedValue = [...uniqueValues];

      return {
        ...state,
        value: updatedValue,
      };
    },
  },
});

export const { allergicBy } = counterSlice.actions;

export default counterSlice.reducer;
