import { createContext, useContext, useEffect, useState } from "react";
import { paymentLimitWindows } from "../utils/data";
import { fetchCurrencies, fetchP2PTokenList } from "../api";

const M2MContext = createContext();

const M2MProvider = ({ children }) => {
  const [m2mCurrency, setm2mCurrency] = useState();
  const [m2mAsset, setm2mAsset] = useState();
  const [m2masset_price, setm2masset_price] = useState(0);
  const [m2moriginal_price, setm2moriginal_price] = useState(0);

  const { tokens } = fetchP2PTokenList();
  const { currencies } = fetchCurrencies();

  useEffect(() => {
    if (tokens) {
      let tk = tokens?.data[0];
      setm2mAsset(tk);
    }
    if (currencies) {
      let cr = currencies?.data[0];
      setm2mCurrency(cr);
    }
  }, [tokens, currencies]);

  const [m2mCurrentStage, setm2mCurrentStage] = useState(1);
  const [m2mTradeType, setm2mTradeType] = useState("Buy");

  const [m2mmargin_type, setm2mMargin_type] = useState("Fixed");
  const [m2mpercent, setm2mPercent] = useState(100);

  //   Create Ad form 2
  const [min_limit, setmin_limit] = useState(Number(5));
  const [max_limit, setmax_limit] = useState(
    // Number(10 * m2mTradeCurrencies[0].value)
    Number(10)
  );
  const [payment_time_limit, setpayment_time_limit] = useState(
    paymentLimitWindows[0]
  );
  const [fiat_amount, setFiat_amount] = useState(0);
  const [token_amount, setToken_amount] = useState(0);
  const [payment_methods, setpayment_methods] = useState([]);

  //   Create Ad form 3
  const [terms_tags, setterms_tags] = useState([]);
  const [remarks, setremarks] = useState("");
  const [auto_reply, setauto_reply] = useState("");

  const [reset, setreset] = useState(false);

  useEffect(() => {
    if (reset) {
      setm2mCurrentStage(1);
      setm2masset_price(0);
      setm2moriginal_price(0);
      setm2mTradeType("Buy");
      setm2mMargin_type("Fixed");
      setm2mPercent(100);
      setmin_limit(5);
      setmax_limit(10);
      setpayment_time_limit(paymentLimitWindows[0]);
      setFiat_amount(0);
      setToken_amount(0);
      setpayment_methods([]);
      setterms_tags([]);
      setremarks("");
      setauto_reply("");
      if (reset && tokens) {
        let tk = tokens?.data[0];
        setm2mAsset(tk);
      }
      if (reset && currencies) {
        let cr = currencies?.data[0];
        setm2mCurrency(cr);
      }
    }
  }, [reset, tokens, currencies]);

  return (
    <M2MContext.Provider
      value={{
        m2mCurrency,
        setm2mCurrency,
        m2mAsset,
        setm2mAsset,
        m2mCurrentStage,
        setm2mCurrentStage,
        m2mTradeType,
        setm2mTradeType,

        m2mmargin_type,
        setm2mMargin_type,
        m2masset_price,
        setm2masset_price,
        m2mpercent,
        setm2mPercent,
        m2moriginal_price,
        setm2moriginal_price,

        min_limit,
        setmin_limit,
        max_limit,
        setmax_limit,
        payment_time_limit,
        setpayment_time_limit,

        fiat_amount,
        setFiat_amount,
        token_amount,
        setToken_amount,
        payment_methods,
        setpayment_methods,

        terms_tags,
        setterms_tags,
        remarks,
        setremarks,
        auto_reply,
        setauto_reply,

        setreset,
      }}
    >
      {children}
    </M2MContext.Provider>
  );
};

export const useM2MContext = () => useContext(M2MContext);

export default M2MProvider;
