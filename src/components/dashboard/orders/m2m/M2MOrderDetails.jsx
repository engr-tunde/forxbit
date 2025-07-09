import { FaCopy } from "react-icons/fa";
import M2MPayForOrder from "./M2MPayForOrder";
import { copyFunc, dateFormatter } from "../../../../utils/helpers";
import M2MOrderBreakdown from "./M2MOrderBreakdown";
import M2MTradePartner from "./M2MTradePartner";

const M2MOrderDetails = ({ orderData }) => {
  console.log("orderData", orderData);
  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row justify-between items-center w-full mb-10 mb:mb-0 ">
        <div className="w-full flex flex-col">
          <div className="text-[16px] lg:text-[18px] font-medium text-white mb-0">
            Order Status:{" "}
            <span className="text-titusGreen">{orderData.status}</span>
          </div>
          <div className="flex items-center gap-3 text-[12px]">
            <p className="flex gap-2 p-0 m-0">
              <span>Order number:</span>
              <span className="text-white font-medium">
                {orderData?.order_no.substring(0, 8)}...
                {orderData?.order_no.substring(orderData?.order_no.length - 8)}
              </span>
            </p>
            <FaCopy
              onClick={() =>
                copyFunc(orderData.order_no, "order number copied!")
              }
              className="cursor-pointer text-[15px]"
            />
          </div>
        </div>
        <div className="w-full md:w-[30%] flex flex-col gap-1 md:gap-1 text-[10px]">
          <div className="flex justify-between">
            <span>Created At:</span>
            <span className="text-white font-medium">
              {dateFormatter(orderData?.createdAt)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Last Updated:</span>
            <span className="text-white font-medium">
              {dateFormatter(orderData?.updatedAt)}
            </span>
          </div>
        </div>
      </div>

      <M2MOrderBreakdown orderData={orderData} />
      <M2MTradePartner orderData={orderData} />

      {orderData?.status !== "Cancelled" && (
        <M2MPayForOrder orderData={orderData} />
      )}
    </>
  );
};

export default M2MOrderDetails;
