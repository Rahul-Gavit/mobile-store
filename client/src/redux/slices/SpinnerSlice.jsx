import { createSlice } from "@reduxjs/toolkit";

const SpinnerSlice = createSlice({
  name: "spinner",
  initialState: false,
  reducers: {
    setSpinner: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSpinner } = SpinnerSlice.actions;
export default SpinnerSlice.reducer;
