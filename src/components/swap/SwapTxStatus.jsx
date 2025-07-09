import { FaCheck } from "react-icons/fa";
import Loader from "../globals/Loader";
import { useEffect, useState } from "react";

const SwapTxStatus = ({ status }) => {
  const [statusState, setstatusState] = useState(1);
  useEffect(() => {
    if (status) {
      if (status === "waiting") {
        setstatusState(1);
      } else if (status === "confirming") {
        setstatusState(2);
      } else if (status === "exchanging") {
        setstatusState(3);
      } else if (status === "sending") {
        setstatusState(4);
      } else {
        setstatusState(5);
      }
    }
  }, [status]);

  console.log("status", status);

  return (
    <div className=" w-full items-start grid grid-cols-4">
      <div className="col-span-1 flex flex-col gap-2">
        <div className="col-span-1 flex items-center">
          <div
            className={
              statusState > 1
                ? "h-5 w-5 flex items-center justify-center bg-titusGreenFaded text-[#222] text-sm rounded-md font-semibold"
                : "h-5 w-5 flex items-center justify-center rounded-md font-semibold"
            }
          >
            {statusState > 1 ? (
              <FaCheck className="text-[12px]" />
            ) : (
              <Loader size={30} color="#00dbc2" />
            )}
          </div>
          <div className="w-full h-[2px] bg-titusText"></div>
        </div>
        <div className="text-[12px] md:text-sm text-white w-[95%] leading-[14px]">
          Awaiting deposit
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-2">
        <div className="flex items-center">
          <div className="w-full h-[2px] bg-titusText"></div>
          <div
            className={
              statusState == 2
                ? "h-5 w-5 flex items-center justify-center rounded-md font-semibold"
                : statusState > 2
                ? "h-5 w-10 flex items-center justify-center bg-titusGreenFaded text-[#222] text-[12px] rounded-md"
                : "h-5 w-10 flex items-center justify-center bg-titusText text-black text-[12px] rounded-md"
            }
          >
            {statusState == 2 ? (
              <Loader size={30} color="#00dbc2" />
            ) : statusState > 2 ? (
              <FaCheck className="text-[12px]" />
            ) : (
              2
            )}
          </div>
          <div className="w-full h-[2px] bg-titusText"></div>
        </div>
        <div
          className={
            statusState >= 2
              ? "text-[12px] md:text-[12px] text-white w-[95%] text-center leading-[14px]"
              : "text-[12px] md:text-[12px] text-titusText w-[95%] text-center leading-[14px]"
          }
        >
          Confirming
        </div>
      </div>

      <div className="col-span-1 flex flex-col gap-2">
        <div className="flex items-center">
          <div className="w-full h-[2px] bg-titusText"></div>
          <div
            className={
              statusState == 3
                ? "h-5 w-5 flex items-center justify-center rounded-md font-semibold"
                : statusState > 3
                ? "h-5 w-10 flex items-center justify-center bg-titusGreenFaded text-[#222] text-[12px] rounded-md"
                : "h-5 w-10 flex items-center justify-center bg-titusText text-black text-[12px] rounded-md"
            }
          >
            {statusState == 3 ? (
              <Loader size={30} color="#00dbc2" />
            ) : statusState > 3 ? (
              <FaCheck className="text-[12px]" />
            ) : (
              3
            )}
          </div>
          <div className="w-full h-[2px] bg-titusText"></div>
        </div>
        <div
          className={
            statusState >= 3
              ? "text-[12px] md:text-[12px] text-white w-[95%] text-center leading-[14px]"
              : "text-[12px] md:text-[12px] text-titusText w-[95%] text-center leading-[14px]"
          }
        >
          Exchanging
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-end gap-2">
        <div className="w-full flex items-center justify-end">
          <div className="w-full h-[2px] bg-titusText"></div>
          <div
            className={
              statusState == 4
                ? "h-5 w-5 flex items-center justify-center rounded-md font-semibold"
                : statusState > 4
                ? "h-5 w-10 flex items-center justify-center bg-titusGreenFaded text-[#222] text-[12px] rounded-md"
                : "h-5 w-10 flex items-center justify-center bg-titusText text-black text-[12px] rounded-md"
            }
          >
            {statusState == 4 ? <FaCheck className="text-[12px]" /> : 4}
          </div>
        </div>
        <div
          className={
            statusState == 4
              ? "text-[12px] md:text-[12px] text-white w-[95%] text-end leading-[14px]"
              : "text-[12px] md:text-[12px] text-titusText w-[95%] text-end leading-[14px]"
          }
        >
          Sending
        </div>
      </div>
    </div>
  );
};

export default SwapTxStatus;
