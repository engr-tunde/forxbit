import React from "react";
import { FaCopy } from "react-icons/fa";
import { copyFunc } from "../../../utils/helpers";

const FiatOrdersBody = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-7 lg:gap-7 ">
      <div className="hidden w-full lg:grid lg:grid-cols-7 h-max pb-2 text-[12px] border-b-[1px] border-b-titusLightBorder">
        <div className="col-span-1">
          <div className="">Date</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Type</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Receiver</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Currency</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Amount</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Tx ID</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Status</div>
        </div>
      </div>

      {data.map((item, i) => (
        <div className="flex flex-col" key={i}>
          <div className="hidden w-full lg:grid lg:grid-cols-7 border-b-[#ffffff27] border-b-[0.1px] pb-7 lg:pb-4 gap-y-0 text-sm text-[#ccc]">
            <div className="col-span-1 flex flex-col gap-2">
              <div className="text-[12px]">2025-02-24 07:47</div>
            </div>
            <div
              className={
                item.type.toLowerCase() === "deposit"
                  ? "col-span-1 text-green-300"
                  : "col-span-1 text-red-300"
              }
            >
              {item.type}
            </div>
            <div className="col-span-1 flex items-center gap-1 text-end">
              {item.receiver === "Self" ? (
                <span className="">{item.receiver}</span>
              ) : (
                <div
                  className="flex flex-col items-start gap-1 cursor-pointer"
                  onClick={() =>
                    copyFunc(
                      `Account name: ${item.receiver.account_name}\n Bank name: ${item.receiver.bank_name}\n Account number: ${item.receiver.account_number}
                      `,
                      "account details copied!"
                    )
                  }
                >
                  <div className="">{item.receiver.account_name}</div>
                  <div className="flex items-center gap-1">
                    <span className="">
                      {item.receiver.bank_name?.substr(0, 8)}...
                    </span>
                    <span className="">
                      ({item.receiver.account_number.toString().substr(0, 5)}
                      ...)
                    </span>
                    <FaCopy className="text-[15px]" />
                  </div>
                </div>
              )}
            </div>
            <div className="col-span-1">{item.currency.ticker}</div>
            <div className="col-span-1">
              {item.amount} {item.currency.ticker}
            </div>
            <div className="col-span-1 flex gap-2">
              <span className="text-sm">{item.t_id}</span>
              <FaCopy
                onClick={() => copyFunc(item.t_id, "transaction id copied!")}
                className="cursor-pointer text-[15px] text-titusText"
              />
            </div>

            <div className="col-span-1">
              <div className="">{item.status}</div>
            </div>
          </div>

          <div className="flex lg:hidden flex-col gap-4 border-b-[#ffffff27] border-b-[0.1px] pb-7 text-[13px]">
            <div className="flex items-center justify-between">
              <div className="">
                <span className="text-white">{item.currency.ticker}</span>{" "}
                <span
                  className={
                    item.type === "Withdrawal"
                      ? "text-red-400"
                      : "text-green-400"
                  }
                >
                  {item.type}
                </span>
              </div>
              <div className="">2025-02-24 07:47</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Amount</div>
              <div className="flex flex-col items-end text-white">
                {item.amount} {item.currency.ticker}
              </div>
            </div>

            {item.receiver === "Self" ? (
              <div className="flex items-center justify-between">
                <div className="text-[12px]">Receiver</div>
                <div className="flex flex-col items-end text-white">
                  {item.receiver}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div className="text-[12px]">Account Name</div>
                  <div
                    className="flex items-center gap-1 text-end"
                    onClick={() =>
                      copyFunc(
                        item.receiver.account_name,
                        "account name copied!"
                      )
                    }
                  >
                    <span className="text-sm text-white">
                      {item.receiver.account_name.substr(0, 10)}...
                    </span>
                    <FaCopy className="cursor-pointer text-[15px]" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[12px]">Bank Name</div>
                  <div
                    className="flex items-center gap-1 text-end"
                    onClick={() =>
                      copyFunc(item.receiver.bank_name, "bank name copied!")
                    }
                  >
                    <span className="text-sm text-white">
                      {item.receiver.bank_name.substr(0, 10)}...
                    </span>
                    <FaCopy className="cursor-pointer text-[15px]" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-[12px]">Account Number</div>
                  <div
                    className="flex items-center gap-1 text-end"
                    onClick={() =>
                      copyFunc(
                        item.receiver.account_number,
                        "account number copied!"
                      )
                    }
                  >
                    <span className="text-sm text-white">
                      {item.receiver.account_number.toString().substr(0, 10)}...
                    </span>
                    <FaCopy className="cursor-pointer text-[15px]" />
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Transaction ID</div>
              <div
                className="flex items-center gap-1 text-end"
                onClick={() => copyFunc(item.t_id, "transaction id copied!")}
              >
                <span className="text-sm text-white">
                  {item.t_id.substr(0, 5)}...
                  {item.t_id.substr(item.t_id.length - 5)}
                </span>
                <FaCopy className="cursor-pointer text-[15px]" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Status</div>
              <div className="flex text-end text-white">{item.status}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FiatOrdersBody;
