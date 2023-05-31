import React, { useState } from "react";
import { useNavigate } from "react-router";

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
          <div className="container w-100 g-2">
            <form onSubmit={handleNewPassword}>
              <label for="email" className="form-label">
                Old Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter New Password"
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
                className="form-control"
                placeholder="Enter Confirm Password"
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
                className="btn btn-warning w-100 mt-3"
                disabled={
                  (!isPasswordValid && password) ||
                  (!isconfirmPasswordValid && confirmPassword)
                }
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;
