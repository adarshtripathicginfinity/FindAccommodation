import React, { useContext, useState } from "react";
import { FormContainer, Header, Body } from "../../utilityStyles/utilityStyles";
import Alert from "../../../images/alert.svg";
import "./reqStep3.css";
import { MultiStepContext } from "../../stepContext/stepContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const ReqStep3 = () => {
  const userData = localStorage.getItem("userData")
  
  const [data,setData] = useState(JSON.parse(userData));
  const [userId,setuserId] = useState(data.id);
  const navigate = useNavigate();
  const { reqPrevious, requirementData, setRequirementData ,setReqCurrentIndex} =
    useContext(MultiStepContext);
    
  function handleReqForm(event) {


    axios
      .post("https://cg-accommodation.azurewebsites.net/requirement", {
        requirementData,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/postSuccess");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  return (
    <FormContainer>
      <Header>
        <p
          style={{
            margin: "0",
            marginBottom: "0.25rem",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "19px",

            color: "#626262",
          }}
        >
          Step 3
        </p>
        <p
          style={{
            margin: "0",
            marginBottom: "0.25rem",
            fontFamily: "Lato",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "24px",
          }}
        >
          Incentives <i>(Optional)</i>
        </p>
        <hr style={{ margin: "0" }} />
      </Header>
      <Body>
        <p className="reqStep3__form-h">
          Are you willing to offer an incentive to your accommodation finder?
        </p>

        <div className="form-group" style={{ marginTop: "1.5rem" }}>
          <label for="incentiveAmount">
            If yes, please enter your preferred amount.
          </label>
          <input
            id="incentiveAmount"
            className="form-control"
            style={{ marginTop: "0.375rem" }}
            value={requirementData["incentives"]}
            onChange={(event) => {
              setRequirementData({...requirementData,incentives:event.target.value})
            }}
          />
        </div>
        <div
          className="container-fluid d-flex flex-row justify-content-center"
          style={{
            marginTop: "1.25rem",
            backgroundColor: "#E3F3FC",
            padding: "0",
          }}
        >
          <img src={Alert} style={{ margin: "1.125rem  0.75rem" }} alt="logo"/>
          <p
            className="reqStep3__blue-p "
            style={{ margin: "0.5rem 0.75rem 0.5rem 0" }}
          >
            The amount should be between 500 to 2.5K and only be provided after
            a successful referral.
          </p>
        </div>

        <div className="row " style={{ marginTop: "8%", padding: "0" }}>
          <div className="col-6">
            <button
              className="reqStep2__btn-pre"
              type="button"
              onClick={reqPrevious}
              style={{ width: "100%" }}
            >
              <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                Previous
              </p>
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="reqStep2__btn-next"
              style={{ width: "100%" }}
            >
              <p
                className="reqStep__btn-p "
                style={{ margin: "5% 0" }}
                onClick={()=>{ 
                  setRequirementData({...requirementData,id:userId});
                handleReqForm();
                }}
              >
                Save
              </p>
            </button>
          </div>
        </div>
      </Body>
    </FormContainer>
  );
};

export default ReqStep3;
