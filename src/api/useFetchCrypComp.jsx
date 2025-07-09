import { useEffect, useState } from "react";
import axios from "axios";

const useFetchCrypComp = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    axios
      .get(
        `${import.meta.env.VITE_TOKEN_INFO}/${url}&api_key=${
          import.meta.env.VITE_CRYP_COMP_IPA_YEK
        }`,
        {
          signal: abortController.signal,
        }
      )
      .then((response) => {
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

export default useFetchCrypComp;
