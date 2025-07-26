import { useEffect, useState } from "react";
import Loader from "../globals/Loader";
import { useBuySellContext } from "../../context/buySellContext";
import { checkSession } from "../../api";
import LoginBodyPopUp from "../auth/LoginBodyPopUp";

const BuyTitusAddress = () => {
  const [loading, setloading] = useState(false);
  const { recipientAddress, setrecipientAddress, errors } = useBuySellContext();
  const { session, sessionLoading } = checkSession();
  const [showLoginPopUp, setshowLoginPopUp] = useState(false);

  const handleConnectAccount = () => {
    if (recipientAddress !== "Self") {
      setloading(true);
      setTimeout(() => {
        if (!sessionLoading && !session) {
          setshowLoginPopUp(true);
        } else if (session) {
          setrecipientAddress("Self");
          setloading(false);
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (session) {
      setloading(true);
      setTimeout(() => {
        setrecipientAddress("Self");
        setloading(false);
      }, 1000);
    }
  }, [session]);

  const handleSuccessfulLogin = () => {
    setrecipientAddress("Self");
    setloading(false);
  };

  const handleCancel = () => {
    setloading(false);
  };

  return (
    <>
      <div className="mb-5">
        <div
          className={
            recipientAddress === "Self"
              ? "mt-5 w-full mx-auto text-center text-sm p-2 btnn-dark duration-200 ease-in"
              : "mt-5 w-full mx-auto text-center text-sm p-2 btnn-transparent duration-200 ease-in"
          }
          onClick={handleConnectAccount}
        >
          {loading ? (
            <Loader size={25} color="#fff" />
          ) : recipientAddress === "Self" ? (
            "Account Connected"
          ) : (
            "Connect account"
          )}
        </div>
        {errors?.connect ? <div className="error">{errors.connect}</div> : null}
      </div>
      <LoginBodyPopUp
        showLoginPopUp={showLoginPopUp}
        setshowLoginPopUp={setshowLoginPopUp}
        onSuccessfulLogin={handleSuccessfulLogin}
        onCancel={handleCancel}
      />
    </>
  );
};

export default BuyTitusAddress;
