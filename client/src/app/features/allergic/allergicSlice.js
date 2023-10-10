import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const allergicSlice = createSlice({
  name: 'allergic',
  initialState,
  reducers: {
    allergic: (state, action) => {
      state.value += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { allergic } = allergicSlice.actions

export default allergicSlice.reducer