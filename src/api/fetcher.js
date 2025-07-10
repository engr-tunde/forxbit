import { axiosInstance } from "./client";
import Cookies from "js-cookie";

export const fetcher = ({ url, withCredentials = false }) =>
  axiosInstance()
    .get(url, { withCredentials })
    .then((res) => {
      console.log("res.status", res.status);
      if (res.status == 401) {
        Cookies.remove("u-x");
        window.location.href = "/login";
      }
      return res.data;
    })
    .catch((err) => {
      console.log("fetch error", err);
      if (err.response.status == 401) {
        Cookies.remove("u-x");
        window.location.href = "/login";
      }
      throw Error(err);
    });

export const sessionFetcher = (url) =>
  axiosInstance()
    .get(url, { withCredentials: true })
    .then((res) => {
      if (res.status === 200) {
        // return true;
        return res.data;
      } else if (res.status === 401) {
        Cookies.remove("u-x");
        return false;
      }
    })
    .catch((err) => {
      console.log("err err", err);
      // if (err.response.status == 401) {
      //   Cookies.remove("u-x");
      //   // return false;
      // }
      throw Error(err);
    });
