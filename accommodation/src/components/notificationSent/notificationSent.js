import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import notification from "../../images/notificationIcon.svg"

const NotificationSent = (props) => {
    const NOTIFICATIONS_URL = "/notificationSent";
    const userData = JSON.parse(localStorage.getItem("userData"));
    const [notificationsData, setNotificationsData] = useState([]);

    useEffect(() => {
        handleNotifications();
      }, []);
    
      async function handleNotifications() {
        await axios
          .get(NOTIFICATIONS_URL, { params: { userId: userData.id } })
          .then((response) => {
             setNotificationsData( response.data);
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

export default NotificationSent;