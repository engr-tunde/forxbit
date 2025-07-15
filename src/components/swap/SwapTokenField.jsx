import React from "react";
// import CurrencyAssetDropdownMini from "../globals/trade/CurrencyAssetDropdownMini";
import SwapAssetDropdownMini from "./SwapAssetDropdownMini";
import { changeNowFetcher } from "../../api/changeNow";
import { useSwapContext } from "../../context/swapContext";

const SwapTokenField = ({
  token,
  settoken,
  array,
  token_amount,
  settoken_amount,
  setto_token_amount,
  to_token,
  disabled = false,
}) => {
  let ta;

  const {
    from_token,
    // to_token,
    from_token_amount,
    // setto_token_amount,

    errors,
  } = useSwapContext();

  const handleChange = (val) => {
    settoken_amount(val);
    if (from_token != null && to_token != null) {
      const runFuncti = async () => {
        const toAmount = await changeNowFetcher(
          `v2/exchange/estimated-amount?fromCurrency=${from_token?.ticker}&toCurrency=${to_token?.ticker}&fromAmount=${val}&toAmount=&fromNetwork=${from_token?.network}&toNetwork=${to_token?.network}&flow=fixed-rate`
        );
        if (toAmount) {
          if (toAmount?.error?.length > 0) {
            errors.from_token_amount = toAmount?.message;
            setto_token_amount(0);
          } else {
            delete errors["from_token_amount"];
            const toAmnt = toAmount?.toAmount;
            setto_token_amount(toAmnt);
            settoken_amount(val);
          }
        }
      };
      runFuncti();
    }

    let value = Number(val);
    // settoken_amount(val);
  };

  return (
    <div className="w-full flex items-center justify-between relative border-[1px] border-titusLightBorder rounded-xl bg-titusDarkBG">
      <div className="w-[36%] md:w-[26%] flex items-center justify-between px-1 h-full cursor-pointer">
        <SwapAssetDropdownMini data={token} setdata={settoken} array={array} />
      </div>

      <div className="w-[1px] h-[53px] bg-titusLightBorder"></div>

      <div className="w-[61%] md:w-[72%] flex flex-col">
        <input
          disabled={disabled}
          type="number"
          value={token_amount}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-0 py-2 border-[1px] bg-transparent input-no-border placeholder:text-[15px] placeholder:font-semibold text-[15px]"
        />
      </div>
    </div>
  );
};

export default SwapTokenField;
