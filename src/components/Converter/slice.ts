import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {ConvertResultModel} from "./models";

const initialState: ConvertResultModel = {
  conversion_result: 0
};

const convertSlice = createSlice({
  name: "convert",
  initialState,
  reducers: {
    convertSuccess(state, action: PayloadAction<ConvertResultModel>) {
      state.conversion_result = action.payload.conversion_result;
    },
  },
});

export const { convertSuccess } = convertSlice.actions;
export default convertSlice.reducer;
