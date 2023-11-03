import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const selectedFoodSlice = createSlice({
  name: "selectedFoods",
  initialState,
  reducers: {
    selectedFood: (state, action) => {
      if (action.payload.length === 0) {
        return initialState;
      }
      const newValues = action.payload;
      const existingValues = state.value;

      const uniqueValues = new Set([...existingValues, ...newValues]);

      const updatedValue = [...uniqueValues];

      return {
        ...state,
        value: updatedValue,
      };
    },
  },
});

export const { selectedFood } = selectedFoodSlice.actions;

export default selectedFoodSlice.reducer;
