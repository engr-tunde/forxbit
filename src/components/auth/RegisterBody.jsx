import React from "react";
import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateSignup } from "../../utils/validate";
import { signUpValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { Link, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import { userRegister } from "../../api";

const RegisterBody = () => {
  const initialValues = signUpValues();
  const validationSchema = validateSignup();
  const history = useNavigate();

  const handleSubmit = async (values) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const response = await userRegister(payload);
    console.log("response", response);

    if (response.status === 200) {
      const data = response.data;
      successNotification(data.message);
      setTimeout(
        () =>
          history("/verify-account", {
            state: { userId: data.userId },
          }),
        3000
      );
    } else {
      errorNotification(response?.data?.error);
    }
  };

  return (
    <>
      <div className="w-[100vw] md:h-[100vh] bg-titusDarkBG">
        {/* <div className="w-full md:w-[500px] rounded-xl p-10 border-[#30f5de65] border-[1px] mx-auto px-5 md:px-0 flex flex-col items-center justify-center pt-[90px]"> */}
        <div className="max-w-[500px] h-full mx-auto px-10 md:px-7 flex flex-col items-center justify-center pt-[150px] pb-[150px] md:py-0 ">
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
              Sign up to get started
            </div>
          </div>
          <div className="py-2 w-full md:w-[80%] mx-auto">
            <CustomFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <div className="font-bold text-[14.5px] md:text-[18px] uppercase grid grid-cols-1 gap-5 w-[100%] mb-2">
                <InputField name="name" placeholder="Your full name" />
                <InputField name="email" placeholder="Your email address" />
                {/* <SelectNetworkField name="network" />
                <InputField name="wallet" placeholder="Wallet address" />
                <SelectCountryField name="country" />
                <InputField name="phone" placeholder="Phone number" /> */}
                <InputField
                  name="password"
                  placeholder="Set password"
                  type="password"
                />
                <InputField
                  name="confirmPassword"
                  placeholder="Confirm password"
                  type="password"
                />
              </div>
              <SubmitButton title="Sign up" className="mt-6 w-[100%]" />
              <div className="text-[13px] md:text-[14px] text-center mt-[20px] flex justify-between gap-2">
                Already have an account?
                <Link to="/login" className="text-[#fff] font-semibold">
                  Login instead
                </Link>
              </div>
            </CustomFormik>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterBody;
