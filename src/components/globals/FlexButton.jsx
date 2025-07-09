import React from "react";

const FlexButton = ({
  title,
  func,
  btnTitle,
  opacity = false,
  dangerBtn = false,
  transparentBtn = false,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="text-white font-medium text-sm">{title}</div>
      <div
        className={
          dangerBtn
            ? "btnn-danger py-[6px] w-[85px] text-sm font-medium text-center"
            : transparentBtn
            ? "btnn-dark py-[6px] w-[85px] text-sm font-medium text-center"
            : "btnn1 py-[6px] w-[85px] text-sm font-medium text-center"
        }
        onClick={func}
      >
        <div className={opacity ? "opacity-70" : ""}>{btnTitle}</div>
      </div>
    </div>
  );
};

export default FlexButton;
