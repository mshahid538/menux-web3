import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: "allergic",
  initialState,
  reducers: {
    allergicBy: (state, action) => {
      // Reset the state to an empty array when an empty array is dispatched
      if (action.payload.length === 0) {
        return initialState;
      }
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
