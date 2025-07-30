import { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleDown, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserTokenBalances, fetchWalletTokens } from "../../api";
import { formatter, useOutsideClick } from "../../utils/helpers";
import { fetchCG } from "../../api/coinGecko";
import { totalWalletValueAssets } from "../../data/generalData";
import { dashActionsMenu } from "../../data/menuData";

const DashTokenEstimatedBalance = ({
  handleToggleHideAsset,
  hideAssets,
  settings,
}) => {
  const [selectedToken, setSelectedToken] = useState(totalWalletValueAssets[0]);
  const [showTokenList, setShowTokenList] = useState(false);
  const [cryptoCalculated, setcryptoCalculated] = useState(false);
  const [cryptoValue, setcryptoValue] = useState(0);
  const [walletValue, setwalletValue] = useState(0);
  const [walletBookingValue, setwalletBookingValue] = useState(0);
  const { tokenBalances } = fetchUserTokenBalances();
  const { wallet_tokens } = fetchWalletTokens();

  const handleSetToken = (item) => {
    setSelectedToken(item);
    setShowTokenList(false);
    setcryptoCalculated(false);
  };

  useEffect(() => {
    let totalInSelectedToken = 0;
    let totalInAppCurrency = 0;
    let totalBookingInAppCurrency = 0;
    if (tokenBalances) {
      async function getBals() {
        let arrData = tokenBalances?.data;
        for (let ele in arrData) {
          let item = arrData[ele];
          const { data: priceData } = await fetchCG(`/coins/${item?.id}`);
          if (priceData) {
            // In selected token
            let currentPrice = priceData?.market_data?.current_price;
            currentPrice = currentPrice && Object.entries(currentPrice);
            let cP_selTok = currentPrice?.filter(
              (obj) => obj[0] == selectedToken?.id
            );
            cP_selTok = cP_selTok && cP_selTok[0];
            cP_selTok = cP_selTok && cP_selTok[1];
            let token_bal_value =
              cP_selTok && Number(item.available_balance * cP_selTok);
            totalInSelectedToken = totalInSelectedToken + token_bal_value;

            // In app currency
            let cP_appCurr = currentPrice?.filter(
              (obj) => obj[0] == settings?.data?.currency?.ticker?.toLowerCase()
            );
            cP_appCurr = cP_appCurr && cP_appCurr[0];
            cP_appCurr = cP_appCurr && cP_appCurr[1];
            let token_bal2 =
              cP_appCurr && Number(item.available_balance * cP_appCurr);
            totalInAppCurrency = totalInAppCurrency + token_bal2;

            let t_bal_book =
              cP_appCurr && Number(item.available_balance * cP_appCurr);
            totalBookingInAppCurrency = totalBookingInAppCurrency + t_bal_book;

            if (ele == Number(arrData.length) - 1) {
              setwalletValue(totalInAppCurrency);
              setwalletBookingValue(totalBookingInAppCurrency);
              setcryptoValue(totalInSelectedToken);
              setcryptoCalculated(true);
            }
          }
        }
      }
      getBals();
    }
  }, [tokenBalances, selectedToken]);

  const history = useNavigate();

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

  const ref = useRef();
  useOutsideClick(ref.current, () => {
    // setShowTokenList(false);
  });

  return (
    <div className="w-full h-full rounded-xl md:p-5 bg-titusDashCardDarkBG flex flex-col gap-8">
      <div className="hidden w-full md:flex flex-row gap-3 justify-between items-end">
        <div className="w-max flex flex-col gap-3 h-full justify-between">
          <div className="font-semibold text-lg">Total Crypto Assets</div>

          {wallet_tokens && (
            <div className="w-max flex flex-col gap-2 text-white">
              <div className="flex gap-2 items-end">
                <div
                  onClick={handleToggleHideAsset}
                  className="flex justify-center leading-3 gap-1 font-medium text-[28px] cursor-pointer"
                >
                  <span>
                    {hideAssets ? (
                      "*****"
                    ) : cryptoCalculated && cryptoValue > 0 ? (
                      formatter(cryptoValue)?.substring(1)
                    ) : (
                      <span className="text-sm">Calculating...</span>
                    )}
                  </span>
                  {!hideAssets && cryptoCalculated && (
                    <span className="text-sm">In {selectedToken.name}</span>
                  )}
                </div>
                <div className="relative">
                  <div
                    onMouseEnter={() => {
                      setShowTokenList(true);
                    }}
                    className="flex text-sm gap-1 items-center cursor-pointer"
                  >
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
                    {totalWalletValueAssets?.map((item, i) => (
                      <div
                        key={i}
                        className="text-white hover:text-black hover:bg-titusYellow pl-4 py-2 w-full ease-in duration-300 cursor-pointer flex items-center gap-4"
                        onClick={() => handleSetToken(item)}
                      >
                        <img
                          alt=""
                          src={`/assets/images/tokens/${item.img}`}
                          width={20}
                          height={20}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                        <span>{`${item.name}`}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-xs text-red-400">NB: Fiats not added</div>
            </div>
          )}
        </div>

        <div className="h-full flex flex-col gap-3 justify-between">
          <div className="flex flex-col gap-1">
            <div className="w-full border-[1px] border-titusLightBorder rounded-md p-[5px] text-sm flex justify-between">
              <span>Available:</span>
              <span className="text-white">
                {hideAssets ? (
                  "*****"
                ) : cryptoCalculated ? (
                  <span>
                    {settings?.data?.currency?.symbol}
                    {formatter(walletValue).substring(1)}
                  </span>
                ) : (
                  "..."
                )}
              </span>
            </div>

            <div className="w-full border-[1px] border-titusLightBorder rounded-md p-[5px] text-sm flex justify-between">
              <span>Booking:</span>
              <span className="text-white">
                {hideAssets ? (
                  "*****"
                ) : cryptoCalculated ? (
                  <span>
                    {settings?.data?.currency?.symbol}
                    {formatter(walletBookingValue).substring(1)}
                  </span>
                ) : (
                  "..."
                )}
              </span>
            </div>
          </div>
          <div className="w-max flex justify-end gap-3">
            {dashActionsMenu.map((item, i) => (
              <Link
                to={item.url}
                className="w-max col-span-1 rounded-md py-2 px-5 bg-titusYellow flex justify-center items-center gap-1 ease-in duration-200 hover:scale-95"
                key={i}
              >
                <img
                  src={`/assets/images/wallet/${item?.img}`}
                  className="h-4 rounded-full"
                />
                <div className="text-sm font-medium text-black">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="p-10 w-full flex md:hidden flex-col gap-5 justify-between items-start">
        <div className="w-full flex flex-col gap-5 items-start h-full justify-between ">
          {wallet_tokens && (
            <div className="w-full flex justify-center items-end gap-2 text-white">
              <div className="flex justify-center leading-3 gap-1 font-semibold text-[28px] my-2">
                <span onClick={handleToggleHideAsset}>
                  {hideAssets ? (
                    "*****"
                  ) : cryptoCalculated && cryptoValue > 0 ? (
                    formatter(cryptoValue)?.substring(1)
                  ) : (
                    <span className="text-sm">Calculating...</span>
                  )}
                </span>
                {!hideAssets && cryptoCalculated && (
                  <span className="text-sm">In {selectedToken.name}</span>
                )}
              </div>
              <div className="relative">
                <div
                  onMouseEnter={() => {
                    setShowTokenList(true);
                  }}
                  className="flex text-sm gap-1 items-center cursor-pointer"
                >
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
                  {totalWalletValueAssets?.map((item, i) => (
                    <div
                      key={i}
                      className="text-white hover:text-black hover:bg-titusYellow pl-4 py-2 w-full ease-in duration-300 cursor-pointer flex items-center gap-4"
                      onClick={() => handleSetToken(item)}
                    >
                      <img
                        alt=""
                        src={`/assets/images/tokens/${item.img}`}
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span>{`${item.name}`}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="w-full flex flex-col gap-2">
            <div className="w-full border-[1px] border-titusLightBorder rounded-md p-[5px] text-sm flex justify-between">
              <span>Available:</span>
              <span className="text-white">
                {hideAssets ? (
                  "*****"
                ) : cryptoCalculated ? (
                  <span>
                    {settings?.data?.currency?.symbol}
                    {formatter(walletValue).substring(1)}
                  </span>
                ) : (
                  "..."
                )}
              </span>
            </div>

            <div className="w-full border-[1px] border-titusLightBorder rounded-md p-[5px] text-sm flex justify-between">
              <span>Booking:</span>
              <span className="text-white">
                {hideAssets ? (
                  "*****"
                ) : cryptoCalculated ? (
                  <span>
                    {settings?.data?.currency?.symbol}
                    {formatter(walletBookingValue).substring(1)}
                  </span>
                ) : (
                  "..."
                )}
              </span>
            </div>
            <div className="text-xs text-red-400">NB: Total cryptos only</div>
          </div>
        </div>
        <div className="w-full flex justify-between gap-3">
          {dashActionsMenu.map((item, i) => (
            <Link
              to={item.url}
              className="w-[47%] col-span-1 rounded-md py-2 px-5 bg-titusYellow flex justify-center items-center gap-1 ease-in duration-200 hover:scale-95"
              key={i}
            >
              <img
                src={`/assets/images/wallet/${item?.img}`}
                className="h-4 rounded-full"
              />
              <div className="text-sm font-medium text-black">{item.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashTokenEstimatedBalance;
