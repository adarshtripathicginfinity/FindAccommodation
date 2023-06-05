import React, { useState } from "react";
import cgLogo from "../../images/cgLogo.png";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import building from "../../images/cgBuilding.svg";
import vector from "../../images/vector.svg";
import {
  Wrapper,
  Container,
  MainContainer,
  LeftContainer,
  RightContainer,
  BuildingImage,
} from "../utilityStyles/utilityStyles";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);


  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsEmailValid(
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || value.length === 0
        ? true
        : false
    );
  };

  const handleForgotPass = (event) => {
    event.preventDefault();
    
    axios
    .post(
      "https://cg-accommodation.azurewebsites.net/forgetPassword",
      { email },
      
    )
    .then((response) => {
      console.log(response.data);
      localStorage.setItem('token',response.data.token)
      localStorage.setItem('email',response.data.response.email)
      navigate('/forgotpassotp');
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  }



  return (
    <Wrapper>
      <Container>
        <MainContainer className="container " style={{ padding: "0 6.7%" }}>
          <div className="row main-row " style={{ height: "35.75rem",width:"90%" }}>
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
            <RightContainer className="col-12 col-sm-6 right-container ">
              <div className="row" style={{ padding: "0 4.5rem" }}>
                <div className="col-12 text-center mb-4 mt-5">
                  <img className="img-fluid" src={cgLogo} />
                  <h4 className="login__main-heading mt-3">Forgot Password?</h4>
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
                <div className="col-12">
                  <div className="container w-100 g-2">
                    <div
                      className="col-12 d-flex"
                      style={{
                        backgroundColor: "#E3F3FC",
                        margin: "1.5rem 0 2.5rem",
                      }}
                    >
                      <img
                        src={vector}
                        alt=""
                        className="img2"
                        style={{ margin: "0 0.5rem 0.7rem" }}
                      />
                      <p
                        className="mb-2 mt-2 alerttext "
                        style={{ color: "black" ,fontSize:"1rem",lineHeight:"1.25rem"}}
                      >
                        Please enter your email address below. You will receive
                        a OTP to reset your password.
                      </p>
                    </div>
                    <form onSubmit={handleForgotPass}>
                      <label for="email" className="form-label">
                        Email ID
                      </label>
                      <input type="email" className="form-control" placeholder="Enter Your Email ID" value={email} onChange={handleEmailChange} required/>
                      {!isEmailValid && email && (
                          <span style={{ color: "red", fontSize: "12px" }}>
                            Email is not valid
                          </span>
                        )}

                      <button className="btn btn-warning w-100 mt-3" disabled={!isEmailValid && email}>
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="container text-center"
                style={{ marginTop: "5%", marginBottom: "5.87rem" }}
              >
                <a href="/" className="link-primary" style={{color:'#28519E' , fontWeight:'500'}}>
                  Back to login
                </a>
              </div>
            </RightContainer>
          </div>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default ForgotPassword;
