import { useEffect, useRef, useState } from "react";
import { fetchCurrencies, fetchP2PTokenList } from "../../../api";
import { useM2MContext } from "../../../context/m2mContext";
import { toDecimal, useOutsideClick } from "../../../utils/helpers";
import CreateTradeSelectAsset from "./create-trade-form-1/CreateTradeSelectAsset";
import CreateTradeSelectCurrency from "./create-trade-form-1/CreateTradeSelectCurrency";
import CreateTradeSelectPriceType from "./create-trade-form-1/CreateTradeSelectPriceType";
import CreateTradeSetPrice from "./create-trade-form-1/CreateTradeSetPrice";
import useFetchCrypComp from "../../../api/useFetchCrypComp";
import Loader from "../../globals/Loader";
import ErrorWidget from "./../../globals/ErrorWidget";
import HandleFuncButton from "../../forms/buttons/HandleFuncButton";

const CreateTradeForm1 = () => {
  const {
    m2mCurrency,
    m2mAsset,
    setm2mCurrentStage,
    m2mmargin_type,
    m2masset_price,
    setm2masset_price,
    m2moriginal_price,
    setm2moriginal_price,

    m2mpercent,
  } = useM2MContext();
  const { currencies, currenciesLoading, currenciesError } = fetchCurrencies();
  const { tokens, tokensLoading, tokensError } = fetchP2PTokenList();
  const { data, loading, error } = useFetchCrypComp(
    `price?fsym=${m2mAsset?.symbol}&tsyms=${m2mCurrency?.ticker}`
  );
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
    if (data) {
      const default_price = Object.values(data)[0];
      console.log("default_price", default_price);
      setm2moriginal_price(default_price);
      // setm2masset_price(default_price);
      let user_pri = Number((m2mpercent / 100) * default_price);
      setm2masset_price(user_pri);
    }
  }, [data, m2mAsset, m2mCurrency, m2mpercent]);

  useEffect(() => {
    if (loading) {
      setisSubmitting(true);
      setdisabled(true);
    }
    if (data) {
      setisSubmitting(false);
      setdisabled(false);
    }
    if (error) {
      setisSubmitting(false);
      setdisabled(true);
    }
  }, [data, loading, error]);

  return (
    <>
      <div className="w-full md:w-[80%] flex items-center flex-col md:flex-row justify-between gap-6">
        <>
          {tokens ? (
            <CreateTradeSelectAsset
              tokens={tokens?.data}
              showAssetList={showAssetList}
              setshowAssetList={setshowAssetList}
            />
          ) : null}
          {tokensLoading ? <Loader size={30} color="#eee" /> : null}
          {tokensError ? (
            <ErrorWidget error={tokensError} color="#eee" />
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
        <div className="text-white text-sm md:text-md">Select Price Type</div>
        <CreateTradeSelectPriceType />
      </div>

      <div className="w-full md:w-[40.5%] flex flex-col gap-3">
        <div className="text-white text-sm md:text-md">
          {m2mmargin_type} Price Type
        </div>
        <CreateTradeSetPrice />
      </div>

      <div className="bg-titusLightBorder h-[1px] w-full"></div>

      <div className="w-full md:w-[50%] flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="text-sm md:text-md">Your Price</div>
          <div className="text-white text-lg md:text-xl font-semibold">
            {m2mCurrency?.ticker} {toDecimal(m2masset_price, 3)}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-sm md:text-md">Average Market Price</div>
          <div className="text-white text-lg md:text-xl font-semibold">
            {m2mCurrency?.ticker} {toDecimal(m2moriginal_price, 3)}
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
