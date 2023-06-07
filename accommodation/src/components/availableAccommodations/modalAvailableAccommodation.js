import React, { useState } from "react";
import "./modalAvailableAccommodation.css";
import greentick from "../../images/greentickfinal.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ModalAvailableAccommodation = (props) => {
  const Mdata = props.modalData;
  const navigate = useNavigate();

  const [btnColor, setBtnColor] = useState(false);

  const userData = localStorage.getItem("userData");
  const [data, setData] = useState(JSON.parse(userData));

  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [incentive, setIncentive] = useState();

  const handlemessageText = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  const handleModalbtn = (event) => {
    event.preventDefault();

    axios
      .post("https://cg-accommodation.azurewebsites.net/showInterest", {
        accommodationId: props.modalData.id,
        userId: data.id,
        incentive: incentive,
        message: message,
      })
      .then((response) => {
        console.log(response.data);

        navigate("/landingpage");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      <div
        className="modal fade"
        id={`exampleModal_${props.modalData.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                style={{
                  color: "#343435",
                  fontWeight: "700",
                }}
              >
                Request Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form
                onSubmit={() => {
                  handleSubmit();
                }}
              >
                <div className="row mb-3">
                  <div className="d-flex">
                    <div className="me-1">
                      <img
                        className="modal-photo"
                        src={data.profileImage}
                        alt="profile"
                      />
                    </div>
                    <div className="ms-2">
                      <div className="">
                        <p
                          className="mb-0"
                          style={{
                            color: "#28519E",
                            fontWeight: "700",
                          }}
                        >
                          {data.firstName} {data.lastName}
                        </p>
                      </div>
                      <div className="d-flex">
                        <div
                          className=" d-flex "
                          style={{
                            backgroundColor: "rgba(12, 100, 49, 0.1)",
                            borderRadius: "2px",
                          }}
                        >
                          <div className="ms-2">
                            <img
                              src={data.isVerified ? greentick : ""}
                              alt="profile"
                            />
                          </div>
                          <div className="me-2">
                            <p
                              className="mb-0 ms-2 "
                              style={{ color: "#0C9A47" }}
                            >
                              {data.isVerified ? "Verified" : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <p className="modal_attribute">Email id:</p>
                  <p className="modal_value">{data.email}</p>
                </div>

                <div className="row">
                  <p className="modal_attribute">Contact Number:</p>
                  <p className="modal_value">{data.contact}</p>
                </div>
                {data.university ? (
                  <>
                    <div className="row">
                      <p className="modal_attribute">
                        University/College Name:
                      </p>
                      <p className="modal_value">Chitkara University</p>
                    </div>
                  </>
                ) : (
                  ""
                )}

                <div className="row">
                  <p className="modal_attribute">Offer Incentive (Optional):</p>
                  <input
                    className="modal_insentive-input"
                    type="text"
                    placeholder="500 - 1000"
                    value={incentive}
                    onChange={(e) => {
                      setIncentive(e.target.value);
                    }}
                  />
                </div>

                <div className="row">
                  <p className="modal_attribute" style={{ marginTop: "1rem" }}>
                    Message:
                  </p>
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="form-control modal_message-textarea"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Type your message here"
                  ></textarea>

                  <div>
                    <button
                      className="border-0 py-2 px-3 w-100 interested"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => {
                        setBtnColor(true);
                        handleModalbtn(e);
                      }}
                    >
                      Send Request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAvailableAccommodation;
