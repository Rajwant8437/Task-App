import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { formatImagesData } from "./utils";
import {
  getSpecificImages,
  getSpecificImagesReset,
} from "./redux/actions/getSpecificImagesAction";
import Loader from "./Loader";

function ImagesSection(props) {
  const { getSpecificImages, getSpecificImagesState, getSpecificImagesReset } =
    props;
  const location = useLocation();
  const [images, setImages] = useState([]);
  const widths = [500, 1000, 1600];
  const ratios = [2.2, 4, 6, 8];
  const searchedData =
    new URLSearchParams(location?.search)?.get("search") || "";
  useEffect(() => {
    let payload = {
      page: 1,
      query: searchedData,
    };
    getSpecificImages(payload);
  }, []);

  useEffect(() => {
    if (getSpecificImagesState.apiState === "success") {
      setImages(formatImagesData(getSpecificImagesState?.data?.results));
      getSpecificImagesReset();
    }
  }, [getSpecificImagesState]);

  return (
    <div>
      <h1 className="mt-5 ms-5 mb-4">{searchedData}</h1>
      <div className="d-flex  flex-wrap justify-content-evenly">
        {getSpecificImagesState?.apiState === "loading" ? <Loader /> : ""}
        {images?.map((item) => {
          return (
            <div key={item.id}>
              {(
                <img src={item.src} alt={searchedData} className="mt2 mb-2" />
              ) || <Loader />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  getSpecificImagesState: state.getSpecificImagesState,
});
const mapDispatchToProps = (dispatch) => ({
  getSpecificImages: (props) => dispatch(getSpecificImages(props)),
  getSpecificImagesReset: () => dispatch(getSpecificImagesReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImagesSection);
