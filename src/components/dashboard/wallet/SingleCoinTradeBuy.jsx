import { fetchUserTokenBalances } from "../../../api";
import { useBuySellContext } from "../../../context/buySellContext";
import { formatter } from "../../../utils/helpers";
import Loader from "../../globals/Loader";
import SingleCoinBuyField from "./SingleCoinBuyField";

const SingleCoinTradeBuy = ({ suppliedAsset }) => {
  const { tokenBalances, tokenBalancesLoading } = fetchUserTokenBalances();
  const { token, settoken, token_amount, settoken_amount, errors } =
    useBuySellContext();

  const handleConfirmTransaction = () => {};

  return (
    <div className="w-full flex flex-col gap-8 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
      <div className="w-full flex flex-col gap-2 md:gap-2">
        <div className="text-sm md:text-md font-medium text-white">
          You transfer
        </div>
        <div className="">
          {tokenBalances && (
            <SingleCoinBuyField
              data={token}
              setdata={settoken}
              array={tokenBalances?.data}
              amount={token_amount}
              setamount={settoken_amount}
              errors={errors}
              type="transfer"
              assetType="cyrpto"
            />
            // <div className="w-full flex items-center justify-between relative border-[1px] border-titusLightBorder rounded-xl bg-titusDarkBG">
            //   <div className="w-[30%]">
            //     {type == "fiat" ? (
            //       <img
            //         src={data?.icon}
            //         alt={import.meta.env.VITE_APP_NAME}
            //         className="w-5 rounded-full"
            //       />
            //     ) : (
            //       <div className="relative">
            //         <img
            //           alt=""
            //           src={data.logoURI}
            //           width={20}
            //           height={20}
            //           className="md:hidden xl:block w-6 h-6 rounded-full object-cover"
            //         />
            //         {data.network && (
            //           <img
            //             alt=""
            //             src={
            //               networks &&
            //               networks?.data.filter(
            //                 (net) => net.name == data.network
            //               )[0]?.logoURI
            //             }
            //             width={20}
            //             height={20}
            //             className="absolute bottom-0 -right-1 w-[14px] h-[14px] rounded-full object-cover"
            //           />
            //         )}
            //       </div>
            //     )}
            //     <div className="text-white text-sm">
            //       {data?.ticker?.toUpperCase()}
            //     </div>
            //   </div>
            //   <div className="w-[61%] md:w-[72%] flex flex-col ">
            //     <input
            //       // disabled={disabled}
            //       type="number"
            //       // value={amount}
            //       // onChange={(e) => handleChange(e.target.value)}
            //       placeholder="Enter amount"
            //       className="w-full px-0 py-2 border-[1px] bg-transparent input-no-border placeholder:text-[15px] placeholder:font-semibold text-[15px]"
            //     />
            //   </div>
            // </div>
          )}
          {tokenBalancesLoading && <Loader color="#00dbc2" size={25} />}
          {errors?.amount ? <div className="error">{errors.amount}</div> : null}

          <div className="mt-5">
            Your balance:{" "}
            <span className="text-titusGreenFaded">
              {/* {formatter(token?.available_balance).substring(1)} {token?.ticker} */}
            </span>
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
