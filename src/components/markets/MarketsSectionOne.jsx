import React from "react";
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

const MarketsSectionOne = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="top-[100px] h-full container pt-[17vh] md:pt-[200px] pb-[180px] md:pb-[200px] items-center px-5 md:px-0">
        <div className="w-full md:w-[70%] mx-auto text-center mb-7">
          <h1 className="text-white text-[22px] md:text-[40px] uppercase mb-5 ">
            Live from the Crypto markets
          </h1>
        </div>
        <div
          className="p-5 rounded-2xl bg-black flex flex-col gap-5 right-box"
          style={{ border: "1px dashed #fff" }}
        >
          <CryptoCurrencyMarket
            colorTheme="dark"
            width="100%"
            height={700}
          ></CryptoCurrencyMarket>
        </div>
      </div>
    </div>
  );
};

export default MarketsSectionOne;
