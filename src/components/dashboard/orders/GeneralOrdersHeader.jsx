import React from "react";
import { m2mTradeAssets, m2mTradeCurrencies } from "../../../utils/data";
import CurrencyAssetDropdown from "../../globals/trade/CurrencyAssetDropdown";
import StringDropdown from "../../globals/trade/StringDropdown";
import Search from "../../globals/trade/Search";
import { fetchCurrencies, fetchP2PTokenList } from "../../../api";

const GeneralOrdersHeader = ({ componentData }) => {
  const {
    asset = null,
    setasset = null,
    currency = null,
    setcurrency = null,
    type,
    settype,
    status,
    setstatus,
    t_id,
    sett_id,
    title,
    typeArr = null,
    statusArr = null,
  } = componentData;

  const handleReset = () => {
    asset && setasset({});
    currency && setcurrency({});
    typeArr && settype("");
    statusArr && setstatus("");
    sett_id("");
  };

  const { tokens, tokensLoading, tokensError } = fetchP2PTokenList();
  console.log("tokens", tokens);
  const { currencies, currenciesLoading, currenciesError } = fetchCurrencies();
  console.log("currencies", currencies);

  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl font-semibold text-white">{title}</div>
      <div className="flex items-center flex-wrap gap-3 md:gap-6">
        {typeArr && (
          <div className="w-[48%] md:w-[17%] relative h-full">
            <StringDropdown
              array={typeArr}
              data={type}
              setdata={settype}
              title="Type"
              firstItem="All"
            />
          </div>
        )}

        {asset && tokens && (
          <div className="w-[48%] md:w-[17%] relative h-full">
            <CurrencyAssetDropdown
              array={tokens?.data}
              data={asset}
              setdata={setasset}
              title="Asset"
              firstItem="All coins"
              type="asset"
            />
          </div>
        )}

        {currency && currencies && (
          <div className="w-[48%] md:w-[17%] relative h-full">
            <CurrencyAssetDropdown
              array={currencies?.data}
              data={currency}
              setdata={setcurrency}
              title="Currency"
              firstItem="All"
              type="currency"
            />
          </div>
        )}

        {statusArr && (
          <div className="w-[48%] md:w-[17%] relative h-full">
            <StringDropdown
              array={statusArr}
              data={status}
              setdata={setstatus}
              title="Status"
              firstItem="All"
            />
          </div>
        )}

        <div className="w-[48%] md:w-[23%] relative h-full">
          <Search
            value={t_id}
            setValue={sett_id}
            placeholder="Enter transaction id"
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

export default GeneralOrdersHeader;
