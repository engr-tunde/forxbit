import { useBuySellContext } from "../../context/buySellContext";
import { successNotification } from "../../utils/helpers";

const SelectTrade = () => {
  const { type, settype } = useBuySellContext();

  const handleSelectTradeType = (item) => {
    settype(item);
    successNotification(`Trade set to ${item}`);
  };

  return (
    <div className="flex items-center gap-5 md:gap-5">
      <div
        className={
          type === "Buy"
            ? "border-b-[2px] border-b-titusYellow rounded-md text-white text-[15px] font-medium cursor-pointer duration-200 ease-in"
            : "py-[6px] text-sm font-medium cursor-pointer duration-200 ease-in"
        }
        onClick={() => handleSelectTradeType("Buy")}
      >
        Buy
      </div>
      <div
        className={
          type === "Sell"
            ? "border-b-[2px] border-b-titusYellow rounded-md text-white text-[15px] font-medium cursor-pointer duration-200 ease-in"
            : "py-[6px] text-sm font-medium cursor-pointer duration-200 ease-in"
        }
        onClick={() => handleSelectTradeType("Sell")}
      >
        Sell
      </div>
    </div>
  );
};

export default SelectTrade;
