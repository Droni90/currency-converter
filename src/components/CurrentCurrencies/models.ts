export interface CurrenciesStateModel {
  conversion_rates: Currencies;
}

export interface Currencies {
  USD?: number;
  EUR?: number;
  RUB?: number;
}
