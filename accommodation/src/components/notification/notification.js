import React , { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import notification from "../../images/notificationIcon.svg"
import female from "../../images/female.svg"

const Notification = (props) => {
    const NOTIFICATION_URL = "/notification";

    const [acceptedNotifications, setAcceptedNotifications] = useState([]);
    const [unAcceptedNotifications, setUnAcceptedNotifications] = useState([]);
    const [notificationData, setNotificationData] = useState([]);

    const userData = localStorage.getItem("userData");

    const [data, setData] = useState(JSON.parse(userData));

  async function handleNotifications() {
    await axios
      .get(NOTIFICATION_URL, { params: { userId: data.id } })
      .then((response) => {
        setAcceptedNotifications(response.data.acceptedRequest);
        setUnAcceptedNotifications(response.data.unAcceptedRequest);
      });
  }
  
  const currentTime = new Date();

function merge() {
    const mergedNotifications = [...acceptedNotifications, ...unAcceptedNotifications];
    mergedNotifications.sort((a, b) => {
      return b.createdate - a.createdate;
    });
    setNotificationData(mergedNotifications);
  }

    useEffect(() => {
        handleNotifications();
        merge();
      }, [acceptedNotifications, unAcceptedNotifications]);
    

      {console.log(notificationData);}
      {console.log(acceptedNotifications);}
      {console.log(unAcceptedNotifications);}

    return (
        <>
        <Navbar />
        <Wrapper>
        <Container>
            <div className="container-fluid">
                <div className="row" style={{marginTop: "1%"}}>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <Link 
                                    to="/landingpage">
                                    Home
                                </Link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Notifications
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <h4>Notifications</h4>
                </div>
                <div className="row-cols-2 row" style={{marginTop: "1%"}}>
                {notificationData.map((data) => (
                    <div
                      key={data.id}
                      style={{ marginBottom: "1rem" }}
                    >
                    { data.isrequestaccepted ? 
                    <div className="container-fluid notification_accepted_container" style={{padding:"0.75rem 0.75rem 1rem 1rem"}}>
                      <div className="row">
                        <div className="col-1">
                          <img src={data.profileimage} width="40px" height="40px" style={{borderRadius: "50%"}}/>
                        </div>
                        <div className="col">
                          <div>
                            <strong>{data.firstname} {data.lastname}</strong> has accepted your accommodation request. You can now
                            connect with him on his.
                          </div>
                          <div>Email ID: <span style={{color: "#007FD3"}}><strong>{data.email}</strong></span></div>
                          <div>Contact: <span style={{color: "#007FD3"}}><strong>{data.contact}</strong></span></div>
                          <div>{}</div>
                        </div>
                      </div>
                    </div> 
                      : 
                      <div>
                        <div className="container-fluid notification_unaccepted_container" style={{padding:"0.75rem 0.75rem 1rem 1rem"}}>
                        <div className="row">
                          <div className="col-1">
                            <img src={data.profileimage} width="40px" height="40px" style={{borderRadius: "50%"}}/>
                          </div>
                          <div className="col">
                            <div>
                              <strong>{data.firstname} {data.lastname}</strong> has express interest on your
                              accommodation posting
                            </div>
                            <div><span style={{color: "#007FD3"}}><strong>Show Message</strong></span></div>
                          </div>
                        </div>
                      </div>
                  </div>
                  }
                </div>
                ))}
                </div>
            </div>
        </Container>
        </Wrapper>
        </>
    )
}

export default Notification;