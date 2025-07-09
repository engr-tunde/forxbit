import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { editPaswordValues } from "../../../../utils/initialValues";
import { validateUpdatePassword } from "../../../../utils/validate";
import {
  errorNotification,
  successNotification,
} from "../../../../utils/helpers";
import CustomFormik from "../../../../utils/CustomFormik";
import SubmitButton from "../../../forms/SubmitButton";
import InputFieldLineUnder from "../../../forms/InputFieldLineUnder";
axios.defaults.withCredentials = true;

const EditPasswordBody = () => {
  const initialValues = editPaswordValues();
  const validationSchema = validateUpdatePassword();
  const history = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    const payload = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };

    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/user-profile/update-password`,
      payload,
      { withCredentials: true }
    );
    console.log(response);
    try {
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
        history("/dashboard");
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <div className="bg-titusDashCardDarkItemBG p-5 md:p-10 border-[1px] border-titusLightBorder rounded-lg">
      <div className="w-[100%]">
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <div className="text-sm flex flex-col gap-8">
            <div className="flex flex-col border-b-[2px] border-b-titusLightBorder">
              <label className="p-0">Current Password</label>
              <InputFieldLineUnder name="oldPassword" />
            </div>
            <div className="flex flex-col border-b-[2px] border-b-titusLightBorder">
              <label className="p-0">New Password</label>
              <InputFieldLineUnder name="newPassword" />
            </div>

            <div className="flex flex-col border-b-[2px] border-b-titusLightBorder">
              <label className="p-0">Confirm New Password</label>
              <InputFieldLineUnder name="confirmNewPassword" />
            </div>
          </div>
          <div className="flex justify-end">
            <SubmitButton
              title="Update password"
              className="mt-10 w-full md:w-[30%]"
            />
          </div>
        </CustomFormik>
      </div>
    </div>
  );
};

export default EditPasswordBody;
