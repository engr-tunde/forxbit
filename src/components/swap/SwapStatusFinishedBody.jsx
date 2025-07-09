import { Link } from "react-router-dom";
import { dateTimeFormatter } from "../../utils/helpers";

const SwapStatusFinishedBody = ({ trade }) => {
  return (
    <div className="w-full md:w-[90%] mx-auto flex flex-col gap-10">
      <div className="w-full mx-auto bg-titusDashCardDarkBG rounded-md p-10 md:p-14">
        <div className="w-[90%] md:w-[70%] mx-auto flex flex-col gap-8 md:gap-10 items-center">
          <img src="/assets/images/icons/success.png" alt="" className="w-20" />
          <div className="text-2xl md:text-3xl text-white">
            Trade Completed!
          </div>
          <div className="text-sm text-center">
            Your crypto swap of{" "}
            <span className="text-titusYellow font-semibold">
              {trade?.amountFrom} {trade?.fromCurrency?.toUpperCase()}
            </span>{" "}
            for{" "}
            <span className="text-titusYellow font-semibold">
              {trade?.toCurrency?.toUpperCase()}
            </span>{" "}
            is completed and you got{" "}
            <span className="text-titusYellow font-semibold">
              {trade?.expectedAmountTo}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto rounded-md bg-titusDashCardDarkBG flex flex-col gap-10 p-5 md:p-6">
        <div className="text-xl font-medium text-white -mb-2 ">
          Transaction Details
        </div>
        <div
          className="w-full mx-auto rounded-md p-2 md:p-4"
          style={{ boxShadow: "2px 2px 8px #00000076" }}
        >
          <div className="text-[16px] font-medium text-[#b5b4b4] mb-4">
            Exchange Info
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex items-center justify-between">
              <span>Created At</span>
              <span className="text-titusChatText">
                {dateTimeFormatter(trade?.createdAt).substring(4)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Completed At</span>
              <span className="text-titusChatText">
                {dateTimeFormatter(trade?.updatedAt).substring(4)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Transaction ID</span>
              <span className="text-titusChatText">{trade?.id}</span>
            </div>
          </div>
        </div>
        <div
          className="w-full mx-auto rounded-md p-2 md:p-4"
          style={{ boxShadow: "2px 2px 8px #00000076" }}
        >
          <div className="text-[16px] font-medium text-[#b5b4b4] mb-4">
            Inbound Info
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <Link
              to={`https://solscan.io/tx/${trade?.payinHash}`}
              className="flex items-center justify-between"
              target="_blank"
            >
              <span>PayIn Hash</span>
              <span className="text-titusGreenFaded">
                {trade?.payinHash?.substr(0, 5)}...
                {trade?.payinHash?.substr(trade?.payinHash?.length - 5)}
              </span>
            </Link>

            <div className="flex items-center justify-between">
              <span>Amount</span>
              <span className="text-titusChatText">
                {trade?.amountFrom} {trade?.fromCurrency?.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Received At</span>
              <span className="text-titusChatText">
                {dateTimeFormatter(trade?.depositReceivedAt).substring(4)}
              </span>
            </div>
          </div>
        </div>
        <div
          className="w-full mx-auto rounded-md p-2 md:p-4"
          style={{ boxShadow: "2px 2px 8px #00000076" }}
        >
          <div className="text-[16px] font-medium text-[#b5b4b4] mb-4">
            Outbound Info
          </div>
          <div className="flex flex-col gap-4 text-sm">
            <Link
              to={`https://solscan.io/tx/${trade?.payoutHash}`}
              className="flex items-center justify-between"
              target="_blank"
            >
              <span>PayIn Hash</span>
              <span className="text-titusGreenFaded">
                {trade?.payoutHash?.substr(0, 5)}...
                {trade?.payoutHash?.substr(trade?.payoutHash?.length - 5)}
              </span>
            </Link>

            <div className="flex items-center justify-between">
              <span>Amount</span>
              <span className="text-titusChatText">
                {trade?.expectedAmountTo} {trade?.toCurrency?.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Completed At</span>
              <span className="text-titusChatText">
                {dateTimeFormatter(trade?.updatedAt).substring(4)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapStatusFinishedBody;
