import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import rootSaga from "./rootSaga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleWare = createSagaMiddleware();

const rootStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default rootStore;