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

  const handleNextToScreenTwo = () => {
    // seterrors({});
    if (
      type === "Buy" &&
      recipient === "External" &&
      token &&
      currency &&
      recipientAddress.length &&
      recipientNetwork.length
    ) {
      if (recipientAddress.length < 1) {
        seterrors((prev) => ({
          ...prev,
          address: `Where will you receive the coin to?`,
        }));
      } else {
        delete errors["address"];
        if (recipientNetwork.length < 1) {
          seterrors((prev) => ({
            ...prev,
            network: `Select your chain network?`,
          }));
        } else {
          delete errors["network"];
          setpage(2);
        }
      }
    } else if (
      type === "Buy" &&
      recipient === `${import.meta.env.VITE_APP_NAME}`
    ) {
      if (recipientAddress.length < 1) {
        seterrors((prev) => ({
          ...prev,
          connect: `Connect your account first`,
        }));
      } else {
        delete errors["connect"];
        setpage(2);
      }
    } else if (type === "Sell" && recipient === "External") {
      if (bank_name.length < 1) {
        seterrors((prev) => ({
          ...prev,
          bank_name: `Bank name is missing!`,
        }));
      } else {
        delete errors["bank_name"];
        if (account_name.length < 1) {
          seterrors((prev) => ({
            ...prev,
            account_name: `Account name is not provided!`,
          }));
        } else {
          delete errors["account_name"];
          if (account_number.length < 1) {
            seterrors((prev) => ({
              ...prev,
              account_number: `Account number is missing!`,
            }));
          } else {
            delete errors["account_number"];
            setpage(2);
          }
        }
      }
    } else if (
      type === "Sell" &&
      recipient === `${import.meta.env.VITE_APP_NAME}`
    ) {
      if (recipientAddress.length < 1) {
        seterrors((prev) => ({
          ...prev,
          connect: `Connect your account first`,
        }));
      } else {
        delete errors["connect"];
        setpage(2);
      }
    }
  };

  (function () {
    if (token) {
      delete errors["token"];
    }

    if (type === "Buy" && recipient === "External") {
      if (recipientAddress.length > 0) {
        delete errors["address"];
      }
      if (recipientNetwork.length > 0) {
        delete errors["network"];
      }
    } else if (
      type === "Buy" &&
      recipient === `${import.meta.env.VITE_APP_NAME}`
    ) {
      if (recipientAddress.length > 0) {
        delete errors["connect"];
      }
    } else if (type === "Sell" && recipient === "External") {
      if (bank_name.length > 0) {
        delete errors["bank_name"];
      }
      if (account_name.length > 0) {
        delete errors["account_name"];
      }
      if (account_number.length > 0) {
        delete errors["account_number"];
      }
    } else if (
      type === "Sell" &&
      recipient === `${import.meta.env.VITE_APP_NAME}`
    ) {
      if (recipientAddress.length > 0) {
        delete errors["connect"];
      }
    }
  })();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3 md:gap-2">
        <div className="text-sm md:text-md font-medium text-white">
          Select Trade Type
        </div>
        <SelectTrade />
      </div>

      <div className="flex flex-col gap-8 md:flex-row md:items-center justify-between">
        <div className="w-[70%] md:w-[45%] flex flex-col gap-3 md:gap-3">
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

        <div className="w-[70%] md:w-[45%] flex flex-col gap-3 md:gap-3">
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
          {/* {type === "Buy" ? "Buy To" : "Sell From"} */}
          {type} To
        </div>
        <div className="flex items-center gap-5 md:gap-5">
          <div
            className={
              recipient === "External"
                ? "border-b-[2px] border-b-titusYellow rounded-md text-white text-[13px] font-medium cursor-pointer duration-200 ease-in"
                : "py-[6px] text-sm font-medium cursor-pointer duration-200 ease-in"
            }
            onClick={() => {
              setrecipientAddress("");
              setrecipient("External");
            }}
          >
            {type === "Buy" ? "External Address" : "External Account"}
          </div>
          <div
            className={
              recipient === `${import.meta.env.VITE_APP_NAME}`
                ? "border-b-[2px] border-b-titusYellow rounded-md text-white text-[13px] font-medium cursor-pointer duration-200 ease-in"
                : "py-[6px] text-sm font-medium cursor-pointer duration-200 ease-in"
            }
            onClick={() => setrecipient(`${import.meta.env.VITE_APP_NAME}`)}
          >
            {type === "Buy"
              ? `${import.meta.env.VITE_APP_NAME} Address`
              : `${import.meta.env.VITE_APP_NAME} Account`}
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
      <div
        className={
          token &&
          currency &&
          recipientAddress.length &&
          recipientNetwork.length
            ? "btnn1 py-[6px] px-8 text-center"
            : "btnn1 py-[6px] px-8 text-center opacity-50"
        }
        onClick={handleNextToScreenTwo}
      >
        Next
      </div>
    </div>
  );
};

export default BuySellPageOne;
