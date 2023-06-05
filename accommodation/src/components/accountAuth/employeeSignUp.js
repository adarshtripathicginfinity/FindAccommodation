import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./employeeSignUp.css";
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

const EmployeeSignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsEmailValid(
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || value.length === 0
        ? true
        : false
    );
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setIsPasswordValid(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,}$/.test(value) ||
        !value.length >= 6
        ? true
        : false
    );
  };

  function handleSignup(event) {
    event.preventDefault();

    axios
      .post("https://cg-accommodation.azurewebsites.net/EmpSignUp", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    console.log(email);
    console.log(`password: ${password} (hidden visible only on backend)`);
    navigate("/otp");
  }

  return (
    <Wrapper>
      <Container>
        <MainContainer className="container ">
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
            <RightContainer className="col-12 col-sm-6 right-container ">
              <div className="row" style={{ padding: "0 4.5rem" }}>
                <div className="col-12 text-center mb-4 mt-5">
                  <img className="img-fluid" src={cgLogo} />
                  <h4 className="login__main-heading mt-3">
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
                style={{ width: "100%", padding: "0 1.21rem", marginTop: "" }}
              >
                <div className="col-12">
                  <div className="container w-100 g-2">
                    <form onSubmit={handleSignup}>
                      <div>
                        <label for="email" className="form-label">
                          Email <span style={{color:"#dd2727"}}><strong>*</strong></span>
                        </label>
                        <input
                          type="email"
                          placeholder="Enter Your Email ID"
                          className="form-control"
                          value={email}
                          onChange={handleEmailChange}
                          required
                        />
                        {!isEmailValid && email && (
                          <span className="employeeSignup__warning">
                            Email is not valid
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          for="password"
                          className="form-label"
                          style={{ marginTop: "1rem" }}
                        >
                          Password <span style={{color:"#dd2727"}}><strong>*</strong></span>
                        </label>
                        <input
                          type="password"
                          placeholder="Enter Password"
                          className="form-control"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                        {!isPasswordValid && password && (
                          <span className="employeeSignup__warning">
                            use minimum 6 digits, uppercase, lowercase, number
                            & symbol
                          </span>
                        )}
                      </div>

                      <button
                        className="btn btn-warning w-100 "
                        style={{ marginTop: "2.25rem" }}
                        disabled={!isEmailValid && email || !isPasswordValid && password}
                      >
                        <p
                          style={{
                            fontWeight: "500",
                            fontFamily: "Lato",
                            marginBottom: "0",
                          }}
                        >
                          Sign Up
                        </p>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="container text-center"
                style={{ marginTop: "5%", marginBottom: "6rem" }}
              >
                <Link
                  to="/"
                  className="link-primary"
                  style={{ color: "#28519E", fontWeight: "500" }}
                >
                  Already Have an Account
                </Link>
              </div>
             
            </RightContainer>
          </div>
        </MainContainer>
      </Container>
    </Wrapper>
 
  );
};

export default EmployeeSignUp;

