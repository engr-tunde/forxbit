import { useEffect } from "react";
import { DepositFiatAsset, fetchUserCurrencyBalances } from "../../../api";
import Loader from "../../../components/globals/Loader";
import Head from "../../../components/Head";
import { useFiatDepositWithdrawContext } from "../../../context/fiatDepositWithdrawContext";
import { useLocation, useNavigate } from "react-router-dom";
import DepositWithdrawField from "../../../components/dashboard/deposit-withdraw/DepositWithdrawField";
import DepositWithdrawHeader from "../../../components/globals/DepositWithdrawHeader";
import {
  errorNotification,
  formatter,
  successNotification,
} from "../../../utils/helpers";

const DepositFiatPage = () => {
  const location = useLocation();
  const suppliedAsset = location.state.suppliedAsset;

  const { currencyBalances, currencyBalancesLoading } =
    fetchUserCurrencyBalances();

  const { currency, setcurrency, amount, setamount, errors } =
    useFiatDepositWithdrawContext();

  useEffect(() => {
    if (currencyBalances) {
      const selectedCurrency = currencyBalances?.data?.filter(
        (item) => item.ticker.toLowerCase() == suppliedAsset.toLowerCase()
      )[0];
      setcurrency(selectedCurrency);
    }
  }, [currencyBalances]);

  const history = useNavigate();

  const handleDeposit = async () => {
    const values = { currency, amount };
    const response = await DepositFiatAsset(values);
    if (response.status == 200) {
      successNotification(response?.data?.message);
      setTimeout(() => {
        history(`/dashboard/transaction-history/${response?.data?.data}`);
      }, 1000);
    } else {
      errorNotification(response?.data?.error);
    }
  };

  return (
    <>
      <Head pageTitle="User Dashboard - Deposit Fiat" />
      <div className="w-full mt-8">
        <div className="flex flex-col gap-8 max-w-[600px] mx-auto">
          <DepositWithdrawHeader
            title={`Deposit ${currency?.ticker} to your account`}
            subtitle={`Easily deposit ${currency?.ticker} to your account via the dialog below`}
          />

          <div className="w-full flex flex-col gap-8 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
            <div className="w-full flex flex-col gap-2 md:gap-2">
              <div className="text-sm md:text-md font-medium text-white">
                You deposit
              </div>
              <div className="">
                {currencyBalances && (
                  <DepositWithdrawField
                    data={currency}
                    setdata={setcurrency}
                    array={currencyBalances?.data}
                    amount={amount}
                    setamount={setamount}
                    errors={errors}
                    type="deposit"
                    assetType="fiat"
                  />
                )}
                {currencyBalancesLoading && (
                  <Loader color="#00dbc2" size={25} />
                )}
                {errors?.amount ? (
                  <div className="error">{errors.amount}</div>
                ) : null}
              </div>
            </div>

            <div className="mb-2">
              Current balance:{" "}
              <span className="text-titusGreenFaded">
                {currency?.symbol}
                {formatter(currency?.balance).substring(1)}
              </span>
            </div>

            <div
              className={
                amount > 0
                  ? "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium"
                  : "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium opacity-50"
              }
              onClick={handleDeposit}
            >
              Deposit {currency?.ticker.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositFiatPage;
