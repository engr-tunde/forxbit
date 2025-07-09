import { useEffect, useState } from "react";
import axios from "axios";
import { errorNotification } from "../utils/helpers";
// axios.defaults.withCredentials = true;

const useTPapiFetcher = (url, headers = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // async function inittt() {
    //   try {
    //     let response = await fetch(url, {
    //       method: "get",
    //       headers,
    //     });
    //     response = await response.json();
    //     if (response.ok) {
    //       setData(response);
    //       setLoading(false);
    //     }
    //     console.log({ response });
    //   } catch (error) {
    //     setError(error);
    //     setLoading(false);
    //   }
    // }
    // inittt();

    const loadData = async (url) => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    loadData(url);

    // axios
    //   .get(url)
    //   .then((response) => {
    //     console.log(response);
    //     setData(response.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     if (err.name === "CanceledError") {
    //       setLoading(false);
    //       setError(err);
    //     } else {
    //       setLoading(false);
    //       setError(err);
    //       // errorNotification(err?.response?.data?.error);
    //     }
    //   });
  }, [url]);

  return { data, loading, error };
};

export default useTPapiFetcher;
