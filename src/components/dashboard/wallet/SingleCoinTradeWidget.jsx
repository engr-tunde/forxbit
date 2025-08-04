import { useEffect, useState } from "react";
import SingleCoinTradeWidgetHeader from "./SingleCoinTradeWidgetHeader";
import SingleCoinTradeBuy from "./SingleCoinTradeBuy";
import { useBuySellContext } from "../../../context/buySellContext";

const SingleCoinTradeWidget = ({ suppliedAsset }) => {
  const [tradeType, settradeType] = useState("Buy");

  return (
    <div className="flex flex-col gap-4 w-full bg-titusDashCardDarkBG px-3 md:px:5 py-5">
      <SingleCoinTradeWidgetHeader
        tradeType={tradeType}
        settradeType={settradeType}
      />
      <SingleCoinTradeBuy suppliedAsset={suppliedAsset} />
    </div>
  );
};

export default SingleCoinTradeWidget;
