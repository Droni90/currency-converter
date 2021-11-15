import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currencies, CurrenciesStateModel } from "./models";

const initialState: CurrenciesStateModel = {
  conversion_rates: {},
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    getCurrenciesSuccess(state, action: PayloadAction<Currencies>) {
      state.conversion_rates = action.payload;
    },
  },
});

export const { getCurrenciesSuccess } = currenciesSlice.actions;
export default currenciesSlice.reducer;
