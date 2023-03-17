import SignUp from "./SignUp";

function CustomModal() {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div
            className="modal-content"
            style={{
              marginTop: "52px",
              height: "620px",
              width: "700px !important",
              overflow: "auto",
              textAlign: "center",
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign in
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomModal;
