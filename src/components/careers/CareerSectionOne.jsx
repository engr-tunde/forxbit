import React from "react";
import { GiTrade } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { FaCoins, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";

const CareerSectionOne = () => {
  return (
    <div className="w-full">
      <div className="container pt-[120px] md:pt-[200px] pb-[100px] md:pb-[0px] px-7 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-10 text-[#ffffff9e] items-center mb-10">
          <div className="w-full lg:w-[85%] col-span-1 lg:col-span-3 p-2 lg:p-1 rounded-lg flex flex-col gap-5">
            <h1 className="text-white text-[30px] md:text-[40px] mb-5 ">
              Careers at{" "}
              <span className="text-titusGreen">
                {import.meta.env.VITE_APP_NAME}
              </span>
            </h1>
            <p className="text-lg font-medium">
              {import.meta.env.VITE_APP_NAME} is a customer centric blockchain
              firm and this regularly requires the support of skilled and
              experienced manpower to provide an efficient ecosystem for our
              users. We welcome anyone irrespective of their location to fill
              our application form and submit their resume into our resume bank.{" "}
              {import.meta.env.VITE_APP_NAME} is an equal opportunity employer
              and we encourage all to apply for any opening that matches their
              skill set as only qualified candidates will be contacted.
            </p>
            <Link
              to="/about#team"
              className="w-max btnn1 flex items-center gap-2 py-3 px-10 font-semibold"
            >
              <div className="span">Meet The Team</div>
            </Link>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center lg:justify-start">
            <img
              src="/assets/images/careers/Career.png"
              alt=""
              className="w-full lg:w-full dancingSlide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSectionOne;
