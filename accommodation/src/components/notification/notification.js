import React , { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import notification from "../../images/notificationIcon.svg"

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
            setNotificationData( response.data.response);
          });
      }

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
            </div>
            <div className="row">
                <h4>Notifications</h4>
            </div>
        </Container>
        </Wrapper>
        </>
    )
}

export default Notification;