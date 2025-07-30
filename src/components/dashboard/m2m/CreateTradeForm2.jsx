import { useEffect, useReducer, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { paymentLimitWindows } from "../../../utils/data";
import { useM2MContext } from "../../../context/m2mContext";
import { toDecimal, useOutsideClick } from "../../../utils/helpers";
import CTF2_SelectPaymentMethod from "./create-trade-form-2/CTF2_SelectPaymentMethod";
import { fetchPaymentMethods } from "../../../api";
import CTF2_PaymentMethods from "./create-trade-form-2/CTF2_PaymentMethods";
import CTF2_TradeTimeWindow from "./create-trade-form-2/CTF2_TradeTimeWindow";
import CTF2_OrderLimits from "./create-trade-form-2/CTF2_OrderLimits";

const CreateTradeForm2 = () => {
  const {
    m2mCurrency,
    m2mAsset,
    m2masset_price,
    setm2mCurrentStage,
    min_limit,
    max_limit,
    payment_time_limit,
    setpayment_time_limit,
    fiat_amount,
    setFiat_amount,
    token_amount,
    setToken_amount,
    payment_methods,
    setpayment_methods,

    m2mTradeType,
  } = useM2MContext();

  const { paymentMethods } = fetchPaymentMethods();
  const [disabled, setdisabled] = useState(true);

  const [showAddPaymentMethod, setShowAddPaymentMethod] = useState(false);
  const [showPaymentTimeWindow, setShowPaymentTimeWindow] = useState(false);

  useEffect(() => {
    if (token_amount && token_amount > 0) {
      let amntInCurrency = Number(
        Number(token_amount) * Number(m2masset_price)
      );
      setFiat_amount(amntInCurrency);
      if (
        m2mTradeType?.toLowerCase() == "sell" &&
        m2masset_price > m2mAsset?.available_balance
      ) {
        settoken_amountErr(`You cannot sell more than your balance`);
      } else {
        settoken_amountErr();
      }
    }
  }, [token_amount]);

  useEffect(() => {
    if (
      (min_limit &&
        min_limit > 0 &&
        max_limit &&
        max_limit > 0 &&
        token_amount &&
        token_amount > 0 &&
        payment_methods.length > 0) == true
    ) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [token_amount, min_limit, max_limit, payment_methods]);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleAddPayemntMethod = (item) => {
    let paymentArr = payment_methods;
    if (paymentArr.includes(item)) {
      let updatedpArr = paymentArr.filter((it) => it !== item);
      setpayment_methods(updatedpArr);
    } else {
      paymentArr.push(item);
      setpayment_methods(paymentArr);
    }

    if (
      min_limit &&
      min_limit > 0 &&
      max_limit &&
      max_limit > 0 &&
      token_amount &&
      token_amount > 0
    ) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }

    forceUpdate();
  };

  const handleRemovePaymentMethod = (item) => {
    let paymentArr = payment_methods;
    let updatedpArr = paymentArr.filter((it) => it !== item);
    setpayment_methods(updatedpArr);
    forceUpdate();
  };

  const ref = useRef();
  useOutsideClick(ref.current, () => {
    setShowAddPaymentMethod(false);
    setShowPaymentTimeWindow(false);
  });

  const handleShowNextTab = () => {
    setm2mCurrentStage(3);
  };

  const [token_amountErr, settoken_amountErr] = useState();

  const handleTokenAmount = (val) => {
    if (!val) {
      let err = `How many ${m2mAsset?.ticker} are you ${m2mTradeType}ing?`;
      settoken_amountErr(err);
      setToken_amount(val);
    } else if (
      m2mTradeType?.toLowerCase() == "sell" &&
      val > m2mAsset?.available_balance
    ) {
      settoken_amountErr(`You cannot sell more than your balance`);
      setToken_amount(val);
    } else {
      settoken_amountErr();
      setToken_amount(val);
    }
  };

  return (
    <>
      <div className="w-full md:w-[95%] flex flex-col justify-between gap-2">
        <div
          className={m2mTradeType?.toLowerCase() == "sell" ? "flex gap-2" : ""}
        >
          <div className="text-white text-sm md:text-md">Token amount</div>{" "}
          {m2mTradeType?.toLowerCase() == "sell" && (
            <div className="text-sm">
              (balance:{" "}
              <span className="text-titusYellow">
                {m2mAsset?.available_balance} {m2mAsset?.ticker}
              </span>
              )
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <div className="w-full flex items-center justify-between border-[1px] border-titusLightBorder rounded-lg py-1 px-3">
              <input
                type="number"
                className="block border-0 bg-transparent text-white font-medium text-[16px] input-no-border w-[85%]"
                value={token_amount}
                // defaultValue={0}
                onChange={(e) => handleTokenAmount(e.target.value)}
              />
              <div className="text-sm text-white w-max">{m2mAsset.ticker}</div>
            </div>
            {token_amountErr ? (
              <div className="error">{token_amountErr}</div>
            ) : null}
          </div>
          <div className="text-[11px] font-medium">
            {token_amount} {m2mAsset.ticker} ≈{" "}
            {fiat_amount && toDecimal(fiat_amount, 8)} {m2mCurrency.ticker}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <div className="text-white text-sm md:text-md">
          Order Limits (in fiat)
        </div>
        <div className="w-full md:w-[95%] flex justify-between">
          <CTF2_OrderLimits />
        </div>
      </div>

      <div className="w-full md:w-[95%] flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
        <div className="w-full md:w-[43%] flex flex-col justify-between gap-[7px] md:gap-[10px">
          <div className="text-white text-sm md:text-md">Payment method</div>
          <div className="text-[12px] font-medium">
            You can provide up to 5 methods
          </div>

          <CTF2_PaymentMethods
            payment_methods={payment_methods}
            handleRemovePaymentMethod={handleRemovePaymentMethod}
          />

          <div
            className="w-max flex gap-2 items-center btnn-dark py-[6px] px-10 md:px-14 text-sm"
            onClick={() => setShowAddPaymentMethod(true)}
            onMouseOver={() => setShowAddPaymentMethod(true)}
          >
            <FaPlus />
            <span>Add </span>
          </div>
        </div>

        <div className="w-full md:w-[43%] flex flex-col gap-2">
          <div className="text-white text-sm md:text-md">Trade Time Window</div>
          <CTF2_TradeTimeWindow
            setShowPaymentTimeWindow={setShowPaymentTimeWindow}
            showPaymentTimeWindow={showPaymentTimeWindow}
            paymentLimitWindows={paymentLimitWindows}
            payment_time_limit={payment_time_limit}
            setpayment_time_limit={setpayment_time_limit}
          />
        </div>
      </div>

      <CTF2_SelectPaymentMethod
        showAddPaymentMethod={showAddPaymentMethod}
        setShowAddPaymentMethod={setShowAddPaymentMethod}
        handleAddPayemntMethod={handleAddPayemntMethod}
        paymentMethods={paymentMethods?.data}
        payment_methods={payment_methods}
      />

      <div className="w-full flex justify-between md:justify-end gap-3 md:gap-5">
        <div
          className="w-[140px] btnn-dark py-2 text-center text-sm"
          onClick={() => setm2mCurrentStage(1)}
        >
          Previous
        </div>
        <button
          className="w-[140px] py-2 text-center text-sm font-medium"
          disabled={disabled}
          style={{
            background: disabled ? "#066156" : "#00DBC2",
            color: disabled ? "#000" : "#000",
            border: disabled && "1px solid #fff",
          }}
          onClick={handleShowNextTab}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CreateTradeForm2;
