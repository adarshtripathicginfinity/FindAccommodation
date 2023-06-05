import React, { useContext, useState } from "react";
import cglogowhite from "../../images/cgLogoWhite.svg";
import profilePic from "../../images/profilePic.svg";
import bell from "../../images/bell.svg";
import dropdownArrow from "../../images/dropdownArrow.svg";
import { func } from "prop-types";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "./navbar.css";
import { MultiStepContext } from "../stepContext/stepContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const {isLoggedIn, setIsLoggedIn } = useContext(MultiStepContext);
  function handleLandingPage(event) {
    event.preventDefault();
    navigate("/landingpage");
  }
  const userData = localStorage.getItem("userData");

  const [data, setData] = useState(JSON.parse(userData));

  function handleLogIn() {
    localStorage.clear();
    setIsLoggedIn(false);
    console.log("logout worked", isLoggedIn);
    // setIsLogin(false);
    // return <Navigate to="/" />;
    // console.log("inside handleLogin")
  }
  return (
    <nav className="navbar-light" style={{ backgroundColor: "#002C3F" }}>
      <div className="d-flex justify-content-between px-3 py-2">
        <div
          onClick={(e) => {
            handleLandingPage(e);
          }}
        >
          <img
            className="d-inline-block align-text-top"
            style={{ width: "155.81px", height: "35px" }}
            src={cglogowhite}
          />
        </div>
        <div
          className=""
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img className="mx-2" src={profilePic} />
          <img src={dropdownArrow} />
        </div>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
          sx={{ width: "2px" }}
        >
          <Link class="dropdown-item non-clickable">
            <strong>
              {data?.firstName} {data?.lastName}
            </strong>
          </Link>
          <Link href="#" class="dropdown-item non-clickable">
            <strong style={{ color: "#565555", fontWeight: "400" }}>
              {data?.email}
            </strong>
          </Link>
          <Link to="/accountsettings" class="dropdown-item">
            <strong style={{ color: "#565555" }}>Account Settings</strong>
          </Link>
          {/* {console.log("inside navbar")} */}
          <Link to="/" class="dropdown-item" onClick={()=>{handleLogIn();}}>
            <strong style={{ color: "red" }}>Logout</strong>
          </Link>
          {/* <div
            class="dropdown-item"
            onClick={() => {
              handleLogIn();
            }}
          >
            <strong style={{ color: "red" }}>Logout</strong>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
