import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const OtherPaymentMethods = ({ otherPAymentMethods }) => {
  return (
    <div className="w-full flex flex-col justify-between gap-6 md:gap-5 bg-titusDashCardDarkItemBG p-5 md:p-5 rounded-lg border-[1px] border-titusLightBorder">
      <div className="text-white font-semibold">Other payment methods</div>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {otherPAymentMethods.map((item, i) => (
          <div
            className="col-span-1 bg-titusDarkLightBG/55 p-4 md:p-5 rounded-md flex items-center gap-3 md:gap-6"
            key={i}
          >
            <img
              src="/assets/images/icons/bank.png"
              alt=""
              className="w-6 md:w-9"
            />
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col md:gap-1">
                <div className="flex items-center gap-2">
                  <div className="text-sm text-white font-medium">
                    {item.title}
                  </div>
                  <span className="py-1 px-2 rounded-full bg-titusDarkBG text-titusYellowFaded text-[10px]">
                    Coming soon
                  </span>
                </div>
                <div className="text-[12px]">{item.subtitle}</div>
              </div>
              <div className="flex flex-col justify-between">
                <FaArrowCircleRight className="text-[12px] md:text-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherPaymentMethods;
