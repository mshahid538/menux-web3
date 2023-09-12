import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'allergic',
  initialState,
  reducers: {
    allergicBy: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {  allergicBy } = counterSlice.actions

export default counterSlice.reducer