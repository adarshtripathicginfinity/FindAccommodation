import React from "react";
import { useState } from "react";
import Navbar from "../navbar/navbar";
import { Wrapper, Container } from "../utilityStyles/utilityStyles";
import { Link } from "react-router-dom";
import Arraow from '../../images/arrow_forward.svg'

const InterestSent = (props) => {

    const [activeBtn, setActiveBtn] = useState(props.activebtn);

    return (
        <>
        <Navbar />
        <Wrapper>
            <Container className="main-wrapper">
            <div style={{margin:"3%"}}>    
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
            </Container>
        </Wrapper>
        </>
    )
}

export default InterestSent;