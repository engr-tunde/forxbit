import { useEffect, useState } from "react";
import axios from "axios";
import { CHANGE_NOW_HEADERS } from "../constants/routes";

const useFetchChangeNow = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const abortController = new AbortController();
    axios
      .get(`${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`, {
        signal: abortController.signal,
        withCredentials: false,
        headers: CHANGE_NOW_HEADERS,
      })
      .then((response) => {
        console.log("response response", response);
        if (response.status !== 200) {
          throw Error("Could not fetch data from the data source");
        }
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") {
        } else {
          setLoading(false);
          setError(err.message);
          console.log(err.message);
        }
      });
    return () => abortController.abort();
  }, [url]);
  return { data, loading, error };
};

export default useFetchChangeNow;
