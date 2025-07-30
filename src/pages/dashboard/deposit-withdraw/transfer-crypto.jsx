import { useEffect, useState } from "react";
import { fetchUserTokenBalances, transferCryptoAsset } from "../../../api";
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

const TransferCryptoPage = () => {
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
    recipient,
    setrecipient,
  } = useFiatDepositWithdrawContext();

  useEffect(() => {
    if (tokenBalances) {
      const selectedToken = tokenBalances?.data?.filter(
        (item) => item.ticker.toLowerCase() == suppliedAsset.toLowerCase()
      )[0];
      settoken(selectedToken);
    }
  }, [tokenBalances]);
  console.log("token", token);

  const handleTransfer = async () => {
    const values = { recipient, token, amount };
    const response = await transferCryptoAsset(values);
    if (response.status == 200) {
      successNotification(response?.data?.message);
      setshowConfirmTrade(false);
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
        Are you sure you want to transfer{" "}
        <span className="text-titusYellow text-[16px]">
          {amount} {token?.ticker?.toUpperCase()}
        </span>{" "}
        to user{" "}
        <span className="text-titusGreenFaded text-[16px]">{recipient}</span> ?
      </div>
    );
  };

  const clearFunc = () => {
    setrecipient("");
    setamount(0);
  };

  return (
    <>
      <Head pageTitle="User Dashboard - Transfer Crypto" />
      <div className="w-full mt-2">
        <div className="flex flex-col gap-10 max-w-[600px] mx-auto">
          <DepositWithdrawHeader
            title={`Transfer ${token?.ticker}`}
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
                    {formatter(token?.available_balance).substring(1)}{" "}
                    {token?.ticker}
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
              Transfer {token?.ticker.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      <ConfirmTransaction
        renderMessage={renderMessage}
        showConfirmTrade={showConfirmTrade}
        setshowConfirmTrade={setshowConfirmTrade}
        actionFunction={handleTransfer}
        buttonTitle={`Confirm ${token?.ticker} Transfer`}
      />
    </>
  );
};

export default TransferCryptoPage;
