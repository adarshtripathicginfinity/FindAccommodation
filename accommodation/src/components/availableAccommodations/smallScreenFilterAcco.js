import {React,useState} from "react";

const SmallScreenFilterAcco = (props) => {

    const [filteroption, setFilteroption] = useState([]);
    const [houseHabit1, setHouseHabit1] = useState([]);
    const [houseHabit2, setHouseHabit2] = useState([]);
    const [houseHabit3, setHouseHabit3] = useState([]);
  
    const handleFilter = (event) => {
      const val = event.target.value;
      if (filteroption.includes(val)) {
        setFilteroption(filteroption.filter((item) => item !== val));
      } else {
        setFilteroption([...filteroption, val]);
      }
    };
  
    const handleHouseHabit1Filter1 = (event) => {
      const val = event.target;
      if (houseHabit1.includes(val)) {
        setHouseHabit1(houseHabit1.filter((item) => item !== val));
      } else {
        setHouseHabit1([...houseHabit1, val]);
      }
    };

    const handleHouseHabit1Filter2 = (event) => {
      const val = event.target.value;
      if (houseHabit2.includes(val)) {
        setHouseHabit2(houseHabit2.filter((item) => item !== val));
      } else {
        setHouseHabit2([...houseHabit2, val]);
      }
    };

    const handleHouseHabit1Filter3 = (event) => {
      const val = event.target.value;
      if (houseHabit3.includes(val)) {
        setHouseHabit3(houseHabit3.filter((item) => item !== val));
      } else {
        setHouseHabit3([...houseHabit3, val]);
      }
    };

    const applySubmit = () => {
        props.smsendData(filteroption);
        // props.smsendHHData1(houseHabit1);
        // props.smsendHHData2(houseHabit2);
        // props.smsendHHData3(houseHabit3);
    }

    const resetSubmit = () => {
      setFilteroption([]);
      // setHouseHabit1([]);
      // setHouseHabit2([]);
      // setHouseHabit3([]);
      props.smsendData(filteroption);
      // props.smsendHHData1(houseHabit1);
      // props.smsendHHData2(houseHabit2);
      // props.smsendHHData3(houseHabit3);
  }


  return (
    <>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Filters</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <form>
            <div className="container">
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginBottom: "1rem 0 1.15rem 0",
                }}
              >
                Select Accommodation Type
              </p>
              <div class="form-check">
                <input class="form-check-input border border-primary" 
                type="checkbox" 
                value="pg" 
                id="flexCheckChecked" 
                checked={filteroption.includes("pg")} 
                onChange={handleFilter}

                // class="form-check-input"
                // type="checkbox"
                // value="pg"
                // id="flexCheckChecked"
                // checked={filteroption.includes("pg")}
                // onChange={handleFilter}
                
                />
                <label class="form-check-label" for="flexCheckDefault">
                  PG
                </label>
              </div>

              
              <div class="form-check">
                <input class="form-check-input border border-primary" 
                        type="checkbox" 
                        id="flexCheckChecked" 
                        value="flat"
                        checked={filteroption.includes("flat")}  
                        onChange={handleFilter}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  FLAT
                </label>
              </div>

              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  margin: "1.5rem 0 1.15rem 0",
                }}
              >
                Select Distance
              </p>
              <input
                type="range"
                class="form-range"
                min="0"
                max="10"
                id="customRange3"
                value='0'
              ></input>
              <div className="d-flex  justify-content-between">
                <p style={{ color: "#8E8E92"  }}>0km</p>
                <p style={{ color: "#8E8E92" }}>10km</p>
              </div>

              <p
                style={{
                  fontWeight: "600",
                  fontSize: "1rem",
                  margin: "1.5rem 0 1.15rem 0",
                }}
              >
                Select House Habits
              </p>
              <div class="form-check">
                <input
                  class="form-check-input border border-primary"
                  type="checkbox"
                  value="Non-smoker"
                  checked={houseHabit1.includes("Non-smoker")}
                  onChange={()=>{handleHouseHabit1Filter1()}}
                />
                <label class="form-check-label" for="flexCheckDefault">
                Smoking
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input  border border-primary" type="checkbox"  value="Non-drinker"
                              checked={houseHabit1.includes("Non-drinker")}
                              onChange={()=>{handleHouseHabit1Filter2()}}
                              />
                <label class="form-check-label" for="flexCheckChecked">
                  Drinker
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input  border border-primary" type="checkbox"  value="Veg"
                              checked={houseHabit1.includes("Veg")}
                              onChange={()=>{handleHouseHabit1Filter3()}}
                              />
                <label class="form-check-label" for="flexCheckChecked">
                  Vegetarian
                </label>
              </div>

              <div
                className="row "
                style={{ marginTop: "11rem", padding: "0" }}
              >
                <div className="col-6">
                  <button
                    className="reqStep2__btn-pre"
                    type="button"
                    style={{ width: "100%" }}
                    onClick={resetSubmit}
                  >
                    <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                      Reset
                    </p>
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="reqStep2__btn-next"
                    style={{ width: "100%" }}
                    onClick={applySubmit}
                  >
                    <p className="reqStep__btn-p " style={{ margin: "5% 0" }}>
                      Apply
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SmallScreenFilterAcco;
