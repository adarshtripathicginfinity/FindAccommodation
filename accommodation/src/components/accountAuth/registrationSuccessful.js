import React from "react";
import {
  Wrapper,
  Container,
  MainContainer,
} from "../utilityStyles/utilityStyles";
import Cglogo from "../../images/cgLogo.svg";
import Tick from "../../images/circle.svg";
import Alert from "../../images/alert.svg";
import "./changedPassword.css";

const registrationSuccessful = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <MainContainer className="container ">
            <div
              className="container justify-content-center text-center changedPassword__maincontainer"
              style={{ width: "80%", padding: "2.5rem" }}
            >
              <div className="row d-none d-sm-flex">
                <div className="col-12">
                  <img src={Cglogo} className="" alt="logo"/>
                </div>

                <p
                  className="changedPassword__main-heading"
                  style={{ marginTop: "1rem", marginBottom: "0" }}
                >
                  Let's Find Your Accommodation
                </p>
              </div>

              <div className="" style={{ marginTop: "2.68rem" }}>
                <img src={Tick} alt="logo"/>
                <p
                  className="changedPassword__heading"
                  style={{ marginTop: "1.6rem", marginBottom: "0" }}
                >
                  Registration Successful
                </p>
                <div
                  className=" d-flex flex-direction-row changedPassword__alertbox"
                  style={{ marginTop: "1.5rem" }}
                >
                  <img src={Alert} alt="logo" style={{ marginLeft: "0.62rem" }} />
                  <div className="text-align-start">
                    <p
                      className="changedPassword__alertbox-p text-align-start"
                      style={{ margin: "0.6rem" }}
                    >
                      An email has been sent to your account containing password
                      instructions.
                    </p>
                  </div>
                </div>

                <div className="row nspace mb-4">
                  <div className="col-12 ">
                    <button
                      className="btn btn-warning w-100 mt-3"
                      style={{ fontWeight: "600" }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </MainContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default registrationSuccessful;
