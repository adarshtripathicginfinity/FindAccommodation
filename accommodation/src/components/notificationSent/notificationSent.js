import React from "react";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import { Link } from "react-router-dom";
import Arraow from '../../images/arrow_forward.svg'

const NotificationSent = (props) => {

    const [activeBtn, setActiveBtn] = useState(props.activebtn);

    return (
        <>
        <Navbar />
        <Wrapper>
            <Container className="main-wrapper">
                        
            </Container>
        </Wrapper>
        </>
    )
}

export default NotificationSent;