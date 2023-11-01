import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const selectedProductSlice = createSlice({
  name: "selectedProducts",
  initialState,
  reducers: {
    selectedProd: (state, action) => {
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

export const { selectedProd } = selectedProductSlice.actions;

export default selectedProductSlice.reducer;
