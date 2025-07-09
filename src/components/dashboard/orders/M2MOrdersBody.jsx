import React from "react";
import { FaComments, FaCopy } from "react-icons/fa";
import { copyFunc } from "../../../utils/helpers";
import { Link } from "react-router-dom";

const M2MOrdersBody = ({ data }) => {
  console.log("data", data);

  return (
    <div className="w-full flex flex-col gap-7 lg:gap-5 ">
      <div className="hidden w-full lg:grid lg:grid-cols-6 h-max pb-2 text-[12px] border-b-[1px] border-b-titusLightBorder ">
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
          <div className="m-0 p-0">Counterparty</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Status</div>
        </div>
      </div>

      {data?.map((item, i) => (
        <div className="flex flex-col" key={i}>
          <Link
            to={`/dashboard/orders/m2m/order-details/${item.order_no}`}
            className="hidden w-full lg:grid grid-cols-2 lg:grid-cols-6 border-b-[#ffffff27] border-b-[0.1px] pb-2 gap-y-0 text-sm text-[#ccc]"
          >
            <div className="col-span-1 flex flex-col gap-1">
              <div className="text-sm flex gap-2 items-center">
                <span
                  className={
                    item?.order?.type === "Sell"
                      ? "text-red-300"
                      : "text-green-300"
                  }
                >
                  {item?.order?.type}
                </span>{" "}
                <span>{item?.order?.token?.symbol}</span>
              </div>
              <div className="text-[12px]">2025-02-24 07:47</div>
            </div>
            <div className="col-span-1 flex gap-3">
              <span className="text-sm">
                {item?.order_no.substr(0, 5)}...
                {item?.order_no.substr(item?.order_no.length - 5)}
              </span>
              <FaCopy
                onClick={() => copyFunc(item?.order_no, "order number copied!")}
                className="cursor-pointer text-[15px] text-titusText hover:text-titusGreenFaded duration-200 ease-in-out"
              />
            </div>
            <div className="col-span-1">
              {item.price} {item?.order?.currency?.ticker}
            </div>
            <div className="col-span-1 flex flex-col gap-1 text-[13px]">
              <span>
                {item?.order?.fiat_amount} {item?.order?.currency.ticker}
              </span>
              <span>
                {item?.order?.token_amount} {item?.order?.token?.currency}
              </span>
            </div>
            <div className="col-span-1 flex flex-col gap-1">
              <span>{item?.trade_partner?.username}</span>
              <Link
                to=""
                className="py-[2px] px-2 rounded-xl border-[1px] border-titusLightBorder flex items-center gap-2 h-max w-max hover:text-titusGreen"
              >
                <span className="text-[12px]">Chat</span>
                <FaComments />
              </Link>
            </div>

            <div className="col-span-1">
              <div className="">{item?.status}</div>
            </div>
          </Link>

          <Link
            to={`/dashboard/orders/m2m/order-details/${item.order_no}`}
            className="flex lg:hidden flex-col gap-3 border-b-[#ffffff27] border-b-[0.1px] pb-7 text-[13px]"
          >
            <div className="flex items-center justify-between">
              <div className="">
                <span
                  className={
                    item?.order?.type === "Sell"
                      ? "text-red-400"
                      : "text-green-400"
                  }
                >
                  {item?.order?.type}
                </span>{" "}
                <span className="text-white">
                  {item?.order?.token?.currency}
                </span>
              </div>
              <div className="">2025-02-24 07:47</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Order number</div>
              <div
                className="flex items-center gap-1 text-end"
                onClick={() => copyFunc(item?.order_no, "order number copied!")}
              >
                <span className="text-sm text-white">
                  {item?.order_no.substr(0, 8)}...
                  {item?.order_no.substr(item?.order_no.length - 8)}
                </span>
                <FaCopy className="cursor-pointer text-[15px]" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Price</div>
              <div className="flex text-end text-white">
                {item?.order?.price} {item?.order?.currency?.ticker}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Fiat Amount</div>
              <div className="flex flex-col items-end text-white">
                {item?.order?.fiat_amount} {item?.order?.currency.ticker}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Crypto Amount</div>
              <div className="flex flex-col items-end text-white">
                {item?.order?.token_amount} {item?.order?.token.symbol}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Counterparty</div>
              <div className="flex items-center gap-[6px] text-white">
                <span>{item?.trade_partner?.username}</span>
                <Link
                  to=""
                  className="py-[2px] px-2 rounded-xl border-[1px] border-titusLightBorder flex items-center gap-2 h-max w-max hover:text-titusGreen"
                >
                  <span className="text-[12px]">Chat</span>
                  <FaComments />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Status</div>
              <div className="flex text-end text-white">{item?.status}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default M2MOrdersBody;
