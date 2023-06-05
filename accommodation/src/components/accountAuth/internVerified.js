import React from "react";
import logo from "../../images/cgLogo.png";
import vector from "../../images/alert.svg";
import Tick from "../../images/circle.svg";
import "./internSignUp.css";
const InternVerified = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = `/`;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container-fluid w-30 p-4 mt-5" style={{ width: "40%" }}>
        <div className="inner_div2 ">
          <div className="row mb-4">
            <div>
              <div className="d-flex justify-content-center">
                <img src={logo} alt="" />
              </div>
              <div className="d-flex justify-content-center mt-3 text-center">
                <p className="heading-name" style={{ color: "black" }}>
                  Let's Find Your Accommodation
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="d-flex" style={{ justifyContent: "center", marginBottom: "3%"}}>
              <img src={Tick} alt="" />
            </div>
          </div>

          <div className="row">
            <div className="d-flex" style={{ justifyContent: "center" }}>
              <p className="regis" style={{ color: "black" }}>
                Registration Successful
              </p>
            </div>
          </div>

          <div className="row mb-4 mt-1 ">
            <div
              className="col-12 d-flex"
              style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
            >
              <img src={vector} alt="" className="img2" />
              <p className="mb-2 mt-2 alerttext" style={{ color: "black" }}>
                An email has been sent to your account containing password
                instructions.
              </p>
            </div>
          </div>

          <div className="row nspace pb-4">
            <div className="col-12 butn">
              <form onSubmit={handleSubmit}>
                <button className=" py-1 px-3">Continue</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternVerified;
