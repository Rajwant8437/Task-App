import React, { useState } from "react";
import { Ulogo } from "./assets";
import CustomModal from "./CustomModal";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      {visible && <CustomModal /> ? <CustomModal /> : null}
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a
              class="navbar-brand ms-3"
              href="#"
              style={{ fontWeight: "700", fontSize: "20px" }}
            >
              <img
                src={Ulogo}
                alt=""
                width="46"
                height="28"
                class="d-inline-block align-text-top"
                style={{ marginRight: "8px" }}
              />
              UNSPLASH{" "}
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse m-auto"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-auto mb-lg-1 m-auto ">
                <li className="nav-item me-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    Explore
                  </a>
                </li>
                <li className="nav-item me-2">
                  <a className="nav-link" href="#">
                    Advertise{" "}
                  </a>
                </li>

                <li className="nav-item me-2">
                  <a
                    className="nav-link"
                    href="#"
                    style={{ color: "#0db6f2", fontWeight: "bold" }}
                  >
                    unsplash+
                  </a>
                </li>
                <li className="nav-item me-2">
                  <button type="button" class="btn btn-outline-warning">
                    Upload Photo
                  </button>
                </li>
              </ul>
              <form className="d-flex">
                <button
                  type="button"
                  className="btn btn-outline-dark me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  onClick={() => setVisible(true)}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
