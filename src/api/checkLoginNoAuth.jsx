import { useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;

const checkLoginNoAuth = () => {
  useEffect(() => {
    const check = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user-auth/check-session`,
        {
          withCredentials: true,
        }
      );
      console.log("response:", response);
      if (response.status === 200) {
        return true;
      } else if (response.status === 209) {
        return false;
      }
    };
    check();
  }, []);
};

export default checkLoginNoAuth;
