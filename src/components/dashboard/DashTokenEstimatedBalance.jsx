import { useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaEye } from "react-icons/fa";
import { userBalances } from "../../utils/data";
import { Link } from "react-router-dom";
import { fetchUserTokenBalances, fetchUserTokenNetworks } from "../../api";
import useFetchCrypComp from "../../api/useFetchCrypComp";
import { formatter } from "../../utils/helpers";

const DashTokenEstimatedBalance = ({
  handleToggleHideAsset,
  hideAssets,
  settings,
}) => {
  const [selectedToken, setSelectedToken] = useState(userBalances[0]);
  const [showTokenList, setShowTokenList] = useState(false);
  const { tokenBalances } = fetchUserTokenBalances();
  const { networks } = fetchUserTokenNetworks();
  const { data: token_price } = useFetchCrypComp(
    `price?fsym=${selectedToken?.ticker}&tsyms=${settings?.data?.currency?.ticker}`
  );
  let token_price_value = token_price && Object.values(token_price)[0];
  let token_bal_value =
    token_price_value &&
    Number(selectedToken.balance * token_price_value).toFixed(2);

  useEffect(() => {
    if (tokenBalances) {
      setSelectedToken(tokenBalances?.data?.[0]);
    }
  }, [tokenBalances]);

  const handleSetToken = (item) => {
    setSelectedToken(item);
    setShowTokenList(false);
  };

  return (
    <div className="w-full h-full rounded-xl p-5 md:p-5 bg-titusDashCardDarkBG flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start md:items-end">
        <div className="flex flex-col gap-3 justify-between">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="text-lg">Estimated Balance</span>
            <FaEye onClick={handleToggleHideAsset} className="cursor-pointer" />
          </div>
          {tokenBalances && (
            <div className="flex items-end gap-2 text-white">
              <span className=" font-semibold text-[28px]">
                {/* {selectedToken.balance?.toFixed(3)} */}
                {hideAssets ? "*****" : selectedToken.balance.toFixed(3)}
              </span>
              <div className="relative">
                <div
                  onMouseEnter={() => {
                    setShowTokenList(true);
                  }}
                  className="flex text-sm gap-1 items-center cursor-pointer"
                >
                  <span className="">{selectedToken.ticker}</span>
                  <FaArrowAltCircleDown />
                </div>
                <div
                  onMouseLeave={() => setShowTokenList(false)}
                  className={
                    showTokenList
                      ? "bg-titusDarkGrey text-sm py-4 flex flex-col absolute -left-0 top-6 rounded-lg z-[2000] text-white w-[200px] shadow-md shadow-black h-[300px] overflow-y-scroll"
                      : "hidden"
                  }
                  style={{
                    backdropFilter: showTokenList ? "blur(5px)" : "",
                  }}
                >
                  {tokenBalances &&
                    tokenBalances?.data?.map((item, i) => (
                      <div
                        key={i}
                        className="text-white hover:text-black hover:bg-titusYellow pl-4 py-2 w-full ease-in duration-300 cursor-pointer flex items-center gap-4"
                        onClick={() => handleSetToken(item)}
                      >
                        <div className="relative">
                          <img
                            alt=""
                            src={item.logoURI}
                            width={20}
                            height={20}
                            className="w-5 h-5 rounded-full object-cover"
                          />
                          {item?.network && (
                            <img
                              alt=""
                              src={
                                networks?.data?.filter(
                                  (net) => net.name == item.network
                                )[0]?.logoURI
                              }
                              width={20}
                              height={20}
                              className="absolute bottom-0 -right-1 w-[10px] h-[10px] rounded-full object-cover"
                            />
                          )}
                        </div>
                        <span>{`${item.ticker}`}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          {}
          <div className="text-sm font-semibold flex items-center gap-2">
            <div className="span">
              {/* ≈ {formatter(selectedToken.balance * 1500)} */}
              {settings?.data?.currency?.symbol}
              {hideAssets ? "*****" : formatter(token_bal_value).substring(1)}
              {/* {token_bal_value} */}
            </div>
            <span
              className={
                selectedToken.change > 0 ? "text-green-500" : "text-red-500"
              }
            >
              ({selectedToken.change > 0 ? "+" : ""}
              {selectedToken.change}%)
            </span>
          </div>
        </div>
        <div className="w-full md:w-max flex justify-between md:justify-normal gap-3">
          <Link
            to=""
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80"
          >
            Deposit
          </Link>
          <Link
            to=""
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80"
          >
            Withdraw
          </Link>
          <Link
            to=""
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80"
          >
            Trade
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashTokenEstimatedBalance;
