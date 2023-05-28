import React, { useState } from "react";
import "./availableAccommodations.css";
import gps from "../../images/GPS.svg";
import office from "../../images/office.svg";
import metro from "../../images/Metrotransit.svg";
import greencheck from "../../images/Check-outlinegreen check.svg";
import userphoto from "../../images/userphoto.svg";
import allowed from "../../images/allowed.svg";
import not_allowed from "../../images/Not Allowed.svg";
import clock from "../../images/clock.svg";
import owner_name from "../../images/owner name.svg";
import call from "../../images/call.svg";


const OffcanvusAvailableAccommodation = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header d-flex justify-content-end mb-0">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body" style={{padding:'0'}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col 12">
                <div>
                  <div className="row justify-content-center" style={{marginBottom:"1rem"}}>
                        <img src={userphoto} style={{width:'9.37rem' , height:'9.37rem'}}/>
                        <p style={{marginBottom:'0'}}>{/* {data.fullName} */}</p>
                        <p style={{marginBottom:'0'}}>{/* {data.CGIID} */}</p>
                  </div>
                  <div className="row" style={{marginBottom:'0.5rem'}}>
                    <div>
                      <p style={{fontWeight:'700',marginBottom:'0'}}>
                        Landmark:
                        {/* {data.sector} */}
                      </p>
                    </div>
                  </div>
                  <div className="row" style={{marginBottom:'0.5rem'}}>
                    <div className="d-flex">
                      <img src={gps} alt="" />
                      <p style={{marginBottom:'0',marginLeft:'0.25rem' ,color:"#007FD3" , fontWeight:'700'}}>View on Map</p>
                    </div>
                  </div>
                  <div className="row" style={{marginBottom:'1.5rem'}}>
                    <div className="d-flex">
                      <div className="nearby-location" style={{marginTop:'0.5rem',marginBottom:'0.5rem'}}>
                        <div className="d-flex justify-content-center" style={{marginBottom:'0.5rem'}}>
                          <img src={office} alt="" />
                        </div>
                        <div className="d-flex justify-content-center" style={{marginBottom:'0.5rem'}}>
                          <p className="text" style={{marginBottom:'0'}}>
                            {/* {data.distance}  */}
                            kms from Sector-3 office
                          </p>
                        </div>
                      </div>
                      <div className="nearby-location" style={{marginTop:'0.5rem',marginBottom:'0.5rem',marginLeft:'1rem'}}>
                        <div className="d-flex justify-content-center">
                          <img src={metro} alt="" />
                        </div>
                        <div className="d-flex justify-content-center">
                          <p className="text" style={{marginBottom:'0'}}>
                            Nearest metro {/* {data.nearestMetro} */}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginBottom:'1.5rem'}}>
                    <div className="d-flex">
                      <img src={greencheck} alt=""  style={{marginRight:'0.5rem'}}/>
                      <p  style={{marginBottom:'0', color:'#14A450', fontWeight:'500'}}>I'm looking for a room-mate</p>
                    </div>
                  </div>
                  <div className="row " style={{marginBottom:'1.5rem'}}>
                    <div>
                      <p style={{fontWeight:'700',marginBottom:'0.5rem'}}>Accommodation Type</p>
                      <p style={{marginBottom:'0'}}>
                        {/* {data.accommodationType}  */}|{" "}
                        {/* {data.flatType}  */}|{/* {data.furnishedType} */}
                      </p>
                    </div>
                  </div>
                  <div className="row " style={{marginBottom:'1.5rem'}}>
                    <div className="amenities-text">
                      <p style={{fontWeight:'700',marginBottom:'0.5rem'}}>Amenities</p>
                    </div>
                    <div className="d-flex" style={{marginBottom:"0.25rem"}}>
                      <div className="d-flex justify-content-center amenities" style={{padding:'0.5rem', marginRight:'1rem'}}>
                        <img src={allowed} alt="" style={{marginRight:'0.25rem'}}/>
                        <p style={{marginBottom:'0'}}>WiFi</p>
                      </div>
                      <div className="d-flex justify-content-center amenities" style={{padding:'0.5rem', marginRight:'1rem'}}>
                        <img src={allowed} alt="" style={{marginRight:'0.25rem'}}/>
                        <p style={{marginBottom:'0'}}>Food</p>
                      </div>
                      <div className="d-flex justify-content-center amenities" style={{padding:'0.5rem', marginRight:'1rem'}}>
                        <img src={allowed} alt="" style={{marginRight:'0.25rem'}}/>
                        <p style={{marginBottom:'0'}}>Kitchen</p>
                      </div>
                    </div>
                    <div className="d-flex" style={{marginTop:"0.5rem"}}>
                      <div className="d-flex justify-content-center amenities " style={{padding:'0.5rem', marginRight:'1rem'}}>
                        <img src={allowed} alt="" style={{marginRight:'0.25rem'}}/>
                        <p style={{marginBottom:'0'}}>Washing Machine</p>
                      </div>
                      <div className="d-flex justify-content-center amenities " style={{padding:'0.5rem', marginRight:'1rem'}}>
                        <img src={allowed} alt="" style={{marginRight:'0.25rem'}}/>
                        <p style={{marginBottom:'0'}}>Induction</p>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginBottom:'1.5rem'}}>
                    <div className="habits-text">
                      <p style={{marginBottom:'0.5rem',fontWeight:'700'}}>House Habits</p>
                    </div>

                    <div className="d-flex">

                      <div className="d-flex col-4 habits " style={{padding:'0.5rem', marginRight:'0.5rem'}}>
                        <img src={not_allowed} alt="" style={{marginRight:'0.25rem'}} />
                        <p style={{marginBottom:'0'}}>Non veg</p>
                      </div>

                      <div className="d-flex col-4 habits" style={{padding:'0.5rem', marginRight:'0.5rem'}}>
                        <img src={not_allowed} alt="" style={{marginRight:'0.25rem'}}/>
                        <p
                          style={{
                            marginBottom: "0.0rem",
                            marginRight: "0.25rem",
                          }}
                        >
                          Smoking
                        </p>
                      </div>

                      <div className="d-flex col-4 habits" style={{padding:'0.5rem', marginRight:'0.5rem'}}>
                          <img src={allowed} alt="" style={{marginRight:'0.25rem'}}/>                        
                        <p style={{marginBottom:'0'}}>Drinking</p>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{marginBottom:'1.5rem'}}>
                    <div>
                      <p style={{fontWeight:'700',marginBottom:'0.5rem'}}>Preferred Time to Contact</p>
                    </div>
                    <div className="d-flex">
                      <div className="d-flex justify-content-center amenities " style={{padding:'0.5rem', marginRight:'1rem'}}>
                        <img src={allowed} alt="" style={{marginRight:'0.25rem'}}/>
                        <p style={{marginBottom:'0'}}>Weekend</p>
                      </div>
                      <div className="d-flex justify-content-center amenities " style={{padding:'0.5rem', marginRight:'1rem'}}>
                        <img src={clock} alt="" style={{marginRight:'0.25rem'}} />
                        <p style={{marginBottom:'0'}}>11:00 AM - 04:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{marginBottom:'1.5rem'}}>
                    <div>
                      <p style={{fontWeight:'700',marginBottom:'0.5rem'}}>Owner Information</p>
                    </div>
                    <div style={{marginTop:"0.25rem"}}>
                      <div className="d-flex" style={{marginBottom:"1rem"}}>
                        <img src={owner_name} alt="" style={{marginLeft:'0.25rem'}} />
                        <p style={{marginLeft:"0.5rem",marginBottom:'0'}}>John Doe</p>
                      </div>
                      <div className="d-flex">
                        <img src={call} alt="" style={{marginLeft:'0.25rem'}} />
                        <p style={{marginLeft:"0.5rem",marginBottom:'0'}}>9876543210</p>
                      </div>
                    </div>
                  </div>
                  <div className="row " style={{marginTop:"0.25rem"}}>
                    <div>
                      <button
                        type="button"
                        className="w-100 border-0 justify-content-center interested"
                      >
                        I'm interested
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffcanvusAvailableAccommodation;
