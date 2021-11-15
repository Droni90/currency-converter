import { all, spawn } from "redux-saga/effects";
import { convertSaga } from "./components/Converter/saga";
import { currenciesSaga } from "./components/CurrentCurrencies/saga";

export default function* rootSaga() {
  const sagas = [convertSaga, currenciesSaga];
  yield all(sagas.map((saga) => spawn(saga)));
}
