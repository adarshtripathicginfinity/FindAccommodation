import React, { useState } from "react";
import "./forgotPassOtp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../../images/back_arrow.png";
import cgLogo from "../../images/cgLogo.png";
import building from "../../images/cgBuilding.svg";
import {
  Wrapper,
  Container,
  MainContainer,
  LeftContainer,
  RightContainer,
  BuildingImage,
} from "../utilityStyles/utilityStyles";

const ForgotPassOtp = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");

  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");


  const handleForgotPass = (event) =>{
    event.preventDefault();
    navigate("/")
    window.location.href=`/createnewpassword`;
  }



  return (
    <>
      <Wrapper>
        <Container>
          <MainContainer className="container" style={{ padding: "0 4.7%" }}>
            <div className="row main-row " style={{ height: "35.75rem" }}>
              <LeftContainer className="col-6 d-sm-flex d-none ">
                <div className="row">
                  <div
                    className="col-12 text-center"
                    style={{ color: "#ffffff" }}
                  >
                    <BuildingImage
                      className="img-fluid"
                      src={building}
                      style={{}}
                    />
                    <p className="find-accomo">Find Your Accommodation</p>
                    <p className="description">
                      This is an online platform that helps other to find
                      accommodation
                    </p>
                  </div>
                </div>
              </LeftContainer>
              <RightContainer className="col-12 col-sm-6 right-container">
                <div className="row" style={{ padding: "0 4.5rem" }}>
                  <div className="col-12 text-center mb-4 mt-5">
                    <img className="img-fluid" src={cgLogo} />
                    <h4 className="otp__main-heading mt-3">
                      Let's Find Your Accommodation
                    </h4>
                    <p style={{ color: "black" }} className=" d-sm-none d-flex">
                      This is an online platform that helps other to find
                      accommodation
                    </p>
                  </div>
                </div>
                <div
                  className="row"
                  style={{ width: "100%", padding: "0 1.21rem" }}
                >
                  <div className="col-12  " style={{ marginTop: "2.5rem" }}>
                    <a href="/" style={{textDecoration:'none'}} >
                      <img src={arrow} />{" "}
                    </a>
                      <span className="mail">{userEmail}</span>
                    
                    <h4 className="mt-4 enter-code">Enter Code</h4>
                    <p className="code-msg">
                      Please type the Six digit code we have sent on your
                      Microsoft account.
                    </p>
                    <form style={{ marginBottom: "4%" }} >
                      <input
                        type="text"
                        id="otp"
                        className="otp_input"
                        placeholder="Code"
                        style={{ width: "100%" }}
                      />

                      <button className="btn btn-warning w-100 mt-3" onClick={handleForgotPass}>
                        Verify
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  className="container text-center"
                  style={{ marginTop: "5%", marginBottom: "3rem" }}
                >
                  <a className="link-primary" href="/" style={{color:'#28519E' , fontWeight:'500'}}>Use Another Account</a>
                </div>
              </RightContainer>
            </div>
          </MainContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default ForgotPassOtp;
