import { FaCheck, FaCopy } from "react-icons/fa";
import { copyFunc } from "../../../../utils/helpers";

const M2MOrderBreakdown = ({ orderData }) => {
  return (
    <div className="w-full flex gap-5">
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 flex items-center justify-center bg-[#bbb] text-[#222] font-semibold p-0 m-0 text-[10px]">
          {/* <FaCheck /> */}1
        </div>
        <div className="h-full w-[2px] bg-[#bbb]"></div>
      </div>

      <div className="w-full flex flex-col mb-10 lg:mb-8">
        <p className="text-sm lg:text-md font-medium text-white">
          Order Details
        </p>

        <div className="w-full p-3 lg:p-5 rounded-lg border-[1px] border-titusLightBorder flex flex-col gap-5 md:gap-4 text-sm">
          <div className="flex items-center justify-between">
            <span>Order Type</span>
            <div className=" font-medium flex items-center gap-2">
              <span
                className={
                  orderData?.order?.type === "Sell"
                    ? "text-red-400"
                    : "text-titusGreen"
                }
              >
                {orderData?.order?.type}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Trade Pair</span>
            {orderData?.order.type === "Sell" ? (
              <span className="font-medium text-titusChatText">
                {orderData?.order?.token?.symbol}/
                {orderData?.order?.currency.ticker}
              </span>
            ) : (
              <span className="font-medium text-titusChatText">
                {orderData?.order?.currency.ticker}/
                {orderData?.order?.token?.symbol}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span>Price</span>
            <span className="font-medium text-titusChatText">
              {orderData?.order?.currency.ticker}
              {orderData?.order?.price}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span>Fiat amount</span>
            <div className=" font-medium flex items-center gap-2">
              <span className="text-titusYellowFaded">
                {`${orderData?.order?.fiat_amount} 
                ${orderData?.order?.currency?.ticker}`}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span>Token Amount</span>
            <span className="font-medium text-titusYellowFaded">
              {`${orderData?.order?.token_amount} ${orderData?.order?.token?.symbol}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M2MOrderBreakdown;
