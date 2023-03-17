import axios from "axios";
export const getSpecificImagesApi = async (params) => {
  const client_id = "YG5UF6KiTDNx3iI3dl_7vrFS4pp1lF9QREjCg_PwK7I";
  try {
    const response = await axios({
      method: "get",
      url: `https://api.unsplash.com/search/photos`,
      params: { client_id: client_id, ...params },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};
export default getSpecificImagesApi;
