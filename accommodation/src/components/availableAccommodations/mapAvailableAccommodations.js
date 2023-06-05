import React from "react";
import "./availableAccommodations.css";
import Blueright_arrow from "../../images/Blueright-arrow.svg";
import office from "../../images/office.svg";
import metro from "../../images/Metrotransit.svg";
import greencheck from "../../images/Check-outlinegreen check.svg";
import NoDataaPage from "./noDataaPage";
import OffcanvusAvailableAccommodation from "./offcanvusAvailableAccommodation";
import ModalAvailableAccommodation from "./modalAvailableAccommodation";

const MapAvailableAccommodations = (props) => {
  

  function checkAccType(info) {
    if (info["1rk"] == true) {
      return "1 RK";
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
      <div className="row ">
        <div className="col-4 col-sm-0 d-none d-md-flex">
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
              ? "scrollbar col-md-8"
              : " no_data_box col-8"
          }
          style={{ backgroundColor: "#F5F5F5" }}
        >
          {props.AccData.length > 0 ? (
            <div className=" row row-cols-sm-2">
              {props.AccData.map((data, index) => (
                <div key={data.id}>
                  <div
                    className="availableAcco__card"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="p-3">
                      <div className="d-flex mb-3">
                        <div className="me-2">
                          <img src={data.profileimage} alt="profile" style={{float: "left", height: "40px", width: "40px", borderRadius: "50%"}}/>
                        </div>
                        <div className="ms-1">
                          <div
                            className="d-flex"
                            data-bs-toggle="offcanvas"
                            data-bs-target={`#exampleOffCanvas_${data.id}`}
                            aria-controls="offcanvasRight"
                          >
                            <p className="mb-1 availableAcco__card-p-name">
                              {data.firstname} {data.lastname}
                            </p>
                            <img src={Blueright_arrow} alt="img" />
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

                      
                      <div className="d-flex mb-3">
                        <div
                          className="me-3 nearby-location"
                          style={{ padding: "1.5rem" }}
                        >
                          <div className="d-flex justify-content-center">
                            <img src={office} alt="logo" />
                          </div>
                          <div className="d-flex justify-content-center">
                            <p className="mb-0 text-center px-2">
                              {/* {data.distance} */}2 km from Sec-3 Office
                            </p>
                          </div>
                        </div>
                        <div
                          className="nearby-location"
                          style={{ padding: "1.5rem" }}
                        >
                          <div className="d-flex justify-content-center">
                            <img src={metro} alt="logo" />
                          </div>
                          <div className="d-flex justify-content-center">
                            <p className="mb-0 text-center">
                              Nearest Metro {data.nearestmetrostation}
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
                         
                          {data.acctypename} | {checkAccType(data)}  {data.acctypename == "flat" ? `| ${checkFurnished(data)}` : checkFurnished(data) } 
                        </p>
                        <div className="d-flex">
                          <img src={greencheck} alt="logo" />
                          <p className="availableAcco__card-p-green" style={{}}>
                            I am looking for a {data.isroommate ? "room mate": "flat mate"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          className="border-0 py-2 px-3 w-100 interested"
                          data-bs-toggle="modal"
                          data-bs-target= {`#exampleModal_${data.id}`}
                        >
                          I'm interested
                        </button>
                      </div>
                    </div>
                  </div>
                  <ModalAvailableAccommodation modalData= {props.AccData[index]}   />
                  <OffcanvusAvailableAccommodation canvasData = {props.AccData[index]} />
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
