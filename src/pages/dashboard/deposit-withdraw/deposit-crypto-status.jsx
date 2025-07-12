import { useParams } from "react-router-dom";
import Head from "../../../components/Head";
import { useState } from "react";
import DepositCryptoStatusPageBody from "../../../components/dashboard/deposit-withdraw/DepositCryptoStatusPageBody";

const depositCryptoStatus = () => {
  const { id } = useParams();
  const [status, setstatus] = useState("pending");

  return (
    <>
      <Head pageTitle="Deposit Cryptocurrencies" />
      <div className="col-span-1 md:col-span-3">
        {status == "finished" ? (
          <DepositCryptoStatusPageBody trade={data} />
        ) : (
          <DepositCryptoStatusPageBody trade={data} />
        )}
      </div>
    </>
  );
};

export default depositCryptoStatus;
