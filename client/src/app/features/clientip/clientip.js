import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "IP not found!", //
};

export const clientIpSlice = createSlice({
  name: "clientIP",
  initialState,
  reducers: {
    setClientIp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setClientIp } = clientIpSlice.actions;

export default clientIpSlice.reducer;
