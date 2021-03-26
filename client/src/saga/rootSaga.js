import { all } from "redux-saga/effects";
import authenticate from "./authenticate";

export default function* rootSaga() {
  yield all([authenticate()]);
}
