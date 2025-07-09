import { createContext, useContext, useState } from "react";
import { buySellTradeAssets } from "../data/generalData";

const SwapContext = createContext();

const SwapProvider = ({ children }) => {
  const [page, setpage] = useState(1);
  const [recipient_address, setrecipient_address] = useState("");
  const [recipient_network, setrecipient_network] = useState("");
  const [from_token, setfrom_token] = useState(null);
  const [to_token, setto_token] = useState(null);
  const [from_token_amount, setfrom_token_amount] = useState(0);
  const [to_token_amount, setto_token_amount] = useState(0);
  const [show_recipient, setshow_recipient] = useState(false);
  const [status, setstatus] = useState(4);

  const [errors, seterrors] = useState({});

  return (
    <SwapContext.Provider
      value={{
        page,
        setpage,
        recipient_address,
        setrecipient_address,
        recipient_network,
        setrecipient_network,
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
      }}
    >
      {children}
    </SwapContext.Provider>
  );
};

export const useSwapContext = () => useContext(SwapContext);

export default SwapProvider;
