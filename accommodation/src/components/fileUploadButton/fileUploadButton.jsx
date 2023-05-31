import React, { useContext, useRef } from 'react';
import { useState } from 'react';
import camera from "../../images/camera.svg";
import { storage } from "../../config/firebase";
import {ref,uploadBytes,getDownloadURL} from "firebase/storage";
import { MultiStepContext } from "../stepContext/stepContext";

function FileUploadButton(props) {

    const fileInputRef = useRef(null);
    // const [profilePicUrl, setProfilePicUrl] = useState();


    const {userData,setUserData}=useContext(MultiStepContext);
    const {requirementData, setRequirementData} = useContext(MultiStepContext);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Do something with the selected file
    console.log(file);
  };

  const handleImageUpload = (data) => {
    console.log("Uploading Image......");
    console.log(data);
    if (data == null) {
      console.log("not able to upload it");
      return;
    }

    const imageRef = ref(storage, `userProfilePicture/${data.target.files[0].name}`);
    console.log("Trying to upload it");
    uploadBytes(imageRef, data.target.files[0]).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {

        console.log("I am here with url",url);
        console.log(url);
        props.file === "Volunteer" ? setUserData({...userData, profileUrl:url}) : setRequirementData({...requirementData, profileUrl:url});
      });
    });
  };
  return (
    <div>
      <button onClick={handleButtonClick} className='d-flex imgButn' style={{margin:"2%"}}>
      <img style={{marginTop:"2%", marginRight:"5%"}} src={camera} />
        {props.type === "Change" ? <p>Change Image</p> : <p>Choose Image</p>}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e)=>handleImageUpload(e)}
      />
    </div>
  );
}

export default FileUploadButton;