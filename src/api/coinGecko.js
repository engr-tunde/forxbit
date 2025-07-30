import { useEffect, useState } from "react";
import { CG_HEADERS } from "../constants/routes";

export const useFetchCG = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // const abortController = new AbortController();

    (async function fetchData() {
      try {
        const res = await fetch(`${import.meta.env.VITE_CC_IPA_ESAB}/${url}`, {
          method: "GET",
          headers: CG_HEADERS,
        });
        if (!res.ok) {
          console.log("CG: Unable to fetch data");
          setError("Unable to fetch data");
        }
        setLoading(false);
        const response = await res.json();
        setData(response);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
        setError(error.message);
      }
      // return () => abortController.abort();
    })();
  }, [url]);

  return { data, loading, error };
};

export const fetchCG = async (url) => {
  let data;
  let loading = true;
  let error;
  try {
    const res = await fetch(`${import.meta.env.VITE_CC_IPA_ESAB}/${url}`, {
      method: "GET",
      headers: CG_HEADERS,
    });
    if (!res.ok) {
      console.log("CG: Unable to fetch data");
      error = "Unable to fetch data";
    }
    loading = false;
    const response = await res.json();
    data = response;
  } catch (error) {
    console.log("error", error);
    loading = false;
    error = error.message;
  }
  return { data, loading, error };
};

export const balancePriceCG = (balance, token_price, curTicker) => {
  let tpv = token_price?.market_data?.current_price;
  let ggg = tpv && Object.entries(tpv);
  let newVal = ggg?.filter((obj) => {
    return obj[0] == curTicker;
  });
  let coinPrice = newVal && newVal[0];
  coinPrice = coinPrice && coinPrice[1];
  let token_bal_value = coinPrice && Number(balance * coinPrice)?.toFixed(2);
  return token_bal_value;
};

export const coinPriceCG = (balance, token_price, curTicker) => {
  let tpv = token_price?.market_data?.current_price;
  let ggg = tpv && Object.entries(tpv);
  let newVal = ggg?.filter((obj) => {
    return obj[0] == curTicker;
  });
  let coinPrice = newVal && newVal[0];
  coinPrice = coinPrice && coinPrice[1];
  return coinPrice;
};
