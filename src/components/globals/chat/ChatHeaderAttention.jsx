import React from "react";
import { FaInfo } from "react-icons/fa";

const ChatHeaderAttention = ({ headerMessage }) => {
  return (
    <div className="rounded-xl p-2 bg-titusDarkGrey flex gap-3">
      <FaInfo />
      <div className="text-[11px] text-white">{headerMessage}</div>
      <div className="text-titusLightText font-semibold">x</div>
    </div>
  );
};

export default ChatHeaderAttention;
