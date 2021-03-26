import "regenerator-runtime/runtime";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "Redux/rootReducer";
import rootSaga from "saga/rootSaga";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  middleware: [sagaMiddleware],
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
sagaMiddleware.run(rootSaga);

export default store;
