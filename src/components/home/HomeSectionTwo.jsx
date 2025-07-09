import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { newCoinsData, popularCoinsData } from "../../utils/data";
import { formatter } from "../../utils/helpers";

const HomeSectionTwo = () => {
  const [tokens, setTokens] = useState("popular");
  return (
    <div
      className="w-[100vw] bg-titusDarkBG flex flex-col items-center mt-56 lg:mt-40"
      id="how-it-works"
    >
      <div className="container pt-[110px] md:pt-[390px] pb-28 md:pb-[100px] items-center px-7 md:px-0">
        <div
          className="max-w-[85%] md:max-w-[90%] mx-auto flex flex-col p-7 lg:p-10 mt-[-300px] md:mt-[-500px] rounded-xl bg-titusDarkBG z-40"
          // style={{ boxShadow: "4px 4px 8px #f7a50057" }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <span className="text-[17px] md:text-[30px] text-start text-white">
              Your Best Crypto Exchange
            </span>
            <Link
              to="/about"
              className="text-titusGreen font-semibold flex gap-1 items-center text-sm md:hidden"
            >
              <span>Learn more</span>
              <AiOutlineArrowRight />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-titusGreen text-lg">
                  1
                </p>
                <p className="text-[18px] lg:text-[22px] md:font-medium text-white">
                  Create Account
                </p>
                <AiOutlineArrowRight />
              </div>
              <p>
                Provide your email address and check your inbox for a 6-digit
                verification code. Simply enter the code on the verification
                page to complete your signup.
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-titusGreen text-lg">
                  2
                </p>
                <p className="text-[18px] lg:text-[22px] md:font-medium text-white">
                  Make deposite
                </p>
                <AiOutlineArrowRight />
              </div>
              <p className="">
                Confirm the transaction details as shown to you. Then go ahead
                to fund your account by sending assets to the generated wallet
                address.
              </p>
            </div>
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <p className="w-[40px] h-[40px] flex justify-center items-center rounded-full border-[1px] border-titusGreen text-lg">
                  3
                </p>
                <p className="text-[18px] lg:text-[22px] md:font-medium text-white">
                  Start Trading
                </p>
                <AiOutlineArrowRight />
              </div>
              <p>
                Now kick off your journey with your favorite trading points -
                OTC or P2P. Receive the exchanged crypto with the best possible
                rate.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-28 md:gap-20 mt-24">
          <div className="col-span-1 flex flex-col gap-8 md:gap-10">
            <h1 className=" text-white text-[30px] md:text-[40px] ">
              Trade on the go. Anywhere, anytime.
            </h1>
            <p className="md:w-[80%] text-white">
              Get access to incredible trading experience that cannot be found
              anywhere else. With our reliable and flexible offerings, you get
              to grow and manage your assets efficiently.
            </p>
            <Link to="/register" className="flex">
              <div className="btnn1 py-3 px-8 text-sm font-bold flex justify-center items-center hover:scale-105 ease-in duration-300">
                <span className="mr-2">Get Started</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="col-span-1 w-full flex flex-col gap-7">
            <div
              className="w-full lg:w-[85%] ms-auto flex flex-col p-5 lg:p-7 rounded-xl bg-[#1E2329] "
              style={{ boxShadow: "4px 4px 7px #000000" }}
            >
              <div className="flex justify-between items-center mb-4 text-sm">
                <div className="flex gap-3 md:gap-8 font-bold">
                  <span
                    className={
                      tokens === "popular"
                        ? "text-white cursor-pointer"
                        : " cursor-pointer"
                    }
                    onClick={() => setTokens("popular")}
                  >
                    Popular
                  </span>
                  <span
                    className={
                      tokens === "new"
                        ? "text-white cursor-pointer"
                        : " cursor-pointer"
                    }
                    onClick={() => setTokens("new")}
                  >
                    New Listing
                  </span>
                </div>
                <Link to="" className="span flex items-center gap-1">
                  <span>View all 350+ coins</span>
                  <FaArrowCircleRight />
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                {tokens === "popular"
                  ? popularCoinsData.map((item, i) => (
                      <div
                        className="flex items-center justify-between text-sm"
                        key={i}
                      >
                        <div className="w-[50%] flex items-center gap-2">
                          <img
                            src={`/assets/images/tokens/${item.logo}`}
                            alt=""
                            className="w-[20px]"
                          />
                          <span className="font-semibold">{item.ticker}</span>
                          <span className="text-sm font-light">
                            {item.name}
                          </span>
                        </div>
                        <div className="w-[45%] flex gap-[4%] items-center justify-between">
                          <span className="font-semibold text-end">
                            {formatter(item.price)}
                          </span>
                          <span
                            className={
                              item.priceChange.charAt(0) === "+"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {item.priceChange}
                          </span>
                        </div>
                      </div>
                    ))
                  : newCoinsData.map((item, i) => (
                      <div
                        className="flex items-center justify-between text-sm"
                        key={i}
                      >
                        <div className="w-[50%] flex items-center gap-2">
                          <img
                            src={`/assets/images/tokens/${item.logo}`}
                            alt=""
                            className="w-[20px]"
                          />
                          <span className="font-semibold">{item.ticker}</span>
                          <span className="text-sm font-light">
                            {item.name}
                          </span>
                        </div>
                        <div className="w-[45%] flex gap-[4%] items-center justify-between">
                          <span className="font-semibold text-end">
                            {formatter(item.price)}
                          </span>
                          <span
                            className={
                              item.priceChange.charAt(0) === "+"
                                ? "text-green-600"
                                : "text-red-600"
                            }
                          >
                            {item.priceChange}
                          </span>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            <div
              className="w-full lg:w-[85%] ms-auto flex flex-col p-5 lg:p-7 rounded-xl bg-[#1E2329] "
              style={{ boxShadow: "4px 4px 7px #000000" }}
            >
              <div className="flex">
                <img src="/assets/images/mastercard.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
