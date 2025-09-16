import { FaTimesCircle } from "react-icons/fa";
import { useSwapContext } from "../../context/swapContext";

function SwapConfirmTrade({
  showConfirmTrade,
  setshowConfirmTrade,
  handleTrade,
}) {
  const { from_token, from_token_amount, to_token, to_token_amount } =
    useSwapContext();
  return (
    <div
      className={
        showConfirmTrade
          ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50"
          : "hidden"
      }
      style={{
        backdropFilter: showConfirmTrade ? "blur(5px)" : "",
      }}
    >
      <div className="w-[85%] mx-auto md:w-[500px] h-max bg-titusDashCardDarkBG p-7 pb-12 md:py-10 md:px-7 flex flex-col gap-8 md:gap-10">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-semibold">Confirm trade</div>
          <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
            <FaTimesCircle
              onClick={() => setshowConfirmTrade(false)}
              className="text-xl"
            />
          </div>
        </div>
        <div className="text-sm text-center text-titusChatText leading-6">
          Are you sure you want to swap{" "}
          <span className="text-titusYellow text-[16px]">
            {from_token_amount} {from_token?.ticker?.toUpperCase()}
          </span>{" "}
          for{" "}
          <span className="text-titusGreenFaded text-[16px]">
            {to_token_amount}
          </span>{" "}
          worth of{" "}
          <span className="text-titusGreenFaded text-[16px]">
            {to_token?.ticker?.toUpperCase()}
          </span>
          ?
        </div>
        <div
          className="w-full btnn1 py-[10px] px-8 flex justify-center items-center gap-2 text-sm  font-medium"
          onClick={handleTrade}
        >
          <span>Confirm Swap</span>
          <img
            src="/assets/images/icons/home-icons/Asset-Swap-02.svg"
            alt=""
            className="w-5"
          />
        </div>
      </div>
    </div>
  );
}

export default SwapConfirmTrade;
