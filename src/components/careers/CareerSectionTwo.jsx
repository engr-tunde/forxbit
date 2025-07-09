import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { Link } from "react-router-dom";

const CareerSectionTwo = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center">
      <div className="container pt-[0px] pb-32 md:py-32 items-center px-6 md:px-0">
        <p className="font-bold text-3xl md:text-4xl text-white mb-5">
          Open Roles
        </p>
        <p className="text-[#ffffff9e] mb-9">
          Have a read and apply to one of the roles below, or drop us a message
        </p>
        <div className="flex flex-col gap-8 bg-titusDarkGrey p-6">
          <Link to="" className="careers-card">
            <div className="w-[80%] lg:w-[50%] flex flex-col">
              <p className=" text-white text-[19px] md:text-[20px] font-semibold mb-2">
                Senior Blockchain Developer
              </p>
              <p className=" text-[#ffffff9e]">Remote, Freelance</p>
            </div>
            <FaArrowRight className="text-xl text-white" />
          </Link>
          <Link to="" className="careers-card">
            <div className="w-[80%] lg:w-[50%] flex flex-col">
              <p className=" text-white text-[19px] md:text-[20px] font-semibold mb-2">
                Growth Hack Specialist
              </p>
              <p className=" text-[#ffffff9e]">Remote, Freelance</p>
            </div>
            <FaArrowRight className="text-xl text-white" />
          </Link>
          <Link to="" className="careers-card">
            <div className="w-[80%] lg:w-[50%] flex flex-col">
              <p className=" text-white text-[19px] md:text-[20px] font-semibold mb-2">
                Business Intelligence Analyst
              </p>
              <p className=" text-[#ffffff9e]">Remote, Fulltime</p>
            </div>
            <FaArrowRight className="text-xl text-white" />
          </Link>
          <Link to="" className="careers-card">
            <div className="w-[80%] lg:w-[50%] flex flex-col">
              <p className=" text-white text-[19px] md:text-[20px] font-semibold mb-2">
                Customer Service Agent
              </p>
              <p className=" text-[#ffffff9e]">Remote, Fulltime</p>
            </div>
            <FaArrowRight className="text-xl text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerSectionTwo;
