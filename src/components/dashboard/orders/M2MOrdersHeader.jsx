import React from "react";
import { m2mTradeAssets, m2mTradeCurrencies } from "../../../utils/data";
import CurrencyAssetDropdown from "../../globals/trade/CurrencyAssetDropdown";
import StringDropdown from "../../globals/trade/StringDropdown";
import Search from "../../globals/trade/Search";
import { fetchCurrencies, fetchP2PTokenList } from "../../../api";

const M2MOrdersHeader = ({ componentData }) => {
  const {
    orderState,
    setorderState,
    paymentStatus,
    setpaymentStatus,

    asset,
    setasset,
    currency,
    setcurrency,
    type,
    settype,
    ordernumber,
    setordernumber,
  } = componentData;

  const { currencies, currenciesLoading, currenciesError } = fetchCurrencies();
  const { tokens, tokensLoading, tokensError } = fetchP2PTokenList();

  const handleReset = () => {
    // setorderState("processing");
    // setpaymentStatus("All");
    setasset({});
    setcurrency({});
    settype("");
    setordernumber("");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl font-semibold text-white">
        {import.meta.env.VITE_P2P_NAME} Orders
      </div>

      <div className="flex items-center gap-5">
        <div
          className={
            orderState === "processing"
              ? "text-white font-semibold cursor-pointer pb-1 border-b-2 border-b-titusGreen rounded-b-md duration-200 ease-in"
              : "font-semibold cursor-pointer pb-1 duration-200 ease-in"
          }
          onClick={() => setorderState("processing")}
        >
          Processing
        </div>
        <div
          className={
            orderState === "All Orders"
              ? "text-white font-semibold cursor-pointer pb-1 border-b-2 border-b-titusGreen rounded-b-md duration-200 ease-in"
              : "font-semibold cursor-pointer pb-1 duration-200 ease-in"
          }
          onClick={() => setorderState("All Orders")}
        >
          Closed Orders
        </div>
      </div>

      {orderState === "processing" ? (
        <div className="w-full lg:w-max rounded-lg flex items-center flex-row flex-wrap gap-4 gap-y-2 p-[6px] border-[1px] border-titusLightBorder">
          <div
            className={
              paymentStatus === "All"
                ? "w-24 text-center text-white bg-titusChatBg py-[6px] text-sm cursor-pointer rounded-md"
                : "w-24 text-center py-[6px] text-sm cursor-pointer hover:bg-titusChatBg hover:rounded-md hover:text-white duration-200 ease-in"
            }
            onClick={() => setpaymentStatus("All")}
          >
            All
          </div>
          <div
            className={
              paymentStatus === "unpaid"
                ? "w-24 text-center text-white bg-titusChatBg py-[6px] text-sm cursor-pointer rounded-md"
                : "w-24 text-center py-[6px] text-sm cursor-pointer hover:bg-titusChatBg hover:rounded-md hover:text-white duration-200 ease-in"
            }
            onClick={() => setpaymentStatus("unpaid")}
          >
            Unpaid
          </div>
          <div
            className={
              paymentStatus === "paid"
                ? "w-24 text-center text-white bg-titusChatBg py-[6px] text-sm cursor-pointer rounded-md"
                : "w-24 text-center py-[6px] text-sm cursor-pointer hover:bg-titusChatBg hover:rounded-md hover:text-white duration-200 ease-in"
            }
            onClick={() => setpaymentStatus("paid")}
          >
            Paid
          </div>
          <div
            className={
              paymentStatus === "appealing"
                ? "w-40 text-center text-white bg-titusChatBg py-[6px] text-sm cursor-pointer rounded-md"
                : "w-40 text-center py-[6px] text-sm cursor-pointer hover:bg-titusChatBg hover:rounded-md hover:text-white duration-200 ease-in"
            }
            onClick={() => setpaymentStatus("appealing")}
          >
            Appeal in Progress
          </div>
        </div>
      ) : (
        <div className="w-full lg:w-max rounded-lg flex flex-wrap items-center gap-4 p-[6px] border-[1px] border-titusLightBorder">
          <div
            className={
              paymentStatus === "All"
                ? "w-24 text-center text-white bg-titusChatBg py-[6px] text-sm cursor-pointer rounded-md"
                : "w-24 text-center py-[6px] text-sm cursor-pointer hover:bg-titusChatBg hover:rounded-md hover:text-white duration-200 ease-in"
            }
            onClick={() => setpaymentStatus("All")}
          >
            All
          </div>
          <div
            className={
              paymentStatus === "completed"
                ? "w-24 text-center text-white bg-titusChatBg py-[6px] text-sm cursor-pointer rounded-md"
                : "w-24 text-center py-[6px] text-sm cursor-pointer hover:bg-titusChatBg hover:rounded-md hover:text-white duration-200 ease-in"
            }
            onClick={() => setpaymentStatus("completed")}
          >
            Completed
          </div>
          <div
            className={
              paymentStatus === "cancelled"
                ? "w-24 text-center text-white bg-titusChatBg py-[6px] text-sm cursor-pointer rounded-md"
                : "w-24 text-center py-[6px] text-sm cursor-pointer hover:bg-titusChatBg hover:rounded-md hover:text-white duration-200 ease-in"
            }
            onClick={() => setpaymentStatus("cancelled")}
          >
            Cancelled
          </div>
        </div>
      )}

      <div className="flex items-center flex-wrap gap-3 lg:gap-6">
        <div className="w-[48%] md:w-[17%] relative h-full">
          {tokens ? (
            <CurrencyAssetDropdown
              array={tokens?.data}
              data={asset}
              setdata={setasset}
              title="Assets"
              firstItem="All"
              type="asset"
            />
          ) : null}
        </div>

        <div className="w-[48%] md:w-[17%] relative h-full">
          {currencies ? (
            <CurrencyAssetDropdown
              array={currencies?.data}
              data={currency}
              setdata={setcurrency}
              title="Currency"
              firstItem="All"
              type="currency"
            />
          ) : null}
        </div>

        <div className="w-[48%] md:w-[17%] relative h-full">
          <StringDropdown
            array={["Buy", "Sell"]}
            data={type}
            setdata={settype}
            title="Type"
            firstItem="All"
          />
        </div>

        <div className="w-[48%] md:w-[23%] relative h-full">
          <Search
            value={ordernumber}
            setValue={setordernumber}
            placeholder="Enter order no"
          />
        </div>
        <div
          className="cursor-pointer text-titusYellow text-sm btnn-yellow py-1 px-4"
          onClick={handleReset}
        >
          Reset
        </div>
      </div>
    </div>
  );
};

export default M2MOrdersHeader;
