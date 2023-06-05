import React, { useState } from "react";
import "./internSignUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/cgLogo.png";
import vector from "../../images/alert.svg";

const InternSignUp = () => {




  const [firstName, setFirstName] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);

  const [lastName, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(false);

  const [aadharCard, setAadharCard] = useState("");
  const [isAdhaarNumberValid, setIsAdhaarNumberValid] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [contact, setContact] = useState("");
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);

  const [college, setCollege] = useState("");
  const [isUniNameValid, setIsUniNameValid] = useState(false);



  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    setFirstName(value);
    setIsFirstNameValid(value.length === 0 || /^[a-zA-Z\s]{2,50}$/.test(value));
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    setLastName(value);
    setIsLastNameValid(/^[a-zA-Z\s]{2,50}$/.test(value));
  };

  const handleAdhaarNumberChange = (event) => {
    const { value } = event.target;
    let formattedValue = value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ");
    if (formattedValue.trim().length <= 14) {
      setAadharCard(formattedValue.trim().replaceAll(" ","-"));
    }
    setIsAdhaarNumberValid(
      formattedValue.length === 0 || formattedValue.trim().length < 14
        ? false
        : true
    );
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsEmailValid(
      value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) || value.length === 0
        ? true
        : false
    );
  };

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    if (phoneNumber.trim().length <= 10) {
      setContact(phoneNumber.trim());
    }
    setIsPhoneNumberValid(
      phoneNumber.length === 0 || phoneNumber.trim().length < 10 ? false : true
    );
  };

  const handleUniNameChange = (event) => {
    const { value } = event.target;
    setCollege(value);
    setIsUniNameValid(value.length === 0 || /^[a-zA-Z\s]{3,20}$/.test(value));
  };





  const navigate = useNavigate();
  const handleInternSignUp = (event) => {
    event.preventDefault();


    axios
      .post("https://cg-accommodation.azurewebsites.net/registerIntern", {
        firstName,
        lastName,
        aadharCard,
        email,
        contact,
        college
  
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", email);
        //change some state here to go to internOtp
        navigate("/internOtp");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="container-fluid d-flex align-content-center justify-content-center p-4">
      <div className="inner_div mt-4">
        <div className="row mb-4">
          <div>
            <div className="d-flex justify-content-center">
              <img src={logo} className="img-fluid" alt="" />
            </div>
            <div className="d-flex justify-content-center mt-3">
              <p className="heading-name" style={{ color: "black" }}>
                Lets Find Your Accommodation
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleInternSignUp}>
          <div className="row mb-4">
            <div className="col-6">
              <p className="space">First Name</p>
              <input
                type="text"
                 className={!isFirstNameValid && firstName ? "form-control input-error" : "form-control"}      //"form-control internSignup-form"
                placeholder="First"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              {!isFirstNameValid && firstName && (
                <span style={{ color: "red", fontSize: "12px" }}>
                First Name should contain letters
                </span>
              )}
            </div>
            <div className="col-6">
              <p className="space">Last Name</p>
              <input
                type="text"
                className={!isLastNameValid && lastName ? "form-control input-error" : "form-control"}
                placeholder="Last"
                value={lastName}
                onChange={handleLastNameChange}
              />
              {!isLastNameValid && lastName && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Last Name should contain letters
                </span>
              )}
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <p className="space">Aadhar Card Number</p>
              <input
                type="text"
                className={!isAdhaarNumberValid && aadharCard ? "form-control input-error" : "form-control"}
                placeholder="---- ---- ----"
                value={aadharCard}
                onChange={handleAdhaarNumberChange}
              />
               {!isAdhaarNumberValid && aadharCard && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Aadhar should contain 12 digits
                </span>
              )}
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-12">
              <p className="space">University Email ID</p>
              <input
                type="text"
                className={!isEmailValid && email ? "form-control input-error" : "form-control"}
                placeholder="Enter Your University Email ID"
                value={email}
                onChange={handleEmailChange}
              />
               {!isEmailValid && email && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Email is not valid
                </span>
              )}
            </div>
          </div>

          <div
            className="row mb-4  mt-1 w-100 "
            style={{ marginLeft: "0.30%" }}
          >
            <div
              className="col-12 d-flex "
              style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
            >
              <img src={vector} alt="" className="img2" />
              <p className="mb-2 mt-2 alerttext" style={{ color: "black" }}>
                This email account will be used to send password instructions
              </p>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12">
              <p className="space">Contact Number</p>
              <input
                type="text"
                className={!isPhoneNumberValid && contact ? "form-control input-error" : "form-control"}
                placeholder="Enter Contact Number"
                value={contact}
                onChange={handlePhoneNumberChange}
              />
               {!isPhoneNumberValid && contact && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Phone no. cannot be empty
                </span>
              )}
            </div>
          </div>

          <div className="row" style={{ marginBottom: "0.75rem" }}>
            <div className="col-12">
              <p className="space">University / College</p>
              <input
                type="text"
                className={!isUniNameValid && college ? "form-control input-error" : "form-control"}
                placeholder="Enter your University/College"
                value={college}
                onChange={handleUniNameChange}
              />
               {!isUniNameValid && college && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  Must be more than 2 characters
                </span>
              )}
            </div>
          </div>

          <div
            className="row mt-1 w-100 "
            style={{ marginLeft: "0.30%", marginBottom: "2.25rem" }}
          >
            <div
              className="col-12 d-flex "
              style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
            >
              <img src={vector} alt="" className="img2" />
              <p className="alerttext" style={{ margin: "0.5rem" }}>
                Please enter full name of your university/college
              </p>
            </div>
          </div>

          <div className="row nspace mb-4">
            <div className="col-12 ">

              <button className="btn btn-warning w-100 mt-3">
              <p style={{fontWeight: '500' , fontFamily:'Lato', marginBottom:"0"}}>Sign Up</p>
              </button>
            </div>
          </div>
        </form>
        <div className="row mb-4">
          <Link className="alink" to="/"  style={{color:'#28519E' , fontWeight:'500'}}>
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternSignUp;












































  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setLastName] = React.useState("");
  // const [aadharCard, setAadharCard] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [contact, setContact] = React.useState("");
  // const [college, setCollege] = React.useState("");






