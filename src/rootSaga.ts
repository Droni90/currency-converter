import { all, spawn } from "redux-saga/effects";
import { convertSaga } from "./components/Converter/saga";

export default function* rootSaga() {
  const sagas = [convertSaga];
  yield all(sagas.map((saga) => spawn(saga)));
}
