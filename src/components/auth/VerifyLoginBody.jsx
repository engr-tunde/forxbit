import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import OTPInputField from "../forms/OTPInputField";
import { userResendVerifyLoginOTP, userVerifyLogin } from "../../api";
import Cookies from "js-cookie";

const VerifyLoginBody = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const onChange = (value) => setOtp(value);

  const history = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  let otpLength = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  const resendOTP = async () => {
    const response = await userResendVerifyLoginOTP({ userId });
    console.log("response", response);
    if (response.status === 200) {
      successNotification("New OTP successfully sent!");
    } else {
      errorNotification(response?.data?.error);
    }
  };

  const handleSubmit = async () => {
    setisSubmitting(true);
    setdisabled(true);
    const response = await userVerifyLogin({
      otp: otp,
      userId,
    });
    console.log("response", response);
    if (response.status === 200) {
      Cookies.set("u-x", response?.headers["u-x-key"]);
      const data = response.data;
      successNotification(data.message);
      setTimeout(() => history("/dashboard"), 1500);
    } else {
      errorNotification(response?.data?.error);
    }
    setisSubmitting(false);
    setdisabled(false);
  };

  useEffect(() => {
    if (otp.length < otpLength) {
      setdisabled(true);
    } else {
      setdisabled(false);
    }
  }, [otp]);

  return (
    <>
      <div className="w-[100wv] h-[100vh] bg-titusDarkBG">
        <div className="max-w-[500px] h-full mx-auto px-10 md:px-7 flex flex-col items-center justify-center pt-[90px] pb-[150px] md:py-0">
          <div className="flex flex-col items-center px-0 w-full">
            <Link
              to="/"
              className="flex gap-2 items-center justify-center mb-2"
            >
              <img
                src="/assets/images/logo.png"
                alt=""
                className="w-[40px] md:w-[50px]"
              />
              <div className="flex flex-col items-start gap-0 text-white">
                <span className="text-[11px] md:text-[12px] font-bold uppercase p-0 m-0 leading-[0.9em] text-start">
                  TiTus
                </span>
                <span className="text-[8px] md:text-[8px] font-medium uppercase">
                  Exchange
                </span>
              </div>
            </Link>
            <div className="text-[24px] text-center mb-1 font-bold text-[#fff]"></div>

            <div className="text-[14px] mb-5 text-[#ffffffc9]">
              Verify your login attempt using the OTP received via your email
            </div>
          </div>
          <div className="py-2 w-full">
            {/* <form method="post"> */}
            <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-8 md:grid-cols-1 w-[100%] mb-2">
              <OTPInputField
                name="otp"
                value={otp}
                valueLength={otpLength}
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-[100%]"
              disabled={disabled ? true : false}
              style={{
                background: disabled ? "#066156" : "#00DBC2",
                color: disabled ? "#000" : "#000",
                border: disabled && "1px solid #fff",
              }}
              onClick={handleSubmit}
            >
              {isSubmitting ? "Loading..." : "Verify Login"}
            </button>

            <div className="mt-[20px]">
              {seconds > 0 || minutes > 0 ? (
                <div className="flex align-items-center text-sm">
                  Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex align-items-center text-sm">
                    Didn&apos;t recieve code?
                  </div>
                  <div
                    onClick={resendOTP}
                    className="text-[#fff] font-semibold cursor-pointer text-sm underline"
                  >
                    Resend OTP
                  </div>
                </div>
              )}
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyLoginBody;
