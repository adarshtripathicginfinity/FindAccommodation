import React, { useState } from "react";
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
import OffcanvusAvailableAccommodation from "./offcanvusAvailableAccommodation";
import ModalAvailableAccommodation from "./modalAvailableAccommodation";

const MapAvailableAccommodations = (props) => {
  const furnishType = '';
  function isFurnished (value){
    if (value.fullyfurnished ==  true) {
      furnishType = "Fully Furnished"
    }
    else if (value.semifurnished ==  true) {
      furnishType = "Semi Furnished"
    }
    else if (value.unfurnished ==  true) {
      furnishType = "Un-Furnished"
    }
    return furnishType

  }
  return (
    <>
      <div
        className="container-fluid"
        style={{ margin: "0", padding: "0" }}
      ></div>
      <div className="row ">
        <div className="col-4 col-sm-0 d-none d-sm-block">
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
          className={
            props.AccData.length > 0
              ? "scrollbar col-8"
              : "col-8 no_data_box"
          }
          style={{ backgroundColor: "#F5F5F5" }}
        >
          {props.AccData.length > 0 ? (
            <div className=" row row-cols-2">
              {props.AccData.map((data, index) => (
                <div key={data.id}>
                  <div
                    className="availableAcco__card"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="p-3">
                      <div className="d-flex mb-3">
                        <div className="me-2">
                          <img src={userphoto} alt="" />
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
                          <p className="mb-0  availableAcco__card-p-id">
                            {data.cgiid}
                          </p>
                        </div>
                      </div>

                      <div
                        className="d-flex align-item-center"
                        style={{ marginBottom: "0.31rem" }}
                      >
                        <p className="availableAcco__card-p-main">Landmark:</p>
                        <p className="availableAcco__card-p-sector">
                          {data.locality}, Noida
                        </p>
                      </div>

                      <div className="d-flex mb-2">
                        <img src={gps} alt="" />
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
                            <img src={office} alt="" />
                          </div>
                          <div className="d-flex justify-content-center">
                            <p className="mb-0 text-center px-2">
                              {/* {data.distance} */}2 km from Sec-3 Office 
                            </p>
                          </div>
                        </div>
                        <div className="nearby-location">
                          <div className="d-flex justify-content-center">
                            <img src={metro} alt="" />
                          </div>
                          <div className="d-flex justify-content-center">
                            <p className="mb-0 text-center">
                              Nearest Metro  {data.nearestmetrostation} 
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
                          {data.acctypename} | {data.flatType}{" "}
                          {data.furnishedType ? `| ${data.furnishedType}` : ""}
                        </p>
                        <div className="d-flex">
                          <img src={greencheck} alt="" />
                          <p className="availableAcco__card-p-green" style={{}}>
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
                  <ModalAvailableAccommodation modalData/>
                  <OffcanvusAvailableAccommodation />
                </div>
              ))}
            </div>
          ) : (
            <NoDataaPage />
          )}
        </div>
      </div>
      <div />
    </>
  );
};

export default MapAvailableAccommodations;
