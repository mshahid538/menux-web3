import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'Uncategorized', // Initial category value
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
