import React, { useContext, useState } from "react";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import "./reqStep2.css";
import { MultiStepContext } from "../../stepContext/stepContext";
const ReqStep2 = () => {
  const { reqNext, reqPrevious, requirementData, setRequirementData } =
    useContext(MultiStepContext);
  const [accType, setAccType] = useState(requirementData["accTypeId"]);


  const [singlePg,setSinglePg] = useState(false);
  const [doublePg,setDoublePg] = useState(false);
  const [triplePg,setTriplePg] = useState(false);
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
              lineHeight: "1.25rem",

              color: "#626262",
            }}
          >
            Step 2
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
            Accommodation Types
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
          <p className="reqStep2__label-h" style={{ marginBottom: "1rem" }}>
            Accommodation Type <span style={{color:"#dd2727"}}><strong>*</strong></span>
          </p>
          <div
            className="container-fluid d-flex flex-row gap-4"
            style={{ padding: "0", marginBottom: "1.5rem" }}
          >
            <button
              type="button"
              className={
                requirementData["accTypeId"] == 1
                  ? "reqStep2__btn-active"
                  : "reqStep2__btn"
              }
              onClick={(event) => {
                event.preventDefault();
                setRequirementData({ ...requirementData, accTypeId: 1 });
              }}
            >
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 3.09rem" }}
              >
                PG
              </p>
            </button>
            <button
              type="button"
              className={
                requirementData["accTypeId"] == 2
                  ? "reqStep2__btn-active"
                  : "reqStep2__btn"
              }
              onClick={(event) => {
                event.preventDefault();
                setRequirementData({ ...requirementData, accTypeId: 2 });
              }}
            >
              <p
                className="reqStep2__btn-p"
                style={{ margin: "0.75rem 2.93rem" }}
              >
                Flat
              </p>
            </button>
          </div>
          {requirementData["accTypeId"] == 1 ? (
            <div>
              <p className="reqStep2__label-h" style={{ marginBottom: "1rem" }}>
                Sharing Type <span style={{color:"#dd2727"}}><strong>*</strong></span>
              </p>
              <div
                className="container-fluid d-flex flex-row gap-4"
                
                style={{ padding: "0", marginBottom: "1.5rem" }}
              >
                <button
                  type="button"
                  // className="reqStep2__btn"
                  className={
                requirementData["sharingId"] === 1 ? "reqStep2__btn-active": "reqStep2__btn"
                }
                  onClick={(event) => {
                    event.preventDefault();
                    setSinglePg(true)
                    setRequirementData({ ...requirementData, sharingId: 1 });
                  }}
                >
                  <p
                    // className="reqStep2__btn-p"
                   
                    style={{ margin: "0.75rem 2.53rem" }}
                  >
                    Single
                  </p>
                </button>
                <button type="button" 
                className={
                requirementData["sharingId"] === 2 ? "reqStep2__btn-active": "reqStep2__btn"
                }
                  onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, sharingId: 2 });
                  }}>
                  <p
                    className="reqStep2__btn-p"
                    style={{ margin: "0.75rem 2.53rem" }}
                  >
                    Double
                  </p>
                </button>

                <button type="button"
                className={
                requirementData["sharingId"] === 3 ? "reqStep2__btn-active": "reqStep2__btn"
                }
                 onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, sharingId: 3 });
                  }}>
                  <p
                    className="reqStep2__btn-p"
                    style={{ margin: "0.75rem 2.53rem" }}
                  >
                    Triple
                  </p>
                </button>
              </div>
            </div>
          ) : (
            <div className="container-fluid" style={{ padding: "0" }}>
              <div className="row" style={{ marginBottom: "1.5rem" }}>
                <div
                  className="col-12 "
                  onClick={() => {
                    setRequirementData({ ...requirementData });
                  }}
                >
                  <p
                    className="reqStep2__label-h"
                    style={{ marginBottom: "1rem" }}
                  >
                    BHK TYPE <span style={{color:"#dd2727"}}><strong>*</strong></span>
                  </p>
                </div>
                <div className="container-fluid d-flex flex-row gap-1">
                  <div 
                   className={
                requirementData["flatTypeId"] === 1 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }

                   onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, flatTypeId: 1 });
                  }}>
                    <p style={{ margin: "0.75rem" }}>1 RK</p>
                  </div>
                  <div 
                  className={
                requirementData["flatTypeId"] === 2 ? " text-center mx-2 col reqStep2__btn-active": "text-center mx-2 col reqStep2__btn"
                }
                   onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, flatTypeId: 2 });
                  }}
                   >
                    <p style={{ margin: "0.75rem" }}>1 BHK</p>
                  </div>
                  <div 
                  className={
                requirementData["flatTypeId"] === 3 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }
                  
                    onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, flatTypeId: 3 });
                  }}>
                    <p style={{ margin: "0.75rem" }}>2 BHK</p>
                  </div>
                  <div 
                   className={
                requirementData["flatTypeId"] === 4 ? " text-center col reqStep2__btn-active mx-2": "text-center col reqStep2__btn mx-2"
                }
                    onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, flatTypeId: 4 });
                  }}>
                    <p style={{ margin: "0.75rem" }}>3 BHK</p>
                  </div>
                  <div 
                   className={
                requirementData["flatTypeId"] === 5 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }
                  
                  
                    onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, flatTypeId: 5 });
                  }}>
                    <p style={{ margin: "0.75rem" }}>4 BHK</p>
                  </div>
                </div>
              </div>
              <div className="row" style={{ marginBottom: "1.5rem" }}>
                <div className="col-12 " >
                  <p
                    className="reqStep2__label-h"
                    style={{ marginBottom: "1rem" }}
                  >
                    Furnishing Type <span style={{color:"#dd2727"}}><strong>*</strong></span>
                  </p>
                </div>
                <div className="container-fluid d-flex flex-row gap-1">
                <div 
                 className={
                requirementData["furnishedtypeId"] === 1 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }
                 onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, furnishedtypeId: 1 });
                  }}>
                  <p style={{ margin: "0.75rem" }}>Fully Furnished</p>
                </div>
                <div 
                 className={
                requirementData["furnishedtypeId"] === 2 ? " text-center col reqStep2__btn-active mx-3": " mx-3 text-center col reqStep2__btn"
                }
                 onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, furnishedtypeId: 2 });
                  }}>
                  <p style={{ margin: "0.75rem" }}>Semi Furnished</p>
                </div>
                <div 
                 className={
                requirementData["furnishedtypeId"] === 3 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }
                onClick={(event) => {
                    event.preventDefault();
                    setRequirementData({ ...requirementData, furnishedtypeId: 3 });
                  }}>
                  <p style={{ margin: "0.75rem" }}>Unfurnished</p>
                </div>
                </div>
              </div>
            </div>
          )}

          <p className="reqStep2__label-h" style={{ marginBottom: "1.15rem" }}>
            House Habit Preferences
          </p>
          <div className="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={requirementData["isNonVeg"]}
              onChange={(event) => {
                setRequirementData({
                  ...requirementData,
                  isNonVeg: event.target.checked,
                });
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Non Veg
            </label>
          </div>
          <div className="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={requirementData["isSmoking"]}
              onChange={(event) => {
                setRequirementData({
                  ...requirementData,
                  isSmoking: event.target.checked,
                });
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Smoking
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked={requirementData["isDrinking"]}
              onChange={(event) => {
                setRequirementData({
                  ...requirementData,
                  isDrinking: event.target.checked,
                });
              }}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Drinking
            </label>
          </div>
          <div className="row " style={{ marginTop: "8%", padding: "0" }}>
            <div className="col-6">
              <button
                className="reqStep2__btn-pre"
                type="button"
                onClick={reqPrevious}
                style={{ width: "100%" }}
              >
                <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                  Previous
                </p>
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="reqStep2__btn-next"
                onClick={() => {
                  if((requirementData["accTypeId"] === 1 && (requirementData["sharingId"] === 1 || requirementData["sharingId"] === 2 || requirementData["sharingId"] === 3)) || (requirementData["accTypeId"] === 2 && (requirementData["flatTypeId"] === 1 || requirementData["flatTypeId"] === 2 || requirementData["flatTypeId"] === 3 || requirementData["flatTypeId"] === 4 || requirementData["flatTypeId"] === 5) && (requirementData["furnishedtypeId"] === 1 || requirementData["furnishedtypeId"] === 2 || requirementData["furnishedtypeId"] === 3)))
                    reqNext();
                }}
                style={{ width: "100%" }}
              >
                <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                  Save & Next
                </p>
              </button>
            </div>
          </div>
        </Body>
      </FormContainer>
    </>
  );
};

export default ReqStep2;