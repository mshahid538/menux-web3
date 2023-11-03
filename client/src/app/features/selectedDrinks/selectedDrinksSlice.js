import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const selectedDrinksSlice = createSlice({
  name: "selectedDrinks",
  initialState,
  reducers: {
    selectedDrnk: (state, action) => {
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

export const { selectedDrnk } = selectedDrinksSlice.actions;

export default selectedDrinksSlice.reducer;
