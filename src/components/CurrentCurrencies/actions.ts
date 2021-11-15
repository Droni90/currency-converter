import { createAction } from "@reduxjs/toolkit";

export const getCurrenciesRequest = createAction<string>(
  "GET_CURRENCIES_REQUEST"
);
