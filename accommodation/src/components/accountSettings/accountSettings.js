import React, { useState } from "react";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import Navbar from "../navbar/navbar";
import Profile from "./profile/profile";
import ChangePassword from "./changePassword/changePassword";
import EditPost from "./editPost/editPost";
import { Link } from "react-router-dom";
import "./accountSettings.css"


const AccountSettings = () => {
  const [activeButton, setActiveButton] = useState("");
  

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const renderComponent = () => {
    switch (activeButton) {
      case "profile":
        return <Profile />;
      case "password":
        return <ChangePassword />;
      case "volunteer":
        return <EditPost />;
      default:
        return null;
    }
  };
  return (
    <>
      <Navbar />
      <Wrapper>
        <Container>
          <div className="container-fluid" >
          <div className="row" style={{marginTop: "1%"}}>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/landingpage">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Settings
                  </li>
                </ol>
              </nav>
            </div>
            <div className="row">
              <h4>Settings</h4>
            </div>
            <div className="row" style={{marginTop:"1rem"}}>
              <div className="col-sm-4 accountsettings__container">
                <div className="d-grid gap-2">
                  <button
                    className={`btn btn-primary${
                      activeButton === "profile" ? " active" : ""
                    }`}
                    onClick={() => handleButtonClick("profile")}
                  >
                    Your Profile
                  </button>
                  <button
                    className={`btn btn-primary${
                      activeButton === "password" ? " active" : ""
                    }`}
                    onClick={() => handleButtonClick("password")}
                  >
                    Change Password
                  </button>
                  <button
                    className={`btn btn-primary${
                      activeButton === "volunteer" ? " active" : ""
                    }`}
                    onClick={() => handleButtonClick("volunteer")}
                  >
                    Volunteer Post
                  </button>
                </div>
              </div>
              <div className="col-sm-8 accountsettings__container">{renderComponent()}</div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default AccountSettings;
