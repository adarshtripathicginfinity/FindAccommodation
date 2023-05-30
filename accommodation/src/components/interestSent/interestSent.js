import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import "./interestSent.css";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import interest from "../../images/interest.svg"

const InterestSent = (props) => {
  const INTEREST_URL = "/interestSent";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [interestData, setInterestData] = useState([]);

  useEffect(() => {
    handleInterest();
  }, []);

  async function handleInterest() {
    await axios
      .get(INTEREST_URL, { params: { userId: userData.id } } )
      .then((response) => {
            setInterestData(response.data);
    });
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <div className="container-fluid">
            <div className="row" style={{marginTop: "1%"}}>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/landingpage">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Interest Sent
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <h4>Interest Sent</h4>
            </div>
            <div className="row">
              <form class="d-flex">
                <input 
                    class="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search by location" 
                    aria-label="Search" 
                    style={{}}
                />   
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown button
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Newest First
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Oldest First
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
            <div className="row-cols-2 row">
              {interestData.map( (data) =>(
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
                        <img className="img-fluid" src={interest} />
                      </div>
                      <div>
                        <Link >
                          {data.firstname}  {data.lastname}<span>&gt;</span>
                        </Link>
                        <p style={{ color: "#8E8E92", fontSize: "0.8rem" }}>
                          {data.cgiid}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12" style={{ marginBottom: "1rem" }}>
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
              ))}
              
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default InterestSent;
