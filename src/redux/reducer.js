import { combineReducers } from "redux";
import getRandomImagesReducer from "./reducers/getRandomImagesReducer";
import getSpecificImagesReducer from "./reducers/getSpecificImagesReducer";
import getSearchKeywordsReducer from "./reducers/getSearchKeywordsReducer";

export default combineReducers({
  getRandomImagesState: getRandomImagesReducer,
  getSpecificImagesState: getSpecificImagesReducer,
  getSearchKeywordsState: getSearchKeywordsReducer,
});
