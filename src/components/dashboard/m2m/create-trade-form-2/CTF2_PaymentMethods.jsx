import React from "react";
import { FaTimesCircle } from "react-icons/fa";

const CTF2_PaymentMethods = ({
  payment_methods,
  handleRemovePaymentMethod,
}) => {
  return (
    <>
      {payment_methods.length ? (
        <div className="flex gap-3 flex-wrap">
          {payment_methods.map((item, i) => (
            <div
              className="border-[1px] border-titusLightBorder px-2 py-1 rounded-md flex items-center gap-3"
              key={i}
            >
              {/* <div
                className={
                  item.toLowerCase() === "bank transfer"
                    ? "bg-titusYellow h-full w-[2px]"
                    : item.toLowerCase() === "interbank"
                    ? "bg-titusGreen h-full w-[2px]"
                    : "bg-titusText h-2 w-[2px]"
                }
              ></div> */}
              <div className="text-xs">{item}</div>
              <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
                <FaTimesCircle
                  onClick={() => handleRemovePaymentMethod(item)}
                  className="text-md"
                />
              </div>
              {/* <div
                className="text-white p-1 font-semibold cursor-pointer"
                onClick={() => handleRemovePaymentMethod(item)}
              >
                x
              </div> */}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default CTF2_PaymentMethods;
