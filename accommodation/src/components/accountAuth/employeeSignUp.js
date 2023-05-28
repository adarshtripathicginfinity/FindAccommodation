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
                          Email
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
                          Password
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
                  to="/login"
                  className="link-primary"
                  style={{ color: "#28519E", fontWeight: "500" }}
                >
                  Already Have an Account
                </Link>
              </div>
              {/* <div
                className="container-fluid"
                style={{ padding: "0 2.5rem", marginTop: "2.25rem" }}
              >
                <div
                  className=" text-center"
                  style={{
                    backgroundColor: "#E9ECEB",
                    position: "relative",
                    top: "3%",
                    padding: "0.5rem 0",
                  }}
                >
                  <p style={{ color: "black" }}>First time user? Sign Up </p>
                  <a href="#" className="link-primary">
                    CGI Employees
                  </a>
                  <span> | </span>
                  <a href="#" className="link-primary">
                    CGI Interns
                  </a>
                </div>
              </div> */}
            </RightContainer>
          </div>
        </MainContainer>
      </Container>
    </Wrapper>
    // <MainContainer
    //   className="container main-container "
    //   style={{ padding: "0" }}
    // >
    //   <div className="row main-row " style={{ height: "552px" }}>
    //     <LeftContainer
    //       className="col-6 left-container d-sm-flex d-none"
    //       style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
    //     >
    //       <div className="row" style={{ width: "85%" }}>
    //         <div className="col-12 text-center">
    //           <BuildingImage className="img-fluid" src={building} style={{}} />
    //           <p className="find-accomo">Find Your Accommodation</p>
    //           <p className="description">
    //             This is an online platform that helps other to find
    //             accommodation
    //           </p>
    //         </div>
    //       </div>
    //     </LeftContainer>
    //     <RightContainer
    //       className="col-12 col-sm-6  right-container "
    //       style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
    //     >
    //       <div className="row" style={{ padding: "0 4%" }}>
    //         <div className="col-12 text-center mb-4 mt-5">
    //           <img className="img-fluid" src={cglogo} />
    //           <h4 className="main-heading mt-3">
    //             Let's Find Your Accommodation
    //           </h4>
    //         </div>
    //       </div>
    //       <div className="row" style={{ width: "100%" }}>
    //         <div className="col-12" style={{ padding: "0" }}>
    //           <div className="container w-100 g-2">
    //             <form>
    //               <label for="email" className="form-label">
    //                 Email
    //               </label>
    //               <input type="email" className="form-control" />
    //               <label for="password" className="form-label">
    //                 Password
    //               </label>
    //               <input type="password" className="form-control" />
    //             </form>
    //           </div>
    //         </div>
    //         <button className="btn btn-warning w-100 mt-3">Sign Up</button>
    //       </div>
    //       <div className="container text-center" style={{ marginTop: "5%" }}>
    //         <a href="#" style={{ color: "#28519E" }} className="link-primary">
    //           Already have an account?
    //         </a>
    //       </div>
    //     </RightContainer>
    //   </div>
    // </MainContainer>
  );
};

export default EmployeeSignUp;

// const navigate = useNavigate();
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// function handleSignup (event){
//   event.preventDefault();

//   axios.post("https://cg-accommodation.azurewebsites.net/EmpSignUp", { email, password })
//     .then((response) => {
//       console.log(response.data);
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("email", email);
//     })
//     .catch((error) => {
//       console.log(error.response.data);
//     });
//   console.log(email);
//   console.log(`password: ${password} (hidden visible only on backend)`);
//   navigate('/otp');
// //

