import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = () =>
  axios.create({
    baseURL: import.meta.env.VITE_API_URL.toString(),
    headers: {
      "u-x-key": String(Cookies.get("u-x")),
      // "Content-Type": "application/json",
    },
  });

// axiosInstance().interceptors.response.use((res) => {
//   console.log("axios response", res);
//   if (res.status === 401) {
//     Cookies.remove("u-x");
//     window.location.href = "/login";
//   }
// });
