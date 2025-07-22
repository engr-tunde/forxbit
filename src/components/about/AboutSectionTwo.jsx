import React from "react";
import { GiTrade } from "react-icons/gi";
import { Link } from "react-router-dom";

const AboutSectionTwo = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="container pt-[40px] md:py-32 pb-5 items-center px-10 md:px-0">
        <p className="font-bold text-xl md:text-4xl text-white mb-5">
          Our Ecosystem
        </p>
        <p className="text-[#ffffff9e] mb-9">
          Our platform is huge, with top-tier features that bring incredible
          cryptocurrency experience like never before. While we are putting in a
          great amount of work to bring more services to you, we currently have
          the services listed below. With us, you get these services at
          lightning speed, close-to-zero fees and securely.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <Link
            to="/m2m"
            className="col-span-1 flex flex-col gap-4 md:gap-4 card-1 "
          >
            <img
              src="/assets/images/about/Forxbit-P2P.svg"
              alt=""
              className="w-28 -mb-2"
            />
            <h2 className=" text-white text-[19px] md:text-[20px] font-semibold p-0 m-0">
              {import.meta.env.VITE_APP_NAME} {import.meta.env.VITE_P2P_NAME}
            </h2>
            <p className="text-sm text-[#ffffff9e]">
              {import.meta.env.VITE_APP_NAME}'s {import.meta.env.VITE_P2P_NAME}{" "}
              allows users to trade efficiently among themselves with our
              platform serving as the middleman to ensure all deals are fairly
              done
            </p>
          </Link>
          <Link
            to="/buy-sell"
            className="col-span-1 flex flex-col gap-4 md:gap-4 card-1"
          >
            <img
              src="/assets/images/about/Forxbit-Buy-n-Sell.svg"
              alt=""
              className="w-20 -mb-2"
            />
            <h2 className=" text-white text-[19px] md:text-[20px] font-semibold p-0 m-0">
              {import.meta.env.VITE_APP_NAME} Buy & Sell
            </h2>
            <p className="text-sm text-[#ffffff9e]">
              Buy and sell your cryptocurrencies directly from/to us at
              competitive rates.
            </p>
          </Link>
          <Link
            to="/swap"
            className="col-span-1 flex flex-col gap-4 md:gap-4 card-1"
          >
            <img
              src="/assets/images/about/Forxbit-Swap.svg"
              alt=""
              className="w-14 -mb-2"
            />
            <h2 className=" text-white text-[19px] md:text-[20px] font-semibold p-0 m-0">
              {import.meta.env.VITE_APP_NAME} Swap
            </h2>
            <p className="text-sm text-[#ffffff9e]">
              Swap over 1000 crypto tokens and coins efficietly at a lightening
              speed while enjoying good rate
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionTwo;
