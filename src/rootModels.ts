import { ConvertResultModel } from "./components/Converter/models";
import { CurrenciesStateModel } from "./components/CurrentCurrencies/models";

export interface RootReducerModel {
  convert: ConvertResultModel;
  currencies: CurrenciesStateModel;
}
