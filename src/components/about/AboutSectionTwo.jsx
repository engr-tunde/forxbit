import React from "react";
import { GiTrade } from "react-icons/gi";

const AboutSectionTwo = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="container pt-[100px] md:py-32 pb-5 items-center px-10 md:px-0">
        <p className="font-bold text-xl md:text-4xl text-white mb-5">
          Our Ecosystem
        </p>
        <p className="text-[#ffffff9e] mb-9">
          Our platform is trusted by millions worldwide, and features an
          unmatched portfolio of financial product offerings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div className="col-span-1 flex flex-col gap-5 md:gap-5 card-1">
            <img src="" alt="" />
            <GiTrade className="text-5xl text-titusGreen" />
            <p className=" text-white text-[19px] md:text-[22px] font-semibold">
              Titus P2P
            </p>
            <p className=" text-[#ffffff9e]">
              {import.meta.env.VITE_APP_NAME}'s P2P allows users to trade
              efficiently among themselves with our platform serving as the
              middleman to ensure all deals are fairly done
            </p>
          </div>
          <div className="col-span-1 flex flex-col gap-5 md:gap-5 card-1">
            <img src="" alt="" />
            <GiTrade className="text-5xl text-titusGreen" />
            <p className=" text-white text-[19px] md:text-[22px] font-semibold">
              Titus Buy & Sell
            </p>
            <p className=" text-[#ffffff9e]">
              Buy and sell your cryptocurrencies directly from/to us at
              competitive rates.
            </p>
          </div>
          <div className="col-span-1 flex flex-col gap-5 md:gap-5 card-1">
            <img src="" alt="" />
            <GiTrade className="text-5xl text-titusGreen" />
            <p className=" text-white text-[19px] md:text-[22px] font-semibold">
              Titus Swap
            </p>
            <p className=" text-[#ffffff9e]">
              Swap over 1000 crypto tokens and coins efficietly at a lightening
              speed while enjoying good rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
