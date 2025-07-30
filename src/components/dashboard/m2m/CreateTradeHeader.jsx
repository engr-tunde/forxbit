import { FaArrowCircleLeft, FaCheck } from "react-icons/fa";
import { useM2MContext } from "../../../context/m2mContext";
import { useNavigate } from "react-router-dom";

const CreateTradeHeader = () => {
  const {
    m2mCurrentStage,
    m2mTradeType,
    setm2mTradeType,
    setpopulate,
    setpopulateData,
  } = useM2MContext();

  const history = useNavigate();
  const handleClick = () => {
    history(-1);
    setpopulate(false);
    setpopulateData();
  };

  return (
    <div className="w-full flex flex-col gap-9 md:gap-7">
      <div className="flex items-center gap-3">
        <div
          onClick={handleClick}
          className="p-2 bg-titusChatBg text-titusYellow text-[18px] cursor-pointer font-medium duration-200 ease-in rounded-md hover:opacity-50"
        >
          <FaArrowCircleLeft />
        </div>
        <div className="text-xl md:text-2xl font-semibold text-white">
          Create Trade
        </div>
      </div>

      <div className=" w-full items-start grid grid-cols-3">
        <div className="col-span-1 flex flex-col gap-2">
          <div className="col-span-1 flex items-center">
            <div className="h-5 w-5 flex items-center justify-center bg-titusGreenFaded text-[#222] text-sm rounded-md">
              <FaCheck className="text-[12px]" />
            </div>
            <div className="w-full h-[2px] bg-titusText"></div>
          </div>
          <div
            className={
              m2mCurrentStage >= 1
                ? "text-[10px] md:text-xs text-white w-[95%] leading-[14px]"
                : "text-[10px] md:text-xs text-titusText w-[95%] leading-[14px]"
            }
          >
            Set Type & Price
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-center">
            <div className="w-full h-[2px] bg-titusText"></div>
            <div
              className={
                m2mCurrentStage >= 2
                  ? "h-5 w-10 flex items-center justify-center bg-titusGreenFaded text-[#222] text-sm rounded-md"
                  : "h-5 w-10 flex items-center justify-center bg-titusText text-black text-sm rounded-md"
              }
            >
              {m2mCurrentStage >= 2 ? (
                <FaCheck className="text-[12px]" />
              ) : (
                <span>2</span>
              )}
            </div>
            <div className="w-full h-[2px] bg-titusText"></div>
          </div>
          <div
            className={
              m2mCurrentStage >= 2
                ? "text-[10px] md:text-xs text-white w-[95%] text-center leading-[14px]"
                : "text-[10px] md:text-xs text-titusText w-[95%] text-center leading-[14px]"
            }
          >
            Set Amounts & Payment Method
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-end gap-2">
          <div className="w-full flex items-center justify-end">
            <div className="w-full h-[2px] bg-titusText"></div>
            <div
              className={
                m2mCurrentStage >= 3
                  ? "h-5 w-6 flex items-center justify-center bg-titusGreenFaded text-[#222] text-sm rounded-md"
                  : "h-5 w-6 flex items-center justify-center bg-titusText text-black text-sm rounded-md"
              }
            >
              {m2mCurrentStage >= 3 ? (
                <FaCheck className="text-[12px]" />
              ) : (
                <span>3</span>
              )}
            </div>
          </div>
          <div
            className={
              m2mCurrentStage >= 3
                ? "text-[10px] md:text-xs text-white w-[95%] text-end leading-[14px]"
                : "text-[10px] md:text-xs text-titusText w-[95%] text-end leading-[14px]"
            }
          >
            Remarks & Finish
          </div>
        </div>
      </div>

      <div className="flex items-center gap-7">
        <div
          className={
            m2mTradeType.toLowerCase() === "buy"
              ? "text-white md:text-xl md:font-medium cursor-pointer border-b-[2px] border-b-titusGreenFaded rounded-b-lg pb-2"
              : "hover:text-white md:text-xl md:font-medium cursor-pointer pb-2"
          }
          onClick={() => setm2mTradeType("Buy")}
        >
          I want to buy
        </div>
        <div
          className={
            m2mTradeType.toLowerCase() === "sell"
              ? "text-white md:text-xl md:font-medium cursor-pointer border-b-[2px] border-b-titusGreenFaded rounded-b-lg pb-2"
              : "hover:text-white md:text-xl md:font-medium cursor-pointer pb-2"
          }
          onClick={() => setm2mTradeType("Sell")}
        >
          I want to sell
        </div>
      </div>
    </div>
  );
};

export default CreateTradeHeader;
