import React from "react";
import Notification from "../../images/notification.svg";

const NoNortification = () => {
  return (
    <div
      style={{ height: "100%" }}
      className="container d-flex justify-content-center align-items-center "
    >
      <div className=" row d-flex justify-content-center ">
        <div
          className="text-center align-middle align-items-center "
          style={{ width: "75%" }}
        >
          <img src={Notification} alt="logo"/>
          <p
            style={{
              color: "#343435",
              fontWeight: "700",
              fontSize: "1rem",
              lineHeight: "1.18rem",
              fontFamily: "Lato",
            }}
          >
            No Notifications Right Now!
          </p>
          <p>We'll notify you when something arrives.</p>
        </div>
      </div>
    </div>
  );
};

export default NoNortification;
