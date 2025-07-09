import { FaCopy } from "react-icons/fa";
import { copyFunc, dateTimeFormatter } from "../../../utils/helpers";
import { Link } from "react-router-dom";

const TransactionHisBody = ({ data }) => {
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
          <div className="m-0 p-0">Counterparty</div>
        </div>
        <div className="col-span-1">
          <div className="m-0 p-0">Asset</div>
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

      {data?.map((item, i) => (
        <div className="flex flex-col" key={i}>
          <Link
            to={`/dashboard/orders/transaction-history/${item?.t_id}`}
            className="hidden w-full lg:grid lg:grid-cols-7 border-b-[#ffffff27] border-b-[0.1px] pb-7 lg:pb-4 gap-y-0 text-sm text-[#ccc]"
          >
            <div className="col-span-1 flex flex-col gap-2">
              <div className="text-[12px]">
                {dateTimeFormatter(item?.createdAt).substring(4)}
              </div>
            </div>
            <div
              className={
                item?.type.toLowerCase() === "deposit" ||
                item?.type.toLowerCase() === "receive"
                  ? "col-span-1 text-green-300"
                  : "col-span-1 text-red-300"
              }
            >
              {item?.type}
            </div>
            <div className="col-span-1 flex gap-2">
              <span className="text-sm">
                {item?.counterparty.substr(0, 5)}...
                {item?.counterparty.substr(item?.counterparty.length - 5)}
              </span>
              <FaCopy
                onClick={() =>
                  copyFunc(item.counterparty, "counterparty copied!")
                }
                className="cursor-pointer text-[15px] text-titusText"
              />
            </div>
            <div className="col-span-1">{item?.asset}</div>
            <div className="col-span-1">
              {item?.amount} {item?.asset}
            </div>
            <div className="col-span-1 flex gap-2">
              <span className="text-sm">
                {item?.t_id.substr(0, 5)}...
                {item?.t_id.substr(item?.t_id.length - 5)}
              </span>
              <FaCopy
                onClick={() => copyFunc(item?.t_id, "transaction id copied!")}
                className="cursor-pointer text-[15px] text-titusText"
              />
            </div>

            <div className="col-span-1">
              <div className="">{item?.status}</div>
            </div>
          </Link>

          <Link
            to={`/dashboard/orders/transaction-history/${item?.t_id}`}
            className="flex lg:hidden flex-col gap-3 border-b-[#ffffff27] border-b-[0.1px] pb-7 text-[13px]"
          >
            <div className="flex items-center justify-between">
              <div className="">
                <span className="text-white">{item?.asset}</span>{" "}
                <span
                  className={
                    item?.type.toLowerCase() === "deposit" ||
                    item?.type.toLowerCase() === "receive"
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  {item?.type}
                </span>
              </div>
              <div className="">2025-02-24 07:47</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Counterparty</div>
              <div
                className="flex items-center gap-1 text-end"
                onClick={() =>
                  copyFunc(item.counterparty, "counterparty copied!")
                }
              >
                <span className="text-sm text-white">
                  {item?.counterparty.substr(0, 5)}...
                  {item?.counterparty.substr(item?.counterparty.length - 5)}
                </span>
                <FaCopy className="cursor-pointer text-[15px]" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Amount</div>
              <div className="flex flex-col items-end text-white">
                {item?.amount} {item?.asset}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-[12px]">Transaction ID</div>
              <div
                className="flex items-center gap-1 text-end"
                onClick={() => copyFunc(item.t_id, "transaction id copied!")}
              >
                <span className="text-sm text-white">
                  {item?.t_id.substr(0, 5)}...
                  {item?.t_id.substr(item?.t_id.length - 5)}
                </span>
                <FaCopy className="cursor-pointer text-[15px]" />
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

export default TransactionHisBody;
