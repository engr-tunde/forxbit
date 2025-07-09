import React from "react";
import {
  FaArrowCircleRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSectionThree = () => {
  return (
    <div className="w-full" id="team">
      <div className="container pt-[100px] md:pt-[50px] pb-[180px] md:pb-[170px] items-center px-10 md:px-0">
        <div className="w-full lg:w-[70%] mx-auto text-center mb-10">
          <h1 className=" text-white text-[30px] md:text-[40px] mb-5">
            Our Team
          </h1>
          <p className="font-medium">
            Meet our team of professionals who work every day to enhance your
            experience in the cryptocurrency field.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-16 px-4 lg:px-0">
          <div className="col-span-1 flex flex-col gap-5 md:gap-5 team-card pb-10">
            <img
              src="/assets/images/avatar2.jpg"
              alt=""
              className="w-full h-[200px] lg:h-[250px] rounded-t-lg"
            />
            <div className="px-6 flex flex-col items-center">
              <p className="text-xl lg:text-xl font-semibold mb-3 text-[#ffffffc7]">
                Raymond Ray
              </p>
              <p className="mb-3">Founder, Team Lead</p>
              <div className="flex gap-6 items-center">
                <Link
                  to="https://x.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="https://instagram.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://facebook.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5 md:gap-5 team-card pb-10">
            <img
              src="/assets/images/avatar2.jpg"
              alt=""
              className="w-full h-[200px] lg:h-[250px] rounded-t-lg"
            />
            <div className="px-6 flex flex-col items-center">
              <p className="text-xl lg:text-xl font-semibold mb-3 text-[#ffffffc7]">
                Racheal David
              </p>
              <p className="mb-3">Marketing Manager</p>
              <div className="flex gap-6 items-center">
                <Link
                  to="https://x.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="https://instagram.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://facebook.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-5 md:gap-5 team-card pb-10">
            <img
              src="/assets/images/avatar2.jpg"
              alt=""
              className="w-full h-[200px] lg:h-[250px] rounded-t-lg"
            />
            <div className="px-6 flex flex-col items-center">
              <p className="text-xl lg:text-xl font-semibold mb-3 text-[#ffffffc7]">
                Tee King
              </p>
              <p className="mb-3">Chief Technology Officer</p>
              <div className="flex gap-6 items-center">
                <Link
                  to="https://x.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaTwitter />
                </Link>
                <Link
                  to="https://instagram.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://facebook.com/"
                  className="rounded-full shadow-md shadow-titusYellowFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaFacebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionThree;
