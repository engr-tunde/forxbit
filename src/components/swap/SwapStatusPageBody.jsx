import { useState } from "react";
import { copyFunc } from "../../utils/helpers";
import { FaCopy } from "react-icons/fa";
import QRCode from "react-qr-code";
import SwapTxStatus from "./SwapTxStatus";

const SwapStatusPageBody = ({ trade }) => {
  const [qrCode, setqrCode] = useState("address");

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-end gap-2 text-sm">
        <span>Transaction ID</span>
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => copyFunc(trade?.id, "Transaction ID copied!")}
        >
          <span className="py-1 px-2 rounded-full bg-titusDarkLightBG text-titusGreenFaded">
            {trade?.id}
          </span>
          <FaCopy className="cursor-pointer text-[15px] text-titusYellow" />
        </div>
      </div>

      <div className="flex flex-col gap-12 md:gap-14 p-5 pb-10 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
        <div className="text-white text-center -mb-5">
          Please send the funds the address below
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-0">
          <div className="col-span-1 md:col-span-3 flex flex-col gap-6 ">
            <div className="">
              <div className="text-sm font-medium">Amount</div>
              <div className="text-white font-semibold">
                {trade?.expectedAmountFrom} {trade?.fromCurrency}
              </div>
            </div>

            <div className="">
              <div className="text-sm font-medium">To this address</div>
              <div className="">
                <span className="text-sm text-white">
                  {trade?.payinAddress.substr(0, 10)}.....
                  {trade?.payinAddress.substr(trade?.payinAddress?.length - 10)}
                </span>
                <FaCopy
                  className="cursor-pointer text-[15px] text-titusYellow"
                  onClick={() =>
                    copyFunc(trade?.payinAddress, "wallet address copied!")
                  }
                />
              </div>
            </div>
            {trade?.payinExtraId && (
              <div className="">
                <div className="text-sm font-medium">Destination tag</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white">
                    {trade?.payinExtraId}
                  </span>
                  <FaCopy
                    className="cursor-pointer text-[15px] text-titusYellow"
                    onClick={() => copyFunc(trade?.payinExtraId, "Tag copied!")}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col gap-5 md:justify-end ">
            <div className="w-full flex justify-between border-[1px] border-[#ffffff1f] p-2 rounded-md h-max">
              <div
                onClick={() => setqrCode("address")}
                className={
                  qrCode === "address"
                    ? "bg-titusGreen text-sm text-black py-1 px-8 md:px-3 rounded-md cursor-pointer"
                    : "text-titusLightText text-sm py-1 px-8 md:px-3 rounded-md hover:bg-titusGreen hover:text-black duration-300 ease-in cursor-pointer"
                }
              >
                Address
              </div>
              <div
                onClick={() => setqrCode("amount")}
                className={
                  qrCode === "amount"
                    ? "bg-titusGreen text-sm text-black py-1 px-8 md:px-3 rounded-md cursor-pointer"
                    : "text-titusLightText text-sm py-1 px-8 md:px-3 rounded-md hover:bg-titusGreen hover:text-black duration-300 ease-in cursor-pointer"
                }
              >
                Amount
              </div>
            </div>
            {trade && (
              <div className="w-full flex justify-center md:justify-end">
                {qrCode === "address" ? (
                  <div className="w-[70%] md:w-full">
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={trade?.payinAddress}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                ) : (
                  <div className="w-[70%] md:w-full">
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={trade?.expectedAmountFrom.toString()}
                      viewBox={`0 0 256 256`}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {trade && <SwapTxStatus status={trade?.status} />}

        <div className="flex flex-col gap-6 md:gap-5">
          <div className="">
            <div className="text-sm font-medium">You Get</div>
            <div className="text-white font-semibold">
              {trade?.expectedAmountTo} {trade?.toCurrency}
            </div>
          </div>
          <div className="">
            <div className="text-sm font-medium">Recipient Wallet</div>
            <div className="text-white font-semibold">
              {/* {trade?.payoutAddress} */}
              <span className="text-sm text-white">
                {trade?.payoutAddress.substr(0, 10)}.....
                {trade?.payoutAddress.substr(trade?.payoutAddress?.length - 10)}
              </span>
              <FaCopy
                className="cursor-pointer text-[15px] text-titusYellow"
                onClick={() =>
                  copyFunc(trade?.payoutAddress, "wallet address copied!")
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapStatusPageBody;
