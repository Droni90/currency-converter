import { takeLatest, call, put, StrictEffect } from "redux-saga/effects";
import { getType } from "@reduxjs/toolkit";
import * as requestActions from "./actions";
import * as api from "../../utils/api";
import * as successActions from "./slice";
import { ConvertResultModel } from "./models";

export function* convertSaga(): Generator<StrictEffect> {
  yield takeLatest(getType(requestActions.convertRequest), convert);
}

function* convert(action: ReturnType<typeof requestActions.convertRequest>) {
  try {
    const amount: ConvertResultModel = yield call(api.convert, action.payload);
    yield put(successActions.convertSuccess(amount));
  } catch (err) {
    console.log(err);
  }
}
