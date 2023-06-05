import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./otp.css";
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
import useAuth from "../hooks/useAuth";


const Otp = () => {
  const [otp, setOtp] = useState();
  const userEmail = localStorage.getItem("email");

  const [isotpValid, setIsOtpValid] = useState(false);
  const { setAuth } = useAuth();

  const handleOtpChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\D/g, "").replace(/(.{1})/g, "$1 ");
    if (formattedValue.trim().length <= 11) {
      setOtp(formattedValue.trim());
    }
    setIsOtpValid(
      formattedValue.length === 0 || formattedValue.trim().length < 11
        ? false
        : true
    );
  };


  const navigate = useNavigate();

  function handleOtp(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    axios
      .post(
        "https://cg-accommodation.azurewebsites.net/EmpVerifyOtp",
        { email, otp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const res = {
          token:response.data.token,
          email:response.data.response[0].email,
          id:response.data.response[0].id,
          firstName:response.data.response[0].firstname,
          lastName:response.data.response[0].lastname,
        };
        localStorage.setItem('userData', JSON.stringify(res));
        localStorage.setItem("token", response.data.token);
        setAuth ({email,token})

        navigate("/landingpage");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
                    <img className="img-fluid" src={cgLogo} alt="logo"/>
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
                    <Link
                      to="/employeesignup"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={arrow} alt="logo"/>{" "}
                    </Link>
                    <span className="mail">{userEmail}</span>

                    <h4 className="mt-4 enter-code">Enter Code</h4>
                    <p className="code-msg">
                      Please type the Six digit code we have sent on your
                      Microsoft account.
                    </p>

                    <form
                      style={{ marginBottom: "4%" }}
                      onSubmit={(e) => {
                        handleOtp(e);
                      }}
                    >
                      <input
                        type="text"
                        id="otp"
                        className="otp_input"
                        placeholder="Code"
                        style={{ width: "100%" , paddingBottom: "2  %", borderBlockColor:"#8a8a8a"}}
                        value={otp}
                        onChange={(e) => {
                          setOtp(e.target.value);
                          // handleOtpChange(e);
                        }}
                      />
                      {/* {!isotpValid && otp && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          Not a Valid OTP
                        </span>
                      )} */}

                      <button
                        className="btn btn-warning w-100 mt-3"
                        onClick={(e) => {
                          handleOtp(e);
                        }}
                      >
                        Verify
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  className="container text-center"
                  style={{ marginTop: "5%", marginBottom: "3rem" }}
                >
                  <a
                    className="link-primary"
                    href="/"
                    style={{ color: "#28519E", fontWeight: "500" }}
                  >
                    Use Another Account
                  </a>
                </div>
              </RightContainer>
            </div>
          </MainContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default Otp;
