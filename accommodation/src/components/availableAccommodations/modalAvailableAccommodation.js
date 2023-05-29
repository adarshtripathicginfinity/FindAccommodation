import React, { useState } from "react";
import "./availableAccommodations.css";
import greentick from "../../images/greentickfinal.svg";
import femaleIcon from "../../images/femaleIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ModalAvailableAccommodation = (props) => {
  const navigate = useNavigate();

  const userData = localStorage.getItem("userData");
  const [data, setData] = useState(JSON.parse(userData));

  const [contact,setContact] = useState("");
  const [message, setMessage] = useState("");
  const [incentive,setIncentive] = useState("");

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
      .post("https://cg-accommodation.azurewebsites.net/interest", {accommodationId:props.modalData.id,
      userId:data.id,incentive:incentive , message:message})
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
        class="modal fade"
        id={`exampleModal_${props.modalData.id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* {console.log("Hello w",props.modalData)} */}
        <div class="modal-dialog  modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title"
                style={{
                  color: "#343435",
                  fontWeight: "700",
                }}
              >
                Request Details
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <form
                onSubmit={() => {
                  handleSubmit();
                }}
              >
                <div className="row mb-3">
                  <div className="d-flex">
                    <div className="me-1">
                      <img src={femaleIcon} alt="" />
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
                        {/* {console.log("ANuttar",props.modalData.firstname)} */}
                          {props.modalData.firstname} {props.modalData.lastname}
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
                            <img src={greentick} alt="" />
                          </div>
                          <div className="me-2">
                            <p
                              className="mb-0 ms-2 "
                              style={{ color: "#0C9A47" }}
                            >
                              Verified
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="d-flex">
                    <div>
                      <p
                        style={{
                          color: "#343435",
                          fontWeight: "700",
                        }}
                      >
                        Email id: {data.email}
                      </p>
                    </div>
                   
                  </div>
                </div>

                <div className="row">
                  <div className="d-flex">
                    <div>
                      <p
                        style={{
                          color: "#343435",
                          fontWeight: "700",
                        }}
                      >
                        Contact Number
                      </p>
                    </div>
                    <div className="d-flex">
                      
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Contact Number"
                        value={contact}
                        onChange={(e)=>{setContact(e.target.value)}}
                      />
                     
                    </div>
                    <div>
                      <p
                        className="ms-2"
                        style={{
                          color: "#343435",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="d-flex">
                    <div>
                      <p
                        style={{
                          color: "#343435",
                          fontWeight: "700",
                        }}
                      >
                        University/College Name:
                      </p>
                    </div>
                    <div>
                      <p
                        className="ms-2"
                        style={{
                          color: "#343435",
                          fontWeight: "500",
                        }}
                      >
                        Chitkara University
                      </p>
                    </div>
                  </div>
                </div> */}

                <div className="row">
                  <div className="d-flex">
                    <div>
                      <p
                        style={{
                          color: "#343435",
                          fontWeight: "700",
                        }}
                      >
                        Offer Incentive:
                      </p>
                    </div>
                    <div
                      style={{
                        marginLeft: "0.37rem",
                        width: "10%",
                      }}
                    >
                      <input type="text" value={incentive} onChange={(e)=>{setIncentive(e.target.value)}} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="mb-1">
                    <p
                      className="mb-0"
                      style={{
                        color: "#343435",
                        fontWeight: "700",
                      }}
                    >
                      Message:
                    </p>
                  </div>
                  <div>
                    <div className="mb-3">
                      <textarea
                        value={message}
                        onChange={(e)=>{setMessage(e.target.value)}}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      
                      ></textarea>
                    </div>
                    <div>
                      <button
                        className="border-0 py-2 px-3 w-100 interested"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={(e)=>handleModalbtn(e)}
                      >
                        Send Request
                      </button>
                    </div>
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
