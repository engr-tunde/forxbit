import React, { useEffect, useState } from "react";
import { useBuySellContext } from "../../context/buySellContext";
import BuySellTokenField from "./BuySellTokenField";
import BuySellCurrencyField from "./BuySellCurrencyField";
import BuySellTokenBalance from "./BuySellTokenBalance";
import { successNotification } from "../../utils/helpers";
import { changeNowFetcher, changeNowFetcherNoAuth } from "../../api/changeNow";

const BuySellPageTwo = () => {
  const {
    setpage,
    errors,
    type,
    token,
    currency,
    fiat_amount,
    token_amount,
    recipientAddress,
    recipientNetwork,
    recipient,
    bank_name,
    account_name,
    account_number,
  } = useBuySellContext();

  const [min, setmin] = useState();
  const [max, setmax] = useState();

  const handleCompleteTrade = () => {
    successNotification("All good!");
    const payload = {
      token,
      currency,
      fiat_amount,
      token_amount,
      type,
      recipient,
      recipientAddress,
      recipientNetwork,
      bank_name,
      account_name,
      account_number,
    };
  };

  // Verify token minimum amount
  useEffect(() => {
    if (type == "Buy") {
      if (token && currency && fiat_amount) {
        const runFunc = async () => {
          const resss = await changeNowFetcherNoAuth(
            `v2/fiat-market-info/min-max-range/${currency?.ticker?.toLowerCase()}_${token?.ticker?.toLowerCase()}-${recipientNetwork?.toLowerCase()}`
          );
          let minAmnt;
          let maxAmnt;
          if (resss) {
            minAmnt = resss.min;
            setmin(minAmnt);
            maxAmnt = resss.max;
            setmax(maxAmnt);
          }
          console.log("minimum amount check response", resss);
        };
        runFunc();
      }
    }
  }, [fiat_amount]);

  // Generate to-token-amount
  // useEffect(() => {
  //   if (from_token_amount && !errors.from_token_amount) {
  //     const runFuncti = async () => {
  //       const toAmount = await changeNowFetcherNoAuth(
  //         `v2/exchange/estimated-amount?fromCurrency=${from_token?.ticker}&toCurrency=${to_token?.ticker}&fromAmount=${from_token_amount}&toAmount=&fromNetwork=${from_token?.network}&toNetwork=${to_token?.network}&flow=fixed-rate`
  //       );
  //       console.log("toAmnt newRes", toAmount);
  //       if (toAmount) {
  //         const toAmnt = toAmount?.toAmount;
  //         setto_token_amount(toAmnt);
  //       }
  //     };
  //     runFuncti();
  //   }
  // }, [from_token, to_token, from_token_amount]);

  const handleTrade = () => {
    if (token_amount > 0 || fiat_amount > 0) {
      handleCompleteTrade();
      // if (fiat_amount < 1) {
      //   if (token_amount < 1) {
      //     seterrors((prev) => ({
      //       ...prev,
      //       fiat_amount: `How much in ${currency.ticker.toUpperCase()} are you ${type}ing?`,
      //     }));
      //     delete errors["fiat_amount"];
      //   }
      // } else if (token_amount < 1) {
      //   if (fiat_amount < 1) {
      //     seterrors((prev) => ({
      //       ...prev,
      //       token_amount: `How much ${token.ticker.toUpperCase()} are you ${type}ing?`,
      //     }));
      //   }
      // } else {
      //   delete errors["token_amount"];
      //   handleCompleteTrade();
      // }
    }
  };

  // let ta;
  (function () {
    if (type == "Buy") {
      if (fiat_amount < Number(min)) {
        errors.fiat_amount = `Amount too low. Go higher! Minimum amount is ${min}`;
      } else if (Number(fiat_amount) > Number(max)) {
        errors.fiat_amount = `Amount too high. Go lower! Maximum amount is ${max}`;
      } else {
        delete errors["fiat_amount"];
      }
    }
  })();

  console.log("errors", errors);

  return (
    <div className="flex flex-col gap-8">
      {type === "Buy" ? (
        <>
          <div className="w-full flex flex-col gap-3 md:gap-3">
            <div className="text-sm md:text-md font-medium text-white">
              You pay
            </div>

            <div className="">
              <BuySellCurrencyField />
              {errors?.fiat_amount ? (
                <div className="error">{errors.fiat_amount}</div>
              ) : null}
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 md:gap-2">
            <div className="text-sm md:text-md font-medium text-white">
              You get
            </div>
            <div className="">
              <BuySellTokenField />
              {errors?.token_amount ? (
                <div className="error">{errors.token_amount}</div>
              ) : null}
            </div>
            {recipientAddress === "Self" && <BuySellTokenBalance />}
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex flex-col gap-3 md:gap-3">
            <div className="text-sm md:text-md font-medium text-white">
              You pay
            </div>

            <div className="">
              <BuySellCurrencyField />
              {errors?.fiat_amount ? (
                <div className="error">{errors.fiat_amount}</div>
              ) : null}
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 md:gap-3">
            <div className="text-sm md:text-md font-medium text-white">
              You get
            </div>
            <div className="">
              <BuySellTokenField />
              {errors?.token_amount ? (
                <div className="error">{errors.token_amount}</div>
              ) : null}
            </div>
            {recipientAddress === "Self" && <BuySellTokenBalance />}
          </div>
        </>
      )}

      <div className="mt-2 md:mt-6 flex items-center justify-between">
        <div
          className="w-[40%] md:w-[35%] btnn-dark py-[6px] text-center text-sm font-medium"
          onClick={() => setpage(1)}
        >
          Previous
        </div>
        <div
          className={
            token_amount > 0 || fiat_amount > 0
              ? "w-[40%] md:w-[35%] btnn1 py-[6px] px-8 text-center text-sm  font-medium"
              : "w-[40%] md:w-[35%] btnn1 py-[6px] px-8 text-center text-sm  font-medium opacity-50"
          }
          onClick={handleTrade}
        >
          {type} {token.ticker}
        </div>
      </div>
    </div>
  );
};

export default BuySellPageTwo;
