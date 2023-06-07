import React, { useContext, useState } from "react";
import cglogowhite from "../../images/cgLogoWhite.svg";
import profilePic from "../../images/profilePic.svg";
import dropdownArrow from "../../images/dropdownArrow.svg";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "./navbar.css";
import { MultiStepContext } from "../stepContext/stepContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(MultiStepContext);
  function handleLandingPage(event) {
    event.preventDefault();
    navigate("/landingpage");
  }
  const userData = localStorage.getItem("userData");

  const [data, setData] = useState(JSON.parse(userData));

  function handleLogIn() {
    localStorage.clear();
    setIsLoggedIn(false);
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
            alt="logo"
          />
        </div>
        <div
          className="d-flex"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              color: "white",
              backgroundColor: "gray",
            }}
          >
            <span className="d-flex align-items-center justify-content-center " style={{height: "40px",
              width: "40px",
              borderRadius: "50%",
              color: "white",
              }}>
              {data.firstName[0]} {data.lastName[0]}
            </span>
            {/* <img className="mx-2" src={profilePic} /> */}
          </div>
          <img src={dropdownArrow} />
        </div>

        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
          sx={{ width: "2px" }}
        >
          <Link className="dropdown-item non-clickable">
            <strong>
              {data?.firstName} {data?.lastName}
            </strong>
          </Link>
          <Link href="#" className="dropdown-item non-clickable">
            <strong style={{ color: "#565555", fontWeight: "400" }}>
              {data?.email}
            </strong>
          </Link>
          <Link to="/accountsettings" className="dropdown-item">
            <strong style={{ color: "#565555" }}>Account Settings</strong>
          </Link>
          {/* {console.log("inside navbar")} */}
          <Link
            to="/"
            className="dropdown-item"
            onClick={() => {
              handleLogIn();
            }}
          >
            <strong style={{ color: "red" }}>Logout</strong>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
