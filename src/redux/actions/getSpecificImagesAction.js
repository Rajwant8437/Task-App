export const GET_SPECIFIC_IMAGES = "GET_SPECIFIC_IMAGES";
export const GET_SPECIFIC_IMAGES_SUCCESS = "GET_SPECIFIC_IMAGES_SUCCESS";
export const GET_SPECIFIC_IMAGES_FAIL = "GET_SPECIFIC_IMAGES_FAIL";
export const GET_SPECIFIC_IMAGES_RESET = "GET_SPECIFIC_IMAGES_RESET";

export const getSpecificImages = (params) => {
  return { type: GET_SPECIFIC_IMAGES, params };
};

export const getSpecificImagesSuccess = (params) => {
  return { type: GET_SPECIFIC_IMAGES_SUCCESS, params };
};

export const getSpecificImagesFail = (params) => {
  return { type: GET_SPECIFIC_IMAGES_FAIL, params };
};

export const getSpecificImagesReset = (params) => {
  return { type: GET_SPECIFIC_IMAGES_RESET, params };
};
