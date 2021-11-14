import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { getType } from "@reduxjs/toolkit";
import * as requestActions from "./actions";
import * as api from "../../utils/api";
import * as successActions from "./slice";
import { ResultModel } from "./models";

export function* convertSaga(): Generator<StrictEffect> {
  yield takeLatest(getType(requestActions.connvertRequest), convert);
}

function* convert(action: ReturnType<typeof requestActions.connvertRequest>) {
  try {
    const amount: ResultModel = yield call(api.convert, action.payload);
    console.log(amount);
    yield put(successActions.convertSuccess(amount));
  } catch (err) {
    console.log(err);
  }
}
