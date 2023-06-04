import React , { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import notification from "../../images/notificationIcon.svg"
import female from "../../images/female.svg"

const Notification = (props) => {
    const NOTIFICATION_URL = "/notification";
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [notificationData, setNotificationData] = useState([]);

    useEffect(() => {
        handleNotifications();
        console.log(notificationData)
      }, []);
    
      async function handleNotifications() {
        await axios
          .get(NOTIFICATION_URL, { params: { userId: userData.id } })
          .then((response) => {
            setNotificationData(response.data.response);
          });
      }
      {console.log(notificationData);}
      {console.log(userData);}
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
                <div className="row-cols-2 row">
                {notificationData.map((data) => (
                    <div key={data.id}
                    className="col notification__container"
                    style={{ marginBottom: "1rem" }}
                    >
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
                            <a className="notification__a-p " style={{color:"#007FD3"}}>Show message</a>
                            </div>
                        </div>
                        </div>
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