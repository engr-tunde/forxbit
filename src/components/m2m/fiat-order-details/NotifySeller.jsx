import React from "react";
import { FaBell, FaCoins } from "react-icons/fa";

const NotifySeller = ({ orderData }) => {
  return (
    <div className="w-full flex gap-5">
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 flex items-center justify-center bg-[#bbb] text-[#222] p-0 m-0 text-[11px] font-bold">
          3
        </div>
        <div className="h-full w-[2px] bg-[#bbb]"></div>
      </div>

      <div className="w-full flex flex-col">
        <p className="text-sm lg:text-md font-medium text-white mb-3">
          {orderData.type == "Buy" ? "Notify seller" : "Release asset"}
        </p>
        <p className="text-[12px] font-medium leading-5">
          {orderData.type == "Buy"
            ? "Following a succesful trasfer of funds to the account details shown above, remember to click on the <span>Transfered, Notify Seller</span> button below"
            : "Following a succesful receival of funds via the account details shown above, remember to click on the Received, Release Asset button below"}
        </p>
        <div className="flex items-center justify-between">
          {orderData.type == "Buy" ? (
            <div className="flex btnn1 py-[6px] px-4 text-[12px] font-medium justify-center items-center ease-in duration-300 cursor-pointer">
              <span className="mr-1">Sent! Notify Seller</span>
              <span>
                <FaBell className="text-black" />
              </span>
            </div>
          ) : (
            <div className="flex btnn1 py-[6px] px-4 text-[12px] font-medium justify-center items-center ease-in duration-300 cursor-pointer">
              <span className="mr-1">Received, Release Asset</span>
              <span>
                <FaCoins className="text-black" />
              </span>
            </div>
          )}

          <div className="flex btnn-yellow py-[6px] px-4 text-[12px] font-medium justify-center items-center ease-in duration-300 cursor-pointer">
            Cancel Order
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifySeller;
