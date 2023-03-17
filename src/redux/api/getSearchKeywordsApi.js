import axios from "axios";
export const getSearchKeywordsApi = async (params) => {
  try {
    const response = await axios({
      method: "get",
      url: `https://suggestqueries.google.com/complete/search?client=chrome&q=stack`,
      //  params: params,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
export default getSearchKeywordsApi;
