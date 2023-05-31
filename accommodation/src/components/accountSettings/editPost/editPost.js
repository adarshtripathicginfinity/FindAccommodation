import React, { useState } from "react";
import "./editPost.css";

const EditPost = () => {
  const [lookAcc, setlookAcc] = useState(false);
  const [lookRoommate, setLookRoommate] = useState(false);
  const [lookRequirement, setLookRequirement] = useState(false);
  return (
    <>
      <div className="container " style={{ marginTop: "1.5rem" }}>
        <div className=" row">
          <p className="editpost__heading"> Volunteer Post</p>
          <p className="editpost__description ">
            In case you already found, you can Step back from participation:
          </p>
          <div className=" d-flex justify-content-between">
            <div>
              <p
                className="p_color"
                style={{ width: "fit-content", marginBottom: "0" }}
              >
                Accommodations are currently available near me
              </p>
            </div>

            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={lookAcc}
                onChange={(e) => {
                  setlookAcc(e.target.checked);
                }}
              />
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "1.9rem" }}>
          <div className="d-flex justify-content-between">
            <div>
              <p className="p_color" style={{ marginBottom: "0" }}>
                I am looking for a roommate
              </p>
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={lookRoommate}
                onChange={(e) => {
                  setLookRoommate(e.target.checked);
                }}
              />
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: "1.9rem" }}>
          <p className="editpost__heading"> Volunteer Post</p>
          <p className="editpost__description ">
            In case you already found, you can Step back from participation:
          </p>
          <div className="d-flex justify-content-between">
            <div>
              <p className="p_color" style={{ marginBottom: "0" }}>
                I am looking for a roommate
              </p>
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={lookRequirement}
                onChange={(e) => {
                  setLookRequirement(e.target.checked);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPost;
