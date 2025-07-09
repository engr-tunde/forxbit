import React, { useEffect, useState } from "react";
import M2MHeader from "../../components/m2m/M2MHeader";
import Head from "../../components/Head";
import BuySellSectionOne from "../../components/m2m/BuySellSectionOne";
import HowP2PWorks from "../../components/m2m/HowP2PWorks";
import StartTrade from "../../components/m2m/StartTrade";
import SelectPaymentMethod from "../../components/m2m/SelectPaymentMethod";
import {
  fetchCurrencies,
  fetchOpenM2MPosts,
  fetchP2PTokenList,
} from "../../api";

const M2MPage = () => {
  const [token, setToken] = useState();
  const [type, setType] = useState("Buy");
  const [showStartTrade, setShowStartTrade] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState();
  const [currency, setCurrency] = useState();
  const [showSelectPaymentMethod, setShowSelectPaymentMethod] = useState(false);
  const [payment_method, setPayment_method] = useState("");

  const { m2mPosts, m2mPostsLoading, m2mPostsError } = fetchOpenM2MPosts();
  const { currencies, currenciesLoading, currenciesError } = fetchCurrencies();
  const { tokens, tokensLoading, tokensError } = fetchP2PTokenList();

  const [buyMax, setbuyMax] = useState(false);

  const [data, setdata] = useState();

  // useEffect(() => {
  //   if (m2mPosts) {
  //     setdata(m2mPosts?.data);
  //   }
  // }, [m2mPosts]);
  // useEffect(() => {
  //   if (currencies) {
  //     setCurrency(currencies?.data[0]);
  //   }
  // }, [currencies]);
  // useEffect(() => {
  //   if (tokens) {
  //     setToken(tokens?.data[0]);
  //   }
  // }, [tokens]);

  // useEffect(() => {
  //   if (token && currency) {
  //     let newData = m2mPosts?.data?.filter(
  //       (item) =>
  //         item.order.token.symbol === token &&
  //         item.order.type !== type &&
  //         item.order.currency.ticker === currency.ticker
  //     );
  //     setdata(newData);
  //   }
  //   if (!token && currency) {
  //     let newData = data?.filter(
  //       (item) =>
  //         item.order.type !== type &&
  //         item.order.currency.ticker === currency.ticker
  //     );
  //     setdata(newData);
  //   }
  // }, [token, m2mPosts, type, currency]);

  // useEffect(() => {
  //   if (m2mPosts) {
  //     setdata(m2mPosts?.data);
  //   }
  //   if (data) {
  //     if (type === "Buy") {
  //       let newData = data?.filter((item) => item.order.type === "Sell");
  //       if (token) {
  //         newData = newData?.filter(
  //           (item) => item.order.token.symbol === token
  //         );
  //       } else {
  //         newData = newData;
  //       }

  //       if (currency) {
  //         let newData = newData?.filter(
  //           (item) => item.order.currency.ticker === currency.ticker
  //         );
  //       } else {
  //         newData = newData;
  //       }
  //       setdata(newData);
  //     } else {
  //       let newData = data?.filter((item) => item.order.type === "Buy");
  //       if (token) {
  //         newData = newData?.filter(
  //           (item) => item.order.token.symbol === token
  //         );
  //       } else {
  //         newData = newData;
  //       }

  //       if (currency) {
  //         let newData = newData?.filter(
  //           (item) => item.order.currency.ticker === currency.ticker
  //         );
  //       } else {
  //         newData = newData;
  //       }
  //       setdata(newData);
  //     }
  //   }
  // }, [m2mPosts, token, type, currency]);

  useEffect(() => {
    if (currency) {
      let newData = data?.filter(
        (item) =>
          item.order.type !== type &&
          item.order.currency.ticker === currency.ticker
      );
      setdata(newData);
    } else {
      let newData = m2mPosts?.data?.filter((item) => item.order.type !== type);
      setdata(newData);
    }
  }, [type, currency]);
  useEffect(() => {
    if (token) {
      let newData = data?.filter(
        (item) =>
          item.order.type !== type && item.order.token.symbol === token.symbol
      );
      setdata(newData);
    } else {
      let newData = m2mPosts?.data?.filter((item) => item.order.type !== type);
      setdata(newData);
    }
  }, [type, token]);

  useEffect(() => {
    if (type === "Buy") {
      let newData = m2mPosts?.data?.filter(
        (item) => item.order.type === "Sell"
      );
      setdata(newData);
    } else {
      let newData = m2mPosts?.data?.filter((item) => item.order.type === "Buy");
      setdata(newData);
    }
  }, [m2mPosts, type]);

  return (
    <>
      <Head pageTitle={`Buy and Sell with your Preferred Traders`} />
      <div className="bg-titusDarkBG px-5 lg:px-0 relative">
        <div className="py-2">
          <M2MHeader
            setToken={setToken}
            token={token}
            type={type}
            setType={setType}
          />
          <BuySellSectionOne
            data={data}
            setdata={setdata}
            token={token}
            type={type}
            currency={currency}
            setCurrency={setCurrency}
            currencies={currencies}
            showStartTrade={showStartTrade}
            setShowStartTrade={setShowStartTrade}
            selectedTrade={selectedTrade}
            setSelectedTrade={setSelectedTrade}
          />
          <HowP2PWorks />
          {selectedTrade && (
            <StartTrade
              selectedTrade={selectedTrade}
              currency={currency}
              showStartTrade={showStartTrade}
              setShowStartTrade={setShowStartTrade}
              setSelectedTrade={setSelectedTrade}
              setShowSelectPaymentMethod={setShowSelectPaymentMethod}
              payment_method={payment_method}
              setPayment_method={setPayment_method}
              buyMax={buyMax}
              setbuyMax={setbuyMax}
            />
          )}

          <SelectPaymentMethod
            selectedTrade={selectedTrade}
            currency={currency}
            showStartTrade={showStartTrade}
            setShowStartTrade={setShowStartTrade}
            setSelectedTrade={setSelectedTrade}
            showSelectPaymentMethod={showSelectPaymentMethod}
            setShowSelectPaymentMethod={setShowSelectPaymentMethod}
            setPayment_method={setPayment_method}
          />
        </div>
      </div>
    </>
  );
};

export default M2MPage;
