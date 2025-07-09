import React from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdDesignServices, MdOutlineSupportAgent } from "react-icons/md";
import { mediaPosts } from "../../utils/data";

const HomeSectionSeven = () => {
  return (
    <div className="w-[100vw] bg-titusDarkBG flex flex-col items-center">
      <div className="container py-[100px] md:py-[100px] items-center px-7 md:px-0">
        <div className="w-full md:w-[70%] lg:w-[50%] mx-auto flex flex-col items-center gap-6 mb-16">
          <p className="rounded-full px-8 py-4 bg-[#1B1B1D] text-[#999999] font-semibold">
            {import.meta.env.VITE_APP_NAME}
          </p>
          <h1 className=" text-[30px] md:text-[36px] leading-[1.3em] text-white">
            Meet Us In The Media
          </h1>
          <p className="text-[#ACACAC] text-md text-center">
            Open and decentralized protocol for syncing various Wallets to Dapps
            Secure Server. This is not an app but a protocol that establishes a
            remote connection between two apps and/or devices
          </p>
        </div>
        <div className="grid gri-cols-1 lg:grid-cols-3 gap-16 md:gap-16 px-7 lg:px-0">
          {mediaPosts.map((item, i) => (
            <div
              className="col-span-1 gradient-box1 flex flex-col items-center"
              key={i}
            >
              <img
                src={`/assets/images/media/${item.image}`}
                alt=""
                className="h-[150px] w-max"
              />
              <div className="flex flex-col gap-4">
                <span className="text-white text-[16px] lg:text-[16px] font-medium">
                  {item.title}
                </span>
                <span className="text-sm">
                  {item.content.substring(0, 100)}...
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSectionSeven;
