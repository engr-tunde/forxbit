import { useBuySellContext } from "../../context/buySellContext";

const {
  type,
  token,
  errors,
  seterrors,
  recipient,
  recipientAddress,
  recipientNetwork,
  bank_name,
  account_name,
  account_number,
  setpage,
} = useBuySellContext();

const handleNextToScreenTwo = () => {
  if (!Object.keys(token).length) {
    seterrors((prev) => ({ ...prev, token: `What are you ${type}ing?` }));
  } else {
    delete errors["token"];

    if (type === "Buy" && recipient === "External") {
      if (recipientAddress.length < 1) {
        seterrors((prev) => ({
          ...prev,
          address: `Where will you receive the coin to?`,
        }));
      } else {
        delete errors["address"];
        if (recipientNetwork.length < 1) {
          seterrors((prev) => ({
            ...prev,
            network: `Select your chain network?`,
          }));
        } else {
          delete errors["network"];
          setpage(2);
        }
      }
    } else if (
      type === "Buy" &&
      recipient === `${import.meta.env.VITE_APP_NAME}`
    ) {
      if (recipientAddress.length < 1) {
        seterrors((prev) => ({
          ...prev,
          address: `Connect your account first`,
        }));
      } else {
        delete errors["address"];
        setpage(2);
      }
    }
    if (type === "Sell" && recipient === "External") {
      if (bank_name.length < 1) {
        seterrors((prev) => ({
          ...prev,
          bank_name: `Bank name is missing!`,
        }));
      } else {
        delete errors["bank_name"];
        if (account_name.length < 1) {
          seterrors((prev) => ({
            ...prev,
            account_name: `Account name is not provided!`,
          }));
        } else {
          delete errors["account_name"];
          if (account_number.length < 1) {
            seterrors((prev) => ({
              ...prev,
              account_number: `Account number is missing!`,
            }));
          } else {
            delete errors["account_number"];
            setpage(2);
          }
        }
      }
    }
  }
  // return {};
};

export default handleNextToScreenTwo;
