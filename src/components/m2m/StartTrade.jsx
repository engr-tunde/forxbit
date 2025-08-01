import { useEffect, useState } from "react";
import { validateP2pTrade } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import {
  errorNotification,
  formatter,
  successNotification,
} from "../../utils/helpers";
import SubmitButton from "../forms/SubmitButton";
import { ErrorMessage, Formik } from "formik";
import { createM2MOrder } from "../../api";

const StartTrade = ({
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
  let initialValues = {
    pay: selectedTrade?.order?.min_limit,
  };
  const validationSchema = validateP2pTrade(selectedTrade);
  const history = useNavigate();

  console.log("selectedTrade", selectedTrade);

  const [fiat_amount, setFiat_amount] = useState(0);
  const [token_amount, setToken_amount] = useState(0);

  const handleSubmit = async (values) => {
    const payload = {
      trade_id: selectedTrade.t_id,
      trade_type: selectedTrade.order.type,
      order_type: selectedTrade.order.type == "Sell" ? "Buy" : "Sell",
      token: selectedTrade.order.token,
      currency: selectedTrade.order.currency,
      trade_owner: selectedTrade.owner,
      fiat_amount,
      token_amount,
      price: selectedTrade.order.price,
      payment_method,
    };

    console.log({ payload });

    const response = await createM2MOrder(payload);
    console.log("response", response);
    if (response.status === 200) {
      const data = response.data;
      successNotification(data.message);
      setShowStartTrade(true);
      setTimeout(
        () =>
          history(`/dashboard/orders/m2m/order-details/${data.data.order_no}`),
        1500
      );
      setisSubmitting(false);
      setdisabled(false);
    } else {
      errorNotification(response?.data?.error);
      setisSubmitting(false);
      setdisabled(false);
    }
  };

  const handleCloseTrade = () => {
    setShowStartTrade(false);
    setSelectedTrade({});
    setPayment_method(false);
  };

  const handleBuyAll = () => {
    setbuyMax(true);
    // initialValues = {
    //   pay: selectedTrade?.order?.max_limit,
    // };
  };

  console.log("selectedTrade?.order?.type", selectedTrade?.order?.type);

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
            , Available:{" "}
            <span className="text-white text-md">
              {selectedTrade?.order?.available}{" "}
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

          {selectedTrade && (
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => {
                const price = selectedTrade?.order?.price;
                const fAm = values.pay;
                const tkA = fAm / price;
                setToken_amount(tkA);
                setFiat_amount(fAm);

                return (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="border-[1px] border-titusLightBorder rounded-lg p-4">
                      <div className="text-sm text-white">
                        {selectedTrade?.order?.type === "Sell"
                          ? "You Pay"
                          : "You Get"}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="w-[50%] md:w-[70%]">
                          <input
                            type="number"
                            name="pay"
                            value={values.pay}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // error={!!touched.pay && !!errors.pay}
                            // helpertext={touched.pay && errors.pay}
                            placeholder={`${selectedTrade?.order?.min_limit} - ${selectedTrade?.order?.max_limit}`}
                            className="border-0 rounded-md w-[100%] bg-transparent p-0 text-xl font-medium trade"
                          />
                          <ErrorMessage
                            name="pay"
                            component="span"
                            className="error"
                          />
                        </div>
                        <div className="flex items-center justify-end gap-2 md:gap-3">
                          <div
                            className="text-titusYellowFaded font-semibold text-sm cursor-pointer"
                            onClick={handleBuyAll}
                          >
                            {selectedTrade?.order?.type === "Sell"
                              ? "Buy All"
                              : " Sell All"}
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <img
                              src={
                                selectedTrade?.order?.type === "Sell"
                                  ? selectedTrade?.order?.token.logoURI
                                  : selectedTrade?.order?.currency?.icon
                              }
                              alt={import.meta.env.VITE_APP_NAME}
                              className="h-6 w-6"
                            />
                            <div className="text-sm">
                              {selectedTrade?.order?.type === "Sell"
                                ? selectedTrade?.order?.token.ticker
                                : selectedTrade?.order?.currency?.ticker}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-[1px] border-titusLightBorder rounded-lg p-4">
                      <div className="text-sm text-white">
                        {selectedTrade?.order?.type === "Sell"
                          ? "You Get"
                          : "Buyer Receive"}
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
                                ? selectedTrade?.order?.currency.icon
                                : selectedTrade?.order?.token?.logoURI
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
                      <ErrorMessage
                        name="payment_method"
                        component="span"
                        className="error"
                      />
                    </div>
                    <SubmitButton
                      title="Trade"
                      disabled={
                        errors.length
                          ? true
                          : payment_method == ""
                          ? true
                          : false
                      }
                    />
                  </form>
                );
              }}
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartTrade;
