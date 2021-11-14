import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  convertedAmount: 0,
};

const convertSlice = createSlice({
  name: "convert",
  initialState,
  reducers: {
    convertSuccess(state, action: PayloadAction<any>) {
      state.convertedAmount = action.payload;
    },
  },
});

export const { convertSuccess } = convertSlice.actions;
export default convertSlice.reducer;
