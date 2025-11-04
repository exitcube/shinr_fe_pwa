import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: "",
  },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = authSlice.actions;
export default authSlice.reducer;
