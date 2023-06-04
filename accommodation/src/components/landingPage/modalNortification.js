import React, { useState } from "react";
// import "./modalAvailableAccommodation.css";
import greentick from "../../images/greentickfinal.svg";
import femaleIcon from "../../images/femaleIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import vector from "../../images/alert.svg";
import axios from "axios";
import "./modalNortification.css";

const ModalNortification = (props) => {
  const Mdata = props.modalData;
  const navigate = useNavigate();

  const userData = localStorage.getItem("userData");
  const [data, setData] = useState(JSON.parse(userData));

  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [incentive, setIncentive] = useState(1000);

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
      .post("https://cg-accommodation.azurewebsites.net/interest", {
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
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
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
                <div className="d-flex" >
                  <div className="modal_image">
                    <img 
                      src=""
                      alt="logo"
                    />
                  </div>
                  <div className="d-flex"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft:'1rem'
                    }}
                  >
                    <div> 
                        <p className="modal_name">jagga daku</p>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="d-flex verified-icon">
                        <img
                          src={greentick}
                          
                        />
                        <p className="modal_verified-p"
                        
                        >Verified</p>
                      </div>
                      <div className="d-flex alert-message">
                      <img
                          src={vector}
                          alt=""
                          style={{marginTop:'0.15rem'}}
                        />
                      <p className="alert-message-p">This person is new joinner</p>
                      </div>
                    </div>
                  </div>
                </div>
                

                <div className="row" style={{marginTop:'1rem'}}>
                  <p className="modal_attribute">Email id:</p>
                  <p className="modal_value">a@gmail.com</p>
                </div>

                <div className="row">
                  <p className="modal_attribute">Contact Number:</p>
                  <p className="modal_value">987654321</p>
                </div>

                <div className="row">
                  <p className="modal_attribute">University/College Name:</p>
                  <p className="modal_value">Chitkara University</p>
                </div>

                <div className="row">
                  <p className="modal_attribute">Incentive:</p>
                  <p className="modal_value">1000</p>
                </div>

                <div className="row">
                  <p className="modal_attribute">Message:</p>
                  <p>
                    I am interested in your accommodation. Please find the
                    complete details.
                  </p>
                </div>

                <div className="row">
                  <div className="col-6">
                    <button
                      className="btn btn-primary w-100 button-decline"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => handleModalbtn(e)}
                    >
                      Decline
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-primary w-100 button-accept"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={(e) => handleModalbtn(e)}
                    >
                      Accept
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

export default ModalNortification;

// <div className="row mb-3">
// <div className="d-flex">
//   <div className="col me-1">
//     <img className="modal-photo" src="" alt="" />
//   </div>
//   <div className="col ms-2">
//     <div className="">
//       <p
//         className="mb-0"
//         style={{
//           color: "#28519E",
//           fontWeight: "700",
//         }}
//       >
//         jassi singh
//       </p>
//     </div>

//     <div className="d-flex">
//       <div
//         className=" d-flex "
//         style={{
//           backgroundColor: "rgba(12, 100, 49, 0.1)",
//           borderRadius: "2px",
//         }}
//       >
//         <div className="ms-2">
//           <img src={greentick} alt="" />
//         </div>

//         <div className="me-2">
//           <p
//             className="mb-0 ms-2 "
//             style={{ color: "#0C9A47" }}
//           >
//             Verified
//           </p>
//         </div>

//       </div>
//       <div
//         className="row mb-4  mt-1 w-100 "
//         style={{ marginLeft: "0.30%" }}
//       >
//         <div
//           className="col-12 d-flex "
//           style={{
//             backgroundColor: "#E3F3FC",
//             borderRadius: "4px",
//           }}
//         >
//           <img src={vector} alt="" className="img2" />
//           <p
//             className="mb-2 mt-2 alerttext"
//             style={{ color: "black" }}
//           >
//             This person is the new joiner
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
