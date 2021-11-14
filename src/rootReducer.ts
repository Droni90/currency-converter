import { combineReducers } from "redux";
import { RootReducerModel } from "./rootModels";
import convertReducer from "./components/Converter/slice";

export const rootReducer = combineReducers<RootReducerModel>({
  convert: convertReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
