import { formatter } from "../../../utils/helpers";

const SingleCoinMCInfo = ({
  currencySymbol,
  market_cap,
  fully_diluted_valuation,
  total_supply,
  circulating_supply,
}) => {
  return (
    <div className="w-full bg-titusDashCardDarkBG p-7 flex flex-col gap-5">
      <div className="text-white font-medium">Info</div>
      <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
        <div className="">Market Cap</div>
        <div className="text-white font-medium">
          {currencySymbol}
          {formatter(market_cap).substring(1)}
        </div>
      </div>
      <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
        <div className="">Fully Diluted Valuation</div>
        <div className="text-white font-medium">
          {currencySymbol}
          {formatter(fully_diluted_valuation).substring(1)}
        </div>
      </div>
      <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
        <div className="">Total Supply</div>
        <div className="text-white font-medium">
          {currencySymbol}
          {formatter(total_supply).substring(1)}
        </div>
      </div>
      <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
        <div className="">Circulating Supply</div>
        <div className="text-white font-medium">
          {currencySymbol}
          {formatter(circulating_supply).substring(1)}
        </div>
      </div>
    </div>
  );
};

export default SingleCoinMCInfo;
