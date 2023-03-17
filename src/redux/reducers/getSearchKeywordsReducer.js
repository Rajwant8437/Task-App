import {
  GET_SEARCH_KEYWORDS,
  GET_SEARCH_KEYWORDS_FAIL,
  GET_SEARCH_KEYWORDS_RESET,
  GET_SEARCH_KEYWORDS_SUCCESS,
} from "../actions/getSearchKeywordsAction";

const initialState = {
  message: "",
  data: [],
  apiState: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_KEYWORDS:
      return {
        ...state,
        apiState: "loading",
      };
    case GET_SEARCH_KEYWORDS_SUCCESS:
      return {
        ...state,
        apiState: "success",
        data: action?.params?.data,
        message: "Success!",
      };
    case GET_SEARCH_KEYWORDS_FAIL:
      return {
        ...state,
        apiState: "error",
        data: action?.params?.data,
        message: action?.params?.data?.error,
      };
    case GET_SEARCH_KEYWORDS_RESET:
      return initialState;
    default:
      return state;
  }
}
