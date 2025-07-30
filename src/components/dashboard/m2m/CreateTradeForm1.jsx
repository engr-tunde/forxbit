import { useEffect, useRef, useState } from "react";
import {
  fetchCurrencies,
  fetchUserTokenBalances,
  userSettings,
} from "../../../api";
import { useM2MContext } from "../../../context/m2mContext";
import { formatter, toDecimal, useOutsideClick } from "../../../utils/helpers";
import CreateTradeSelectAsset from "./create-trade-form-1/CreateTradeSelectAsset";
import CreateTradeSelectCurrency from "./create-trade-form-1/CreateTradeSelectCurrency";
import CreateTradeSelectPriceType from "./create-trade-form-1/CreateTradeSelectPriceType";
import CreateTradeSetPrice from "./create-trade-form-1/CreateTradeSetPrice";
import Loader from "../../globals/Loader";
import ErrorWidget from "./../../globals/ErrorWidget";
import HandleFuncButton from "../../forms/buttons/HandleFuncButton";
import { coinPriceCG, useFetchCG } from "../../../api/coinGecko";
import {
  TRADE_MAX_PERCENT,
  TRADE_MIN_PERCENT,
} from "../../../constants/routes";
import { useLocation } from "react-router-dom";

const CreateTradeForm1 = () => {
  const {
    m2mCurrency,
    setm2mCurrency,
    m2mAsset,
    setm2mCurrentStage,
    m2mmargin_type,
    m2mpercent,
    m2masset_price,
    m2moriginal_price,
    setm2moriginal_price,
    populate,
    populateData,
  } = useM2MContext();
  const { currencies, currenciesLoading, currenciesError } = fetchCurrencies();
  const { tokenBalances, tokenBalancesLoading, tokenBalancesError } =
    fetchUserTokenBalances();
  const { data, loading, error } = useFetchCG(`coins/${m2mAsset?.id}`);
  const location = useLocation();
  const editOrderData = location.state?.editOrderData;
  console.log("editOrderData", editOrderData);
  useEffect(() => {
    if (editOrderData) {
      // setm2mCurrency(populateData?.order)
    }
  }, [populate, populateData]);

  useEffect(() => {
    if (data && m2mAsset && m2mCurrency) {
      const balance = m2mAsset.available_balance;
      const curTicker = m2mCurrency?.ticker?.toLowerCase();
      const price = coinPriceCG(balance, data, curTicker);
      setm2moriginal_price(price);
    }
  }, [data, m2mAsset, m2mCurrency]);

  const [showCurrencyList, setshowCurrencyList] = useState(false);
  const [showAssetList, setshowAssetList] = useState(false);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [disabled, setdisabled] = useState(false);

  const ref = useRef();
  useOutsideClick(ref.current, () => {
    setshowCurrencyList(false);
    setshowAssetList(false);
  });

  useEffect(() => {
    if (loading) {
      setisSubmitting(true);
    }
    if (data) {
      setisSubmitting(false);
    }
    if (error) {
      setisSubmitting(false);
    }
  }, [data, loading, error]);

  useEffect(() => {
    if (
      !m2masset_price ||
      m2masset_price == 0 ||
      m2mpercent < TRADE_MIN_PERCENT ||
      m2mpercent > TRADE_MAX_PERCENT
    ) {
      setdisabled(true);
    } else {
      setdisabled(false);
    }
  }, [m2masset_price, m2mpercent]);

  return (
    <>
      <div className="w-full md:w-[95%] flex items-center flex-col md:flex-row justify-between gap-6">
        <>
          {tokenBalances ? (
            <CreateTradeSelectAsset
              tokens={tokenBalances?.data}
              showAssetList={showAssetList}
              setshowAssetList={setshowAssetList}
            />
          ) : null}
          {tokenBalancesLoading ? <Loader size={30} color="#eee" /> : null}
          {tokenBalancesError ? (
            <ErrorWidget error={tokenBalancesError} color="#eee" />
          ) : null}
        </>

        <>
          {currencies ? (
            <CreateTradeSelectCurrency
              currencies={currencies?.data}
              showCurrencyList={showCurrencyList}
              setshowCurrencyList={setshowCurrencyList}
            />
          ) : null}
          {currenciesLoading ? <Loader size={30} color="#eee" /> : null}
          {currenciesError ? (
            <ErrorWidget error={currenciesError} color="#eee" />
          ) : null}
        </>
      </div>

      <div className="w-full md:w-[25%] flex flex-col gap-3">
        <div className="text-white text-sm md:text-md opacity-70">
          Select Price Type
        </div>
        <CreateTradeSelectPriceType />
      </div>

      <div className="w-full md:w-[40.5%] flex flex-col gap-3">
        <div className="text-white text-sm md:text-md opacity-70">
          {m2mmargin_type} Price Type
        </div>
        <CreateTradeSetPrice />
      </div>

      <div className="bg-titusLightBorder h-[1px] w-full"></div>

      <div className="w-full md:w-[50%] flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-sm md:text-md">Your Price</div>
          <div className="text-white text-lg md:text-xl font-medium">
            {m2mCurrency?.ticker} {formatter(m2masset_price).substring(1)}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-sm md:text-md">Average Market Price</div>
          <div className="text-white text-lg md:text-xl font-medium">
            {m2mCurrency?.ticker} {m2moriginal_price}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end">
        {/* <div
          className="w-[140px] btnn1 py-2 text-center text-sm font-medium"
          onClick={() => setm2mCurrentStage(2)}
        >
          Next
        </div> */}

        <HandleFuncButton
          handleSubmit={() => setm2mCurrentStage(2)}
          title="Next"
          className="w-[140px]"
          isSubmitting={isSubmitting}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default CreateTradeForm1;
