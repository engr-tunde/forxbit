import { useEffect } from "react";
import {
  fetchCurrencies,
  fetchUserBankAccounts,
  fetchUserCurrencyBalances,
} from "../../../api";
import Loader from "../../../components/globals/Loader";
import Head from "../../../components/Head";
import { useFiatDepositWithdrawContext } from "../../../context/fiatDepositWithdrawContext";
import { useLocation, useNavigate } from "react-router-dom";
import DepositWithdrawField from "../../../components/dashboard/deposit-withdraw/DepositWithdrawField";
import WithdrawFiatRecipientField from "../../../components/dashboard/deposit-withdraw/WithdrawFiatRecipientField";
import { formatter } from "../../../utils/helpers";
import DepositWithdrawHeader from "../../../components/globals/DepositWithdrawHeader";

const WithdrawFiatPage = () => {
  const location = useLocation();
  const suppliedAsset = location.state.suppliedAsset;

  const { currencyBalances, currencyBalancesLoading } =
    fetchUserCurrencyBalances();
  const { bankAccounts, bankAccountsLoading } = fetchUserBankAccounts();
  const {
    currency,
    setcurrency,
    amount,
    setamount,
    errors,
    bank_details,
    setbank_details,
  } = useFiatDepositWithdrawContext();

  useEffect(() => {
    if (currencyBalances) {
      const selectedCurrency = currencyBalances?.data?.filter(
        (item) => item.ticker.toLowerCase() == suppliedAsset.toLowerCase()
      )[0];
      setcurrency(selectedCurrency);
    }
  }, [currencyBalances]);

  // useEffect(() => {
  //   if (!amount) {
  //     // errors.amount = "Insufficient balance. Go lower!";
  //     errors.amount = null;
  //   } else if (amount > currency?.balance) {
  //     errors.amount = "Insufficient balance. Go lower!";
  //   } else {
  //     errors.amount = null;
  //     // delete errors["amount"];
  //   }
  // }, [amount]);

  const handleWithdraw = async () => {};

  return (
    <>
      <Head pageTitle="User Dashboard - Withdraw Fiat" />
      <div className="w-full mt-8">
        <div className="flex flex-col gap-10 max-w-[600px] mx-auto">
          <DepositWithdrawHeader
            title={`Withdraw ${currency?.ticker}`}
            subtitle={`Easily withdraw ${currency?.ticker} from your account via the dialog below`}
          />

          <div className="w-full flex flex-col gap-8 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
            <div className="w-full flex flex-col gap-2 md:gap-2">
              <div className="text-sm md:text-md font-medium text-white">
                You withdraw
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
                    type="withdraw"
                    assetType="fiat"
                  />
                )}
                {currencyBalancesLoading && (
                  <Loader color="#00dbc2" size={25} />
                )}
                {errors?.amount ? (
                  <div className="error">{errors.amount}</div>
                ) : null}

                <div className="mt-5">
                  Your balance:{" "}
                  <span className="text-titusGreenFaded">
                    {currency?.symbol}
                    {formatter(currency?.balance).substring(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 md:gap-2">
              <div className="text-sm md:text-md font-medium text-white">
                Withdraw to
              </div>
              <div className="">
                {bankAccounts && (
                  <WithdrawFiatRecipientField
                    data={bank_details}
                    setdata={setbank_details}
                    array={bankAccounts?.data}
                  />
                )}
                {bankAccountsLoading && <Loader color="#00dbc2" size={25} />}
                {errors?.setbank_details ? (
                  <div className="error">{errors.setbank_details}</div>
                ) : null}
              </div>
            </div>

            <div
              className={
                amount && bank_details && !Object.keys(errors).length
                  ? "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium"
                  : "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium opacity-50"
              }
              onClick={handleWithdraw}
            >
              Withdraw {currency?.ticker.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawFiatPage;
