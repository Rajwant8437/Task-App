import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_SPECIFIC_IMAGES,
  getSpecificImagesSuccess,
  getSpecificImagesFail,
} from "../actions/getSpecificImagesAction";
import getSpecificImagesApi from "../api/getSpecificImagesApi";

function* getSpecificImagesSaga(action) {
  try {
    const response = yield call(() => getSpecificImagesApi(action.params));
    if (response.status === 200) {
      yield put(getSpecificImagesSuccess(response, action));
    }
    if (response.status === 400) {
      yield put(getSpecificImagesFail(response, action));
    }
    return response;
  } catch (e) {
    yield put(getSpecificImagesFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_SPECIFIC_IMAGES, getSpecificImagesSaga);
}
