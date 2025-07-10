import React from "react";
import InputField from "../forms/InputField";
import CustomFormik from "../../utils/CustomFormik";
import { validateResetPassword } from "../../utils/validate";
import { resetPasswordValues } from "../../utils/initialValues";
import SubmitButton from "../forms/SubmitButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/helpers";
import { userResetPassword } from "../../api";

const ResetPasswordBody = () => {
  const initialValues = resetPasswordValues();
  const validationSchema = validateResetPassword();
  const history = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  const id = queryParams.get("id");
  if (!id || !token) {
    errorNotification(
      "Sorry, you cannot visit this page without a valid link sent to your email"
    );
    history("/login");
  }

  const handleSubmit = async (values) => {
    const response = await userResetPassword(id, token, {
      password: values.password,
    });
    if (response.status === 200) {
      successNotification(response.data.message);
      history("/login");
    } else {
      errorNotification(response?.data?.error);
    }
  };

  return (
    <>
      <div className="w-[100wv] h-[100vh] bg-[#0A0D16]">
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
              Reset your account password
            </div>
          </div>
          <div className="py-2 w-full">
            <CustomFormik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <div className="font-bold text-[14.5px] md:text-[18px] grid grid-cols-1 gap-5 md:grid-cols-1 w-[100%] mb-2">
                <InputField name="password" placeholder="Set password" />
                <InputField
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
              </div>
              <SubmitButton title="Reset Password" className="mt-6 w-[100%]" />
              <div className="text-[14px] md:text-[16px] text-center mt-[20px] flex justify-center gap-2">
                Remembered password?
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

export default ResetPasswordBody;
