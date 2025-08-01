const SingleCoinTradeWidgetHeader = ({ tradeType, settradeType }) => {
  return (
    <div className="flex items-center gap-3">
      <div
        onClick={() => settradeType("Buy")}
        className={
          tradeType == "Buy"
            ? "w-1/3 py-2 bg-titusGreen text-black font-medium hover:opacity-75 ease-in duration-200 flex justify-center text-sm rounded-md cursor-pointer"
            : "w-1/3 py-2 bg-titusGreenDeep text-white font-medium hover:opacity-75 ease-in duration-200 flex justify-center text-sm rounded-md cursor-pointer"
        }
      >
        Buy
      </div>
      <div
        onClick={() => settradeType("Sell")}
        className={
          tradeType == "Sell"
            ? "w-1/3 py-2 bg-titusGreen text-black font-medium hover:opacity-75 ease-in duration-200 flex justify-center text-sm rounded-md cursor-pointer"
            : "w-1/3 py-2 bg-titusGreenDeep text-white font-medium hover:opacity-75 ease-in duration-200 flex justify-center text-sm rounded-md cursor-pointer"
        }
      >
        Sell
      </div>
      <div
        onClick={() => settradeType("Swap")}
        className={
          tradeType == "Swap"
            ? "w-1/3 py-2 bg-titusGreen text-black font-medium hover:opacity-75 ease-in duration-200 flex justify-center text-sm rounded-md cursor-pointer"
            : "w-1/3 py-2 bg-titusGreenDeep text-white font-medium hover:opacity-75 ease-in duration-200 flex justify-center text-sm rounded-md cursor-pointer"
        }
      >
        Swap
      </div>
    </div>
  );
};

export default SingleCoinTradeWidgetHeader;
