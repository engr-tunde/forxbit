import { useBuySellContext } from "../../context/buySellContext";

const BuySellTokenBalance = () => {
  const { token, currency } = useBuySellContext();
  return (
    <div className="w-max rounded-md p-2 bg-titusDashCardDarkItemBG text-sm">
      <span>Available balance</span>{" "}
      <span className="text-white font-semibold">0.0000 {token.ticker}</span>
    </div>
  );
};

export default BuySellTokenBalance;
