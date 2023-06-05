import React from "react";
import Nodata from "../../images/nodatalogo.svg";

const NoDataaPage = () => {
  return (
    <>
      <div style={{height:"100%"}}
        className="container d-flex justify-content-center align-items-center " >
        <div className=" row d-flex justify-content-center ">
          <div className="text-center align-middle align-items-center " style={{width:'75%'}}>
            <img src={Nodata} alt="nodata"/>
            <p
              style={{
                color: "#343435",
                fontWeight: "700",
                fontSize: "1rem",
                lineHeight: "1.18rem",
                fontFamily: "Lato",
              }}
            >
              No nearby accommodation right now!
            </p>
            <p>
              Take your time to find the perfect accommodation your ideal space
              is just a few clicks away.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoDataaPage;
