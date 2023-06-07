import React, { useContext, useState } from "react";
import "./step5.css";
import alert from "../../../images/alert.svg";
import { MultiStepContext } from "../../stepContext/stepContext";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Step5 = () => {
  const { previous, submitForm ,userData,setUserData} = useContext(MultiStepContext);
  const navigate = useNavigate();
  function handleSubmit(){
    axios.post("https://cg-accommodation.azurewebsites.net/createAccommodation", { userData})
  .then((response) => {
    console.log(response.data);
    navigate("/postSuccess");
  })
  .catch((error) => {
    console.log(error.response.data);
    
  });
  navigate("/landingPage")


  }


  const [contactNumber, setContactNumber] = useState();
  const [isContactNumberValid, setIsContactNumberValid] = useState(false);

  const handleContactChange = (event) => {
    let phoneNumber = event.target.value;
    if (phoneNumber.trim().length <= 10) {
      setContactNumber(phoneNumber.trim());
    }
    setIsContactNumberValid(
      phoneNumber.length === 0 || (phoneNumber.trim().length <= 10 && /\d{10}/.test(phoneNumber)) ? true : false
    );
    setUserData({...userData, houseOwnerContact: phoneNumber.trim()})
  }

  const handleLandlordName = (event) => {
    let {value} = event.target;
    setUserData({...userData, houseOwnerName: value});
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
              fontSize: "16px",
              lineHeight: "19px",

              color: "#626262",
            }}
          >
            Step 5
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
            Contact Information
          </p>
          <hr style={{ margin: "0" }} />
        </Header>
        <Body>
        <div className="container-fluid" style={{padding: "0 0.75rem"}}>
          <form>
            <div className="row ">
              <div className="col ">
                <p
                  className="Step5__form-heading"
                  style={{ marginBottom: "0" }}
                >
                  Preferred days and time to contact you <span style={{color:"#dd2727"}}><strong>*</strong></span>
                </p>
              </div>
              <div className="" style={{ marginTop: "1rem" }}>
                <div className="d-flex justify-content-between">
                  <button 
                  type="button"
                
                    className={
                userData["preferredDays"] === 1 ? "Step5__btn-active": "Step5__btn-style"
                }
                    onClick={()=>{setUserData({...userData,preferredDays:1})}}
                  >
                    <p
                     style={{ margin: "0.75rem 2rem" }}
                      
                      
                    >
                      Mon-Fri
                    </p>
                  </button>
                  <button type="button" 
                     className={
                userData["preferredDays"] === 2 ? "Step5__btn-active mx-3": "Step5__btn-style mx-3"
                }
                    onClick={()=>{setUserData({...userData,preferredDays:2})}}  >
                    <p
                     style={{ margin: "0.75rem 2rem" }}
                     
                    >
                      Weekends
                    </p>
                  </button>
                  <button type="button" 
                   className={
                userData["preferredDays"] === 3 ? "Step5__btn-active": "Step5__btn-style"
                }
                    onClick={()=>{setUserData({...userData,preferredDays:3})}}>
                    <p
                      
                      style={{ margin: "0.75rem 2rem" }}
                    >
                      All Days
                    </p>
                  </button>
                </div>

                <div className="d-flex gap-4" style={{ marginTop: "1rem" }}>
                  <input
                    type="time"
                    name=""
                    id="timepicker"
                    className="form-control"
                    
                  />
                  <input
                    type="time"
                    name=""
                    id="timepicker2"
                    className="form-control "
                    
                  />
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "2rem" }}>
              <div className="d-flex gap-2">
                <div className="">
                  <p
                    className=" Step5__form-heading"
                    style={{ color: "#343435" }}
                  >
                    Landlord/House owner details
                  </p>
                </div>
                <div>
                  <p className="Step5__form-italic">(Optional)</p>
                </div>
              </div>

              <div
                className="row "
                style={{
                  marginTop: "1rem",
                  marginLeft: "0rem",
                  marginRight: "2rem",
                }}
              >
                <div
                  className="col d-flex "
                  style={{
                    backgroundColor: "#E3F3FC",
                    borderRadius: "4px",
                    padding: "0.5rem 0.75rem",
                  }}
                >
                  <img src={alert} alt="logo" className="" style={{marginRight:"4px"}}/>
                  <p className="" style={{ marginBottom: "0"}}>
                    Please provide this information after your landlord's
                    consent.
                  </p>
                </div>
              </div>
            </div>

            <div className="row" style={{ marginTop: "1.5rem" }}>
              <div className="col">
                <p className="Step5__form-heading">
                  Name of your Landlord/House owner
                </p>
                <input
                  type="text"
                  placeholder="John Doe"
                  onInput={(e) => handleLandlordName(e)}
                  className="form-control"
                  value={userData["houseOwnerName"]}
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: "1.5rem" }}>
              <div className="col">
                <p className="p_input ">Contact Number</p>
                <input
                  onInput={(e) => handleContactChange(e)}
                  type="text"
                  placeholder="0987654321"
                  className={ !isContactNumberValid && userData["houseOwnerContact"]
                    ? "form-control input-error"
                    : "form-control"
                  }
                  value={userData["houseOwnerContact"]}
                />
                {
                    !isContactNumberValid && contactNumber && (
                      <span style={{ color: "red", fontSize: "12px" }}>
                        Contact Number is not valid
                      </span>
                    )
                  }
              </div>
            </div>

            <div className="row" style={{ marginTop: "8%" }}>
              <div className="col-6">
                <button
                  className="prev-btn"
                  type="button"
                  onClick={()=>{previous()}}
                  style={{ width: "100%" }}
                >
                  <p style={{ margin: "5% 0" }}>Previous</p>
                </button>
              </div>

              <div className="col-6">
                <button
                  type="button"
                  onClick={() => {
                    if(userData["preferredDays"] != null) {
                      handleSubmit();    
                    }
                  }}
                  style={{ width: "100%" }}
                  className="border-0 save-btn "
                >
                  <p style={{ margin: "5% 0" }}>Submit</p>
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

export default Step5;