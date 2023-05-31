import React, { useContext, useState } from "react";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import { MultiStepContext } from "../../stepContext/stepContext";
import "./reqStep1.css";
import FileUploadButton from "../../fileUploadButton/fileUploadButton";
import dummyProfile from "../../../images/dummyProfile.svg";

const ReqStep1 = () => {
  const { reqNext, requirementData, setRequirementData } =
    useContext(MultiStepContext);

  const [locality, setLocality] = useState("");
  const [isLocalityValid, setIsLocalityValid] = useState(false);

  const [contact, setContact] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const [date, setDate] = useState("");
  const [issetDateValid, setIsDateValid] = useState(false);

  const handleLocalityChange = (event) => {
    let { value } = event.target;
    setLocality(value);
    setIsLocalityValid(value.length > 3 ? true : false);
    setRequirementData({ ...requirementData, locality: value });
  };

  const [userInfo, setUserInfo] = useState(JSON.parse( localStorage.getItem("userData")));
  
  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    if (phoneNumber.trim().length <= 10) {
      setContact(phoneNumber.trim());
    }
    setIsPhoneNumberValid(
      phoneNumber.length === 0 ||
        (phoneNumber.trim().length <= 10 && /\d{10}/.test(phoneNumber))
        ? true
        : false
    );
    // setRequirementData({...requirementData, contact: phoneNumber})
  };

  const handleDateChange = (event) => {
    // const phoneNumber = event.target.value;
    // if (phoneNumber.trim().length <= 10) {
    //   setContact(phoneNumber.trim());
    // }
    // setIsPhoneNumberValid(
    //   phoneNumber.length === 0 || phoneNumber.trim().length < 10 ? false : true
    // );
  };

  return (
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
            lineHeight: "1.25rem",

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
          Basic Information
        </p>
        <hr style={{ margin: "0" }} />
      </Header>
      <Body>
        <div className="row">
          <div className=" col-md-3">
            <img src={requirementData.profileUrl || dummyProfile} alt="profile" id="profilePic" />
          </div>

          <div className=" col-md-5" style={{}}>
          <p className="p_color" style={{ marginBottom: "0" }}>
            <strong>{userInfo.firstName} {userInfo.lastName}  </strong>
            <p> {userInfo.email}</p>
          </p>
            <FileUploadButton file="postRequirement" />              
          </div>
        </div>
        <p className="reqStep1__form-heading" style={{ marginTop: "3%" }}>
          Add your preferred location
        </p>
        <form style={{ marginTop: "1.5rem" }}>
          <div className="form-group">
            <label
              for="locality"
              style={{ marginBottom: "0.375rem" }}
              className="reqStep1__label-h"
            >
              Locality
            </label>
            <input
              id="locality"
              className="form-control"
              type="text"
              placeholder="Locality"
              value={requirementData["locality"]}
              onInput={(e) => handleLocalityChange(e)}
            />
            {!isLocalityValid && locality && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Locality is not valid
              </span>
            )}
          </div>
          <div className="form-group" style={{ marginTop: "2rem" }}>
            <label
              for="contactInfo"
              style={{ marginBottom: "0.375rem" }}
              className="reqStep1__label-h"
            >
              Contact No.
            </label>
            <input
              id="contactInfo"
              className="form-control"
              type="tel"
              placeholder="Contact No."
              value={requirementData["contactInfo"]}
              onChange={(e) =>
                setRequirementData({
                  ...requirementData,
                  contactInfo: e.target.value,
                })
              }
            />
            {!isPhoneNumberValid && contact && (
              <span style={{ color: "red", fontSize: "12px" }}>
                Contact number is not valid
              </span>
            )}
          </div>
          <div className="form-group" style={{ marginTop: "2rem" }}>
            <label
              for="relocationDate"
              style={{ marginBottom: "0.375rem" }}
              className="reqStep1__label-h"
            >
              Preferred Relocation Date
            </label>
            <input
              id="relocationDate"
              className="form-control"
              type="date"
              value={requirementData["relocationDate"]}
              onChange={(e) =>
                setRequirementData({
                  ...requirementData,
                  relocationDate: e.target.value,
                })
              }
            />
          </div>

          <div class="row" style={{ marginTop: "1.5rem" }}>
            <div className="col-12 p_color">Roommate/Flatmate preference</div>
            <div class="col" style={{ marginTop: "0.87rem" }}>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="boys"
                  id="boysRadio"
                />
                <label class="form-check-label" for="boysRadio">
                  <span class="radio-custom p_color"></span> Boys Only
                </label>
              </div>
            </div>
            <div class="col" style={{ marginTop: "0.87rem" }}>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="girls"
                  id="girlsRadio"
                />
                <label class="form-check-label" for="girlsRadio">
                  <span class="radio-custom p_color"></span> Girls Only
                </label>
              </div>
            </div>
            <div class="col" style={{ marginTop: "0.87rem" }}>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  value="both"
                  id="bothRadio"
                />
                <label class="form-check-label" for="bothRadio">
                  <span class="radio-custom p_color"></span> Both
                </label>
              </div>
            </div>
          </div>
          <div className="row justify-content-end" style={{ marginTop: "8%" }}>
            <div className="col-6">
              <button
                style={{ width: "100%" }}
                className="reqStep1__btn"
                type="button"
                onClick={(e) => {
                  if (isPhoneNumberValid) reqNext(e);
                }}
              >
                <p className="reqStep__btn-p" style={{ margin: "5% 0" }}>
                  {" "}
                  Save & Next
                </p>
              </button>
            </div>
          </div>
        </form>
      </Body>
    </FormContainer>
  );
};

export default ReqStep1;
