import { useEffect } from "react";
import Head from "../../../components/Head";
import VerifyEmailBody from "../../../components/auth/VerifyEmailBody";

const VerifyEmailPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Head pageTitle="Verify Account" />
      <VerifyEmailBody />
    </>
  );
};

export default VerifyEmailPage;
