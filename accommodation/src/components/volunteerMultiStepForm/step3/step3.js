import React, { useState, useContext, useEffect } from "react";
import "./step3.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";


const MainContainer = styled.div``;

const Step3 = () => {
  useEffect(()=>{ 
   },[] )
  const { next, previous, userData, setUserData, currentIndex } =
    useContext(MultiStepContext);

  const [accommodationType,setAccommodationType] = useState(true);
 

  function handlePgAccommodation(event){
    event.preventDefault();

    setAccommodationType(true)
    
  }
  function handleFlatAccommodation(event){
    event.preventDefault();
    setAccommodationType(false)
    
    
  }

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
            Step 3
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
            Accommodation Type
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
                userData["accTypeId"] == 1
                  ? "reqStep2__btn-active"
                  : "reqStep2__btn"
              }
              onClick={(event) => {
                event.preventDefault();
                setUserData({ ...userData, accTypeId: 1 });
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
                userData["accTypeId"] == 2
                  ? "reqStep2__btn-active"
                  : "reqStep2__btn"
              }
              onClick={(event) => {
                event.preventDefault();
                setUserData["sharingId"] = null;
                setUserData({ ...userData, accTypeId: 2 });
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
          {userData["accTypeId"] == 1 ? (
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
            
                  className={
                userData["sharingId"] === 1 ? "reqStep2__btn-active": "reqStep2__btn"
                }
                  onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, sharingId: 1 });
                  }}
                >
                  <p
              
                    style={{ margin: "0.75rem 2.53rem" }}
                  >
                    Single
                  </p>
                </button>
                <button type="button" 
                className={
                userData["sharingId"] === 2 ? "reqStep2__btn-active": "reqStep2__btn"
                }
                  onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, sharingId: 2 });
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
                userData["sharingId"] === 3 ? "reqStep2__btn-active": "reqStep2__btn"
                }
                 onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, sharingId: 3 });
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
                    setUserData({ ...userData});
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
                userData["flatTypeId"] === 1 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }

                   onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, flatTypeId: 1 });
                  }}>
                    <p style={{ margin: "0.75rem" }}>1 RK</p>
                  </div>
                  <div 
                  className={
                userData["flatTypeId"] === 2 ? " text-center mx-2 col reqStep2__btn-active": "text-center mx-2 col reqStep2__btn"
                }
                   onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, flatTypeId: 2 });
                  }}
                   >
                    <p style={{ margin: "0.75rem" }}>1 BHK</p>
                  </div>
                  <div 
                  className={
                userData["flatTypeId"] === 3 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }
                  
                    onClick={(event) => {
                    event.preventDefault();

                    setUserData({ ...userData, flatTypeId: 3 });
                  }}>
                    <p style={{ margin: "0.75rem" }}>2 BHK</p>
                  </div>
                  <div 
                   className={
                userData["flatTypeId"] === 4 ? " text-center col reqStep2__btn-active mx-2": "text-center col reqStep2__btn mx-2"
                }
                    onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, flatTypeId: 4 });
                  }}>
                    <p style={{ margin: "0.75rem"}}>3 BHK</p>
                  </div>
                  <div 
                   className={
                userData["flatTypeId"] === 5 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }
                  
                  
                    onClick={(event) => {
                    event.preventDefault();
        
                    setUserData({ ...userData, flatTypeId: 5 });
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
                userData["furnishedtypeId"] === 1 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }
                 onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, furnishedtypeId: 1 });
                  }}>
                  <p style={{ margin: "0.75rem" }}>Fully Furnished</p>
                </div>
                <div 
                 className={
                userData["furnishedtypeId"] === 2 ? " text-center col reqStep2__btn-active mx-3": " mx-3 text-center col reqStep2__btn"
                }
                 onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, furnishedtypeId: 2 });
                  }}>
                  <p style={{ margin: "0.75rem" }}>Semi Furnished</p>
                </div>
                <div 
                 className={
                userData["furnishedtypeId"] === 3 ? " text-center col reqStep2__btn-active": "text-center col reqStep2__btn"
                }
                onClick={(event) => {
                    event.preventDefault();
                    setUserData({ ...userData, furnishedtypeId: 3 });
                  }}>
                  <p style={{ margin: "0.75rem" }}>Unfurnished</p>
                </div>
                </div>
              </div>
            </div>
          )}

          <p className="reqStep2__label-h" style={{ marginBottom: "1.15rem" }}>
            House Habit Preferences (allowed)
          </p>
          <div className="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              className="form-check-input"
              type="checkbox"
              id="nonVeg"
              checked={userData["isNonVeg"]}
              onChange={(event) => {
                setUserData({
                  ...userData,
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
              id="smoking"
              checked={userData["isSmoking"]}
              onChange={(event) => {
                setUserData({
                  ...userData,
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
              id="drinking"
              checked={userData["isDrinking"]}
              onChange={(event) => {
                setUserData({
                  ...userData,
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
                onClick={()=>{previous()}}
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
                  if((userData["accTypeId"] === 1 && (userData["sharingId"] === 1 || userData["sharingId"] === 2 || userData["sharingId"] === 3)) || (userData["accTypeId"] === 2 && (userData["flatTypeId"] === 1 || userData["flatTypeId"] === 2 || userData["flatTypeId"] === 3 || userData["flatTypeId"] === 4 || userData["flatTypeId"] === 5) && (userData["furnishedtypeId"] === 1 || userData["furnishedtypeId"] === 2 || userData["furnishedtypeId"] === 3))) {
                    next();
                  }
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

export default Step3;