// <Wrapper>
// <Container>
//   <MainContainer className="container ">
//     <div className="row main-row " style={{ height: "35.75rem" }}>
//       <LeftContainer className="col-6 d-sm-flex d-none ">
//         <div className="row">
//           <div className="col-12 text-center" style={{color:'#ffffff'}}>
//             <BuildingImage
//               className="img-fluid"
//               src={building}
//               style={{}}
//             />
//             <p className="find-accomo">Find Your Accommodation</p>
//             <p className="description">
//               This is an online platform that helps other to find
//               accommodation
//             </p>
//           </div>
//         </div>
//       </LeftContainer>
//       <RightContainer className="col-12 col-sm-6 right-container ">
//         <div className="row" style={{ padding: "0 4.5rem" }}>
//           <div className="col-12 text-center mb-4 mt-5">
//             <img className="img-fluid" src={cgLogo} />
//             <h4 className="login__main-heading mt-3">
//               Let's Find Your Accommodation
//             </h4>
//             <p style={{ color: "black" }} className=" d-sm-none d-flex">
//               This is an online platform that helps other to find
//               accommodation
//             </p>
//           </div>
//         </div>
//         <div
//           className="row"
//           style={{ width: "100%", padding: "0 1.21rem" ,marginTop:""}}
//         >
//           <div className="col-12">
//             <div className="container w-100 g-2">
//               <form onSubmit={handleSignup}>
//                 <label for="email" className="form-label"  value={email}
//                   onChange={(e) => setEmail(e.target.value)}>
//                   Email
//                 </label>
//                 <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
//                 <label
//                   for="password"
//                   className="form-label"
//                   style={{ marginTop: "1rem" }}
//                 >
//                   Password
//                 </label>
//                 <input type="password" className="form-control"  value={password}
//                   onChange={(e) => setPassword(e.target.value)} />

//               <button className="btn btn-warning w-100 " style={{marginTop:"2.25rem"}}>
//                 <p style={{fontWeight: '500' , fontFamily:'Lato', marginBottom:"0"}}>Sign Up</p>

//               </button>
//               </form>
//             </div>
//           </div>
//         </div>
//         <div
//           className="container text-center"
//           style={{ marginTop: "5%" ,marginBottom:"6rem"}}
//         >
//           <a href="/" className="link-primary" style={{color:'#28519E' , fontWeight:'500'}}>
//             Already Have an Account
//           </a>
//         </div>
//         {/* <div
//           className="container-fluid"
//           style={{ padding: "0 2.5rem", marginTop: "2.25rem" }}
//         >
//           <div
//             className=" text-center"
//             style={{
//               backgroundColor: "#E9ECEB",
//               position: "relative",
//               top: "3%",
//               padding: "0.5rem 0",
//             }}
//           >
//             <p style={{ color: "black" }}>First time user? Sign Up </p>
//             <a href="#" className="link-primary">
//               CGI Employees
//             </a>
//             <span> | </span>
//             <a href="#" className="link-primary">
//               CGI Interns
//             </a>
//           </div>
//         </div> */}
//       </RightContainer>
//     </div>
//   </MainContainer>
// </Container>
// </Wrapper>
// // <MainContainer
// //   className="container main-container "
// //   style={{ padding: "0" }}
// // >
// //   <div className="row main-row " style={{ height: "552px" }}>
// //     <LeftContainer
// //       className="col-6 left-container d-sm-flex d-none"
// //       style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
// //     >
// //       <div className="row" style={{ width: "85%" }}>
// //         <div className="col-12 text-center">
// //           <BuildingImage className="img-fluid" src={building} style={{}} />
// //           <p className="find-accomo">Find Your Accommodation</p>
// //           <p className="description">
// //             This is an online platform that helps other to find
// //             accommodation
// //           </p>
// //         </div>
// //       </div>
// //     </LeftContainer>
// //     <RightContainer
// //       className="col-12 col-sm-6  right-container "
// //       style={{ boxShadow: "0px 4px 10px rgba(46, 72, 87, 0.18)" }}
// //     >
// //       <div className="row" style={{ padding: "0 4%" }}>
// //         <div className="col-12 text-center mb-4 mt-5">
// //           <img className="img-fluid" src={cglogo} />
// //           <h4 className="main-heading mt-3">
// //             Let's Find Your Accommodation
// //           </h4>
// //         </div>
// //       </div>
// //       <div className="row" style={{ width: "100%" }}>
// //         <div className="col-12" style={{ padding: "0" }}>
// //           <div className="container w-100 g-2">
// //             <form>
// //               <label for="email" className="form-label">
// //                 Email
// //               </label>
// //               <input type="email" className="form-control" />
// //               <label for="password" className="form-label">
// //                 Password
// //               </label>
// //               <input type="password" className="form-control" />
// //             </form>
// //           </div>
// //         </div>
// //         <button className="btn btn-warning w-100 mt-3">Sign Up</button>
// //       </div>
// //       <div className="container text-center" style={{ marginTop: "5%" }}>
// //         <a href="#" style={{ color: "#28519E" }} className="link-primary">
// //           Already have an account?
// //         </a>
// //       </div>
// //     </RightContainer>
// //   </div>
// // </MainContainer>
// );
// };
