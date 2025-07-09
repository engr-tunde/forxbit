import { useEffect } from "react";
import Head from "../../../components/Head";
import VerifyLoginBody from "../../../components/auth/VerifyLoginBody";

const VerifyLoginPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Verify Login" />
      <VerifyLoginBody />
    </>
  );
};

export default VerifyLoginPage;
