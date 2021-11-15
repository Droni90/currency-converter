import { combineReducers } from "redux";
import { RootReducerModel } from "./rootModels";
import convertReducer from "./components/Converter/slice";
import currenciesReducer from "./components/CurrentCurrencies/slice";

export const rootReducer = combineReducers<RootReducerModel>({
  convert: convertReducer,
  currencies: currenciesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
