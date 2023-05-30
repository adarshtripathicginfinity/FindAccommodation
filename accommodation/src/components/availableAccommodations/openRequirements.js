import React from "react";
// import Data from "./dummyData";
// import Navbar from "../navbar/navbar";
import Blueright_arrow from "../../images/Blueright-arrow.svg";
import gps from "../../images/GPS.svg";
import office from "../../images/office.svg";
import metro from "../../images/Metrotransit.svg";
import greencheck from "../../images/Check-outlinegreen check.svg";
import userphoto from "../../images/userphoto.svg";
// import search from "../../images/search.svg";
// import location from "../../images/location.svg";
import allowed from "../../images/allowed.svg";
import not_allowed from "../../images/Not Allowed.svg";
import clock from "../../images/clock.svg";
import owner_name from "../../images/owner name.svg";
import call from "../../images/call.svg";
import greentick from "../../images/greentickfinal.svg";
import femaleIcon from "../../images/femaleIcon.svg";
// import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import "./openRequirements.css";
import Date from "../../images/date.svg";
import Currency from "../../images/currency_rupee.svg";
import vector from '../../images/alert.svg'

const OpenRequirements = (props) => {
  // const [message, setMessage] = useState("");
  // const [mapaddress, setMapAddress] = useState("Pinnacle Business Park");

  // const handlemessageText = (event) => {
  //   const { value } = event.target;
  //   setMessage(value);
  // };

  // const findAddressmap = (event) => {
  //   const { value } = event.target;
  //   setMapAddress(value);
  // };

  // const handleSubmit = () => {
  //   const data = {
  //     messgae: message,
  //     // mapaddress: mapaddress,
  //   };

  //   console.log(data);
  // }

 

  function checkAccType(info) {
    if (info["1rk"] == true) {
      return "1 RK";
    }
    if (info["2rk"] == true) {
      return "2 RK";
    }
    if (info["1bhk"] == true) {
      return "1 BHK";
    }

    if (info["2bhk"] == true) {
      return "2 BHK";
    }
    if (info["3bhk"] == true) {
      return "3 BHK";
    }
    if (info["4bhk"] == true) {
      return "4 BHK";
    }

    if (info["singlesharing"] == true) {
      return "Single Sharing";
    }
    if (info["doublesharing"] == true) {
      return "Double Sharing";
    }
    if (info["triplesharing"] == true) {
      return "Triple Sharing";
    }
  }

  function checkFurnished(info) {
    if (info["fullyfurnished"]) {
      return "Fully Furnished";
    }
    if (info["semifurnished"]) {
      return "Semi Furnished";
    }
    if (info["unfurnished"]) {
      return "Un Furnished";
    }
  }

  return (
    <>
      <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
        <div
          className=" scrollbar col-12"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className=" row row-cols-md-3 ">
            {props.sendingData.map((data, index) => (
              <div key={data.requirementid}>
                <div
                  className="availableAcco__card"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <div className="p-3">
                    <div className="d-flex mb-3">
                      <div className="me-2">
                        <img src={data.profileimage} alt="" />
                      </div>
                      <div className="ms-1">
                        <div
                          className="d-flex"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          <p className="mb-1 availableAcco__card-p-name">
                            {data.firstname} {data.lastname}
                          </p>
                          <img src={Blueright_arrow} alt="" />
                        </div>

                        <div className="d-flex">
                          <div
                            className=" d-flex "
                            style={{
                              backgroundColor: "rgba(12, 100, 49, 0.1)",
                              borderRadius: "0.12rem",
                            }}
                          >
                            <img
                              src={greentick}
                              alt=""
                              style={{ margin: "0.31rem 0.31rem 0.5rem" }}
                            />
                            <p
                              className="openRequirements__card-p-verify"
                              style={{ color: "#0C9A47" }}
                            >
                              Verified
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex" style={{ marginBottom: "1.06rem" }}>
                      <p
                        className="openRequirements__card-p-main"
                        style={{ marginBottom: "0rem" }}
                      >
                        Preferred Location :
                      </p>
                      <p
                        className="openRequirements__card-p-sector"
                        style={{ marginBottom: "0rem" }}
                      >
                        {data.locality}
                      </p>
                    </div>

                    <div className="d-flex" style={{ marginBottom: "1rem" }}>
                      <img src={greencheck} alt="" />
                      <p className="openRequirements__card-p-green">
                        I am looking for a room-mate
                      </p>
                    </div>

                    <div className="mb-3">
                      <p
                        className="openRequirements__card-p-main"
                        style={{ marginBottom: "0.62rem" }}
                      >
                        Accommodation Type:
                      </p>
                      <p>
                      {data.acctypename} | {checkAccType(data)}  {data.acctypename == "flat" ? `| ${checkFurnished(data)}` : checkFurnished(data) } 
                      
                      </p>
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                      <p className="openRequirements__card-p-main">
                        Relocation Date
                      </p>
                      <div className="d-flex">
                        <img src={Date} />
                        <p
                          style={{ marginBottom: "0rem", marginLeft: "0.5rem" }}
                        >
                          {data.relocationdate}
                        </p>
                      </div>
                    </div>

                    <div>
                      <button
                        className="border-0 py-2 px-3 w-100 interested"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Offer help!
                      </button>
                    </div>
                  </div>
                </div>

                {/* Modal */}
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
                        <form>
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
                                    {data.firstname} {data.lastname}
                                  </p>
                                </div>
                                <div className="d-flex">
                                  <p className="mb-0  openRequirements__card-p-id">
                                    {data.CGIID}
                                  </p>
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
                                  Email id:
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
                                  {" "}
                                  harshitakhurana@expample.com
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
                                  Contact No:
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
                                  9876543210
                                </p>
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
                                  value=""
                                  onChange=""
                                  class="form-control"
                                  id="exampleFormControlTextarea1"
                                  rows="3"
                                ></textarea>
                              </div>
                              <div>
                                <button
                                  className="border-0 py-2 px-3 w-100 interested"
                                  data-bs-toggle="modal"
                                  data-bs-target="/OpenRequirements"
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

                {/* Offcanvas code */}
                <div
                  className="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div class="offcanvas-header d-flex justify-content-end mb-0">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body mt-0">
                    <div className="row">
                      <div className="col 12">
                        <div>
                          <div className="row mb-3">
                            <div className="d-flex">
                              <div className="me-2">
                                <img src={userphoto} alt="" />
                              </div>
                              <div className="ms-1">
                                <p className="mb-1 availableAcco__card-p-name">
                                  {data.firstname} {data.lastname}
                                </p>
                                <div className="d-flex">
                                  <div
                                    className=" d-flex "
                                    style={{
                                      backgroundColor: "rgba(12, 100, 49, 0.1)",
                                      borderRadius: "0.12rem",
                                    }}
                                  >
                                    <img
                                      src={greentick}
                                      alt=""
                                      style={{
                                        margin: "0.31rem 0.31rem 0.5rem",
                                      }}
                                    />
                                    <p
                                      className="openRequirements__card-p-verify"
                                      style={{ color: "#0C9A47" }}
                                    >
                                      Verified
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="d-flex"
                            style={{ marginBottom: "1.5rem" }}
                          >
                            <p
                              className="openRequirements__card-p-main"
                              style={{ fontSize: "1rem", marginBottom: "0rem" }}
                            >
                              Preferred Location :
                            </p>
                            <p
                              className="openRequirements__card-p-sector"
                              style={{ marginBottom: "0rem" }}
                            >
                              {data.locality}
                            </p>
                          </div>

                          <div
                            className="d-flex"
                            style={{ marginBottom: "1.5rem" }}
                          >
                            <img src={greencheck} alt="" />
                            <p
                              className="openRequirements__card-p-green"
                              style={{ fontSize: "1rem", marginBottom: "0rem" }}
                            >
                              I am looking for a flat
                            </p>
                          </div>

                          <div style={{ marginBottom: "1.5rem" }}>
                            <p
                              className="openRequirements__card-p-main"
                              style={{ fontSize: "1rem" }}
                            >
                              Accommodation Type:
                            </p>
                            <p>
                              {data.accommodationType} | {data.flatType}{" "}
                              {data.furnishedType
                                ? `| ${data.furnishedType}`
                                : ""}
                            </p>
                          </div>

                          <div
                            className="d-flex"
                            style={{ marginBottom: "1.5rem" }}
                          >
                            <p
                              style={{
                                fontWeight: "600",
                                fontSize: "1rem",
                                marginBottom: "0rem",
                               
                              }}
                            >
                              I am non vegetarian, non smoker & non drinker
                            </p>
                          </div>

                          <div style={{ marginBottom: "1.5rem" }}>
                            <p
                              className="openRequirements__card-p-main"
                              style={{ fontSize: "1rem" }}
                            >
                              Relocation Date
                            </p>
                            <div className="d-flex">
                              <img src={Date} />
                              <p
                                style={{
                                  marginBottom: "0rem",
                                  marginLeft: "0.5rem",
                                }}
                              >
                                {data.relocationdate}
                              </p>
                            </div>
                          </div>

                          <div style={{ marginBottom: "1.5rem" }}>
                            <p
                              className="openRequirements__card-p-main"
                              style={{ fontSize: "1rem" }}
                            >
                              Incentives
                            </p>
                            <div className="d-flex">
                              <img src={Currency} />
                              <p
                                style={{
                                  marginBottom: "0rem",
                                  marginLeft: "0.5rem",
                                }}
                              >
                                1000
                              </p>
                            </div>
                          </div>

                          <div
                            className="row mb-4  mt-1 w-100 "
                            style={{ marginLeft: "0.30%" }}
                          >
                            <div
                              className="col-12 d-flex "
                              style={{
                                backgroundColor: "#E3F3FC",
                                borderRadius: "4px",
                              }}
                            >
                              <img src={vector} alt="" className="img2" />
                              <p
                                className="mb-2 mt-2 alerttext"
                                style={{ color: "black" }}
                              >
                                This email account will be used to send password
                                instructions
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenRequirements;
