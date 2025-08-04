import { useEffect } from "react";
import { fetchUserTokenBalances } from "../../../api";
import { useBuySellContext } from "../../../context/buySellContext";
import { formatter } from "../../../utils/helpers";
import Loader from "../../globals/Loader";
import SingleCoinBuyTokenField from "./single-coin/SingleCoinBuyTokenField";

const SingleCoinTradeBuy = ({ suppliedAsset }) => {
  const { tokenBalances, tokenBalancesLoading } = fetchUserTokenBalances();
  const { token, settoken, token_amount, settoken_amount, errors } =
    useBuySellContext();
  useEffect(() => {
    if (suppliedAsset) {
      let tk = suppliedAsset;
      settoken(tk);
    }
  }, [suppliedAsset]);

  console.log("token", token);
  const handleConfirmTransaction = () => {};

  return (
    <div className="w-full flex flex-col gap-8 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
      <div className="w-full flex flex-col gap-2 md:gap-2">
        <div className="text-sm md:text-md font-medium text-white">You buy</div>
        <div className="">
          {token && (
            <SingleCoinBuyTokenField
              data={token}
              amount={token_amount}
              setamount={settoken_amount}
              errors={errors}
              type="transfer"
            />
          )}
          {tokenBalancesLoading && <Loader color="#00dbc2" size={25} />}
          {errors?.amount ? <div className="error">{errors.amount}</div> : null}

          <div className="mt-5">
            Your balance: <span className="text-titusGreenFaded"></span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 md:gap-2">
        <div className="text-sm md:text-md font-medium text-white">
          Recipient
        </div>
        <div className=""></div>
      </div>

      <div
        className={
          token_amount && !Object.keys(errors).length
            ? "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium"
            : "w-full btnn1 py-[8px] px-8 text-center text-sm  font-medium opacity-50"
        }
        onClick={handleConfirmTransaction}
      >
        Buy {token?.ticker.toUpperCase()}
      </div>
    </div>
  );
};

export default SingleCoinTradeBuy;
