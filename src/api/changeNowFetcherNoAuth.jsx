import { useState } from "react";
import {
  CHANGE_NOW_HEADERS,
  CHANGE_NOW_HEADERS_AUTH,
} from "../constants/routes";

const changeNowFetcherNoAuth = async (url) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`, {
      method: "GET",
      headers: CHANGE_NOW_HEADERS_AUTH,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log("error", error);
    // const err = new Error(error);
    return error;
  }
};

export default changeNowFetcherNoAuth;
