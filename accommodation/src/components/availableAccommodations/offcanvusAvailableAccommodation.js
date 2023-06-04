import React from "react";
import gps from "../../images/GPS.svg";
import office from "../../images/office.svg";
import metro from "../../images/Metrotransit.svg";
import greencheck from "../../images/Check-outlinegreen check.svg";
import userphoto from "../../images/userphoto.svg";
import allowed from "../../images/allowed.svg";
import not_allowed from "../../images/Not Allowed.svg";
import clock from "../../images/clock.svg";
import owner_name from "../../images/owner name.svg";
import call from "../../images/call.svg";
import "./offcanvusAvailableAccomodation.css";

const OffcanvusAvailableAccommodation = (props) => {
  const data = props.canvasData;
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
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id={`exampleOffCanvas_${props.canvasData.id}`}
        aria-labelledby="offcanvasRightLabel"
      >
        {/* {console.log(props.canvasData)} */}
        {console.log(data)}
        <div class="offcanvas-header d-flex justify-content-end mb-0">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body" style={{ padding: "0" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col 12">
                <div>
                  <div
                    className="row justify-content-center"
                    style={{ marginBottom: "1rem" }}
                  >
                    <img
                      src={userphoto}
                      style={{ width: "9.37rem", height: "9.37rem" }}
                    />
                    <p className="container_fullname">
                      {data.firstname} {data.lastname}
                    </p>
                    <p className="container_CGI" tyle={{}}>
                      {data.cgiid}
                    </p>
                  </div>
                  <div className="row" style={{ marginBottom: "0.5rem" }}>
                    <div style={{ display: "flex" }}>
                      <p style={{ fontWeight: "700", marginBottom: "0" }}>
                        Landmark:{" "}
                      </p>
                      <p style={{ marginBottom: "0" }}>{data.locality}</p>
                    </div>
                  </div>
                  <div className="row" style={{ marginBottom: "0.5rem" }}>
                    <div className="d-flex">
                      <img src={gps} alt="" />
                      <p
                        style={{
                          marginBottom: "0",
                          marginLeft: "0.25rem",
                          color: "#007FD3",
                          fontWeight: "700",
                        }}
                      >
                        View on Map
                      </p>
                    </div>
                  </div>
                  <div className="row" style={{ marginBottom: "1.5rem" }}>
                    <div className="d-flex">
                      <div className="nearby-location">
                        <div
                          className="d-flex justify-content-center"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          <img src={office} alt="" />
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{ marginBottom: "0.5rem" }}
                        >
                          <p className="text" style={{ marginBottom: "0" }}>
                            {/* {data.distance}  */}
                            kms from Sector-3 office
                          </p>
                        </div>
                      </div>
                      <div
                        className="nearby-location"
                        style={{
                          marginTop: "0.5rem",
                          marginBottom: "0.5rem",
                          marginLeft: "1rem",
                        }}
                      >
                        <div className="d-flex justify-content-center">
                          <img src={metro} alt="" />
                        </div>
                        <div className="d-flex justify-content-center">
                          <p className="text" style={{ marginBottom: "0" }}>
                            Nearest metro {data.nearestmetrostation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ marginBottom: "1.5rem" }}>
                    <div className="d-flex">
                      <img
                        src={greencheck}
                        alt=""
                        style={{ marginRight: "0.5rem" }}
                      />
                      <p
                        style={{
                          marginBottom: "0",
                          color: "#14A450",
                          fontWeight: "500",
                        }}
                      >
                        I am looking for a{" "}
                        {data.isroommate ? "room mate" : "flat mate"}
                      </p>
                    </div>
                  </div>

                  <div className="row " style={{ marginBottom: "1.5rem" }}>
                    <div>
                      <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
                        Accommodation Type
                      </p>
                      <p style={{ marginBottom: "0" }}>
                        {data.acctypename} | {checkAccType(data)}{" "}
                        {data.acctypename == "flat"
                          ? `| ${checkFurnished(data)}`
                          : checkFurnished(data)}
                      </p>
                    </div>
                  </div>

                  <div className="row " style={{ marginBottom: "1.5rem" }}>
                    <div className="amenities-text">
                      <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
                        Amenities
                      </p>
                    </div>
                    <div className="d-flex" style={{ marginBottom: "0.25rem" }}>
                      <div
                        className={
                          props.canvasData.wifi
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                        style={{ padding: "0.5rem" }}
                      >
                        <img
                          src={props.canvasData.wifi ? allowed : not_allowed}
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>WiFi</p>
                      </div>
                      <div
                        className={
                          props.canvasData.food
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                        style={{ padding: "0.5rem" }}
                      >
                        <img
                          src={props.canvasData.food ? allowed : not_allowed}
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Food</p>
                      </div>
                      <div
                        className={
                          props.canvasData.ac
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                        style={{ padding: "0.5rem", marginRight: "1rem" }}
                      >
                        <img
                          src={props.canvasData.ac ? allowed : not_allowed}
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>AC</p>
                      </div>
                    </div>
                    <div className="d-flex" style={{ marginBottom: "0.25rem" }}>
                      <div
                        className={
                          props.canvasData.geyser
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                        style={{ padding: "0.5rem" }}
                      >
                        <img
                          src={props.canvasData.geyser ? allowed : not_allowed}
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Geyser</p>
                      </div>
                      <div
                        className={
                          props.canvasData.cleanliness
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                        style={{ padding: "0.5rem" }}
                      >
                        <img
                          src={
                            props.canvasData.cleanliness ? allowed : not_allowed
                          }
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Cleanliness</p>
                      </div>
                      <div
                        className={
                          props.canvasData.induction
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                        style={{ padding: "0.5rem", marginRight: "1rem" }}
                      >
                        <img
                          src={
                            props.canvasData.induction ? allowed : not_allowed
                          }
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Induction</p>
                      </div>
                    </div>
                    <div className="d-flex" style={{ marginTop: "0.5rem" }}>
                      <div
                        className={
                          props.canvasData.washingmachine
                            ? "d-flex col-6 allowed-habits"
                            : "d-flex col-6 notallowed-habits"
                        }
                        style={{ padding: "0.5rem", marginRight: "1rem" }}
                      >
                        <img
                          src={
                            props.canvasData.washingmachine
                              ? allowed
                              : not_allowed
                          }
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Washing Machine</p>
                      </div>
                      <div
                        className={
                          props.canvasData.parking_2w
                            ? "d-flex col-6 allowed-habits"
                            : "d-flex col-6 notallowed-habits"
                        }
                        style={{ padding: "0.5rem", marginRight: "1rem" }}
                      >
                        <img
                          src={
                            props.canvasData.parking_2w ? allowed : not_allowed
                          }
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Parking 2W</p>
                      </div>
                    </div>
                    <div style={{ marginTop: "0.5rem" }}>
                      <div
                        className={
                          props.canvasData.parking_4w
                            ? "d-flex col-6 allowed-habits"
                            : "d-flex col-6 notallowed-habits"
                        }
                        style={{ padding: "0.5rem", marginRight: "1rem" }}
                      >
                        <img
                          src={
                            props.canvasData.parking_4w ? allowed : not_allowed
                          }
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Parking 4W</p>
                      </div>
                    </div>
                  </div>

                  <div className="row " style={{ marginBottom: "1.5rem" }}>
                    <div>
                      <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
                        Others
                      </p>
                      <p style={{ marginBottom: "0" }}>
                        {props.canvasData.others}
                      </p>
                    </div>
                  </div>

                  <div className="row" style={{ marginBottom: "1.5rem" }}>
                    <div className="habits-text">
                      <p style={{ marginBottom: "0.5rem", fontWeight: "700" }}>
                        House Habits
                      </p>
                    </div>
                    <div className="d-flex">
                      <div
                        className={
                          props.canvasData.isnonveg
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                      >
                        <img
                          src={
                            props.canvasData.isnonveg ? allowed : not_allowed
                          }
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Non veg</p>
                      </div>
                      <div
                        className={
                          props.canvasData.issmoking
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                      >
                        <img
                          src={
                            props.canvasData.issmoking ? allowed : not_allowed
                          }
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p
                          style={{
                            marginBottom: "0",
                            marginRight: "0.25rem",
                          }}
                        >
                          Smoking
                        </p>
                      </div>

                      <div
                        className={
                          props.canvasData.isdrinking
                            ? "d-flex col-4 allowed-habits"
                            : "d-flex col-4 notallowed-habits"
                        }
                      >
                        <img
                          src={
                            props.canvasData.isdrinking ? allowed : not_allowed
                          }
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>Drinking</p>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ marginBottom: "1.5rem" }}>
                    <div>
                      <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
                        Preferred Time to Contact
                      </p>
                    </div>
                    <div className="d-flex">
                      <div
                        className="d-flex justify-content-center amenities "
                        style={{ padding: "0.5rem", marginRight: "1rem" }}
                      >
                        <img
                          src={allowed}
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>
                          {props.canvasData.day}
                        </p>
                      </div>
                      <div
                        className="d-flex justify-content-center amenities "
                        style={{ padding: "0.5rem", marginRight: "1rem" }}
                      >
                        <img
                          src={clock}
                          alt=""
                          style={{ marginRight: "0.25rem" }}
                        />
                        <p style={{ marginBottom: "0" }}>
                          {props.canvasData.from_time} -{" "}
                        </p>
                        <p style={{ marginBottom: "0" }}>
                          {props.canvasData.to_time}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ marginBottom: "1.5rem" }}>
                    <div>
                      <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
                        Owner Information
                      </p>
                    </div>
                    <div style={{ marginTop: "0.25rem" }}>
                      <div className="d-flex" style={{ marginBottom: "1rem" }}>
                        <img
                          src={owner_name}
                          alt=""
                          style={{ marginLeft: "0.25rem" }}
                        />
                        <p style={{ marginLeft: "0.5rem", marginBottom: "0" }}>
                          {props.canvasData.owner_name}
                        </p>
                      </div>
                      <div className="d-flex">
                        <img
                          src={call}
                          alt=""
                          style={{ marginLeft: "0.25rem" }}
                        />
                        <p style={{ marginLeft: "0.5rem", marginBottom: "0" }}>
                          {props.canvasData.owner_contact}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row " style={{ marginTop: "0.25rem", position:"fixed"}}>
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
    </>
  );
};

export default OffcanvusAvailableAccommodation;
