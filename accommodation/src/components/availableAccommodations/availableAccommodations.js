import React, { useContext, useState, useEffect } from "react";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import "./availableAccommodations.css";
import Navbar from "../navbar/navbar";
import search from "../../images/search.svg";
import location from "../../images/location.svg";
import OpenRequirements from "./openRequirements";
import CheckboxFilterAcco from "./checkboxFilterAcco";
import CheckboxFilterReq from "./checkboxFilterReq";
import { Link } from "react-router-dom";
import MapAvailableAccommodations from "./mapAvailableAccommodations";
import { MultiStepContext } from "../stepContext/stepContext";
import Arraow from '../../images/arrow_forward.svg'
import axios from "axios";

const AvailableAccommodations = (props) => {
  const { availableAccommodations, setAvailableAccommodations } =
    useContext(MultiStepContext);

  const [data, setData] = useState([]);
  const [openReqData, setOpenReqData] = useState([]);

  async function handleRefresh() {
    await axios
      .get("https://cg-accommodation.azurewebsites.net/getAllAcc")
      .then((response) => {
        setData(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleOpenReq() {
    await axios
      .get("https://cg-accommodation.azurewebsites.net/allRequirement")
      .then((response) => {
        // Handle Success
       
        setOpenReqData(response.data.response);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  const handleLoad =() =>{
    handleRefresh();
    handleOpenReq();
  }
  
  useEffect( () => {
    handleLoad();
  }, []);

  const [activeBtn, setActiveBtn] = useState(props.activebtn);
  const [singleCard, setSingleCard] = useState("");
  const [mapaddress, setMapAddress] = useState("Pinnacle Business Park");
  const [filterData, setFilterData] = useState([]);
  const [houseHabit1, setHouseHabit1] = useState([]);
  const [houseHabit2, setHouseHabit2] = useState([]);
  const [houseHabit3, setHouseHabit3] = useState([]);
  const [distancefilter1, setDistancefilter1] = useState([]);
  const [distancefilter2, setDistancefilter2] = useState([]);
  const [distancefilter3, setDistancefilter3] = useState([]);
  const [distancefilter4, setDistancefilter4] = useState([]);

  const queryParameters = new URLSearchParams(window.location.search);
  let type = queryParameters.get("call");

  const findAddressmap = (event) => {
    const { value } = event.target;
    setMapAddress(value);
  };
  function handleToggleAvailable() {
    setActiveBtn(true);
    setFilterData([]);
    setHouseHabit1([]);
    setHouseHabit2([]);
    setHouseHabit3([]);
    setDistancefilter1([]);
    setDistancefilter2([]);
    setDistancefilter3([]);
    setDistancefilter4([]);
  
  }
  function handleToggleRequire() {
    setActiveBtn(false);
    setFilterData([]);
    setHouseHabit1([]);
    setHouseHabit2([]);
    setHouseHabit3([]);
    setDistancefilter1([]);
    setDistancefilter2([]);
    setDistancefilter3([]);
    setDistancefilter4([]);
  
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
  function Distances1A(data) {
    setDistancefilter1(data);
  }
  function Distances2A(data) {
    setDistancefilter2(data);
  }
  function Distances3A(data) {
    setDistancefilter3(data);
  }
  function Distances4A(data) {
    setDistancefilter4(data);
  }

  const filteredCards = data.filter(
    (Data) =>
      (!filterData.length || filterData.includes(Data.acctypename)) &&
      (!houseHabit1.length || houseHabit1.includes(Data.issmoking)) &&
      (!houseHabit2.length || houseHabit2.includes(Data.isdrinking)) &&
      (!houseHabit3.length || houseHabit3.includes(Data.isnonveg)) &&
      (!distancefilter1.length ||
        (distancefilter1.length != 0 &&
          Data.distance > 0 &&
          Data.distance <= 2)) &&
      (!distancefilter2.length ||
        (distancefilter2.length != 0 &&
          Data.distance > 2 &&
          Data.distance <= 5)) &&
      (!distancefilter3.length ||
        (distancefilter3.length != 0 &&
          Data.distance > 5 &&
          Data.distance <= 8)) &&
      (!distancefilter4.length ||
        (distancefilter4.length != 0 &&
          Data.distance > 8 &&
          Data.distance <= 10))
  );



  const reqFilteredCards = openReqData.filter(
    (Data) =>
      (!filterData.length || filterData.includes(Data.acctypename)) &&
      (!houseHabit1.length || houseHabit1.includes(Data.issmoking)) &&
      (!houseHabit2.length || houseHabit2.includes(Data.isdrinking)) &&
      (!houseHabit3.length || houseHabit3.includes(Data.isnonveg))
  );
  function singleCardHandle() {
    if (filterData.length === 1) {
      setSingleCard("1240px");
      return singleCard;
    } else {
      setSingleCard("100%");
      return singleCard;
    }
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container >
          <div
            className={
              filteredCards.length === 1
                ? "single-card"
                : "container acc-main-container"
            }
            style={{
              backgroundColor: "#F5F5F5",
              margin: "0rem"
            }}
          >
            

            <nav aria-label="breadcrumb" style={{marginTop:'1.1rem'}}>
              <ol className="breadcrumb">
                <li className="breadcrumb-item d-none d-md-flex">
                  <Link
                    to="/landingpage"
                    style={{ textDecoration: "none", marginBottom: "0rem" }}
                  >
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item d-flex d-md-none">
                  <Link
                    to="/landingpage"
                    style={{ textDecoration: "none", marginBottom: "0rem" }}
                  >
                    <img src={Arraow} alt="arrow"/>
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{ width: "84%" }}
                >
                  <div className="heading-sm-src">
                    {activeBtn === true ? (
                      <p
                        className="text-md-secondary heading-sm-p"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        Available Accomodation
                      </p>
                    ) : (
                      <p
                        className="text-md-secondary heading-sm-p"
                        style={{ marginBottom: "0.5rem" }}
                      >
                        Open Requirement
                      </p>
                    )}
                  </div>
                </li>
              </ol>
            </nav>

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

            <div className="row mb-2">
              {activeBtn === true ? (
                <div className="col-8 col-sm-4">
                  <div
                    className="d-flex border w-sm-100 w-100 px-3"
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "0.25rem",
                      padding: "0",
                    }}
                  >
                    <span className="mt-1">
                      <img src={location} alt="location"></img>
                    </span>

                    <input
                      type="text"
                      className="form-control form-input no-border"
                      value={mapaddress}
                      onChange={findAddressmap}
                      style={{ border: "none", outlineStyle: "none" }}
                    />
                    <span className="left-pan mt-1 d-none d-md-flex">
                      <img src={search} alt="img" />
                    </span>
                  </div>
                </div>
              ) : (
                <div className="col-8 col-sm-4">
                  <div
                    className="d-flex border w-sm-100 w-100 px-3"
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "0.25rem",
                      padding: "0",
                    }}
                  >
                    <span className="mt-1">
                      <img src={search} alt="img" />
                    </span>

                    <input
                      type="text"
                      className="form-control form-input no-border"
                      onChange={findAddressmap}
                      style={{ border: "none", outlineStyle: "none" }}
                      placeholder="Select locality"
                    />
                  </div>
                </div>
              )}

              {/* <span>gbdgt</span> */}
              {activeBtn === true ? (
                <CheckboxFilterAcco
                  sendData={sendAccomoData}
                  sendHHData1={sendhhAccomo1}
                  sendHHData2={sendhhAccomo2}
                  sendHHData3={sendhhAccomo3}
                  Distances1={Distances1A}
                  Distances2={Distances2A}
                  Distances3={Distances3A}
                  Distances4={Distances4A}
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

            <div
              className="container-fluid "
              style={{ margin: "0", padding: "0" }}
            >
              {activeBtn === true ? (
                <MapAvailableAccommodations AccData={filteredCards} />
              ) : (
                <OpenRequirements sendingData={reqFilteredCards} />
              )}
            </div>
           
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default AvailableAccommodations;
