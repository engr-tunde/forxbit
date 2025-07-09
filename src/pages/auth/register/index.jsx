import { useEffect } from "react";
import Head from "../../../components/Head";
import RegisterBody from "../../../components/auth/RegisterBody";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Get onboarded" />
      <RegisterBody />
    </>
  );
};

export default RegisterPage;
