import { useEffect, useState } from "react";
import { errorNotification, successNotification } from "../../utils/helpers";
import { useSwapContext } from "../../context/swapContext";
import SwapTokenField from "./SwapTokenField";
import SwapExternalAddress from "./SwapExternalAddress";
import { FaTimesCircle } from "react-icons/fa";
import { fetchUserIPAddress } from "../../api/generalAPIs";
import {
  CG_fetchSwapTokens,
  changeNowFetcher,
  changeNowSender,
} from "../../api/changeNow";
import { useNavigate } from "react-router-dom";
import Loader from "../globals/Loader";

const SwapPageBody = () => {
  const {
    recipient_address,
    setrecipient_network,
    from_token,
    setfrom_token,
    to_token,
    setto_token,
    from_token_amount,
    setfrom_token_amount,
    to_token_amount,
    setto_token_amount,
    show_recipient,
    setshow_recipient,
    setrecipient_address,

    errors,
  } = useSwapContext();
  const history = useNavigate();

  const { tokens, tokensLoading } = CG_fetchSwapTokens();
  const [showConfirmTrade, setshowConfirmTrade] = useState(false);
  const [toTokens, settoTokens] = useState();
  const [min, setmin] = useState(null);
  // const [userIP, setuserIP] = useState("0.0.0.0");

  // Fetch To tokens
  useEffect(() => {
    let ttk;
    if (from_token) {
      ttk = tokens?.filter((item) => item != from_token);
      settoTokens(ttk);
    }
  }, [from_token]);

  // Handle errors;
  (function () {
    if (to_token_amount > 0) {
      delete errors["to_token_amount"];
    }

    console.log("errors", errors);

    if (from_token_amount > 0 || to_token_amount > 0) {
      setshow_recipient(true);
    } else {
      setshow_recipient(false);
    }
    if (recipient_address.length > 5) {
      delete errors["address"];
    }
  })();

  // Verify token minimum amount
  useEffect(() => {
    if (from_token != null && to_token != null && from_token_amount) {
      const runFunc = async () => {
        const resss = await changeNowFetcher(
          `v2/exchange/min-amount?fromCurrency=${from_token?.ticker}&toCurrency=${to_token?.ticker}&fromNetwork=${from_token?.network}&toNetwork=${to_token?.network}&flow=standard`
        );

        let minAmnt;
        if (resss) {
          minAmnt = resss.minAmount;
          setmin(minAmnt);
        }
        console.log("minimum amount check response", resss);
      };
      runFunc();
    }
  }, [from_token]);

  const handleChangeFromToToken = () => {
    if (from_token && to_token) {
      const fromtk = from_token;
      const totk = to_token;
      const fromtk_amnt = from_token_amount;
      const totk_amnt = to_token_amount;
      setfrom_token(totk);
      setto_token(fromtk);
      setfrom_token_amount(totk_amnt);
      setrecipient_address("");
      successNotification("FROM token switched to TO token");
    } else {
      errorNotification("Choose tokens first!");
    }
  };

  const handleTradeShowConfirm = () => {
    if (
      from_token_amount > 0 &&
      to_token_amount > 0 &&
      recipient_address.length &&
      setrecipient_network.length
    ) {
      setshowConfirmTrade(true);
    }
  };

  const handleTrade = async () => {
    if (
      from_token_amount > 0 &&
      to_token_amount > 0 &&
      recipient_address.length &&
      setrecipient_network.length
    ) {
      const payload = {
        fromCurrency: from_token?.ticker,
        toCurrency: to_token?.ticker,
        fromNetwork: from_token?.network,
        toNetwork: to_token?.network,
        fromAmount: from_token_amount,
        address: recipient_address,
        flow: "standard",
      };
      const otherheaders = {
        "x-forwarded-for": "0.0.0.0",
      };
      const postTrade = await changeNowSender(
        "v2/exchange",
        payload,
        otherheaders
      );
      console.log("postTrade", postTrade);

      if (!postTrade.ok) {
        errorNotification("Unable to complete trade. Please try again");
      } else {
        const response = await postTrade.json();
        console.log("response", response);
        // successNotification(
        //   "Trade successfully created! Continue on next screen"
        // );
        setTimeout(() => history(`/swap-status/${response?.id}`), 1500);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
        <div className="w-full flex flex-col gap-2 md:gap-2">
          <div className="text-sm md:text-md font-medium text-white">
            You send
          </div>
          <div className="">
            {tokens && (
              <SwapTokenField
                token={from_token}
                settoken={setfrom_token}
                array={tokens}
                token_amount={from_token_amount}
                settoken_amount={setfrom_token_amount}
                setto_token_amount={setto_token_amount}
                to_token={to_token}
              />
            )}
            {tokensLoading && <Loader color="#00dbc2" size={25} />}
            {errors?.from_token_amount ? (
              <div className="error">{errors.from_token_amount}</div>
            ) : null}
          </div>
        </div>

        {min && (
          <div className="flex gap-2 text-xs -mt-6">
            <span>Minimum allowed:</span>
            <span className="text-titusYellow">
              {min} {from_token?.ticker?.toUpperCase()}
            </span>
          </div>
        )}

        <div className="flex items-center justify-between -my-3 text-sm">
          <div className="">
            Estimated rate:{" "}
            <span className="text-titusYellow">
              {from_token_amount} {from_token?.ticker?.toUpperCase()} ~{" "}
              {to_token_amount} {to_token?.ticker?.toUpperCase()}
            </span>
          </div>
          <img
            src="/assets/images/icons/swap-2.png"
            alt=""
            className="w-10 cursor-pointer hover:scale-125 duration-200 ease-in"
            onClick={handleChangeFromToToken}
          />
        </div>

        <div className="w-full flex flex-col gap-3 md:gap-3">
          <div className="text-sm md:text-md font-medium text-white">
            You get
          </div>

          <div className="">
            {toTokens && (
              <SwapTokenField
                token={to_token}
                settoken={setto_token}
                array={toTokens}
                token_amount={to_token_amount}
                settoken_amount={setto_token_amount}
                setto_token_amount={setfrom_token_amount}
                to_token={from_token}
                disabled={true}
              />
            )}
            {errors?.to_token_amount ? (
              <div className="error">{errors.to_token_amount}</div>
            ) : null}
          </div>
        </div>

        {show_recipient ? (
          <div className="w-full flex flex-col gap-3 md:gap-3">
            <div className="text-sm md:text-md font-medium text-white">
              Recipient Address
            </div>
            <SwapExternalAddress />{" "}
          </div>
        ) : null}

        <div
          className={
            from_token_amount > 0 &&
            to_token_amount > 0 &&
            recipient_address.length &&
            setrecipient_network.length &&
            !showConfirmTrade
              ? "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium"
              : "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium opacity-50"
          }
          onClick={handleTradeShowConfirm}
        >
          Swap {from_token?.ticker.toUpperCase()} to{" "}
          {to_token?.ticker.toUpperCase()}
        </div>
      </div>

      <div
        className={
          showConfirmTrade
            ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50"
            : "hidden"
        }
        style={{
          backdropFilter: showConfirmTrade ? "blur(5px)" : "",
        }}
      >
        <div className="w-[85%] mx-auto md:w-[500px] h-max bg-titusDashCardDarkBG p-7 md:py-10 md:px-7 flex flex-col gap-8 md:gap-10">
          <div className="flex justify-between items-center">
            <div className="text-white text-xl font-semibold">
              Confirm trade
            </div>
            <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
              <FaTimesCircle
                onClick={() => setshowConfirmTrade(false)}
                className="text-xl"
              />
            </div>
          </div>
          <div className="text-sm text-center text-titusChatText leading-6">
            Are you sure you want to swap{" "}
            <span className="text-titusYellow text-[16px]">
              {from_token_amount} {from_token?.ticker?.toUpperCase()}
            </span>{" "}
            for{" "}
            <span className="text-titusGreenFaded text-[16px]">
              {to_token_amount}
            </span>{" "}
            worth of{" "}
            <span className="text-titusGreenFaded text-[16px]">
              {to_token?.ticker?.toUpperCase()}
            </span>
            ?
          </div>
          <div
            className="w-full btnn1 py-[10px] px-8 text-center text-sm  font-medium"
            onClick={handleTrade}
          >
            Confirm Swap
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapPageBody;
