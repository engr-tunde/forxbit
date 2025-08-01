import React, { useEffect, useState } from "react";
import { useBuySellContext } from "../../context/buySellContext";
import CurrencyAssetDropdown from "../globals/trade/CurrencyAssetDropdown";
import {
  buySellTradeAssets,
  buySellTradeCurrencies,
} from "../../data/generalData";
import BuyExternalAddress from "./BuyExternalAddress";
import BuyTitusAddress from "./BuyTitusAddress";
import SellExternalAddress from "./SellExternalAddress";
import SelectTrade from "./SelectTrade";
import CurrencyAssetDropdownMini from "../globals/trade/CurrencyAssetDropdownMini";
import {
  CG_fetchBuySellTokens,
  useFetchChangeNow,
  useFetchChangeNowNoAuth,
} from "../../api/changeNow";
import Loader from "../globals/Loader";
import ErrorWidget from "../globals/ErrorWidget";
import BuySellRecipientType from "./BuySellRecipientType";
// import handleNextToScreenTwo from "./funcs";
// import { handleNextToScreenTwo } from "./funcs";

const BuySellPageOne = () => {
  const {
    setpage,
    errors,
    seterrors,
    type,
    token,
    settoken,
    currency,
    setcurrency,
    recipient,
    setrecipient,
    recipientAddress,
    setrecipientAddress,
    recipientNetwork,

    bank_name,
    account_name,
    account_number,
  } = useBuySellContext();
  const {
    data: tokens,
    loading: tokensLoading,
    error: tokensError,
  } = useFetchChangeNowNoAuth(`v2/fiat-currencies/crypto`);
  const {
    data: currencies,
    loading: currenciesLoading,
    error: currenciesError,
  } = useFetchChangeNowNoAuth(`v2/fiat-currencies/fiat`);

  const [disabled, setdisabled] = useState(true);

  useEffect(() => {
    if (token && currency) {
      if (
        type.toLowerCase() === "buy" &&
        recipient.toLowerCase() == "external"
      ) {
        if (recipientAddress.length && recipientNetwork.length) {
          setdisabled(false);
        } else {
          setdisabled(true);
        }
      } else if (
        type.toLowerCase() === "buy" &&
        recipient.toLowerCase() == import.meta.env.VITE_APP_NAME.toLowerCase()
      ) {
        if (recipientAddress.length) {
          setdisabled(false);
        } else {
          setdisabled(true);
        }
      } else if (
        type.toLowerCase() === "sell" &&
        recipient.toLowerCase() == "external"
      ) {
        if (bank_name && account_name && account_number) {
          setdisabled(false);
        } else {
          setdisabled(true);
        }
      } else if (
        type.toLowerCase() === "sell" &&
        recipient.toLowerCase() == import.meta.env.VITE_APP_NAME.toLowerCase()
      ) {
        if (recipientAddress.length) {
          setdisabled(false);
        } else {
          setdisabled(true);
        }
      }
    }
  }, [
    token,
    currency,
    type,
    recipient,
    recipientAddress,
    recipientNetwork,
    bank_name,
    account_name,
    account_number,
  ]);

  console.log("tokens", tokens);

  const handleNextToScreenTwo = () => {
    setpage(2);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 md:gap-2">
        <div className="text-sm md:text-md font-medium text-white">
          Select Trade Type
        </div>
        <SelectTrade />
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:items-center justify-between">
        <div className="w-full md:w-[45%] flex flex-col gap-3 md:gap-3">
          <div className="text-sm md:text-md font-medium text-white">
            Select Token
          </div>
          <div className="w-full relative border-[1px] border-titusLightBorder rounded-lg bg-titusDarkBG">
            {tokens && (
              <CurrencyAssetDropdownMini
                data={token}
                setdata={settoken}
                array={tokens}
                title="Select token"
                firstItem="Select token"
                type="asset"
              />
            )}
            {tokensLoading && <Loader color="#00dbc2" size={25} />}
            {tokensError && (
              <ErrorWidget
                color="#fff"
                error="Unable to fetch tokens"
                className="font-normal text-xs"
              />
            )}
            {errors?.token ? <div className="error">{errors.token}</div> : null}
          </div>
        </div>

        <div className="w-full md:w-[45%] flex flex-col gap-3 md:gap-3">
          <div className="text-sm md:text-md font-medium text-white md:text-end">
            Select Currency
          </div>
          <div className="w-full relative border-[1px] border-titusLightBorder rounded-lg bg-titusDarkBG">
            {currencies && (
              <CurrencyAssetDropdownMini
                data={currency}
                setdata={setcurrency}
                array={currencies}
                title="Select currency"
                firstItem="Select currency"
              />
            )}
            {currenciesLoading && <Loader color="#00dbc2" size={25} />}
            {currenciesError && (
              <ErrorWidget
                color="#fff"
                error="Unable to fetch currencies"
                className="font-normal text-xs text-end"
              />
            )}
            {errors?.token ? <div className="error">{errors.token}</div> : null}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:gap-1">
        <div className="text-sm md:text-md font-medium text-white">
          {type} To
        </div>
        <div className="flex items-center gap-5 md:gap-5">
          <BuySellRecipientType
            setrecipientAddressVal=""
            setrecipientVAl="External"
          />
          <BuySellRecipientType
            setrecipientAddressVal=""
            setrecipientVAl={import.meta.env.VITE_APP_NAME}
          />
        </div>

        {type === "Buy" && recipient === "External" && <BuyExternalAddress />}

        {type === "Buy" && recipient === `${import.meta.env.VITE_APP_NAME}` && (
          <BuyTitusAddress />
        )}

        {type === "Sell" && recipient === `External` && <SellExternalAddress />}
        {type === "Sell" &&
          recipient === `${import.meta.env.VITE_APP_NAME}` && (
            <BuyTitusAddress />
          )}
      </div>
      <button
        disabled={disabled}
        className={
          !disabled
            ? "btnn1 py-[6px] px-8 text-center"
            : "btnn1 py-[6px] px-8 text-center opacity-50"
        }
        onClick={handleNextToScreenTwo}
      >
        Next
      </button>
    </div>
  );
};

export default BuySellPageOne;
