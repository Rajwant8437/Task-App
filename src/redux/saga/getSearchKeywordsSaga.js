import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_SEARCH_KEYWORDS,
  getSearchkeywordsSuccess,
  getSearchKeywordsFail,
} from "../actions/getSearchKeywordsAction";
import getSearchKeywordsApi from "../api/getSearchKeywordsApi";

function* getSearchImagesSaga(action) {
  try {
    const response = yield call(() => getSearchKeywordsApi(action.params));
    if (response.status === 200) {
      yield put(getSearchkeywordsSuccess(response, action));
    }
    if (response.status === 400) {
      yield put(getSearchKeywordsFail(response, action));
    }
    return response;
  } catch (e) {
    yield put(getSearchKeywordsFail(e.response, action));
  }
}

export default function* MySaga() {
  yield takeLatest(GET_SEARCH_KEYWORDS, getSearchImagesSaga);
}
