import { createContext, useContext, useState } from "react";

const FiatDepositWithdrawContext = createContext();

const FiatDepositWithdrawProvider = ({ children }) => {
  const [page, setpage] = useState(1);
  const [currency, setcurrency] = useState();
  const [amount, setamount] = useState(0);
  const [errors, seterrors] = useState({});
  //
  const [bank_details, setbank_details] = useState();
  const [recipient, setrecipient] = useState("");
  //
  const [token, settoken] = useState();
  //
  // const [recipient, setrecipient] = useState("External");
  const [recipientAddress, setrecipientAddress] = useState("");
  const [recipientNetwork, setrecipientNetwork] = useState("");
  const [bank_name, setbank_name] = useState("");
  const [account_name, setaccount_name] = useState("");
  const [account_number, setaccount_number] = useState("");
  const [fiat_amount, setfiat_amount] = useState(0);
  const [token_amount, settoken_amount] = useState(0);

  return (
    <FiatDepositWithdrawContext.Provider
      value={{
        page,
        setpage,
        currency,
        setcurrency,
        amount,
        setamount,
        errors,
        seterrors,
        bank_details,
        setbank_details,

        recipient,
        setrecipient,
        token,
        settoken,

        recipientAddress,
        setrecipientAddress,
        recipientNetwork,
        setrecipientNetwork,
        bank_name,
        setbank_name,
        account_name,
        setaccount_name,
        account_number,
        setaccount_number,

        fiat_amount,
        setfiat_amount,
        token_amount,
        settoken_amount,
      }}
    >
      {children}
    </FiatDepositWithdrawContext.Provider>
  );
};

export const useFiatDepositWithdrawContext = () =>
  useContext(FiatDepositWithdrawContext);

export default FiatDepositWithdrawProvider;
