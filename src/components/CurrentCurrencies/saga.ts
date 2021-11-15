import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { getType } from "@reduxjs/toolkit";
import * as requestActions from "./actions";
import * as api from "../../utils/api";
import * as successActions from "./slice";
import { Currencies, CurrenciesStateModel } from "./models";

export function* currenciesSaga(): Generator<StrictEffect> {
  yield takeLatest(
    getType(requestActions.getCurrenciesRequest),
    getCurrentCurrencies
  );
}

function* getCurrentCurrencies(
  action: ReturnType<typeof requestActions.getCurrenciesRequest>
) {
  try {
    const amount: CurrenciesStateModel = yield call(
      api.getCurrencies,
      action.payload
    );
    yield put(successActions.getCurrenciesSuccess(amount.conversion_rates));
  } catch (err) {
    console.log(err);
  }
}
