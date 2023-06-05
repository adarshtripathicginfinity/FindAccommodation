import { React, useState } from "react";
import cgLogo from "../../images/cgLogo.png";
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
import { useNavigate } from "react-router";
import axios from "../api/axios";

const CreateNewPassword = () => {
  const NEW_PASS_URL = "/changPassword";
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");

  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isconfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  // const [isValid, setIsValid] = useState(true);

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setIsPasswordValid(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/.test(value) ||
        !value.length >= 6
        ? true
        : false
    );
    // setIsValid(value === confirmPassword && event.target.value.length >= 8);
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    setIsConfirmPasswordValid(
      value === password && password.length >= 8 ? true : false
    );
    // setIsValid(event.target.value === password && password.length >= 8);
  };

  function handleNewPassword(event) {
    axios.post(NEW_PASS_URL, {
      email: userEmail,
      newPassword: password,
      confirmPassword: confirmPassword,
    }).then((response) => {
      console.log(response.data);
      navigate("/changedpassword");
    }).catch((error)=>{
      console.log(error)
    })

    
  }
  return (
    <Wrapper>
      <Container>
        <MainContainer className="container " style={{ padding: "0 2.7%" }}>
          <div className="row main-row " style={{ height: "35.75rem" }}>
            <LeftContainer className="col-6 d-sm-flex d-none ">
              <div className="row">
                <div className="col-12 text-center">
                  <BuildingImage
                    className="img-fluid"
                    src={building}
                    style={{}}
                  />
                  <p className="find-accomo" style={{ color: "#FFFFFF" }}>
                    Find Your Accommodation
                  </p>
                  <p className="description" style={{ color: "#FFFFFF" }}>
                    This is an online platform that helps other to find
                    accommodation
                  </p>
                </div>
              </div>
            </LeftContainer>
            <RightContainer className="col-12 col-sm-6 right-container ">
              <div className="row" style={{ padding: "0 4.5rem" }}>
                <div className="col-12 text-center mb-4 mt-5">
                  <img className="img-fluid" src={cgLogo} alt='logo'/>
                  <h4 className="login__main-heading mt-3">
                    Create New Password
                  </h4>
                  <p style={{ color: "black" }} className=" d-sm-none d-flex">
                    This is an online platform that helps other to find
                    accommodation
                  </p>
                </div>
              </div>
              <div
                className="row"
                style={{
                  width: "100%",
                  padding: "0 1.21rem",
                  marginTop: "1.5rem",
                }}
              >
                <div className="col-12">
                  <div className="container w-100 g-2">
                    <form onSubmit={handleNewPassword}>
                      <label for="email" className="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter New Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                      {!isPasswordValid && password && (
                        <span style={{ color: "red", fontSize: "12px" }}>
                          use minimum 6 digit , uppercase , lowercase , number &
                          symbol
                        </span>
                      )}

                      <label
                        for="password"
                        className="form-label"
                        style={{ marginTop: "1rem" }}
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                      {!isconfirmPasswordValid && confirmPassword && (
                        <span style={{ color: "red", fontSize: "0.75rem" }}>
                          Passwords do not match !
                        </span>
                      )}

                      <div
                        className="col-12 d-flex"
                        style={{
                          backgroundColor: "#E3F3FC",
                          margin: "1.5rem 0 1.5rem",
                        }}
                      >
                        <img
                          src={vector}
                          alt="logo"
                          className="img2"
                          style={{ margin: "0 0.5rem 0.7rem" }}
                        />
                        <p
                          className="mb-2 mt-2 alerttext"
                          style={{ color: "black" }}
                        >
                          Must contain 8 characters, at least one character and
                          one number.
                        </p>
                      </div>
                      <button
                        className="btn btn-warning w-100 mt-3"
                        disabled={
                          (!isPasswordValid && password) ||
                          (!isconfirmPasswordValid && confirmPassword)
                        }
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </RightContainer>
          </div>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default CreateNewPassword;
