import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_RANDOM_IMAGES,
  getRandomImagesSuccess,
  getRandomImagesFail,
} from "../actions/getRandomImagesAction";
import getRandomImagesApi from "../api/getRandomImagesApi";

function* getRandomImagesSaga(action) {
  try {
    const response = yield call(() => getRandomImagesApi());
    if (response.status === 200) {
      yield put(getRandomImagesSuccess(response, action));
    }
    if (response.status === 400) {
      yield put(getRandomImagesFail(response, action));
    }
    return response;
  } catch (e) {
    yield put(getRandomImagesFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_RANDOM_IMAGES, getRandomImagesSaga);
}
