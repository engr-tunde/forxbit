import { useEffect, useState } from "react";
import { fetchUserCurrencyBalances, transferFiatAsset } from "../../../api";
import Loader from "../../../components/globals/Loader";
import Head from "../../../components/Head";
import { useFiatDepositWithdrawContext } from "../../../context/fiatDepositWithdrawContext";
import { useLocation, useNavigate } from "react-router-dom";
import DepositWithdrawField from "../../../components/dashboard/deposit-withdraw/DepositWithdrawField";
import {
  errorNotification,
  formatter,
  successNotification,
} from "../../../utils/helpers";
import DepositWithdrawHeader from "../../../components/globals/DepositWithdrawHeader";
import TransferRecipient from "../../../components/dashboard/deposit-withdraw/TransferRecipient";
import ConfirmTransaction from "../../../components/dashboard/deposit-withdraw/ConfirmTransaction";

const TransferFiatPage = () => {
  const location = useLocation();
  const history = useNavigate();
  const suppliedAsset = location.state?.suppliedAsset;
  const [showConfirmTrade, setshowConfirmTrade] = useState(false);

  const { currencyBalances, currencyBalancesLoading } =
    fetchUserCurrencyBalances();
  const {
    currency,
    setcurrency,
    amount,
    setamount,
    errors,
    recipient,
    setrecipient,
  } = useFiatDepositWithdrawContext();

  useEffect(() => {
    if (currencyBalances) {
      const selectedCurrency = currencyBalances?.data?.filter(
        (item) => item.ticker.toLowerCase() == suppliedAsset.toLowerCase()
      )[0];
      setcurrency(selectedCurrency);
    }
  }, [currencyBalances]);

  const handleTransfer = async () => {
    const values = { recipient, currency, amount };
    const response = await transferFiatAsset(values);
    if (response.status == 200) {
      successNotification(response?.data?.message);
      setshowConfirmTrade(false);
      setTimeout(() => {
        history(
          `/dashboard/orders/transaction-history/${response?.data?.data}`
        );
      }, 1000);
    } else {
      errorNotification(response?.data?.error);
    }
  };

  const handleConfirmTransaction = () => {
    setshowConfirmTrade(true);
  };

  const renderMessage = () => {
    return (
      <div className="text-sm text-center text-titusChatText leading-6">
        Are you sure you want to transfer{" "}
        <span className="text-titusYellow text-[16px]">
          {amount} {currency?.ticker?.toUpperCase()}
        </span>{" "}
        to user{" "}
        <span className="text-titusGreenFaded text-[16px]">{recipient}</span> ?
      </div>
    );
  };

  return (
    <>
      <Head pageTitle="User Dashboard - Transfer Fiat" />
      <div className="w-full mt-8">
        <div className="flex flex-col gap-10 max-w-[600px] mx-auto">
          <DepositWithdrawHeader
            title={`Transfer ${currency?.ticker}`}
            subtitle={`Easily transfer ${
              currency?.ticker
            } from your account to another user on ${
              import.meta.env.VITE_APP_NAME
            } via the dialog below`}
          />

          <div className="w-full flex flex-col gap-8 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
            <div className="w-full flex flex-col gap-2 md:gap-2">
              <div className="text-sm md:text-md font-medium text-white">
                You transfer
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
                    type="transfer"
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
                Transfer to
              </div>
              <div className="">
                <TransferRecipient
                  errors={errors}
                  setrecipient={setrecipient}
                />
              </div>
            </div>

            <div
              className={
                amount && recipient && !Object.keys(errors).length
                  ? "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium"
                  : "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium opacity-50"
              }
              onClick={handleConfirmTransaction}
            >
              Transfer {currency?.ticker.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      <ConfirmTransaction
        renderMessage={renderMessage}
        showConfirmTrade={showConfirmTrade}
        setshowConfirmTrade={setshowConfirmTrade}
        actionFunction={handleTransfer}
        buttonTitle={`Confirm ${currency?.ticker} Transfer`}
      />
    </>
  );
};

export default TransferFiatPage;
