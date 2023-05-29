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
            <div className="row">    
                <nav aria-label="breadcrumb" style={{marginTop:'1.1rem'}}>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item d-none d-md-flex">
                    <Link
                        to="/landingpage"
                        style={{ textDecoration: "none", marginBottom: "0rem" }}
                    >
                        Home
                    </Link>
                    </li>
                    <li class="breadcrumb-item d-flex d-md-none">
                    <Link
                        to="/landingpage"
                        style={{ textDecoration: "none", marginBottom: "0rem" }}
                    >
                        <img src={Arraow}/>
                    </Link>
                    </li>
                    <li
                    class="breadcrumb-item active"
                    aria-current="page"
                    style={{ width: "84%" }}
                    >
                    <div className="heading-sm-src">
                        {activeBtn === true ? (
                        <p
                            className="text-md-secondary heading-sm-p"
                            style={{ marginBottom: "0.5rem" }}
                        >
                            Available Accomodation
                        </p>
                        ) : (
                        <p
                            className="text-md-secondary heading-sm-p"
                            style={{ marginBottom: "0.5rem" }}
                        >
                            
                        </p>
                        )}
                    </div>
                    </li>
                </ol>
                </nav>
            </div>
            </Container>
        </Wrapper>
        </>
    )
}

export default InterestSent;