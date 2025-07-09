import SellTradeForm1 from "./SellTradeForm1";

const SellTradeForm = ({
  currency,
  setCurrency,
  asset,
  setAsset,
  currentStage,
  setCurrentStage,
}) => {
  return (
    <div className="w-full border-[1px] border-titusLightBorder p-5 md:p-7 rounded-xl flex flex-col gap-10">
      {currentStage === 1 ? (
        <SellTradeForm1
          currency={currency}
          setCurrency={setCurrency}
          asset={asset}
          setAsset={setAsset}
          setCurrentStage={setCurrentStage}
        />
      ) : null}
    </div>
  );
};

export default SellTradeForm;
