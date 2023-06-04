import React from "react";
import female from "../../images/female.svg"
import "./notification.css"
import { Link } from "react-router-dom";

const Notification = () => {
  return (
    <>
      <div className="container-fluid notification-container" style={{padding:"0.75rem 0.75rem 1rem 1rem"}}>
        <div className="row">
          <div className="col-2">
            <img src={female} />
          </div>
          <div className="col">
            <p>
              <strong>Harshit Khurana</strong> has express interest on your
              accommodation posting
            </p>
            <Link className="notification__a-p " style={{color:"#007FD3"}} data-bs-toggle="modal"
                          data-bs-target= '#exampleModal'>Show message</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
