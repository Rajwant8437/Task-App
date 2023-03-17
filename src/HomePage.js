import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Background1, Background3 } from "./assets";
import HomepageSearchbar from "./HomepageSearchbar";
import {
  getRandomImages,
  getRandomImagesReset,
} from "./redux/actions/getRandomImagesAction";

function HomePage(props) {
  const { getRandomImages, getRandomImagesState, getRandomImagesReset } = props;

  useEffect(() => {
    getRandomImages();
  }, []);

  return (
    <div className="position-relative bg-dark">
      <div
        style={{
          backgroundImage: `url(${
            getRandomImagesState?.data?.urls?.full || Background3
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "650px",
          marginTop: "20px",
          opacity: "65%",
        }}
      ></div>
      <div
        className="position-absolute top-50 start-50 translate-middle"
        media="(min-width:400px)"
        style={{
          color: "aliceblue",
          fontFamily: "inherit",
          width: "65%",
        }}
      >
        <h1 style={{ fontWeigh: "700", fontSize: "56px" }}>Unsplash</h1>
        <p className="fs-4">
          {/* // style={{ fontSize: "27px", fontWeight: "500" }}> */}
          The internet's source for visuals.
          <br />
          Powered by creators everywhere.
        </p>
        <HomepageSearchbar />
        <span
          className="d-flex justify-content-flex-start mt-4"
          style={{
            alignItems: "center",
            fontWeight: "400",
            fontSize: "18px",
          }}
        >
          Trending :
          <ul class="nav flex-row text-white" style={{ gap: "8px" }}>
            <a
              class="text-white text-decoration-none"
              aria-current="page"
              href="#"
            >
              flower,
            </a>
            <a class=" text-white text-decoration-none" href="#">
              wallpapers,
            </a>
            <a class=" text-white text-decoration-none" href="#">
              background,
            </a>
            <a class=" text-white text-decoration-none" href="#">
              happy,
            </a>
            <a class=" text-white text-decoration-none" href="#">
              love
            </a>
          </ul>
        </span>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  getRandomImagesState: state.getRandomImagesState,
});
const mapDispatchToProps = (dispatch) => ({
  getRandomImages: (params) => dispatch(getRandomImages(params)),
  getRandomImagesReset: () => dispatch(getRandomImagesReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
