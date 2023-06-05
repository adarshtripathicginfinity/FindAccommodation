import React, { useContext, useState,useRef ,useEffect} from "react";
import { useNavigate, Link,  } from "react-router-dom";
import "./login.css";
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
import { MultiStepContext } from "../stepContext/stepContext";
import AuthContext from "../context/authProvider";
import axios from "../api/axios"
import useAuth from "../hooks/useAuth";
import {  useLocation } from 'react-router-dom';
import useLogin from "../hooks/useLogin";

const LOGIN_URL = '/login';


const Login = () => {
  const userRef = useRef();
  // const {isLoggedIn,setIsLoggedIn} = useLogin();
  const {logIn} = useContext(MultiStepContext)
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/landingpage";
  useEffect(()=>{
    userRef.current.focus();


  },[])

  const [email, setEmail] = useState();
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [password, setPassword] = useState();
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
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/.test(value) ||
        !value.length >= 8
        ? true
        : false
    );
  };

  const { currentUser, setCurrentUser } = useContext(MultiStepContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios
      .post(LOGIN_URL, {
        email,
        password,
      })
      .then((response) => {
        const res = {
          token:response.data.token,
          email:response.data.response[0].email,
          id:response.data.response[0].id,
          firstName:response.data.response[0].firstName,
          lastName:response.data.response[0].lastName,
          lastLogin:response.data.response[0].lastLogin,
          isVerified:response.data.response[0].isVerified,
          university:response.data.response[0].university,
          contact:response.data.response[0].contact,
          profileImage:response.data.response[0].profileImage


        };
        
        setCurrentUser(response.data);
        const token = response.data.token;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem('userData', JSON.stringify(res));
        setAuth({ email, password, token });
        navigate(from, { replace: true });
        // setIsLoggedIn(true)
        logIn(true);

      })
      .catch((error) => {
        console.log(error.response?.data);
      });
  };

  return (
    <Wrapper>
      <Container>
        <MainContainer
          className="container"
          style={{
            "@media (maxWidth: 575px)": {
              display: "flex",
              alignItems: "flex-start",
            },
          }} 
        >
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
            <RightContainer
              className="col-12 col-sm-6 right-container "
              style={{
                "@media (max-width: 575px)": {
                  boxShadow:"none"
                },
              }}
            >
              <div className="row" style={{ padding: "0 4.5rem" }}>
                <div className="col-12 text-center mb-4 mt-5">
                  <img className="img-fluid" src={cgLogo} alt="logo"/>
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
                style={{ width: "100%", padding: "0 1.21rem" }}
              >
                <div className="col-12">
                  <div className="container w-100 g-2">
                    <form onSubmit={handleSubmit}>
                      <div>
                        <label for="email" className="form-label">
                          Email ID <span style={{color:"#dd2727"}}><strong>*</strong></span>  
                        </label>
                        <input
                          type="email"
                          className={
                            !isEmailValid && email
                              ? "form-control input-error"
                              : "form-control"
                          }
                          value={email}
                          onChange={(e)=>{handleEmailChange(e)}}
                          ref={userRef}
                          placeholder="Enter Your Email ID"
                          required
                        />
                        {!isEmailValid && email && (
                          <span style={{ color: "red", fontSize: "12px" }}>
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
                          className="form-control"
                          value={password}
                          onChange={handlePasswordChange}
                          placeholder="Enter Password"
                          required
                        />

                        {!isPasswordValid && password && (
                          <span style={{ color: "red", fontSize: "12px" }}>
                            use minimum 6 digit , uppercase , lowercase , number
                            & symbol
                          </span>
                        )}
                      </div>

                      <button
                        className="btn btn-warning w-100 mt-3"
                        disabled={
                          (!isEmailValid && email) ||
                          (!isPasswordValid && password)
                        }
                      >
                        <p
                          style={{
                            fontWeight: "500",
                            fontFamily: "Lato",
                            marginBottom: "0",
                          }}
                        >
                          Login
                        </p>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div
                className="container text-center"
                style={{ marginTop: "5%" }}
              >
                <Link
                  to="/forgotpassword"
                  className="link-primary"
                  style={{ color: "#28519E", fontWeight: "500" }}
                >
                  Forgot Password?
                </Link>
              </div>
              <div
                className="container-fluid"
                style={{ padding: "0 2.5rem", marginTop: "2.25rem" ,marginBottom:"1rem" }}
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
                  <p
                    style={{
                      color: "#002C3F",
                      marginBottom: "0",
                      fontWeight: "600",
                    }}
                  >
                    First time user? Sign Up{" "}
                  </p>
                  <Link
                    to="/employeesignup"
                    className="link-primary login__link_tag"
                  >
                    CGI Employees
                  </Link>
                  <span style={{ color: "#28519E" }}> | </span>
                  <Link
                    to="/internsignup"
                    className="link-primary login__link_tag"
                  >
                    CGI Interns
                  </Link>
                </div>
              </div>
            </RightContainer>
          </div>
        </MainContainer>
      </Container>
    </Wrapper>
  );
};

export default Login;
