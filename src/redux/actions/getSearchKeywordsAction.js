export const GET_SEARCH_KEYWORDS = "GET_SEARCH_KEYWORDS";
export const GET_SEARCH_KEYWORDS_SUCCESS = "GET_SEARCH_KEYWORDS_SUCCESS";
export const GET_SEARCH_KEYWORDS_FAIL = "GET_SEARCH_KEYWORDS_FAIL";
export const GET_SEARCH_KEYWORDS_RESET = "GET_SEARCH_KEYWORDS_RESET";

export const getSearchKeywords = (params) => {
  return { type: GET_SEARCH_KEYWORDS, params };
};

export const getSearchkeywordsSuccess = (params) => {
  return { type: GET_SEARCH_KEYWORDS_SUCCESS, params };
};

export const getSearchKeywordsFail = (params) => {
  return { type: GET_SEARCH_KEYWORDS_FAIL, params };
};

export const getSearchKeywordsReset = (params) => {
  return { type: GET_SEARCH_KEYWORDS_RESET, params };
};
