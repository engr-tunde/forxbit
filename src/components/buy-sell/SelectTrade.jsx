import { useBuySellContext } from "../../context/buySellContext";

const SelectTrade = () => {
  const { type, settype } = useBuySellContext();

  return (
    <div className="flex items-center justify-center gap-5 md:gap-5">
      <div
        className={`py-2 px-7 text-[15px] font-semibold cursor-pointer duration-200 ease-in rounded-lg ${
          type === "Buy"
            ? "bg-titusYellow text-black"
            : "bg-transparent text-white"
        }`}
        onClick={() => settype("Buy")}
      >
        Buy
      </div>
      <div
        className={`py-2 px-7 text-[15px] font-semibold cursor-pointer duration-200 ease-in rounded-lg ${
          type === "Sell"
            ? "bg-titusYellow text-black"
            : "bg-transparent text-white"
        }`}
        onClick={() => settype("Sell")}
      >
        Sell
      </div>
    </div>
  );
};

export default SelectTrade;
