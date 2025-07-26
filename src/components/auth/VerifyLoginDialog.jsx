import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import OTPInputField from "../forms/OTPInputField";
import { userResendVerifyLoginOTP, userVerifyLogin } from "../../api";
import Cookies from "js-cookie";
import { FaTimesCircle } from "react-icons/fa";

const VerifyLoginDialog = ({
  userId,
  setshowOTPDialog,
  setshowLoginPopUp,
  onSuccessfulLogin,
  onCancel,
}) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const onChange = (value) => setOtp(value);
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
      setshowOTPDialog(false);
      setshowLoginPopUp(false);
      onSuccessfulLogin();
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

  const handleCancel = () => {
    setshowOTPDialog(false);
    setshowLoginPopUp(false);
    onCancel();
  };

  return (
    <div className="w-[90%] lg:w-[500px] h-max mx-auto px-10 md:px-7 flex flex-col items-center justify-center py-16 md:py-14 bg-titusDarkBG relative">
      <FaTimesCircle
        onClick={handleCancel}
        className="text-titusYellow text-2xl absolute top-2 right-2 cursor-pointer hover:scale-105 ease-in duration-200"
      />
      <div className="flex flex-col items-center px-0 w-full">
        <div className="text-[16px] mb-5 text-[#ffffffc9]">Verify login</div>
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
  );
};

export default VerifyLoginDialog;
