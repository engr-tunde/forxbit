import { FaCopy } from "react-icons/fa";
import { copyFunc } from "../../../utils/helpers";

const OrderPaymentDetails = ({ orderData }) => {
  return (
    <div className="w-full flex gap-5">
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 flex items-center justify-center bg-[#bbb] text-[#222] p-0 m-0 text-[11px] font-bold">
          2
        </div>
        <div className="h-full w-[2px] bg-[#bbb]"></div>
      </div>

      <div className="w-full flex flex-col mb-10 lg:mb-8">
        <p className="text-sm lg:text-md font-medium text-white m-0">
          {orderData.type == "Buy"
            ? `Complete the trade with {orderData.trade_partner.name} for 
          ${orderData.fiat_symbol} ${orderData.fiat_amount}`
            : `The buyer is sending you a sum of 
          ${orderData.fiat_symbol} ${orderData.fiat_amount}`}
        </p>
        <p className="text-[12px] font-medium">
          {orderData.type == "Buy"
            ? "Transfer the funds to the account details below:"
            : "Check the account details below to verify funds:"}
        </p>

        <div className="w-full p-3 lg:p-5 rounded-lg border-[1px] border-titusLightBorder flex flex-col gap-5 text-sm">
          <div className="flex items-center justify-between">
            <span>Trader</span>
            <span className="text-titusYellowFaded font-medium">
              {orderData.trade_partner.name}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>Bank Name</span>
            <div className="font-medium flex items-center gap-2">
              <span className="text-titusChatText">
                {orderData.receiving_account.bank}
              </span>
              <FaCopy
                onClick={() =>
                  copyFunc(
                    orderData.receiving_account.bank,
                    "Bank name copied!"
                  )
                }
                className="cursor-pointer text-[15px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span>Account Number</span>
            <div className="font-medium flex items-center gap-2">
              <span className="text-titusChatText">
                {orderData.receiving_account.account_number}
              </span>
              <FaCopy
                onClick={() =>
                  copyFunc(
                    orderData.receiving_account.account_number,
                    "Account number copied!"
                  )
                }
                className="cursor-pointer text-[15px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span>Account Name</span>
            <div className="font-medium flex items-center gap-2">
              <span className="text-titusChatText">
                {orderData.receiving_account.account_name}
              </span>
              <FaCopy
                onClick={() =>
                  copyFunc(
                    orderData.receiving_account.account_name,
                    "Account name copied!"
                  )
                }
                className="cursor-pointer text-[15px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span>Account Type</span>
            <div className="font-medium flex items-center gap-2">
              <span className="text-titusChatText">
                {orderData.receiving_account.account_type}
              </span>
              <FaCopy
                onClick={() =>
                  copyFunc(
                    orderData.receiving_account.account_type,
                    "Account type copied!"
                  )
                }
                className="cursor-pointer text-[15px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPaymentDetails;
