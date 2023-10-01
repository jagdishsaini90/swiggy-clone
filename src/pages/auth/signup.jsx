import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../utils/authProvider";
import Spinner from "../../components/spinner";
import { useDispatch, useSelector } from "react-redux";
import { sendOTP, verifyOTP } from "../../redux/action-creators";
import "./style.scss";

const Signup = ({ setEnable, setViewPage }) => {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [labelClass, setLabelClass] = useState("");
  const [showReferel, setShowReferel] = useState(false);
  const [otp, setOtp] = useState("");
  const { message } = useAuthContext();
  const dispatch = useDispatch();
  const sendOtpSelector = useSelector((state) => state.otp);
  const signupSelector = useSelector((state) => state.signup);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!number) return;

    dispatch(sendOTP({ number }));
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!name || !otp || !email || !number) return;

    dispatch(
      verifyOTP({
        name,
        otp,
        email,
        number,
        userId: sendOtpSelector.data?.userId,
        authType: "signup",
      })
    );
  };

  useEffect(() => {
    if (signupSelector.data?.success) {
      window.location.href = "/";
      return;
    }
  }, [signupSelector]);

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
            {sendOtpSelector.data?.otpSent ? "Enter OTP" : "Sign up"}
          </h1>
          <p>
            {sendOtpSelector.data?.otpSent ? (
              "We've sent an OTP to your phone number."
            ) : (
              <>
                or{" "}
                <span onClick={() => setViewPage("login")}>
                  login to your account
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
      {sendOtpSelector.data?.otpSent ? (
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
            {signupSelector.isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSignup}>
          <div className="input-row">
            <input
              value={number}
              type="text"
              onChange={(e) => setNumber(e.target.value)}
              className="input"
              onFocus={() => setLabelClass("phone")}
              onBlur={() => setLabelClass("")}
              autoFocus
            />
            <label
              className={`label ${
                labelClass === "phone" || number ? "label-animation" : ""
              }`}
              htmlFor="mobile"
            >
              Phone number
            </label>
          </div>
          <div className="input-row">
            <input
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="input"
              onFocus={() => setLabelClass("name")}
              onBlur={() => setLabelClass("")}
            />
            <label
              className={`label ${
                labelClass === "name" || name ? "label-animation" : ""
              }`}
              htmlFor="name"
            >
              Name
            </label>
          </div>
          <div className="input-row">
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              onFocus={() => setLabelClass("email")}
              onBlur={() => setLabelClass("")}
            />
            <label
              className={`label ${
                labelClass === "email" || email ? "label-animation" : ""
              }`}
              htmlFor="email"
            >
              Email
            </label>
          </div>
          {showReferel ? (
            <div className="input-row">
              <input
                value={referralCode}
                type="text"
                onChange={(e) => setReferralCode(e.target.value)}
                className="input"
                onFocus={() => setLabelClass("code")}
                onBlur={() => setLabelClass("")}
                autoFocus={showReferel}
              />
              <label
                className={`label ${
                  labelClass === "code" || referralCode ? "label-animation" : ""
                }`}
                htmlFor="code"
              >
                Referral Code
              </label>
            </div>
          ) : (
            <button onClick={() => setShowReferel(true)} className="_3GOZo">
              Have a referral code?
            </button>
          )}
          <button className="button" type="submit">
            {sendOtpSelector.isLoading ? (
              <div className="flex justify-center items-center">
                <Spinner />
              </div>
            ) : (
              "Continue"
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

export default Signup;
