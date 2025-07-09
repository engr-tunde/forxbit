import { useEffect, useState } from "react";
import {
  CHANGE_NOW_HEADERS,
  CHANGE_NOW_HEADERS_AUTH,
} from "../constants/routes";
import useSWR from "swr";
import {
  CG_BUY_SELL_TOKENS,
  CG_SWAP_CURRENCIES,
  CG_SWAP_TO_TOKEN_AMOUNT,
} from "../constants/changenow-routes";
const controller = new AbortController();

export const changeNowFetcher = async (url) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`, {
      method: "GET",
      headers: CHANGE_NOW_HEADERS,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log("error", error);
    throw Error(error);
  }
};

export const changeNowFetcherNoAuth = async (url) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`, {
      method: "GET",
      headers: CHANGE_NOW_HEADERS_AUTH,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const changeNowSender = async (url, payload, otherheaders = null) => {
  const headers = otherheaders
    ? { ...CHANGE_NOW_HEADERS, ...otherheaders }
    : CHANGE_NOW_HEADERS;

  console.log("headers", headers);
  console.log("payload", payload);

  const res = await fetch(`${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: CHANGE_NOW_HEADERS,
  });
  return res;
};

export const useFetchChangeNow = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`,
          {
            method: "GET",
            headers: CHANGE_NOW_HEADERS,
          }
        );
        if (!res.ok) {
          setError("Unable to fetch data");
          setLoading(false);
        }
        const response = await res.json();
        setData(response);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
        setError(error.message);
      }
    })();
  }, [url]);
  return { data, loading, error };
};

export const useFetchChangeNowNoAuth = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function fetchData() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`,
          {
            method: "GET",
            headers: { Accept: "*/*" },
          }
        );
        if (!res.ok) {
          setError("Unable to fetch data");
        }
        const response = await res.json();
        setData(response);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
        setLoading(false);
        setError(error.message);
      }
    })();
  }, [url]);
  return { data, loading, error };
};

const changeFetch = async (uri) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_CHANGE_N_API_URI}/${uri}`, {
      method: "GET",
      headers: CHANGE_NOW_HEADERS,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log("changeFetch error", error);
    // return error;
    throw Error(error);
  }
};
const changeFetchNoAUth = async (uri) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_CHANGE_N_API_URI}/${uri}`, {
      method: "GET",
      headers: CHANGE_NOW_HEADERS_AUTH,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log("changeFetch error", error);
    // return error;
    throw Error(error);
  }
};
export const changeNowFetcherMutate = (url) => {
  const { data, error, mutate } = useSWR(url, changeFetch);
  return {
    data: data,
    dataLoading: !error && !data,
    dataError: error,
    mutate,
  };
};

//
//
export const CG_fetchSwapTokens = () => {
  const { data, error, mutate } = useSWR(CG_SWAP_CURRENCIES, changeFetch);
  return {
    tokens: data,
    tokensLoading: !error && !data,
    tokensError: error,
    mutate,
  };
};
export const CG_fetchSwapToTokenAmount = (
  from_token,
  to_token,
  from_amount,
  from_network,
  to_network
) => {
  console.log("fetch to amnt called");
  const { data, error, mutate } = useSWR(
    `${CG_SWAP_TO_TOKEN_AMOUNT}${from_token}&toCurrency=${to_token}&fromAmount=${from_amount}&toAmount=&fromNetwork=${from_network}&toNetwork=${to_network}&flow=fixed-rate`,
    changeFetch
  );
  return {
    toAmount: data,
    toAmountLoading: !error && !data,
    toAmountError: error,
    mutate,
  };
};

//
export const CG_fetchBuySellTokens = () => {
  const { data, error, mutate } = useSWR(CG_BUY_SELL_TOKENS, changeFetchNoAUth);
  return {
    tokens: data,
    tokensLoading: !error && !data,
    tokensError: error,
    mutate,
  };
};
