import React, { useContext } from "react";
import {
  Wrapper,
  Container,
  MainContainer,
} from "../utilityStyles/utilityStyles";
import GreenThumb from "../../images/Green-ThumbsUp.svg";
import "./postSuccessful.css";
import { useNavigate } from "react-router-dom";
import { MultiStepContext } from "../stepContext/stepContext";

const PostSuccessful = () => {
  const {requirementData,setRequirementData,setReqCurrentIndex,setGreenTickReq} = useContext(MultiStepContext);
  setRequirementData({locality:"",contact:"",relocationDate:"",accTypeId:"",flatTypeId:"",
  furnishedtypeId:"",isNonVeg:false,isSmoking:false,isDrinking:false})
  setReqCurrentIndex(1);
  setGreenTickReq(0);
  const navigate = useNavigate();
  function handleHome(event){
    event.preventDefault();
    navigate(`/landingpage`);

  }
  function handleReq(event){
    event.preventDefault();
    navigate(`/requirementform`);

  }
  return (
    <>
      <Wrapper>
        <Container>
          <MainContainer className="container ">
            <div
              className="container justify-content-center text-center changedPassword__maincontainer"
              style={{ width: "65%", padding: "2.5rem" }}
            >
              <div className="">
                <img src={GreenThumb} alt="logo"/>
                <p
                  className="changedPassword__heading"
                  style={{ marginTop: "1.6rem", marginBottom: "0" }}
                >
                  Thank You for posting requirement!
                </p>
                <div
                  className=" d-flex flex-direction-row changedPassword__alertbox"
                  style={{ marginTop: "1.5rem"}}
                >
                  <p
                    className="changedPassword__alertbox-p"
                    style={{ margin: "0.6rem" }}
                  >
                    Your participation is greatly appreciated. As for now your
                    details has been successfully registered.
                  </p>
                </div>

                <div className="d-flex nspace mb-4">
                  <div className="col-6 " >
                    <button
                      className="btn w-100 mt-3"
                      style={{ fontWeight: "600" , borderColor:'black' }}
                      onClick={(e)=>{handleHome(e)}}
                    >
                      Go to Home
                    </button>
                  </div>

                  <div className="col-6" style={{marginLeft:'0.5rem'}}>
                    <button
                      className="btn btn-warning w-100 mt-3"
                      style={{ fontWeight: "600"}}
                      onClick={(e)=>{handleReq(e)}}
                    >
                      Post Requirement  
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </MainContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default PostSuccessful;
