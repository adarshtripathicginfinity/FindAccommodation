import React, { useState } from "react";
import filterLogo from "../../images/filter-logo.svg";
import SmallScreenFilterReq from "./smallScreenFilterReq";

const CheckboxFilterReq = (props) => {
  const [filteroption, setFilteroption] = useState([]);
  const [houseHabit1, setHouseHabit1] = useState([]);
  const [houseHabit2, setHouseHabit2] = useState([]);
  const [houseHabit3, setHouseHabit3] = useState([]);

  const handleFilter = (event) => {
    const val = event.target.value;
    if (filteroption.includes(val)) {
      setFilteroption(filteroption.filter((item) => item !== val));
      props.sendData(filteroption.filter((item) => item !== val));
    } else {
      setFilteroption([...filteroption, val]);
      props.sendData([...filteroption, val]);
    }
  };

  const handleHouseHabit1Filter1 = (event) => {
    const val = event.target.value;
    if (houseHabit1.includes(val)) {
      setHouseHabit1(houseHabit1.filter((item) => item !== val));
      props.sendHHData1(houseHabit1.filter((item) => item !== val));
    } else {
      setHouseHabit1([...houseHabit1, val]);
      props.sendHHData1([...houseHabit1, val]);
    }
  };
  const handleHouseHabit1Filter2 = (event) => {
    const val = event.target.value;
    if (houseHabit2.includes(val)) {
      setHouseHabit2(houseHabit2.filter((item) => item !== val));
      props.sendHHData2(houseHabit2.filter((item) => item !== val));
    } else {
      setHouseHabit2([...houseHabit2, val]);
      props.sendHHData2([...houseHabit2, val]);
    }
  };
  const handleHouseHabit1Filter3 = (event) => {
    const val = event.target.value;
    if (houseHabit3.includes(val)) {
      setHouseHabit3(houseHabit3.filter((item) => item !== val));
      props.sendHHData3(houseHabit3.filter((item) => item !== val));
    } else {
      setHouseHabit3([...houseHabit3, val]);
      props.sendHHData3([...houseHabit3, val]);
    }
  };


  const smFilter1 = (data) => {
    setFilteroption(data);
    props.sendData(filteroption);
   }
  
  

  return (
    <>
      <div className="col-sm-8 col-4 container d-flex justify-content-end align-items-center">
        <div className=" d-none d-md-flex">
          <img src={filterLogo} />
          <p
            style={{
              marginBottom: "0",
              marginLeft: "0.31rem",
              fontWeight: "600",
            }}
          >
            Filter:
          </p>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container-fluid d-flex gap-2">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight1"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="offcanvasRight"
              style={{ border: "none" }}
            >
              <div className="d-flex">
                <img src={filterLogo} />
                <p
                  style={{
                    marginBottom: "0",
                    marginLeft: "0.31rem",
                    fontWeight: "600",
                    color: "black",
                  }}
                >
                  Filter
                </p>
              </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <div class="btn-group">
                    <button
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #E9ECEB",
                      }}
                      class="btn btn-secondary btn-light btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select Accommodation Type
                    </button>
                    <ul class="dropdown-menu">
                      <div className="ps-2">
                        <li>
                          <div class="form-check mt-1 mb-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="pg"
                              id="flexCheckChecked"
                              checked={filteroption.includes("pg")}
                              onChange={handleFilter}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              PG
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check mt-1">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="flat"
                              id="flexCheckChecked"
                              checked={filteroption.includes("flat")}
                              onChange={handleFilter}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              Flat
                            </label>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>

                <li className="nav-item" style={{ marginLeft: "0.56rem" }}>
                  <div class="btn-group">
                    <button
                      class="btn btn-secondary btn-light btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #E9ECEB",
                      }}
                    >
                      House Habits
                    </button>
                    <ul class="dropdown-menu">
                      <div className="ps-2">
                        <li>
                          <div class="form-check mt-1 mb-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Non-smoker"
                              id="flexCheckChecked"
                              checked={houseHabit1.includes("Non-smoker")}
                              onChange={handleHouseHabit1Filter1}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              Non Smoker
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check mt-1 mb-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Non-drinker"
                              id="flexCheckChecked"
                              checked={houseHabit2.includes("Non-drinker")}
                              onChange={handleHouseHabit1Filter2}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              Non Drinker
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check mt-1">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="Veg"
                              id="flexCheckChecked"
                              checked={houseHabit3.includes("Veg")}
                              onChange={handleHouseHabit1Filter3}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              Vegetarian
                            </label>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <SmallScreenFilterReq 
         smsendData={smFilter1}
      />
    </>
  );
};

export default CheckboxFilterReq;
