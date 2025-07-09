import React, { useState } from "react";
import { FaArrowCircleDown, FaMinus, FaPlus } from "react-icons/fa";
import { m2mTradeCurrencies } from "../../../utils/data";

const SellTradeForm1 = ({
  currency,
  setCurrency,
  asset,
  setAsset,
  setCurrentStage,
}) => {
  const [showCurrencyList, setShowCurrencyList] = useState(false);
  const [showAssetList, setShowAssetList] = useState(false);
  const [margin_type, setMargin_type] = useState("Fixed");
  const price = 500;
  const [new_price, setNew_price] = useState(price);
  const [percent, setPercent] = useState(100);

  const handleIncreasePrice = () => {
    let pc = parseFloat((percent + 0.2).toFixed(2));
    console.log({ percent });
    let newpriceDiff = parseFloat(((pc / 100) * price).toFixed(2));
    setPercent(pc);
    setNew_price(newpriceDiff);
  };
  const handleDecreasePrice = () => {
    let pc = parseFloat((percent - 0.2).toFixed(2));
    console.log({ percent });
    let newpriceDiff = parseFloat(((pc / 100) * price).toFixed(2));
    setPercent(pc);
    setNew_price(newpriceDiff);
  };

  return (
    <>
      <div className="w-full md:w-[70%] flex items-center flex-col md:flex-row justify-between gap-6">
        <div className="relative w-full md:w-[45%]">
          <div className="flex flex-col gap-2">
            <div className="text-white text-sm md:text-md">Sell in</div>
            <div
              className="w-full flex items-center justify-between border-[1px] border-titusLightBorder hover:border-titusGreenFaded rounded-lg p-3"
              onMouseEnter={() => {
                setShowCurrencyList(true);
              }}
              onClick={() => {
                setShowCurrencyList(!showCurrencyList);
              }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={`/assets/images/tokens/${currency.icon}`}
                  alt=""
                  className="w-[15px] lg:w-[20px]"
                />
                <div className="text-white text-sm font-medium">
                  {currency.ticker}
                </div>
              </div>
              <FaArrowCircleDown className="" />
            </div>
          </div>
          <div
            className={
              showCurrencyList
                ? "w-full absolute px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-[90px] rounded-lg bg-titusDarkGrey"
                : "hidden"
            }
            onMouseLeave={() => setShowCurrencyList(false)}
          >
            {m2mTradeCurrencies.map((item, i) => (
              <div
                className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
                key={i}
                onClick={() => {
                  setCurrency(item);
                  setShowCurrencyList(false);
                }}
              >
                <img
                  src={`/assets/images/tokens/${item.icon}`}
                  alt=""
                  className="w-[20px]"
                />
                <div className="text-white text-sm font-medium">
                  {item.ticker}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-[45%]">
          <div className="flex flex-col gap-2">
            <div className="text-white text-sm md:text-md">Asset to sell</div>
            <div
              className="w-full flex items-center justify-between border-[1px] border-titusLightBorder hover:border-titusGreenFaded rounded-lg p-3"
              onMouseEnter={() => {
                setShowAssetList(true);
              }}
              onClick={() => {
                setShowAssetList(!showAssetList);
              }}
            >
              <div className="flex items-center gap-2">
                <img
                  src={`/assets/images/tokens/${asset.toLowerCase()}.png`}
                  alt=""
                  className="w-[15px] lg:w-[20px]"
                />
                <div className="text-white text-sm font-medium">{asset}</div>
              </div>
              <FaArrowCircleDown className="" />
            </div>
          </div>

          <div
            className={
              showAssetList
                ? "w-full absolute px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-[90px] rounded-lg bg-titusDarkGrey"
                : "hidden"
            }
            onMouseLeave={() => setShowAssetList(false)}
          >
            {m2mTradeCurrencies.map((item, i) => (
              <div
                className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
                key={i}
                onClick={() => {
                  setAsset(item);
                  setShowAssetList(false);
                }}
              >
                <img
                  src={`/assets/images/tokens/${item.toLowerCase()}.png`}
                  alt=""
                  className="w-[20px]"
                />
                <div className="text-white text-sm font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[25%] flex flex-col gap-3">
        <div className="text-white text-sm md:text-md">Select Price Type</div>
        <div className="flex items-center gap-20">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setMargin_type("Fixed")}
          >
            <div
              className={
                margin_type === "Fixed"
                  ? "text-white text-sm md:text-md"
                  : "text-titusText text-sm md:text-md"
              }
            >
              Fixed
            </div>
            <div
              className={
                margin_type === "Fixed"
                  ? "p-1 bg-transparent border-[6px] border-white rounded-full"
                  : "p-[9px] bg-transparent border-[1px] border-white rounded-full"
              }
            ></div>
          </div>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setMargin_type("Floating")}
          >
            <div
              className={
                margin_type === "Floating"
                  ? "text-white text-sm md:text-md"
                  : "text-titusText text-sm md:text-md"
              }
            >
              Floating
            </div>
            <div
              className={
                margin_type === "Floating"
                  ? "p-1 bg-transparent border-[6px] border-white rounded-full"
                  : "p-[9px] bg-transparent border-[1px] border-white rounded-full"
              }
            ></div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[32.5%] flex flex-col gap-3">
        <div className="text-white text-sm md:text-md">
          {margin_type} Price Type
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-full border-[1px] border-titusLightBorder px-3 py-0 rounded-lg flex justify-between items-center">
            <div
              className="text-lg font-semibold hover:text-titusGreenFaded cursor-pointer"
              onClick={handleDecreasePrice}
            >
              <FaMinus />
            </div>
            <div className="flex items-center gap-1 text-white font-semibold text-md">
              {/* {margin_type === "Floating" ? `${percent}%` : price} */}
              <input
                type="text"
                className="border-0 bg-transparent text-white font-semibold text-lg text-center w-[200px]"
                value={margin_type === "Floating" ? `${percent}%` : new_price}
              />
            </div>
            <div
              className="text-lg font-semibold hover:text-titusGreenFaded cursor-pointer"
              onClick={handleIncreasePrice}
            >
              <FaPlus />
            </div>
          </div>
          <div className="text-[12px]">
            Pricing formular: {price} * {percent}% ≈{" "}
            <span className="text-white text-md font-semibold">
              {new_price} {currency.ticker}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-titusLightBorder h-[1px] w-full"></div>

      <div className="w-full md:w-[50%] flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-md">Your Price</div>
          <div className="text-white text-xl font-semibold">
            {currency.ticker} {new_price}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-md">Average Market Price</div>
          <div className="text-white text-xl font-semibold">
            {currency.ticker} {price}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <div
          className="btnn1 py-[6px] px-14 text-sm"
          onClick={() => setCurrentStage(2)}
        >
          Next
        </div>
      </div>
    </>
  );
};

export default SellTradeForm1;
