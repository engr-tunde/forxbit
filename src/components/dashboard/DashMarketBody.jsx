import { FaCopy } from "react-icons/fa";
import { formatter, toDecimal } from "../../utils/helpers";
// import { copyFunc, dateTimeFormatter } from "../../../utils/helpers";

const DashMarketBody = ({ data }) => {
  console.log("data", data);
  return (
    <div className="w-full flex flex-col gap-7 lg:gap-7 ">
      <div className="w-full grid grid-cols-7 md:grid-cols-12 h-max pb-2 md:px-10 text-[12px] border-b-[1px] border-b-titusLightBorder">
        <div className="col-span-1">
          <div className="">#</div>
        </div>
        <div className="col-span-2 md:col-span-4">
          <div className="m-0 p-0">Name</div>
        </div>
        <div className="col-span-3">
          <div className="m-0 p-0">Price</div>
        </div>
        <div className="hidden lg:block col-span-3">
          <div className="m-0 p-0">Volume</div>
        </div>
        <div className="col-span-1  text-end">
          <div className="m-0 p-0">24h</div>
        </div>
      </div>

      {data &&
        data?.slice(0, 4)?.map((item, i) => (
          <div className="flex flex-col" key={i}>
            <div className="w-full grid grid-cols-7 md:grid-cols-12 border-b-[#ffffff27] border-b-[0.1px] md:px-10 pb-7 lg:pb-4 gap-y-0 text-sm text-[#ccc]">
              <div className="col-span-1 flex flex-col gap-2">
                {item?.market_cap_rank}
              </div>
              <div className="col-span-2 md:col-span-4 flex items-center gap-2">
                <img src={item?.image} alt="" className="w-5 h-5" />
                <div className="flex items-end gap-1">
                  <span className="hidden md:inline text-white">
                    {item?.name}
                  </span>
                  <span className="uppercase text-xs">{item?.symbol}</span>
                </div>
              </div>
              <div className="col-span-3">
                ${item?.usd && toDecimal(item?.usd, 8)}
              </div>
              <div className="hidden md:block col-span-3">
                {formatter(item?.usd_24h_vol, 2)}
              </div>
              <div
                className={
                  item?.usd_24h_change > 0
                    ? "col-span-1 text-end text-green-400"
                    : "col-span-1 text-end text-red-400"
                }
              >
                {item?.usd_24h_change > 0 ? "+" : ""}
                {item?.usd_24h_change && toDecimal(item?.usd_24h_change, 2)}%
              </div>
            </div>

            {/* <div className="flex lg:hidden flex-col gap-3 border-b-[#ffffff27] border-b-[0.1px] pb-7 text-[13px]">
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
          </div> */}
          </div>
        ))}
    </div>
  );
};

export default DashMarketBody;
