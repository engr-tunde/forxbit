import { useBuySellContext } from "../../context/buySellContext";

const BuySellRecipientType = ({ setrecipientAddressVal, setrecipientVAl }) => {
  const { setrecipientAddress, setrecipient, type, recipient } =
    useBuySellContext();
  return (
    <div
      className={
        recipient === setrecipientVAl
          ? "border-b-[2px] border-b-titusYellow rounded-md text-white text-[13px] font-medium cursor-pointer duration-200 ease-in"
          : "py-[6px] text-sm font-medium cursor-pointer duration-200 ease-in"
      }
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
