import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeSectionFour = () => {
  return (
    <div className="w-[100vw] bg-[#000000fc] flex flex-col items-center">
      <div className="max-w-[1000px] py-[100px] md:py-[170px] items-center px-10 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-7">
          <div className="col-span-1 flex flex-col gap-5 md:gap-10">
            <h1 className=" text-white text-[28px] md:text-[40px] ">
              Get seamless trading experiences
            </h1>
            <p>
              {import.meta.env.VITE_APP_NAME} is a platform that makes it easy
              to buy and sell cryptocurrency tokens in a matter of seconds.
              While we have the fastest operation speed in the industry, we also
              charge the lowest, with crypto sales and puchases attracting just{" "}
              <span className="font-bold">1%</span> transaction fees - the
              cheapest possible available. Indeed, with us, you enjoy the best
              of services when cryptocurrency trading is concerened.
            </p>
            <Link to="/register" className="flex">
              <div className="text-[16px] font-bold flex justify-center items-center hover:scale-105 ease-in duration-300 text-titusYellow">
                <span className="mr-2">Quit waiting!</span>
                <span>
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              src="/assets/images/home/Get-seamless-trading-experiences.png"
              alt=""
              className="dancingSlide rounded-[0px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionFour;
