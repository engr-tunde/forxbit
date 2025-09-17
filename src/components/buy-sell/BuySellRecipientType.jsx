import { useBuySellContext } from "../../context/buySellContext";

const BuySellRecipientType = ({ setrecipientAddressVal, setrecipientVAl }) => {
  const { setrecipientAddress, setrecipient, type, recipient } =
    useBuySellContext();
  return (
    <div
      className={`
        ${
          recipient === setrecipientVAl &&
          "border-[2px] border-titusYellow text-white px-2 py-2"
        }
           rounded-md text-white text-[13px] cursor-pointer duration-200 ease-in
      `}
      onClick={() => {
        setrecipientAddress(setrecipientAddressVal);
        setrecipient(setrecipientVAl);
      }}
    >
      {type === "Buy"
        ? `${setrecipientVAl} Address`
        : `${setrecipientVAl} Account`}
    </div>
  );
};

export default BuySellRecipientType;
