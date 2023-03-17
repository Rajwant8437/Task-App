import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

import getRandomImagesSaga from "./saga/getRandomImagesSaga";
import getSpecificImagesSaga from "./saga/getSpecificImagesSaga";
import getSearchKeywordsApiSaga from "./saga/getSearchKeywordsSaga";
let store;
const sagaMiddleWare = createSagaMiddleware();
if (process.env.NODE_ENV === "production") {
  store = createStore(reducer, applyMiddleware(sagaMiddleWare));
} else {
  store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );
}
sagaMiddleWare.run(getRandomImagesSaga);
sagaMiddleWare.run(getSpecificImagesSaga);
sagaMiddleWare.run(getSearchKeywordsApiSaga);

export default store;