// return (
//   <div className="container-fluid d-flex align-content-center justify-content-center p-4 mt-5">
//     <div className="inner_div mt-4">
//       <div className="row mb-4">
//         <div>
//           <div className="d-flex justify-content-center">
//             <img src={logo} className="img-fluid" alt="" />
//           </div>
//           <div className="d-flex justify-content-center mt-3">
//             <p className="heading-name" style={{ color: "black" }}>
//               Lets Find Your Accommodation
//             </p>
//           </div>
//         </div>
//       </div>

//       <form onSubmit={handleInternSignUp}>
//         <div className="row mb-4">
//           <div className="col-6">
//             <p className="space">First Name</p>
//             <input
//               type="text"
//               className="form-control internSignup-form"
//               placeholder="First"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div className="col-6">
//             <p className="space">Last Name</p>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Last"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="row mb-4">
//           <div className="col-12">
//             <p className="space">Aadhar Card Number</p>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="--- ---- ----"
//               value={aadharCard}
//               onChange={(e) => setAadharCard(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="row mb-2">
//           <div className="col-12">
//             <p className="space">University Email ID</p>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Your University Email ID"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         <div
//           className="row mb-4  mt-1 w-100 "
//           style={{ marginLeft: "0.30%" }}
//         >
//           <div
//             className="col-12 d-flex "
//             style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
//           >
//             <img src={vector} alt="" className="img2" />
//             <p className="mb-2 mt-2 alerttext" style={{ color: "black" }}>
//               This email account will be used to send password instructions
//             </p>
//           </div>
//         </div>

//         <div className="row mb-4">
//           <div className="col-12">
//             <p className="space">Contact Number</p>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter Contact Number"
//               value={contact}
//               onChange={(e) => setContact(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="row" style={{ marginBottom: "0.75rem" }}>
//           <div className="col-12">
//             <p className="space">University / College</p>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Enter your University/College"
//               value={college}
//               onChange={(e) => setCollege(e.target.value)}
//             />
//           </div>
//         </div>

//         <div
//           className="row mt-1 w-100 "
//           style={{ marginLeft: "0.30%", marginBottom: "2.25rem" }}
//         >
//           <div
//             className="col-12 d-flex "
//             style={{ backgroundColor: "#E3F3FC", borderRadius: "4px" }}
//           >
//             <img src={vector} alt="" className="img2" />
//             <p className="alerttext" style={{ margin: "0.5rem" }}>
//               Please enter full name of your university/college
//             </p>
//           </div>
//         </div>

//         <div className="row nspace mb-4">
//           <div className="col-12 ">

//             <button className="btn btn-warning w-100 mt-3">
//             <p style={{fontWeight: '500' , fontFamily:'Lato', marginBottom:"0"}}>Sign Up</p>
//             </button>
//           </div>
//         </div>
//       </form>
//       <div className="row mb-4">
//         <Link className="alink" to="/"  style={{color:'#28519E' , fontWeight:'500'}}>
//           Already have an account Login
//         </Link>
//       </div>
//     </div>
//   </div>
// );
// };