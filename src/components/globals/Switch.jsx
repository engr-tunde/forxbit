import React from "react";

const Switch = ({ title, func, enable, opacity = false }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-white font-medium text-sm">{title}</div>
      <div
        className={
          enable
            ? "w-10 md:w-12 px-1 py-1 bg-blue-500 rounded-full cursor-pointer flex justify-end ease-in duration-300"
            : "w-10 md:w-12 px-1 py-1 bg-titusText rounded-full cursor-pointer flex ease-in duration-300"
        }
        onClick={func}
      >
        <div className={opacity ? "opacity-40" : ""}>
          <div className="rounded-full w-4 h-4 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
