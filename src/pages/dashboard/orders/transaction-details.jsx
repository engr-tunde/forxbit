import { useParams } from "react-router-dom";
import { fetchUserTransactionDetails } from "../../../api";
import Loader from "../../../components/globals/Loader";
import { copyFunc, dateTimeFormatter } from "../../../utils/helpers";
import { FaCopy } from "react-icons/fa";

const TransactionDetailsPage = () => {
  const { t_id } = useParams();
  const { transaction, transactionLoading } = fetchUserTransactionDetails(t_id);

  return (
    <div className="mt-7 md:mt-10">
      {transaction && (
        <div className="w-full md:w-[70%] mx-auto flex flex-col gap-10">
          <div className="w-full mx-auto rounded-md bg-titusDashCardDarkBG flex flex-col gap-10 p-5 md:p-6">
            <div className="text-xl font-medium text-white -mb-2 ">
              Transaction Details
            </div>
            <div
              className="w-full mx-auto rounded-md p-2 md:p-4"
              style={{ boxShadow: "2px 2px 8px #00000076" }}
            >
              <div className="text-[16px] font-medium text-[#b5b4b4] mb-4">
                Overview
              </div>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Created At</span>
                  <span className="text-titusChatText">
                    {dateTimeFormatter(transaction?.data?.createdAt).substring(
                      4
                    )}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Transaction ID</span>
                  <div className="flex items-center gap-2">
                    <span className="text-titusChatText">
                      {transaction?.data?.t_id?.substr(0, 7)}...
                      {transaction?.data?.t_id?.substr(
                        transaction?.data?.t_id?.length - 7
                      )}
                    </span>
                    <FaCopy
                      onClick={() =>
                        copyFunc(
                          transaction?.data?.t_id,
                          "transaction id copied!"
                        )
                      }
                      className="cursor-pointer text-[15px] text-titusText"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-full mx-auto rounded-md p-2 md:p-4"
              style={{ boxShadow: "2px 2px 8px #00000076" }}
            >
              <div className="text-[16px] font-medium text-[#b5b4b4] mb-4">
                Transaction Info
              </div>
              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Type</span>
                  <span className="text-titusChatText">
                    {transaction?.data?.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Counterparty</span>
                  <div className="flex items-center gap-2">
                    <span className="text-titusChatText">
                      {transaction?.data?.counterparty?.length > 10
                        ? `${transaction?.data?.counterparty?.substr(
                            0,
                            5
                          )}...${transaction?.data?.counterparty?.substr(
                            transaction?.data?.counterparty?.length - 5
                          )}`
                        : transaction?.data?.counterparty}
                    </span>
                    <FaCopy
                      onClick={() =>
                        copyFunc(
                          transaction?.data?.counterparty,
                          "counterparty copied!"
                        )
                      }
                      className="cursor-pointer text-[15px] text-titusText"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Amount</span>
                  <span className="text-titusChatText">
                    {transaction?.data?.amount}{" "}
                    {transaction?.data?.asset?.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {transactionLoading && <Loader />}
    </div>
  );
};

export default TransactionDetailsPage;
