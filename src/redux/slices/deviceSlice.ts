import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    deviceUUId: "",
  },
  reducers: {
    setDeviceUUId(state, action) {
      state.deviceUUId = action.payload;
    },
  },
});

export const { setDeviceUUId } = deviceSlice.actions;
export default deviceSlice.reducer;
