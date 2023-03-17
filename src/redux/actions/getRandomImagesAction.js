export const GET_RANDOM_IMAGES = "GET_RNDOM_IMAGES";
export const GET_RANDOM_IMAGES_SUCCESS = "GET_RANDOM_IMAGES_SUCCESS";
export const GET_RANDOM_IMAGES_FAIL = "GET_RNDOM_IMAGES_FAIL";
export const GET_RANDOM_IMAGES_RESET = "GET_RANDOM_IMAGES_RESET";

export const getRandomImages = (params) => {
  return { type: GET_RANDOM_IMAGES, params };
};

export const getRandomImagesSuccess = (params) => {
  return { type: GET_RANDOM_IMAGES_SUCCESS, params };
};

export const getRandomImagesFail = (params) => {
  return { type: GET_RANDOM_IMAGES_FAIL, params };
};

export const getRandomImagesReset = (params) => {
  return { type: GET_RANDOM_IMAGES_RESET, params };
};
