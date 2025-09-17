import { useEffect, useState } from "react";
import { errorNotification, successNotification } from "../../utils/helpers";
import { useSwapContext } from "../../context/swapContext";
import SwapTokenField from "./SwapTokenField";
import SwapExternalAddress from "./SwapExternalAddress";
import {
  CG_fetchSwapTokens,
  changeNowFetcher,
  changeNowSender,
} from "../../api/changeNow";
import { useNavigate } from "react-router-dom";
import Loader from "../globals/Loader";
import { MdChangeCircle } from "react-icons/md";
import SwapConfirmTrade from "./SwapConfirmTrade";

const SwapPageBody = () => {
  const {
    recipient_address,
    from_token,
    setfrom_token,
    to_token,
    setto_token,
    from_token_amount,
    setfrom_token_amount,
    to_token_amount,
    setto_token_amount,
    setrecipient_address,
  } = useSwapContext();
  const history = useNavigate();

  const { tokens, tokensLoading } = CG_fetchSwapTokens();
  const [showConfirmTrade, setshowConfirmTrade] = useState(false);
  const [toTokens, settoTokens] = useState();
  const [min, setmin] = useState(null);
  const [disabled, setdisabled] = useState(true);

  useEffect(() => {
    if (tokens) {
      setfrom_token(tokens[0]);
    }
  }, [tokens]);
  // Fetch To tokens
  useEffect(() => {
    let ttk;
    if (from_token) {
      ttk = tokens?.filter((item) => item != from_token);
      settoTokens(ttk);
      setto_token(ttk[0]);
    }
  }, [from_token]);

  // Verify token minimum amount
  useEffect(() => {
    if (from_token && to_token) {
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
  }, [from_token, to_token]);

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
    }
  };

  const handleTradeShowConfirm = () => {
    setshowConfirmTrade(true);
  };

  const handleTrade = async () => {
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
  };

  useEffect(() => {
    if (
      from_token &&
      to_token &&
      from_token_amount &&
      to_token_amount &&
      recipient_address
    ) {
      setdisabled(false);
    } else {
      setdisabled(true);
    }
  }, [
    from_token,
    to_token,
    from_token_amount,
    to_token_amount,
    recipient_address,
  ]);

  return (
    <>
      <div className="flex flex-col gap-8 px-5 py-7 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg ">
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
                editable={true}
                // to_token={to_token}
              />
            )}
            {tokensLoading && <Loader color="#00dbc2" size={25} />}
            {/* {errors?.from_token_amount ? (
              <div className="error">{errors.from_token_amount}</div>
            ) : null} */}
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

        <div className="flex items-center justify-center my-0 text-sm">
          <div
            className="bg-titusGreen rounded-full p-[6px]"
            onClick={handleChangeFromToToken}
          >
            <MdChangeCircle size={40} color="black" />
          </div>
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
                editable={false}
                checkCalculating={true}
              />
            )}
            {/* {errors?.to_token_amount ? (
              <div className="error">{errors.to_token_amount}</div>
            ) : null} */}
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 md:gap-3">
          <div className="text-sm md:text-md font-medium text-white">
            Recipient Address
          </div>
          <SwapExternalAddress />{" "}
        </div>

        <div
          className={`my-5 w-full btnn1 py-[12px] px-8 flex justify-center items-center gap-2 text-sm font-medium ${
            disabled && "opacity-50"
          }`}
          onClick={disabled ? null : handleTradeShowConfirm}
        >
          {from_token ? (
            <span>
              Swap {from_token?.ticker.toUpperCase()} to{" "}
              {to_token?.ticker.toUpperCase()}
            </span>
          ) : (
            <span>Swap</span>
          )}
          <img
            src="/assets/images/icons/home-icons/Asset-Swap-02.svg"
            alt=""
            className="w-5"
          />
        </div>
      </div>

      <SwapConfirmTrade
        showConfirmTrade={showConfirmTrade}
        setshowConfirmTrade={setshowConfirmTrade}
        handleTrade={handleTrade}
      />
    </>
  );
};

export default SwapPageBody;
