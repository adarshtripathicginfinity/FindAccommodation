
import React, { useContext } from "react";
import { MultiStepContext } from "../../stepContext/stepContext";
import styled from "styled-components";
import "./step4.css";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";

const MainContainer = styled.div``;

const Step4 = () => {
  const { next, previous ,userData , setUserData } = useContext(MultiStepContext);
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
              fontSize: "16px",
              lineHeight: "19px",

              color: "#626262",
            }}
          >
            Step 4
          </p>
          <p
            style={{
              margin: "0",
              marginBottom: "0.25rem",
              fontFamily: "Lato",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "20px",
              lineHeight: "24px",
            }}
          >
            Amenities
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
        <div className="container-fluid" style={{padding: "0 0.75rem"}}>
          <form>
            <div className="row">
              <div className="col">
                <p className="Step4__form-heading" style={{ margin: "0" }}>
                  I have access to the following facilities:
                </p>
              </div>

              <fieldset>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="wifi"
                    name="Wifi"
 
                    className=""
                    checked = {userData["amenities.wifi"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{wifi:e.target.value}})}}
                    
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem" }}
                  >
                    Wi-Fi
                  </label>
                </div>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="food"
                    name="Food"
   
                    checked = {userData["amenities.food"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{food:e.target.value}})}}
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem" }}
                  >
                    Food
                  </label>
                </div>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="induction"
                    name="Induction"
  
                    checked = {userData["amenities.induction"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{induction:e.target.value}})}}
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem" }}
                  >
                    Induction
                  </label>
                </div>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="ac"
                    name="AC"

                    checked = {userData["amenities.ac"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{ac:e.target.value}})}}
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem" }}
                  >
                    AC
                  </label>
                </div>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="geyser"
                    name="Geyser"
   
                    checked = {userData["amenities.geyser"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{geyser:e.target.value}})}}
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem" }}
                  >
                    Geyser
                  </label>
                </div>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="cleanliness"
                    name="Cleanliness"
  
                    checked = {userData["amenities.cleanliness"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{cleanliness:e.target.value}})}}
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem" }}
                  >
                    Cleanliness
                  </label>
                </div>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="washing machine"
                    name="Washing Machine"
  
                    checked = {userData["amenities.washingMachine"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{washingMachine:e.target.value}})}}
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem" }}
                  >
                    Washing Machine
                  </label>
                </div>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="parking-2"
                    name="Parking-2"
   
                    checked = {userData["amenities.parking_2w"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{parking_2w:e.target.value}})}}
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem" }}
                  >
                    Parking (2-wheeler)
                  </label>
                </div>
                <div className="" style={{ marginTop: "1.25rem" }}>
                  <input
                    type="checkbox"
                    id="parking-4"
                    name="Parking-4"

                    checked = {userData["amenities.parking_4w"]}
                    onChange={(e)=>{setUserData({...userData, amenities :{parking_4w:e.target.value}})}}
                  />
                  <label
                    className="Step4__label-text"
                    style={{ marginLeft: "0.43rem", marginBottom: "5%" }}
                  >
                    Parking (4-wheeler)
                  </label>
                </div>
                <div style={{fontSize:"13px"}}>
                  Other Available Amenities
                </div>
                <div className="form-group" style={{marginTop: "2%"}}>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" style={{width:"80%"}}></textarea>
                </div>
              </fieldset>
            </div>

            <div className="row" style={{ marginTop: "8%" }}>
              <div className="col-6">
                <button
                  className="prev-btn"
                  type="button"
                  onClick={()=>{
                    previous();
                  }}
                  style={{ width: "100%" }}
                >
                  <p style={{ margin: "5% 0" }}>Previous</p>
                </button>
              </div>

              <div className="col-6">
                <button
                  onClick={() => {
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
          </div>
        </Body>
      </FormContainer>
    </>
  );
};

export default Step4;
