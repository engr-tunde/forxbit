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
import BuyCurrencyAssetDropdown from "./BuyAssetDropdown";
import BuyAssetDropdown from "./BuyAssetDropdown";
import BuyCurrencyDropdown from "./BuyCurrencyDropdown";
import BuyNetworkDropdown from "./BuyNetworkDropdown";
// import handleNextToScreenTwo from "./funcs";
// import { handleNextToScreenTwo } from "./funcs";

const BuySellPageOne = () => {
  const {
    setpage,
    errors,
    type,
    token,
    currency,
    recipient,
    recipientAddress,
    recipientNetwork,
    networks,
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
        if (recipientAddress && recipientNetwork) {
          setdisabled(false);
        } else {
          setdisabled(true);
        }
      } else if (
        type.toLowerCase() === "buy" &&
        recipient.toLowerCase() == import.meta.env.VITE_APP_NAME.toLowerCase()
      ) {
        if (recipientAddress) {
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

  const handleNextToScreenTwo = () => {
    setpage(2);
  };

  return (
    <div className="w-full md:w-[80%] mx-auto flex flex-col gap-8">
      <div className="mb-1">
        <SelectTrade />
      </div>

      <div className="w-full mx-auto flex flex-col gap-4 justify-between">
        <div className="w-full flex flex-col gap-3 md:gap-3">
          {tokens && <BuyAssetDropdown array={tokens} />}
          {tokensError && (
            <ErrorWidget
              color="#fff"
              error="Unable to fetch tokens"
              className="font-normal text-xs"
            />
          )}
          {errors?.token ? <div className="error">{errors.token}</div> : null}
        </div>
        <div className="w-full flex flex-col gap-3 md:gap-3">
          {currencies && <BuyCurrencyDropdown array={currencies} />}

          {currenciesError && (
            <ErrorWidget
              color="#fff"
              error="Unable to fetch currencies"
              className="font-normal text-xs text-end"
            />
          )}
          {errors?.currency ? (
            <div className="error">{errors.currency}</div>
          ) : null}
        </div>

        <div className="w-full flex flex-col gap-3 md:gap-3">
          {networks && <BuyNetworkDropdown />}
        </div>
      </div>
      {currenciesLoading || tokensLoading ? (
        <Loader color="#00dbc2" size={25} />
      ) : null}

      <div className="w-full flex flex-col gap-3 md:gap-1 ">
        <div className="flex gap-5 items-center">
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
        className={`btnn1 py-3 px-8 text-center ${disabled && "opacity-50"}`}
        onClick={handleNextToScreenTwo}
      >
        Next
      </button>
    </div>
  );
};

export default BuySellPageOne;
