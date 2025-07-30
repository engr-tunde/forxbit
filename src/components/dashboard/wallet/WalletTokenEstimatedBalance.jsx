import { useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaEye } from "react-icons/fa";
import { userBalances } from "../../../utils/data";
import { Link, useNavigate } from "react-router-dom";
import { dashWalletActionsMenu } from "../../../data/menuData";
import { fetchUserTokenBalances, fetchUserTokenNetworks } from "../../../api";
import { formatter } from "../../../utils/helpers";
import { balancePriceCG, useFetchCG } from "../../../api/coinGecko";

const WalletTokenEstimatedBalance = ({
  settings,
  handleToggleHideAsset,
  hideAssets,
}) => {
  const [selectedToken, setSelectedToken] = useState(userBalances[0]);
  const [hover, sethover] = useState();
  const [showTokenList, setShowTokenList] = useState(false);
  const [token_balance_value, settoken_balance_value] = useState(0);
  const { tokenBalances } = fetchUserTokenBalances();
  const { networks } = fetchUserTokenNetworks();
  // const { data: token_price } = useFetchCrypComp(
  //   `price?fsym=${selectedToken?.ticker}&tsyms=${settings?.currency?.ticker}`
  // );
  const { data: token_price } = useFetchCG(`coins/${selectedToken?.id}`);

  useEffect(() => {
    if (token_price && selectedToken && settings) {
      const balance = selectedToken.available_balance;
      const curTicker = settings?.currency?.ticker?.toLowerCase();
      const price = balancePriceCG(balance, token_price, curTicker);
      settoken_balance_value(price);
    }
  }, [token_price, selectedToken, settings]);

  useEffect(() => {
    if (tokenBalances) {
      setSelectedToken(tokenBalances?.data?.[0]);
    }
  }, [tokenBalances]);

  const handleSetToken = (item) => {
    setSelectedToken(item);
    setShowTokenList(false);
  };

  const history = useNavigate();

  const handleLink = (link) => {
    history(`${link}`, {
      state: { suppliedAsset: selectedToken?.ticker },
    });
  };
  const handleCryptoDepoLink = (link) => {
    history(`${link}`, {
      state: {
        suppliedToken: {
          network: selectedToken?.network,
          ticker: selectedToken?.ticker,
          name: selectedToken?.name,
          logoURI: selectedToken?.logoURI,
        },
      },
    });
  };

  return (
    <div className="w-full h-full rounded-xl p-5 md:p-8 bg-titusDashCardDarkBG flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start md:items-end">
        <div className="flex flex-col gap-3 justify-between">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="text-lg">Crypto Shortcuts</span>
            <FaEye onClick={handleToggleHideAsset} className="cursor-pointer" />
          </div>
          {tokenBalances && (
            <div className="flex items-end gap-2 text-white">
              <span className=" font-semibold text-[28px]">
                {hideAssets
                  ? "*****"
                  : selectedToken?.available_balance?.toFixed(3)}
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
              {/* ≈ {formatter(selectedToken.available_balance * 1500)} */}
              {settings?.currency?.symbol}
              {hideAssets
                ? "*****"
                : token_balance_value &&
                  formatter(token_balance_value)?.substring(1)}
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
          <div
            onClick={() => handleCryptoDepoLink("/dashboard/deposit-crypto")}
            // to={`/dashboard/deposit-asset/${selectedToken?.ticker?.toLowerCase()}`}
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80 cursor-pointer"
          >
            Deposit
          </div>
          <div
            // to={`/dashboard/withdraw-asset/${selectedToken?.ticker?.toLowerCase()}`}
            onClick={() => handleLink("/dashboard/withdraw-crypto")}
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80 cursor-pointer"
          >
            Withdraw
          </div>
          <div
            onClick={() => handleLink("/dashboard/transfer-crypto")}
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80 cursor-pointer"
          >
            Transfer
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
        {dashWalletActionsMenu.map((item, i) => (
          <Link
            to={item.url}
            className="col-span-1 rounded-lg p-3 md:p-2 bg-titusDashCardDarkItemBG flex items-center gap-3 hover:text-white ease-in duration-200 hover:scale-95"
            key={i}
            onMouseEnter={() => sethover(i)}
            onMouseLeave={() => sethover()}
          >
            <img
              src={
                hover == i
                  ? `/assets/images/wallet/${item?.hoverImg}`
                  : `/assets/images/wallet/${item?.img}`
              }
              className="h-10 md:h-12 bg-titusDarkBG rounded-full p-2 md:p-3"
            />
            <div className="text-sm">{item.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WalletTokenEstimatedBalance;
