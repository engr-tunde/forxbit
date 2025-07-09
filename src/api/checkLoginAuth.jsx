import { useEffect } from "react";
import axios from "axios";
import { errorNotification } from "../utils/helpers";
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;

const checkLoginAuth = () => {
  const history = useNavigate();
  useEffect(() => {
    const check = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/user-auth/check-session`,
        {
          withCredentials: true,
        }
      );
      try {
        if (response.status === 200) {
          errorNotification("You are already a logged in user.");
          setTimeout(() => history("/dashboard"), 1000);
        }
      } catch (error) {
        console.log("session check error", error);
        // errorNotification(error?.response?.data?.error);
      }
    };
    check();
  }, []);
};

export default checkLoginAuth;
