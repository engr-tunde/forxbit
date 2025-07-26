import { useBuySellContext } from "../../context/buySellContext";

const SelectTrade = () => {
  const { type, settype } = useBuySellContext();

  return (
    <div className="flex items-center gap-5 md:gap-5">
      <div
        className={
          type === "Buy"
            ? "border-b-[2px] border-b-titusYellow rounded-md text-white text-[15px] font-medium cursor-pointer duration-200 ease-in"
            : "py-[6px] text-sm font-medium cursor-pointer duration-200 ease-in"
        }
        onClick={() => settype("Buy")}
      >
        Buy
      </div>
      <div
        className={
          type === "Sell"
            ? "border-b-[2px] border-b-titusYellow rounded-md text-white text-[15px] font-medium cursor-pointer duration-200 ease-in"
            : "py-[6px] text-sm font-medium cursor-pointer duration-200 ease-in"
        }
        onClick={() => settype("Sell")}
      >
        Sell
      </div>
    </div>
  );
};

export default SelectTrade;
