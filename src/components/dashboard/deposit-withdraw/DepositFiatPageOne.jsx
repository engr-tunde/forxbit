import { fetchCurrencies } from "../../../api";
import { useDepositFiatContext } from "../../../context/depositFiatContext";
import Loader from "../../globals/Loader";
import DepositFiatField from "./DepositFiatField";

const DepositFiatPageOne = () => {
  const { currencies, currenciesLoading } = fetchCurrencies();
  const { currency, setcurrency, amount, setamount, errors } =
    useDepositFiatContext();

  const handleDeposit = async () => {};

  return (
    <div className="flex flex-col gap-8 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
      <div className="w-full flex flex-col gap-2 md:gap-2">
        <div className="text-sm md:text-md font-medium text-white">
          You send
        </div>
        <div className="">
          {currencies && (
            <DepositFiatField
              currency={currency}
              setcurrency={setcurrency}
              array={currencies}
              amount={amount}
              setamount={setamount}
            />
          )}
          {currenciesLoading && <Loader color="#00dbc2" size={25} />}
          {errors?.currency ? (
            <div className="error">{errors.currency}</div>
          ) : null}
        </div>
      </div>

      <div
        className={
          currency > 0
            ? "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium"
            : "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium opacity-50"
        }
        onClick={handleDeposit}
      >
        Deposit {currency?.ticker.toUpperCase()}
      </div>
    </div>
  );
};

export default DepositFiatPageOne;
