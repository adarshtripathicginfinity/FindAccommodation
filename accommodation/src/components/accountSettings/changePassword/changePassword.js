import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./changePassword.css"

const ChangePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [isconfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setIsPasswordValid(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/.test(value) ||
        !value.length >= 6
        ? true
        : false
    );
  };
  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    setIsConfirmPasswordValid(
      value === password && password.length >= 8 ? true : false
    );
  };
  function handleNewPassword(event) {
    event.preventDefault();

    navigate("/changedpassword");
  }
  return (
    <>
      <div className="row">
        <div className="col-12">
          <p id="changePasswordHeading">
            Change Password
          </p>
          <div className="container w-100 g-2 changePasswordOuterDiv">
            <form onSubmit={handleNewPassword}>
              <label for="email" className="form-label">
                Old Password
              </label>
              <input
                type="password"
                className="form-control input inputPassword"
                value={password}
                onChange={handlePasswordChange}
                required
              />

              <label
                for="password"
                className="form-label"
                style={{ marginTop: "1rem" }}
              >
                New Password
              </label>
              <input
                type="password"
                className="form-control input inputPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {!isconfirmPasswordValid && confirmPassword && (
                <span style={{ color: "red", fontSize: "0.75rem" }}>
                  Passwords do not match !
                </span>
              )}

              <button
                style={{marginBottom: "5%"}}
                className="btn btn-warning w-1 mt-4"
                id="submitButton"
                disabled={
                  (!isPasswordValid && password) ||
                  (!isconfirmPasswordValid && confirmPassword)
                }
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;
