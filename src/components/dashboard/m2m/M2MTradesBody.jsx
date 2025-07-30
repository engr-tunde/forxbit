import { FaCopy } from "react-icons/fa";
import { copyFunc, dateFormatter } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";

const M2MTradesBody = ({ data }) => {
  const history = useNavigate();

  const handlePopulate = (item) => {
    history("/dashboard/m2m/create-trade", {
      state: {
        editOrderData: item,
      },
    });
  };
  return (
    <div className="w-full flex flex-col gap-7 lg:gap-7 ">
      <div className="hidden w-full lg:grid lg:grid-cols-5 h-max pb-2 text-[12px] border-b-[1px] border-b-titusLightBorder ">
        <div className="col-span-1">
          <div className="">Type/Date</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Order number</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Price</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Fiat / Crypto Amount</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Status</div>
        </div>
      </div>

      {data?.map((item, i) => (
        <div className="flex flex-col " key={i}>
          <div className=" hidden w-full lg:grid grid-cols-2 lg:grid-cols-5 border-b-[#ffffff27] border-b-[0.1px] pb-7 lg:pb-4 gap-y-0 text-sm text-[#ccc]">
            <div className="col-span-1 flex flex-col gap-1">
              <div className="text-sm flex gap-2 items-center">
                <div
                  className={
                    item.order.type === "Sell"
                      ? "text-red-300"
                      : "text-green-300"
                  }
                >
                  {item.order.type}
                </div>{" "}
                <div className="relative">
                  {item.order.token.ticker}{" "}
                  <div
                    onClick={() => handlePopulate(item)}
                    className={
                      item.status.toLowerCase() == "open"
                        ? "absolute -top-[14px] -right-8 bg-blue-400 text-white px-1 py-[2px] rounded-md text-xs cursor-pointer hover:opacity-80"
                        : "hidden"
                    }
                  >
                    Edit
                  </div>
                </div>
              </div>
              <div className="text-[12px]">{dateFormatter(item.createdAt)}</div>
            </div>
            <div className="col-span-1 flex gap-2">
              <span className="text-sm">
                {" "}
                {item.t_id.substr(0, 5)}...
                {item.t_id.substr(item.t_id.length - 5)}
              </span>
              <FaCopy
                onClick={() => copyFunc(item.t_id, "order number copied!")}
                className="cursor-pointer text-[15px] text-titusText"
              />
            </div>
            <div className="col-span-1">
              {item.order.price} {item.order.currency.ticker}
            </div>
            <div className="col-span-1 flex flex-col gap-1 text-[13px]">
              <span>
                {item.order.fiat_amount} {item.order.currency.ticker}
              </span>
              <span>
                {item.order.token_amount} {item.order.token.symbol}
              </span>
            </div>

            <div className="col-span-1">
              <div
                className={
                  item.status.toLowerCase() === "open"
                    ? "text-blue-400"
                    : "text-green"
                }
              >
                {item.status}
              </div>
            </div>
          </div>

          <div className="flex lg:hidden flex-col gap-3 border-b-[#ffffff27] border-b-[0.1px] pb-7 text-[13px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                <div
                  className={
                    item.order.type === "Sell"
                      ? "text-red-400 relative"
                      : "text-green-400 relative"
                  }
                >
                  {item.order.type}{" "}
                </div>{" "}
                <div className="text-white relative">
                  {item.order.token.ticker}{" "}
                  <div
                    onClick={() => handlePopulate(item)}
                    className={
                      item.status.toLowerCase() == "open"
                        ? "absolute -top-[14px] -right-8 bg-blue-400 text-white px-1 py-[2px] rounded-md text-xs cursor-pointer hover:opacity-80"
                        : "hidden"
                    }
                  >
                    Edit
                  </div>
                </div>
              </div>
              <div className="">{dateFormatter(item.createdAt)}</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Order number</div>
              <div
                className="flex items-center gap-1 text-end"
                onClick={() => copyFunc(item.t_id, "order number copied!")}
              >
                <span className="text-sm text-white">
                  {item.t_id.substr(0, 5)}...
                  {item.t_id.substr(item.t_id.length - 5)}
                </span>
                <FaCopy className="cursor-pointer text-[15px]" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Price</div>
              <div className="flex text-end text-white">
                {item.order.price} {item.order.currency.ticker}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Fiat Amount</div>
              <div className="flex flex-col items-end text-white">
                {item.order.fiat_amount} {item.order.currency.ticker}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Crypto Amount</div>
              <div className="flex flex-col items-end text-white">
                {item.order.token_amount} {item.order.token.symbol}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Status</div>
              <div
                className={
                  item.status.toLowerCase() === "open"
                    ? "flex text-end text-blue-500"
                    : "flex text-end text-green"
                }
              >
                {item.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default M2MTradesBody;
