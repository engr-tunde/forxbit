import { FaCheck, FaCopy } from "react-icons/fa";
import { copyFunc } from "../../../../utils/helpers";

const M2MTradePartner = ({ orderData }) => {
  return (
    <div className="w-full flex gap-5">
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 flex items-center justify-center bg-[#bbb] text-[#222] font-semibold p-0 m-0 text-[10px]">
          2
        </div>
        <div className="h-full w-[2px] bg-[#bbb]"></div>
      </div>

      <div className="w-full flex flex-col mb-10 lg:mb-8">
        <p className="text-sm lg:text-md font-medium text-white">
          Other Trader Details
        </p>

        <div className="w-full p-3 lg:p-5 rounded-lg border-[1px] border-titusLightBorder flex flex-col gap-5 md:gap-4 text-sm">
          <div className="flex items-center justify-between">
            <span>Trader Username</span>
            <div className="font-medium flex items-center gap-2">
              <span className="text-titusChatText">
                {orderData?.trade_partner?.username}
              </span>
              <FaCopy
                onClick={() =>
                  copyFunc(
                    orderData?.trade_partner?.username,
                    "Trader username copied!"
                  )
                }
                className="cursor-pointer text-[15px]"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Trader Name</span>
            <div className=" font-medium flex items-center gap-2">
              <span className="text-titusChatText">
                {orderData?.trade_partner?.name}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Trade ID</span>
            <div className=" font-medium flex items-center gap-2">
              <span className="text-titusChatText">
                {" "}
                {orderData?.trade_id.substring(0, 8)}...
                {orderData?.trade_id.substring(orderData?.trade_id.length - 8)}
              </span>
              <FaCopy
                onClick={() => copyFunc(orderData.trade_id, "trade id copied!")}
                className="cursor-pointer text-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M2MTradePartner;
