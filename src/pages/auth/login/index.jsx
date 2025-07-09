import { useEffect } from "react";
import Head from "../../../components/Head";
import LoginBody from "../../../components/auth/LoginBody";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Login to your account" />
      <LoginBody />
    </>
  );
};

export default LoginPage;
