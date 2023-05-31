import React , { useState } from 'react'
import FileUploadButton from '../../fileUploadButton/fileUploadButton';
import dummyProfile from "../../../images/dummyProfile.svg";
import "./profile.css"


const Profile = () => {
  const [userInfo, setUserInfo] = useState(JSON.parse( localStorage.getItem("userData")));
  const [contact,setContact] = useState("")
  const [id, setId] = useState();

  const [contactNumber, setContactNumber] = useState();
  const [isContactNumberValid, setIsContactNumberValid] = useState(false);
  console.log(userInfo)
  return (
    <div className='container-fluid' style={{marginTop:"1.125rem",marginLeft:"1.25rem",marginRight:"4rem"}}>
         <div className="row ">
         <p className='profile__heading'>Your Profile</p>
                  <div className=" col-md-3">
                    <img src={userInfo?.profileUrl || dummyProfile} alt="profile" id="profilePic" />
                  </div>

                <div className=" col-md-5" style={{}}>
                
                  <p className="p_color" style={{ marginBottom: "0" }}>
                    <strong>{userInfo.firstName} {userInfo.lastName}  </strong>
                    <p> {userInfo.email}</p>
                  </p>
                  
                    <FileUploadButton file="Volunteer" />              
                </div>
              </div>

              <div className="row" style={{ marginTop: "2rem" }}>
                <div className="col">
                  <p className="p_color" style={{ marginBottom: "0.375rem" }}>
                    CGI ID
                  </p>
                  <input
                    type="text"
                    placeholder="Enter your CGI ID"
                    className="form-control"
                    value={userInfo.id}
                    readOnly 
                    
                  />

                 
                </div>
              </div>

              <div className="row" style={{ marginTop: "1.5rem" }}>
                <div className="col">
                  <p className="p_color" style={{ marginBottom: "0.375rem" }}>
                    Contact No.
                  </p>
                  <input
                    type="tel"
                    placeholder="****"
                    className={
                      !isContactNumberValid && contactNumber
                        ? "form-control input-error"
                        : "form-control"
                    }
                    value={contact["contact"]}
                    onChange={(e) => setContact({...contact,contact: e.target.value})}
                  />
                  {!isContactNumberValid && contactNumber && (
                    <span style={{ color: "red", fontSize: "12px" }}>
                      Contact Number is not valid
                    </span>
                  )}
                </div>
              </div>

    </div>
  )
}

export default Profile