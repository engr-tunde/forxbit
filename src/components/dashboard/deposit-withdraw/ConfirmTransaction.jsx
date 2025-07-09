import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const ConfirmTransaction = ({
  renderMessage,
  showConfirmTrade,
  setshowConfirmTrade,
  actionFunction,
  buttonTitle,
}) => {
  return (
    <>
      <div
        className={
          showConfirmTrade
            ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/25"
            : "hidden"
        }
        style={{
          backdropFilter: showConfirmTrade ? "blur(5px)" : "",
        }}
      >
        <div className="w-full md:w-[500px] h-max bg-titusDashCardDarkBG p-7 md:py-10 md:px-7 flex flex-col gap-8 md:gap-10">
          <div className="flex justify-between items-center">
            <div className="text-white text-xl font-semibold">
              Confirm trade
            </div>
            <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
              <FaTimesCircle
                onClick={() => setshowConfirmTrade(false)}
                className="text-xl"
              />
            </div>
          </div>
          {renderMessage()}
          <div
            className="w-full btnn1 py-[10px] px-8 text-center text-sm  font-medium"
            onClick={actionFunction}
          >
            {buttonTitle}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmTransaction;
