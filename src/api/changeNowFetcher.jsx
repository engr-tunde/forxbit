import { useState } from "react";
import { CHANGE_NOW_HEADERS } from "../constants/routes";

// const changeNowFetcher = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetcherFunc = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`,
//         {
//           method: "GET",
//           headers: CHANGE_NOW_HEADERS,
//         }
//       );
//       const response = await res.json();
//       if (response) {
//         setData(response);
//         setLoading(false);
//       }
//     } catch (error) {
//       setLoading(false);
//       setError(error);
//     }
//     console.log("changeNowFetcher response", response);
//   };

//   fetcherFunc();

//   return { data, loading, error };
// };

const changeNowFetcher = async (url) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_CHANGE_N_API_URI}/${url}`, {
      method: "GET",
      headers: CHANGE_NOW_HEADERS,
    });
    const response = await res.json();
    return response;
  } catch (error) {
    console.log("error", error);
    // const err = new Error(error);
    return error;
  }
};

export default changeNowFetcher;
