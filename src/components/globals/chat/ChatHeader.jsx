import React from "react";
import ChatHeaderAttention from "./ChatHeaderAttention";
import { FaBars } from "react-icons/fa";

const ChatHeader = ({ orderData, headerMessage, systemMessages }) => {
  return (
    <div className="mb-3">
      <div className="p-6 flex items-center justify-between border-b-[2px] border-b-titusLightBorder">
        <div className="flex gap-2">
          <div className="h-[20px] w-[20px] bg-white text-black rounded-md flex items-center justify-center">
            {orderData?.trade_partner?.username?.charAt(0)}
          </div>
          <div className="flex flex-col">
            <p className="text-sm m-0 p-0 text-white">
              {orderData?.trade_partner?.username}
            </p>
            <div className="flex items-center gap-[6px]">
              <div className="h-[6px] w-[6px] rounded-full bg-titusLightText"></div>
              <span className="text-[12px]">Last seen 8hrs ago</span>
            </div>
          </div>
        </div>
        <FaBars />
      </div>
      <div className="py-5 px-3">
        <ChatHeaderAttention headerMessage={headerMessage} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full bg-titusDarkGrey text-titusGreenFaded text-center py-2 text-[13px]">
          System messages
        </div>
        <div className="px-5 flex flex-col gap-5">
          {systemMessages.map((item, i) => (
            <div
              className="p-3 rounded-lg border-[1px] border-titusLightBorder flex flex-col items-end gap-2"
              key={i}
            >
              <div className="text-[12px] text-center">{item}</div>
              <span className="text-[13px]">07:32</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
