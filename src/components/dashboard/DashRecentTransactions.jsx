import { Link } from "react-router-dom";
import TransactionHisBody from "./orders/TransactionHisBody";
import { fetchUserTransactions } from "../../api";
import Loader from "../globals/Loader";

const DashRecentTransactions = () => {
  const { transactions, transactionsLoading } = fetchUserTransactions();

  return (
    <div className="w-full rounded-xl bg-titusDashCardDarkBG p-5 flex flex-col gap-7">
      <div className="flex items-center justify-between text-white">
        <div className="text-[18px] md:text-xl font-medium md:font-semibold">
          Recent Transactions
        </div>
        <Link
          to="/dashboard/transaction-history"
          className="flex items-center gap-2 cursor-pointer hover:text-titusGreen duration-300 ease-in"
        >
          <div className="text-sm md:text-md pb-[1px] border-b-[1px] border-b-titusYellowFaded hover:border-b-titusGreen">
            More...
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-5 md:gap-7">
        {transactions && (
          <TransactionHisBody data={transactions?.data?.slice(0, 5)} />
        )}
        {transactionsLoading && <Loader />}
      </div>
    </div>
  );
};

export default DashRecentTransactions;
