import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import { getAuthenticate } from "Redux/authenticate";
import { setToken } from "Redux/token";
import { setNotification } from "Redux/notification";

function* GetAuthenticate(data) {
  try {
    const res = yield call(fetchAuthenticate, data.payload);
    yield put(setToken(res.token));
  } catch (err) {
    yield put(setNotification(err.response.data.message));
  }
}

/** Запрос на авторизацию. */
export const fetchAuthenticate = (data) => {
  return axios(`/api/auth/${data.type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: { ...data.form },
  }).then((res) => {
    return res.data;
  });
};

export default function* watchGetAuthenticate() {
  yield takeEvery(getAuthenticate, GetAuthenticate);
}
