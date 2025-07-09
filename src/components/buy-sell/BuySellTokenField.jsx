import React from "react";
import { useBuySellContext } from "../../context/buySellContext";
import { FaArrowCircleDown } from "react-icons/fa";

const BuySellTokenField = () => {
  const {
    token,
    settoken,
    currency,
    token_amount,
    settoken_amount,
    setfiat_amount,
  } = useBuySellContext();

  let ta;
  const handleChange = (val) => {
    settoken_amount(val);
    // ta = val * (currency.value * token.value);
    // setfiat_amount(ta);
    // console.log({ ta });
  };

  return (
    <div className="w-full flex items-center justify-between relative border-[1px] border-titusLightBorder rounded-xl bg-titusDarkBG">
      <div className="w-[27%] md:w-[18%] flex items-center justify-between px-3 h-full cursor-pointer">
        {/* <CurrencyAssetDropdownMini
          data={token}
          setdata={settoken}
          array={buySellTradeAssets}
          title={token.ticker}
        /> */}
        <img
          src={`/assets/images/tokens/${token.ticker}.png`}
          alt={import.meta.env.VITE_APP_NAME}
          className="w-5"
        />
        <div className="text-white text-sm">{token.ticker}</div>
      </div>

      <div className="w-[1px] h-[53px] bg-titusLightBorder"></div>

      <div className="w-[65%] md:w-[77%] flex flex-col">
        <input
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

export default BuySellTokenField;
