import React, { useState } from "react";
import { buySellFaq } from "../../utils/data";

const HowP2PWorks = () => {
  const [faqType, setFaqType] = useState("Buy");
  return (
    <div className="w-full pb-32">
      <div className="container flex flex-col gap-8 px-5 lg:px-0">
        <div className="flex justify-between items-center">
          <h2 className="text-lg lg:text-2xl font-semibold text-white">
            How {import.meta.env.VITE_P2P_NAME} Works
          </h2>
          <div className="flex gap-2 text-[12px] lg:text-sm">
            <div
              className={
                faqType === "Buy"
                  ? "bg-titusGreenDeep text-white py-2 px-2 lg:px-5 rounded-md cursor-pointer"
                  : "hover:bg-titusGreenDeep text-white py-2 px-2 lg:px-5 rounded-md cursor-pointer"
              }
              onClick={() => setFaqType("Buy")}
            >
              Buy Crypto
            </div>
            <div
              className={
                faqType === "Sell"
                  ? "bg-titusGreenDeep text-white py-2 px-2 lg:px-5 rounded-md cursor-pointer"
                  : "hover:bg-titusGreenDeep text-white py-2 px-2 lg:px-5 rounded-md cursor-pointer"
              }
              onClick={() => setFaqType("Sell")}
            >
              Sell Crypto
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {buySellFaq
            .filter((item) => item.type === faqType)
            .map((faq, i) => (
              <div
                className="col-span-1 flex flex-col gap-4 p-6 border-[1px] border-titusLightBorder rounded-lg hover:border-titusGreen duration-300 ease-in"
                key={i}
              >
                <img
                  src={`/assets/images/m2m/${faq.icon}`}
                  alt=""
                  className="w-[60px] h-[60px]"
                />
                <p className="text-lg text-white m-0">{faq.title}</p>
                <p className="text-sm">{faq.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HowP2PWorks;
