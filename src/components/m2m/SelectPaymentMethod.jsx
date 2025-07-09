import React, { useEffect } from "react";
import { userBankData } from "../../utils/data";

const SelectPaymentMethod = ({
  selectedTrade,
  showSelectPaymentMethod,
  setShowSelectPaymentMethod,
  setPayment_method,
}) => {
  const handleSelectPM = (item) => {
    setPayment_method(item);
    setShowSelectPaymentMethod(false);
  };
  return (
    // <div className="text-white">hi there!</div>
    <div
      className={
        showSelectPaymentMethod
          ? "z-[400] flex justify-center items-center w-screen h-full bg-black/90 absolute top-0 left-0"
          : "hidden"
      }
    >
      <div className="fixed top-[15%] md:top-[20%] z-[550] flex flex-col w-[90%] md:w-[40%] mx-auto bg-titusDarkGrey p-5 md:p-10 rounded-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="text-md font-semibold text-white">
            Payment Method(s)
          </div>
          <div
            className="text-[26px] cursor-pointer font-semibold text-red-600 p-0"
            onClick={() => setShowSelectPaymentMethod(false)}
          >
            x
          </div>
        </div>
        <div className="text-sm mb-4">Select payment method</div>
        <div className="flex flex-col gap-5">
          {
            selectedTrade?.order?.payment_methods?.map((item, i) => (
              <div
                className="border-titusLightBorder border-[1px] rounded-lg p-3 cursor-pointer"
                key={i}
                onClick={() => handleSelectPM(item)}
              >
                <div
                  className={
                    item === "Bank Transfer"
                      ? "border-l-[3px] border-l-yellow-500 text-[14px] text-white py-1 px-2"
                      : item === "Interbank"
                      ? "border-l-[3px] border-l-red-500 text-[14px] text-white py-1 px-2"
                      : "border-l-[3px] border-l-blue-500 text-[14px] text-white py-1 px-2"
                  }
                >
                  {item}
                </div>
              </div>
            ))
            // : userBankData.map((item, i) => (
            //     <div
            //       className="border-[#ffffffbd] border-[1px] rounded-2xl p-3 md:p-5 cursor-pointer flex flex-col gap-2 text-white"
            //       key={i}
            //       onClick={() => handleSelectPM(item)}
            //     >
            //       <div className="border-l-[3px] border-l-titusGreen text-[14px] text-white py-0 px-2 font-medium">
            //         Bank Transfer
            //       </div>
            //       <div className="text-sm">{item.bank}</div>
            //       <div className="text-sm">{item.account_number}</div>
            //       <div className="text-sm">{item.account_name}</div>
            //     </div>
            //   ))
          }
        </div>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
