import React, { useContext, useDebugValue, useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  FormContainer,
  Header,
  Body,
} from "../../utilityStyles/utilityStyles";
import alert from "../../../images/alert.svg";
import "./step1.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import dummyProfile from "../../../images/dummyProfile.svg";
import FileUploadButton from "../../fileUploadButton/fileUploadButton";


const Step1 = () => {
  useEffect(() => {
    setIsIdValid(userData["CGI"]);
    setIsContactNumberValid(userData["contact"]);
  }, []);
  const { currentIndex, setCurrentIndex, next, userData, setUserData } =
    useContext(MultiStepContext);

  const [userInfo, setUserInfo] = useState(JSON.parse( localStorage.getItem("userData")));


  const [id, setId] = useState();
  const [isIdValid, setIsIdValid] = useState(false);

  const [contactNumber, setContactNumber] = useState();
  const [isContactNumberValid, setIsContactNumberValid] = useState(false);

  const handleIdChange = (event) => {
    let { value } = event.target;
    value = value.toUpperCase();
    setId(value);
    setIsIdValid(/^(CGI|INT)([1-9]\d{0,3})$/.test(value) ? true : false);
    setUserData({ ...userData, CGI: value });
  
  };

  const handleContactChange = (event) => {
    let phoneNumber = event.target.value;
    if (phoneNumber.trim().length <= 10) {
      setContactNumber(phoneNumber.trim());
    }
    setIsContactNumberValid(
      phoneNumber.length === 0 ||
        (phoneNumber.trim().length <= 10 && /\d{10}/.test(phoneNumber))
        ? true
        : false
    );
    setUserData({ ...userData, contact: phoneNumber.trim() });
  
  };

  return (
    <>
      <FormContainer>
        <Header>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "1rem",
              lineHeight: "1.18rem",

              color: "#626262",
            }}
          >
            Step 1
          </p>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "1.25rem",
              lineHeight: "1.5rem",
            }}
          >
            Personal Information
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
          <div className="container-fluid" style={{ padding: "0 0.75rem" }}>
            <form onSubmit={e => { e.preventDefault(); }}>
                <div className="row ">
                  <div className=" col-md-3">
                    <img src={userData.profileImage || dummyProfile} alt="profile" id="profilePic" />
                  </div>

                <div className=" col-md-5" style={{}}>
                  <p className="p_color" style={{ marginBottom: "0" }}>
                    <strong>{userInfo.firstName} {userInfo.lastName}  </strong>
                    <p>{userInfo.email}</p>
                  </p>
                    <FileUploadButton file="Volunteer" />              
                </div>
              </div>

              <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col">
                  <p className="p_color" style={{ marginBottom: "0.375rem" }}>
                    CGI ID <span style={{color:"#dd2727"}}><strong>*</strong></span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter your CGI ID"
                    className={
                      !isIdValid && id
                        ? "form-control input-error"
                        : "form-control"
                    }
                    value={userData["CGI"]}
                    onChange={(e) => handleIdChange(e)}
                  />

                  {!isIdValid && id && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      CGI ID is not valid
                    </span>
                  )}
                </div>
              </div>

              <div className="row" style={{ marginTop: "1.5rem" }}>
                <div className="col">
                  <p className="p_color" style={{ marginBottom: "0.375rem" }}>
                    Contact No. <span style={{color:"#dd2727"}}><strong>*</strong></span>
                  </p>
                  <input
                    type="tel"
                    placeholder="****"
                    className={
                      !isContactNumberValid && contactNumber
                        ? "form-control input-error"
                        : "form-control"
                    }
                    value={userData["contact"]}
                    onChange={(e) => handleContactChange(e)}
                  />
                  {!isContactNumberValid && contactNumber && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      Contact Number is not valid
                    </span>
                  )}
                </div>
              </div>
              <div className="row " style={{ marginTop: "1.5rem" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p
                      className="p_color"
                      style={{ width: "fit-content", marginBottom: "0" }}
                    >
                      Accommodations are currently available near me
                    </p>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={
                        userData["isNearBy"] == undefined
                          ? false
                          : userData["isNearBy"]
                      }
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          isNearBy: e.target.checked,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "1rem" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p_color" style={{ marginBottom: "0" }}>
                      I am looking for a roommate
                    </p>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={
                        userData["isRoomMate"] == undefined
                          ? false
                          : userData["isRoomMate"]
                      }
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          isRoomMate: e.target.checked,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row" style={{ marginTop: "1rem" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="p_color" style={{ marginBottom: "0" }}>
                      I am looking for a flatmate
                    </p>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckDefault"
                      checked={
                        userData["isFlatMate"] == undefined
                          ? false
                          : userData["isFlatMate"]
                      }
                      onChange={(e) => {
                        setUserData({
                          ...userData,
                          isFlatMate: e.target.checked,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="row " style={{ marginTop: "1.625rem" }}>
                <div
                  className="col-12 d-flex "
                  style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
                >
                  <img
                    src={alert}
                    alt="logo"
                    className="img2"
                    style={{ marginBottom: "0.5rem" }}
                  />
                  <p className="mb-2 mt-2 p_color">
                    Flat-mate indicate having a separate room and Roommate
                    indicate sharing same room with other
                  </p>
                </div>
              </div>
              
              <div className="row" style={{marginTop:"1.5rem"}}>
              <div className="col-12 p_color" >Roommate/Flatmate preference</div>
                <div className="col" style={{marginTop:"0.87rem"}}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="boys"
                      id="boysRadio"
                    />
                    <label className="form-check-label" for="boysRadio">
                      <span className="radio-custom p_color" ></span> Boys Only
                    </label>
                  </div>
                </div>
                <div className="col" style={{marginTop:"0.87rem"}}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="girls"
                      id="girlsRadio"
                    />
                    <label className="form-check-label" for="girlsRadio">
                      <span className="radio-custom p_color"></span> Girls Only
                    </label>
                  </div>
                </div>
                <div className="col" style={{marginTop:"0.87rem"}}>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="both"
                      id="bothRadio"
                    />
                    <label className="form-check-label" for="bothRadio">
                      <span className="radio-custom p_color"></span> Both
                    </label>
                  </div>
                </div>
              </div>

              <div
                className="row d-flex justify-content-end"
                style={{ marginTop: "8%" }}
              >
                <div className="col-6" style={{ padding: "0" }}>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      if (isContactNumberValid && isIdValid) {
                        next();
                      }
                    }}
                    className="border-0 save-btn"
                    style={{ width: "100%" }}
                  >
                    <p style={{ margin: "5%" }}>Save & Next</p>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Body>
      </FormContainer>
    </>
  );
};

export default Step1;