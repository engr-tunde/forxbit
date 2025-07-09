import React from "react";
import { FaFile, FaFileImage } from "react-icons/fa";
import InputField from "./../../forms/InputField";
import CustomFormik from "../../../utils/CustomFormik";
import { tradeChatValues } from "../../../utils/initialValues";
import { validateTradeChat } from "../../../utils/validate";
import { ErrorMessage, Formik } from "formik";
import ChatSubmitButton from "../../forms/ChatSubmitButton";

const ChatBody = ({ title, tradeChat, currentUser }) => {
  const initialValues = tradeChatValues();
  const validationSchema = validateTradeChat();
  const handleSubmit = () => {};
  return (
    <div className="flex flex-col gap-4 mb-5">
      <div className="w-full bg-titusDarkGrey text-titusYellowFaded text-center py-2 text-[13px]">
        {title}
      </div>
      <div className="px-5 flex flex-col gap-5 border-b-[1px] border-b-titusLightBorder pb-5">
        {tradeChat.map((item, i) => (
          <div
            className={
              currentUser._id === item.sender_id
                ? "w-full flex justify-end"
                : "w-full flex"
            }
            key={i}
          >
            <div
              className={
                currentUser._id === item.sender_id
                  ? "max-w-[70%] p-3 rounded-t-xl rounded-bl-xl bg-titusChatBg flex flex-col items-end gap-1"
                  : "max-w-[70%] p-3 rounded-t-xl rounded-br-xl bg-titusChatBg flex flex-col items-end gap-1"
              }
            >
              <div className="text-[12px] text-titusChatText">
                {item.message}
              </div>
              <span className="text-[12px]">07:32</span>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 flex flex-col gap-4">
        {/* <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        > */}
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="">
                <label
                  for="file"
                  className="cursor-pointer flex gap-3 text-white"
                >
                  <FaFile />
                  <FaFileImage />
                </label>
                <input type="file" name="" id="file" className="inputfile" />
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="w-[90%]">
                  {/* <InputField
                    name="message"
                    placeholder="Chat with counterparty..."
                    full={true}
                  /> */}
                  <input
                    type="text"
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    // error={!!touched.message && !!errors.message}
                    // helpertext={touched.message && errors.message}
                    placeholder="Chat with counterparty..."
                    className="border-0 rounded-md w-full bg-titusChatBg px-3 text-xl font-medium"
                  />
                  <ErrorMessage
                    name="message"
                    component="span"
                    className="error"
                  />
                </div>
                <div className="w-[6%] flex justify-end">
                  <ChatSubmitButton />
                </div>
              </div>
            </form>
          )}
        </Formik>
        {/* </CustomFormik> */}
      </div>
    </div>
  );
};

export default ChatBody;
