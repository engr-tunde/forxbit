import { createContext, useContext, useState } from "react";
import { changeNowFetcher } from "../api/changeNow";

const SwapContext = createContext();

const SwapProvider = ({ children }) => {
  const [page, setpage] = useState(1);
  const [recipient_address, setrecipient_address] = useState();
  const [from_token, setfrom_token] = useState(null);
  const [to_token, setto_token] = useState(null);
  const [from_token_amount, setfrom_token_amount] = useState();
  const [to_token_amount, setto_token_amount] = useState();
  const [show_recipient, setshow_recipient] = useState(false);
  const [status, setstatus] = useState(4);

  const [errors, seterrors] = useState({});
  const [calculating, setcalculating] = useState(false);

  const calculateAmounts = async (fromAmnt) => {
    setcalculating(true);
    const toAmount = await changeNowFetcher(
      `v2/exchange/estimated-amount?fromCurrency=${from_token?.ticker}&toCurrency=${to_token?.ticker}&fromAmount=${fromAmnt}&toAmount=&fromNetwork=${from_token?.network}&toNetwork=${to_token?.network}&flow=standard`
    );
    if (toAmount) {
      if (toAmount?.error?.length > 0) {
        errors.from_token_amount = toAmount?.message;
        setto_token_amount(0);
      } else {
        delete errors["from_token_amount"];
        const toAmnt = toAmount?.toAmount;
        setto_token_amount(toAmnt);
      }
      setcalculating(false);
    }
  };

  return (
    <SwapContext.Provider
      value={{
        page,
        setpage,
        recipient_address,
        setrecipient_address,
        from_token,
        setfrom_token,
        to_token,
        setto_token,
        from_token_amount,
        setfrom_token_amount,
        to_token_amount,
        setto_token_amount,
        show_recipient,
        setshow_recipient,

        errors,
        seterrors,
        status,
        setstatus,

        calculateAmounts,
        calculating,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
};

export const useSwapContext = () => useContext(SwapContext);

export default SwapProvider;
