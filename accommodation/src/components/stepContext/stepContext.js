import React, { useState } from "react";
import App from "../../App";
import VolunteerStepInfo from "../volunteerMultiStepForm/volunteerStepInfo/volunteerStepInfo";
import RequirementStepInfo from "../requirementMultiStepForm/requirementStepInfo/reqirementStepInfo";

export const MultiStepContext = React.createContext();

const StepContext = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [reqCurrentIndex, setReqCurrentIndex] = useState(1);
  const [greenTickVol, setGreenTickVol] = useState(0);
  const [greenTickReq, setGreenTickReq] = useState(0);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [requirementData, setRequirementData] = useState([{ accTypeId: 1 }]);
  const [availableAccommodations, setAvailableAccommodations] = useState([]);

  
 
  let user = "gurnoor";

  function previous() {
    if (currentIndex > 0) {
      setCurrentIndex((currentIndex) => currentIndex - 1);
      setGreenTickVol((greenTick) => greenTick - 1);
    } else {
      return currentIndex;
    }
  }
  
  function next() {
    console.log("I am the next func")
    if (currentIndex < VolunteerStepInfo.length) {
      
      setCurrentIndex((currentIndex) => currentIndex + 1);
      setGreenTickVol((greenTick) => greenTick + 1);
   

    } else {
      return currentIndex;
    }
  }

  function submitForm() {
    console.log(userData);
  }

  function reqPrevious() {
    if (reqCurrentIndex > 0) {
      setReqCurrentIndex((reqCurrentIndex) => reqCurrentIndex - 1);
      setGreenTickReq((greenTick) => greenTick - 1);
    } else {
      return reqCurrentIndex;
    }
  }
  function reqNext() {
    if (reqCurrentIndex < RequirementStepInfo.length) {
      setReqCurrentIndex((reqCurrentIndex) => reqCurrentIndex + 1);
      setGreenTickReq((greenTick) => greenTick + 1);
    } else {
      return reqCurrentIndex;
    }
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInfoData = localStorage.getItem("userData");
  const [data, setData] = useState(JSON.parse(userInfoData));
  console.log(data?.email)
  function logIn (val){
    // data?.email ?  setIsLoggedIn(true) : setIsLoggedIn(false)
    // console.log(isLoggedIn)
    setIsLoggedIn(true);
    // console.log("isLoggedIn value is changing to ", isLoggedIn);
 
  }

  return (
    <MultiStepContext.Provider
      value={{
        setReqCurrentIndex,
        currentIndex,
        reqCurrentIndex,
        setCurrentIndex,
        reqNext,
        reqPrevious,
        previous,
        next,
        userData,
        setUserData,
        finalData,
        setFinalData,
        submitForm,
        greenTickVol,
        greenTickReq,
        setCurrentUser,
        currentUser,
        user,
        requirementData,
        setRequirementData,
        availableAccommodations,
        setAvailableAccommodations,
        setGreenTickVol,
        setGreenTickReq,
        isLoggedIn,
        setIsLoggedIn,
        logIn



      }}
    >
      {children}
    </MultiStepContext.Provider>
  );
};

export default StepContext;
