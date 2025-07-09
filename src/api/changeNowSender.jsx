import { useState } from "react";
import { CHANGE_NOW_HEADERS } from "../constants/routes";

const changeNowSender = async (url, payload, otherheaders = null) => {
  const headers = otherheaders
    ? { ...CHANGE_NOW_HEADERS, otherheaders }
    : CHANGE_NOW_HEADERS;
  try {
    const res = await fetch(`${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers,
    });
    console.log("res", res);
    // const response = await json.s;
    // return response;
  } catch (error) {
    console.log("error", error);
    // const err = new Error(error);
    return error;
  }
};

export default changeNowSender;
