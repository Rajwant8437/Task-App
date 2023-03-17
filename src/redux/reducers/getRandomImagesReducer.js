import {
  GET_RANDOM_IMAGES,
  GET_RANDOM_IMAGES_FAIL,
  GET_RANDOM_IMAGES_SUCCESS,
  GET_RANDOM_IMAGES_RESET,
} from "../actions/getRandomImagesAction";

const initialState = {
  message: "",
  data: [],
  apiState: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_IMAGES:
      return {
        ...state,
        apiState: "loading",
      };
    case GET_RANDOM_IMAGES_SUCCESS:
      return {
        ...state,
        apiState: "success",
        data: action?.params?.data,
        message: "Success!",
      };
    case GET_RANDOM_IMAGES_FAIL:
      return {
        ...state,
        apiState: "error",
        data: action?.params?.data,
        message: action?.params?.data?.error,
      };
    case GET_RANDOM_IMAGES_RESET:
      return initialState;
    default:
      return state;
  }
}
