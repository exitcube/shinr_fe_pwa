import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    deviceUUId: "",
  },
  reducers: {
    setDeviceUUId(state, action) {
      state.deviceUUId = action.payload;
    },
  },
});

export const { setDeviceUUId } = authSlice.actions;
export default authSlice.reducer;
