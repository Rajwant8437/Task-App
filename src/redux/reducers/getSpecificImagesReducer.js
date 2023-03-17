import {
  GET_SPECIFIC_IMAGES,
  GET_SPECIFIC_IMAGES_SUCCESS,
  GET_SPECIFIC_IMAGES_RESET,
  GET_SPECIFIC_IMAGES_FAIL,
} from "../actions/getSpecificImagesAction";

const initialState = {
  message: "",
  data: [],
  apiState: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SPECIFIC_IMAGES:
      return {
        ...state,
        apiState: "loading",
      };
    case GET_SPECIFIC_IMAGES_SUCCESS:
      return {
        ...state,
        apiState: "success",
        data: action?.params?.data,
        message: "Success!",
      };
    case GET_SPECIFIC_IMAGES_FAIL:
      return {
        ...state,
        apiState: "error",
        data: action?.params?.data,
        message: action?.params?.data?.error,
      };
    case GET_SPECIFIC_IMAGES_RESET:
      return initialState;
    default:
      return state;
  }
}
