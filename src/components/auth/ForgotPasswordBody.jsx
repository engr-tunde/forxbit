import React from "react";
import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateForgotPassword } from "../../utils/validate";
import { forgotPasswordValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { Link } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import { userForgotPassword } from "../../api";

const ForgotPasswordBody = () => {
  const initialValues = forgotPasswordValues();
  const validationSchema = validateForgotPassword();

  const handleSubmit = async (values) => {
    const response = await userForgotPassword({
      email: values.email,
    });
    if (response.status === 200) {
      successNotification(response.data.message);
    } else {
      errorNotification(response?.data?.error);
    }
  };

  return (
    <>
      <div className="w-[100wv] h-[100vh] bg-titusDarkBG">
        <div className="max-w-[500px] h-full mx-auto px-10 md:px-7 flex flex-col items-center justify-center pt-[90px] pb-[150px] md:py-0">
          <div className="flex flex-col items-center gap-2 px-3 w-full">
            <Link to="/" className="">
              <img
                src="/assets/images/logo-green.png"
                alt=""
                className="w-[90px] md:w-[120px]"
              />
            </Link>

            <div className="text-[16px] md:text-[18px] mb-5 text-[#ffffffc9]">
              Let's reset your password
            </div>
          </div>
          <div className="py-2 w-full">
            <CustomFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-8 md:grid-cols-1 w-[100%] mb-2">
                <InputField name="email" placeholder="Account email address" />
              </div>
              <SubmitButton
                title="Send Password Reset Link"
                className="mt-5 w-[100%]"
              />
              <div className="text-[13px] md:text-[14px] text-center mt-[20px] flex justify-between gap-2">
                Don't have an account yet?
                <Link to="/register" className="text-[#fff]">
                  Register
                </Link>
              </div>
            </CustomFormik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordBody;
