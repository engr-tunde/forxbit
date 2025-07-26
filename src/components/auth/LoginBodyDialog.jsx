import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateLogin } from "../../utils/validate";
import { loginValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { Link } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import { userLogin } from "../../api";
import { FaTimes, FaTimesCircle } from "react-icons/fa";

const LoginBodyDialog = ({
  setshowLoginDialog,
  setshowOTPDialog,
  setuserId,
  setshowLoginPopUp,
  onCancel,
}) => {
  const initialValues = loginValues();
  const validationSchema = validateLogin();

  const handleSubmitLogin = async (values) => {
    const response = await userLogin({
      email: values.email,
      password: values.password,
    });
    console.log("response", response);
    if (response.status === 200) {
      const id = response.data.userId;
      successNotification(response.data.message);
      setuserId(id);
      setshowLoginDialog(false);
      setshowOTPDialog(true);
    } else {
      errorNotification(response?.data?.error);
    }
  };

  const handleCancel = () => {
    setshowLoginDialog(false);
    setshowLoginPopUp(false);
    onCancel();
  };

  return (
    <div className="w-[90%] lg:w-[500px] h-max mx-auto px-10 md:px-7 flex flex-col items-center justify-center py-16 md:py-14 bg-titusDarkBG relative">
      <FaTimesCircle
        onClick={() => handleCancel()}
        className="text-titusYellow text-2xl absolute top-2 right-2 cursor-pointer hover:scale-105 ease-in duration-200"
      />

      <div className="flex flex-col gap-2 items-center px-3 w-full">
        <div className="text-[16px] mb-5 text-[#ffffffc9]">
          Login to your account
        </div>
      </div>
      <div className="py-2 w-full">
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitLogin}
        >
          <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-5 md:grid-cols-1 w-[100%] mb-2">
            <InputField name="email" placeholder="Your email address" />
            <InputField
              name="password"
              placeholder="Account password"
              type="password"
            />
          </div>
          <SubmitButton title="Login" className="mt-6 w-[100%]" />
          <div className="text-[13px] md:text-[14px] text-center mt-[20px] flex justify-between gap-2">
            Don't have an account yet?
            <Link
              onClick={handleCancel}
              to="/register"
              target="_blank"
              className="text-[#fff]"
            >
              Register
            </Link>
          </div>
        </CustomFormik>
      </div>
    </div>
  );
};

export default LoginBodyDialog;
