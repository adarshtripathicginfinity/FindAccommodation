import React, { useState, useEffect } from "react";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import "./availableAccommodations.css";
import Data from "./dummyData";
import Navbar from "../navbar/navbar";
import Blueright_arrow from "../../images/Blueright-arrow.svg";
import gps from "../../images/GPS.svg";
import office from "../../images/office.svg";
import metro from "../../images/Metrotransit.svg";
import greencheck from "../../images/Check-outlinegreen check.svg";
import userphoto from "../../images/userphoto.svg";
import search from "../../images/search.svg";
import location from "../../images/location.svg";
import allowed from "../../images/allowed.svg";
import not_allowed from "../../images/Not Allowed.svg";
import clock from "../../images/clock.svg";
import owner_name from "../../images/owner name.svg";
import call from "../../images/call.svg";
import greentick from "../../images/greentickfinal.svg";
import femaleIcon from "../../images/femaleIcon.svg";
import OpenRequirements from "./openRequirements";
import CheckboxFilterAcco from "./checkboxFilterAcco";
import CheckboxFilterReq from "./checkboxFilterReq";
import NoDataaPage from "./noDataaPage";
import { Link } from "react-router-dom";
import axios from "axios";

const OpenAccommodation = (props) => {
  const [activeBtn, setActiveBtn] = useState(false);
  const [message, setMessage] = useState("");
  const [mapaddress, setMapAddress] = useState("Pinnacle Business Park");
  const [filterData, setFilterData] = useState("");
  const [houseHabit1, setHouseHabit1] = useState("");
  const [houseHabit2, setHouseHabit2] = useState("");
  const [houseHabit3, setHouseHabit3] = useState("");
  const [distancefilterdummy, setDistancefilterdummy] = useState(Data);
  const [distancefilter, setDistancefilter] = useState("");

  const[openReqData,setOpenReqData] = useState();

  async function handleOpenReq() {
    await axios
      .get("https://cg-accommodation.azurewebsites.net/allRequirement")
      .then((response) => {
        // Handle Success
        console.log(response.data.response);
        setOpenReqData(response.data.response);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  const queryParameters = new URLSearchParams(window.location.search);
  let type = queryParameters.get("call");

  useEffect(()=>{
    handleOpenReq();
  },[])

  useEffect(() => {
    setDistancefilter(
      openReqData.filter((Data) => {
        const distance = Data.distance;
        return distancefilterdummy.some((range) => {
          if (range === "0-2") {
            return distance >= 0 && distance <= 2;
          } else if (range === "2-5") {
            return distance > 2 && distance <= 5;
          } else if (range === "5-8") {
            return distance > 5 && distance <= 8;
          } else if (range === "8-10") {
            return distance > 8 && distance <= 10;
          }
        });
      })
    );
  }, [distancefilterdummy, openReqData]);



  const handlemessageText = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  const findAddressmap = (event) => {
    const { value } = event.target;
    setMapAddress(value);
  };

  const handleSubmit = () => {
    const data = {
      messgae: message,
      mapaddress: mapaddress,
    };
  };

  function handleToggleAvailable() {
    setActiveBtn(true);
  }
  function handleToggleRequire() {
    setActiveBtn(false);
  }

  function sendAccomoData(data) {
    setFilterData(data);
  }
  function sendhhAccomo1(data) {
    setHouseHabit1(data);
  }
  function sendhhAccomo2(data) {
    setHouseHabit2(data);
  }
  function sendhhAccomo3(data) {
    setHouseHabit3(data);
  }

  function senddistAccomo(data) {
    setDistancefilterdummy(data);
  }

  const filteredCards = openReqData.filter(
    (Data) =>
      (!filterData.length || filterData.includes(Data.accommodationType)) &&
      (!houseHabit1.length || houseHabit1.includes(Data.houseHabit1)) &&
      (!houseHabit2.length || houseHabit2.includes(Data.houseHabit2)) &&
      (!houseHabit3.length || houseHabit3.includes(Data.houseHabit3)) &&
      (!distancefilter.length || distancefilter.includes(Data.distancefilter))
  );

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <div
            className="container-fluid"
            style={{
              backgroundColor: "#F5F5F5",
              margin: "0rem",
              padding: " 1.31rem 2.68rem",
            }}
          >
            <div className="mt-0">
              <div className="">
                <div className="">
                  <div className="d-flex mt-0">
                    <div
                      className="justify-content-center"
                      style={{ marginTop: "1rem", marginRight: "0.5rem" }}
                    >
                      <Link
                        to="/landingpage"
                        style={{ textDecoration: "none", marginBottom: "0rem" }}
                      >
                        Home
                      </Link>
                    </div>
                    <div className="">
                      {activeBtn === true ? (
                        <p
                          className="text-secondary mt-3"
                          style={{ marginBottom: "1rem" }}
                        >
                          / Available Accomodation
                        </p>
                      ) : (
                        <p
                          className="text-secondary mt-3"
                          style={{ marginBottom: "1rem" }}
                        >
                          / Requirement Post
                        </p>
                      )}
                    </div>
                  </div>

                  {activeBtn === true ? (
                    <div
                      className=" d-flex flex-row"
                      style={{ marginRight: "0rem", marginBottom: "0.75rem" }}
                    >
                      <div className="availableAcco__toggle-b">
                        <button
                          type="button"
                          className="availableAcco__toggle-b-blue"
                          style={{ border: "none", marginRight: "1rem" }}
                          onClick={() => {
                            handleToggleAvailable();
                          }}
                        >
                          <p
                            style={{ marginBottom: "0rem" }}
                            className="availableAcco__toggle-b-white"
                          >
                            Available Accommodation
                          </p>
                        </button>
                        <button
                          type="button"
                          style={{ border: "none", backgroundColor: "#E9ECEB" }}
                          onClick={() => {
                            handleToggleRequire();
                          }}
                        >
                          <p
                            style={{ marginBottom: "0rem" }}
                            className="availableAcco__toggle-b-black"
                          >
                            Open Requirement
                          </p>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="d-flex flex-row "
                      style={{ marginRight: "0rem", marginBottom: "0.75rem" }}
                    >
                      <div className="availableAcco__toggle-b">
                        <button
                          type="button"
                          style={{
                            border: "none",
                            marginRight: "1rem",
                            backgroundColor: "#E9ECEB",
                          }}
                          onClick={() => {
                            handleToggleAvailable();
                          }}
                        >
                          <p
                            style={{ marginBottom: "0rem" }}
                            className="availableAcco__toggle-b-black"
                          >
                            Available Accommodation
                          </p>
                        </button>
                        <button
                          type="button"
                          className="availableAcco__toggle-b-blue"
                          onClick={() => {
                            handleToggleRequire();
                          }}
                        >
                          <p
                            style={{ marginBottom: "0rem" }}
                            className="availableAcco__toggle-b-white"
                          >
                            Open Requirement
                          </p>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="row mt-1">
                    <div className="col">
                      <div className="row mb-2">
                        <div className="col-4">
                          <div
                            class="form d-flex border w-150 px-3"
                            style={{
                              backgroundColor: "#ffffff",
                              borderRadius: "4px",
                              padding: "0",
                            }}
                          >
                            <span className="mt-1">
                              <img src={location} alt="logo"></img>
                            </span>

                            <input
                              type="text"
                              className="form-control form-input no-border"
                              value={activeBtn === true ? mapaddress : ""}
                              onChange={findAddressmap}
                              style={{ border: "none", outlineStyle: "none" }}
                            />
                            <span className="left-pan mt-1">
                              <img src={search} alt="img" />
                            </span>
                          </div>
                        </div>
                        {activeBtn === true ? (
                          <CheckboxFilterAcco
                            sendData={sendAccomoData}
                            sendHHData1={sendhhAccomo1}
                            sendHHData2={sendhhAccomo2}
                            sendHHData3={sendhhAccomo3}
                            sendDistanceData={senddistAccomo}
                          />
                        ) : (
                          <CheckboxFilterReq
                            sendData={sendAccomoData}
                            sendHHData1={sendhhAccomo1}
                            sendHHData2={sendhhAccomo2}
                            sendHHData3={sendhhAccomo3}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="container-fluid "
              style={{ margin: "0", padding: "0" }}
            >
              {activeBtn === true ? (
                <div className="row ">
                  <div className="col-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.679789251819!2d77.31854831452182!3d28.579376693236757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45a79d0f4b9%3A0x8865fb53ffb94e5a!2sPinnacle%20Business%20Park!5e0!3m2!1sen!2sin!4v1681135487004!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: "0", display: "inline-block" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>

                  <div
                    className=" scrollbar col-8"
                    style={{ backgroundColor: "#F5F5F5" }}
                  >
                    {filteredCards.length > 0 ? (
                      <div className=" row row-cols-2 ">
                        {filteredCards.map((data, index) => (
                          <div key={data.id}>
                            <div
                              className="availableAcco__card"
                              style={{ backgroundColor: "#ffffff" }}
                            >
                              <div className="p-3">
                                <div className="d-flex mb-3">
                                  <div className="me-2">
                                    <img src={userphoto} alt="img" />
                                  </div>
                                  <div className="ms-1">
                                    <div
                                      className="d-flex"
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#offcanvasRight"
                                      aria-controls="offcanvasRight"
                                    >
                                      <p className="mb-1 availableAcco__card-p-name">
                                        {data.fullName}
                                      </p>
                                      <img src={Blueright_arrow} alt="img" />
                                    </div>
                                    <p className="mb-0  availableAcco__card-p-id">
                                      {data.CGIID}
                                    </p>
                                  </div>
                                </div>

                                <div
                                  className="d-flex align-item-center"
                                  style={{ marginBottom: "0.31rem" }}
                                >
                                  <p className="availableAcco__card-p-main">
                                    Landmark:
                                  </p>
                                  <p className="availableAcco__card-p-sector">
                                    {data.sector}, Noida
                                  </p>
                                </div>

                                <div className="d-flex mb-2">
                                  <img src={gps} alt="img" />
                                  <p
                                    className="mb-0 ms-1"
                                    style={{
                                      fontWeight: "500",
                                      color: "#007FD3",
                                    }}
                                  >
                                    View on Map
                                  </p>
                                </div>
                                <div className="d-flex mb-3">
                                  <div className="me-3 nearby-location">
                                    <div className="d-flex justify-content-center">
                                      <img src={office} alt="img" />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                      <p className="mb-0 text-center px-2">
                                        {data.distance} km from Sec-3 Office
                                      </p>
                                    </div>
                                  </div>
                                  <div className="nearby-location">
                                    <div className="d-flex justify-content-center">
                                      <img src={metro} alt="img" />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                      <p className="mb-0 text-center">
                                        Nearest Metro {data.nearestMetro}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <p
                                    className="availableAcco__card-p-main"
                                    style={{ marginBottom: "0.62rem" }}
                                  >
                                    Accommodation Type:
                                  </p>
                                  <p>
                                    {data.accommodationType} | {data.flatType}{" "}
                                    {data.furnishedType
                                      ? `| ${data.furnishedType}`
                                      : ""}
                                  </p>
                                  <div className="d-flex">
                                    <img src={greencheck} alt="img" />
                                    <p
                                      className="availableAcco__card-p-green"
                                      style={{}}
                                    >
                                      I am looking for a room-mate
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <button
                                    className="border-0 py-2 px-3 w-100 interested"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    I'm interested
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabindex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
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
                                    <form onSubmit={handleSubmit}>
                                      <div className="row mb-3">
                                        <div className="d-flex">
                                          <div className="me-1">
                                            <img src={femaleIcon} alt="logo" />
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
                                                {data.fullName}
                                              </p>
                                            </div>
                                            <div className="d-flex">
                                              <div
                                                className=" d-flex "
                                                style={{
                                                  backgroundColor:
                                                    "rgba(12, 100, 49, 0.1)",
                                                  borderRadius: "2px",
                                                }}
                                              >
                                                <div className="ms-2">
                                                  <img src={greentick} alt="logo" />
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
                                              {" "}
                                              9876543210
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
                                              Offer Incentive:
                                            </p>
                                          </div>
                                          <div
                                            style={{
                                              marginLeft: "0.37rem",
                                              width: "10%",
                                            }}
                                          >
                                            <input />
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
                                              onChange={handlemessageText}
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
                                <div className="container-fluid">
                                  <div className="row">
                                    <div className="col 12">
                                      <div>
                                        <div className="row mb-3">
                                          <div className="d-flex">
                                            <div className="me-2">
                                              <img src={userphoto} alt="img" />
                                            </div>
                                            <div className="ms-1">
                                              <p className="mb-0">
                                                {data.fullName}
                                              </p>
                                              <p className="mb-0">
                                                {data.CGIID}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-2">
                                          <div>
                                            <p className="mb-0">
                                              Landmark: {data.sector}, Noida
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row mb-2">
                                          <div className="d-flex">
                                            <img src={gps} alt="logo" />
                                            <p className="ms-1 mb-0">
                                              View on Map
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row mb-4">
                                          <div className="d-flex">
                                            <div className="nearby-location py-2">
                                              <div className="d-flex justify-content-center mb-1">
                                                <img src={office} alt=" logo" />
                                              </div>
                                              <div className="d-flex justify-content-center mb-1">
                                                <p className="text mb-0">
                                                  {data.distance} kms from
                                                  Sector-3 office
                                                </p>
                                              </div>
                                            </div>
                                            <div className="nearby-location ms-3 py-2">
                                              <div className="d-flex justify-content-center">
                                                <img src={metro} alt="logo" />
                                              </div>
                                              <div className="d-flex justify-content-center">
                                                <p className="text mb-0">
                                                  Nearest metro{" "}
                                                  {data.nearestMetro}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-4">
                                          <div className="d-flex">
                                            <img
                                              src={greencheck}
                                              alt="logo"
                                              className="me-2"
                                            />
                                            <p className="mb-0">
                                              I'm looking for a room-mate
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row mb-4">
                                          <div>
                                            <p className="mb-2">
                                              Accommodation Type
                                            </p>
                                            <p className="mb-0">
                                              {data.accommodationType} |{" "}
                                              {data.flatType} |{" "}
                                              {data.furnishedType}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="row mb-4">
                                          <div className="amenities-text">
                                            <p className="mb-2">Amenities</p>
                                          </div>
                                          <div className="d-flex mb-1">
                                            <div className="d-flex justify-content-center amenities p-2 me-3">
                                              <img
                                                src={allowed}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">WiFi</p>
                                            </div>
                                            <div className="d-flex justify-content-center amenities p-2 me-3">
                                              <img
                                                src={allowed}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">Food</p>
                                            </div>
                                            <div className="d-flex justify-content-center amenities p-2">
                                              <img
                                                src={allowed}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">Kitchen</p>
                                            </div>
                                          </div>
                                          <div className="d-flex mt-2">
                                            <div className="d-flex justify-content-center amenities p-2 me-3">
                                              <img
                                                src={allowed}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">
                                                Washing Machine
                                              </p>
                                            </div>
                                            <div className="d-flex justify-content-center amenities p-2">
                                              <img
                                                src={allowed}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">Induction</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-4">
                                          <div className="habits-text">
                                            <p className="mb-2">House Habits</p>
                                          </div>
                                          <div className="d-flex">
                                            <div className="d-flex col-4 habits p-2 me-3">
                                              <img
                                                src={not_allowed}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">Non-Veg</p>
                                            </div>
                                            <div className="d-flex col-4 habits p-2 me-3">
                                              <img
                                                src={not_allowed}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p
                                                style={{
                                                  marginBottom: "0.0rem",
                                                  marginRight: "0.25rem",
                                                }}
                                              >
                                                Smoking
                                              </p>
                                            </div>
                                            <div className="d-flex col-4 amenities ">
                                              <div>
                                                <img
                                                  src={allowed}
                                                  alt="logo"
                                                  className="me-2"
                                                />
                                              </div>
                                              <p className="mb-0">Drinking</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-4">
                                          <div>
                                            <p className="mb-2">
                                              Preferred Time to Contact
                                            </p>
                                          </div>
                                          <div className="d-flex">
                                            <div className="d-flex justify-content-center amenities p-2 me-3">
                                              <img
                                                src={allowed}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">Weekend</p>
                                            </div>
                                            <div className="d-flex justify-content-center amenities p-2">
                                              <img
                                                src={clock}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">
                                                11:00 AM - 04:00 PM
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mb-4">
                                          <div>
                                            <p className="mb-2">
                                              Owner Information
                                            </p>
                                          </div>
                                          <div className="mt-1">
                                            <div className="d-flex mb-3">
                                              <img
                                                src={owner_name}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">John Doe</p>
                                            </div>
                                            <div className="d-flex">
                                              <img
                                                src={call}
                                                alt="logo"
                                                className="me-2"
                                              />
                                              <p className="mb-0">9876543210</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row mt-1">
                                          <div>
                                            <button
                                              type="button"
                                              className="w-100 border-0 justify-content-center interested"
                                            >
                                              I'm interested
                                            </button>
                                          </div>
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
                    ) : (
                      <NoDataaPage />
                    )}
                  </div>
                </div>
              ) : (
                <OpenRequirements sendingData={filteredCards} />
              )}
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default OpenAccommodation;
