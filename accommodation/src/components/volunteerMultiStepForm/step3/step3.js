import React, { useState, useContext, useEffect } from "react";
import "./step3.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";


const MainContainer = styled.div``;

const Step3 = () => {
  useEffect(()=>{ 
    // setUserData(["sharingId"]);
   },[] )
  const { next, previous, userData, setUserData, currentIndex } =
    useContext(MultiStepContext);

  const [accommodationType,setAccommodationType] = useState(true);
  // const [singlePg,setSinglePg] = useState(false)
  // const [doublePg,setDoublePg] = useState(false)
  // const [triplePg,setTriplePg] = useState(false)
  
  // const [flatType1RK, setFlatType1RK] = useState(false);
  // const [flatType1BHK, setFlatType1BHK] = useState(false);
  // const [flatType2BHK, setFlatType2BHK] = useState(false);
  // const [flatType3BHK, setFlatType3BHK] = useState(false);
  // const [flatType4BHK, setFlatType4BHK] = useState(false);

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
        {/* <div className="container-fluid" style={{padding: "0 0.75rem"}}>
          <form>
            <p className="Step3__form-heading" style={{ marginBotton: "1rem" }}>
              Accommodation Type
            </p>
            <div
              className="contianer d-flex flex-row gap-3"
              style={{ marginBottom: "1.5rem" }}
            >
              <button className= {accommodationType ? "step3__active-btn":"Step3__btn-style"}  onClick={(e)=>handlePgAccommodation(e)} type="button">
                <p className="Step3__btn-p-style">PG</p>
              </button>
              <button className={!accommodationType ? "step3__active-btn":"Step3__btn-style"} type="button" onClick={(e)=>handleFlatAccommodation(e)} >
                <p className="Step3__btn-p-style" >Flat</p>
              </button>
            </div>
           
                <>  
              
                <p className="Step3__form-heading" style={{ marginBottom: "1rem" }}>
              Sharing Type
                </p>
                <div
              className="contianer d-flex flex-row gap-3"
              style={{ marginBottom: "1.5rem" }}
            >
              <button type="button"  
                className= {userData["sharingId"] === 1 ? "step3__active-btn" :"Step3__btn-style "}  
                onClick={()=>{setUserData({...userData,sharingId:1}) }}
              >
                <p className="" style={{margin:"0.5rem 3rem"}}>Single</p>
              </button>
              <button type="button"
                className="Step3__btn-style" 
                onClick={()=>{setUserData({...userData,sharingId:2})}}
              >
                <p className=" " style={{margin:"0.5rem 3rem"}}>Double</p>
              </button>
              <button type="button"
                className="Step3__btn-style"
                onClick={()=>{setUserData({...userData,sharingId:3})}}
              >
                <p className=" " style={{margin:"0.5rem 4rem"}}>Triple</p>
              </button>
             
              
                </div>
                </>
            
            


            <p
              className="Step3__form-heading"
              style={{ marginBottom: "1.15rem" }}
            >
              House Habit Permitted
            </p>
            <div class="form-check" style={{ marginBottom: "1.18rem" }}>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
        
              />
              <label class="form-check-label" for="flexCheckDefault">
                Smoking
              </label>
            </div>
            <div class="form-check" style={{ marginBottom: "12.37rem" }}>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked={userData["isDrinking"] == undefined ? false : userData["isDrinking"]}
                onChange={()=>setUserData({...userData,isDrinking:true})}
              />
              <label class="form-check-label" for="flexCheckDefault">
                Drinking
              </label>
            </div>

            <div className="row" style={{ marginTop: "18rem" }}>
              <div className="col-6">
                <button
                  className="prev-btn"
                  type="button"
                  class="prev-btn"
                  onClick={()=>{  previous()}}
                  style={{ width: "100%" }}
                >
                  <p style={{ margin: "5% 0" }}>Previous</p>
                </button>
              </div>

              <div className="col-6">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    next();
                    
                  }}
                  style={{ width: "100%" }}
                  className="border-0 save-btn "
                >
                  <p style={{ margin: "5% 0" }}>Save & Next</p>
                </button>
              </div>
            </div>

          </form>
        </div> */}
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
                  // className="reqStep2__btn"
                  className={
                userData["sharingId"] === 1 ? "reqStep2__btn-active": "reqStep2__btn"
                }
                  onClick={(event) => {
                    event.preventDefault();
                    // setSinglePg(true)
                    // console.log(singlePg)
                    setUserData({ ...userData, sharingId: 1 });
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
                    // setFlatType1RK(true);
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
                    // setFlatType1BHK(true);
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
                    // setFlatType2BHK(true);
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
                    // setFlatType3BHK(true);
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
                    // setFlatType4BHK(true);
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
          <div class="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              class="form-check-input"
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
            <label class="form-check-label" for="flexCheckDefault">
              Non Veg
            </label>
          </div>
          <div class="form-check" style={{ marginBottom: "1.18rem" }}>
            <input
              class="form-check-input"
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
            <label class="form-check-label" for="flexCheckDefault">
              Smoking
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
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
            <label class="form-check-label" for="flexCheckDefault">
              Drinking
            </label>
          </div>
          { 
            console.log(userData["isSmoking"])
          }
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
                  console.log(userData);
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