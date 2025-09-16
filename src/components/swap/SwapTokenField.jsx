import { useEffect } from "react";
// import CurrencyAssetDropdownMini from "../globals/trade/CurrencyAssetDropdownMini";
import SwapAssetDropdownMini from "./SwapAssetDropdownMini";
import { useSwapContext } from "../../context/swapContext";

const SwapTokenField = ({
  token,
  settoken,
  array,
  token_amount,
  settoken_amount,
  // setto_token_amount,
  // to_token,
  editable,
  checkCalculating = false,
}) => {
  const {
    from_token,
    to_token,
    from_token_amount,
    calculateAmounts,
    calculating,
  } = useSwapContext();

  const handleChange = (val) => {
    settoken_amount(val);
    if (from_token && to_token) {
      calculateAmounts(val);
    }
  };
  useEffect(() => {
    if (from_token && to_token && from_token_amount) {
      calculateAmounts(from_token_amount);
    }
  }, [from_token, to_token, from_token_amount]);

  return (
    <div className="w-full flex items-center justify-between relative rounded-xl bg-titusDarkBG px-3">
      <div className="w-full flex items-center gap-3">
        <img
          src={token?.image}
          alt={import.meta.env.VITE_APP_NAME}
          className="w-8 rounded-full"
        />
        <div className="w-full flex flex-col">
          {editable ? (
            <input
              type="number"
              value={token_amount}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Enter amount"
              className="w-full px-0 py-2 bg-transparent input-no-border placeholder:text-[15px] placeholder:font-semibold text-[15px]"
            />
          ) : (
            <div className="w-full py-2 text-[15px]">
              {checkCalculating && calculating
                ? "Calculating..."
                : token_amount}
            </div>
          )}
        </div>
      </div>

      <SwapAssetDropdownMini data={token} setdata={settoken} array={array} />
    </div>
  );
};

export default SwapTokenField;
