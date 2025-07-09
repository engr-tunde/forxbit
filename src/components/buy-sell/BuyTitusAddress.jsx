import React, { useState } from "react";
import Loader from "../globals/Loader";
import { useBuySellContext } from "../../context/buySellContext";

const BuyTitusAddress = () => {
  const [loading, setloading] = useState(false);
  const { recipientAddress, setrecipientAddress, errors } = useBuySellContext();

  const handleConnectAccount = () => {
    if (recipientAddress !== "Self") {
      setloading(true);
      setTimeout(() => {
        setrecipientAddress("Self");
        setloading(false);
      }, 1000);
    }
  };

  return (
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
  );
};

export default BuyTitusAddress;
