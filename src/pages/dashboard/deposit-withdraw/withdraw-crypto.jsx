import { useEffect, useState } from "react";
import { fetchUserTokenBalances, withdrawCryptoAsset } from "../../../api";
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
import ConfirmTransaction from "../../../components/dashboard/deposit-withdraw/ConfirmTransaction";
import WithdrawCryptoRecipient from "../../../components/dashboard/deposit-withdraw/WithdrawCryptoRecipient";

const WithdrawCryptoPage = () => {
  const location = useLocation();
  const history = useNavigate();
  const suppliedAsset = location.state?.suppliedAsset;
  const [showConfirmTrade, setshowConfirmTrade] = useState(false);

  const { tokenBalances, tokenBalancesLoading } = fetchUserTokenBalances();
  const {
    token,
    settoken,
    amount,
    setamount,
    errors,
    recipientAddress,
    setrecipientAddress,
  } = useFiatDepositWithdrawContext();

  useEffect(() => {
    if (tokenBalances) {
      const selectedToken = tokenBalances?.data?.filter(
        (item) => item.ticker.toLowerCase() == suppliedAsset.toLowerCase()
      )[0];
      settoken(selectedToken);
    }
  }, [tokenBalances]);

  const handleWithdraw = async () => {
    const values = { recipient: recipientAddress, token, amount };
    const response = await withdrawCryptoAsset(values);
    if (response.status == 200) {
      successNotification(response?.data?.message);
      setshowConfirmTrade(false);
      clearFunc();
      setTimeout(() => {
        history(`/dashboard/transaction-history/${response?.data?.data}`);
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
        Are you sure you want to withdraw{" "}
        <span className="text-titusYellow text-[16px]">
          {amount} {token?.ticker?.toUpperCase()}
        </span>{" "}
        to address{" "}
        <span className="text-titusGreenFaded text-[16px]">
          {recipientAddress.substring(0, 6)}...
          {recipientAddress.substring(recipientAddress.length - 6)}
        </span>{" "}
        ?
      </div>
    );
  };

  const clearFunc = () => {
    setrecipientAddress("");
    setamount(0);
  };

  return (
    <>
      <Head pageTitle="User Dashboard - Transfer Crypto" />
      <div className="w-full">
        <div className="flex flex-col gap-10 max-w-[600px] mx-auto">
          <DepositWithdrawHeader
            title={`Withdraw ${token?.ticker}`}
            subtitle={`Easily transfer ${
              token?.ticker
            } from your account to another user on ${
              import.meta.env.VITE_APP_NAME
            } via the dialog below`}
            clearFunc={clearFunc}
          />

          <div className="w-full flex flex-col gap-8 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
            <div className="w-full flex flex-col gap-2 md:gap-2">
              <div className="text-sm md:text-md font-medium text-white">
                You transfer
              </div>
              <div className="">
                {tokenBalances && (
                  <DepositWithdrawField
                    data={token}
                    setdata={settoken}
                    array={tokenBalances?.data}
                    amount={amount}
                    setamount={setamount}
                    errors={errors}
                    type="transfer"
                    assetType="cyrpto"
                  />
                )}
                {tokenBalancesLoading && <Loader color="#00dbc2" size={25} />}
                {errors?.amount ? (
                  <div className="error">{errors.amount}</div>
                ) : null}

                <div className="mt-5">
                  Your balance:{" "}
                  <span className="text-titusGreenFaded">
                    {formatter(token?.balance).substring(1)} {token?.ticker}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 md:gap-2">
              <div className="text-sm md:text-md font-medium text-white">
                Recipient
              </div>
              <div className="">
                <WithdrawCryptoRecipient
                  errors={errors}
                  setrecipientAddress={setrecipientAddress}
                />
              </div>
            </div>

            <div
              className={
                amount && recipientAddress && !Object.keys(errors).length
                  ? "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium"
                  : "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium opacity-50"
              }
              onClick={handleConfirmTransaction}
            >
              Withdraw {token?.ticker.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      <ConfirmTransaction
        renderMessage={renderMessage}
        showConfirmTrade={showConfirmTrade}
        setshowConfirmTrade={setshowConfirmTrade}
        actionFunction={handleWithdraw}
        buttonTitle={`Confirm ${token?.ticker} Withdrawal`}
      />
    </>
  );
};

export default WithdrawCryptoPage;
