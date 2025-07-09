import { useEffect } from "react";
import Head from "../../../components/Head";
import ResetPasswordBody from "../../../components/auth/ResetPasswordBody";

const ResetPasswordPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Reset Password" />
      <ResetPasswordBody />
    </>
  );
};

export default ResetPasswordPage;
