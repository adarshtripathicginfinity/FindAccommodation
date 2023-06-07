import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import "./interestSent.css";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import interest from "../../images/interest.svg";
import search from "../../images/search.svg";

const InterestSent = (props) => {
  const INTEREST_URL = "/sentInterest";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [interestData, setInterestData] = useState([]);

  const [toggleSearch, setToggleSearch] = useState(false);
  const [filteredInterestData, setFilteredInterestData] = useState([]);

  useEffect(() => {
    handleInterest();
  }, []);

  async function handleInterest() {
    await axios
      .get(INTEREST_URL, { params: { userId: userData.id } } )
      .then((response) => {
        setInterestData(response.data.response);
      });
  }

  const sortRecentFirst = (event) => {
    interestData.sort((a, b) => {
      return b.createtime - a.createtime;
    })
  }

  const sortOldestFirst = (event) => {
    interestData.sort((a, b) => {
      return a.createtime - b.createtime;
    })
  }

  const handleSearchLocality = (event) => {
    setToggleSearch(true);
    const { value } = event.target;
    const filteredData = interestData.filter((item) =>
      item.locality.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredInterestData(filteredData);
  }


  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <div className="container-fluid" >
            <div className="row d-none d-md-flex" style={{ marginTop: "1.31rem" }}>
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
            <div className="row d-flex d-md-none" style={{ marginTop: "1.31rem" }}>
                    <Link to="/landingpage">
                      <p>
                        hello
                      </p>
                    </Link>
            </div>
            <div className="row " style={{ marginBottom: "1.25rem" }}>
              <div className="col d-none d-md-flex">
                <p className="interest_heading">Interest Sent</p>
              </div>

              <div className="d-flex col-12 col-md-6">
                <div
                  className="d-flex border w-sm-75 w-100 px-3"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "0.25rem",
                    padding: "0",
                    marginLeft: "15rem",
                    width: "15.6rem",
                    height: "2rem",
                  }}
                >
                  <span className="" style={{ marginTop: "0.18rem" }}>
                    <img src={search} alt="img" />
                  </span>

                  <input
                    type="text"
                    className="form-control form-input .demo_search-bar interesr_search-bar"
                    style={{
                      border: "none",
                      outlineStyle: "none",
                      padding: 0,
                      marginLeft: "0.37rem",
                    }}
                    placeholder="Search by Locality"
                    onChange={(e) => handleSearchLocality(e)}
                  />
                  
                </div>

                <div className="dropdown" style={{ marginLeft: "1rem" }}>
                  <button
                    className="btn btn-secondary btn-light btn-sm dropdown-toggle interest_sort-btn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort By
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#" onClick={(e) => sortRecentFirst(e)}>
                        Newest First
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={(e) => sortOldestFirst(e)}>
                        Oldest First
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            { toggleSearch ? (
            <div className="scroll-bar" style={{height:"800px"}}>
            <div className="row-cols-1 row" style={{margin:"1rem 18rem"}}>
              { filteredInterestData.map((data) => (
                <div className="col" >
                  <div
                    className="interest__container" key={data.id}
                    style={{ marginBottom: "1.5rem", padding: "0.75rem" }}
                  >
                    <div className="row" style={{ marginTop: "0" }}>
                      <div
                        className="col d-flex interest__name"
                        
                      >
                        <div style={{ display: "flex", marginTop: "0rem" }}>
                          <div style={{ marginRight: "1rem" }}>
                            <img className="img-fluid" src={interest} alt="logo"/>
                          </div>
                          <div >
                            <Link className="interest_container-name">
                              {data.firstname} {data.lastname}
                            </Link>
                            <p style={{ color: "#8E8E92", fontSize: "0.8rem" }}>
                              {data.cgiid}
                            </p>
                          </div>
                        </div>
                        <div className="col-none c-md-flex">
                           <p className="interest_time-date">10:15 AM</p>
                           <p className="interest_time-date" style={{marginTop:'0.3rem'}}>23-03-2023</p>
                        </div>
                      </div>
                      <div className="col-12" style={{ marginBottom: "1rem" }}>
                        <div className="d-flex" style={{marginBottom:'0.28rem'}}>
                          <p
                            className="interest__para"
                          >
                            LandMark :
                          </p>
                          <p style={{marginBottom:'0' , marginLeft:'0.5rem'}}>{data.locality}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            ) : 
            ( <div className="scroll-bar" style={{height:"800px"}}>
              <div className="row-cols-1 row" style={{margin:"1rem 18rem"}}>
              {interestData.map((data) => (
                <div className="col" >
                  <div
                    className="interest__container" key={data.id}
                    style={{ marginBottom: "1.5rem", padding: "0.75rem" }}
                  >
                    <div className="row" style={{ marginTop: "0" }}>
                      <div
                        className="col d-flex interest__name"
                        
                      >
                        <div style={{ display: "flex", marginTop: "0rem" }}>
                          <div style={{ marginRight: "1rem" }}>
                            <img className="img-fluid" src={interest} alt="logo"/>
                          </div>
                          <div >
                            <Link className="interest_container-name">
                              {data.firstname} {data.lastname}
                            </Link>
                            <p style={{ color: "#8E8E92", fontSize: "0.8rem" }}>
                              {data.cgiid}
                            </p>
                          </div>
                        </div>
                        <div className="col-none c-md-flex">
                           <p className="interest_time-date">10:15 AM</p>
                           <p className="interest_time-date" style={{marginTop:'0.3rem'}}>23-03-2023</p>
                        </div>
                      </div>
                      <div className="col-12" style={{ marginBottom: "1rem" }}>
                        <div className="d-flex" style={{marginBottom:'0.28rem'}}>
                          <p
                            className="interest__para"
                          >
                            LandMark :
                          </p>
                          <p style={{marginBottom:'0' , marginLeft:'0.5rem'}}>{data.locality}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </div>
            )}
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default InterestSent;