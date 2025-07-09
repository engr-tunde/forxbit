import React, { useCallback, useEffect, useReducer, useState } from "react";
import { validateM2MTrade, validateP2pTrade } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import {
  errorNotification,
  formatter,
  successNotification,
} from "../../utils/helpers";
import SubmitButton from "../forms/SubmitButton";
import { ErrorMessage, Formik } from "formik";
import AppInputFieldBorderless from "../forms/AppInputFieldBorderless";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AppFormButton from "../forms/buttons/AppFormButton";

const StartTradeNew = ({
  showStartTrade,
  setShowStartTrade,
  selectedTrade,
  setSelectedTrade,
  setShowSelectPaymentMethod,
  payment_method,
  setPayment_method,
  buyMax,
  setbuyMax,
}) => {
  const validationSchema = validateM2MTrade(selectedTrade);
  const history = useNavigate();
  // const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const {
    register,
    handleSubmit,
    formState: { errors, values },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  console.log("values", values);

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
  });

  // const handleSubmit = async (values) => {
  //   const payload = {
  //     payment_method,
  //     fiat_symbol: selectedTrade?.order?.currency?.symbol,
  //     fiat_amount,
  //     token_amount,
  //     token: selectedTrade?.order?.token,
  //   };

  //   console.log({ payload });
  //   successNotification("successfuly gotten your order");
  //   setTimeout(() => {
  //     history("/m2m/fiat-order-details");
  //   }, 500);
  // };

  const handlePayChange = (e) => {
    let pay = e.target.value;
    setFiat_amount(pay);
    console.log("fiat_amount 1", fiat_amount);
  };

  const handleCloseTrade = () => {
    setShowStartTrade(false);
    setSelectedTrade({});
    setPayment_method(false);
  };

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleBuyMax = () => {
    // let payAmt = selectedTrade?.order?.max_limit;
    // setFiat_amount(payAmt);
    setbuyMax(true);
    forceUpdate();
  };

  console.log({ payment_method });
  // console.log("register", register);

  const [fiat_amount, setFiat_amount] = useState();
  const [token_amount, setToken_amount] = useState(0);
  const [pay, setpay] = useState();
  const [buyMax, setbuyMax] = useState(false);

  useEffect(() => {
    let payAmt;
    if (selectedTrade && !buyMax) {
      payAmt = selectedTrade?.order?.min_limit;
      setFiat_amount(payAmt);
    } else if (selectedTrade && buyMax) {
      payAmt = selectedTrade?.order?.max_limit;
      setFiat_amount(payAmt);
    }
  }, [selectedTrade, buyMax]);

  useEffect(() => {
    const price = selectedTrade?.order?.price;
    const tkA = fiat_amount / price;
    setToken_amount(tkA);
    console.log("token_amount", token_amount);
    console.log("tkA", tkA);
  }, [fiat_amount]);

  console.log("pay", pay);

  return (
    <div
      className={
        showStartTrade
          ? "flex justify-center items-center w-screen h-full bg-black/75 absolute top-0 left-0"
          : "hidden"
      }
    >
      <div className="fixed top-[15%] md:top-[13%] z-[150] flex flex-col w-[90%] md:w-[40%] mx-auto bg-black border-titusGreenFaded border-[1px] p-5 md:p-10 rounded-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="text-md font-semibold text-white">
            Trade with {selectedTrade?.user?.username} &nbsp;
            <span className="text-sm">
              ({selectedTrade?.user?.orders} orders)
            </span>
          </div>
          <div
            className="text-[26px] cursor-pointer font-semibold text-red-600 p-0"
            onClick={handleCloseTrade}
          >
            x
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-sm ">
            <div className="font-medium text-white mb-1">
              Advertisement Terms <span className="text-red-600">*</span>
            </div>
            <div className="text-xs">
              {selectedTrade?.order?.terms_tags?.map((it, i) => (
                <div className="" key={i}>
                  {it.title}
                </div>
              ))}
            </div>
          </div>

          <div className="text-sm">
            Price:{" "}
            <span className="text-white text-md">
              {selectedTrade?.order?.price}{" "}
              {selectedTrade?.order?.currency?.ticker}
            </span>
            , QTY:{" "}
            <span className="text-white text-md">
              {selectedTrade?.order?.token_amount}{" "}
              {selectedTrade?.order?.token?.symbol}
            </span>
          </div>

          <div className="text-sm">
            Limits{" "}
            <span className="text-white text-md">
              {selectedTrade?.order?.currency.ticker}
              {selectedTrade?.order?.min_limit} -{" "}
              {selectedTrade?.order?.currency.ticker}
              {selectedTrade?.order?.max_limit}
            </span>
          </div>

          {selectedTrade && fiat_amount && (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div className="border-[1px] border-titusLightBorder rounded-lg p-4">
                <div className="text-sm text-white">
                  {selectedTrade?.order?.type === "Sell"
                    ? "You Pay"
                    : "You Sell"}
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-[50%] md:w-[70%]">
                    <AppInputFieldBorderless
                      // label="Email"
                      // handleChange={(e) => handlePayChange(e)}
                      name="pay"
                      type="number"
                      defaultValue={fiat_amount}
                      register={{
                        ...register("pay", {
                          setFiat_amount: (value) => Number(value),
                        }),
                      }}
                      placeholder={`${selectedTrade?.order?.min_limit} - ${selectedTrade?.order?.max_limit}`}
                      error={errors?.pay}
                    />
                  </div>
                  <div className="flex items-center justify-end gap-2 md:gap-3">
                    <div
                      className="text-titusYellowFaded font-semibold text-sm cursor-pointer"
                      onClick={handleBuyMax}
                    >
                      {selectedTrade?.order?.type === "Sell"
                        ? "Buy All"
                        : " Sell All"}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={
                          selectedTrade?.order?.type === "Sell"
                            ? selectedTrade?.order?.currency?.icon
                            : selectedTrade?.order?.token.logoURI
                        }
                        alt={import.meta.env.VITE_APP_NAME}
                        className="h-6 w-6"
                      />
                      <div className="text-sm">
                        {selectedTrade?.order?.type === "Sell"
                          ? selectedTrade?.order?.currency?.ticker
                          : selectedTrade?.order?.token.symbol}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-[1px] border-titusLightBorder rounded-lg p-4">
                <div className="text-sm text-white">
                  {selectedTrade?.order?.type === "Sell"
                    ? "You Get"
                    : "You Receive"}
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-[70%]">
                    <div className="border-0 rounded-md w-[100%] bg-transparent p-0 text-xl font-medium">
                      {isNaN(token_amount) ? "..." : token_amount}
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <img
                      src={
                        selectedTrade?.order?.type === "Sell"
                          ? selectedTrade?.order?.token?.logoURI
                          : selectedTrade?.order?.currency.icon
                      }
                      alt={import.meta.env.VITE_APP_NAME}
                      className="h-6 w-6"
                    />
                    <div className="text-sm">
                      {selectedTrade?.order?.type === "Sell"
                        ? selectedTrade?.order?.token.symbol
                        : selectedTrade?.order?.currency?.ticker}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div
                  className="border-[1px] border-titusLightBorder rounded-lg p-4 text-white cursor-pointer text-sm"
                  onClick={() => setShowSelectPaymentMethod(true)}
                >
                  {payment_method.length
                    ? `Payment Method: ${payment_method}`
                    : "Select payment method"}
                </div>
                {/* <ErrorMessage
                    name="payment_method"
                    component="span"
                    className="error"
                  /> */}
              </div>
              {/* <SubmitButton
                  title="Trade"
                  disabled={
                    errors.length ? true : payment_method == "" ? true : false
                  }
                /> */}
              <AppFormButton
                title="Trade"
                isSubmitting={false}
                disabled={false}
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartTradeNew;
