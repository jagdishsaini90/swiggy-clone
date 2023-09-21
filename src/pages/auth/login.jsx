import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useAuthContext } from "../../utils/authProvider";
import Spinner from "../../components/spinner";
import "./style.scss";

const Login = ({ setEnable, setViewPage }) => {
  const [number, setNumber] = useState("");
  const [labelClass, setLabelClass] = useState(false);
  const { loginHelper, message, otpHandler, setError, loading } =
    useAuthContext();
  const [otp, setOtp] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      loginHelper({ number });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    try {
      otpHandler({ otp });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <FontAwesomeIcon
        onClick={() => setEnable(false)}
        style={{ fontSize: "28px", cursor: "pointer" }}
        icon={faXmark}
      />
      <div className="login-heading">
        <div className="login-heading_left">
          <h1 className="text-[30px] font-semibold">
            {message ? "Enter OTP" : "Login"}
          </h1>
          <p>
            {message ? (
              "We've sent an OTP to your phone number."
            ) : (
              <>
                or{" "}
                <span onClick={() => setViewPage("signup")}>
                  create an account
                </span>
              </>
            )}
          </p>
          <p></p>
        </div>
        <div>
          <img
            width="100"
            height="105"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          />
        </div>
      </div>

      {message ? (
        <form onSubmit={handleOtpSubmit}>
          <div className="input-row">
            <input
              value={otp}
              type="text"
              onChange={(e) => setOtp(e.target.value)}
              className="input"
              onFocus={() => setLabelClass("otp")}
              onBlur={() => setLabelClass("")}
              autoFocus={message}
            />
            <label
              className={`label ${
                labelClass === "otp" || otp ? "label-animation" : ""
              }`}
              htmlFor="otp"
            >
              One time password
            </label>
          </div>
          <button className="button" type="submit">
            {loading ? (
              <div className="flex justify-center items-center">
                <Spinner />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="input-row">
            <input
              value={number}
              type="text"
              onChange={(e) => setNumber(e.target.value)}
              className="input"
              onFocus={() => setLabelClass(true)}
              onBlur={() => setLabelClass(false)}
              autoFocus
            />
            <label
              className={`label ${
                labelClass || number ? "label-animation" : ""
              }`}
              htmlFor="mobile"
            >
              Phone number
            </label>
          </div>
          <button className="button" type="submit">
            {loading ? (
              <div className="flex justify-center items-center">
                <Spinner />
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      )}
      <div className="_1FvHn">
        By clicking on Login, I accept the{" "}
        <a className="IBw2l" href="/terms-and-conditions">
          Terms &amp; Conditions
        </a>{" "}
        &amp;{" "}
        <a className="IBw2l" href="/privacy-policy">
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Login;
