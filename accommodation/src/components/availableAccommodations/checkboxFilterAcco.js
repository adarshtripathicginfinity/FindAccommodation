import React, { useState } from "react";
import filterLogo from "../../images/filter-logo.svg";
import SmallScreenFilterAcco from "./smallScreenFilterAcco";

const CheckboxFilterAcco = (props) => {
  const [filteroption, setFilteroption] = useState([]);
  const [smfilteroption, smsetFilteroption] = useState([]);
  const [houseHabit1, setHouseHabit1] = useState([]);
  const [houseHabit2, setHouseHabit2] = useState([]);
  const [houseHabit3, setHouseHabit3] = useState([]);
  const [selectedDistances1, setSelectedDistances1] = useState("");
  const [selectedDistances2, setSelectedDistances2] = useState("");
  const [selectedDistances3, setSelectedDistances3] = useState("");
  const [selectedDistances4, setSelectedDistances4] = useState("");

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
      setHouseHabit2(...houseHabit2 , val);
      props.sendHHData2(...houseHabit2 , val);
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

  const handleDistanceChange1 = (e) => {
    const value = e.target.value;
    if (selectedDistances1.includes(value)) {
      setSelectedDistances1(
        selectedDistances1.filter((item) => item !== value)
      );
      props.Distances1(selectedDistances1.filter((item) => item !== value));
    } else {
      setSelectedDistances1([...selectedDistances1, value]);
      props.Distances1([...selectedDistances1, value]);
    }
  };

  const handleDistanceChange2 = (e) => {
    const value = e.target.value;
    if (selectedDistances2.includes(value)) {
      setSelectedDistances2(
        selectedDistances2.filter((item) => item !== value)
      );
      props.Distances2(selectedDistances2.filter((item) => item !== value));
    } else {
      setSelectedDistances2([...selectedDistances2, value]);
      props.Distances2([...selectedDistances2, value]);
    }
  };

  const handleDistanceChange3 = (e) => {
    const value = e.target.value;
    if (selectedDistances3.includes(value)) {
      setSelectedDistances3(
        selectedDistances3.filter((item) => item !== value)
      );
      props.Distances3(selectedDistances3.filter((item) => item !== value));
    } else {
      setSelectedDistances3([...selectedDistances3, value]);
      props.Distances3([...selectedDistances3, value]);
    }
  };

  const handleDistanceChange4 = (e) => {
    const value = e.target.value;
    if (selectedDistances4.includes(value)) {
      setSelectedDistances4(
        selectedDistances4.filter((item) => item !== value)
      );
      props.Distances4(selectedDistances4.filter((item) => item !== value));
    } else {
      setSelectedDistances4([...selectedDistances4, value]);
      props.Distances4([...selectedDistances4, value]);
    }
  };



 const smFilter1 = (data) => {
  smsetFilteroption(data);
  props.sendData(smfilteroption);
 }





  return (
    <>
      <div className="col-sm-8 col-4 container d-flex justify-content-end align-items-center" style={{paddingRight:'0'}}>
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
          <div class="container d-flex">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight1"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="offcanvasRight"
              style={{border:'none'}}
            >
              <div className="d-flex">
                <img src={filterLogo} />
                <p
                  style={{
                    marginBottom: "0",
                    marginLeft: "0.31rem",
                    fontWeight: "600",
                    color:'black'
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

                <li class="nav-item mx-3">
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
                      Select Distance
                    </button>
                    <ul class="dropdown-menu">
                      <div className="ps-2">
                        <li className="">
                          <div class="form-check mb-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="0-2"
                              checked={selectedDistances1.includes("0-2")}
                              onChange={handleDistanceChange1}
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              0km to 2km
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check mt-1 mb-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="2-5"
                              checked={selectedDistances2.includes("2-5")}
                              onChange={handleDistanceChange2}
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              2km to 5km
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check mt-1 mb-3">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="5-8"
                              checked={selectedDistances3.includes("5-8")}
                              onChange={handleDistanceChange3}
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              5km to 8km
                            </label>
                          </div>
                        </li>
                        <li>
                          <div class="form-check mt-1">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value="8-10"
                              checked={selectedDistances4.includes("8-10")}
                              onChange={handleDistanceChange4}
                              id="flexCheckChecked"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckChecked"
                            >
                              8km to 10km
                            </label>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
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
                              
                              id="flexCheckChecked"
                              value=''
                              checked={houseHabit1.includes('')}
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
                              value=''
                              id="flexCheckChecked"
                              checked={houseHabit2.includes('')}
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
                              value=''
                              id="flexCheckChecked"
                              checked={houseHabit3.includes('')}
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
          <SmallScreenFilterAcco 
                smsendData={smFilter1}
                // sendHHData1={smFilter2}
                // sendHHData2={smFilter13}
                // sendHHData3={smFilter4}
          />
        </nav>
      </div>
    </>
  );
};

export default CheckboxFilterAcco;
