import React, { useContext, useEffect, useState } from "react";
import {
  MainContainer,
  TopContainer,
  MainHeading,
  MidContainer,
  VolunteerContainer,
  RequirementContainer,
  DynamicContainer,
  ShortlistContainer,
  NotificationContainer,
  Button,
} from "./landingPageStyle";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import Navbar from "../navbar/navbar";
import "./landingPage.css";
import Notification from "../notification/notification";
import Interest from "../../images/interest.svg"
import { MultiStepContext } from "../stepContext/stepContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import axios1 from "../api/axios";

const LandingPage = () => {
  const INTEREST_URL = "/interestSent";
  const [interestData, setInterestData] = useState([]);
  const [interestLength, setInterestLength] = useState([]);
  const maxInterestToShow = 4;

  const navigate = useNavigate();

  const { currentUser, availableAccommodations, setAvailableAccommodations } =
    useContext(MultiStepContext);

  const userData = localStorage.getItem("userData");

  const [data, setData] = useState(JSON.parse(userData));
  console.log(data.id);

  async function handleInterest() {
    await axios1
      .get(INTEREST_URL, { params: { userId: data.id } })
      .then((response) => {
        setInterestData(response.data);
        setInterestLength(interestData.length);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleLanding() {
    await axios
      .get("https://cg-accommodation.azurewebsites.net/")
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    handleLanding();
    handleInterest();
  }, []);

  const handleAvailableAccommodation = (event) => {
    event.preventDefault();
    axios
      .get("https://cg-accommodation.azurewebsites.net/getAllAcc")
      .then((response) => {
        navigate("/availableaccommodationsonly");
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  };

  const handleOpenrequirements = (event) => {
    event.preventDefault();

    navigate("/availableaccommodationsreq");
  };

  const handleVolunteer = (event) => {
    event.preventDefault();
    navigate("/form");
  };
  const handlePostReq = (event) => {
    event.preventDefault();
    navigate("/requirementform");
  };

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container className="main-wrapper">
          <div className="container-fluid ">
            <TopContainer
              className="row"
              style={{ paddingBottom: "3.87rem", marginTop: "1.25rem" }}
            >
              <div className="col-8">
                <p
                  className="landingPage__head-para"
                  style={{
                    color: "black",

                    marginTop: "3.3rem",
                  }}
                >
                  Welcome, {data?.firstName} {data?.lastName}
                </p>
                <p className="landingPage__mainheading">
                  Let's find your <b>Accommodation</b>
                </p>
              </div>
              <div className="col-md-4 acc-btn">
                <Button
                  className="btn"
                  style={{
                    height: "fit-content",
                    marginLeft: "3.3rem",
                    marginRight: "2.3rem",
                    padding: "0",
                    margin: "0",
                  }}
                  onClick={(e) => {
                    handleAvailableAccommodation(e);
                  }}
                >
                  <p
                    className="landingPage__btn-p"
                    style={{ margin: "1rem 2rem" }}
                  >
                    See Available Accommodations
                  </p>
                </Button>
              </div>
            </TopContainer>
            <div className="row">
              <div className="col">
                <p className="landingPage__mid-p" style={{ margin: "2% 0" }}>
                  Be a <strong>Volunteer</strong> and <strong>Help</strong> your
                  ally in finding their accommodation
                </p>
              </div>
            </div>

            <MidContainer className="row gap-4">
              <VolunteerContainer className="col-md">
                <p
                  className="landingPage__p"
                  style={{ color: "black", marginTop: "9%", marginBottom: "0" }}
                >
                  Help each other finding an accommodation.
                </p>
                <p className="landingPage__p" style={{ margin: "0" }}>
                  Participation is appreciated and is completely voluntary, with
                  emphasis on privacy and security of an individual.
                </p>
                <div className="container-fluid">
                  <div className="row  ">
                    <div className="col-sm-6 col-12">
                      <Button
                        style={{
                          padding: "0",
                          marginBottom: "2.31rem",
                          marginTop: "1.56rem",
                        }}
                        onClick={(e) => {
                          handleVolunteer(e);
                        }}
                        className="btn"
                      >
                        <p
                          style={{ margin: "1rem 2rem" }}
                          className="landingPage__btn-p"
                        >
                          Be a Volunteer
                        </p>
                      </Button>
                    </div>
                    <div className="col-sm-6 col-12 result-btn">
                      <button
                        style={{ marginTop: "1.56rem" }}
                        className="landingPage__result-btn"
                      >
                        <p
                          className="landingPage__btn-p "
                          style={{ margin: "1rem 1.5rem 0.8rem" }}
                          onClick={(e) => {
                            handleOpenrequirements(e);
                          }}
                        >
                          See Open Requests
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </VolunteerContainer>
              <RequirementContainer className="col-md ">
                <p
                  className="landingPage__p"
                  style={{ color: "black", marginTop: "9%" }}
                >
                  Find Your Accommodation is an online platform for CGI
                  Community Post your requirement .
                </p>
                <Button
                  className="btn"
                  style={{
                    marginTop: "3%",
                    padding: "0",
                    marginBottom: "2.5rem",
                    marginTop: "1.5rem",
                  }}
                  onClick={(e) => handlePostReq(e)}
                >
                  <p
                    style={{ margin: "1rem 2rem" }}
                    className="landingPage__btn-p"
                  >
                    Post Your Requirement
                  </p>
                </Button>
              </RequirementContainer>
            </MidContainer>
            <DynamicContainer className="row">
              <ShortlistContainer className="col-md-6">
                <p className="landingPage__head" style={{ color: "black" }}>
                  Interest Sent
                  <Link
                    to="/interestsent"
                    style={{ float: "right", fontSize: "16px" }}
                  >
                    See All &gt;
                  </Link>
                </p>

                {/* <div className="row row-cols-sm-2 ">
                  <div className="col-sm">
                    <Interest />
                  </div>
                  <div className="col-sm">
                    <Interest />
                  </div>
                  <div className="col-sm">
                    <Interest />
                  </div>
                </div> */}
                <div className="col">
                  {interestData.slice(0, maxInterestToShow).map((data) => (
                    <div
                      key={data.id}
                      className="col interest__container"
                      style={{ marginBottom: "1rem" }}
                    >
                      <div className="row">
                        <div
                          className="col interest__name"
                          style={{ marginTop: "1rem" }}
                        >
                          <div style={{ display: "flex" }}>
                            <div style={{ marginRight: "1rem" }}>
                              <img className="img-fluid" src={Interest} />
                            </div>
                            <div>
                              <Link>
                                {data.firstname} {data.lastname}
                                <span>&gt;</span>
                              </Link>
                              <p
                                style={{ color: "#8E8E92", fontSize: "0.8rem" }}
                              >
                                {data.cgiid}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-12"
                          style={{ marginBottom: "1rem" }}
                        >
                          <p
                            className="interest__para"
                            style={{ marginBottom: "0.3rem" }}
                          >
                            LandMark : {data.locality}
                          </p>
                          <a className="a-link" style={{ color: "#007FD3" }}>
                            <p
                              className="interest__a-p"
                              style={{ marginBotton: "0" }}
                            >
                              View on Map
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}{" "}
                 
                </div>
              </ShortlistContainer>
              <NotificationContainer className=" col-md-6">
                <p className="landingPage__head" style={{ color: "black" }}>
                  Notifications
                  <Link
                    to="/notificationsent"
                    style={{ float: "right", fontSize: "16px" }}
                  >
                    See All &gt;
                  </Link>
                </p>
                <div
                  style={{
                    boxShadow: "0px 4px 10px rgba(66,76,97,0.15)",
                    borderRadius: "8px",
                    paddingBottom: "0.0rem",
                  }}
                >
                  <div className="col-12" style={{ marginBottom: "1rem" }}>
                    <Notification />
                  </div>
                  <div className="col-12">
                    <Notification />
                  </div>
                </div>
              </NotificationContainer>
            </DynamicContainer>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default LandingPage;
